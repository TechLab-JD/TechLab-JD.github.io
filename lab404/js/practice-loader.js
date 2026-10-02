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

  var TOTAL = { 1: 25, 2: 20 };

  function getParams() {
    var params = new URLSearchParams(window.location.search);
    var core = parseInt(params.get("core"), 10);
    var chRaw = params.get("ch");
    var ch = chRaw ? parseInt(chRaw, 10) : null;
    var safeCore = [1, 2].includes(core) ? core : 1;
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
        '<div class="card" style="margin-top:1.5rem;display:flex;flex-direction:column;gap:1.25rem;">' +

          '<div>' +
            '<label class="text-sm" style="font-weight:600;display:block;margin-bottom:0.5rem;">Exam</label>' +
            '<div style="display:flex;gap:0.5rem;">' +
              '<button class="btn btn-secondary core-select-btn" data-core="1" id="coreBtn1">Core 1 (220-1201)</button>' +
              '<button class="btn btn-secondary core-select-btn" data-core="2" id="coreBtn2">Core 2 (220-1202)</button>' +
            '</div>' +
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
      loadAndStart(container, selectedCount, selectedMins);
    });
  }

  function loadAndStart(container, count, mins) {
    container.innerHTML = '<div class="loading-state"><div class="spinner"></div><p>Loading questions...</p></div>';

    fetch(dataUrl(state.core))
      .then(function(res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(function(questions) {
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
    var coreLabel = "Core " + state.core + " (220-120" + state.core + ")";

    var timerHtml = state.timed ? '<span id="timerDisplay" style="font-size:0.875rem;color:var(--text-muted);font-variant-numeric:tabular-nums;">--:--</span>' : "";

    var optHtml = q.options.map(function(opt, oi) {
      var letter = String.fromCharCode(65 + oi);
      return '<button class="option-btn" data-oi="' + oi + '" data-correct="' + q.answer + '">' +
        '<span class="option-letter">' + letter + '</span>' +
        '<span>' + escHtml(opt) + '</span>' +
      '</button>';
    }).join("");

    var objHtml = q.objective ? '<span class="badge badge-objective" style="font-size:0.7rem;">Obj ' + escHtml(q.objective) + '</span>' : "";
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
          '<div class="question-options" role="group" aria-label="Answer options">' + optHtml + '</div>' +
          '<div class="explanation-box" id="explanationBox" aria-live="polite">' + escHtml(q.explanation || "") + '</div>' +
        '</div>' +

        /* Next button (hidden until answered) */
        '<div style="margin-top:1.25rem;display:flex;justify-content:flex-end;" id="nextWrap" class="hidden">' +
          '<button id="nextBtn" class="btn btn-primary">' +
            (state.currentIdx + 1 >= state.queue.length ? 'Finish' : 'Next Question &#8594;') +
          '</button>' +
        '</div>' +

      '</div>';

    /* Wire options */
    container.querySelectorAll(".option-btn").forEach(function(btn) {
      btn.addEventListener("click", function() {
        var correct = parseInt(this.dataset.correct, 10);
        var oi = parseInt(this.dataset.oi, 10);

        /* Disable all */
        container.querySelectorAll(".option-btn").forEach(function(b) {
          b.disabled = true;
          var boi = parseInt(b.dataset.oi, 10);
          if (boi === correct) b.classList.add("correct");
          else if (boi === oi) b.classList.add("wrong");
        });

        state.answered++;
        if (oi === correct) {
          state.correct++;
        } else {
          saveWrongAnswer(q);
        }

        var expEl = container.querySelector("#explanationBox");
        if (expEl && q.explanation) expEl.classList.add("visible");

        var nextWrap = container.querySelector("#nextWrap");
        if (nextWrap) nextWrap.classList.remove("hidden");
      });
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
    var pass = pct >= 78; /* ~700/900 approximation */
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
          '<a href="' + (state.core === 1 ? "core1.html" : "core2.html") + '" class="btn btn-secondary">Back to Chapters</a>' +
        '</div>' +

        (pct < 78 ? '<p style="margin-top:1.5rem;font-size:0.875rem;color:var(--text-muted);">Review the chapters covering topics you missed, then try again.</p>' : '') +
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
