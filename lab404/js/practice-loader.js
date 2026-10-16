/* practice-loader.js — Full practice test interface */
(function () {
  "use strict";

  var state = {
    core: 1,
    allQuestions: [],
    queue: [],
    currentIdx: 0,
    answered: 0,
    correct: 0,
    startTime: null,
    timer: null,
    timed: false,
    timeLimit: 0,
    elapsed: 0,
    finished: false,
  };

  /* "core" 3 = Security+ (one exam, no cores; the number is only an internal slot) */
  var TOTAL = { 1: 25, 2: 20, 3: 16 };

  function isSec() { return state.core === 3; }

  function passPct() { return isSec() ? 83 : 78; } /* ~750/900 for SY0-701, ~700/900 for A+ */

  function examLabel() {
    return isSec() ? "Security+ (SY0-701)" : "Core " + state.core + " (220-120" + state.core + ")";
  }

  function chaptersHref() {
    return isSec() ? "index.html" : (state.core === 1 ? "core1.html" : "core2.html");
  }

  function getParams() {
    var params = new URLSearchParams(window.location.search);
    var core = parseInt(params.get("core"), 10);
    var chRaw = params.get("ch");
    var ch = chRaw ? parseInt(chRaw, 10) : null;
    var safeCore = [1, 2, 3].includes(core) ? core : 1;
    var safeCh = (ch !== null && !isNaN(ch) && ch >= 1 && ch <= (TOTAL[safeCore] || 99)) ? ch : null;
    return { core: safeCore, ch: safeCh };
  }

  function escHtml(str) {
    if (window.AplusUtils) return window.AplusUtils.escHtml(str);
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function dataUrl(core) {
    return "data/practice-core" + core + ".json";
  }

  function shuffleArray(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  /* ── Academic (K-12) practice: route to the per-course mastery runner ── (B1b) */
  var SUBJECTS = [
    { key: "math",    icon: "🔢", label: "Math" },
    { key: "science", icon: "🔬", label: "Science" },
    { key: "english", icon: "📖", label: "English (ELA)" },
    { key: "social",  icon: "🏛️", label: "Social Studies" },
    { key: "coding",  icon: "💻", label: "Coding & CS" }
  ];
  var GRADES = ["K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "C"];
  function gradeLabel(g) { return g === "K" ? "K" : g === "C" ? "College" : g; }

  function inHub() { return !!(window.Desktop && Desktop.openWindow); }

  function renderAcademic(container) {
    /* needs the lazy-loaded course data */
    if (window.Lab404Data && !window.Lab404Data.isLoaded()) {
      container.innerHTML = '<div class="loading-state"><div class="spinner"></div><p>Loading subjects…</p></div>';
      window.Lab404Data.ensure().then(function () { renderAcademic(container); })
        .catch(function () { container.innerHTML = '<div class="error-state container" style="padding-top:3rem;"><h2>Couldn’t load subjects</h2><p>Check your connection and reopen this window.</p></div>'; });
      return;
    }
    var CO = window.LAB404_COURSES || {};
    /* which grades actually have courses */
    var have = {};
    Object.keys(CO).forEach(function (id) { have[CO[id].grade] = true; });
    var grades = GRADES.filter(function (g) { return have[g]; });

    var saved = "";
    try { saved = localStorage.getItem("lab404.myGrade") || ""; } catch (e) {}
    var sel = grades.indexOf(saved) >= 0 ? saved : (grades.indexOf("4") >= 0 ? "4" : grades[0]);

    function draw() {
      var courses = Object.keys(CO).filter(function (id) { return CO[id].grade === sel; })
        .map(function (id) { return CO[id]; });
      /* order subjects by the SUBJECTS list */
      courses.sort(function (a, b) {
        var ia = SUBJECTS.map(function (s) { return s.key; }).indexOf(a.subjectKey);
        var ib = SUBJECTS.map(function (s) { return s.key; }).indexOf(b.subjectKey);
        return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
      });
      function subjMeta(k) { for (var i = 0; i < SUBJECTS.length; i++) if (SUBJECTS[i].key === k) return SUBJECTS[i]; return { icon: "📘", label: k }; }

      container.innerHTML =
        '<div class="container" style="padding-top:2.5rem;padding-bottom:4rem;max-width:680px;">' +
          '<div class="section-header">' +
            '<span class="section-label">Practice Mode</span>' +
            '<h1 style="font-size:clamp(1.5rem,3.5vw,2.25rem);margin-bottom:0.5rem;">Practice by Subject</h1>' +
            '<p class="text-muted text-sm">Pick a grade and subject — you’ll jump into that course’s practice, with live mastery tracking.</p>' +
          '</div>' +
          '<div style="display:flex;gap:0.5rem;margin:1.25rem 0 1rem;">' +
            '<button class="btn btn-secondary" id="toCompTIA">🎓 CompTIA exams</button>' +
            '<button class="btn btn-primary" id="toAcademic">🏫 School subjects (K–12)</button>' +
          '</div>' +
          '<div class="card" style="display:flex;flex-direction:column;gap:1.1rem;">' +
            '<div>' +
              '<label class="text-sm" style="font-weight:600;display:block;margin-bottom:0.5rem;">Grade</label>' +
              '<div style="display:flex;gap:0.4rem;flex-wrap:wrap;">' +
                grades.map(function (g) {
                  return '<button class="btn ' + (g === sel ? "btn-primary" : "btn-secondary") + ' acg-btn" data-g="' + g + '" style="min-width:42px;">' + gradeLabel(g) + '</button>';
                }).join("") +
              '</div>' +
            '</div>' +
            '<div>' +
              '<label class="text-sm" style="font-weight:600;display:block;margin-bottom:0.5rem;">Subject — Grade ' + gradeLabel(sel) + '</label>' +
              '<div style="display:flex;flex-direction:column;gap:0.5rem;">' +
                (courses.length ? courses.map(function (c) {
                  var m = subjMeta(c.subjectKey);
                  return '<button class="btn btn-secondary acs-btn" data-course="' + escHtml(c.id) + '" style="text-align:left;display:flex;align-items:center;gap:0.6rem;justify-content:flex-start;">' +
                    '<span style="font-size:1.2rem;">' + m.icon + '</span><span>' + escHtml(c.title) + '</span></button>';
                }).join("") : '<p class="text-sm text-muted">No subjects for this grade yet.</p>') +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';

      container.querySelector("#toCompTIA").addEventListener("click", function () { renderSetup(container); });
      container.querySelectorAll(".acg-btn").forEach(function (b) {
        b.addEventListener("click", function () { sel = this.getAttribute("data-g"); draw(); });
      });
      container.querySelectorAll(".acs-btn").forEach(function (b) {
        b.addEventListener("click", function () {
          var id = this.getAttribute("data-course");
          if (inHub()) Desktop.openWindow("course", { course: id });
        });
      });
    }
    draw();
  }

  /* ── Setup screen ── */
  function renderSetup(container) {
    container.innerHTML =
      '<div class="container" style="padding-top:2.5rem;padding-bottom:4rem;max-width:680px;">' +
        '<div class="section-header">' +
          '<nav class="breadcrumb" aria-label="Breadcrumb">' +
            '<a href="index.html">Home</a>' +
            '<span class="breadcrumb-sep">›</span>' +
            '<span>Practice Test</span>' +
          '</nav>' +
          '<span class="section-label">Practice Mode</span>' +
          '<h1 style="font-size:clamp(1.5rem,3.5vw,2.25rem);margin-bottom:0.5rem;">Configure Your Practice Test</h1>' +
          '<p class="text-muted text-sm">Customize your session before starting.</p>' +
        '</div>' +
        (inHub()
          ? '<div style="display:flex;gap:0.5rem;margin:1.25rem 0 0;">' +
              '<button class="btn btn-primary" id="toCompTIA">🎓 CompTIA exams</button>' +
              '<button class="btn btn-secondary" id="toAcademic">🏫 School subjects (K–12)</button>' +
            '</div>'
          : "") +
        '<div class="card" style="margin-top:1.5rem;display:flex;flex-direction:column;gap:1.25rem;">' +

          '<div>' +
            '<label class="text-sm" style="font-weight:600;display:block;margin-bottom:0.5rem;">Exam</label>' +
            '<div style="display:flex;gap:0.5rem;">' +
              (isSec()
                ? '<button class="btn btn-primary core-select-btn" data-core="3" id="coreBtn3">Security+ (SY0-701)</button>'
                : '<button class="btn btn-secondary core-select-btn" data-core="1" id="coreBtn1">Core 1 (220-1201)</button>' +
                  '<button class="btn btn-secondary core-select-btn" data-core="2" id="coreBtn2">Core 2 (220-1202)</button>') +
            '</div>' +
            (isSec() ? '<p class="text-xs text-muted" style="margin-top:0.5rem;">Includes select-two/select-three questions. Passing is about 83% (750 of 900).</p>' : '') +
          '</div>' +

          (isSec()
            ? '<div>' +
                '<label class="text-sm" style="font-weight:600;display:block;margin-bottom:0.5rem;">Question Set</label>' +
                '<div style="display:flex;gap:0.5rem;flex-wrap:wrap;">' +
                  '<button class="btn btn-secondary qset-btn" data-set="all">All</button>' +
                  '<button class="btn btn-secondary qset-btn" data-set="original">Lab404 originals</button>' +
                  '<button class="btn btn-secondary qset-btn" data-set="combined">Combined objectives (harder)</button>' +
                '</div>'
            : '<div style="display:none;">') +
          '</div>' +

          '<div>' +
            '<label class="text-sm" style="font-weight:600;display:block;margin-bottom:0.5rem;">Question Count</label>' +
            '<div style="display:flex;gap:0.5rem;flex-wrap:wrap;">' +
              '<button class="btn btn-secondary qcount-btn" data-count="10">10</button>' +
              '<button class="btn btn-secondary qcount-btn" data-count="25">25</button>' +
              '<button class="btn btn-secondary qcount-btn" data-count="50">50</button>' +
              '<button class="btn btn-secondary qcount-btn" data-count="90">Full (90)</button>' +
              '<button class="btn btn-secondary qcount-btn" data-count="999">All</button>' +
            '</div>' +
          '</div>' +

          '<div>' +
            '<label class="text-sm" style="font-weight:600;display:block;margin-bottom:0.5rem;">Timed Mode</label>' +
            '<div style="display:flex;gap:0.5rem;flex-wrap:wrap;">' +
              '<button class="btn btn-secondary time-btn" data-mins="0">Untimed</button>' +
              '<button class="btn btn-secondary time-btn" data-mins="45">45 min</button>' +
              '<button class="btn btn-secondary time-btn" data-mins="90">90 min (exam)</button>' +
            '</div>' +
          '</div>' +

          '<div style="padding-top:0.75rem;border-top:1px solid var(--border);">' +
            '<button id="startBtn" class="btn btn-primary btn-lg" style="width:100%;">Start Practice Test</button>' +
          '</div>' +

        '</div>' +
      '</div>';

    var selectedCore = state.core;
    var selectedCount = 25;
    var selectedMins = 0;
    var selectedSet = "all";

    function selectSet(s) {
      selectedSet = s;
      container.querySelectorAll(".qset-btn").forEach(function(b) {
        var match = b.dataset.set === s;
        b.classList.toggle("btn-primary", match);
        b.classList.toggle("btn-secondary", !match);
      });
    }

    function selectCore(core) {
      selectedCore = core;
      container.querySelectorAll(".core-select-btn").forEach(function(b) {
        b.classList.toggle("btn-primary", parseInt(b.dataset.core) === core);
        b.classList.toggle("btn-secondary", parseInt(b.dataset.core) !== core);
      });
    }

    function selectCount(n) {
      selectedCount = n;
      container.querySelectorAll(".qcount-btn").forEach(function(b) {
        var match = parseInt(b.dataset.count) === n;
        b.classList.toggle("btn-primary", match);
        b.classList.toggle("btn-secondary", !match);
      });
    }

    function selectTime(mins) {
      selectedMins = mins;
      container.querySelectorAll(".time-btn").forEach(function(b) {
        var match = parseInt(b.dataset.mins) === mins;
        b.classList.toggle("btn-primary", match);
        b.classList.toggle("btn-secondary", !match);
      });
    }

    selectCore(selectedCore);
    selectCount(selectedCount);
    selectTime(selectedMins);
    selectSet(selectedSet);
    container.querySelectorAll(".qset-btn").forEach(function(b) {
      b.addEventListener("click", function() { selectSet(this.dataset.set); });
    });

    container.querySelectorAll(".core-select-btn").forEach(function(b) {
      b.addEventListener("click", function() { selectCore(parseInt(this.dataset.core)); });
    });
    container.querySelectorAll(".qcount-btn").forEach(function(b) {
      b.addEventListener("click", function() { selectCount(parseInt(this.dataset.count)); });
    });
    container.querySelectorAll(".time-btn").forEach(function(b) {
      b.addEventListener("click", function() { selectTime(parseInt(this.dataset.mins)); });
    });

    container.querySelector("#startBtn").addEventListener("click", function() {
      state.core = selectedCore;
      state.qset = selectedSet;
      loadAndStart(container, selectedCount, selectedMins);
    });
    var toAcademic = container.querySelector("#toAcademic");
    if (toAcademic) toAcademic.addEventListener("click", function () { renderAcademic(container); });
  }

  function loadAndStart(container, count, mins) {
    container.innerHTML = '<div class="loading-state"><div class="spinner"></div><p>Loading questions...</p></div>';

    fetch(dataUrl(state.core))
      .then(function(res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(function(questions) {
        if (isSec() && state.qset === "original") {
          questions = questions.filter(function(q) { return q.original; });
        } else if (isSec() && state.qset === "combined") {
          questions = questions.filter(function(q) { return q.combined; });
        }
        state.allQuestions = questions;
        var shuffled = shuffleArray(questions);
        state.queue = count >= 999 ? shuffled : shuffled.slice(0, Math.min(count, shuffled.length));
        state.currentIdx = 0;
        state.answered = 0;
        state.correct = 0;
        state.timed = mins > 0;
        state.timeLimit = mins * 60;
        state.elapsed = 0;
        state.finished = false;
        state.startTime = Date.now();

        if (state.timed) {
          if (state.timer) clearInterval(state.timer);
          state.timer = setInterval(function() {
            state.elapsed = Math.floor((Date.now() - state.startTime) / 1000);
            var remaining = state.timeLimit - state.elapsed;
            var el = document.getElementById("timerDisplay");
            if (el) {
              var m = Math.floor(remaining / 60);
              var s = remaining % 60;
              el.textContent = m + ":" + (s < 10 ? "0" : "") + s;
              if (remaining <= 60) el.style.color = "var(--wrong)";
            }
            if (remaining <= 0) {
              clearInterval(state.timer);
              finishTest(container);
            }
          }, 1000);
        }

        renderQuestion(container);
      })
      .catch(function(err) {
        container.innerHTML = '<div class="error-state container" style="padding-top:3rem;"><h2>Load Error</h2><p>' + escHtml(err.message) + '</p><p style="margin-top:1rem"><a href="practice.html" class="btn btn-secondary">Back to Setup</a></p></div>';
      });
  }

  function renderQuestion(container) {
    if (state.currentIdx >= state.queue.length) {
      finishTest(container);
      return;
    }

    var q = state.queue[state.currentIdx];
    var progress = state.queue.length > 0 ? (state.currentIdx / state.queue.length) * 100 : 0;
    var coreLabel = examLabel();
    var answers = (q.answers && q.answers.length) ? q.answers : [q.answer];
    var multi = !!q.multi && answers.length > 1;

    var timerHtml = state.timed ? '<span id="timerDisplay" style="font-size:0.875rem;color:var(--text-muted);font-variant-numeric:tabular-nums;">--:--</span>' : "";

    var optHtml = q.options.map(function(opt, oi) {
      var letter = String.fromCharCode(65 + oi);
      return '<button class="option-btn" data-oi="' + oi + '" data-correct="' + answers[0] + '">' +
        '<span class="option-letter">' + letter + '</span>' +
        '<span>' + escHtml(opt) + '</span>' +
      '</button>';
    }).join("");

    var objList = (q.objectives && q.objectives.length) ? q.objectives : (q.objective ? [q.objective] : []);
    var objHtml = objList.length ? '<span class="badge badge-objective" style="font-size:0.7rem;">Obj ' + escHtml(objList.join(" + ")) + '</span>' : "";
    var chHtml = q.chapter ? '<span class="text-xs text-muted">Ch ' + q.chapter + '</span>' : "";

    container.innerHTML =
      '<div class="container" style="padding-top:2.5rem;padding-bottom:4rem;max-width:720px;">' +

        /* Header bar */
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;flex-wrap:wrap;gap:0.5rem;">' +
          '<div style="font-size:0.8rem;color:var(--text-muted);">' + escHtml(coreLabel) + '</div>' +
          timerHtml +
          '<button id="quitBtn" class="btn btn-secondary btn-sm">Quit</button>' +
        '</div>' +

        /* Progress */
        '<div style="margin-bottom:1.5rem;">' +
          '<div style="display:flex;justify-content:space-between;font-size:0.75rem;color:var(--text-faint);margin-bottom:0.4rem;">' +
            '<span>Question ' + (state.currentIdx + 1) + ' of ' + state.queue.length + '</span>' +
            '<span>' + state.correct + ' correct</span>' +
          '</div>' +
          '<div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:' + progress + '%"></div></div>' +
        '</div>' +

        /* Question */
        '<div class="practice-question">' +
          '<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.75rem;">' +
            objHtml + chHtml +
          '</div>' +
          '<p class="question-text">' + escHtml(q.q) + '</p>' +
          (multi ? '<p class="multi-hint">Select ' + answers.length + ' answers, then check.</p>' : '') +
          '<div class="question-options" role="group" aria-label="Answer options">' + optHtml + '</div>' +
          (multi ? '<div style="margin-top:0.75rem;"><button id="checkBtn" class="btn btn-secondary btn-sm" disabled>Check answer</button></div>' : '') +
          '<div class="explanation-box" id="explanationBox" aria-live="polite">' + escHtml(q.explanation || "") + '</div>' +
        '</div>' +

        /* Next button (hidden until answered) */
        '<div style="margin-top:1.25rem;display:flex;justify-content:flex-end;" id="nextWrap" class="hidden">' +
          '<button id="nextBtn" class="btn btn-primary">' +
            (state.currentIdx + 1 >= state.queue.length ? 'Finish' : 'Next Question &#8594;') +
          '</button>' +
        '</div>' +

      '</div>';

    /* Grade a set of picked option indexes: right only if it matches the answer set exactly */
    function grade(picked) {
      var right = picked.length === answers.length && picked.every(function(p) { return answers.indexOf(p) >= 0; });
      container.querySelectorAll(".option-btn").forEach(function(b) {
        b.disabled = true;
        b.classList.remove("picked");
        var boi = parseInt(b.dataset.oi, 10);
        var isAns = answers.indexOf(boi) >= 0;
        var isPicked = picked.indexOf(boi) >= 0;
        if (isAns) b.classList.add("correct");
        if (isAns && !isPicked && multi) b.classList.add("missed");
        if (!isAns && isPicked) b.classList.add("wrong");
      });
      var checkBtn = container.querySelector("#checkBtn");
      if (checkBtn) checkBtn.disabled = true;

      state.answered++;
      if (window.Lab404Goals) window.Lab404Goals.bump(right);  /* E4: daily goal count */
      if (right) {
        state.correct++;
      } else {
        saveWrongAnswer(q);
      }

      var expEl = container.querySelector("#explanationBox");
      if (expEl && q.explanation) expEl.classList.add("visible");

      var nextWrap = container.querySelector("#nextWrap");
      if (nextWrap) nextWrap.classList.remove("hidden");
    }

    /* Wire options */
    container.querySelectorAll(".option-btn").forEach(function(btn) {
      btn.addEventListener("click", function() {
        var oi = parseInt(this.dataset.oi, 10);
        if (!multi) { grade([oi]); return; }
        this.classList.toggle("picked");
        var n = container.querySelectorAll(".option-btn.picked").length;
        var checkBtn = container.querySelector("#checkBtn");
        if (checkBtn) {
          checkBtn.disabled = n === 0;
          checkBtn.classList.toggle("btn-primary", n === answers.length);
          checkBtn.classList.toggle("btn-secondary", n !== answers.length);
        }
      });
    });

    container.querySelector("#checkBtn") && container.querySelector("#checkBtn").addEventListener("click", function() {
      var picked = [];
      container.querySelectorAll(".option-btn.picked").forEach(function(b) { picked.push(parseInt(b.dataset.oi, 10)); });
      if (picked.length) grade(picked);
    });

    container.querySelector("#nextBtn") && container.querySelector("#nextBtn").addEventListener("click", function() {
      state.currentIdx++;
      renderQuestion(container);
    });

    container.querySelector("#quitBtn") && container.querySelector("#quitBtn").addEventListener("click", function() {
      if (state.timer) clearInterval(state.timer);
      renderSetup(container);
    });
  }

  function finishTest(container) {
    if (state.timer) clearInterval(state.timer);
    state.finished = true;

    var total = state.queue.length;
    var correct = state.correct;
    var pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    var pass = pct >= passPct();
    var elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    var mins = Math.floor(elapsed / 60);
    var secs = elapsed % 60;

    container.innerHTML =
      '<div class="container" style="padding-top:3rem;padding-bottom:4rem;max-width:600px;text-align:center;">' +
        '<div class="score-card">' +
          '<div class="score-number ' + (pass ? "score-pass" : "score-fail") + '">' + pct + '%</div>' +
          '<div class="score-label">' + correct + ' of ' + total + ' correct</div>' +
          '<div style="margin-top:0.5rem;">' +
            '<span class="badge ' + (pass ? "badge-covered" : "badge-objective") + '" style="font-size:0.8rem;">' +
              (pass ? "Passing Score" : "Keep Studying") +
            '</span>' +
          '</div>' +
          '<div style="margin-top:1.25rem;font-size:0.8rem;color:var(--text-faint);">Time: ' + mins + ':' + (secs < 10 ? "0" : "") + secs + '</div>' +
        '</div>' +

        '<div style="margin-top:2rem;display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">' +
          '<button class="btn btn-primary" id="retryBtn">Try Again</button>' +
          '<a href="practice.html" class="btn btn-secondary">New Setup</a>' +
          '<a href="' + chaptersHref() + '" class="btn btn-secondary">Back to Chapters</a>' +
        '</div>' +

        (pct < passPct() ? '<p style="margin-top:1.5rem;font-size:0.875rem;color:var(--text-muted);">Review the chapters covering topics you missed, then try again.</p>' : '') +
      '</div>';

    container.querySelector("#retryBtn") && container.querySelector("#retryBtn").addEventListener("click", function() {
      renderSetup(container);
    });
  }

  function saveWrongAnswer(q) {
    var key = "aplus-wrong";
    var list = JSON.parse(localStorage.getItem(key) || "[]");
    list = list.filter(function(x) { return x.q !== q.q; });
    list.push({
      q: q.q,
      options: q.options,
      answer: q.answer,
      answers: q.answers || [q.answer],
      explanation: q.explanation || "",
      objective: q.objective || "",
      chapter: q.chapter,
      core: state.core
    });
    if (list.length > 200) list = list.slice(list.length - 200);
    localStorage.setItem(key, JSON.stringify(list));
  }

  function clearWrongAnswers() { localStorage.removeItem("aplus-wrong"); }
  window.aplusWrong = { clear: clearWrongAnswers };

  function init(rootEl, opts) {
    var container = rootEl || document.getElementById("practice-root");
    if (!container) return;

    var params = getParams();
    state.core = (opts && opts.core) ? opts.core : params.core;

    renderSetup(container);
  }

  /* Expose for desktop window manager */
  window.PracticeLoader = { init: init };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { if (!document.getElementById("windows-layer")) init(); });
  } else {
    if (!document.getElementById("windows-layer")) init();
  }
})();
