/* weekly-plan.js (R6) — a printable weekly study plan for a grade.
   Homeschool and at-home families get a ready-made Mon-Fri checklist naming the real
   courses for that grade, so they don't have to build the week themselves. Print-media
   only; nothing is uploaded. (Worksheet answer keys already ship with the course
   worksheet in course-loader.js.) window.Lab404WeeklyPlan.print(grade) */
(function () {
  "use strict";

  /* R4-6: bilingual (EN/ES) so a Spanish-speaking parent gets the same plan. */
  var T = {
    en: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      subj: { math: "Math", science: "Science", english: "English / Reading", social: "Social Studies", coding: "Coding & CS", review: "Review & Catch-up" },
      task: { core: "Read 1 lesson, then do a short practice set.", english: "Read 1 lesson + practice; read a book for 15 minutes.", coding: "Try 1 coding lesson + practice.", review: "Review the week: retake a Full Practice Test and fix any misses." },
      title: "Weekly Study Plan", sub: "Lab404 Study Hub · a suggested five-day plan",
      name: "Name", week: "Week of", th: ["Day", "Subject", "What to do", "Done"],
      tip: function (g) { return "Tip: open the subject on the Study Hub, pick " + g + ", and start the course. Each lesson has read-aloud and a short quiz. Check the box when the day is finished. Weekends are for free reading or a fun elective."; }
    },
    es: {
      days: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
      subj: { math: "Matemáticas", science: "Ciencias", english: "Inglés / Lectura", social: "Estudios Sociales", coding: "Programación", review: "Repaso y recuperación" },
      task: { core: "Lee 1 lección y haz una práctica corta.", english: "Lee 1 lección y practica; lee un libro 15 minutos.", coding: "Haz 1 lección de programación + práctica.", review: "Repasa la semana: vuelve a hacer un examen de práctica completo y corrige los errores." },
      title: "Plan de estudio semanal", sub: "Lab404 Study Hub · un plan sugerido de cinco días",
      name: "Nombre", week: "Semana del", th: ["Día", "Materia", "Qué hacer", "Hecho"],
      tip: function (g) { return "Consejo: abre la materia en el Study Hub, elige " + g + " y comienza el curso. Cada lección tiene lectura en voz alta y un examen corto. Marca la casilla al terminar el día. Los fines de semana son para leer libremente o una materia optativa divertida."; }
    }
  };

  function gradeLabel(g, lang) {
    if (lang === "es") return g === "K" ? "Kínder" : g === "C" ? "Universidad" : "Grado " + g;
    return g === "K" ? "Kindergarten" : g === "C" ? "College" : "Grade " + g;
  }
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

  function print(grade, lang) {
    style();
    lang = (lang === "es") ? "es" : "en";
    var t = T[lang];
    grade = grade || (function () { try { return localStorage.getItem("lab404.myGrade"); } catch (e) { return null; } })() || "4";
    var cmap = coursesFor(grade);
    /* Mon-Thu rotate the four core subjects; Friday is coding (if the grade has it) or review. */
    var plan = [
      { subj: "math", task: t.task.core },
      { subj: "science", task: t.task.core },
      { subj: "english", task: t.task.english },
      { subj: "social", task: t.task.core },
      { subj: cmap.coding ? "coding" : null, task: cmap.coding ? t.task.coding : t.task.review }
    ];

    var rows = t.days.map(function (day, i) {
      var p = plan[i];
      var subjLabel = p.subj ? t.subj[p.subj] : t.subj.review;
      var course = p.subj && cmap[p.subj] ? cmap[p.subj] : "";
      return '<tr><td class="wp-day">' + esc(day) + '</td>' +
        '<td><b>' + esc(subjLabel) + '</b>' + (course ? '<br><span style="font-size:9.5pt;color:#444">' + esc(course) + '</span>' : "") + '</td>' +
        '<td>' + esc(p.task) + '</td>' +
        '<td class="wp-box">☐</td></tr>';
    }).join("");

    var gl = gradeLabel(grade, lang);
    var wp = document.getElementById("wp-print");
    if (!wp) { wp = document.createElement("div"); wp.id = "wp-print"; document.body.appendChild(wp); }
    wp.innerHTML =
      '<h1>' + esc(t.title) + ' — ' + esc(gl) + '</h1>' +
      '<div class="wp-sub">' + esc(t.sub) + '</div>' +
      '<div class="wp-meta">' + esc(t.name) + ': ____________________________   ' + esc(t.week) + ': ____________</div>' +
      '<table><tr><th>' + t.th.map(esc).join('</th><th>') + '</th></tr>' + rows + '</table>' +
      '<p class="wp-note">' + esc(t.tip(gl)) + '</p>';

    function cleanup() { document.body.classList.remove("wp-printing"); window.removeEventListener("afterprint", cleanup); }
    window.addEventListener("afterprint", cleanup);
    document.body.classList.add("wp-printing");
    window.print();
  }

  window.Lab404WeeklyPlan = { print: print };
})();
