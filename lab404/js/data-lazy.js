/* data-lazy.js — lazy-load the big study data (courses + content, ~4.6MB).
   Loading these synchronously blocked first paint on every visit. Now the shell
   (boot screen + desktop, built from the small subjects-data.js) renders first,
   and this loads the heavy data in the background, exposing a promise that the
   on-demand views (course / by-grade / progress / lessons) wait on. */
window.Lab404Data = (function () {
  "use strict";
  var loaded = false, pending = null;

  function inject(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement("script");
      s.src = src;
      s.onload = function () { res(); };
      s.onerror = function () { rej(new Error("failed to load " + src)); };
      document.head.appendChild(s);
    });
  }

  function ensure() {
    if (loaded) return Promise.resolve();
    if (pending) return pending;
    /* courses first, then content; chained so order is guaranteed */
    pending = inject("js/courses-data.js")
      .then(function () { return inject("js/content-data.js"); })
      .then(function () {
        loaded = true;
        try { if (window.refreshXP) window.refreshXP(); } catch (e) {}  /* update the level badge now data exists */
        try { window.dispatchEvent(new Event("lab404:data-ready")); } catch (e) {}
      })
      .catch(function (e) { pending = null; throw e; });  /* allow a retry on failure */
    return pending;
  }

  function start() {
    if ("requestIdleCallback" in window) { requestIdleCallback(function () { ensure(); }, { timeout: 1500 }); }
    else { setTimeout(ensure, 300); }
  }
  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", start); }
  else { start(); }

  return { ensure: ensure, isLoaded: function () { return loaded; } };
})();
