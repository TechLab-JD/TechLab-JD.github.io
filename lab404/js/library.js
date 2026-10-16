/* library.js — tiny per-learner "my library": last course visited (resume) and
   bookmarked courses. Local only; the keys are part of each learner's profile
   snapshot (see profiles.js OWNED_EXACT). Consumed by course-loader + My Progress. */
window.Lab404Lib = (function () {
  "use strict";
  var LC = "lab404.lastCourse", BM = "lab404.bookmarks";
  function get(k, d) { try { var r = localStorage.getItem(k); return r ? JSON.parse(r) : d; } catch (e) { return d; } }
  function set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  function setLastCourse(id, title) { if (id) set(LC, { id: id, title: title || id, ts: Date.now() }); }
  function lastCourse() { return get(LC, null); }
  function bookmarks() { var a = get(BM, []); return Array.isArray(a) ? a : []; }
  function isBookmarked(id) { return bookmarks().some(function (b) { return b.id === id; }); }
  function toggleBookmark(id, title) {
    var a = bookmarks();
    if (a.some(function (b) { return b.id === id; })) a = a.filter(function (b) { return b.id !== id; });
    else a.push({ id: id, title: title || id });
    set(BM, a);
    return a.some(function (b) { return b.id === id; });
  }
  return { setLastCourse: setLastCourse, lastCourse: lastCourse, bookmarks: bookmarks, isBookmarked: isBookmarked, toggleBookmark: toggleBookmark };
})();
