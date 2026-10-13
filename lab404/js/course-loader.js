/* Lab404 Study Zone — mastery course view (objective dashboard + placement + practice).
   window.CourseLoader.init(contentEl, {course:"g4-math"}). Uses LAB404_COURSES + LAB404_MASTERY.
   Shows a living report card (readiness % / letter / GPA), the objective list with the four mastery bands,
   a placement "test-out" diagnostic, and an anti-guess practice runner that updates mastery live. */
window.CourseLoader = (function () {
  var M = window.LAB404_MASTERY;
  var el, courseId, course, quiz = null;

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  function injectStyle() {
    if (document.getElementById("cv-style")) return;
    var s = document.createElement("style"); s.id = "cv-style";
    s.textContent =
      ".cv-wrap{padding:16px;font-size:.9rem}" +
      ".cv-head{display:flex;gap:16px;align-items:center;flex-wrap:wrap;border:1px solid var(--border,#334);border-radius:14px;padding:14px 16px;margin-bottom:16px}" +
      ".cv-ring{position:relative;width:88px;height:88px;flex:none}" +
      ".cv-ring .cv-rt{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:800}" +
      ".cv-rt b{font-size:1.5rem;line-height:1}" +
      ".cv-rt span{font-size:.6rem;color:var(--text-muted,#9aa);text-transform:uppercase;letter-spacing:.5px}" +
      ".cv-hmeta{flex:1;min-width:180px}" +
      ".cv-title{font-size:1.15rem;font-weight:800;margin:0 0 2px;color:var(--accent2,#4a90e2)}" +
      ".cv-std{font-size:.7rem;color:var(--text-muted,#9aa);margin:0 0 8px}" +
      ".cv-grade{display:flex;gap:16px;align-items:baseline}" +
      ".cv-grade .lg{font-size:1.8rem;font-weight:800}" +
      ".cv-grade small{font-size:.66rem;color:var(--text-muted,#9aa);display:block;font-weight:600}" +
      ".cv-counts{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}" +
      ".cv-banner{border:1px solid var(--accent2,#4a90e2);background:rgba(74,144,226,.08);border-radius:12px;padding:12px 14px;margin-bottom:16px;display:flex;gap:12px;align-items:center;flex-wrap:wrap}" +
      ".cv-banner p{margin:0;flex:1;min-width:200px;font-size:.82rem}" +
      ".cv-btn{border:1px solid var(--accent2,#4a90e2);background:var(--accent2,#4a90e2);color:#fff;border-radius:9px;padding:8px 14px;font-weight:700;font-size:.82rem;cursor:pointer;font:inherit}" +
      ".cv-btn.ghost{background:transparent;color:var(--accent2,#4a90e2)}" +
      ".cv-btn.sm{padding:5px 10px;font-size:.72rem}" +
      ".cv-dom{margin-bottom:14px}" +
      ".cv-domh{font-weight:700;font-size:.82rem;color:var(--text-muted,#9aa);text-transform:uppercase;letter-spacing:.4px;margin:0 0 7px}" +
      ".cv-obj{display:flex;align-items:center;gap:10px;border:1px solid var(--border,#334);border-radius:10px;padding:9px 12px;margin-bottom:6px}" +
      ".cv-obj-main{flex:1;min-width:0}" +
      ".cv-obj-code{font-family:monospace;font-size:.68rem;color:var(--text-faint,#778)}" +
      ".cv-obj-title{font-size:.82rem;font-weight:600;line-height:1.3}" +
      ".cv-obj-bar{height:5px;border-radius:3px;background:var(--border,#334);margin-top:5px;overflow:hidden}" +
      ".cv-obj-bar span{display:block;height:100%;border-radius:3px}" +
      ".cv-pill{font-size:.66rem;font-weight:700;border-radius:99px;padding:2px 9px;white-space:nowrap}" +
      ".cv-none{background:rgba(140,140,150,.18);color:#9aa}" +
      ".cv-weak{background:rgba(224,72,72,.16);color:#e86a6a}" +
      ".cv-needs{background:rgba(230,160,40,.16);color:#e0a93c}" +
      ".cv-strong{background:rgba(74,144,226,.16);color:#5aa0ee}" +
      ".cv-mastered{background:rgba(60,190,110,.18);color:#4fc07a}" +
      ".cv-b-weak{background:#e0484a}.cv-b-needs{background:#e0a93c}.cv-b-strong{background:#4a90e2}.cv-b-mastered{background:#3cbe6e}.cv-b-none{background:#556}" +
      ".cv-note{color:var(--text-faint,#778);font-size:.68rem;margin-top:12px;line-height:1.5}" +
      /* quiz */
      ".cv-q{max-width:560px;margin:0 auto}" +
      ".cv-prog{font-size:.72rem;color:var(--text-muted,#9aa);margin-bottom:6px;display:flex;justify-content:space-between}" +
      ".cv-qtext{font-size:1.05rem;font-weight:600;line-height:1.5;margin:6px 0 16px}" +
      ".cv-opts{display:flex;flex-direction:column;gap:8px}" +
      ".cv-opt{text-align:left;border:1.5px solid var(--border,#334);border-radius:10px;padding:11px 14px;background:transparent;color:var(--text,#eee);cursor:pointer;font:inherit;font-size:.9rem}" +
      ".cv-opt.sel{border-color:var(--accent2,#4a90e2);background:rgba(74,144,226,.1)}" +
      ".cv-opt.correct{border-color:#3cbe6e;background:rgba(60,190,110,.14)}" +
      ".cv-opt.wrong{border-color:#e0484a;background:rgba(224,72,72,.12)}" +
      ".cv-num{width:160px;font-size:1.1rem;padding:10px 12px;border:1.5px solid var(--border,#334);border-radius:10px;background:transparent;color:var(--text,#eee);font:inherit}" +
      ".cv-hint{font-size:.7rem;color:var(--text-faint,#778);margin-top:6px}" +
      ".cv-fb{border-radius:10px;padding:11px 14px;margin-top:14px;font-size:.84rem;line-height:1.5}" +
      ".cv-fb.ok{background:rgba(60,190,110,.14);border:1px solid #3cbe6e}" +
      ".cv-fb.no{background:rgba(224,72,72,.12);border:1px solid #e0484a}" +
      ".cv-row{display:flex;gap:10px;align-items:center;margin-top:16px;flex-wrap:wrap}" +
      ".cv-done{text-align:center;padding:10px}";
    document.head.appendChild(s);
  }

  function ringSvg(pct, letter) {
    var r = 40, rad = 34, c = 2 * Math.PI * rad, len = Math.max(0, Math.min(1, pct)) * c;
    var col = pct >= 0.9 ? "#3cbe6e" : pct >= 0.7 ? "#4a90e2" : pct >= 0.4 ? "#e0a93c" : "#e0484a";
    return '<div class="cv-ring"><svg viewBox="0 0 80 80" width="88" height="88">' +
      '<circle cx="40" cy="40" r="' + rad + '" fill="none" stroke="var(--border,#334)" stroke-width="7"/>' +
      '<circle cx="40" cy="40" r="' + rad + '" fill="none" stroke="' + col + '" stroke-width="7" stroke-linecap="round" stroke-dasharray="' + len + ' ' + (c - len) + '" transform="rotate(-90 40 40)"/>' +
      '</svg><div class="cv-rt"><b>' + Math.round(pct * 100) + '%</b><span>ready</span></div></div>';
  }

  function init(content, params) {
    el = content; quiz = null;
    courseId = (params && params.course) || "g4-math";
    course = (window.LAB404_COURSES || {})[courseId];
    injectStyle();
    if (!course || !M) { el.innerHTML = '<div class="cv-wrap">Course not available.</div>'; return; }
    renderDash();
  }

  function renderDash() {
    var r = M.readiness(courseId);
    var pill = function (b, n) { return '<span class="cv-pill cv-' + b + '">' + n + '</span>'; };
    var counts = '<span class="cv-pill cv-mastered">' + r.counts.mastered + ' mastered</span>' +
      '<span class="cv-pill cv-strong">' + r.counts.strong + ' strong</span>' +
      '<span class="cv-pill cv-needs">' + r.counts.needs + ' needs work</span>' +
      '<span class="cv-pill cv-weak">' + r.counts.weak + ' weak</span>' +
      (r.counts.none ? '<span class="cv-pill cv-none">' + r.counts.none + ' not started</span>' : "");

    var banner = "";
    if (!r.placed) {
      banner = '<div class="cv-banner"><p><b>Start with a quick placement check.</b> A few questions across every objective tells us where you’re strong and what to focus on — no studying needed, just answer honestly.</p>' +
        '<button class="cv-btn" data-act="placement">🧭 Take placement test</button></div>';
    } else if (r.complete) {
      banner = '<div class="cv-banner"><p>🎉 <b>Course mastered!</b> Every objective is at the 85% mastery bar. Keep practicing to hold it — mastery fades if you never revisit it.</p></div>';
    } else {
      banner = '<div class="cv-banner"><p><b>Keep going.</b> Practice your weakest objectives to raise your readiness toward an A.</p>' +
        '<button class="cv-btn" data-act="weakest">🎯 Practice weakest</button></div>';
    }

    var doms = (course.domains || []).map(function (dm) {
      var objs = (course.objectives || []).filter(function (o) { return o.domain === dm.code; });
      if (!objs.length) return "";
      var rows = objs.map(function (ob) {
        var s = M.objStats(courseId, ob.code);
        var nq = M.questionsFor(courseId, ob.code).length;
        return '<div class="cv-obj">' +
          '<div class="cv-obj-main"><div class="cv-obj-code">' + esc(ob.code) + ' · ' + esc((ob.xwalk && ob.xwalk.cc) || "") + '</div>' +
          '<div class="cv-obj-title">' + esc(ob.title) + '</div>' +
          '<div class="cv-obj-bar"><span class="cv-b-' + s.band + '" style="width:' + Math.round(s.pct * 100) + '%"></span></div></div>' +
          pill(s.band, s.bandLabel + (s.seen ? " · " + Math.round(s.pct * 100) + "%" : "")) +
          '<button class="cv-btn ghost sm" data-practice="' + esc(ob.code) + '"' + (nq ? "" : " disabled") + '>Practice</button>' +
          '</div>';
      }).join("");
      return '<div class="cv-dom"><div class="cv-domh">' + esc(dm.code) + " — " + esc(dm.name) + '</div>' + rows + '</div>';
    }).join("");

    el.innerHTML =
      '<div class="cv-wrap">' +
        '<div class="cv-head">' + ringSvg(r.pct, r.letter) +
          '<div class="cv-hmeta"><div class="cv-title">' + esc(course.title) + '</div>' +
            '<div class="cv-std">' + esc(course.standard) + '</div>' +
            '<div class="cv-grade"><div><span class="lg">' + r.letter + '</span><small>Grade</small></div>' +
              '<div><span class="lg">' + r.gpa.toFixed(1) + '</span><small>GPA</small></div>' +
              '<div><span class="lg">' + r.mastered + "/" + r.total + '</span><small>Mastered</small></div></div>' +
            '<div class="cv-counts">' + counts + '</div></div></div>' +
        banner +
        doms +
        '<div class="cv-row"><button class="cv-btn ghost sm" data-act="reset">Reset progress</button></div>' +
        '<p class="cv-note">Grades are <b>living</b>: your % / letter / GPA reflect your <i>current</i> mastery and climb toward an A as objectives reach <b>Mastered</b> (85%+, shown consistently). Objectives map to the Massachusetts Curriculum Frameworks (Common Core codes shown). Multi-state crosswalk (TEKS / VA SOL / FL B.E.S.T.) is pending.</p>' +
      '</div>';

    el.querySelectorAll("[data-act]").forEach(function (b) {
      b.addEventListener("click", function () {
        var a = this.getAttribute("data-act");
        if (a === "placement") startQuiz("placement");
        else if (a === "weakest") startQuiz("weakest");
        else if (a === "reset") { if (confirm("Reset all progress for this course?")) { M.reset(courseId); renderDash(); } }
      });
    });
    el.querySelectorAll("[data-practice]").forEach(function (b) {
      b.addEventListener("click", function () { startQuiz("objective", this.getAttribute("data-practice")); });
    });
  }

  function startQuiz(mode, code) {
    var qs = [];
    if (mode === "placement") {
      (course.objectives || []).forEach(function (ob) {
        var pool = M.questionsFor(courseId, ob.code);
        if (pool.length) qs.push(pool[Math.floor(Math.random() * pool.length)]);
      });
      shuffle(qs);
    } else if (mode === "objective") {
      qs = shuffle(M.questionsFor(courseId, code).slice());
    } else if (mode === "weakest") {
      M.weakest(courseId, 3).forEach(function (c) { qs = qs.concat(M.questionsFor(courseId, c)); });
      shuffle(qs);
    }
    if (!qs.length) { renderDash(); return; }
    quiz = { mode: mode, qs: qs, i: 0, correct: 0, answered: false };
    renderQ();
  }

  function renderQ() {
    var q = quiz.qs[quiz.i];
    var title = quiz.mode === "placement" ? "Placement check" : quiz.mode === "weakest" ? "Practice — weakest objectives" : "Practice — " + q.obj;
    var body;
    if (q.type === "numeric") {
      body = '<input class="cv-num" id="cv-in" type="text" inputmode="decimal" autocomplete="off" placeholder="Your answer">' +
        '<div class="cv-hint">Type the number (no units).</div>';
    } else {
      var multi = q.type === "multi";
      body = (multi ? '<div class="cv-hint" style="margin:0 0 8px">Select ALL that apply, then Check.</div>' : "") +
        '<div class="cv-opts">' + q.options.map(function (o, i) {
          return '<button class="cv-opt" data-i="' + i + '">' + esc(o) + '</button>';
        }).join("") + '</div>';
    }
    el.innerHTML =
      '<div class="cv-wrap"><div class="cv-q">' +
        '<div class="cv-prog"><span>' + esc(title) + '</span><span>' + (quiz.i + 1) + " / " + quiz.qs.length + '</span></div>' +
        '<div class="cv-qtext">' + esc(q.q) + '</div>' +
        body +
        '<div id="cv-fb"></div>' +
        '<div class="cv-row" id="cv-row"><button class="cv-btn" id="cv-check">Check</button>' +
          '<button class="cv-btn ghost sm" id="cv-quit">Quit</button></div>' +
      '</div></div>';

    var sel = q.type === "multi" ? [] : null;
    el.querySelectorAll(".cv-opt").forEach(function (b) {
      b.addEventListener("click", function () {
        if (quiz.answered) return;
        var i = Number(this.getAttribute("data-i"));
        if (q.type === "multi") {
          var k = sel.indexOf(i); if (k >= 0) sel.splice(k, 1); else sel.push(i);
          this.classList.toggle("sel");
        } else {
          sel = i;
          el.querySelectorAll(".cv-opt").forEach(function (x) { x.classList.remove("sel"); });
          this.classList.add("sel");
        }
      });
    });
    document.getElementById("cv-quit").addEventListener("click", function () { quiz = null; renderDash(); });
    document.getElementById("cv-check").addEventListener("click", function () {
      if (quiz.answered) return;
      var resp = q.type === "numeric" ? document.getElementById("cv-in").value : sel;
      if (q.type === "numeric" && !String(resp).trim()) return;
      if ((q.type === "mc" && sel === null) || (q.type === "multi" && sel.length === 0)) return;
      submit(q, resp);
    });
  }

  function submit(q, resp) {
    quiz.answered = true;
    var ok = M.check(q, resp);
    if (ok) quiz.correct++;
    M.record(courseId, q.obj, ok);
    // mark options
    if (q.type !== "numeric") {
      el.querySelectorAll(".cv-opt").forEach(function (b) {
        var i = Number(b.getAttribute("data-i"));
        var isCorrect = q.type === "mc" ? (i === q.a) : (q.correct.indexOf(i) >= 0);
        if (isCorrect) b.classList.add("correct");
        else if (b.classList.contains("sel")) b.classList.add("wrong");
        b.disabled = true;
      });
    } else {
      var inp = document.getElementById("cv-in"); if (inp) inp.disabled = true;
    }
    var ansText = q.type === "numeric" ? ("Answer: " + q.answer) :
      q.type === "mc" ? ("Answer: " + q.options[q.a]) :
      ("Answer: " + q.correct.map(function (i) { return q.options[i]; }).join(", "));
    document.getElementById("cv-fb").innerHTML =
      '<div class="cv-fb ' + (ok ? "ok" : "no") + '">' + (ok ? "✅ Correct. " : "❌ Not quite. " + esc(ansText) + ". ") + esc(q.why || "") + '</div>';
    var row = document.getElementById("cv-row");
    var last = quiz.i >= quiz.qs.length - 1;
    row.innerHTML = '<button class="cv-btn" id="cv-next">' + (last ? "See results" : "Next →") + '</button>';
    document.getElementById("cv-next").addEventListener("click", function () {
      if (last) finish();
      else { quiz.i++; quiz.answered = false; renderQ(); }
    });
  }

  function finish() {
    if (quiz.mode === "placement") M.markPlaced(courseId);
    var s = quiz, r = M.readiness(courseId); quiz = null;
    el.innerHTML =
      '<div class="cv-wrap"><div class="cv-done">' +
        '<h2 style="margin:4px 0 2px">' + (s.mode === "placement" ? "Placement complete" : "Practice complete") + '</h2>' +
        '<p style="color:var(--text-muted,#9aa);font-size:.85rem">You got <b>' + s.correct + " / " + s.qs.length + '</b> this round.</p>' +
        ringSvg(r.pct, r.letter) +
        '<p style="margin-top:8px">Course grade: <b>' + r.letter + '</b> · GPA ' + r.gpa.toFixed(1) + ' · ' + r.mastered + "/" + r.total + ' objectives mastered</p>' +
        '<div class="cv-row" style="justify-content:center"><button class="cv-btn" data-act="back">Back to course</button>' +
        (r.complete ? "" : '<button class="cv-btn ghost" data-act="again">Practice weakest</button>') + '</div>' +
      '</div></div>';
    el.querySelectorAll("[data-act]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (this.getAttribute("data-act") === "again") startQuiz("weakest"); else renderDash();
      });
    });
  }

  return { init: init };
})();
