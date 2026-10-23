/* daily-mix.js (R6-3) — the "Daily Mix" adaptive cross-subject session.
   One button that pulls your weakest and most-overdue objectives from across EVERY
   started course into a short (~10 question) mixed session, interleaved by subject for
   variety. It feeds the real mastery engine, the missed-questions queue and the daily
   streak/goal — the fastest way to touch everything that needs touching. Local only. */
(function () {
  "use strict";

  var SIZE = 10;                       /* questions per mix */
  var DONE = "lab404.dailymix.done";   /* date of the last finished mix */

  function today() { return new Date().toISOString().slice(0, 10); }
  function doneToday() { try { return localStorage.getItem(DONE) === today(); } catch (e) { return false; } }
  function markDone() { try { localStorage.setItem(DONE, today()); } catch (e) {} }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  function startedCourses() {
    var CO = window.LAB404_COURSES || {}, out = [];
    Object.keys(CO).forEach(function (id) {
      try { if (localStorage.getItem("lab404.mastery." + id)) out.push(id); } catch (e) {}
    });
    return out;
  }

  /* Build a prioritized, subject-interleaved list of up to SIZE questions.
     Priority per objective: 0 overdue-for-review · 1 weak · 2 needs-work ·
     3 seen-but-not-mastered · 4 unseen. Lower goes first; we round-robin across
     courses so the mix spans subjects. */
  function gather(limit) {
    limit = limit || SIZE;
    var M = window.LAB404_MASTERY, CO = window.LAB404_COURSES || {};
    if (!M) return [];
    var started = startedCourses();
    var byCourse = {};
    started.forEach(function (id) {
      var c = CO[id]; if (!c) return;
      var st = M.load(id), seen = {}, list = [];
      (M.dueReview(id) || []).forEach(function (code) { list.push({ course: id, obj: code, pri: 0 }); seen[code] = 1; });
      (c.objectives || []).forEach(function (ob) {
        if (seen[ob.code]) return;
        var s = M.objStats(id, ob.code, st);
        var pri = s.band === "weak" ? 1 : s.band === "needs" ? 2 : (s.band === "mastered" ? -1 : (s.seen > 0 ? 3 : 4));
        if (pri >= 0) list.push({ course: id, obj: ob.code, pri: pri });
      });
      list.sort(function (a, b) { return a.pri - b.pri; });
      if (list.length) byCourse[id] = list;
    });
    var courseIds = shuffle(Object.keys(byCourse));
    var out = [], used = {}, guard = 0;
    while (out.length < limit && guard++ < 500) {
      var progressed = false;
      for (var ci = 0; ci < courseIds.length && out.length < limit; ci++) {
        var q = byCourse[courseIds[ci]].shift();
        if (!q) continue;
        progressed = true;
        var pool = M.questionsFor(q.course, q.obj) || [];
        if (!pool.length) continue;
        var qq = pool[Math.floor(Math.random() * pool.length)];
        var k = q.course + "::" + qq.id;
        if (used[k]) continue;
        used[k] = 1;
        out.push({ q: qq, course: q.course, obj: q.obj });
      }
      if (!progressed) break;
    }
    return out;
  }

  function available() { return startedCourses().length > 0; }

  function ensureStyle() {
    if (document.getElementById("dmx-style")) return;
    var st = document.createElement("style"); st.id = "dmx-style";
    st.textContent =
      ".dmx{padding:18px 20px;font-size:.9rem;max-width:620px;margin:0 auto;box-sizing:border-box}" +
      ".dmx h2{font-size:1.1rem;color:var(--accent2,#39e3c8);margin:0 0 4px}" +
      ".dmx-lead{color:var(--text-muted,#9aa);font-size:.82rem;margin:0 0 14px;line-height:1.6}" +
      ".dmx-prog{display:flex;justify-content:space-between;font-size:.72rem;color:var(--text-muted,#9aa);margin-bottom:8px}" +
      ".dmx-qtext{font-weight:700;font-size:1rem;line-height:1.5;margin:0 0 6px}" +
      ".dmx-src{font-size:.66rem;color:var(--text-faint,#778);margin:0 0 12px}" +
      ".dmx-opts{display:flex;flex-direction:column;gap:8px}" +
      ".dmx-opt{text-align:left;border:1px solid var(--border,#334);background:var(--surface,#1a2230);color:var(--text,#dfe);border-radius:10px;padding:10px 13px;font-size:.88rem;cursor:pointer;font-family:inherit}" +
      ".dmx-opt:hover{border-color:var(--accent2,#39e3c8)}" +
      ".dmx-opt.sel{border-color:var(--accent2,#39e3c8);background:rgba(57,227,200,.1)}" +
      ".dmx-opt.correct{border-color:#3cbe6e;background:rgba(60,190,110,.14)}" +
      ".dmx-opt.wrong{border-color:#e0484a;background:rgba(224,72,72,.12)}" +
      ".dmx-num{width:100%;box-sizing:border-box;border:1px solid var(--border,#334);background:var(--surface,#1a2230);color:var(--text,#dfe);border-radius:10px;padding:10px 13px;font-size:.95rem;font-family:inherit}" +
      ".dmx-hint{font-size:.68rem;color:var(--text-faint,#778);margin-top:6px}" +
      ".dmx-fb{margin:12px 0 0;padding:10px 13px;border-radius:10px;font-size:.82rem;line-height:1.5}" +
      ".dmx-fb.ok{background:rgba(60,190,110,.12);border:1px solid #3cbe6e}" +
      ".dmx-fb.no{background:rgba(224,72,72,.1);border:1px solid #e0484a}" +
      ".dmx-row{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}" +
      ".dmx-btn{border:1px solid var(--accent2,#39e3c8);background:var(--accent2,#39e3c8);color:#04201b;border-radius:9px;padding:9px 16px;font-size:.84rem;font-weight:700;cursor:pointer;font-family:inherit}" +
      ".dmx-btn.ghost{background:transparent;color:var(--text,#dfe);border-color:var(--border,#334)}" +
      ".dmx-empty{text-align:center;padding:32px 16px;color:var(--text-muted,#9aa);line-height:1.7}" +
      ".dmx-empty .big{font-size:2.6rem;display:block;margin-bottom:8px}" +
      ".dmx-done{text-align:center;padding:24px 16px;line-height:1.7}" +
      ".dmx-chips{display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin:10px 0 2px}" +
      ".dmx-chip{font-size:.68rem;border:1px solid var(--border,#334);border-radius:999px;padding:3px 9px;color:var(--text-muted,#9aa)}";
    document.head.appendChild(st);
  }

  function render(content) {
    ensureStyle();
    var M = window.LAB404_MASTERY;
    var COURSES = window.LAB404_COURSES || {};
    if (!available()) {
      content.innerHTML =
        '<div class="dmx"><div class="dmx-empty"><span class="big">🎲</span>' +
          '<b>Your Daily Mix is waiting.</b><br>' +
          'Start a course or two and the Daily Mix will pull your weakest and most-overdue skills from across every subject into one quick session.' +
          '<div class="dmx-row" style="justify-content:center"><button class="dmx-btn" id="dmx-grade">Browse by grade</button></div>' +
        '</div></div>';
      var gb = content.querySelector("#dmx-grade");
      if (gb) gb.addEventListener("click", function () { if (window.Desktop) Desktop.openWindow("bygrade"); });
      return;
    }
    var items = gather(SIZE);
    if (!items.length) {
      content.innerHTML =
        '<div class="dmx"><div class="dmx-empty"><span class="big">🌟</span>' +
          '<b>Nothing needs a refresher right now.</b><br>' +
          "You're on top of everything you've started — come back tomorrow, or open a new course to grow the mix." +
          '<div class="dmx-row" style="justify-content:center"><button class="dmx-btn" id="dmx-grade">Browse by grade</button></div>' +
        '</div></div>';
      var gb2 = content.querySelector("#dmx-grade");
      if (gb2) gb2.addEventListener("click", function () { if (window.Desktop) Desktop.openWindow("bygrade"); });
      return;
    }

    var quiz = { qs: items, i: 0, right: 0, answered: false };
    function courseTitle(id) { return (COURSES[id] && COURSES[id].title) || id; }
    function raText(q) {
      var t = String(q.q || "");
      if (q.options && q.options.length) t += ". Options: " + q.options.map(function (o, i) { return String.fromCharCode(65 + i) + ". " + o; }).join(". ");
      return t;
    }

    function renderQ() {
      if (window.ReadAloud) window.ReadAloud.stop();
      var it = quiz.qs[quiz.i], q = it.q, body;
      if (q.type === "numeric") {
        body = '<input class="dmx-num" id="dmx-in" type="text" inputmode="decimal" autocomplete="off" placeholder="Your answer">' +
          '<div class="dmx-hint">Type the number (no units).</div>';
      } else {
        var order = shuffle(q.options.map(function (_, i) { return i; }));
        body = (q.type === "multi" ? '<div class="dmx-hint" style="margin:0 0 8px">Select ALL that apply, then Check.</div>' : "") +
          '<div class="dmx-opts">' + order.map(function (i) {
            return '<button class="dmx-opt" data-i="' + i + '">' + esc(q.options[i]) + '</button>';
          }).join("") + '</div>';
      }
      content.innerHTML =
        '<div class="dmx">' +
          '<div class="dmx-prog"><span>🎲 Daily Mix</span><span>' + (quiz.i + 1) + " / " + quiz.qs.length + '</span></div>' +
          '<div class="dmx-qtext">' + esc(q.q) + '</div>' +
          '<div class="dmx-src">from ' + esc(courseTitle(it.course)) + ' · ' + esc(it.obj || "") + '</div>' +
          body +
          '<div id="dmx-fb"></div>' +
          '<div class="dmx-row" id="dmx-row"><button class="dmx-btn" id="dmx-check">Check</button>' +
            '<button class="dmx-btn ghost" id="dmx-quit">Quit</button>' +
            ((window.ReadAloud && window.ReadAloud.supported()) ? '<button class="dmx-btn ghost cv-readaloud" id="dmx-ra" aria-pressed="false" title="Read this question aloud"><span class="ra-lbl">🔊 Listen</span></button>' : "") +
          '</div>' +
        '</div>';

      var sel = q.type === "multi" ? [] : null;
      content.querySelectorAll(".dmx-opt").forEach(function (b) {
        b.addEventListener("click", function () {
          if (quiz.answered) return;
          var i = Number(this.getAttribute("data-i"));
          if (q.type === "multi") {
            var k = sel.indexOf(i); if (k >= 0) sel.splice(k, 1); else sel.push(i);
            this.classList.toggle("sel");
          } else {
            sel = i;
            content.querySelectorAll(".dmx-opt").forEach(function (x) { x.classList.remove("sel"); });
            this.classList.add("sel");
          }
        });
      });
      content.querySelector("#dmx-quit").addEventListener("click", function () { if (window.ReadAloud) window.ReadAloud.stop(); render(content); });
      var ra = content.querySelector("#dmx-ra");
      if (ra) ra.addEventListener("click", function () { window.ReadAloud.toggle(raText(q), ra); });
      content.querySelector("#dmx-check").addEventListener("click", function () {
        if (quiz.answered) return;
        var resp = q.type === "numeric" ? (document.getElementById("dmx-in") || {}).value : sel;
        if (q.type === "numeric" && !String(resp == null ? "" : resp).trim()) return;
        if ((q.type === "mc" && sel === null) || (q.type === "multi" && sel.length === 0)) return;
        submit(it, resp);
      });
    }

    function submit(it, resp) {
      quiz.answered = true;
      var q = it.q, ok = M.check(q, resp);
      if (ok) quiz.right++;
      M.record(it.course, q.obj, ok);                                   /* real mastery engine */
      if (window.Lab404Missed) window.Lab404Missed.record(it.course, q, ok); /* B3b missed queue */
      if (window.Lab404Goals) window.Lab404Goals.bump(ok);              /* E4 streak + daily goal */

      if (q.type !== "numeric") {
        content.querySelectorAll(".dmx-opt").forEach(function (b) {
          var i = Number(b.getAttribute("data-i"));
          var isCorrect = q.type === "mc" ? (i === q.a) : ((q.correct || []).indexOf(i) >= 0);
          if (isCorrect) b.classList.add("correct");
          else if (b.classList.contains("sel")) b.classList.add("wrong");
          b.disabled = true;
        });
      } else {
        var inp = document.getElementById("dmx-in"); if (inp) inp.disabled = true;
      }
      var ansText = q.type === "numeric" ? ("Answer: " + q.answer) :
        q.type === "mc" ? ("Answer: " + q.options[q.a]) :
        ("Answer: " + (q.correct || []).map(function (i) { return q.options[i]; }).join(", "));
      document.getElementById("dmx-fb").innerHTML =
        '<div class="dmx-fb ' + (ok ? "ok" : "no") + '">' +
          (ok ? "✅ Correct. " : "❌ Not quite. " + esc(ansText) + ". ") + esc(q.why || "") +
        '</div>';
      var last = quiz.i >= quiz.qs.length - 1;
      document.getElementById("dmx-row").innerHTML =
        '<button class="dmx-btn" id="dmx-next">' + (last ? "See results" : "Next →") + '</button>';
      document.getElementById("dmx-next").addEventListener("click", function () {
        if (last) finish();
        else { quiz.i++; quiz.answered = false; renderQ(); }
      });
    }

    function finish() {
      markDone();
      var pct = Math.round(quiz.right / quiz.qs.length * 100);
      var streak = 0;
      try { streak = Number(localStorage.getItem("study-streak-count")) || 0; } catch (e) {}
      content.innerHTML =
        '<div class="dmx"><div class="dmx-done">' +
          '<div style="font-size:2.4rem">' + (pct >= 80 ? "🏆" : pct >= 50 ? "💪" : "📈") + '</div>' +
          '<h2 style="justify-content:center">Daily Mix done</h2>' +
          '<p style="color:var(--text-muted,#9aa);font-size:.9rem">You got <b>' + quiz.right + '</b> of <b>' + quiz.qs.length + '</b> right (' + pct + '%).</p>' +
          '<div class="dmx-chips">' +
            '<span class="dmx-chip">🔥 ' + streak + '-day streak</span>' +
            '<span class="dmx-chip">✓ counts toward today\'s goal</span>' +
            '<span class="dmx-chip">↻ misses saved to practice</span>' +
          '</div>' +
          '<p style="color:var(--text-muted,#9aa);font-size:.82rem;margin-top:10px">Your weak spots just got a little stronger. Come back tomorrow for a fresh mix.</p>' +
          '<div class="dmx-row" style="justify-content:center">' +
            '<button class="dmx-btn" id="dmx-again">Another mix</button>' +
            '<button class="dmx-btn ghost" id="dmx-close">Done</button>' +
          '</div>' +
        '</div></div>';
      document.getElementById("dmx-again").addEventListener("click", function () { render(content); });
      document.getElementById("dmx-close").addEventListener("click", function () { if (window.ReadAloud) window.ReadAloud.stop(); render(content); });
    }

    renderQ();
  }

  window.Lab404DailyMix = {
    render: render, available: available, doneToday: doneToday, gather: gather, SIZE: SIZE
  };
})();
