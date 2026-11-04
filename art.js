'use strict';
// XI·A: cached pixel materials, sparse foam, and bounded Canvas 2D light.
window.SeaArt = (() => {
  const surface=(w,h)=>{const c=document.createElement('canvas');c.width=w;c.height=h;return c;};
  const poly=(g,pts,c)=>{g.fillStyle=c;g.beginPath();pts.forEach(([x,y],i)=>i?g.lineTo(x,y):g.moveTo(x,y));g.closePath();g.fill();};
  // Pixel-rasterized swells share the same small, broken clusters as the sprites.
  // Cusp: soft dawn brass and ivory rims; reuse existing sprite pixels and draw budget.
  const palette={brass:'#ddbe91',light:'#f6e2bd',shade:'#1b3037',wet:'#213634'};
  const waves=[],foam=[];
  for(let v=0;v<6;v++){
    const c=surface(192,48),g=c.getContext('2d');
    // A translucent shoulder above a deep trough gives each swell volume.
    for(let x=0;x<190;x++){
      const y=Math.round(15+Math.sin(x/43+v)*5+Math.sin(x/19+v)*2),a=Math.sin(x/192*Math.PI);
      for(let k=0;k<18;k++){
        g.globalAlpha=a*Math.sin(k/18*Math.PI)*.16;
        g.fillStyle=k<7?'#78b6a8':'#032238';g.fillRect(x,y+k-5,1,1);
      }
    }
    for(let x=0;x<190;x+=2){
      const y=Math.round(15+Math.sin(x/43+v)*5+Math.sin(x/19+v)*2);
      const a=Math.sin(x/192*Math.PI);
      g.globalAlpha=a*.35;g.fillStyle='#032439';g.fillRect(x,y+3,3,9);
      g.globalAlpha=a*.28;g.fillStyle='#328f94';g.fillRect(x,y,3,3);
      if((x+v*7)%17<8){g.globalAlpha=a*.45;g.fillStyle='#8cc6b7';g.fillRect(x,y,2,1);}
      // Crest: tiny specular flecks on the left shoulder, baked into the same six waves.
      // Replace broad rim flecks; taper the cluster so it never becomes a white stripe.
      const shoulder=Math.max(0,1-Math.abs(x-58)/34);
      if((x*7+v)%31<4&&shoulder>0){g.globalAlpha=a*shoulder*.48;g.fillStyle='#e3dfbc';g.fillRect(x,y-1,2,1);}
    }
    waves.push(c);
    const f=surface(48,12),fg=f.getContext('2d');
    for(let j=0;j<4;j++){
      const x=3+j*11,y=4+(j+v)%3;
      fg.fillStyle='#328f94';fg.fillRect(x-1,y+1,8,3);
      fg.fillStyle='#b4cec0';fg.fillRect(x,y,5+j%2,1);
      fg.fillStyle='#e2d9b9';fg.fillRect(x+1,y-1,3,1);
    }
    foam.push(f);
  }
  const halo=surface(64,64),hg=halo.getContext('2d'),rad=hg.createRadialGradient(32,32,0,32,32,32);
  rad.addColorStop(0,'#ffedbc88');rad.addColorStop(.22,'#ffc77844');rad.addColorStop(1,'#e9cb8200');hg.fillStyle=rad;hg.fillRect(0,0,64,64);
  let bloom,bg,depth,dg,mask,vignette,seaMist,stormSky,fw=0,fh=0,focus=.5;
  function resize(w,h,focusY=h*.5) {
    fw=w;fh=h;focus=focusY/h;
    bloom=surface(Math.ceil(w/8),Math.ceil(h/8));bg=bloom.getContext('2d');
    depth=surface(Math.ceil(w/6),Math.ceil(h/6));dg=depth.getContext('2d');
    mask=surface(depth.width,depth.height);const m=mask.getContext('2d'),a=m.createLinearGradient(0,0,0,mask.height);
    a.addColorStop(0,'#000');a.addColorStop(Math.max(.03,focus-.36),'#0006');a.addColorStop(Math.max(.05,focus-.20),'#0000');
    a.addColorStop(Math.min(.85,focus+.21),'#0000');a.addColorStop(Math.min(.96,focus+.43),'#0006');a.addColorStop(1,'#000e');m.fillStyle=a;m.fillRect(0,0,mask.width,mask.height);
    // One cached distance wash: pale horizon, cool sea shoulder, clear focal water.
    // Draw before world sprites so even expanded rafts and distant cargo stay crisp.
    seaMist=surface(192,128);const mg=seaMist.getContext('2d'),mist=mg.createLinearGradient(0,0,0,128);
    mist.addColorStop(0,'#b8c9bd28');mist.addColorStop(.22,'#a5bdb52a');
    mist.addColorStop(.46,'#8fafa51c');mist.addColorStop(.70,'#315e6810');mist.addColorStop(1,'#315e6800');
    mg.fillStyle=mist;mg.fillRect(0,0,192,128);
    // One distant landform baked into the same wash, never a gameplay site/sprite.
    // Low-resolution interpolation softens its ridge; the foot dissolves into sea haze.
    const land=mg.createLinearGradient(0,19,0,56);
    land.addColorStop(0,'#557a792e');land.addColorStop(.48,'#557a7938');land.addColorStop(1,'#557a7900');
    mg.fillStyle=land;mg.beginPath();mg.moveTo(108,55);
    mg.bezierCurveTo(118,50,119,39,128,37);mg.bezierCurveTo(134,36,136,25,143,23);
    mg.bezierCurveTo(150,18,154,33,160,34);mg.bezierCurveTo(169,34,170,46,184,55);
    mg.closePath();mg.fill();
    // Gale: replace the flat storm wash with the dawn slate family, cached on resize.
    // Same single overlay pass and opacity; no extra clouds, filters or rain.
    stormSky=surface(96,64);const sg=stormSky.getContext('2d'),sky=sg.createLinearGradient(0,0,0,64);
    sky.addColorStop(0,'#202e38');sky.addColorStop(.55,'#293c45');sky.addColorStop(1,'#20363d');
    sg.fillStyle=sky;sg.fillRect(0,0,96,64);
    vignette=surface(96,64);const vg=vignette.getContext('2d'),vr=vg.createRadialGradient(48,32,12,48,32,55);
    // Slate-teal shadow keeps the warm rims in the same light family as the HUD brass.
    vr.addColorStop(0,'#202e3800');vr.addColorStop(.55,'#202e3818');vr.addColorStop(1,'#202e38bb');vg.fillStyle=vr;vg.fillRect(0,0,96,64);
  }
  function glow(x,y,size,alpha=.4) {bg.globalAlpha=alpha;bg.drawImage(halo,(x-size)/8,(y-size*.6)/8,size/4,size*.15);}
  function ocean(g,w,h,t) {
    bg.clearRect(0,0,bloom.width,bloom.height);
    for(let i=0;i<155;i++){
      const d=((i*71)%991)/991,size=70+d*240;
      const x=((i*139.7+t*(3+d*4))%(w+size))-size,y=(d*(h+80)+t*(1+d*2))%(h+80)-40;
      // Quiet focal water: detail and contrast increase outside the raft silhouette.
      const quiet=Math.abs(x+size*.5-w*.5)<w*.16&&Math.abs(y-h*focus)<h*.21;
      g.globalAlpha=quiet?.30:y<h*(focus-.20)?.96:.82;g.drawImage(waves[i%6],Math.round(x),Math.round(y),size,14+d*45);
    }
    // Fixed cache budget: distant whitecaps stay outside the quiet focal water.
    for(let i=0;i<18;i++){
      const x=(i*137+t*5)%(w+60)-60,y=(i*79) % h;
      if(Math.abs(x+24-w*.5)<w*.21&&Math.abs(y-h*focus)<h*.24)continue;
      g.globalAlpha=.16+.10*(.5+.5*Math.sin(t*.4+i));
      g.drawImage(foam[i%foam.length],Math.round(x),y,48,12);
    }
    // Broken caustics, confined to the lit left shoulder of the focal plane.
    for(let i=0;i<32;i++){
      const x=(i*97.13+t*4)%w,y=h*.27+(i*43.77)%(h*.55);
      // Reuse each caustic: warm shoulder, quieter cool troughs; no extra layer.
      const shoulder=Math.max(0,1-Math.abs(x-(w*.29+y*.17))/(w*.24));
      const a=(.06+.04*Math.sin(t*.7+i))*(.65+.35*shoulder);g.globalAlpha=a;g.fillStyle=shoulder>.45?'#c6cca0':'#69b5b1';
      for(let j=0;j<13;j++){const xx=x+j*3,yy=y+Math.round(Math.sin(j*.55+i+t*.3)*5);g.fillRect(Math.round(xx),Math.round(yy),3,1);if(j>4&&j<11)g.fillRect(Math.round(xx+3),Math.round(yy+9-j*.4),2,1);}
    }
    for(let i=0;i<75;i++){
      const d=i/75,y=d*h,spread=15+d*w*.2;
      const x=w*.29+y*.17+Math.sin(i*12.7+t*.22)*spread;
      const len=3+(Math.sin(i*2.1)*.5+.5)*(9+d*24),alpha=(.15+.35*(.5+.5*Math.sin(i*4+t*.6)))*(1-d*.7);
      g.globalAlpha=alpha;g.fillStyle='#ffe6ab';g.fillRect(Math.round(x),Math.round(y),len,1+i%2);
      if(i%3===0)glow(x,y,20+d*30,alpha*.7);
    }
    g.globalAlpha=1;
    // Static, bounded atmosphere; fade out above the focal band, without a hard horizon.
    g.save();g.imageSmoothingEnabled=true;
    g.drawImage(seaMist,0,0,w,Math.max(1,h*(focus-.20)));
    g.restore();
  }
  function finish(g,tiles,cx=0,cy=0,scale=1) {
    // Downsample once, then alpha-mask into the far/near bands. No filter or readback.
    // The focal band (including all initial raft boards) has exactly zero blur alpha.
    dg.globalCompositeOperation='source-over';dg.clearRect(0,0,depth.width,depth.height);
    dg.imageSmoothingEnabled=true;dg.drawImage(g.canvas,0,0,depth.width,depth.height);
    dg.globalCompositeOperation='destination-in';dg.drawImage(mask,0,0);
    // Clear every surviving board, including expanded rafts. Padding covers upsampling.
    if(tiles)for(const tile of tiles.values()){
      const x=(cx+(tile.x*40-20)*scale)*depth.width/fw,y=(cy+(tile.y*40-20)*scale)*depth.height/fh;
      dg.clearRect(Math.floor(x)-2,Math.floor(y)-2,Math.ceil(40*scale*depth.width/fw)+5,Math.ceil(52*scale*depth.height/fh)+5);
    }
    g.save();g.imageSmoothingEnabled=true;g.drawImage(depth,0,0,fw,fh);
    g.globalCompositeOperation='screen';g.globalAlpha=.65;g.drawImage(bloom,-4,-2,fw+8,fh+4);g.restore();
  }
  function enhance(art,sprite) {
    const fine=(name,w,h,paint)=>{sprite(name,w*2,h*2,paint);art[name].unit=2;};
    for(let v=0;v<4;v++)fine('board'+v,40,52,(g,r)=>{
      r(0,1,80,99,'#152c30');r(2,72,76,25,'#45372b');
      for(let j=0;j<4;j++){
        const y=j*18; r(2,y+1,75,17,'#4c382b');r(3,y+2,73,13,['#ae824b','#bc9255','#a77b48','#c19a60'][(v+j)%4]);
        r(3,y+1,73,1,'#f7d99b');r(3,y+3,73,1,'#d5b478');r(4,y+14,71,1,'#805433');r(4,y+15,71,2,'#332b26');
        for(let k=0;k<14;k++){
          const x=5+(k*19+j*13+v*17)%65,yy=y+5+(k*3+v)%8;
          r(x,yy,Math.min(76-x,3+(k*7)%18),1,['#8b633c','#cca570','#ad824b','#dfbb7c'][k%4]);
        }
        // Grain: cached end pores and broken seam AO; keep the broad face quiet.
        for(const end of [0,1]){
          const edge=end?72:6;
          r(end?70:6,y+4,3,9,'#89613c');
          for(let k=0;k<4;k++){
            const len=3+(k+j+v)%5,yy=y+5+k*2;
            r(end?edge-len:edge,yy,len,1,k%2?'#765136':'#986f43');
            r(end?edge-len-2:edge+len,yy+1,2,1,'#bb925b');
          }
          r(end?66:7,y+13,6,1,'#654932');
        }
        for(let k=0;k<5;k++){
          const sx=15+k*10+(j+v)%3;
          r(sx,y+12,4+(k+v)%4,2,'#766344');
          r(sx+2,y+14,3+(k+j)%3,1,'#384c46');
          if((k+j+v)%3===0)r(sx+1,y+12,3,1,'#8caa94');
        }
        const x=19+(v*17+j*13)%39;
        r(x,y+7,9,4,'#986d40');r(x+2,y+8,5,2,'#5c422d');r(x-4,y+6,12,1,'#dfb97b');r(x+3,y+11,10,1,'#dbb375');
        for(const x of [9,68]){r(x,y+5,3,4,'#493c30');r(x,y+5,2,2,'#e4cc97');r(x+1,y+7,1,1,'#849083');}
      }
      // Brine: dry end grain above a broken salt tide mark, teal-soaked foot below.
      // Baked into the four existing boards; no new surface or per-frame marks.
      for(let y=75;y<98;y+=4){
        r(4,y,71,2,y<84?'#735133':'#203c43');
        r(9+v*3,y,44-v*5,1,y<84?'#968365':'#416361');
      }
      for(let k=0;k<8;k++){
        const x=8+k*8, y=84+(k+v)%3, len=3+(k+v)%3;
        r(x,y-1,len+1,3,'#40534b');
        r(x,y,len,1,'#9caa8f');
        if((k+v)%3===0)r(x+1,y-1,2,1,'#c9d8b1');
        r(x+2,y+4,2,2,'#294b50');
      }
      r(2,74,74,1,'#d9c08a');r(1,2,2,70,'#f0d394');r(77,2,2,94,'#1c3036');
      // Keel: cached wet timber rolls into cool under-hull AO and a narrow contact edge.
      // Stay inside the old opaque foot (and 80x104 cache); no silhouette or draw-cost growth.
      r(4,94,72,4,'#243b3d');r(6,94,68,1,'#36504b');
      r(4,98,72,2,'#192f34');r(4,100,72,2,'#10262e');
      // Lashings are braided pixel strands, not thick vertical outlines.
      for(const x of [3,73]){r(x,3,3,89,'#665c43');for(let y=4;y<92;y+=4){r(x,y,2,2,'#c9be8a');r(x+1,y+2,2,1,'#e1cf99');}}
    });
    fine('rope',22,18,(g,r)=>{
      for(let y=0;y<27;y++)for(let x=0;x<39;x++){
        const dx=(x-20)/1.3,dy=y-14,d=Math.sqrt(dx*dx+dy*dy);
        if(d>4&&d<13){const ring=Math.floor(d)%4;r(x+2,y+6,1,1,['#413b2c','#a58d5b','#e0c58a','#776947'][ring]);}
      }
      for(let i=0;i<15;i++){r(5+i,27+Math.floor(Math.sin(i*.25)*3),2,2,i%3?'#bb9f69':'#e0c38a');}
      r(15,14,10,2,'#102f3a');
    });
    fine('lantern',14,24,(g,r)=>{
      r(8,1,12,2,'#d5be82');r(7,3,2,6,'#d5be82');r(19,3,2,6,'#485c59');
      poly(g,[[6,10],[12,6],[18,6],[23,11],[23,37],[19,42],[6,40],[4,35],[4,13]],'#293e43');
      // Lantern: warm brass lip and quieter ember glass, baked into the existing sprite.
      r(6,12,14,3,'#d2b370e6');r(7,17,12,17,'#db9349e6');r(9,18,8,12,'#ffdb86d9');r(11,19,4,9,'#fff2c4cc');
      r(6,15,2,22,'#c2a46de6');r(18,15,2,22,'#635f46');r(6,35,15,3,'#c6a975d9');r(8,40,13,2,'#8a8c68');
    });
    fine('player',28,36,(g,r)=>{
      // Explorer: hat crown/brim, hair, collar, scarf, split coat, belt and boots.
      poly(g,[[12,51],[24,50],[25,65],[22,69],[11,69],[10,65]],'#142c39');
      poly(g,[[31,50],[43,51],[43,66],[46,68],[44,71],[31,70]],'#102531');
      r(14,53,5,11,'#52616a');r(33,54,4,10,'#3d515e');r(12,66,11,2,'#a1a18a');r(33,67,10,1,'#87978a');
      poly(g,[[14,27],[37,26],[45,34],[44,54],[29,57],[26,50],[23,56],[11,53],[10,35]],'#19394c');
      poly(g,[[14,29],[24,30],[23,51],[13,52],[12,38]],'#759d9d');
      poly(g,[[25,30],[36,29],[40,36],[38,52],[28,53]],'#416c80');
      r(14,31,2,17,'#b5c6af');r(17,35,4,1,'#d4d4ad');r(27,33,1,16,'#a2b5a6');r(35,34,2,15,'#254b62');
      r(11,48,30,3,'#714f34');r(24,48,5,4,'#e2bb72');r(25,49,3,2,'#3b4e50');
      r(8,32,5,16,'#b58560');r(7,33,3,11,'#edcca0');r(9,46,4,5,'#f6d5a6');r(43,35,5,14,'#8c674f');r(43,35,2,12,'#cf9f72');
      r(38,44,7,10,'#604c37');r(38,44,7,2,'#be995d');r(40,47,2,2,'#debb7d');
      poly(g,[[16,11],[36,11],[39,17],[37,28],[30,31],[20,28],[16,22]],'#a96d4d');
      r(18,13,15,11,'#e6b783');r(19,15,7,10,'#f6d6a4');r(25,25,9,2,'#d49a6d');r(30,19,3,2,'#293b40');r(34,20,3,3,'#f2c48d');r(28,26,4,1,'#704c3d');
      r(15,14,4,9,'#5f4937');r(17,17,3,5,'#8c603a');r(35,13,3,5,'#68482f');
      poly(g,[[13,6],[19,2],[33,2],[39,6],[40,12],[46,14],[45,17],[11,17],[8,14],[13,12]],'#624a34');
      r(16,5,21,6,'#bd9252');r(19,3,14,2,'#dfb76d');r(15,10,24,3,'#745638');r(11,13,32,2,'#e9cc8d');r(14,13,22,1,'#fff0bc');r(37,5,2,6,'#8f683d');r(20,5,9,1,'#edcd89');
      poly(g,[[16,27],[26,29],[36,27],[36,31],[23,34],[15,30]],'#df9359');r(17,27,7,2,'#ffe0a0');r(22,33,4,12,'#bc633e');r(22,34,2,8,'#edac69');r(23,44,4,2,'#efc18a');
      // Single-pixel tailoring and wear; deliberate clusters, no noise overlay.
      for(let i=0;i<7;i++){r(18+i*2,6+i%2,1,1,'#d3ac69');}
      r(24,21,2,1,'#f9dfaf');r(29,27,3,1,'#8a5b43');
      r(28,37,1,1,'#dfc48a');r(28,42,1,1,'#d5bd87');r(16,47,5,1,'#355568');
      r(10,44,3,1,'#fff0c1');r(43,46,3,1,'#d9b580');r(17,58,1,5,'#7e8981');r(35,57,1,5,'#657b7c');
      r(14,39,6,5,'#527d86');r(14,39,6,1,'#aabdab');r(16,41,1,1,'#e5c68a');
    });
    fine('turret',40,40,(g,r)=>{
      poly(g,[[8,19],[17,10],[61,10],[72,21],[72,66],[63,74],[15,74],[8,64]],'#1b3037');
      r(12,20,56,45,'#6f6046');r(15,18,50,3,'#e0c28a');r(14,63,52,5,'#3a4947');r(18,69,43,2,'#9f9670');
      for(const x of [17,59])for(const y of [24,57]){r(x-2,y-2,7,7,'#394a48');r(x,y,3,3,'#e5d0a1');r(x,y,1,1,'#fff0bc');}
      poly(g,[[23,26],[31,18],[50,18],[59,29],[57,55],[49,62],[30,60],[22,51]],'#304b55');
      r(27,29,28,23,'#82958c');r(31,24,18,3,'#ded9b3');r(27,30,3,21,'#e5d7ac');r(31,54,18,3,'#456369');r(50,30,5,23,'#415d65');
      for(let i=0;i<5;i++){r(17+i*9,21,3,1,'#a99465');r(14,32+i*5,2,1,'#9e946e');}
      r(30,33,2,9,'#99b3a5');r(46,33,2,17,'#375765');r(31,48,5,1,'#e9dfb4');
      r(34,26,11,26,'#c2c4a8');r(37,29,5,23,'#8b9e96');r(34,26,2,23,palette.light);
      for(let i=0;i<7;i++){r(21+i*5,59,2,3,'#b6aa7f');r(59,27+i*4,3,1,'#8a967e');}
    });
    fine('barrel',40,16,(g,r)=>{
      poly(g,[[3,7],[12,5],[70,5],[77,9],[77,24],[69,27],[10,25],[3,20]],palette.shade);
      r(8,8,63,13,'#4a6d76');r(8,8,63,3,'#c4cbb3');r(9,11,61,2,'#829d9b');r(10,19,61,3,'#2c4d5e');r(71,10,4,12,palette.shade);r(71,9,2,2,'#9aaf9f');
      for(const x of [17,53]){r(x,3,6,24,'#76603c');r(x,3,5,3,palette.brass);r(x,7,2,15,'#c7a36a');r(x+4,8,2,17,'#46504a');r(x+2,12,1,2,palette.light);}
      r(26,9,24,1,'#f1e9c1');r(30,14,19,1,'#63858b');r(32,22,16,1,'#193d4e');
    });
    for(const kind of ['wood','water','food','cloth'])fine(kind,32,32,(g,r)=>{
      if(kind==='wood')for(let j=0;j<3;j++){
        const y=10+j*14;r(4,y,54,14,'#423c2f');r(5,y,51,10,'#b38a51');r(6,y,49,2,'#e5c891');r(8,y+9,46,2,'#6d4e30');
        for(let k=0;k<6;k++)r(9+k*7,y+3+k%3,5,1,k%2?'#d2ac70':'#825d35');
        r(52,y+3,4,6,'#d3ad71');r(53,y+5,2,2,'#91643b');
        for(const x of [16,44]){r(x,y,3,14,'#756e4f');for(let z=0;z<14;z+=3)r(x,y+z,3,1,'#e2d0a0');}
      }
      if(kind==='water'){
        poly(g,[[23,9],[41,9],[41,16],[49,20],[52,28],[50,49],[44,55],[20,55],[13,49],[13,27],[20,18]],'#1b4557');
        r(22,4,19,8,'#958966');r(22,4,18,2,'#f2d59c');r(24,7,2,4,'#c9b586');
        poly(g,[[22,20],[40,20],[46,26],[45,47],[39,51],[20,49],[17,44],[18,27]],'#5d9fa7');
        r(21,25,5,17,'#bfddcb');r(22,25,2,12,'#eef0c7');r(29,22,11,2,'#98c6bd');r(43,28,3,18,'#2b6579');r(21,46,20,3,'#38788a');r(26,38,12,1,'#7bb4b5');r(27,26,1,9,'#9fcfbe');r(30,43,7,1,'#a5d3c1');r(36,40,2,1,'#cee5cc');r(20,28,1,8,'#fff0c7');r(17,48,3,2,'#d1dac0');
      }
      if(kind==='food'){
        r(8,12,48,43,'#473c2c');r(9,12,45,5,'#e2bb7d');r(11,19,41,30,'#ac7b45');
        for(let y=21;y<49;y+=7){r(12,y,39,1,'#d2a465');r(14,y+3,30,1,'#8d6037');}
        for(const x of [14,46]){r(x,17,4,34,'#b9b591');r(x,17,1,32,'#eee0ae');r(x+1,21,2,2,'#424f4c');r(x+1,46,2,2,'#424f4c');}
        r(24,26,16,16,'#566b4c');r(25,26,14,2,'#b5bd85');r(27,31,9,2,'#d7cc92');r(31,29,2,10,'#d7cc92');
      }
      if(kind==='cloth'){
        poly(g,[[8,17],[17,11],[49,13],[55,20],[52,51],[10,52]],'#32565b');
        poly(g,[[9,16],[17,12],[48,14],[51,18],[49,45],[13,46]],'#abbba4');
        r(12,17,35,3,'#eee1b5');r(12,23,33,2,'#cfceb0');r(16,30,31,2,'#819e95');r(14,35,31,1,'#cad0b1');r(12,42,35,2,'#607f7c');
        for(let j=0;j<9;j++)r(13+j*4,45,1,4,'#c5c4a4');
        r(28,13,5,36,'#8c704c');r(29,14,1,32,'#e2c58d');r(26,28,10,4,'#bba473');r(27,28,7,1,'#f2d5a1');
      }
    });
    // Thrall: muted ivory/sea-grey edge pixels; preserve silhouette, units and cache budget.
    fine('monster',64,40,(g,r)=>{
      poly(g,[[5,17],[19,23],[33,25],[44,18],[55,11],[81,10],[96,22],[114,27],[122,37],[118,52],[96,57],[80,66],[52,62],[35,49],[20,54],[6,61],[13,39]],'#153943');
      poly(g,[[12,22],[30,30],[43,25],[42,47],[28,48],[12,56],[20,39]],'#457b7b');
      for(let j=0;j<6;j++)r(15+j*3,27+j,1,18-j*2,'#8cae99');
      poly(g,[[38,29],[53,17],[78,14],[96,26],[111,29],[116,38],[110,49],[90,51],[79,58],[55,54],[43,46]],'#4e8885');
      poly(g,[[43,27],[57,16],[78,14],[94,26],[85,30],[62,27],[50,34]],'#a6b99a');
      r(56,17,20,2,'#b9b99b');r(49,23,6,2,'#a6b39b');
      poly(g,[[55,15],[60,2],[66,1],[76,14]],'#375969');r(61,3,2,10,'#8fa99a');
      poly(g,[[46,42],[63,45],[69,68],[62,72],[52,59]],'#285363');r(52,47,2,13,'#78998f');
      for(let j=0;j<5;j++)for(let k=0;k<8-j;k++){
        const x=46+k*7+(j%2)*3,y=29+j*5;
        r(x,y,5,1,j<2?'#99b59e':'#4c7a7a');r(x+1,y+1,4,2,j<2?'#47777a':'#284e60');r(x+1,y,2,1,'#91aa98');
      }
      poly(g,[[94,30],[110,30],[114,37],[110,43],[96,42]],'#61928b');r(98,32,10,7,'#152f3d');r(100,33,6,4,'#e9b660');r(103,33,2,4,'#281e23');r(100,33,2,1,'#fff0b7');
      r(99,48,21,3,'#132e40');r(104,48,3,4,'#c4bea0');r(113,48,3,3,'#a8b29d');r(110,28,3,1,'#c3bda0');r(116,39,3,2,'#80a397');
    });
  }
  // Cached pixel sprites: brass highlights, cool shadows, distinct silhouettes.
  function playArt(art,sprite){
    const make=(name,w,h,fn)=>sprite(name,w,h,(g,r)=>{fn(g,r);});
    make('crate',64,64,(g,r)=>{ // Small bevelled timber box, authored at 2x like the raft.
      poly(g,[[9,19],[40,13],[56,23],[25,31]],'#c8aa70');
      poly(g,[[9,19],[25,31],[25,56],[9,44]],'#715538');
      poly(g,[[25,31],[56,23],[56,48],[25,56]],'#997344');
      r(12,24,3,19,'#c6a06a');r(26,33,2,20,palette.brass);r(51,27,3,21,'#5a4935');
      poly(g,[[29,47],[50,28],[52,32],[31,51]],'#d1ac70');
      r(18,23,4,3,palette.light);r(32,36,3,3,palette.shade);r(46,43,3,3,palette.shade);
      // Broken upper-left brass rim and cool lower-right wet bevel.
      poly(g,[[9,19],[40,13],[40,15],[11,21]],palette.brass);
      r(9,21,2,18,palette.light);
      poly(g,[[25,53],[56,45],[56,48],[25,56]],palette.wet);
      poly(g,[[30,53],[51,47],[51,48],[30,54]],'#467573');
      r(54,29,2,16,palette.shade);
    });
    art.crate.unit=2;
    make('bottle',64,64,(g,r)=>{ // 2x authoring; same 32px display footprint.
      r(26,4,14,8,'#ba9964');r(26,4,12,2,palette.brass);r(26,6,2,4,palette.light);
      r(28,12,10,14,'#87b8a4');
      poly(g,[[26,24],[40,24],[48,34],[46,56],[18,56],[16,36]],'#315c61');
      r(20,34,22,18,'#73aa96');r(22,30,4,22,palette.brass);r(22,30,2,14,palette.light);
      r(30,36,12,12,'#e0c995');r(34,38,2,8,'#97794e');
      r(44,36,2,18,palette.shade);r(22,56,24,4,palette.wet);r(28,56,14,2,'#467573');
    });
    art.bottle.unit=2;
    make('merchant',96,80,(g,r)=>{poly(g,[[8,48],[83,43],[72,65],[28,70]],'#334e54');poly(g,[[10,45],[83,40],[74,56],[27,61]],'#a17b4d');
      // Quay: baked plank seams and a damp lower lip, inside the original deck.
      poly(g,[[16,48],[79,43],[78,44],[17,49]],'#72654c');
      poly(g,[[21,53],[76,48],[75,49],[22,54]],'#72654c');
      poly(g,[[27,58],[73,53],[74,56],[27,61]],'#58635a');
      poly(g,[[30,58],[48,56],[48,57],[31,59]],'#91a18a');
      poly(g,[[58,55],[70,54],[69,55],[58,56]],'#91a18a');
      r(26,56,45,2,'#b6a27a');r(44,6,4,44,'#bfa272');poly(g,[[42,8],[16,38],[42,35]],'#e1d2a6');poly(g,[[49,10],[74,34],[49,36]],'#548e88');r(27,32,12,2,'#f5e6bc');r(50,31,15,2,'#9bc0a7');r(32,47,11,8,'#c79960');r(54,43,13,9,'#776e4d');r(44,7,3,30,'#f2d59b');poly(g,[[48,6],[63,9],[48,14]],'#ce9061');
      // Mast: broad cloth folds baked inside the existing sail silhouettes (96x80).
      poly(g,[[41,11],[29,30],[21,36],[30,35]],'#c3b58e');
      poly(g,[[41,12],[35,29],[30,35],[36,34]],'#eee0b5');
      poly(g,[[41,17],[39,31],[36,35],[42,34]],'#a99f80');
      poly(g,[[50,12],[55,29],[65,34],[58,35]],'#3e726f');
      poly(g,[[52,15],[62,28],[69,33],[64,33]],'#78a595');
      poly(g,[[50,19],[52,30],[57,34],[50,35]],'#64998c');
      // Narrow boom face and warm upper rim, contained by the old cloth foot.
      poly(g,[[19,36],[42,33],[42,35],[17,37]],'#75684c');
      poly(g,[[20,36],[42,33],[42,34],[19,37]],'#d7c394');
      poly(g,[[49,34],[71,32],[74,34],[49,36]],'#3a5a54');
      poly(g,[[50,34],[71,32],[72,33],[50,35]],'#a0b494');
      // Reef: cached contact AO beneath cargo/mast; tiny brass rim fittings.
      r(32,54,12,2,palette.shade);r(54,51,14,2,palette.shade);
      r(44,46,6,3,'#465349');r(33,47,9,1,palette.brass);
      r(55,43,10,1,'#bca476');r(34,48,1,2,palette.light);
      poly(g,[[31,62],[69,57],[68,59],[32,64]],'#294246');
      r(29,57,2,1,palette.light);r(64,54,2,1,palette.brass);
      // Night: broken brass gunwale catchlight and cool wet hull foot.
      poly(g,[[10,45],[35,43],[35,44],[12,47]],palette.brass);r(12,47,1,3,palette.light);
      poly(g,[[29,67],[72,62],[72,65],[29,70]],palette.wet);
      poly(g,[[36,67],[64,64],[64,65],[36,68]],'#467573');
      // Sparse salt flecks sit above the wet foot, in the sea's muted foam family.
      for(let k=0;k<5;k++){const x=34+k*7,y=65-Math.floor(k*.8);r(x,y,3,1,'#9caa8f');if(k%2===0)r(x+1,y-1,1,1,'#c9d8b1');}
    });
    make('scrap',32,32,(g,r)=>{poly(g,[[4,19],[12,6],[25,9],[29,23],[18,29]],'#304d58');r(9,13,17,7,'#8d9990');r(10,12,16,2,'#e1d3a3');r(13,20,5,6,'#b67b52');r(20,9,3,18,'#53747c');});
    for(const kind of ['gnaw','flank','spit','tideking'])make(kind,64,40,(g,r)=>{
      g.drawImage(art.monster,0,0,64,40);
      if(kind==='gnaw'){for(let i=0;i<4;i++)r(49+i*3,24,2,5,'#c9c3a4');}
      if(kind==='flank'){poly(g,[[14,15],[27,0],[35,14]],'#b46c52');poly(g,[[24,25],[39,39],[39,25]],'#c28a61');r(29,12,14,2,'#c4a681');}
      if(kind==='spit'){poly(g,[[27,10],[34,2],[43,11]],'#879b58');r(46,19,15,8,'#80974e');r(49,20,10,2,'#b2c39b');r(57,23,6,2,'#b9c68c');}
      if(kind==='tideking'){poly(g,[[22,12],[24,0],[31,6],[36,0],[41,7],[48,2],[47,14]],'#ba975e');r(27,10,20,2,'#c9bd9d');r(34,16,16,2,'#8562a2');r(50,16,5,3,'#f5b2b7');}
    });
    for(const kind of ['helm','canopy','stove','net','lamp','turret'])make('module_'+kind,40,48,(g,r)=>{
      // Shared timber foot, lit from upper left, with a cool wet lower bevel.
      r(5,33,31,10,'#142831');r(6,33,29,6,'#987344');
      r(6,33,28,1,palette.brass);r(6,34,1,5,palette.light);
      r(8,36,24,1,'#bd955e');r(10,38,19,1,'#6d5138');
      r(6,40,29,2,'#1c3036');r(8,40,23,1,'#3b6568');
      r(8,34,2,2,palette.brass);r(31,38,2,2,palette.shade);
      if(kind==='helm'){r(18,19,5,19,'#987344');g.strokeStyle=palette.brass;g.lineWidth=3;g.strokeRect(9,8,23,21);r(18,4,4,30,palette.brass);r(5,17,31,3,palette.light);r(17,16,6,5,'#46646c');}
      if(kind==='canopy'){r(5,14,3,27,'#af9261');r(32,14,3,27,'#af9261');poly(g,[[2,15],[11,3],[28,3],[38,15],[35,20],[4,20]],'#487d80');r(9,6,22,3,'#b9d2bd');r(4,16,31,3,'#d5caa0');r(13,8,2,8,'#86afa5');}
      // Hearth: soften the stove and chimney rims; preserve ember fire and geometry.
      if(kind==='stove'){r(9,16,23,23,'#53666a');r(9,15,23,3,'#c0b797cc');r(23,3,6,14,'#395460');r(23,3,7,2,'#b4bca5bf');r(13,25,14,11,'#172e36');r(15,28,10,6,'#d5884de6');r(18,26,4,7,'#ffe1a0d9');}
      if(kind==='net'){r(5,8,3,30,'#c2a777');r(32,8,3,30,'#c2a777');for(let i=0;i<6;i++){r(8+i*4,13,1,24,'#a8c2ad');r(8,13+i*4,25,1,'#6d9991');}r(17,22,9,4,'#d3d7ac');r(14,20,3,8,'#92b5ac');}
      if(kind==='lamp'){r(18,14,4,25,'#b19b6e');r(12,3,18,16,'#375360');r(13,4,15,2,'#d2b370e6');r(13,6,2,10,'#b49c64d9');r(16,7,13,8,'#f5d999d9');r(18,8,10,5,'#fff2c7cc');r(12,19,17,3,'#182f3c');}
      if(kind==='turret'){g.drawImage(art.turret,3,12,34,34);g.drawImage(art.barrel,18,18,24,10);}
    });
    make('island',96,80,(g,r)=>{poly(g,[[3,53],[22,34],[64,32],[91,52],[82,67],[39,75],[9,66]],'#638f86');poly(g,[[9,50],[29,30],[62,32],[86,50],[73,63],[29,66]],'#d3bb80');poly(g,[[18,46],[32,29],[61,31],[74,47],[52,57],[26,54]],'#637e53');r(44,17,5,30,'#9c794e');poly(g,[[44,19],[22,13],[11,22],[38,17],[31,5],[48,13],[62,7],[74,16],[52,16],[64,27]],'#426e58');r(44,18,2,25,'#dfc08a');r(25,49,12,6,'#83b9ad');
      // Cove: muted wet-sand crescent, baked into the same 96x80 shoreline.
      poly(g,[[15,55],[29,61],[49,60],[70,55],[80,52],[73,63],[39,68],[29,66]],'#a49f76');
      poly(g,[[19,59],[30,63],[49,62],[68,58],[77,56],[73,63],[39,68],[29,66]],'#7f9270');
      r(31,63,7,1,'#c4bd8c');r(43,62,4,1,'#b5b585');r(61,58,5,1,'#b5b585');
      // Short contact shadow under the existing rock; no halo or new silhouette.
      poly(g,[[24,53],[30,52],[38,54],[37,57],[28,57],[24,55]],'#45665b');
      poly(g,[[25,50],[29,48],[35,49],[37,53],[32,55],[26,54]],'#7e9d8c');
      poly(g,[[25,50],[29,48],[35,49],[32,51],[26,52]],'#b0c4a4');
      poly(g,[[32,51],[35,49],[37,53],[32,55]],'#557a6e');
      poly(g,[[40,46],[48,44],[56,47],[49,50],[40,49]],'#405d4d');
      r(27,55,8,1,'#3d5a50');r(28,49,4,1,'#c4d1ae');
      r(44,43,2,3,'#bca06c');r(21,43,3,1,palette.brass);
      r(17,47,2,1,'#edcf93');r(32,61,5,1,'#b5b585');
      // Night: a restrained sandy catchlight above the cool shoreline foot.
      poly(g,[[10,49],[28,31],[29,32],[12,51]],palette.brass);r(12,48,2,2,palette.light);
      poly(g,[[39,72],[81,64],[82,67],[39,75]],palette.wet);
      poly(g,[[48,71],[72,67],[72,68],[48,72]],'#467573');
    });
    make('wreck',96,80,(g,r)=>{poly(g,[[6,36],[24,46],[84,31],[75,61],[30,73],[13,59]],'#334c51');poly(g,[[9,34],[28,44],[84,29],[78,51],[30,64],[17,54]],'#946e48');for(let i=0;i<5;i++)r(23+i*11,43-i*2,3,17,'#d0ac73');r(45,8,4,42,'#c2a474');poly(g,[[49,10],[72,22],[57,26],[67,33],[49,35]],'#b5c1ab');r(22,50,53,3,'#483f35');r(52,39,14,8,'#395a61');
      // Torn sail folds follow the old ragged edge; no extension of the sprite.
      poly(g,[[50,12],[59,21],[68,22],[57,24]],'#d0cfac');
      poly(g,[[50,15],[55,25],[57,26],[63,32],[54,31]],'#879b8a');
      poly(g,[[50,24],[53,30],[62,33],[50,34]],'#c8c9a6');
      poly(g,[[49,33],[65,32],[67,33],[49,35]],'#68785e');
      poly(g,[[50,33],[64,32],[65,33],[50,34]],'#c9ba8c');
      // Reef: waterlogged opening and mast seat; broken brass nail/rim glints.
      r(50,39,2,9,palette.shade);r(52,46,14,2,palette.wet);
      r(53,40,10,1,'#548081');r(44,48,7,2,palette.shade);
      poly(g,[[31,64],[70,54],[69,57],[32,67]],'#294246');
      r(24,44,1,2,palette.light);r(46,40,1,2,palette.brass);
      poly(g,[[66,34],[78,31],[78,32],[66,35]],palette.brass);
      r(68,35,2,1,'#b7a073');
      // Night: exposed upper-left timber and submerged lower hull bevel.
      poly(g,[[9,34],[28,44],[28,46],[10,36]],palette.brass);r(10,36,1,4,palette.light);
      poly(g,[[30,70],[75,58],[75,61],[30,73]],palette.wet);
      poly(g,[[37,69],[65,62],[65,63],[37,70]],'#467573');
      for(let k=0;k<5;k++){const x=35+k*7,y=68-k*2;r(x,y,3,1,'#9caa8f');if(k%2===0)r(x+1,y-1,1,1,'#c9d8b1');}
    });
  }
  function atmosphere(g,w,h,t,weather,lamp,cx,cy,scale){
    g.save();
    // Veil: thinner night wash and edge shade, without adding a pale fog layer.
    g.fillStyle=weather.night?'#202e38':'#b58e68';g.globalAlpha=weather.night?(lamp?.25:.35):weather.dusk?.15:0;g.fillRect(0,0,w,h);
    if(weather.night){g.globalAlpha=.48;g.drawImage(vignette,0,0,w,h);}
    // Restrain the existing deck bounce; keep the ember hue and halo footprint.
    if(weather.night&&lamp){g.globalAlpha=.48;g.drawImage(halo,cx-110*scale,cy-110*scale,220*scale,220*scale);}
    if(weather.storm){
      g.globalAlpha=weather.night?.22:.26;g.drawImage(stormSky,0,0,w,h);
      g.globalAlpha=.29;g.fillStyle='#bdc9ce';
      for(let i=0;i<52;i++){
        const x=Math.round((i*79+t*130)%w),y=Math.round((i*113+t*210)%h);
        g.fillRect(x,y,1,3);g.fillRect(x-1,y+4,1,2);
      }
    }g.restore();
  }

  function deck(g,art,tiles,t){
    for(const tile of tiles.values())if(tile.module)g.drawImage(art['module_'+tile.module],tile.x*40-20,tile.y*40-29,40,48);
    // Dressing is anchored only to surviving boards, with no new gameplay entities.
    if(tiles.has('-1,-1')){
      g.save();g.globalAlpha=.35;g.fillStyle='#101e26';poly(g,[[-46,-38],[-24,-20],[-17,-21],[-35,-43]],'#101e26');g.restore();
      g.drawImage(art.lantern,-50,-62,14,24);
    }
    if(tiles.has('1,1'))g.drawImage(art.rope,27,29,25,20);
    for(const tile of tiles.values()){
      if(!tiles.has(`${tile.x},${tile.y-1}`)){
        const x=tile.x*40,y=tile.y*40;g.fillStyle='#253d42';g.fillRect(x+9,y-14,6,3);g.fillStyle='#c1c8ac';g.fillRect(x+8,y-15,7,1);g.fillStyle='#577676';g.fillRect(x+11,y-13,2,3);
      }
    }
  }
  return {get waveCacheLength(){return waves.length;},resize,ocean,glow,finish,enhance:(art,sprite)=>{enhance(art,sprite);playArt(art,sprite);},deck,atmosphere};
})();
