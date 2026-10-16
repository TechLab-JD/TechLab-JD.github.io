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
  var SAFE_APPS = ["forfamilies", "skills", "myprogress", "missed", "typing", "cohort", "practice", "flashcards", "review", "glossary"];

  function run() {
    try {
      if (go === "course" && id) { Desktop.openWindow("course", { course: id }); }
      else if (go === "topic" && id) { Desktop.openWindow("folder-" + id); }
      else if (go === "bygrade") {
        if (grade) { try { localStorage.setItem("lab404.myGrade", grade); } catch (e) {} }
        Desktop.openWindow("bygrade");
      }
      else if (go === "app" && id && SAFE_APPS.indexOf(id) >= 0) { Desktop.openWindow(id); }
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
