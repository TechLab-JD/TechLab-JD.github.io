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
  var S={load:load,save:save,uid:uid,num:num,money:money,money0:money0,el:el,val:val,clr:clr,toast:toast,
    todayISO:todayISO,tm:tm,initShell:initShell,go:go,toggleTheme:toggleTheme,donut:donut,ring:ring,bars:bars,onTab:null,db:db};
  return S;
})();
