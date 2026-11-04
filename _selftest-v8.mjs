import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {spawn,spawnSync} from 'node:child_process';
const game=fs.readFileSync('game.js','utf8'),art=fs.readFileSync('art.js','utf8'),sw=fs.readFileSync('sw.js','utf8');
const report={ok:false,cache:'endless-sea-drift-v8-polish',features:[],errors:[],session_hint:'node _selftest-v8.mjs；120秒昼夜，95秒起风雨，28秒小岛/93秒沉船，180秒潮汐王。每5秒自动存档。'};
function test(id,fn){try{fn();report.features.push({id,ok:true,note:'通过'});}catch(e){report.features.push({id,ok:false,note:e.message});report.errors.push(id+': '+e.message);}}
test('cache',()=>assert(sw.includes("const CACHE = '"+report.cache+"'")));
for(const [id,words] of Object.entries({weather:['night','storm','dusk'],modules:['helm','canopy','stove','net','lamp','turret'],resources:['scrap','rope','nail','ammo','craft','fish'],monsters:['gnaw','flank','spit','tideking'],sites:['island','wreck']}))test(id,()=>{for(const word of words)assert(game.includes(word));if(['modules','monsters','sites'].includes(id))for(const word of words)assert(art.includes(word));});
const noop=()=>{},gradient={addColorStop:noop};
const ctx=new Proxy({createLinearGradient:()=>gradient,createRadialGradient:()=>gradient},{get:(o,k)=>o[k]||noop,set:(o,k,v)=>(o[k]=v,true)});
const nodes=new Map();function node(id){if(!nodes.has(id))nodes.set(id,{value:id==='module'?'board':id==='recipe'?'rope':0,style:{},getContext:()=>ctx,getBoundingClientRect:()=>({width:1000,height:700,left:0,top:0}),addEventListener:noop,setAttribute:noop,focus:noop});return nodes.get(id);}
const storage=new Map();
const sandbox={URLSearchParams,location:{search:'?test'},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v),removeItem:k=>storage.delete(k)},console,Math,Map,Set,document:{getElementById:node,createElement:()=>node(Symbol()),querySelectorAll:()=>[],addEventListener:noop},matchMedia:()=>({matches:false}),navigator:{},performance:{now:()=>0},requestAnimationFrame:noop,addEventListener:noop};sandbox.window=sandbox;
vm.createContext(sandbox);vm.runInContext(art,sandbox);vm.runInContext(game,sandbox);
const a=sandbox.testAPI;const reset=()=>{a.reset();a.s.paused=false;node('module').value='board';for(const k in a.s.supplies)a.s.supplies[k]=50;};
test('craft-and-modules',()=>{reset();node('recipe').value='rope';a.act('craft');assert.equal(a.s.supplies.rope,51);a.s.building=true;for(const [i,kind] of ['helm','canopy','stove','net','lamp','turret'].entries()){const t=[...a.s.tiles.values()].filter(t=>t.x||t.y)[i];a.s.preview=[t.x,t.y];node('module').value=kind;a.act('place');assert.equal(t.module,kind);}a.draw();a.s.hunger=30;a.act('eat');assert.equal(a.s.hunger,78);});
test('weather-fishing-net',()=>{reset();a.s.time=100;assert(a.weather().night&&a.weather().storm);const hp=a.s.tiles.get('-1,-1').hp;a.update(1);assert(a.s.tiles.get('-1,-1').hp<hp);const water=a.s.supplies.water;a.act('fish');assert.equal(a.s.supplies.water,water+1);a.s.time=0;a.s.fishTimer=0;a.act('fish');assert.equal(a.s.supplies.food,51);a.s.tiles.get('1,1').module='net';a.s.netTimer=0;const n=a.s.supplies.food+a.s.supplies.cloth;a.update(.1);assert.equal(a.s.supplies.food+a.s.supplies.cloth,n+1);});
test('encounters-and-death',()=>{reset();a.s.siteTimer=0;a.update(.1);const p=a.s.sites[0];a.s.player={x:p.x,y:p.y};a.act('dock');assert(p.used);a.s.player={x:0,y:40};a.s.time=180;a.update(.1);assert(a.s.monsters.some(m=>m.kind==='tideking'));for(const kind of ['gnaw','flank','spit'])a.spawnMonster(kind);a.draw();a.s.thirst=.001;a.update(.1);assert(a.s.ended);});
test('combat-and-boss-loot',()=>{for(const kind of ['gnaw','flank','spit']){reset();a.spawnMonster(kind);const m=a.s.monsters[0];m.x=kind==='flank'?0:45;m.y=40;m.bite=0;a.s.fireTimer=99;const hp=a.s.tiles.get('1,1').hp;a.update(.05);if(kind==='flank')assert(a.s.hunger<99);else assert(a.s.tiles.get('1,1').hp<hp);}reset();a.spawnMonster('tideking');const m=a.s.monsters[0];m.x=100;m.y=0;m.hp=1;a.update(.05);assert.equal(a.s.kills,1);assert.equal(a.s.supplies.scrap,55);assert.equal(a.s.supplies.nail,53);});
test('board-limit-and-module-guard',()=>{reset();a.s.building=true;a.s.preview=[2,0];a.act('place');assert(a.s.tiles.has('2,0'));node('module').value='helm';a.s.preview=[0,0];const wood=a.s.supplies.wood;a.act('place');assert.equal(a.s.supplies.wood,wood);a.s.tiles.clear();for(let y=-4;y<=4;y++)for(let x=-4;x<=4;x++)a.s.tiles.set(`${x},${y}`,{x,y,hp:100});node('module').value='board';a.s.preview=[5,0];a.act('place');assert.equal(a.s.tiles.size,81);});
test('long-simulation',()=>{reset();for(let i=0;i<8000&&!a.s.ended;i++){if(i%100===0){a.s.hunger=100;a.s.thirst=100;a.act('repair');}a.update(.05);if(i%100===0)a.draw();}assert(Number.isFinite(a.s.player.x));assert(a.s.monsters.length<=12);assert(a.s.tiles.size<=81);});
test('touch-actions',()=>{const html=fs.readFileSync('index.html','utf8');for(const action of ['craft','fish','dock','repair','eat','drink','collect','build'])assert(html.includes(`data-action="${action}"`));});
test('save-roundtrip-and-corruption',()=>{reset();a.s.tiles.get('1,1').module='helm';a.s.time=42;a.s.supplies.ammo=7;a.s.tipIndex=2;a.spawnMonster('spit');const expected=JSON.parse(a.serialize());assert(a.save());a.reset();assert(a.load());assert(a.s.tiles instanceof Map);assert.equal(a.s.tiles.get('1,1').module,'helm');assert.equal(a.s.time,42);assert.equal(a.s.supplies.ammo,7);assert.equal(a.s.monsters.length,1);assert.equal(a.s.tipIndex,2);a.draw();a.update(.05);
 for(const bad of ['{broken',JSON.stringify({...expected,v:7}),JSON.stringify({...expected,state:{...expected.state,tiles:[]}}),JSON.stringify({...expected,state:{...expected.state,player:null}}),JSON.stringify({...expected,state:{...expected.state,ended:true}})]){storage.set(a.SAVE_KEY,bad);assert.equal(a.load(),false);}storage.clear();assert.equal(a.load(),false);
 reset();a.update(5);assert(storage.has(a.SAVE_KEY));a.s.time=77;a.pause();assert.equal(JSON.parse(storage.get(a.SAVE_KEY)).state.time,77);a.s.ended=true;a.save();assert.equal(a.load(),false);a.newRun();assert.equal(a.s.ended,false);assert.equal(a.s.time,0);
});
test('module-replace-refund-center',()=>{reset();a.s.building=true;a.s.preview=[1,1];node('module').value='helm';a.act('place');node('module').value='canopy';const wood=a.s.supplies.wood;a.act('place');assert.equal(a.s.tiles.get('1,1').module,'canopy');assert.equal(a.s.supplies.wood,wood-2+1);a.s.preview=[0,0];const before=JSON.stringify(a.s.supplies);a.act('place');assert.equal(JSON.stringify(a.s.supplies),before);assert.equal(a.s.message,'中央炮座固定，不可改装');});
test('ammo-damage-and-rate',()=>{const values=[];for(const ammo of [0,4]){reset();a.s.supplies.ammo=ammo;a.spawnMonster('tideking');const m=a.s.monsters[0];m.x=120;m.y=0;a.update(.01);values.push({damage:420-m.hp,cooldown:a.s.fireTimer});assert.equal(a.s.supplies.ammo,Math.max(0,ammo-1));}assert(values[1].damage>values[0].damage);assert(values[1].cooldown<values[0].cooldown);});
// Real-time CDP smoke test, using the system undici WebSocket (no install).
const chrome=['/opt/ungoogled-chromium/chrome','/usr/bin/chromium','/usr/bin/google-chrome'].find(fs.existsSync);
const {createRequire}=await import('node:module');const require=createRequire(import.meta.url);
let WebSocket;try{WebSocket=require('undici').WebSocket;}catch{}
if(chrome&&WebSocket){
 const profile='_chrome-v8-profile',server=spawn('python3',['-m','http.server','18747','--bind','127.0.0.1'],{stdio:'ignore'});
 const browser=spawn(chrome,['--headless','--disable-gpu','--no-sandbox','--disable-dev-shm-usage',`--user-data-dir=${process.cwd()}/${profile}`,'--no-proxy-server','--no-first-run','--remote-debugging-port=18748','about:blank'],{stdio:'ignore'});
 let socket;
 try{
  let pages;for(let i=0;i<60;i++){try{pages=await(await fetch('http://127.0.0.1:18748/json/list')).json();if(pages.length)break;}catch{}await new Promise(r=>setTimeout(r,200));}
  assert(pages?.length,'Chrome debugging endpoint unavailable');
  socket=new WebSocket(pages[0].webSocketDebuggerUrl);await new Promise((resolve,reject)=>{socket.onopen=resolve;socket.onerror=reject;});
  let serial=0;const pending=new Map(),errors=[];
  socket.onmessage=e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);if(p){clearTimeout(p.timer);pending.delete(m.id);m.error?p.reject(Error(JSON.stringify(m.error))):p.resolve(m.result);}}else if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.text);};
  const cdp=(method,params={})=>new Promise((resolve,reject)=>{const id=++serial;const timer=setTimeout(()=>{pending.delete(id);reject(Error('CDP timeout: '+method));},10000);pending.set(id,{resolve,reject,timer});socket.send(JSON.stringify({id,method,params}));});
  await cdp('Page.enable');await cdp('Runtime.enable');
  for(const [orientation,width,height] of [['landscape',844,390],['portrait',390,844]]){
   errors.length=0;await cdp('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:true});
   await cdp('Page.navigate',{url:'http://127.0.0.1:18747/index.html?test'});
   await new Promise(r=>setTimeout(r,1000));await cdp('Runtime.evaluate',{expression:'document.getElementById("resume").click()'});
   await new Promise(r=>setTimeout(r,4500));
   const state=await cdp('Runtime.evaluate',{expression:'JSON.stringify({voyage:document.getElementById("voyage").textContent,hidden:document.getElementById("overlay").hidden,overflow:document.documentElement.scrollWidth>innerWidth})',returnByValue:true});
   test('browser-'+orientation,()=>{assert.deepEqual(errors,[]);const value=JSON.parse(state.result.value);assert(value.hidden);assert(!value.overflow);assert(!value.voyage.includes('00:00'),'game must advance in real time');});
   const layout=await cdp('Runtime.evaluate',{expression:`JSON.stringify((()=>{const stick=document.getElementById('stick').getBoundingClientRect();return [...document.querySelectorAll('.actions button,.tool select,#pause')].map(b=>{const r=b.getBoundingClientRect();return {id:b.dataset.action||b.id,w:r.width,h:r.height,inside:r.left>=0&&r.right<=innerWidth&&r.top>=0&&r.bottom<=innerHeight,clear:r.right<=stick.left||r.left>=stick.right||r.bottom<=stick.top||r.top>=stick.bottom};});})())`,returnByValue:true});
   test('touch-layout-'+orientation,()=>{for(const b of JSON.parse(layout.result.value)){assert(b.w>=44&&b.h>=44,b.id+' target size');assert(b.inside,b.id+' outside viewport');assert(b.clear,b.id+' covers joystick');}});
   await cdp('Runtime.evaluate',{expression:'testAPI.s.time=42;testAPI.s.paused=true;testAPI.save()'});
   await cdp('Page.reload');await new Promise(r=>setTimeout(r,700));
   const restored=await cdp('Runtime.evaluate',{expression:'JSON.stringify({time:testAPI.s.time,paused:testAPI.s.paused,newVisible:!document.getElementById("newRun").hidden,title:document.getElementById("resume").textContent})',returnByValue:true});
   test('browser-save-reload-'+orientation,()=>{const v=JSON.parse(restored.result.value);assert(Math.abs(v.time-42)<0.05,'time '+v.time);assert(v.paused&&v.newVisible);assert.equal(v.title,'继续漂流');});
   await cdp('Runtime.evaluate',{expression:'document.getElementById("resume").click()'});
   if(orientation==='landscape'){const shot=await cdp('Page.captureScreenshot',{format:'png'});fs.writeFileSync('_shot-v8.png',Buffer.from(shot.data,'base64'));}
  }
  report.features.push({id:'screenshot',ok:true,note:'已生成 _shot-v8.png'});
 }catch(e){test('browser-runtime',()=>{throw e;});}
 finally{socket?.close();browser.kill();server.kill();await new Promise(r=>setTimeout(r,500));fs.rmSync(profile,{force:true,recursive:true});}
}else test('browser-required',()=>{throw Error('Chrome or WebSocket unavailable');});
report.ok=report.errors.length===0;fs.writeFileSync('_v8-validation.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));if(!report.ok)process.exitCode=1;
