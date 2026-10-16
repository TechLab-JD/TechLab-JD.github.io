/* a11y.js — accessibility options: text size, a readable (dyslexia-friendly) font,
   and reduce-motion. Applied via <html> classes, saved per device. A small "Aa"
   button in the taskbar tray opens the panel. (Light/dark lives on the theme toggle.) */
(function () {
  "use strict";
  var KEY = "lab404.a11y";
  var def = { tsize: "normal", readable: false, motion: false, nightdim: false, raRate: 1 };
  var st = def;
  try { var r = localStorage.getItem(KEY); if (r) st = Object.assign({}, def, JSON.parse(r)); } catch (e) {}

  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }

  /* F4: night-friendly dim — when on, warm/dim the screen during evening hours only. */
  function isEvening() { var h = new Date().getHours(); return h >= 20 || h < 6; }
  function applyNight() {
    if (!document.body) return;
    var on = !!st.nightdim && isEvening();
    var ov = document.getElementById("lab404-night");
    if (on && !ov) {
      ov = document.createElement("div"); ov.id = "lab404-night"; ov.setAttribute("aria-hidden", "true");
      document.body.appendChild(ov);
    } else if (!on && ov) { ov.parentNode.removeChild(ov); }
  }

  function apply() {
    var h = document.documentElement;
    h.classList.toggle("a11y-tsz-lg", st.tsize === "lg");
    h.classList.toggle("a11y-tsz-xl", st.tsize === "xl");
    h.classList.toggle("a11y-readable", !!st.readable);
    h.classList.toggle("a11y-reduce-motion", !!st.motion);
    applyNight();
    if (window.ReadAloud && window.ReadAloud.setRate) window.ReadAloud.setRate(st.raRate || 1);  /* R4 */
  }

  function css() {
    if (document.getElementById("a11y-style")) return;
    var s = document.createElement("style"); s.id = "a11y-style";
    s.textContent = [
      "html.a11y-tsz-lg{font-size:18px}",
      "html.a11y-tsz-xl{font-size:20px}",
      "html.a11y-readable,html.a11y-readable button,html.a11y-readable input,html.a11y-readable textarea,html.a11y-readable select,html.a11y-readable .os-window-content{font-family:Verdana,\"Trebuchet MS\",\"Segoe UI\",sans-serif}",
      "html.a11y-readable{letter-spacing:.012em}",
      "html.a11y-readable .os-window-content{line-height:1.7}",
      "html.a11y-readable code,html.a11y-readable pre,html.a11y-readable .cv-obj-code,html.a11y-readable .mono{font-family:\"Consolas\",\"SF Mono\",monospace;letter-spacing:0}",
      "html.a11y-reduce-motion *{animation-duration:.001s!important;animation-iteration-count:1!important;transition-duration:.001s!important;scroll-behavior:auto!important}",
      "html.a11y-reduce-motion #wallpaper-canvas{display:none}",
      /* F4 night dim: warm, semi-transparent overlay that sits above the page but takes no clicks */
      "#lab404-night{position:fixed;inset:0;z-index:9996;pointer-events:none;background:rgba(255,168,76,.16);mix-blend-mode:multiply}",
      /* control + popup */
      ".a11y-btn{display:inline-flex;align-items:center;justify-content:center;min-width:26px;height:26px;padding:0 5px;border-radius:7px;border:1px solid var(--border,#2a3432);background:transparent;color:inherit;font:700 13px/1 system-ui,sans-serif;cursor:pointer;opacity:.82}",
      ".a11y-btn:hover{opacity:1;border-color:var(--accent2,#39e3c8);color:var(--accent2,#39e3c8)}",
      ".a11y-pop{position:fixed;z-index:9997;background:#0f1619;border:1px solid #223;border-radius:12px;box-shadow:0 14px 40px rgba(0,0,0,.55);padding:12px;width:230px;color:#dfecea;font-family:system-ui,-apple-system,Segoe UI,sans-serif}",
      ".a11y-pop[hidden]{display:none}",
      ".a11y-pop h4{margin:0 0 8px;font:600 11px/1 ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase;color:#39e3c8}",
      ".a11y-grp{margin-bottom:11px}",
      ".a11y-lbl{font-size:12px;color:#9fb0ad;margin-bottom:5px}",
      ".a11y-seg{display:flex;gap:5px}",
      ".a11y-seg button{flex:1;background:#141d1f;border:1px solid #2a3b3a;color:#dfecea;border-radius:7px;padding:6px 0;font:600 12px system-ui;cursor:pointer}",
      ".a11y-seg button.on{background:#39e3c8;border-color:#39e3c8;color:#06201c}",
      ".a11y-tog{display:flex;align-items:center;justify-content:space-between;gap:10px;background:#141d1f;border:1px solid #2a3b3a;border-radius:8px;padding:8px 10px;cursor:pointer}",
      ".a11y-tog span{font-size:12.5px}",
      ".a11y-pip{width:34px;height:18px;border-radius:10px;background:#2a3b3a;position:relative;flex:none;transition:background .15s}",
      ".a11y-pip::after{content:\"\";position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:#dfecea;transition:left .15s}",
      ".a11y-tog.on .a11y-pip{background:#39e3c8}",
      ".a11y-tog.on .a11y-pip::after{left:18px}"
    ].join("");
    document.head.appendChild(s);
  }

  var pop = null;
  function buildPop() {
    pop = document.createElement("div");
    pop.className = "a11y-pop"; pop.hidden = true;
    pop.setAttribute("role", "dialog"); pop.setAttribute("aria-label", "Accessibility");
    pop.innerHTML =
      '<h4>Accessibility</h4>' +
      '<div class="a11y-grp"><div class="a11y-lbl">Text size</div>' +
        '<div class="a11y-seg" id="a11y-tsize">' +
          '<button data-sz="normal">A</button><button data-sz="lg">A+</button><button data-sz="xl">A++</button></div></div>' +
      '<div class="a11y-grp"><div class="a11y-lbl">Reading speed</div>' +
        '<div class="a11y-seg" id="a11y-rate">' +
          '<button data-rate="0.75">Slow</button><button data-rate="1">Normal</button><button data-rate="1.3">Fast</button></div></div>' +
      '<div class="a11y-grp"><div class="a11y-tog" id="a11y-readable"><span>Readable font</span><span class="a11y-pip"></span></div></div>' +
      '<div class="a11y-grp"><div class="a11y-tog" id="a11y-motion"><span>Reduce motion</span><span class="a11y-pip"></span></div></div>' +
      '<div class="a11y-grp" style="margin-bottom:0"><div class="a11y-tog" id="a11y-night"><span>Night dim (8pm–6am)</span><span class="a11y-pip"></span></div></div>';
    document.body.appendChild(pop);
    pop.addEventListener("click", function (e) { e.stopPropagation(); });
    pop.querySelectorAll("#a11y-tsize button").forEach(function (b) {
      b.addEventListener("click", function () { st.tsize = b.dataset.sz; save(); apply(); sync(); });
    });
    document.getElementById("a11y-readable").addEventListener("click", function () { st.readable = !st.readable; save(); apply(); sync(); });
    document.getElementById("a11y-motion").addEventListener("click", function () { st.motion = !st.motion; save(); apply(); sync(); });
    document.getElementById("a11y-night").addEventListener("click", function () { st.nightdim = !st.nightdim; save(); apply(); sync(); });
    pop.querySelectorAll("#a11y-rate button").forEach(function (b) {
      b.addEventListener("click", function () {
        st.raRate = parseFloat(b.dataset.rate); save(); apply(); sync();
        if (window.ReadAloud && window.ReadAloud.speak) window.ReadAloud.speak("This is the reading speed.");  /* preview */
      });
    });
    sync();
  }
  function sync() {
    if (!pop) return;
    pop.querySelectorAll("#a11y-tsize button").forEach(function (b) { b.classList.toggle("on", b.dataset.sz === st.tsize); });
    document.getElementById("a11y-readable").classList.toggle("on", !!st.readable);
    document.getElementById("a11y-motion").classList.toggle("on", !!st.motion);
    document.getElementById("a11y-night").classList.toggle("on", !!st.nightdim);
    pop.querySelectorAll("#a11y-rate button").forEach(function (b) { b.classList.toggle("on", parseFloat(b.dataset.rate) === (st.raRate || 1)); });
  }
  function place(btn) {
    var r = btn.getBoundingClientRect();
    pop.style.right = Math.max(8, window.innerWidth - r.right) + "px";
    pop.style.bottom = (window.innerHeight - r.top + 8) + "px";
  }
  function toggle(btn) {
    if (!pop) buildPop();
    if (pop.hidden) { place(btn); pop.hidden = false; } else { pop.hidden = true; }
  }

  function addButton() {
    var tray = document.querySelector(".taskbar-tray");
    if (!tray || document.getElementById("a11yBtn")) return;
    var btn = document.createElement("button");
    btn.className = "a11y-btn"; btn.id = "a11yBtn"; btn.type = "button";
    btn.textContent = "Aa";
    btn.title = "Accessibility — text size, readable font, reduce motion, night dim";
    btn.setAttribute("aria-label", "Accessibility options");
    btn.addEventListener("click", function (e) { e.stopPropagation(); toggle(btn); });
    var clock = document.getElementById("taskbarClock");
    if (clock) tray.insertBefore(btn, clock); else tray.appendChild(btn);
    document.addEventListener("click", function () { if (pop && !pop.hidden) pop.hidden = true; });
    window.addEventListener("resize", function () { if (pop && !pop.hidden) place(btn); });
  }

  css(); apply();
  setInterval(applyNight, 5 * 60 * 1000);  /* F4: re-evaluate as the evening window starts/ends */
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addButton);
  else addButton();
})();
