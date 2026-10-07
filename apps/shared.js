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
    document.querySelectorAll(".stab").forEach(function(t){t.onclick=function(){
      document.querySelectorAll(".stab").forEach(x=>x.classList.remove("active"));
      document.querySelectorAll(".panel").forEach(x=>x.classList.remove("active"));
      t.classList.add("active");var p=el("panel-"+t.dataset.panel);if(p)p.classList.add("active");
      window.scrollTo(0,0); if(typeof S.onTab==="function")S.onTab(t.dataset.panel);
    };});
  }
  function go(panel){var b=document.querySelector('.stab[data-panel="'+panel+'"]');if(b)b.click();}
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
  var S={load:load,save:save,uid:uid,num:num,money:money,money0:money0,el:el,val:val,clr:clr,toast:toast,
    todayISO:todayISO,tm:tm,initShell:initShell,go:go,toggleTheme:toggleTheme,donut:donut,ring:ring,bars:bars,area:area,
    dkey:dkey,last7:last7,streak:streak,renderBadges:renderBadges,setDb:setDb,initAccount:initAccount,onboard:onboard,onTab:null,db:db};
  return S;
})();
