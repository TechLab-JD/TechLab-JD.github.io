/* weekly-plan.js (R6) — a printable weekly study plan for a grade.
   Homeschool and at-home families get a ready-made Mon-Fri checklist naming the real
   courses for that grade, so they don't have to build the week themselves. Print-media
   only; nothing is uploaded. (Worksheet answer keys already ship with the course
   worksheet in course-loader.js.) window.Lab404WeeklyPlan.print(grade) */
(function () {
  "use strict";

  var SUBJECTS = [
    { key: "math", label: "Math" }, { key: "science", label: "Science" },
    { key: "english", label: "English / Reading" }, { key: "social", label: "Social Studies" },
    { key: "coding", label: "Coding & CS" }
  ];
  var DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  function gradeLabel(g) { return g === "K" ? "Kindergarten" : g === "C" ? "College" : "Grade " + g; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function coursesFor(grade) {
    var CO = window.LAB404_COURSES || {}, map = {};
    Object.keys(CO).forEach(function (id) { if (String(CO[id].grade) === String(grade)) map[CO[id].subjectKey] = CO[id].title; });
    return map;
  }

  function style() {
    if (document.getElementById("wp-style")) return;
    var s = document.createElement("style"); s.id = "wp-style";
    s.textContent =
      "#wp-print{display:none}" +
      "@media print{body.wp-printing>*:not(#wp-print){display:none!important}" +
        "body.wp-printing #wp-print{display:block!important;color:#000;font-family:Georgia,'Times New Roman',serif;font-size:12pt;line-height:1.5}" +
        "#wp-print h1{font-size:18pt;margin:0 0 2pt}#wp-print .wp-sub{font-size:10pt;color:#333;margin:0 0 12pt}" +
        "#wp-print .wp-meta{font-size:10pt;margin:0 0 14pt;border-bottom:1px solid #000;padding-bottom:8pt}" +
        "#wp-print table{width:100%;border-collapse:collapse;font-size:11pt}" +
        "#wp-print th,#wp-print td{border:1px solid #000;padding:7pt 8pt;text-align:left;vertical-align:top}" +
        "#wp-print th{background:#eee;font-size:9.5pt;text-transform:uppercase;letter-spacing:.5pt}" +
        "#wp-print .wp-day{font-weight:bold;white-space:nowrap}" +
        "#wp-print .wp-box{font-size:16pt}" +
        "#wp-print .wp-note{font-size:9.5pt;color:#333;margin-top:12pt}" +
        "@page{margin:16mm}}";
    document.head.appendChild(s);
  }

  function print(grade) {
    style();
    grade = grade || (function () { try { return localStorage.getItem("lab404.myGrade"); } catch (e) { return null; } })() || "4";
    var cmap = coursesFor(grade);
    /* Mon-Thu rotate the four core subjects; Friday is coding (if the grade has it) or review. */
    var plan = [
      { subj: "math", task: "Read 1 lesson, then do a short practice set." },
      { subj: "science", task: "Read 1 lesson, then do a short practice set." },
      { subj: "english", task: "Read 1 lesson + practice; read a book for 15 minutes." },
      { subj: "social", task: "Read 1 lesson, then do a short practice set." },
      { subj: cmap.coding ? "coding" : null, task: cmap.coding ? "Try 1 coding lesson + practice." : "Review the week: retake a Full Practice Test and fix any misses." }
    ];
    function label(k) { var s = SUBJECTS.filter(function (x) { return x.key === k; })[0]; return s ? s.label : "Review"; }

    var rows = DAYS.map(function (day, i) {
      var p = plan[i];
      var subjLabel = p.subj ? label(p.subj) : "Review & Catch-up";
      var course = p.subj && cmap[p.subj] ? cmap[p.subj] : "";
      return '<tr><td class="wp-day">' + esc(day) + '</td>' +
        '<td><b>' + esc(subjLabel) + '</b>' + (course ? '<br><span style="font-size:9.5pt;color:#444">' + esc(course) + '</span>' : "") + '</td>' +
        '<td>' + esc(p.task) + '</td>' +
        '<td class="wp-box">☐</td></tr>';
    }).join("");

    var wp = document.getElementById("wp-print");
    if (!wp) { wp = document.createElement("div"); wp.id = "wp-print"; document.body.appendChild(wp); }
    wp.innerHTML =
      '<h1>Weekly Study Plan — ' + esc(gradeLabel(grade)) + '</h1>' +
      '<div class="wp-sub">Lab404 Study Hub · a suggested five-day plan</div>' +
      '<div class="wp-meta">Name: ____________________________   Week of: ____________</div>' +
      '<table><tr><th>Day</th><th>Subject</th><th>What to do</th><th>Done</th></tr>' + rows + '</table>' +
      '<p class="wp-note">Tip: open the subject on the Study Hub, pick ' + esc(gradeLabel(grade)) + ', and start the course. Each lesson has read-aloud and a short quiz. Check the box when the day is finished. Weekends are for free reading or a fun elective.</p>';

    function cleanup() { document.body.classList.remove("wp-printing"); window.removeEventListener("afterprint", cleanup); }
    window.addEventListener("afterprint", cleanup);
    document.body.classList.add("wp-printing");
    window.print();
  }

  window.Lab404WeeklyPlan = { print: print };
})();
