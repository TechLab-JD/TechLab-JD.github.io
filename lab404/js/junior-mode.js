/* junior-mode.js — a bright, big-target "Junior" layout for the youngest learners.
   Auto-on when the chosen grade is K-2 (unless the user set it otherwise); forces the
   light theme and scales the shell up. Toggle from the LAUNCH menu. Local-only state. */
(function () {
  "use strict";
  var FLAG = "lab404.junior";        /* "1" on, "0" off, absent = auto */
  var GRADE_KEY = "lab404.myGrade";
  var K2 = { K: 1, "1": 1, "2": 1 };
  var lastOn = null;

  function css() {
    if (document.getElementById("junior-style")) return;
    var s = document.createElement("style"); s.id = "junior-style";
    s.textContent = [
      "html.lab404-junior{font-size:17px}",
      /* bright, friendly desktop backdrop (the theme's light.css doesn't touch the canvas) */
      "html.lab404-junior .os-desktop{background:linear-gradient(165deg,#e9f5ff 0%,#eefaf0 55%,#fff6e8 100%)}",
      "html.lab404-junior #wallpaper-canvas{display:none!important}",
      "html.lab404-junior .desktop-icon{width:116px;gap:9px;padding:14px 8px 12px;border-radius:16px}",
      "html.lab404-junior .desktop-icon-img{font-size:54px;filter:drop-shadow(0 2px 3px rgba(40,70,110,.25))}",
      "html.lab404-junior .desktop-icon-label{font-size:.98rem;font-weight:700;color:#24324d;text-shadow:0 1px 2px rgba(255,255,255,.75)}",
      "html.lab404-junior .desktop-icon:hover{background:rgba(74,144,226,.12);border-color:rgba(74,144,226,.3);box-shadow:0 0 12px rgba(74,144,226,.18)}",
      "html.lab404-junior .taskbar-start{font-size:1.04rem;font-weight:700;padding:0 18px;gap:9px}",
      "html.lab404-junior .start-menu{border-radius:16px}",
      "html.lab404-junior .start-menu-item{font-size:1.04rem;padding:12px 14px;border-radius:12px}",
      "html.lab404-junior .start-menu-item .menu-icon{font-size:1.45rem}",
      "html.lab404-junior .os-window{border-radius:18px}",
      "html.lab404-junior .gd-tab{font-size:1rem;padding:10px 15px;border-radius:12px;min-width:42px}",
      "html.lab404-junior .gd-topic{padding:13px 15px;border-radius:14px}",
      "html.lab404-junior .gd-tt{font-size:.96rem}",
      "html.lab404-junior .gd-cbtn{font-size:1.02rem;padding:15px 17px;border-radius:16px}",
      "html.lab404-junior .gd-head h2{font-size:1.35rem}",
      ".junior-badge{display:inline-flex;align-items:center;gap:5px;font:600 11px/1 system-ui,sans-serif;color:#b5591a;background:rgba(240,150,40,.16);border:1px solid rgba(240,150,40,.4);border-radius:999px;padding:4px 9px}"
    ].join("");
    document.head.appendChild(s);
  }

  function gradeIsK2() {
    try { return !!K2[localStorage.getItem(GRADE_KEY)]; } catch (e) { return false; }
  }
  function explicit() {
    try { return localStorage.getItem(FLAG); } catch (e) { return null; }
  }
  function compute() {
    var e = explicit();
    if (e === "1") return true;
    if (e === "0") return false;
    return gradeIsK2();           /* auto: on for K-2 */
  }
  function isOn() { return document.documentElement.classList.contains("lab404-junior"); }

  function forceLight() {
    try { localStorage.setItem("aplus-theme", "light"); } catch (e) {}
    if (window._aplusApplyTheme) window._aplusApplyTheme();
    document.querySelectorAll(".theme-toggle").forEach(function (b) {
      var d = b.querySelector(".theme-icon-dark"), l = b.querySelector(".theme-icon-light");
      if (d) d.style.display = ""; if (l) l.style.display = "none";
    });
  }

  function apply(on, forceTheme) {
    document.documentElement.classList.toggle("lab404-junior", on);
    if (on && forceTheme) forceLight();
    if (lastOn !== on) { lastOn = on; updateToggleLabel(); }
  }

  function set(on) {
    try { localStorage.setItem(FLAG, on ? "1" : "0"); } catch (e) {}
    apply(on, on);                /* force light when turning on explicitly */
  }
  function toggle() { set(!isOn()); }
  function refresh() {            /* re-evaluate (e.g. after a grade change) */
    var next = compute();
    apply(next, next && !isOn()); /* force light only on an off->on transition */
  }

  function updateToggleLabel() {
    var btn = document.getElementById("juniorToggle");
    if (btn) btn.querySelector(".jr-state").textContent = isOn() ? "On" : "Off";
  }

  function addToggle() {
    var items = document.querySelector("#startMenu .start-menu-items");
    if (!items || document.getElementById("juniorToggle")) return;
    var div = document.createElement("div"); div.className = "start-menu-divider";
    var btn = document.createElement("button");
    btn.className = "start-menu-item"; btn.id = "juniorToggle"; btn.setAttribute("role", "menuitem");
    btn.innerHTML = '<span class="menu-icon">🧸</span><span>Junior mode: <b class="jr-state">' +
      (isOn() ? "On" : "Off") + '</b></span>';
    btn.addEventListener("click", function (e) { e.stopPropagation(); toggle(); });
    items.appendChild(div); items.appendChild(btn);
  }

  window.Lab404Junior = { refresh: refresh, toggle: toggle, set: set, isOn: isOn };

  function init() {
    css();
    apply(compute(), true);       /* if Junior is on, ensure the bright theme too */
    addToggle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
