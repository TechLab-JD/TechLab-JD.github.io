/* focus-mode.js (R4-13) — pin a few subjects, hide the rest.
   Single-goal learners (e.g. someone only studying CompTIA A+) don't want 20
   subject folders in their face. Focus mode hides every desktop subject except
   the ones they pin, with a one-click "Show all" to leave. Works by hiding the
   rendered desktop icons, so it never touches the icon-render internals and
   re-applies if the desktop redraws. Local-only. window.Lab404Focus */
(function () {
  "use strict";

  var KEY = "lab404.focus";   /* JSON array of app ids (e.g. "folder-comptia"); empty = off */

  function pinned() { try { return JSON.parse(localStorage.getItem(KEY) || "[]") || []; } catch (e) { return []; } }
  function isOn() { return pinned().length > 0; }
  function setPins(list) { try { if (list && list.length) localStorage.setItem(KEY, JSON.stringify(list)); else localStorage.removeItem(KEY); } catch (e) {} apply(); updateToggleLabel(); }

  function css() {
    if (document.getElementById("focus-style")) return;
    var s = document.createElement("style"); s.id = "focus-style";
    s.textContent = [
      ".focus-chip{position:fixed;left:50%;transform:translateX(-50%);top:calc(env(safe-area-inset-top,0px) + 12px);",
      "  z-index:115;display:flex;align-items:center;gap:10px;background:var(--surface,#111726);color:var(--text,#e6edf6);",
      "  border:1px solid var(--accent,#39e3c8);border-radius:999px;padding:7px 8px 7px 14px;font:inherit;font-size:.8rem;box-shadow:0 4px 16px rgba(0,0,0,.35)}",
      ".focus-chip[hidden]{display:none!important}",
      ".focus-chip b{color:var(--accent,#39e3c8)}",
      ".focus-chip button{border:0;background:var(--surface-2,rgba(127,127,127,.15));color:var(--text,#e6edf6);border-radius:999px;padding:5px 11px;font:inherit;font-size:.74rem;font-weight:700;cursor:pointer}",
      ".focus-chip button:hover{background:var(--accent,#39e3c8);color:#05211c}",
      "html.lab404-kiosk .focus-chip{display:none!important}",
      ".fc-setup{padding:16px 18px;max-width:520px;margin:0 auto}",
      ".fc-setup h2{color:var(--accent2,#4a90e2);margin:0 0 4px;font-size:1.15rem}",
      ".fc-setup p{color:var(--text-muted,#9aa);font-size:.84rem;margin:0 0 14px;line-height:1.5}",
      ".fc-opt{display:flex;align-items:center;gap:11px;border:1px solid var(--border,#334);border-radius:11px;padding:11px 13px;margin-bottom:8px;cursor:pointer}",
      ".fc-opt:hover{border-color:var(--accent2,#4a90e2)}",
      ".fc-opt input{width:18px;height:18px;accent-color:var(--accent2,#4a90e2)}",
      ".fc-opt .ic{font-size:1.4rem}.fc-opt .nm{font-weight:700}",
      ".fc-row{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}",
      ".fc-btn{border:1px solid var(--accent2,#4a90e2);background:var(--accent2,#4a90e2);color:#fff;border-radius:9px;padding:10px 16px;font:inherit;font-weight:700;font-size:.85rem;cursor:pointer}",
      ".fc-btn.ghost{background:transparent;color:var(--text,#dfe);border-color:var(--border,#334)}"
    ].join("");
    document.head.appendChild(s);
  }

  var chip = null, observer = null, applying = false;

  function desktopIcons() { return [].slice.call(document.querySelectorAll("#desktopIcons .desktop-icon[data-app]")); }

  function apply() {
    var icons = desktopIcons();
    if (!icons.length) return;
    var pins = pinned(), on = pins.length > 0;
    applying = true;
    icons.forEach(function (el) { el.hidden = on && pins.indexOf(el.getAttribute("data-app")) === -1; });
    applying = false;
    css(); drawChip(on, pins.length);
  }

  function drawChip(on, n) {
    if (!chip) {
      chip = document.createElement("div"); chip.className = "focus-chip"; chip.hidden = true;
      chip.innerHTML = '<span>🎯 Focused on <b></b></span><button type="button">Show all</button>';
      chip.querySelector("button").addEventListener("click", function () { setPins([]); });
      document.body.appendChild(chip);
    }
    chip.hidden = !on;
    if (on) chip.querySelector("b").textContent = n + " subject" + (n === 1 ? "" : "s");
  }

  /* Setup picker — options are the subjects actually on the desktop right now. */
  function renderSetup(content) {
    css();
    var icons = desktopIcons();
    if (!icons.length) { content.innerHTML = '<div class="fc-setup"><p>The desktop is still loading — close this and try again in a moment.</p></div>'; return; }
    var pins = pinned();
    content.innerHTML =
      '<div class="fc-setup"><h2>🎯 Focus mode</h2>' +
        '<p>Only studying one or two things? Pick the subjects to keep on your desktop — the rest are hidden until you turn this off. Everything is still reachable from LAUNCH.</p>' +
        icons.map(function (el) {
          var app = el.getAttribute("data-app");
          var icon = (el.querySelector(".desktop-icon-img") || {}).textContent || "📁";
          var label = (el.querySelector(".desktop-icon-label") || {}).textContent || app;
          return '<label class="fc-opt"><input type="checkbox" value="' + app + '"' + (pins.indexOf(app) >= 0 ? " checked" : "") + '>' +
            '<span class="ic">' + icon + '</span><span class="nm">' + label + '</span></label>';
        }).join("") +
        '<div class="fc-row"><button class="fc-btn" id="fc-save">Focus on selected</button>' +
        '<button class="fc-btn ghost" id="fc-clear">Show everything</button></div>' +
      '</div>';
    function close() { var w = content.closest(".os-window"); if (w && window.Desktop && Desktop.closeWindow) Desktop.closeWindow(w.id); }
    content.querySelector("#fc-save").addEventListener("click", function () {
      var sel = [].slice.call(content.querySelectorAll("input:checked")).map(function (c) { return c.value; });
      setPins(sel); close();
    });
    content.querySelector("#fc-clear").addEventListener("click", function () { setPins([]); close(); });
  }

  function updateToggleLabel() {
    var b = document.getElementById("focusToggle");
    if (b) b.querySelector(".fc-state").textContent = isOn() ? ("On · " + pinned().length) : "Off";
  }
  function addToggle() {
    var items = document.querySelector("#startMenu .start-menu-items");
    if (!items || document.getElementById("focusToggle")) return;
    var btn = document.createElement("button");
    btn.className = "start-menu-item"; btn.id = "focusToggle"; btn.setAttribute("role", "menuitem");
    btn.innerHTML = '<span class="menu-icon">🎯</span><span>Focus mode: <b class="fc-state">' + (isOn() ? ("On · " + pinned().length) : "Off") + '</b></span>';
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var sm = document.getElementById("startMenu"); if (sm) sm.setAttribute("hidden", "");
      if (window.Desktop && Desktop.openWindow) Desktop.openWindow("focus");
    });
    items.appendChild(btn);
  }

  window.Lab404Focus = { apply: apply, isOn: isOn, renderSetup: renderSetup, setPins: setPins };

  function init() {
    addToggle();
    /* Apply once the desktop icons exist, then keep applying if they redraw. */
    var tries = 0;
    (function wait() {
      if (desktopIcons().length) {
        apply();
        var di = document.getElementById("desktopIcons");
        if (di && !observer) {
          observer = new MutationObserver(function () { if (!applying) apply(); });
          observer.observe(di, { childList: true });
        }
      } else if (tries++ < 60) setTimeout(wait, 150);
    })();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
