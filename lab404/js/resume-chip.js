/* resume-chip.js (R4-2) — one-tap "jump back in" to the last course.
   Returning learners (esp. teens) don't want to re-navigate the desktop every
   time. If a course was opened before, show a small pill that reopens it.
   Reads Lab404Lib.lastCourse(). Hidden in Kid Mode. Local-only. */
(function () {
  "use strict";

  function style() {
    if (document.getElementById("resume-style")) return;
    var s = document.createElement("style"); s.id = "resume-style";
    s.textContent = [
      ".resume-chip{position:fixed;right:14px;bottom:calc(44px + env(safe-area-inset-bottom,0px) + 12px);",
      "  z-index:120;display:flex;align-items:center;gap:9px;max-width:min(80vw,320px);",
      "  background:var(--surface,#111726);color:var(--text,#e6edf6);border:1px solid var(--accent2,#5aa9ff);",
      "  border-radius:999px;padding:9px 14px 9px 13px;cursor:pointer;font:inherit;font-size:.82rem;",
      "  box-shadow:0 6px 22px rgba(0,0,0,.4);transition:transform .1s}",
      ".resume-chip:hover{transform:translateY(-2px)}",
      ".resume-chip .rc-play{font-size:1rem;line-height:1}",
      ".resume-chip .rc-txt{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",
      ".resume-chip .rc-txt b{color:var(--accent2,#5aa9ff)}",
      ".resume-chip .rc-x{border:0;background:transparent;color:var(--text-muted,#9aa);font-size:1rem;cursor:pointer;line-height:1;padding:0 2px}",
      ".resume-chip .rc-x:hover{color:var(--text,#e6edf6)}",
      "html.lab404-kiosk .resume-chip{display:none!important}"      /* no wandering in Kid Mode */
    ].join("");
    document.head.appendChild(s);
  }

  var chip = null;

  function show() {
    var lib = window.Lab404Lib;
    var last = lib && lib.lastCourse && lib.lastCourse();
    if (!last || !last.id) return;
    if (chip) chip.parentNode.removeChild(chip);
    style();
    chip = document.createElement("div");
    chip.className = "resume-chip";
    chip.setAttribute("role", "button");
    chip.setAttribute("tabindex", "0");
    chip.setAttribute("aria-label", "Jump back in to " + (last.title || "your last course"));
    var t = last.title || "your last course";
    chip.innerHTML = '<span class="rc-play" aria-hidden="true">▶</span>' +
      '<span class="rc-txt">Jump back in · <b></b></span>' +
      '<button class="rc-x" title="Hide" aria-label="Hide">×</button>';
    chip.querySelector(".rc-txt b").textContent = t;   /* textContent so titles can't inject markup */
    document.body.appendChild(chip);

    function open() { if (window.Desktop && Desktop.openWindow) Desktop.openWindow("course", { course: last.id }); }
    chip.addEventListener("click", function (e) { if (e.target.classList.contains("rc-x")) return; open(); });
    chip.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
    chip.querySelector(".rc-x").addEventListener("click", function (e) {
      e.stopPropagation();
      if (chip) { chip.parentNode.removeChild(chip); chip = null; }
    });
  }

  function init() {
    /* Wait for the boot screen to clear and the library to be present. */
    var tries = 0;
    (function wait() {
      if (window.Lab404Lib && window.Desktop) { setTimeout(show, 900); }
      else if (tries++ < 50) setTimeout(wait, 120);
    })();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
