/* deeplink.js — open a shared "assignment" link straight to its target.
   A teacher/parent shares a URL built in the course view (C2); opening it jumps
   right to that course/topic. Stateless — everything is in the URL. */
(function () {
  "use strict";
  function qp(n) { try { return new URLSearchParams(location.search).get(n); } catch (e) { return null; } }
  var go = qp("go");
  if (!go) return;

  /* Arrived via an assignment link: skip the first-launch welcome, go to the content. */
  try { localStorage.setItem("lab404.guide.seen.v1", "1"); } catch (e) {}
  var id = qp("id"), grade = qp("grade");
  /* Non-content utility apps that are safe to open from a shared link. */
  var SAFE_APPS = ["forfamilies", "skills", "myprogress", "missed", "typing", "cohort", "stickers", "writing", "esglossary", "sims", "kidmode", "practice", "flashcards", "review", "glossary"];

  /* H4: give a shared/bookmarked deep link a descriptive page title.
     Course/topic data is lazy-loaded, so wait for it if it isn't ready yet. */
  function setTitle(name) { try { if (name) document.title = name + " · Lab404 Study Hub"; } catch (e) {} }
  function titleFromData(getName) {
    if (getName()) return;
    var once = function () { if (getName()) window.removeEventListener("lab404:data-ready", once); };
    window.addEventListener("lab404:data-ready", once);
  }

  function run() {
    try {
      if (go === "course" && id) {
        Desktop.openWindow("course", { course: id });
        titleFromData(function () { var co = (window.LAB404_COURSES || {})[id]; if (co) { setTitle(co.title); return true; } return false; });
      }
      else if (go === "topic" && id) {
        Desktop.openWindow("folder-" + id);
        titleFromData(function () { var tp = (window.LAB404_CONTENT || {})[id]; if (tp) { setTitle(tp.title); return true; } return false; });
      }
      else if (go === "bygrade") {
        if (grade) { try { localStorage.setItem("lab404.myGrade", grade); } catch (e) {} }
        Desktop.openWindow("bygrade");
        setTitle("Browse by Grade");
      }
      else if (go === "app" && id && SAFE_APPS.indexOf(id) >= 0) { Desktop.openWindow(id); }
      else if (go === "assign") {   /* R8: open a teacher assignment */
        var a = (window.Lab404Assign && Lab404Assign.decode) ? Lab404Assign.decode(qp("a")) : null;
        Desktop.openWindow("assign", a ? { assign: a } : {});
        setTitle(a && a.t ? a.t : "Assignment");
      }
    } catch (e) {}
  }

  var tries = 0;
  function wait() {
    if (window.Desktop && Desktop.openWindow) { setTimeout(run, 700); }  /* let the boot screen fade first */
    else if (tries++ < 50) { setTimeout(wait, 100); }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wait);
  else wait();
})();
