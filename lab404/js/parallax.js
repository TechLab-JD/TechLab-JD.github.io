/* parallax.js — RAF-based 3-layer parallax scroll engine */
(function () {
  "use strict";

  const layers = [
    { selector: ".layer-bg", speed: 0.2 },
    { selector: ".layer-mid", speed: 0.4 },
    { selector: ".layer-fg", speed: 0.6 },
  ];

  let resolved = [];
  let ticking = false;

  function init() {
    resolved = layers
      .map(({ selector, speed }) => {
        const el = document.querySelector(selector);
        return el ? { el, speed } : null;
      })
      .filter(Boolean);

    if (resolved.length === 0) return;

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
  }

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  function update() {
    const y = window.scrollY;
    resolved.forEach(({ el, speed }) => {
      el.style.transform = "translateY(" + y * speed + "px)";
    });
    ticking = false;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
