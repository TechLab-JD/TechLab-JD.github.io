/* install-prompt.js — a friendly "Install this app" banner.
   The hub is already a PWA (manifest + service worker); this just surfaces the
   browser's install action instead of hiding it in a menu. Shows only when the
   browser says it's installable, and never again once installed or dismissed. */
(function () {
  "use strict";
  var KEY = "lab404.installDismissed";
  var deferred = null, banner = null;

  function dismissed() { try { return localStorage.getItem(KEY) === "1"; } catch (e) { return false; } }
  function installed() {
    try { return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true; }
    catch (e) { return false; }
  }

  function css() {
    if (document.getElementById("ip-style")) return;
    var s = document.createElement("style"); s.id = "ip-style";
    s.textContent = [
      ".ip-banner{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(52px + env(safe-area-inset-bottom,0px));z-index:9996;display:flex;align-items:center;gap:12px;max-width:min(440px,92vw);background:#0f1619;border:1px solid #2a3b3a;border-radius:12px;box-shadow:0 14px 40px rgba(0,0,0,.55);padding:11px 13px;color:#dfecea;font-family:system-ui,-apple-system,Segoe UI,sans-serif;opacity:0;transition:opacity .25s,transform .25s}",
      ".ip-banner.on{opacity:1}",
      ".ip-ic{font-size:22px;flex:none}",
      ".ip-tx{flex:1;min-width:0;font-size:12.5px;line-height:1.4}",
      ".ip-tx b{color:#39e3c8}",
      ".ip-go{background:#39e3c8;color:#06201c;border:0;border-radius:8px;padding:7px 13px;font:600 13px system-ui;cursor:pointer;flex:none}",
      ".ip-go:hover{background:#5ef0d9}",
      ".ip-x{background:none;border:0;color:#73857f;font-size:18px;cursor:pointer;flex:none;padding:2px 4px}",
      ".ip-x:hover{color:#dfecea}"
    ].join("");
    document.head.appendChild(s);
  }

  function show() {
    if (banner || dismissed() || installed()) return;
    css();
    banner = document.createElement("div");
    banner.className = "ip-banner";
    banner.setAttribute("role", "dialog"); banner.setAttribute("aria-label", "Install the Study Hub");
    banner.innerHTML =
      '<span class="ip-ic">⬇️</span>' +
      '<span class="ip-tx"><b>Install the Study Hub</b> on this device for quick access and full offline use.</span>' +
      '<button class="ip-go">Install</button>' +
      '<button class="ip-x" aria-label="Not now">×</button>';
    document.body.appendChild(banner);
    requestAnimationFrame(function () { banner.classList.add("on"); });
    banner.querySelector(".ip-go").addEventListener("click", doInstall);
    banner.querySelector(".ip-x").addEventListener("click", function () { remember(); hide(); });
  }
  function hide() { if (banner) { banner.classList.remove("on"); var b = banner; banner = null; setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 260); } }
  function remember() { try { localStorage.setItem(KEY, "1"); } catch (e) {} }

  function doInstall() {
    if (!deferred) { hide(); return; }
    deferred.prompt();
    var choice = deferred.userChoice;
    deferred = null;
    hide();
    if (choice && choice.then) choice.then(function (r) { if (r && r.outcome === "accepted") remember(); });
  }

  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    deferred = e;
    if (dismissed() || installed()) return;
    /* wait until the boot sequence has cleared before nudging */
    setTimeout(show, 2600);
  });
  window.addEventListener("appinstalled", function () { remember(); hide(); });
})();
