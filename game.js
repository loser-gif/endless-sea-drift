'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const canvas = $('ocean'), ctx = canvas.getContext('2d');
  const CELL = 40, DIR = [[0,-1],[1,0],[0,1],[-1,0]], cycle = ['wood','water','wood','food','cloth'];
  // Full CSS-resolution focal plane; half-unit authored pixel sprites, bounded 30fps.
  const art = {}, reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let seaBase, atmosphere, hudTime = 0, rendered = 0;
  const quality = {pixel: 1, fps: 30};
  function sprite(name,w,h,paint) {
    const c=document.createElement('canvas');c.width=w;c.height=h;
    const g=c.getContext('2d');
    const r=(x,y,w,h,color)=>{g.fillStyle=color;g.fillRect(x,y,w,h);};
    paint(g,r);art[name]=c;
  }
  function makeArt() {
    sprite('shadow',64,64,(g)=>{const a=g.createRadialGradient(32,32,3,32,32,32);a.addColorStop(0,'#062b3baa');a.addColorStop(.55,'#06374965');a.addColorStop(1,'#06374900');g.fillStyle=a;g.fillRect(0,0,64,64);});
  }
  makeArt();
  SeaArt.enhance(art,sprite);
  const keys = new Set();
  let s, width, height, scale, cx, cy, last = 0, stickId = null, joy = {x:0,y:0};
  const key = (x,y) => `${x},${y}`;
  const cell = p => [Math.floor(p.x/CELL+.5),Math.floor(p.y/CELL+.5)];
  const length = p => Math.hypot(p.x,p.y);
  const distance = (a,b) => Math.hypot(a.x-b.x,a.y-b.y);
  const clock = t => `${String(Math.floor(t/60)).padStart(2,'0')}:${String(Math.floor(t%60)).padStart(2,'0')}`;
  function reset() {
    s = {tiles:new Map(),player:{x:0,y:40},supplies:{wood:8,cloth:2,food:3,water:3},hunger:100,thirst:100,time:0,kills:0,cargo:[],monsters:[],shots:[],cargoTimer:0,monsterTimer:8,fireTimer:0,spawn:0,angle:-Math.PI/2,building:false,preview:[2,0],step:0,paused:true,ended:false,message:'摇杆移动 · 靠近漂浮物后打捞',messageTime:8};
    for(let y=-1;y<=1;y++) for(let x=-1;x<=1;x++) s.tiles.set(key(x,y),{x,y,hp:100});
    for(let i=0;i<6;i++) spawnCargo((Math.random()-.5)*180,-100-i*55);
    clearInput(); resize(); hud();
  }
  function spawnCargo(x,y,kind) { s.cargo.push({x,y,kind:kind || cycle[s.spawn++%5],phase:Math.random()*6}); }
  function candidates() {
    const out = new Map();
    if(s.tiles.size>=81) return [];
    for(const t of s.tiles.values()) for(const [dx,dy] of DIR) {
      const x=t.x+dx,y=t.y+dy;
      if(!s.tiles.has(key(x,y))) out.set(key(x,y),[x,y]);
    }
    return [...out.values()];
  }
  function canBuild(x,y) { return s.tiles.size<81 && !s.tiles.has(key(x,y)) && DIR.some(([dx,dy])=>s.tiles.has(key(x+dx,y+dy))); }
  function nearest(p) {
    let best=null,d=Infinity;
    for(const t of s.tiles.values()) { const n=Math.hypot(t.x*CELL-p.x,t.y*CELL-p.y); if(n<d){d=n;best=t;} }
    return best;
  }
  function damage(t) {
    t.hp-=18;
    if(t.hp>0) return;
    s.tiles.delete(key(t.x,t.y));
    // Only boards connected to the central weapon platform survive.
    const seen=new Set(), pending=s.tiles.has('0,0')?[[0,0]]:[];
    while(pending.length) {
      const [x,y]=pending.pop(), k=key(x,y);
      if(seen.has(k)) continue;
      seen.add(k);
      for(const [dx,dy] of DIR) if(s.tiles.has(key(x+dx,y+dy))&&!seen.has(key(x+dx,y+dy))) pending.push([x+dx,y+dy]);
    }
    for(const k of s.tiles.keys()) if(!seen.has(k)) s.tiles.delete(k);
    resize();
    if(!s.tiles.size) finish('木筏被海怪摧毁，航行结束。');
  }
  function say(message) {s.message=message;s.messageTime=5;hud();}
  function act(action) {
    if(s.paused||s.ended) return;
    if(action==='collect') {
      let count=0;
      s.cargo=s.cargo.filter(item=>{if(distance(item,s.player)>115)return true;s.supplies[item.kind]+=item.kind==='wood'?2:1;count++;return false;});
      say(count?`打捞了 ${count} 份物资`:'没有够得着的物资，向筏边移动试试');
    } else if(action==='build') {
      s.building=!s.building;s.preview=candidates()[0]||[2,0];
      say(s.building?'点绿色边格扩建 · 每格 2 木材；摇杆选格 + 放置':'返回移动模式');
    } else if(action==='place') {
      if(!s.building) return;
      const [x,y]=s.preview;
      if(s.supplies.wood<2) return say('木材不足，需要 2 木材');
      if(!canBuild(x,y)) return say('请选择相邻的空边格，最多 81 格');
      s.tiles.set(key(x,y),{x,y,hp:100});s.supplies.wood-=2;resize();say('新木板已固定 · −2 木材');
    } else if(action==='eat'||action==='drink') {
      const resource=action==='eat'?'food':'water', stat=action==='eat'?'hunger':'thirst';
      if(s[stat]>=100) return say('状态已满，无需消耗');
      if(!s.supplies[resource]) return say('物资不足，去打捞一些吧');
      s.supplies[resource]--;s[stat]=Math.min(100,s[stat]+(action==='eat'?32:38));say(action==='eat'?'吃下食物 · 饱腹 +32':'喝下淡水 · 水分 +38');
    } else if(action==='repair') {
      if(![...s.tiles.values()].some(t=>t.hp<100)) return say('所有木板完好');
      if(s.supplies.wood<1||s.supplies.cloth<1) return say('修补需要 1 木材 + 1 布料');
      s.supplies.wood--;s.supplies.cloth--;for(const t of s.tiles.values())t.hp=Math.min(100,t.hp+45);
      say('全筏修补 +45 耐久 · −1 木材 −1 布料');
    }
    hud();
  }
  function hud() {
    for(const stat of ['hunger','thirst']) {$ (stat).value=s[stat];$(stat+'Text').textContent=Math.ceil(s[stat]);}
    for(const r of Object.keys(s.supplies)) $(r).textContent=s.supplies[r];
    $('voyage').textContent=`第 ${String(Math.floor(s.time/120)+1).padStart(2,'0')} 天 · ${clock(s.time)} · ${s.tiles.size} 格 · 击退 ${s.kills}`;
    $('notice').textContent=s.messageTime>0?s.message:(s.building?'扩建中 · 2 木材 / 格 · B 返回移动':'自动鱼叉炮在线 · 打捞 E · 吃 / 喝 1 / 2 · 修补 R');
    $('build').setAttribute('aria-pressed',String(s.building));$('place').disabled=!s.building;
  }
  function showDialog(title,text,button) {
    $('dialogTitle').textContent=title;$('dialogText').textContent=text;$('resume').textContent=button;$('overlay').hidden=false;$('resume').focus();
  }
  function finish(reason) {s.ended=true;s.paused=true;clearInput();showDialog('漂流终章',`${reason} 生存 ${clock(s.time)}，击退 ${s.kills} 只海怪。`,'重新启航');}
  function pause() {if(s.paused||s.ended)return;s.paused=true;clearInput();showDialog('暂泊片刻','海面已暂停，饥渴与战斗都将等待你回来。','继续漂流');}
  function update(dt) {
    s.time+=dt;s.hunger=Math.max(0,s.hunger-.48*dt);s.thirst=Math.max(0,s.thirst-.7*dt);
    if(!s.hunger||!s.thirst){finish(!s.hunger?'食物耗尽，你已饥饿难支。':'淡水耗尽，你已口渴难支。');return;}
    s.messageTime-=dt;s.step-=dt;
    let x=Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft'))+joy.x;
    let y=Number(keys.has('KeyS')||keys.has('ArrowDown'))-Number(keys.has('KeyW')||keys.has('ArrowUp'))+joy.y;
    const norm=Math.hypot(x,y);if(norm>1){x/=norm;y/=norm;}
    if(s.building) {
      if(norm>.25&&s.step<=0){const axis=Math.abs(x)>Math.abs(y)?0:1;s.preview[axis]=Math.max(-42,Math.min(42,s.preview[axis]+Math.sign(axis===0?x:y)));s.step=.17;}
    } else {
      for(const [dx,dy] of [[x*90*dt,0],[0,y*90*dt]]) {
        const p={x:s.player.x+dx,y:s.player.y+dy};if(s.tiles.has(key(...cell(p))))s.player=p;
      }
    }
    s.cargoTimer-=dt;if(s.cargoTimer<=0){spawnCargo((Math.random()-.5)*280,-310);s.cargoTimer=1.9;}
    for(const c of s.cargo){c.x+=5*dt;c.y+=23*dt;c.phase+=dt;}
    s.cargo=s.cargo.filter(c=>c.y<520);
    s.monsterTimer-=dt;
    if(s.monsterTimer<=0){
      if(s.monsters.length<12){const a=Math.random()*Math.PI*2;s.monsters.push({x:Math.cos(a)*390,y:Math.sin(a)*390,hp:55,bite:0,angle:0,speed:28+Math.random()*12+Math.min(s.time/30,12)});}
      s.monsterTimer=Math.max(4,11-s.time/45);
    }
    for(const m of s.monsters) {
      const t=nearest(m);if(!t)break;
      const dx=t.x*CELL-m.x,dy=t.y*CELL-m.y,d=Math.hypot(dx,dy);m.angle=Math.atan2(dy,dx);m.bite-=dt;
      if(d>36){m.x+=dx/d*m.speed*dt;m.y+=dy/d*m.speed*dt;}
      else if(m.bite<=0){damage(t);m.bite=1.2;if(s.ended)return;}
    }
    if(!s.tiles.has(key(...cell(s.player)))){const t=nearest(s.player);s.player={x:t.x*CELL,y:t.y*CELL};}
    s.fireTimer-=dt;
    if(s.fireTimer<=0) {
      let target=null,best=265;
      for(const m of s.monsters)if(length(m)<best){target=m;best=length(m);}
      if(target){s.angle=Math.atan2(target.y,target.x);s.shots.push({x:target.x,y:target.y,life:.16});target.hp-=22;s.fireTimer=.72;
        if(target.hp<=0){s.kills++;spawnCargo(target.x,target.y,'food');s.monsters=s.monsters.filter(m=>m!==target);}}
    }
    for(const shot of s.shots)shot.life-=dt;s.shots=s.shots.filter(shot=>shot.life>0);
    hudTime-=dt;if(hudTime<=0){hud();hudTime=.1;}
  }
  function resize() {
    const rect=canvas.getBoundingClientRect();width=rect.width;height=rect.height;
    canvas.width=Math.ceil(width/quality.pixel);canvas.height=Math.ceil(height/quality.pixel);ctx.setTransform(canvas.width/width,0,0,canvas.height/height,0,0);ctx.imageSmoothingEnabled=false;
    let ex=220,ey=210;for(const t of s.tiles.values()){ex=Math.max(ex,Math.abs(t.x*40)+100);ey=Math.max(ey,Math.abs(t.y*40)+100);}
    const portrait=height>width,top=portrait?210:24,bottom=portrait?176:30;
    scale=Math.max(.15,Math.min(2.4,(width-28)/(ex*1.55),(height-top-bottom)/(ey*1.55)));
    cx=width/2;cy=top+(height-top-bottom)/2;
    SeaArt.resize(width,height,cy);
    // Screen-sized gradients are cached on resize, never blurred per frame.
    seaBase=document.createElement('canvas');seaBase.width=canvas.width;seaBase.height=canvas.height;
    const g=seaBase.getContext('2d'), ocean=g.createLinearGradient(0,0,width*.35,height);
    g.scale(seaBase.width/width,seaBase.height/height);
    ocean.addColorStop(0,'#7e9d8e');ocean.addColorStop(.22,'#367e80');ocean.addColorStop(.58,'#145365');ocean.addColorStop(1,'#061b30');
    g.fillStyle=ocean;g.fillRect(0,0,width,height);
    const pool=g.createRadialGradient(cx-width*.12,cy-height*.05,0,cx-width*.12,cy-height*.05,width*.48);
    pool.addColorStop(0,'#4fb2a13d');pool.addColorStop(.45,'#207d8220');pool.addColorStop(1,'#062b3a00');g.fillStyle=pool;g.fillRect(0,0,width,height);
    atmosphere=document.createElement('canvas');atmosphere.width=seaBase.width;atmosphere.height=seaBase.height;
    const a=atmosphere.getContext('2d'), glow=a.createRadialGradient(width*.2,0,0,width*.2,0,height*.85);
    a.scale(atmosphere.width/width,atmosphere.height/height);
    glow.addColorStop(0,'#ffd086a0');glow.addColorStop(.6,'#e8c28a18');glow.addColorStop(1,'#fff0');a.fillStyle=glow;a.fillRect(0,0,width,height);
    // Cached slanted light shafts and distance haze; no per-frame filters.
    a.save();
    for(let i=0;i<3;i++) {
      const x=width*(.12+i*.13);
      const beam=a.createLinearGradient(x,0,x+width*.2,height*.8);
      beam.addColorStop(0,'#ffe4a405');beam.addColorStop(1,'#e8d7ad00');
      a.fillStyle=beam;a.beginPath();a.moveTo(x,0);a.lineTo(x+width*.045,0);
      a.lineTo(x+width*.36,height*.85);a.lineTo(x+width*.17,height*.85);a.fill();
    }
    a.restore();
    const edge=a.createRadialGradient(cx,cy,Math.min(width,height)*.22,cx,cy,Math.max(width,height)*.75);
    edge.addColorStop(0,'#102b4200');edge.addColorStop(.55,'#03152b24');edge.addColorStop(1,'#010716c0');a.fillStyle=edge;a.fillRect(0,0,width,height);
  }
  function rect(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(Math.round(x),Math.round(y),w,h);}
  function stamp(name,x,y,w,h) {const a=art[name];ctx.drawImage(a,Math.round(x),Math.round(y),w||a.width/(a.unit||1),h||a.height/(a.unit||1));}
  function shadow(x,y,w,h) {stamp('shadow',x-w/2,y-h/2,w,h);}
  function waterRing(x,y,r,alpha) {
    ctx.strokeStyle=`rgba(164,214,198,${alpha*.7})`;ctx.lineWidth=1;ctx.beginPath();ctx.ellipse(x,y,r,r*.3,0,.15,Math.PI*1.8);ctx.stroke();
  }
  function draw() {
    ctx.drawImage(seaBase,0,0,width,height);
    const time=reducedMotion?0:s.time;
    SeaArt.ocean(ctx,width,height,time);
    ctx.globalAlpha=1;
    ctx.save();ctx.translate(cx,cy);ctx.scale(scale,scale);
    for(const m of s.monsters){shadow(m.x+15,m.y+24,115,62);ctx.save();ctx.globalAlpha=.14;ctx.translate(m.x+6,m.y+22);ctx.scale(1,.32);ctx.rotate(m.angle);stamp('monster',-32,-20,64,40);ctx.restore();}
    for(const c of s.cargo){
      const bob=Math.round(Math.sin((reducedMotion?0:c.phase)*2)*2);
      shadow(c.x+5,c.y+11,44,20);waterRing(c.x,c.y+10,19,.24);
      ctx.save();ctx.translate(c.x,c.y+bob);ctx.rotate(Math.sin((reducedMotion?0:c.phase)*1.6)*.065);
      stamp(c.kind,-16,-20);ctx.restore();
      waterRing(c.x-2,c.y+12,23+Math.sin(time*2+(reducedMotion?0:c.phase))*3,.13);
    }
    for(const t of s.tiles.values()){shadow(t.x*40+16,t.y*40+29,80,63);rect(t.x*40-15,t.y*40+16,44,20,'#021e2b80');}
    for(const t of s.tiles.values()){
      const x=t.x*40-20,y=t.y*40-20;
      stamp('board'+((t.x*3+t.y+400)%4),x,y);
      if(!s.tiles.has(key(t.x-1,t.y))){rect(x,y+2,2,33,'#d9c38e');}
      if(!s.tiles.has(key(t.x,t.y+1))){
        rect(x+2,y+36,36,2,'#172f31');rect(x+4,y+38,31,1,'#b6c3a1');
        ctx.globalAlpha=.25+.12*Math.sin(time*1.8+t.x);rect(x+5,y+46,27,1,'#9de0cd');ctx.globalAlpha=1;
      }
      if(!s.tiles.has(key(t.x+1,t.y)))rect(x+38,y+3,2,44,'#0c2834b0');
      if(!s.tiles.has(key(t.x,t.y-1)))rect(x+1,y,37,2,'#e7cf94');
      if(!s.tiles.has(key(t.x,t.y+1))){
        waterRing(x+20,y+48,22,.38);
        // A few local foam flecks, no particle simulation or unbounded allocation.
        for(let j=0;j<3;j++){
          const phase=(time*.65+t.x*.37+j*.31)%1;
          ctx.globalAlpha=Math.sin(phase*Math.PI)*.6;
          rect(x+7+j*11+phase*5,y+49+phase*7,4-phase*2,1,'#dcf6d8');
          if(j===1)rect(x+12+phase*13,y+45-Math.sin(phase*Math.PI)*7,1,2,'#fff2cb');
        }ctx.globalAlpha=1;
      }
      if(t.hp<100){
        ctx.globalAlpha=(1-t.hp/100)*.55;rect(x+1,y+1,38,35,'#243c40');ctx.globalAlpha=1;
        rect(x+11,y+9,2,9,'#493e33');rect(x+13,y+17,3,8,'#493e33');
        rect(x+3,y+33,34,2,'#3b4036');rect(x+3,y+33,34*t.hp/100,2,'#e4b87b');
      }
    }
    SeaArt.deck(ctx,art,s.tiles,time);
    if(s.building){
      for(const [x,y] of candidates()){rect(x*40-18,y*40-18,36,36,'#89bca63b');rect(x*40-6,y*40-1,12,2,'#c8e2b5');rect(x*40-1,y*40-6,2,12,'#c8e2b5');}
      ctx.strokeStyle=canBuild(...s.preview)?'#f3dba3':'#eb8974';ctx.lineWidth=2;ctx.strokeRect(s.preview[0]*40-19,s.preview[1]*40-19,38,38);
    }
    for(const m of s.monsters){
      waterRing(m.x,m.y+9,34,.28);
      const swim=reducedMotion?0:Math.sin(time*5+m.speed);
      ctx.save();ctx.translate(m.x,m.y+swim*1.4);ctx.rotate(m.angle);ctx.scale(1,1+swim*.025);
      // Tail pivots separately from the lit body; collision stays in simulation space.
      ctx.save();ctx.translate(-13,0);ctx.rotate(swim*.22);
      ctx.drawImage(art.monster,0,0,40,80,-19,-20,20,40);ctx.restore();
      ctx.drawImage(art.monster,40,0,88,80,-12,-20,44,40);
      if(!reducedMotion&&Math.sin(time*1.3+m.speed)>.985)rect(17,-3,5,2,'#396c6b');ctx.restore();
      if(m.hp<55){rect(m.x-17,m.y-27,34,2,'#224957');rect(m.x-17,m.y-27,34*m.hp/55,2,'#e0b68a');}
    }
    ctx.strokeStyle='#d4e5c528';ctx.lineWidth=1;ctx.setLineDash([3,7]);ctx.beginPath();ctx.arc(s.player.x,s.player.y,115,0,Math.PI*2);ctx.stroke();ctx.setLineDash([]);
    function cannon(){
      shadow(13,18,60,32);rect(-13,10,29,7,'#122730aa');stamp('turret',-20,-20);
      const recoil=reducedMotion?0:Math.max(0,(s.fireTimer-.55)/.17)*3;
      const idle=reducedMotion?0:Math.sin(time*1.4)*.022;
      ctx.save();ctx.translate(2,4);ctx.rotate(s.angle+idle);ctx.globalAlpha=.35;stamp('barrel',-4-recoil,-8);ctx.restore();
      ctx.save();ctx.rotate(s.angle+idle);stamp('barrel',-4-recoil,-8);ctx.restore();
      rect(-10,-12,2,3,'#fff3bd');
    }
    function player(){const p=s.player;shadow(p.x+8,p.y+9,36,20);ctx.save();ctx.fillStyle='#152735a0';ctx.beginPath();ctx.moveTo(p.x-8,p.y);ctx.lineTo(p.x+18,p.y+17);ctx.lineTo(p.x+28,p.y+14);ctx.lineTo(p.x+7,p.y-5);ctx.fill();ctx.restore();stamp('player',p.x-14,p.y-27);}
    if(s.player.y<0){player();cannon();}else{cannon();player();}
    for(const shot of s.shots){
      ctx.globalAlpha=shot.life/.16;ctx.strokeStyle='#fff0c2';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(shot.x,shot.y);ctx.stroke();
      for(let i=0;i<5;i++){const a=i*2.4;rect(shot.x+Math.cos(a)*11,shot.y+Math.sin(a)*8,3,2,'#def4df');}
    }
    ctx.globalAlpha=1;ctx.restore();
    for(const shot of s.shots)SeaArt.glow(cx+shot.x*scale,cy+shot.y*scale,35,shot.life/.16);
    if(s.tiles.has('-1,-1'))SeaArt.glow(cx-43*scale,cy-41*scale,25*scale,.6);
    SeaArt.glow(cx-45*scale,cy-58*scale,55*scale,.18);
    ctx.drawImage(atmosphere,0,0,width,height);SeaArt.finish(ctx);
  }
  function clearInput(){keys.clear();joy={x:0,y:0};stickId=null;$('thumb').style.transform='';}
  const stick=$('stick');
  function moveStick(e){if(e.pointerId!==stickId)return;const r=stick.getBoundingClientRect(),dx=e.clientX-r.left-r.width/2,dy=e.clientY-r.top-r.height/2,n=Math.hypot(dx,dy),limit=32;joy={x:dx/Math.max(limit,n),y:dy/Math.max(limit,n)};$('thumb').style.transform=`translate(${joy.x*limit}px,${joy.y*limit}px)`;}
  stick.addEventListener('pointerdown',e=>{if(s.paused||stickId!==null)return;e.preventDefault();stickId=e.pointerId;stick.setPointerCapture(e.pointerId);moveStick(e);});
  stick.addEventListener('pointermove',moveStick);
  for(const name of ['pointerup','pointercancel','lostpointercapture'])stick.addEventListener(name,e=>{if(e.pointerId===stickId)clearInput();});
  document.querySelectorAll('[data-action]').forEach(button=>button.addEventListener('click',()=>act(button.dataset.action)));
  canvas.addEventListener('pointerdown',e=>{if(!s.building||s.paused)return;const r=canvas.getBoundingClientRect();s.preview=cell({x:(e.clientX-r.left-cx)/scale,y:(e.clientY-r.top-cy)/scale});act('place');});
  const bindings={KeyE:'collect',KeyB:'build',Digit1:'eat',Digit2:'drink',KeyR:'repair',Enter:'place'};
  window.addEventListener('keydown',e=>{
    if(s.paused){if((e.code==='Space'||e.code==='Enter')&&!e.repeat){e.preventDefault();$('resume').click();}return;}
    if(bindings[e.code]||['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space','Escape','KeyP'].includes(e.code)) e.preventDefault();
    keys.add(e.code);if(e.repeat)return;
    if(bindings[e.code])act(bindings[e.code]);if(e.code==='Escape'||e.code==='KeyP')pause();
  });
  window.addEventListener('keyup',e=>keys.delete(e.code));
  $('pause').addEventListener('click',pause);
  $('resume').addEventListener('click',()=>{if(s.ended)reset();s.paused=false;$('overlay').hidden=true;clearInput();last=performance.now();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});window.addEventListener('blur',pause);
  window.addEventListener('resize',resize);window.visualViewport?.addEventListener('resize',resize);
  document.addEventListener('contextmenu',e=>e.preventDefault());document.addEventListener('gesturestart',e=>e.preventDefault(),{passive:false});
  reset();
  function frame(now){const dt=Math.min((now-last)/1000,.05);last=now;if(!s.paused)update(dt);if(now-rendered>=1000/quality.fps-1){draw();rendered=now;}requestAnimationFrame(frame);}
  requestAnimationFrame(frame);
  if('serviceWorker' in navigator && window.isSecureContext){
    navigator.serviceWorker.register('./sw.js').then(()=>navigator.serviceWorker.ready).then(()=>{$('offline').textContent='离线资源已就绪 · 可添加到主屏幕';}).catch(()=>{$('offline').textContent='离线缓存未完成，可联网游玩并稍后重试';});
  } else {$('offline').textContent='可在线游玩；离线安装需要 HTTPS 或 localhost';}
})();
