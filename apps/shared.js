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
      '<a href="character.html" class="charrow"><span class="charav">'+avatarSVG(prof.equip,46)+'</span>'+
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
  var AV={
    skin:{skin1:"#f3cfa8",skin2:"#e3ad7d",skin3:"#c68642",skin4:"#95571f",skin5:"#5c3a21"},
    hairc:{brown:"#6b4423",black:"#2b2b30",blonde:"#e9c45a",red:"#b4432a",blue:"#3a7bd5",pink:"#e86aa6",green:"#49ad6e",silver:"#c9ced6"},
    outc:{teal:"#17b3a0",navy:"#33508a",gray:"#78899f",red:"#d9484b",purple:"#8168f2",green:"#3fae5f",gold:"#e0a93c",black:"#2c3138"}
  };
  function shade(hex,p){hex=(hex||"#000").replace("#","");if(hex.length===3)hex=hex.split("").map(function(c){return c+c;}).join("");var n=parseInt(hex,16),r=(n>>16)&255,g=(n>>8)&255,b=n&255;function a(v){return Math.max(0,Math.min(255,Math.round(v*(1+p))));}return "#"+((1<<24)+(a(r)<<16)+(a(g)<<8)+a(b)).toString(16).slice(1);}
  function rr(x,y,w,h,f,r){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+(r||0)+'" fill="'+f+'"/>';}
  var DEFAULT_EQUIP={body:"masc",skin:"skin2",hair:"short",hairColor:"brown",outfit:"tee",outfitColor:"teal",hat:"none",glasses:"none",bg:"sky"};
  var AVATAR_ITEMS=[
    {id:"body-masc",cat:"Body",name:"Male",cost:0,field:"body",val:"masc"},
    {id:"body-fem",cat:"Body",name:"Female",cost:0,field:"body",val:"fem"},
    {id:"skin1",cat:"Skin",name:"Tone 1",cost:0,field:"skin",val:"skin1"},
    {id:"skin2",cat:"Skin",name:"Tone 2",cost:0,field:"skin",val:"skin2"},
    {id:"skin3",cat:"Skin",name:"Tone 3",cost:0,field:"skin",val:"skin3"},
    {id:"skin4",cat:"Skin",name:"Tone 4",cost:0,field:"skin",val:"skin4"},
    {id:"skin5",cat:"Skin",name:"Tone 5",cost:0,field:"skin",val:"skin5"},
    {id:"hair-short",cat:"Hair",name:"Short",cost:0,field:"hair",val:"short"},
    {id:"hair-long",cat:"Hair",name:"Long",cost:0,field:"hair",val:"long"},
    {id:"hair-buzz",cat:"Hair",name:"Buzz",cost:0,field:"hair",val:"buzz"},
    {id:"hair-bun",cat:"Hair",name:"Bun",cost:80,field:"hair",val:"bun"},
    {id:"hair-spiky",cat:"Hair",name:"Spiky",cost:100,field:"hair",val:"spiky"},
    {id:"hair-ponytail",cat:"Hair",name:"Ponytail",cost:120,field:"hair",val:"ponytail"},
    {id:"hair-curly",cat:"Hair",name:"Curly",cost:140,field:"hair",val:"curly"},
    {id:"hair-mohawk",cat:"Hair",name:"Mohawk",cost:160,field:"hair",val:"mohawk"},
    {id:"hc-brown",cat:"Hair color",name:"Brown",cost:0,field:"hairColor",val:"brown"},
    {id:"hc-black",cat:"Hair color",name:"Black",cost:0,field:"hairColor",val:"black"},
    {id:"hc-blonde",cat:"Hair color",name:"Blonde",cost:60,field:"hairColor",val:"blonde"},
    {id:"hc-red",cat:"Hair color",name:"Red",cost:80,field:"hairColor",val:"red"},
    {id:"hc-blue",cat:"Hair color",name:"Blue",cost:120,field:"hairColor",val:"blue"},
    {id:"hc-pink",cat:"Hair color",name:"Pink",cost:120,field:"hairColor",val:"pink"},
    {id:"hc-green",cat:"Hair color",name:"Green",cost:140,field:"hairColor",val:"green"},
    {id:"hc-silver",cat:"Hair color",name:"Silver",cost:160,field:"hairColor",val:"silver"},
    {id:"out-tee",cat:"Outfit",name:"T-shirt",cost:0,field:"outfit",val:"tee"},
    {id:"out-tank",cat:"Outfit",name:"Tank",cost:0,field:"outfit",val:"tank"},
    {id:"out-hoodie",cat:"Outfit",name:"Hoodie",cost:90,field:"outfit",val:"hoodie"},
    {id:"out-flannel",cat:"Outfit",name:"Flannel",cost:110,field:"outfit",val:"flannel"},
    {id:"out-dress",cat:"Outfit",name:"Dress",cost:120,field:"outfit",val:"dress"},
    {id:"out-jacket",cat:"Outfit",name:"Jacket",cost:130,field:"outfit",val:"jacket"},
    {id:"out-labcoat",cat:"Outfit",name:"Lab coat",cost:180,field:"outfit",val:"labcoat"},
    {id:"out-suit",cat:"Outfit",name:"Suit",cost:200,field:"outfit",val:"suit"},
    {id:"oc-teal",cat:"Outfit color",name:"Teal",cost:0,field:"outfitColor",val:"teal"},
    {id:"oc-navy",cat:"Outfit color",name:"Navy",cost:0,field:"outfitColor",val:"navy"},
    {id:"oc-gray",cat:"Outfit color",name:"Gray",cost:0,field:"outfitColor",val:"gray"},
    {id:"oc-black",cat:"Outfit color",name:"Black",cost:40,field:"outfitColor",val:"black"},
    {id:"oc-red",cat:"Outfit color",name:"Red",cost:50,field:"outfitColor",val:"red"},
    {id:"oc-purple",cat:"Outfit color",name:"Purple",cost:70,field:"outfitColor",val:"purple"},
    {id:"oc-green",cat:"Outfit color",name:"Green",cost:70,field:"outfitColor",val:"green"},
    {id:"oc-gold",cat:"Outfit color",name:"Gold",cost:150,field:"outfitColor",val:"gold"},
    {id:"hat-none",cat:"Hat",name:"None",cost:0,field:"hat",val:"none"},
    {id:"hat-beanie",cat:"Hat",name:"Beanie",cost:70,field:"hat",val:"beanie"},
    {id:"hat-cap",cat:"Hat",name:"Cap",cost:80,field:"hat",val:"cap"},
    {id:"hat-partyhat",cat:"Hat",name:"Party hat",cost:90,field:"hat",val:"partyhat"},
    {id:"hat-headphones",cat:"Hat",name:"Headphones",cost:130,field:"hat",val:"headphones"},
    {id:"hat-halo",cat:"Hat",name:"Halo",cost:260,field:"hat",val:"halo"},
    {id:"hat-crown",cat:"Hat",name:"Crown",cost:300,field:"hat",val:"crown"},
    {id:"gl-none",cat:"Glasses",name:"None",cost:0,field:"glasses",val:"none"},
    {id:"gl-glasses",cat:"Glasses",name:"Glasses",cost:60,field:"glasses",val:"glasses"},
    {id:"gl-shades",cat:"Glasses",name:"Shades",cost:90,field:"glasses",val:"shades"},
    {id:"bg-sky",cat:"Background",name:"Sky",cost:0,field:"bg",val:"sky"},
    {id:"bg-plain",cat:"Background",name:"Plain",cost:0,field:"bg",val:"plain"},
    {id:"bg-sunset",cat:"Background",name:"Sunset",cost:90,field:"bg",val:"sunset"},
    {id:"bg-night",cat:"Background",name:"Night",cost:110,field:"bg",val:"night"},
    {id:"bg-forest",cat:"Background",name:"Forest",cost:120,field:"bg",val:"forest"},
    {id:"bg-space",cat:"Background",name:"Space",cost:200,field:"bg",val:"space"},
    {id:"bg-gold",cat:"Background",name:"Gold",cost:250,field:"bg",val:"gold"}
  ];
  function avatarSVG(cfg,size){
    cfg=cfg||{};size=size||140;
    var sk=AV.skin[cfg.skin]||AV.skin.skin2,hc=AV.hairc[cfg.hairColor]||AV.hairc.brown,oc=AV.outc[cfg.outfitColor]||AV.outc.teal;
    var fem=cfg.body==="fem";
    var uid="av"+Math.random().toString(36).slice(2,7),defs="",bg="";
    var BGS={plain:["#223047"],sky:["#7fc7ff","#c9ecff"],sunset:["#ff9a6b","#ffd9a0"],night:["#1b2a4a","#0d1526"],forest:["#4f9e6a","#bfe6c8"],space:["#3a2a6b","#120a26"],gold:["#e9c45a","#fff0c0"]};
    var bgc=BGS[cfg.bg]||BGS.sky;
    if(bgc.length>1){defs+='<linearGradient id="'+uid+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+bgc[0]+'"/><stop offset="1" stop-color="'+bgc[1]+'"/></linearGradient>';bg=rr(-5,-6,58,66,"url(#"+uid+")",7);}
    else bg=rr(-5,-6,58,66,bgc[0],7);
    if(cfg.bg==="night"||cfg.bg==="space"){[[2,2],[40,0],[9,14],[44,20],[0,28],[33,4],[20,8],[46,42],[-2,44]].forEach(function(p){bg+='<rect x="'+p[0]+'" y="'+p[1]+'" width="1.4" height="1.4" fill="#fff" opacity="0.85"/>';});}
    function px(x,y,w,h,f){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+f+'"/>';}
    function blk(x,y,w,h,c){var o=shade(c,-0.5),s=shade(c,-0.22),l=shade(c,0.2);return px(x,y,w,h,o)+px(x+1,y+1,w-2,h-2,c)+px(x+w-2,y+2,1,h-3,s)+px(x+1,y+1,w-3,1,l);}
    var P=[],cx=24,tX=fem?18:15,tW=fem?11:18,tY=29,tH=16,oS=shade(oc,-0.22),oL=shade(oc,0.2),oO=shade(oc,-0.5);
    var isDress=cfg.outfit==="dress",pantsC=cfg.outfit==="suit"?shade(oc,-0.35):"#3b4b5c";
    if(cfg.hair==="long")P.push(blk(15,8,18,34,hc));
    if(!isDress){P.push(blk(18,45,5,9,pantsC));P.push(blk(25,45,5,9,pantsC));P.push(px(17,53,7,2,"#1f2630"));P.push(px(24,53,7,2,"#1f2630"));}
    else{P.push(blk(19,46,4,8,sk));P.push(blk(25,46,4,8,sk));P.push(px(18,53,6,2,"#1f2630"));P.push(px(24,53,6,2,"#1f2630"));}
    var longSleeve=["hoodie","jacket","flannel","suit","labcoat"].indexOf(cfg.outfit)>=0,armC=cfg.outfit==="labcoat"?"#eef3f7":(longSleeve?oc:sk),laX=tX-4,raX=tX+tW;
    P.push(blk(laX,31,4,11,armC));P.push(blk(raX,31,4,11,armC));
    P.push(blk(laX,40,4,4,sk));P.push(blk(raX,40,4,4,sk));
    if(cfg.outfit==="tank"){P.push(px(tX,tY,tW,2,sk));P.push(blk(tX+2,tY+1,tW-4,tH,oc));}
    else if(isDress){P.push(blk(tX,tY,tW,9,oc));P.push('<path d="M'+(tX-1)+' '+(tY+8)+' L'+(tX+tW+1)+' '+(tY+8)+' L'+(tX+tW+5)+' '+(tY+17)+' L'+(tX-5)+' '+(tY+17)+' Z" fill="'+oO+'"/><path d="M'+tX+' '+(tY+8)+' L'+(tX+tW)+' '+(tY+8)+' L'+(tX+tW+4)+' '+(tY+16)+' L'+(tX-4)+' '+(tY+16)+' Z" fill="'+oc+'"/>');}
    else P.push(blk(tX,tY,tW,tH,oc));
    if(cfg.outfit==="hoodie"){P.push(blk(tX-1,25,tW+2,5,oc));P.push(px(cx,tY+1,1,tH-2,oS));P.push(px(tX+2,tY+8,tW-4,4,oS));}
    else if(cfg.outfit==="jacket"){P.push(px(cx-2,tY,4,tH,oL));P.push(px(cx,tY,1,tH,oO));P.push('<path d="M'+(cx-2)+' '+tY+' L'+cx+' '+tY+' L'+(cx-2)+' '+(tY+6)+' Z" fill="'+oO+'"/><path d="M'+(cx+2)+' '+tY+' L'+cx+' '+tY+' L'+(cx+2)+' '+(tY+6)+' Z" fill="'+oO+'"/>');}
    else if(cfg.outfit==="suit"){P.push(px(cx-2,tY,4,tH,"#f2f4f7"));P.push('<path d="M'+(cx-2)+' '+tY+' L'+cx+' '+tY+' L'+(cx-2)+' '+(tY+7)+' Z" fill="'+oO+'"/><path d="M'+(cx+2)+' '+tY+' L'+cx+' '+tY+' L'+(cx+2)+' '+(tY+7)+' Z" fill="'+oO+'"/>');P.push(px(cx-1,tY,2,9,"#c0392b"));}
    else if(cfg.outfit==="flannel"){P.push(px(tX+3,tY,1,tH,oO));P.push(px(tX+tW-4,tY,1,tH,oO));P.push(px(tX,tY+5,tW,1,oO));P.push(px(tX,tY+10,tW,1,oO));}
    else if(cfg.outfit==="labcoat"){P.push(px(cx-2,tY,4,tH,shade(oc,0.1)));P.push(blk(tX,tY,tW,tH,"#eef3f7"));P.push(px(cx,tY+1,1,tH-2,"#c6d2db"));P.push(px(tX+tW-5,tY+9,3,3,"#c6d2db"));}
    else if(cfg.outfit==="tee")P.push(px(cx-2,tY,4,2,oL));
    if(fem&&!isDress&&cfg.outfit!=="tank"){P.push(px(tX+2,tY+3,2,1,oL));P.push(px(tX+tW-4,tY+3,2,1,oL));}
    P.push(px(cx-3,25,6,4,sk));P.push(px(cx-3,27,6,1,shade(sk,-0.2)));
    P.push('<path d="M15 6 H33 V7 H34 V25 H33 V26 H15 V25 H14 V7 H15 Z" fill="'+sk+'" stroke="'+shade(sk,-0.5)+'" stroke-width="1"/>');
    P.push(px(32,9,1,14,shade(sk,-0.14)));
    P.push(blk(12,15,3,5,sk));P.push(blk(33,15,3,5,sk));
    function eye(ex,ey){return px(ex,ey,4,6,"#20242e")+px(ex+1,ey+1,2,4,"#eef4fa")+px(ex+1,ey+2,2,3,"#2b3340")+px(ex+1,ey+1,1,1,"#ffffff");}
    var brow=shade(hc,-0.1);
    if(cfg.glasses!=="shades"){P.push(px(18,12,4,1,brow));P.push(px(26,12,4,1,brow));P.push(eye(18,13));P.push(eye(26,13));}
    P.push(px(23,19,1,2,shade(sk,-0.16)));
    P.push('<rect x="16" y="20" width="3" height="2" fill="#f2a0a0" opacity="0.5"/><rect x="29" y="20" width="3" height="2" fill="#f2a0a0" opacity="0.5"/>');
    P.push(px(22,22,4,1,shade(sk,-0.4))+px(21,21,1,1,shade(sk,-0.4))+px(26,21,1,1,shade(sk,-0.4)));
    var H=cfg.hair;
    if(H==="short"){P.push(blk(13,3,22,8,hc));P.push(blk(13,10,3,5,hc));P.push(blk(32,10,3,5,hc));}
    else if(H==="buzz")P.push(blk(14,4,20,6,hc));
    else if(H==="long"){P.push(blk(13,3,22,9,hc));P.push(blk(12,11,4,22,hc));P.push(blk(32,11,4,22,hc));}
    else if(H==="bun"){P.push(blk(14,4,20,7,hc));P.push(blk(20,0,8,6,hc));}
    else if(H==="ponytail"){P.push(blk(13,3,22,8,hc));P.push(blk(34,8,4,20,hc));}
    else if(H==="spiky"){P.push(blk(14,5,20,5,hc));P.push(blk(13,1,6,6,hc));P.push(blk(21,-1,6,7,hc));P.push(blk(29,1,6,6,hc));}
    else if(H==="curly"){P.push(blk(14,5,20,6,hc));P.push(blk(12,3,7,4,hc));P.push(blk(19,2,6,4,hc));P.push(blk(25,2,6,4,hc));P.push(blk(30,3,6,4,hc));}
    else if(H==="mohawk")P.push(blk(21,-1,6,13,hc));
    if(cfg.glasses==="glasses")P.push('<rect x="17" y="13" width="6" height="6" fill="none" stroke="#20242e" stroke-width="1.2"/><rect x="25" y="13" width="6" height="6" fill="none" stroke="#20242e" stroke-width="1.2"/>'+px(23,15,2,1,"#20242e"));
    else if(cfg.glasses==="shades")P.push(px(16,13,7,6,"#1c2028")+px(25,13,7,6,"#1c2028")+px(23,15,2,1,"#1c2028")+px(17,14,1,1,"#44506a"));
    var hat=cfg.hat;
    if(hat==="beanie"){P.push(blk(13,3,22,7,"#c0392b"));P.push(px(13,9,22,2,shade("#c0392b",0.25)));}
    else if(hat==="cap"){P.push(blk(14,3,20,7,"#2d6cdf"));P.push(px(11,9,14,2,shade("#2d6cdf",-0.25)));}
    else if(hat==="headphones"){P.push('<path d="M13 15 Q13 3 24 3 Q35 3 35 15" fill="none" stroke="#20242e" stroke-width="2.4"/>');P.push(blk(11,13,4,6,"#20242e"));P.push(blk(33,13,4,6,"#20242e"));P.push(px(12,14,2,4,"#e0a93c"));P.push(px(34,14,2,4,"#e0a93c"));}
    else if(hat==="crown"){P.push('<path d="M14 7 L18 2 L22 6 L24 1 L26 6 L30 2 L34 7 Z" fill="#f2c200" stroke="#cf9f00" stroke-width="0.7"/>');P.push(px(23,4,2,2,"#e8484b"));}
    else if(hat==="halo")P.push('<ellipse cx="24" cy="3" rx="8" ry="2.4" fill="none" stroke="#f2d04b" stroke-width="1.5"/>');
    else if(hat==="partyhat"){P.push('<path d="M24 -2 L19 10 L29 10 Z" fill="#e86aa6" stroke="#c44d86" stroke-width="0.7"/>');P.push(px(23,-2,2,2,"#fff0c0"));}
    return '<svg viewBox="-5 -6 58 66" width="'+size+'" height="'+size+'" style="display:block;shape-rendering:crispEdges">'+(defs?'<defs>'+defs+'</defs>':'')+bg+P.join("")+'</svg>';
  }
  function loadProfile(){
    var free=AVATAR_ITEMS.filter(function(i){return i.cost===0;}).map(function(i){return i.id;});
    var p={spent:0,name:"",owned:free.slice(),equip:Object.assign({},DEFAULT_EQUIP)};
    try{var r=localStorage.getItem("steady.profile.v1");if(r){var j=JSON.parse(r);p.spent=j.spent||0;p.name=j.name||"";if(j.owned)p.owned=j.owned;p.equip=Object.assign({},DEFAULT_EQUIP,j.equip||{});}}catch(e){}
    free.forEach(function(id){if(p.owned.indexOf(id)<0)p.owned.push(id);});
    return p;
  }
  function saveProfile(p){try{localStorage.setItem("steady.profile.v1",JSON.stringify(p));}catch(e){}}
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
    avatarSVG:avatarSVG,AVATAR_ITEMS:AVATAR_ITEMS,loadProfile:loadProfile,saveProfile:saveProfile,suiteStats:suiteStats,onTab:null,db:db};
  return S;
})();
