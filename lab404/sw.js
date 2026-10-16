/* sw.js — Lab404 Study Hub service worker.
   Makes the hub installable and usable offline. Strategy: precache the app
   shell on install, then serve same-origin GETs stale-while-revalidate (fast
   from cache, refreshed in the background). Large media (audio/video/pdf) is
   passed straight to the network so the cache stays small. */
var CACHE = "lab404-hub-v45";

var SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./css/dark.css",
  "./css/light.css",
  "./css/base.css",
  "./css/desktop.css",
  "./js/theme-init.js",
  "./js/theme.js",
  "./js/i18n.js",
  "./js/a11y.js",
  "./js/utils.js",
  "./js/accordion.js",
  "./js/wallpaper.js",
  "./js/chapters-data.js",
  "./js/chapters-core3.js",
  "./js/chapter-loader.js",
  "./js/practice-loader.js",
  "./js/flashcard-loader.js",
  "./js/glossary-loader.js",
  "./js/review-loader.js",
  "./js/data-manager.js",
  "./js/xp-system.js",
  "./js/subjects-data.js",
  "./js/data-lazy.js",
  "./js/library.js",
  "./js/content-data.js",
  "./js/courses-data.js",
  "./js/read-aloud.js",
  "./js/mastery.js",
  "./js/goals.js",
  "./js/missed.js",
  "./js/typing.js",
  "./js/cohort.js",
  "./js/assignments.js",
  "./js/weekly-plan.js",
  "./js/stickers.js",
  "./js/course-loader.js",
  "./js/course-diagrams.js",
  "./js/course-steps.js",
  "./js/desktop.js",
  "./js/search.js",
  "./js/junior-mode.js",
  "./js/profiles.js",
  "./js/guide.js",
  "./js/deeplink.js",
  "./js/review-due.js",
  "./js/install-prompt.js",
  "./js/boot.js"
];

/* Media we never want to fill the cache with. */
function isBulkMedia(url) {
  return /\.(mp3|mp4|webm|mov|m4a|wav|ogg|pdf|zip)(\?|$)/i.test(url);
}

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      /* Add individually so one missing file doesn't fail the whole install. */
      return Promise.all(SHELL.map(function (u) {
        return c.add(u).catch(function () {});
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== CACHE) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;     /* only our own files */
  if (isBulkMedia(url.pathname)) return;               /* stream media from network */

  /* Navigations: serve cached index.html when offline so the app still boots. */
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).catch(function () {
        return caches.match(req).then(function (r) { return r || caches.match("./index.html"); });
      })
    );
    return;
  }

  /* Everything else (css/js/json/images): stale-while-revalidate. */
  e.respondWith(
    caches.open(CACHE).then(function (cache) {
      return cache.match(req).then(function (cached) {
        var network = fetch(req).then(function (res) {
          if (res && res.status === 200 && res.type === "basic") cache.put(req, res.clone());
          return res;
        }).catch(function () { return cached; });
        return cached || network;
      });
    })
  );
});
