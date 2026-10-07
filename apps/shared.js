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
    var fem=cfg.body==="fem",uid="av"+Math.random().toString(36).slice(2,7),defs="",gi=0;
    function G(c){var id=uid+"g"+(gi++);defs+='<linearGradient id="'+id+'" x1="0" y1="0" x2="0.5" y2="1"><stop offset="0" stop-color="'+shade(c,0.16)+'"/><stop offset="1" stop-color="'+shade(c,-0.2)+'"/></linearGradient>';return "url(#"+id+")";}
    function E(x,y,rx,ry,f,s,w){return '<ellipse cx="'+x+'" cy="'+y+'" rx="'+rx+'" ry="'+ry+'" fill="'+(f||"none")+'"'+(s?' stroke="'+s+'" stroke-width="'+(w||1)+'"':"")+'/>';}
    function PA(d,f,s,w){return '<path d="'+d+'" fill="'+(f||"none")+'"'+(s?' stroke="'+s+'" stroke-width="'+(w||1)+'" stroke-linejoin="round" stroke-linecap="round"':"")+'/>';}
    function LN(x1,y1,x2,y2,s,w){return '<path d="M'+x1+' '+y1+' L'+x2+' '+y2+'" fill="none" stroke="'+s+'" stroke-width="'+w+'" stroke-linecap="round"/>';}
    var skG=G(sk),hcG=G(hc),ocG=G(oc),skO=shade(sk,-0.4),hcO=shade(hc,-0.42),ocO=shade(oc,-0.4);
    var BGS={plain:["#223047"],sky:["#7fc7ff","#c9ecff"],sunset:["#ff9a6b","#ffd9a0"],night:["#1b2a4a","#0d1526"],forest:["#4f9e6a","#bfe6c8"],space:["#3a2a6b","#120a26"],gold:["#e9c45a","#fff0c0"]};
    var bgc=BGS[cfg.bg]||BGS.sky,bg="";
    if(bgc.length>1){defs+='<linearGradient id="'+uid+'bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+bgc[0]+'"/><stop offset="1" stop-color="'+bgc[1]+'"/></linearGradient>';bg='<rect x="0" y="0" width="100" height="128" rx="12" fill="url(#'+uid+'bg)"/>';}
    else bg='<rect x="0" y="0" width="100" height="128" rx="12" fill="'+bgc[0]+'"/>';
    if(cfg.bg==="night"||cfg.bg==="space"){[[14,16],[82,12],[26,34],[90,44],[8,60],[66,10],[44,20],[92,92],[10,100]].forEach(function(p){bg+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="1.3" fill="#fff" opacity="0.85"/>';});}
    var P=[];
    var aLx1=fem?36:31,aRx1=fem?64:69,aLx2=fem?30:25,aRx2=fem?70:75,aY1=65,aY2=fem?95:97,aW=fem?7:8.5;
    var legW=fem?9.5:10.5,lLx=fem?44:43,rLx=fem?56:57,legY1=98,legY2=119;
    var longSleeve=["hoodie","jacket","flannel","suit","labcoat"].indexOf(cfg.outfit)>=0;
    var sleeve=cfg.outfit==="labcoat"?"#eef3f7":(longSleeve?oc:sk),sleeveG=cfg.outfit==="labcoat"?G("#eef3f7"):(longSleeve?ocG:skG);
    var pants=cfg.outfit==="suit"?shade(oc,-0.3):"#39485a",pantsG=G(pants),isDress=cfg.outfit==="dress";
    if(cfg.hair==="long"){P.push(PA("M28,30 C14,50 17,86 25,106 C31,102 32,72 35,50 C33,42 31,36 31,30 Z",hcG,hcO,1.4));P.push(PA("M72,30 C86,50 83,86 75,106 C69,102 68,72 65,50 C67,42 69,36 69,30 Z",hcG,hcO,1.4));}
    if(!isDress){
      P.push(LN(lLx,legY1,lLx-1,legY2,shade(pants,-0.4),legW+3));P.push(LN(rLx,legY1,rLx+1,legY2,shade(pants,-0.4),legW+3));
      P.push(LN(lLx,legY1,lLx-1,legY2,pantsG,legW));P.push(LN(rLx,legY1,rLx+1,legY2,pantsG,legW));
      P.push(PA("M"+(lLx-6)+",118 Q"+(lLx-8)+",125 "+(lLx-1)+",125 L"+(lLx+3)+",125 Q"+(lLx+5)+",121 "+(lLx+4)+",118 Z","#2a3340","#171d24",1));
      P.push(PA("M"+(rLx-4)+",118 Q"+(rLx-3)+",125 "+(rLx+2)+",125 L"+(rLx+6)+",125 Q"+(rLx+8)+",121 "+(rLx+6)+",118 Z","#2a3340","#171d24",1));
    } else {
      P.push(LN(lLx,legY1+6,lLx-1,legY2,skG,legW-3));P.push(LN(rLx,legY1+6,rLx+1,legY2,skG,legW-3));
      P.push(E(lLx-1,122,6,3,"#2a3340","#171d24",1));P.push(E(rLx+1,122,6,3,"#2a3340","#171d24",1));
    }
    P.push(LN(aLx1,aY1,aLx2,aY2,shade(sleeve,-0.4),aW+3));P.push(LN(aRx1,aY1,aRx2,aY2,shade(sleeve,-0.4),aW+3));
    P.push(LN(aLx1,aY1,aLx2,aY2,sleeveG,aW));P.push(LN(aRx1,aY1,aRx2,aY2,sleeveG,aW));
    P.push(E(aLx2-1,aY2+2,4,4,skG,skO,1.2));P.push(E(aRx2+1,aY2+2,4,4,skG,skO,1.2));
    P.push(PA("M44,47 C44,55 56,55 56,47 L56,54 C56,60 44,60 44,54 Z",skG,skO,1));
    P.push(PA("M43,48 C46,53 54,53 57,48",null,shade(sk,-0.28),1.6));
    var torso=fem?"M35,63 C34,72 36,78 37,82 C33,88 34,96 39,102 L61,102 C66,96 67,88 63,82 C64,78 66,72 65,63 C58,58 54,56 50,56 C46,56 42,58 35,63 Z":"M28,65 C26,80 30,93 34,102 L66,102 C70,93 74,80 72,65 C64,59 56,57 50,57 C44,57 36,59 28,65 Z";
    if(isDress){
      P.push(PA(fem?"M36,61 C36,74 38,80 39,84 L61,84 C62,80 64,74 64,61 C57,57 54,56 50,56 C46,56 43,57 36,61 Z":"M30,63 C30,76 33,82 34,86 L66,86 C67,82 70,76 70,63 C62,58 56,57 50,57 C44,57 38,58 30,63 Z",ocG,ocO,1.4));
      P.push(PA("M37,84 L63,84 C72,96 77,108 79,117 C67,122 33,122 21,117 C23,108 28,96 37,84 Z",ocG,ocO,1.4));
    } else if(cfg.outfit==="tank"){
      P.push(PA(torso,skG,skO,1.2));
      P.push(PA(fem?"M39,65 C38,74 39,88 41,102 L59,102 C61,88 62,74 61,65 C56,61 54,60 50,60 C46,60 44,61 39,65 Z":"M34,66 C33,80 35,93 37,102 L63,102 C65,93 67,80 66,66 C60,61 55,60 50,60 C45,60 40,61 34,66 Z",ocG,ocO,1.4));
    } else {
      P.push(PA(torso,ocG,ocO,1.4));
    }
    if(!isDress&&cfg.outfit!=="tank"){
      if(cfg.outfit==="hoodie"){P.push(PA("M40,57 C42,65 58,65 60,57 C58,61 42,61 40,57 Z",shade(oc,-0.25)));P.push(PA("M50,59 L50,98",null,shade(oc,-0.3),1.6));P.push(PA("M39,84 Q50,90 61,84 L61,93 Q50,98 39,93 Z",shade(oc,-0.22)));P.push(LN(47,59,46,71,"#eef3f7",1.6));P.push(LN(53,59,54,71,"#eef3f7",1.6));}
      else if(cfg.outfit==="jacket"){P.push(PA("M44,57 L50,74 L56,57 C54,61 46,61 44,57 Z",shade(oc,0.18)));P.push(PA("M50,58 L50,101",null,shade(oc,-0.35),1.6));P.push(PA("M44,58 L50,73 L43,70 Z",shade(oc,-0.35)));P.push(PA("M56,58 L50,73 L57,70 Z",shade(oc,-0.35)));}
      else if(cfg.outfit==="suit"){P.push(PA("M44,57 L50,80 L56,57 C54,61 46,61 44,57 Z","#f3f5f8"));P.push(PA("M44,57 L50,72 L43,69 Z",shade(oc,-0.35)));P.push(PA("M56,57 L50,72 L57,69 Z",shade(oc,-0.35)));P.push(PA("M48,59 L52,59 L51,82 L49,82 Z","#b23b3b"));}
      else if(cfg.outfit==="tee"){P.push(PA("M42,57 Q50,63 58,57",null,shade(oc,0.2),1.8));}
      else if(cfg.outfit==="flannel"){P.push(PA("M50,57 L50,101",null,ocO,1.3));P.push(PA("M41,60 L41,99",null,ocO,1));P.push(PA("M59,60 L59,99",null,ocO,1));P.push(PA("M32,75 L68,75",null,ocO,1));P.push(PA("M31,89 L69,89",null,ocO,1));}
      else if(cfg.outfit==="labcoat"){P.push(PA(torso,G("#eef3f7"),"#c6d2db",1.4));P.push(PA("M44,57 L50,76 L56,57 C54,61 46,61 44,57 Z",shade(oc,0.12)));P.push(PA("M50,59 L50,101",null,"#c6d2db",1.3));P.push(PA("M57,85 L64,85 L64,93 L57,93 Z","#dbe4eb","#c6d2db",0.8));}
    }
    if(fem&&!isDress&&cfg.outfit!=="tank"){P.push(PA("M41,70 Q46,75 43,80",null,shade(oc,0.14),1.5));P.push(PA("M59,70 Q54,75 57,80",null,shade(oc,0.14),1.5));}
    P.push(E(30,34,3.4,5.4,skG,skO,1.2));P.push(E(70,34,3.4,5.4,skG,skO,1.2));
    P.push(PA("M30,30 C30,15 38,9 50,9 C62,9 70,15 70,30 C70,43 62,53 50,54 C38,53 30,43 30,30 Z",skG,skO,1.4));
    P.push(PA("M64,20 C69,30 67,44 55,53 C65,47 67,32 63,20 Z",shade(sk,-0.1)));
    function eye(ex){return E(ex,33,3.1,4,"#fbfdff",shade(sk,-0.3),0.8)+E(ex,33.6,2.4,2.4,"#39404e")+E(ex-0.8,32,0.9,0.9,"#ffffff")+PA("M"+(ex-3.2)+",31 Q"+ex+",28.4 "+(ex+3.2)+",31",null,"#2f3540",1.3);}
    var brow=shade(hc,-0.05);
    if(cfg.glasses!=="shades"){P.push(PA("M38,25.5 Q42,23.5 46,25.5",null,brow,1.8));P.push(PA("M54,25.5 Q58,23.5 62,25.5",null,brow,1.8));P.push(eye(42));P.push(eye(58));}
    P.push(PA("M49,38 Q50,41 51.5,40",null,shade(sk,-0.2),1.1));
    P.push(PA("M45,45 Q50,49 55,45",null,shade(sk,-0.34),1.5));
    P.push('<ellipse cx="38" cy="42.5" rx="3.2" ry="2" fill="#f2a0a0" opacity="0.5"/><ellipse cx="62" cy="42.5" rx="3.2" ry="2" fill="#f2a0a0" opacity="0.5"/>');
    var H=cfg.hair;
    if(H==="short"){P.push(PA("M29,31 C27,14 40,6 50,6 C60,6 73,14 71,31 C67,24 60,21 55,25 C52,20 48,20 45,25 C39,21 33,24 29,31 Z",hcG,hcO,1.4));P.push(PA("M42,13 Q50,10 59,14",null,shade(hc,0.22),1.6));}
    else if(H==="buzz"){P.push(PA("M31,27 C32,14 42,8 50,8 C58,8 68,14 69,27 C60,20 40,20 31,27 Z",hcG,hcO,1.2));}
    else if(H==="long"){P.push(PA("M29,31 C27,14 40,6 50,6 C60,6 73,14 71,31 C67,24 60,21 55,25 C52,20 48,20 45,25 C39,21 33,24 29,31 Z",hcG,hcO,1.4));}
    else if(H==="bun"){P.push(PA("M30,30 C29,15 40,8 50,8 C60,8 71,15 70,30 C65,24 58,22 52,25 C50,21 48,21 46,25 C40,22 34,24 30,30 Z",hcG,hcO,1.3));P.push(E(50,8,7,6,hcG,hcO,1.2));}
    else if(H==="ponytail"){P.push(PA("M29,31 C27,14 40,6 50,6 C60,6 73,14 71,31 C67,24 60,21 55,25 C52,20 48,20 45,25 C39,21 33,24 29,31 Z",hcG,hcO,1.4));P.push(PA("M68,22 C82,28 84,52 77,68 C72,64 70,46 64,33 Z",hcG,hcO,1.4));}
    else if(H==="spiky"){P.push(PA("M28,32 L33,12 L39,27 L45,8 L51,27 L57,10 L63,28 L72,32 C66,23 60,21 55,24 C52,19 48,19 45,24 C40,21 33,25 28,32 Z",hcG,hcO,1.3));}
    else if(H==="curly"){P.push(PA("M29,30 C28,18 38,12 50,12 C62,12 72,18 71,30 C66,24 58,22 50,23 C42,22 34,24 29,30 Z",hcG,hcO,1.2));P.push(E(33,21,6,6,hcG,hcO,1)+E(43,15,7,7,hcG,hcO,1)+E(57,15,7,7,hcG,hcO,1)+E(67,21,6,6,hcG,hcO,1));}
    else if(H==="mohawk"){P.push(PA("M45,30 C43,10 48,1 50,1 C52,1 57,10 55,30 Z",hcG,hcO,1.3));}
    if(cfg.glasses==="glasses"){P.push('<rect x="36" y="28.5" width="12" height="10" rx="4.5" fill="none" stroke="#2a2f3a" stroke-width="1.6"/><rect x="52" y="28.5" width="12" height="10" rx="4.5" fill="none" stroke="#2a2f3a" stroke-width="1.6"/>');P.push(PA("M48,32.5 L52,32.5",null,"#2a2f3a",1.6));}
    else if(cfg.glasses==="shades"){P.push('<rect x="35" y="28.5" width="13" height="10" rx="4.5" fill="#20242c"/><rect x="52" y="28.5" width="13" height="10" rx="4.5" fill="#20242c"/>');P.push(PA("M48,32.5 L52,32.5",null,"#20242c",1.8));P.push(E(39,31,1.4,1.4,"#44506a"));}
    var hat=cfg.hat;
    if(hat==="beanie"){P.push(PA("M28,30 C28,14 38,9 50,9 C62,9 72,14 72,30 C62,24 38,24 28,30 Z","#c0392b",shade("#c0392b",-0.4),1.4));P.push(PA("M28,28 C38,33 62,33 72,28 L72,33 C62,38 38,38 28,33 Z",shade("#c0392b",0.18)));}
    else if(hat==="cap"){P.push(PA("M30,30 C30,15 40,10 50,10 C60,10 70,15 70,30 C60,24 40,24 30,30 Z","#2d6cdf",shade("#2d6cdf",-0.4),1.4));P.push(PA("M22,30 Q16,34 30,35 L48,35 Q40,31 40,29 Z",shade("#2d6cdf",-0.22)));}
    else if(hat==="headphones"){P.push(PA("M28,34 C28,12 38,6 50,6 C62,6 72,12 72,34",null,"#20242e",3.2));P.push(E(29,35,5,7.5,"#20242e"));P.push(E(71,35,5,7.5,"#20242e"));P.push(E(29,35,2.4,4,"#e0a93c"));P.push(E(71,35,2.4,4,"#e0a93c"));}
    else if(hat==="crown"){P.push(PA("M30,20 L36,7 L43,16 L50,4 L57,16 L64,7 L70,20 C58,16 42,16 30,20 Z","#f2c200","#cf9f00",1));P.push(E(50,12,2.5,2.5,"#e8484b"));}
    else if(hat==="halo"){P.push(E(50,5,14,4,"none","#f2d04b",2.6));}
    else if(hat==="partyhat"){P.push(PA("M50,-5 L40,21 Q50,25 60,21 Z","#e86aa6","#c44d86",1.2));P.push(E(50,-5,3,3,"#fff0c0"));P.push(PA("M45,9 Q50,11 55,9",null,"#fff0c0",1.4));}
    return '<svg viewBox="0 0 100 128" width="'+size+'" height="'+size+'" style="display:block">'+'<defs>'+defs+'</defs>'+bg+P.join("")+'</svg>';
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
