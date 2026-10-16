/* missed.js — the "practice what you missed" queue (B3b).
   Every question answered wrong in a course quiz is remembered here (by course +
   question id); getting it right later removes it. A learner can then practice just
   their misses, across every course, in one place. Local only — nothing uploaded. */
(function () {
  "use strict";

  var KEY = "lab404.missed";

  function loadMap() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; }
    catch (e) { return {}; }
  }
  function saveMap(m) {
    try { localStorage.setItem(KEY, JSON.stringify(m)); } catch (e) {}
  }
  function keyOf(course, id) { return course + "::" + id; }

  /* Called after each graded question. Remembers misses, forgets ones since got right. */
  function record(course, q, ok) {
    if (!course || !q || q.id == null) return;
    var m = loadMap(), k = keyOf(course, q.id);
    if (ok) { if (m[k]) { delete m[k]; saveMap(m); } }
    else if (!m[k]) { m[k] = { course: course, obj: q.obj, id: q.id, ts: Date.now() }; saveMap(m); }
  }

  function all() {
    var m = loadMap();
    return Object.keys(m).map(function (k) { return m[k]; });
  }
  function count() { return Object.keys(loadMap()).length; }

  /* Turn stored entries back into real question objects; prune entries that no
     longer resolve (e.g. a question was removed from the bank). */
  function resolve() {
    var M = window.LAB404_MASTERY;
    if (!M || !M.questionsFor) return [];
    var m = loadMap(), out = [], changed = false;
    Object.keys(m).forEach(function (k) {
      var e = m[k];
      var pool = M.questionsFor(e.course, e.obj) || [];
      var q = null;
      for (var i = 0; i < pool.length; i++) { if (pool[i].id === e.id) { q = pool[i]; break; } }
      if (q) out.push({ q: q, course: e.course, obj: e.obj, ts: e.ts });
      else { delete m[k]; changed = true; }
    });
    if (changed) saveMap(m);
    out.sort(function (a, b) { return a.ts - b.ts; });  /* oldest misses first */
    return out;
  }

  function clearAll() { saveMap({}); }

  /* ── Self-contained quiz runner for the "Practice what you missed" window ── */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  function ensureStyle() {
    if (document.getElementById("mq-style")) return;
    var st = document.createElement("style"); st.id = "mq-style";
    st.textContent =
      ".mq{padding:18px 20px;font-size:.9rem;max-width:620px;margin:0 auto;box-sizing:border-box}" +
      ".mq h2{font-size:1.1rem;color:var(--accent2,#39e3c8);margin:0 0 4px}" +
      ".mq .mq-lead{color:var(--text-muted,#9aa);font-size:.82rem;margin:0 0 14px;line-height:1.6}" +
      ".mq-prog{display:flex;justify-content:space-between;font-size:.72rem;color:var(--text-muted,#9aa);margin-bottom:8px}" +
      ".mq-qtext{font-weight:700;font-size:1rem;line-height:1.5;margin:0 0 6px}" +
      ".mq-src{font-size:.66rem;color:var(--text-faint,#778);margin:0 0 12px}" +
      ".mq-opts{display:flex;flex-direction:column;gap:8px}" +
      ".mq-opt{text-align:left;border:1px solid var(--border,#334);background:var(--surface,#1a2230);color:var(--text,#dfe);border-radius:10px;padding:10px 13px;font-size:.88rem;cursor:pointer;font-family:inherit}" +
      ".mq-opt:hover{border-color:var(--accent2,#39e3c8)}" +
      ".mq-opt.sel{border-color:var(--accent2,#39e3c8);background:rgba(57,227,200,.1)}" +
      ".mq-opt.correct{border-color:#3cbe6e;background:rgba(60,190,110,.14)}" +
      ".mq-opt.wrong{border-color:#e0484a;background:rgba(224,72,72,.12)}" +
      ".mq-num{width:100%;box-sizing:border-box;border:1px solid var(--border,#334);background:var(--surface,#1a2230);color:var(--text,#dfe);border-radius:10px;padding:10px 13px;font-size:.95rem;font-family:inherit}" +
      ".mq-hint{font-size:.68rem;color:var(--text-faint,#778);margin-top:6px}" +
      ".mq-fb{margin:12px 0 0;padding:10px 13px;border-radius:10px;font-size:.82rem;line-height:1.5}" +
      ".mq-fb.ok{background:rgba(60,190,110,.12);border:1px solid #3cbe6e}" +
      ".mq-fb.no{background:rgba(224,72,72,.1);border:1px solid #e0484a}" +
      ".mq-row{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}" +
      ".mq-btn{border:1px solid var(--accent2,#39e3c8);background:var(--accent2,#39e3c8);color:#04201b;border-radius:9px;padding:9px 16px;font-size:.84rem;font-weight:700;cursor:pointer;font-family:inherit}" +
      ".mq-btn.ghost{background:transparent;color:var(--text,#dfe);border-color:var(--border,#334)}" +
      ".mq-empty{text-align:center;padding:32px 16px;color:var(--text-muted,#9aa);line-height:1.7}" +
      ".mq-empty .big{font-size:2.6rem;display:block;margin-bottom:8px}" +
      ".mq-done{text-align:center;padding:24px 16px;line-height:1.7}";
    document.head.appendChild(st);
  }

  /* Render into a content element (the app window body). */
  function render(content) {
    ensureStyle();
    var M = window.LAB404_MASTERY;
    var COURSES = window.LAB404_COURSES || {};
    var items = resolve();
    if (!items.length) {
      content.innerHTML =
        '<div class="mq"><div class="mq-empty"><span class="big">🎉</span>' +
          '<b>No missed questions right now.</b><br>' +
          'When you get a question wrong in a course quiz, it lands here so you can practice it again later. Go take a quiz!' +
        '</div></div>';
      return;
    }

    var quiz = { qs: shuffle(items.slice()), i: 0, cleared: 0, answered: false };

    function courseTitle(id) { return (COURSES[id] && COURSES[id].title) || id; }

    function renderQ() {
      var it = quiz.qs[quiz.i], q = it.q;
      var body;
      if (q.type === "numeric") {
        body = '<input class="mq-num" id="mq-in" type="text" inputmode="decimal" autocomplete="off" placeholder="Your answer">' +
          '<div class="mq-hint">Type the number (no units).</div>';
      } else {
        var order = shuffle(q.options.map(function (_, i) { return i; }));
        body = (q.type === "multi" ? '<div class="mq-hint" style="margin:0 0 8px">Select ALL that apply, then Check.</div>' : "") +
          '<div class="mq-opts">' + order.map(function (i) {
            return '<button class="mq-opt" data-i="' + i + '">' + esc(q.options[i]) + '</button>';
          }).join("") + '</div>';
      }
      content.innerHTML =
        '<div class="mq">' +
          '<div class="mq-prog"><span>🔁 Practice what you missed</span><span>' + (quiz.i + 1) + " / " + quiz.qs.length + '</span></div>' +
          '<div class="mq-qtext">' + esc(q.q) + '</div>' +
          '<div class="mq-src">from ' + esc(courseTitle(it.course)) + ' · ' + esc(it.obj || "") + '</div>' +
          body +
          '<div id="mq-fb"></div>' +
          '<div class="mq-row" id="mq-row"><button class="mq-btn" id="mq-check">Check</button>' +
            '<button class="mq-btn ghost" id="mq-quit">Quit</button></div>' +
        '</div>';

      var sel = q.type === "multi" ? [] : null;
      content.querySelectorAll(".mq-opt").forEach(function (b) {
        b.addEventListener("click", function () {
          if (quiz.answered) return;
          var i = Number(this.getAttribute("data-i"));
          if (q.type === "multi") {
            var k = sel.indexOf(i); if (k >= 0) sel.splice(k, 1); else sel.push(i);
            this.classList.toggle("sel");
          } else {
            sel = i;
            content.querySelectorAll(".mq-opt").forEach(function (x) { x.classList.remove("sel"); });
            this.classList.add("sel");
          }
        });
      });
      content.querySelector("#mq-quit").addEventListener("click", function () { render(content); });
      content.querySelector("#mq-check").addEventListener("click", function () {
        if (quiz.answered) return;
        var resp = q.type === "numeric" ? (document.getElementById("mq-in") || {}).value : sel;
        if (q.type === "numeric" && !String(resp == null ? "" : resp).trim()) return;
        if ((q.type === "mc" && sel === null) || (q.type === "multi" && sel.length === 0)) return;
        submit(it, resp);
      });
    }

    function submit(it, resp) {
      quiz.answered = true;
      var q = it.q, ok = M.check(q, resp);
      if (ok) quiz.cleared++;
      M.record(it.course, q.obj, ok);   /* feed the real mastery engine */
      record(it.course, q, ok);          /* clears it from the queue when right */
      if (window.Lab404Goals) window.Lab404Goals.bump(ok);  /* E4: daily goal count */

      if (q.type !== "numeric") {
        content.querySelectorAll(".mq-opt").forEach(function (b) {
          var i = Number(b.getAttribute("data-i"));
          var isCorrect = q.type === "mc" ? (i === q.a) : ((q.correct || []).indexOf(i) >= 0);
          if (isCorrect) b.classList.add("correct");
          else if (b.classList.contains("sel")) b.classList.add("wrong");
          b.disabled = true;
        });
      } else {
        var inp = document.getElementById("mq-in"); if (inp) inp.disabled = true;
      }
      var ansText = q.type === "numeric" ? ("Answer: " + q.answer) :
        q.type === "mc" ? ("Answer: " + q.options[q.a]) :
        ("Answer: " + (q.correct || []).map(function (i) { return q.options[i]; }).join(", "));
      document.getElementById("mq-fb").innerHTML =
        '<div class="mq-fb ' + (ok ? "ok" : "no") + '">' +
          (ok ? "✅ Correct — cleared from your list. " : "❌ Not quite. " + esc(ansText) + ". ") + esc(q.why || "") +
        '</div>';
      var last = quiz.i >= quiz.qs.length - 1;
      document.getElementById("mq-row").innerHTML =
        '<button class="mq-btn" id="mq-next">' + (last ? "See results" : "Next →") + '</button>';
      document.getElementById("mq-next").addEventListener("click", function () {
        if (last) finish();
        else { quiz.i++; quiz.answered = false; renderQ(); }
      });
    }

    function finish() {
      var remaining = count();
      content.innerHTML =
        '<div class="mq"><div class="mq-done">' +
          '<div style="font-size:2.4rem">' + (remaining === 0 ? "🏆" : "💪") + '</div>' +
          '<h2 style="justify-content:center">Nice work</h2>' +
          '<p style="color:var(--text-muted,#9aa);font-size:.86rem">You cleared <b>' + quiz.cleared + '</b> of <b>' + quiz.qs.length + '</b> this round.</p>' +
          (remaining === 0
            ? '<p style="color:var(--text-muted,#9aa);font-size:.84rem">Your missed-questions list is empty. 🎉</p>'
            : '<p style="color:var(--text-muted,#9aa);font-size:.84rem"><b>' + remaining + '</b> still to practice.</p>') +
          '<div class="mq-row" style="justify-content:center">' +
            (remaining > 0 ? '<button class="mq-btn" id="mq-again">Keep going</button>' : "") +
            '<button class="mq-btn ghost" id="mq-close">Done</button>' +
          '</div>' +
        '</div></div>';
      var again = document.getElementById("mq-again");
      if (again) again.addEventListener("click", function () { render(content); });
      document.getElementById("mq-close").addEventListener("click", function () { render(content); });
    }

    renderQ();
  }

  window.Lab404Missed = {
    record: record, all: all, count: count, resolve: resolve, clear: clearAll, render: render
  };
})();
