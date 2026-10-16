/* cohort.js (C3) — class roll-up for teachers. Import several students' progress-export
   JSON files (from LAUNCH > profile > Export) and see a mastery heat-map by subject.
   100% local: files are read in the browser, nothing is uploaded, and the viewer's own
   progress is never touched (student mastery is computed from the file, not localStorage). */
(function () {
  "use strict";

  var KEY = "lab404.cohort";                 /* persists the teacher's imported roster */
  var SUBJECTS = [
    { key: "math", label: "Math" }, { key: "science", label: "Science" },
    { key: "english", label: "English" }, { key: "social", label: "Social" },
    { key: "coding", label: "Coding" }
  ];

  function load() { try { return JSON.parse(localStorage.getItem(KEY) || "[]") || []; } catch (e) { return []; } }
  function save(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {} }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  /* Compute a student's readiness for one course from their exported mastery state,
     reusing the mastery engine's per-objective stats (passed, not read from storage). */
  function courseReadiness(courseId, st) {
    var M = window.LAB404_MASTERY, CO = window.LAB404_COURSES || {};
    var c = CO[courseId]; if (!c || !M) return null;
    var wSum = 0, pSum = 0, mastered = 0, total = 0, started = false;
    (c.objectives || []).forEach(function (ob) {
      var s = M.objStats(courseId, ob.code, st), w = ob.weight || 1;
      wSum += w; pSum += s.pct * w; total++;
      if (s.band === "mastered") mastered++;
      if (s.seen > 0) started = true;
    });
    return { pct: wSum ? pSum / wSum : 0, mastered: mastered, total: total, started: started };
  }

  /* Reduce one exported payload to a compact per-subject summary. */
  function summarize(payload) {
    var CO = window.LAB404_COURSES || {};
    var data = (payload && payload.data) || {};
    var bySubject = {};               /* subjectKey -> {pctSum, n, mastered, total} */
    Object.keys(data).forEach(function (k) {
      if (k.indexOf("lab404.mastery.") !== 0) return;
      var courseId = k.slice("lab404.mastery.".length);
      var c = CO[courseId]; if (!c) return;
      var st; try { st = JSON.parse(data[k]); } catch (e) { return; }
      if (!st || !st.obj) return;
      var r = courseReadiness(courseId, st);
      if (!r || !r.started) return;
      var sk = c.subjectKey;
      var b = bySubject[sk] || (bySubject[sk] = { pctSum: 0, n: 0, mastered: 0, total: 0 });
      b.pctSum += r.pct; b.n++; b.mastered += r.mastered; b.total += r.total;
    });
    var subj = {};
    Object.keys(bySubject).forEach(function (sk) {
      var b = bySubject[sk];
      subj[sk] = { pct: b.n ? Math.round(b.pctSum / b.n * 100) : 0, mastered: b.mastered, total: b.total, courses: b.n };
    });
    var grade = "";
    try { grade = data["lab404.myGrade"] || ""; } catch (e) {}
    /* keep the raw per-course mastery state so assignment completion (R8) can be checked */
    var mastery = {};
    Object.keys(data).forEach(function (k) {
      if (k.indexOf("lab404.mastery.") !== 0) return;
      try { mastery[k.slice("lab404.mastery.".length)] = JSON.parse(data[k]); } catch (e) {}
    });
    return { name: payload.name || "Student", grade: grade, exported: payload.exported || "", subjects: subj, mastery: mastery };
  }

  function cellColor(pct) {
    if (pct >= 85) return "#16a34a";
    if (pct >= 70) return "#4a90e2";
    if (pct >= 40) return "#e0a93c";
    return "#e0484a";
  }

  function style() {
    if (document.getElementById("co-style")) return;
    var s = document.createElement("style"); s.id = "co-style";
    s.textContent =
      ".co{padding:16px 18px;font-size:.9rem;max-width:720px;margin:0 auto;box-sizing:border-box}" +
      ".co h2{font-size:1.1rem;color:var(--accent2,#39e3c8);margin:0 0 2px}" +
      ".co .co-lead{color:var(--text-muted,#9aa);font-size:.8rem;margin:0 0 12px;line-height:1.6}" +
      ".co-priv{border:1px solid var(--border,#334);border-radius:10px;padding:9px 12px;margin:0 0 14px;background:rgba(57,227,200,.06);font-size:.76rem;line-height:1.5}" +
      ".co-row{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px}" +
      ".co-btn{border:1px solid var(--accent2,#39e3c8);background:var(--accent2,#39e3c8);color:#05211c;border-radius:9px;padding:9px 14px;font:inherit;font-weight:700;font-size:.82rem;cursor:pointer}" +
      ".co-btn.ghost{background:transparent;color:var(--text,#dfe);border-color:var(--border,#334)}" +
      ".co-empty{color:var(--text-muted,#9aa);text-align:center;padding:26px 14px;line-height:1.7}" +
      ".co-table{width:100%;border-collapse:collapse;font-size:.8rem}" +
      ".co-table th,.co-table td{border:1px solid var(--border,#334);padding:7px 6px;text-align:center}" +
      ".co-table th{color:var(--text-muted,#9aa);font-size:.68rem;text-transform:uppercase;letter-spacing:.3px}" +
      ".co-table td.name{text-align:left;font-weight:700;white-space:nowrap}" +
      ".co-cell{color:#fff;font-weight:700;border-radius:5px;padding:4px 2px}" +
      ".co-blank{color:var(--text-faint,#667)}" +
      ".co-avg td{font-weight:800;background:rgba(127,127,127,.08)}" +
      ".co-rm{background:none;border:0;color:var(--text-faint,#778);cursor:pointer;font-size:.9rem;padding:0 4px}" +
      ".co-rm:hover{color:#e0484a}" +
      ".co-asg{margin-top:20px;border-top:1px solid var(--border,#334);padding-top:14px}" +
      ".co-asg-h{font-weight:700;font-size:.9rem;margin:0 0 4px}";
    document.head.appendChild(s);
  }

  function render(content) {
    style();
    var roster = load();

    function draw() {
      var rows = "";
      var tableHtml = "";
      if (roster.length) {
        var head = '<tr><th>Student</th>' + SUBJECTS.map(function (s) { return '<th>' + s.label + '</th>'; }).join("") + '<th>Overall</th><th></th></tr>';
        var sums = {}; SUBJECTS.forEach(function (s) { sums[s.key] = { t: 0, n: 0 }; });
        var overallAll = { t: 0, n: 0 };
        roster.forEach(function (st, i) {
          var cells = "", ot = 0, on = 0;
          SUBJECTS.forEach(function (s) {
            var d = st.subjects[s.key];
            if (d && d.courses) {
              cells += '<td><span class="co-cell" style="background:' + cellColor(d.pct) + '" title="' + d.mastered + '/' + d.total + ' objectives mastered across ' + d.courses + ' course(s)">' + d.pct + '%</span></td>';
              ot += d.pct; on++; sums[s.key].t += d.pct; sums[s.key].n++;
            } else { cells += '<td class="co-blank">—</td>'; }
          });
          var overall = on ? Math.round(ot / on) : 0;
          if (on) { overallAll.t += overall; overallAll.n++; }
          rows += '<tr><td class="name">' + esc(st.name) + (st.grade ? ' <span style="color:var(--text-faint,#667);font-weight:400">· Gr ' + esc(st.grade) + '</span>' : '') + '</td>' +
            cells +
            '<td>' + (on ? '<span class="co-cell" style="background:' + cellColor(overall) + '">' + overall + '%</span>' : '<span class="co-blank">—</span>') + '</td>' +
            '<td><button class="co-rm" data-rm="' + i + '" title="Remove">✕</button></td></tr>';
        });
        var avgCells = SUBJECTS.map(function (s) {
          var a = sums[s.key]; var v = a.n ? Math.round(a.t / a.n) : null;
          return '<td>' + (v == null ? '<span class="co-blank">—</span>' : v + '%') + '</td>';
        }).join("");
        var classAvg = overallAll.n ? Math.round(overallAll.t / overallAll.n) : null;
        var avgRow = '<tr class="co-avg"><td class="name">Class average</td>' + avgCells + '<td>' + (classAvg == null ? '—' : classAvg + '%') + '</td><td></td></tr>';
        tableHtml = '<table class="co-table">' + head + rows + avgRow + '</table>';
      } else {
        tableHtml = '<div class="co-empty"><div style="font-size:2.2rem">📥</div>Import your students’ progress files to build a class view.<br>' +
          'Each student exports their own file from <b>LAUNCH → profile → Export</b> and sends it to you.</div>';
      }

      content.innerHTML =
        '<div class="co">' +
          '<h2>👩‍🏫 Class View</h2>' +
          '<p class="co-lead">A mastery heat-map for a group of learners — green is mastered, blue strong, amber needs work, red weak. No accounts, no server.</p>' +
          '<div class="co-priv">🔒 <b>All local.</b> Student files are read in your browser only, nothing is uploaded, and your own progress is never changed. The imported roster is saved only on this device.</div>' +
          '<div class="co-row">' +
            '<button class="co-btn" id="co-import">📥 Import student files</button>' +
            (roster.length ? '<button class="co-btn ghost" id="co-clear">Clear roster (' + roster.length + ')</button>' : '') +
          '</div>' +
          '<input id="co-file" type="file" accept="application/json,.json" multiple style="display:none">' +
          tableHtml +
          (roster.length ? '<div class="co-asg"><div class="co-asg-h">📋 Check an assignment</div>' +
            '<p style="font-size:.78rem;color:var(--text-muted,#9aa);margin:0 0 8px">Paste the assignment link you shared to see who finished its skills.</p>' +
            '<div class="co-row"><input id="co-asg-link" type="text" placeholder="Paste assignment link…" style="flex:1;min-width:0;border:1px solid var(--border,#334);background:var(--surface,#10171f);color:var(--text,#dfe);border-radius:9px;padding:8px 11px;font:inherit;font-size:.82rem">' +
            '<button class="co-btn" id="co-asg-go">Check</button></div><div id="co-asg-out"></div></div>' : "") +
        '</div>';

      var fileInput = content.querySelector("#co-file");
      content.querySelector("#co-import").addEventListener("click", function () { fileInput.click(); });
      fileInput.addEventListener("change", function () {
        var files = Array.prototype.slice.call(fileInput.files || []);
        if (!files.length) return;
        var remaining = files.length, added = 0, bad = 0;
        files.forEach(function (f) {
          var reader = new FileReader();
          reader.onload = function () {
            try {
              var payload = JSON.parse(reader.result);
              if (payload && payload.kind === "lab404-progress" && payload.data) {
                var sum = summarize(payload);
                /* replace an existing student with the same name, else add */
                var idx = roster.findIndex(function (r) { return r.name === sum.name; });
                if (idx >= 0) roster[idx] = sum; else roster.push(sum);
                added++;
              } else { bad++; }
            } catch (e) { bad++; }
            if (--remaining === 0) { save(roster); draw(); if (bad) alert(bad + " file(s) were not valid Lab404 progress exports and were skipped."); }
          };
          reader.onerror = function () { if (--remaining === 0) { save(roster); draw(); } };
          reader.readAsText(f);
        });
        fileInput.value = "";
      });
      var clearBtn = content.querySelector("#co-clear");
      if (clearBtn) clearBtn.addEventListener("click", function () {
        if (confirm("Remove all " + roster.length + " students from this class view? (Their own progress is not affected.)")) { roster = []; save(roster); draw(); }
      });
      content.querySelectorAll("[data-rm]").forEach(function (b) {
        b.addEventListener("click", function () { roster.splice(+this.getAttribute("data-rm"), 1); save(roster); draw(); });
      });
      var asgGo = content.querySelector("#co-asg-go");
      if (asgGo) asgGo.addEventListener("click", function () {
        var link = (content.querySelector("#co-asg-link").value || "").trim();
        var token = (link.match(/[?&]a=([^&]+)/) || [])[1] || link;   /* accept full link or bare token */
        var a = (window.Lab404Assign && Lab404Assign.decode) ? Lab404Assign.decode(token) : null;
        var out = content.querySelector("#co-asg-out");
        if (!a || !a.c || !a.o) { out.innerHTML = '<p style="color:#e0484a;font-size:.8rem;margin-top:8px">That doesn’t look like a valid assignment link.</p>'; return; }
        out.innerHTML = renderAssignment(a);
      });
    }

    /* R8: per-student completion of an assignment's objectives, from imported mastery state. */
    function renderAssignment(a) {
      var M = window.LAB404_MASTERY, CO = window.LAB404_COURSES || {};
      var cTitle = (CO[a.c] && CO[a.c].title) || a.c;
      var rows = roster.map(function (stu) {
        var st = stu.mastery && stu.mastery[a.c];
        var done = 0, started = 0;
        a.o.forEach(function (code) {
          if (!st) return;
          var s = M.objStats(a.c, code, st);
          if (s.band === "mastered") done++;
          else if (s.seen > 0) started++;
        });
        var total = a.o.length;
        var pct = total ? Math.round(done / total * 100) : 0;
        var label = done + "/" + total + " done" + (started ? " · " + started + " in progress" : "");
        return '<tr><td class="name">' + esc(stu.name) + '</td>' +
          '<td><span class="co-cell" style="background:' + cellColor(pct) + '">' + pct + '%</span></td>' +
          '<td style="font-size:.76rem;color:var(--text-muted,#9aa)">' + label + '</td></tr>';
      }).join("");
      return '<div style="margin-top:10px;font-size:.82rem"><b>' + esc(a.t || "Assignment") + '</b> · ' + esc(cTitle) + ' · ' + a.o.length + ' skill' + (a.o.length > 1 ? 's' : '') + '</div>' +
        '<table class="co-table" style="margin-top:6px"><tr><th>Student</th><th>Done</th><th>Detail</th></tr>' + rows + '</table>';
    }

    draw();
  }

  window.Lab404Cohort = { render: render };
})();
