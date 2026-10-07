/* Steady Suite — shared core. Load this after shared.css, before each app's own script. */
window.Steady = (function(){
  var KEY="", db={};
  function load(appKey, defaults){
    KEY="steady."+appKey+".v1";
    db=JSON.parse(JSON.stringify(defaults||{}));
    try{var r=localStorage.getItem(KEY); if(r) db=Object.assign(db, JSON.parse(r));}catch(e){}
    S.db=db; return db;
  }
  function save(){try{localStorage.setItem(KEY, JSON.stringify(S.db));}catch(e){}}
  function uid(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6);}
  function num(n){n=Number(n)||0;return n.toLocaleString("en-US",{maximumFractionDigits:2});}
  function money(n){n=Number(n)||0;return (n<0?"-$":"$")+Math.abs(n).toLocaleString("en-US",{maximumFractionDigits:(Math.abs(n)<100&&n%1!==0)?2:0});}
  function money0(n){n=Number(n)||0;return (n<0?"-$":"$")+Math.abs(n).toLocaleString("en-US",{maximumFractionDigits:0});}
  function el(id){return document.getElementById(id);}
  function val(id){var e=el(id);return e?e.value.trim():"";}
  function clr(){for(var i=0;i<arguments.length;i++){var e=el(arguments[i]);if(e)e.value="";}}
  function toast(msg, good){var t=document.createElement("div");t.className="toast"+(good?" good":"");t.textContent=msg;var c=el("toasts")||document.body;c.appendChild(t);setTimeout(function(){t.style.transition="opacity .3s,transform .3s";t.style.opacity="0";t.style.transform="translateY(10px)";setTimeout(function(){t.remove();},300);},2300);}
  function todayISO(){var d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");}
  function tm(){var d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0");}
  function applyTheme(){var t=null;try{t=localStorage.getItem("steady.theme");}catch(e){}
    if(t)document.documentElement.setAttribute("data-theme",t);else document.documentElement.removeAttribute("data-theme");}
  function toggleTheme(){var cur=document.documentElement.getAttribute("data-theme");var nx=cur==="dark"?"light":"dark";
    try{localStorage.setItem("steady.theme",nx);}catch(e){}document.documentElement.setAttribute("data-theme",nx);}
  var onTab=null;
  function initShell(){
    applyTheme();
    document.querySelectorAll('[data-steady="theme"]').forEach(function(b){b.onclick=toggleTheme;});
    var side=el("side"),scrim=el("scrim"),hamb=el("hambBtn");
    function closeSide(){if(side)side.classList.remove("open");if(scrim)scrim.classList.remove("open");}
    if(hamb)hamb.onclick=function(){var open=side&&side.classList.toggle("open");if(scrim)scrim.classList.toggle("open",!!open);};
    if(scrim)scrim.onclick=closeSide;
    document.querySelectorAll(".stab,.snav").forEach(function(t){t.onclick=function(){
      document.querySelectorAll(".stab,.snav").forEach(x=>x.classList.remove("active"));
      document.querySelectorAll(".panel").forEach(x=>x.classList.remove("active"));
      t.classList.add("active");var p=el("panel-"+t.dataset.panel);if(p)p.classList.add("active");
      window.scrollTo(0,0);closeSide(); if(typeof S.onTab==="function")S.onTab(t.dataset.panel);
    };});
  }
  function go(panel){var b=document.querySelector('[data-panel="'+panel+'"]');if(b)b.click();}
  /* ---- SVG charts ---- */
  function donut(data,size){var total=data.reduce((a,b)=>a+b.value,0);if(total<=0)return "";
    var r=size/2,rad=r-size*0.11,stroke=size*0.15,circ=2*Math.PI*rad,off=0,segs="";
    data.forEach(function(d){var len=d.value/total*circ;segs+='<circle cx="'+r+'" cy="'+r+'" r="'+rad+'" fill="none" stroke="'+d.color+'" stroke-width="'+stroke+'" stroke-dasharray="'+len+' '+(circ-len)+'" stroke-dashoffset="'+(-off)+'" transform="rotate(-90 '+r+' '+r+')"/>';off+=len;});
    return '<svg viewBox="0 0 '+size+' '+size+'" width="'+size+'" height="'+size+'">'+segs+'<text x="'+r+'" y="'+(r+5)+'" text-anchor="middle" font-size="'+(size*0.16)+'" font-weight="800">'+Math.round(total)+'</text></svg>';}
  function ring(pct,size,label,sub){var r=size/2,rad=r-size*0.1,stroke=size*0.12,circ=2*Math.PI*rad,len=Math.min(1,pct)*circ;
    return '<div class="ring" style="width:'+size+'px;height:'+size+'px"><svg viewBox="0 0 '+size+' '+size+'" width="'+size+'" height="'+size+'"><circle cx="'+r+'" cy="'+r+'" r="'+rad+'" fill="none" stroke="var(--line)" stroke-width="'+stroke+'"/><circle cx="'+r+'" cy="'+r+'" r="'+rad+'" fill="none" stroke="var(--accent)" stroke-width="'+stroke+'" stroke-linecap="round" stroke-dasharray="'+len+' '+(circ-len)+'" transform="rotate(-90 '+r+' '+r+')"/></svg><div class="ctr"><b>'+label+'</b><span>'+(sub||"")+'</span></div></div>';}
  function bars(labels,values,w,h,color){color=color||"var(--accent)";var max=Math.max.apply(null,values.concat([1])),baseY=h-16,bw=w/labels.length;
    var svg='<svg viewBox="0 0 '+w+' '+h+'" width="100%" height="'+h+'">';
    labels.forEach(function(lb,i){var v=values[i]||0,bh=(baseY-6)*(v/max),x=i*bw+bw*0.2,cw=bw*0.6;svg+='<rect x="'+x.toFixed(1)+'" y="'+(baseY-bh).toFixed(1)+'" width="'+cw.toFixed(1)+'" height="'+Math.max(0,bh).toFixed(1)+'" rx="3" fill="'+color+'"/><text x="'+(i*bw+bw/2).toFixed(1)+'" y="'+(h-3)+'" text-anchor="middle" font-size="9.5" fill="#6a7f92">'+lb+'</text>';});
    return svg+'</svg>';}
  function area(series,w,h,color){color=color||"var(--accent)";if(series.length<2)return '<div class="empty">Not enough data yet.</div>';
    var max=Math.max.apply(null,series),min=Math.min.apply(null,series),rng=(max-min)||1,pad=6,iw=w-pad*2,ih=h-pad*2;
    var pts=series.map(function(v,i){return [pad+iw*(i/(series.length-1)),pad+ih*(1-(v-min)/rng)];});
    var line=pts.map((p,i)=>(i?"L":"M")+p[0].toFixed(1)+" "+p[1].toFixed(1)).join(" ");
    var ar=line+" L"+(pad+iw)+" "+(pad+ih)+" L"+pad+" "+(pad+ih)+" Z",id="sag"+Math.random().toString(36).slice(2,6);
    return '<svg viewBox="0 0 '+w+' '+h+'" width="100%" height="'+h+'" preserveAspectRatio="none"><defs><linearGradient id="'+id+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+color+'" stop-opacity="0.3"/><stop offset="1" stop-color="'+color+'" stop-opacity="0"/></linearGradient></defs><path d="'+ar+'" fill="url(#'+id+')"/><path d="'+line+'" fill="none" stroke="'+color+'" stroke-width="2.5" stroke-linejoin="round"/></svg>';}
  /* ---- dates / streaks / badges ---- */
  function dkey(dt){return dt.getFullYear()+"-"+String(dt.getMonth()+1).padStart(2,"0")+"-"+String(dt.getDate()).padStart(2,"0");}
  function last7(){var a=[],d=new Date();for(var i=6;i>=0;i--){var x=new Date(d.getFullYear(),d.getMonth(),d.getDate()-i);a.push({key:dkey(x),lbl:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][(x.getDay()+6)%7],day:x.getDate(),today:i===0});}return a;}
  function streak(has){var s=0,b=new Date();for(var i=0;i<400;i++){var k=dkey(new Date(b.getFullYear(),b.getMonth(),b.getDate()-i));if(has(k))s++;else break;}return s;}
  function renderBadges(container,defs,ctx){var earned=0,html="";defs.forEach(function(bd){var ok=bd.cond(ctx);if(ok)earned++;html+='<div class="badge-c '+(ok?"on":"off")+'"><div class="ic">'+bd.ic+'</div><b>'+bd.title+'</b><small>'+bd.desc+'</small></div>';});if(container)container.innerHTML=html;return earned;}
  function setDb(obj){Object.keys(S.db).forEach(function(k){delete S.db[k];});Object.assign(S.db,obj);}
  /* ---- settings modal ---- */
  function initAccount(opts){opts=opts||{};
    var m=el("steady-acct");
    if(!m){m=document.createElement("div");m.className="modal";m.id="steady-acct";
      m.innerHTML='<div class="box"><button class="close" id="sa-x">×</button><h2>Settings</h2>'+
      '<div class="setrow">'+(opts.sample?'<button class="btn ghost sm" id="sa-sample">✨ Load sample data</button>':"")+'<button class="btn ghost sm" id="sa-theme">◐ Theme</button></div>'+
      '<div class="setrow" style="margin-top:8px"><button class="btn ghost sm" id="sa-exp">⬇ Export backup</button><button class="btn ghost sm" id="sa-imp">⬆ Import backup</button><input type="file" id="sa-file" accept="application/json" hidden></div>'+
      '<div class="setrow" style="margin-top:8px"><button class="btn ghost sm" id="sa-clear" style="border-color:var(--bad);color:var(--bad)">Clear all data</button></div>'+
      '<p class="setnote">Everything saves on this device only. Nothing is uploaded.</p></div>';
      document.body.appendChild(m);}
    document.querySelectorAll('[data-steady="account"]').forEach(function(b){b.onclick=function(){m.classList.add("open");};});
    el("sa-x").onclick=function(){m.classList.remove("open");};m.onclick=function(e){if(e.target===m)m.classList.remove("open");};
    el("sa-theme").onclick=toggleTheme;
    el("sa-exp").onclick=function(){var blob=new Blob([JSON.stringify(S.db,null,2)],{type:"application/json"});var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=(opts.name||"steady")+"-backup.json";a.click();toast("Backup downloaded",1);};
    el("sa-imp").onclick=function(){el("sa-file").click();};
    el("sa-file").onchange=function(e){var f=e.target.files[0];if(!f)return;var r=new FileReader();r.onload=function(){try{setDb(JSON.parse(r.result));save();m.classList.remove("open");if(opts.render)opts.render();toast("Backup restored",1);}catch(x){toast("Could not read that file");}};r.readAsText(f);};
    el("sa-clear").onclick=function(){if(confirm("Clear all data in this app? This can't be undone.")){setDb(JSON.parse(JSON.stringify(opts.defaults||{})));S.db.__onboarded=true;save();m.classList.remove("open");if(opts.render)opts.render();toast("Cleared");}};
    if(opts.sample&&el("sa-sample"))el("sa-sample").onclick=function(){setDb(opts.sample());S.db.__onboarded=true;save();m.classList.remove("open");if(opts.render)opts.render();toast("Sample data loaded",1);};
  }
  /* ---- first-run onboarding ---- */
  function onboard(opts){opts=opts||{};if(S.db.__onboarded)return;
    var m=document.createElement("div");m.className="modal open";m.id="steady-welcome";
    m.innerHTML='<div class="box">'+(opts.html||"")+'<div style="display:flex;gap:9px;margin-top:18px">'+(opts.sample?'<button class="btn block" id="wc-s">Explore with sample data</button>':"")+'<button class="btn ghost block" id="wc-f">Start fresh</button></div></div>';
    document.body.appendChild(m);
    if(opts.sample)el("wc-s").onclick=function(){setDb(opts.sample());S.db.__onboarded=true;save();m.remove();if(opts.render)opts.render();};
    el("wc-f").onclick=function(){S.db.__onboarded=true;save();m.remove();toast("You're all set",1);};
  }
  /* ---- gamification: XP, levels, quests, celebrations ---- */
  var TITLES=["Getting Started","Finding Your Rhythm","On a Roll","Steady","Dialed In","Committed","In the Zone","Relentless","Powerhouse","Legend"];
  function levelTitle(l){return TITLES[Math.min(Math.max(1,l)-1,TITLES.length-1)];}
  function levelInfo(xp){xp=Math.max(0,Math.floor(xp||0));var lvl=1,acc=0,need=100;
    while(xp>=acc+need){acc+=need;lvl++;need=lvl*100;}
    return{level:lvl,xp:xp,into:xp-acc,span:need,pct:Math.min(1,(xp-acc)/need),title:levelTitle(lvl)};}
  function reduceMotion(){try{return window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;}catch(e){return false;}}
  function confetti(){
    if(reduceMotion())return;
    var c=document.createElement("canvas");c.style.cssText="position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999";
    c.width=window.innerWidth;c.height=window.innerHeight;document.body.appendChild(c);var ctx=c.getContext("2d");
    var cols=["#17b3a0","#39e3c8","#eca13a","#ec5f5a","#8168f2","#4a90e2","#2fae5f"],P=[];
    for(var i=0;i<140;i++)P.push({x:c.width/2+(Math.random()-0.5)*120,y:c.height*0.28,vx:(Math.random()-0.5)*13,vy:Math.random()*-13-3,g:0.34,r:Math.random()*6+3,c:cols[i%cols.length],rot:Math.random()*6,vr:(Math.random()-0.5)*0.4});
    var t0=Date.now();
    (function frame(){var el=Date.now()-t0,a=Math.max(0,1-el/1500);ctx.clearRect(0,0,c.width,c.height);
      for(var i=0;i<P.length;i++){var p=P[i];p.vy+=p.g;p.x+=p.vx;p.y+=p.vy;p.rot+=p.vr;
        ctx.save();ctx.globalAlpha=a;ctx.translate(p.x,p.y);ctx.rotate(p.rot);ctx.fillStyle=p.c;ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r*0.65);ctx.restore();}
      if(el<1500)requestAnimationFrame(frame);else c.remove();})();
  }
  function levelCardHTML(info){
    var prof=loadProfile(),st=suiteStats(),coins=Math.max(0,st.coinsEarned-prof.spent);
    return '<div class="lvlcard"><div class="lvlbadge"><small>LVL</small>'+info.level+'</div>'+
      '<div class="lvlmeta"><div class="lvltitle">'+info.title+'</div>'+
      '<div class="lvlbar"><span style="width:'+Math.round(info.pct*100)+'%"></span></div>'+
      '<div class="lvlsub">'+info.into+' / '+info.span+' XP · '+(info.span-info.into)+' to level '+(info.level+1)+'</div></div></div>'+
      '<a href="character.html" class="charrow"><span class="charav">'+avatarImg(prof,46)+'</span>'+
      '<span class="charmeta"><b>Your character</b><small>🪙 '+coins.toLocaleString()+' coins · Customize →</small></span><span class="charchev">→</span></a>';
  }
  function gamify(opts){opts=opts||{};var info=levelInfo(opts.xp||0);
    S.db.__xp=info.xp;
    if(S.db.__level==null){S.db.__level=info.level;}
    else if(info.level>S.db.__level){S.db.__level=info.level;setTimeout(function(){confetti();toast("Level "+info.level+" — "+info.title+"! 🎉",1);},140);}
    else{S.db.__level=info.level;}
    if(opts.badges!=null){if(S.db.__badges==null){S.db.__badges=opts.badges;}
      else if(opts.badges>S.db.__badges){var g=opts.badges-S.db.__badges;S.db.__badges=opts.badges;setTimeout(function(){toast(g===1?"Badge unlocked! 🏅":g+" badges unlocked! 🏅",1);},160);}
      else{S.db.__badges=opts.badges;}}
    save();
    if(opts.container)opts.container.innerHTML=levelCardHTML(info);
    return info;
  }
  function renderQuests(container,quests){if(!container)return 0;quests=quests||[];
    var done=quests.filter(function(q){return q.done;}).length;
    container.innerHTML=quests.map(function(q){return '<div class="quest'+(q.done?" done":"")+'"><span class="qc">'+(q.done?"✓":"○")+'</span><span class="qn">'+q.label+'</span><span class="qx">+'+(q.xp||10)+'</span></div>';}).join("")+
      (quests.length&&done===quests.length?'<div class="questall">🎉 All of today\'s goals done — come back tomorrow!</div>':'');
    return done;
  }
  /* ---- avatar / RPG character ---- */
  var DEFAULT_AVATAR="data:image/png;base64,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";
  var DEFAULT_EQUIP={sex:"male",skin:"light",hairStyle:"plain",hairColor:"blonde",shirt:"tee",shirtColor:"blue",pants:"brown",shoes:"black",hat:"none",bg:"sky"};
  var AV_BG={sky:["#7fc7ff","#c9ecff"],plain:["#2a3a52","#1c2838"],sunset:["#ff9a6b","#ffd9a0"],night:["#1b2a4a","#0d1526"],forest:["#4f9e6a","#bfe6c8"],space:["#3a2a6b","#120a26"],gold:["#e9c45a","#fff0c0"]};
  var AVATAR_ITEMS=[
    {id:"sex-male",cat:"Body",name:"Male",cost:0,field:"sex",val:"male"},
    {id:"sex-female",cat:"Body",name:"Female",cost:0,field:"sex",val:"female"},
    {id:"skin-light",cat:"Skin",name:"Light",cost:0,field:"skin",val:"light"},
    {id:"skin-amber",cat:"Skin",name:"Amber",cost:0,field:"skin",val:"amber"},
    {id:"skin-bronze",cat:"Skin",name:"Bronze",cost:0,field:"skin",val:"bronze"},
    {id:"skin-brown",cat:"Skin",name:"Brown",cost:0,field:"skin",val:"brown"},
    {id:"skin-taupe",cat:"Skin",name:"Deep",cost:0,field:"skin",val:"taupe"},
    {id:"hair-bald",cat:"Hair",name:"Bald",cost:0,field:"hairStyle",val:"bald"},
    {id:"hair-plain",cat:"Hair",name:"Plain",cost:0,field:"hairStyle",val:"plain"},
    {id:"hair-bangs",cat:"Hair",name:"Bangs",cost:0,field:"hairStyle",val:"bangs"},
    {id:"hair-pixie",cat:"Hair",name:"Pixie",cost:0,field:"hairStyle",val:"pixie"},
    {id:"hair-swoop",cat:"Hair",name:"Swoop",cost:60,field:"hairStyle",val:"swoop"},
    {id:"hair-curly",cat:"Hair",name:"Curly",cost:80,field:"hairStyle",val:"curly_long"},
    {id:"hair-long",cat:"Hair",name:"Long",cost:80,field:"hairStyle",val:"long"},
    {id:"hair-longmessy",cat:"Hair",name:"Long messy",cost:90,field:"hairStyle",val:"long_messy"},
    {id:"hair-highpony",cat:"Hair",name:"High ponytail",cost:100,field:"hairStyle",val:"high_ponytail"},
    {id:"hair-bunches",cat:"Hair",name:"Bunches",cost:100,field:"hairStyle",val:"bunches"},
    {id:"hair-braid",cat:"Hair",name:"Braid",cost:110,field:"hairStyle",val:"braid"},
    {id:"hair-afro",cat:"Hair",name:"Afro",cost:100,field:"hairStyle",val:"afro"},
    {id:"hair-spiked",cat:"Hair",name:"Spiked",cost:120,field:"hairStyle",val:"spiked"},
    {id:"hc-black",cat:"Hair color",name:"Black",cost:0,field:"hairColor",val:"black"},
    {id:"hc-darkbrown",cat:"Hair color",name:"Dark brown",cost:0,field:"hairColor",val:"dark_brown"},
    {id:"hc-blonde",cat:"Hair color",name:"Blonde",cost:60,field:"hairColor",val:"blonde"},
    {id:"hc-ash",cat:"Hair color",name:"Ash",cost:80,field:"hairColor",val:"ash"},
    {id:"hc-carrot",cat:"Hair color",name:"Ginger",cost:80,field:"hairColor",val:"carrot"},
    {id:"shirt-tee",cat:"Shirt",name:"T-shirt",cost:0,field:"shirt",val:"tee"},
    {id:"shirt-tank",cat:"Shirt",name:"Tank",cost:90,field:"shirt",val:"tank"},
    {id:"shirt-long",cat:"Shirt",name:"Long sleeve",cost:120,field:"shirt",val:"long"},
    {id:"sc-white",cat:"Shirt color",name:"White",cost:0,field:"shirtColor",val:"white"},
    {id:"sc-blue",cat:"Shirt color",name:"Blue",cost:0,field:"shirtColor",val:"blue"},
    {id:"sc-navy",cat:"Shirt color",name:"Navy",cost:0,field:"shirtColor",val:"navy"},
    {id:"sc-black",cat:"Shirt color",name:"Black",cost:40,field:"shirtColor",val:"black"},
    {id:"sc-red",cat:"Shirt color",name:"Red",cost:50,field:"shirtColor",val:"red"},
    {id:"sc-green",cat:"Shirt color",name:"Green",cost:70,field:"shirtColor",val:"green"},
    {id:"pants-brown",cat:"Pants",name:"Brown",cost:0,field:"pants",val:"brown"},
    {id:"pants-black",cat:"Pants",name:"Black",cost:0,field:"pants",val:"black"},
    {id:"pants-gray",cat:"Pants",name:"Gray",cost:0,field:"pants",val:"gray"},
    {id:"pants-blue",cat:"Pants",name:"Blue",cost:40,field:"pants",val:"blue"},
    {id:"pants-forest",cat:"Pants",name:"Forest",cost:70,field:"pants",val:"forest"},
    {id:"shoes-black",cat:"Shoes",name:"Black",cost:0,field:"shoes",val:"black"},
    {id:"shoes-brown",cat:"Shoes",name:"Brown",cost:0,field:"shoes",val:"brown"},
    {id:"hat-none",cat:"Hat",name:"None",cost:0,field:"hat",val:"none"},
    {id:"hat-bandana",cat:"Hat",name:"Bandana",cost:60,field:"hat",val:"bandana"},
    {id:"hat-hood",cat:"Hat",name:"Hood",cost:90,field:"hat",val:"hood"},
    {id:"hat-feathercap",cat:"Hat",name:"Feather cap",cost:110,field:"hat",val:"feathercap"},
    {id:"hat-tophat",cat:"Hat",name:"Top hat",cost:120,field:"hat",val:"tophat"},
    {id:"hat-crown",cat:"Hat",name:"Crown",cost:300,field:"hat",val:"crown"},
    {id:"bg-sky",cat:"Background",name:"Sky",cost:0,field:"bg",val:"sky"},
    {id:"bg-plain",cat:"Background",name:"Slate",cost:0,field:"bg",val:"plain"},
    {id:"bg-sunset",cat:"Background",name:"Sunset",cost:60,field:"bg",val:"sunset"},
    {id:"bg-forest",cat:"Background",name:"Forest",cost:90,field:"bg",val:"forest"},
    {id:"bg-night",cat:"Background",name:"Night",cost:110,field:"bg",val:"night"},
    {id:"bg-space",cat:"Background",name:"Space",cost:150,field:"bg",val:"space"},
    {id:"bg-gold",cat:"Background",name:"Gold",cost:200,field:"bg",val:"gold"}
  ];
  function avFrameKeys(e){
    var ks=["body__"+e.sex+"__"+e.skin,"pants__"+e.sex+"__"+e.pants,"shoes__"+e.sex+"__"+e.shoes,"shirt__"+e.shirt+"__"+e.sex+"__"+e.shirtColor,"head__"+e.sex+"__"+e.skin];
    if(e.hairStyle&&e.hairStyle!=="bald")ks.push("hair__"+e.hairStyle+"__"+e.sex+"__"+e.hairColor);
    if(e.hat&&e.hat!=="none")ks.push("hat__"+e.hat);
    return ks;
  }
  var _frameCache={},_framesReady=false;
  function preloadFrames(cb){
    var F=window.LPC_FRAMES||{},keys=Object.keys(F),n=keys.length,done=0;
    if(!n){_framesReady=true;if(cb)cb();return;}
    keys.forEach(function(k){var img=new Image();img.onload=img.onerror=function(){done++;if(done===n){_framesReady=true;if(cb)cb();}};img.src=F[k];_frameCache[k]=img;});
  }
  function composeSync(equip){
    var c=document.createElement("canvas");c.width=64;c.height=64;var x=c.getContext("2d");x.imageSmoothingEnabled=false;
    avFrameKeys(equip).forEach(function(k){var img=_frameCache[k];if(img&&img.complete&&img.naturalWidth)x.drawImage(img,0,0);});
    return c.toDataURL("image/png");
  }
  function bgCss(k){var g=AV_BG[k]||AV_BG.sky;return "linear-gradient(180deg,"+g[0]+","+g[1]+")";}
  function avatarWrap(src,size,bgKey){
    return '<span class="av-wrap" style="width:'+size+'px;height:'+size+'px;background:'+bgCss(bgKey)+'"><span class="av-shadow"></span><img class="av-sprite" src="'+src+'" style="width:'+size+'px;height:'+size+'px" alt=""></span>';
  }
  function avatarImg(profile,size){var e=(profile&&profile.equip)||{};return avatarWrap((profile&&profile.img)||DEFAULT_AVATAR,size,e.bg);}
  function loadProfile(){
    var free=AVATAR_ITEMS.filter(function(i){return i.cost===0;}).map(function(i){return i.id;});
    var p={spent:0,name:"",img:"",owned:free.slice(),equip:Object.assign({},DEFAULT_EQUIP)};
    try{var r=localStorage.getItem("steady.profile.v4");if(r){var j=JSON.parse(r);p.spent=j.spent||0;p.name=j.name||"";p.img=j.img||"";if(j.owned)p.owned=j.owned;p.equip=Object.assign({},DEFAULT_EQUIP,j.equip||{});}}catch(e){}
    free.forEach(function(id){if(p.owned.indexOf(id)<0)p.owned.push(id);});
    return p;
  }
  function saveProfile(p){try{localStorage.setItem("steady.profile.v4",JSON.stringify(p));}catch(e){}}
  function suiteStats(){
    var ks=["steady.health.v1","steady.study.v1","steady.work.v1","steady.home.v1","steadyMoney.v1"],xp=0,badges=0;
    ks.forEach(function(k){try{var r=localStorage.getItem(k);if(r){var j=JSON.parse(r);xp+=Number(j.__xp)||0;badges+=Number(j.__badges)||0;}}catch(e){}});
    var info=levelInfo(xp),earned=100+Math.floor(xp/4)+badges*20+(info.level-1)*30;
    return {xp:xp,badges:badges,level:info.level,title:info.title,pct:info.pct,into:info.into,span:info.span,coinsEarned:earned};
  }
  /* ---- premium gating ---- */
  var premOpts={};
  function isPremium(){return !!S.db.premium;}
  function openPrem(){var m=el("steady-prem");if(m)m.classList.add("open");}
  function verifyLicense(key){key=(key||"").trim();
    if(!key)return{active:false,msg:"Enter a key to unlock."};
    if(key.toUpperCase()==="STEADY-DEMO")return{active:true,msg:"Demo unlock active — enjoy the premium tools."};
    return{active:false,msg:"Billing isn't live yet — premium is coming soon."};}
  function applyPremium(){var on=isPremium();
    document.querySelectorAll(".panel.locked").forEach(function(p){var veil=p.querySelector(".lockveil");
      if(on){if(veil)veil.remove();}
      else if(!veil){var v=document.createElement("div");v.className="lockveil";
        v.innerHTML='<div class="in"><div style="font-size:30px">🔒</div><h3>A Premium feature</h3><p>'+(premOpts.veil||"Unlock the advanced tools with Premium.")+'</p><button class="btn" data-steady="premium">Unlock Premium</button></div>';
        p.appendChild(v);}});
    document.querySelectorAll(".snav .lk, .stab .lk").forEach(function(x){x.textContent=on?"✓":"🔒";});
    document.querySelectorAll(".premhdr").forEach(function(b){b.textContent=on?"✓ Premium":"⭐ Premium";});
    document.querySelectorAll('[data-steady="premium"]').forEach(function(b){b.onclick=openPrem;});
    var pt=el("sp-title"),pd=el("sp-desc"),pg=el("sp-get");
    if(on&&pt){pt.textContent="✓ Premium active";if(pd)pd.textContent="Thanks for supporting Steady. Everything's unlocked on this device.";if(pg)pg.style.display="none";}
  }
  function initPremium(opts){opts=opts||{};premOpts=opts;
    var pm=el("steady-prem");
    if(!pm){pm=document.createElement("div");pm.className="modal";pm.id="steady-prem";
      pm.innerHTML='<div class="box"><button class="close" id="sp-x">×</button>'+
        '<div class="upsell"><h2 id="sp-title">'+(opts.title||"Steady Premium")+'</h2><p id="sp-desc">'+(opts.desc||"Unlock the advanced tools.")+'</p>'+
        '<div class="price">$'+(opts.price||"3.99")+'<small>/mo</small></div>'+
        '<div class="keyrow"><input id="sp-key" placeholder="License key"><button class="btn" id="sp-verify">Unlock</button></div>'+
        '<div class="note" id="sp-status" style="color:rgba(255,255,255,.85);margin-top:10px;min-height:16px"></div></div>'+
        '<ul class="premlist">'+((opts.features||[]).map(function(f){return "<li>"+f+"</li>";}).join(""))+'</ul>'+
        '<button class="btn block" id="sp-get">Get Premium →</button>'+
        '<p class="setnote">One unlock covers this app on this device. Previewing? Try the key <b>STEADY-DEMO</b>.</p></div>';
      document.body.appendChild(pm);}
    el("sp-x").onclick=function(){pm.classList.remove("open");};
    pm.onclick=function(e){if(e.target===pm)pm.classList.remove("open");};
    el("sp-verify").onclick=function(){var st=el("sp-status");st.textContent="Checking…";
      var r=verifyLicense(val("sp-key"));S.db.premium=r.active;if(r.active)S.db.licenseKey=val("sp-key");save();applyPremium();
      if(opts.render)opts.render();st.innerHTML=r.active?('<span style="color:#39e3c8">✓ '+r.msg+'</span>'):r.msg;
      if(r.active){toast("Premium unlocked 🎉",1);setTimeout(function(){pm.classList.remove("open");},900);}};
    el("sp-get").onclick=function(){toast("Checkout isn't live yet — coming once billing is set up");};
    applyPremium();
  }
  var S={load:load,save:save,uid:uid,num:num,money:money,money0:money0,el:el,val:val,clr:clr,toast:toast,
    todayISO:todayISO,tm:tm,initShell:initShell,go:go,toggleTheme:toggleTheme,donut:donut,ring:ring,bars:bars,area:area,
    dkey:dkey,last7:last7,streak:streak,renderBadges:renderBadges,setDb:setDb,initAccount:initAccount,onboard:onboard,
    initPremium:initPremium,applyPremium:applyPremium,isPremium:isPremium,openPrem:openPrem,
    levelInfo:levelInfo,levelTitle:levelTitle,confetti:confetti,gamify:gamify,renderQuests:renderQuests,
    avatarImg:avatarImg,avatarWrap:avatarWrap,composeSync:composeSync,preloadFrames:preloadFrames,DEFAULT_EQUIP:DEFAULT_EQUIP,AVATAR_ITEMS:AVATAR_ITEMS,loadProfile:loadProfile,saveProfile:saveProfile,suiteStats:suiteStats,onTab:null,db:db};
  return S;
})();
