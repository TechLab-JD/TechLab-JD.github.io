/* chapter-loader.js — Reads URL params, fetches chapter JSON, renders page */
(function () {
  "use strict";

  var TOTAL = { 1: 25, 2: 20 };

  function getParams() {
    var params = new URLSearchParams(window.location.search);
    var core = parseInt(params.get("core"), 10);
    var ch = parseInt(params.get("ch"), 10);
    if (![1, 2].includes(core) || isNaN(ch) || ch < 1) return null;
    var max = TOTAL[core] || 0;
    if (ch > max) return null;
    return { core: core, ch: ch };
  }

  function dataUrl(core, ch) {
    var pad = ch < 10 ? "0" + ch : "" + ch;
    return "data/core" + core + "/ch" + pad + ".json";
  }

  function showError(msg, container) {
    var el = container || document.getElementById("chapter-root");
    if (!el) return;
    el.innerHTML = '<div class="error-state"><h2>Content Unavailable</h2><p>' + escHtml(msg) + '</p><p style="margin-top:1rem"><button class="btn btn-secondary" id="errBackBtn">Go Back</button></p></div>';
    var backBtn = el.querySelector("#errBackBtn");
    if (backBtn) backBtn.addEventListener("click", function() { history.back(); });
  }

  /* Use shared escHtml if utils.js loaded, else fallback */
  function escHtml(str) {
    if (window.AplusUtils) return window.AplusUtils.escHtml(str);
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* Split content into paragraphs on the newlines preserved by the converter. */
  function formatContent(text) {
    if (!text) return "";
    var parts = text.split("\n").map(function(p) { return p.trim(); }).filter(function(p) { return p.length > 3 && p !== "---"; });
    return (parts.length ? parts : [text]).map(function(p) {
      return '<p>' + escHtml(p) + '</p>';
    }).join("");
  }

  function renderPage(data, params, rootEl) {
    var core = params.core;
    var ch = params.ch;
    var total = TOTAL[core];
    var coreLabel = "Core " + core;
    var coreHref = "core" + core + ".html";

    /* ── Page title ── */
    var safeTitle = window.AplusUtils ? window.AplusUtils.safeTitle(data.title) : String(data.title || "").replace(/[<>"'&]/g, "");
    document.title = "Lab404 Study Zone";

    var root = rootEl || document.getElementById("chapter-root");
    if (!root) return;

    /* ── Objectives badges ── */
    var objBadges = (data.exam_objectives || []).map(function (o) {
      return '<span class="badge badge-objective">' + escHtml(o) + '</span>';
    }).join(" ");

    var covBadge = (data.coverage === "COVERED")
      ? '<span class="badge badge-covered">Covered</span>'
      : '<span class="badge badge-partial">Partial</span>';

    /* ── Concept cards HTML ── */
    var cardsHtml = "";
    if (data.concept_cards && data.concept_cards.length) {
      var cards = data.concept_cards.map(function (card, i) {
        return '<div class="concept-card" role="listitem" aria-label="Concept card ' + (i+1) + '">' +
          '<p class="concept-hook">' + escHtml(card.hook) + '</p>' +
          '<div class="concept-name">' + escHtml(card.concept) + '</div>' +
          '<p class="concept-summary">' + escHtml(card.summary) + '</p>' +
        '</div>';
      }).join("");

      cardsHtml = '<section class="section-sm" aria-labelledby="concepts-heading">' +
        '<div class="section-label" id="concepts-heading">Concept Cards</div>' +
        '<p class="text-sm text-muted" style="margin-bottom:1rem;">' + data.concept_cards.length + ' concept' + (data.concept_cards.length > 1 ? 's' : '') + ' from the Lab404 shorts</p>' +
        '<div class="concept-cards-track" role="list" id="cardsTrack">' + cards + '</div>' +
        '<div class="concept-cards-nav" aria-label="Concept card navigation">' +
          '<button class="card-nav-btn" id="cardPrev" aria-label="Previous card">&#8592;</button>' +
          '<span class="card-count" id="cardCount" aria-live="polite">1 / ' + data.concept_cards.length + '</span>' +
          '<button class="card-nav-btn" id="cardNext" aria-label="Next card">&#8594;</button>' +
        '</div>' +
      '</section>';
    }

    /* ── Study sections HTML ── */
    var sectionsHtml = "";
    if (data.sections && data.sections.length) {
      var items = data.sections.map(function (section, idx) {
        var tipsHtml = (section.exam_tips || []).map(function (tip) {
          return '<div class="exam-tip"><span class="exam-tip-label">Exam Tip</span>' + escHtml(tip) + '</div>';
        }).join("");

        return '<div class="accordion-item">' +
          '<button class="accordion-header" aria-expanded="false" aria-controls="acc-body-' + idx + '">' +
            escHtml(section.title) +
            '<span class="accordion-icon" aria-hidden="true">&#9660;</span>' +
          '</button>' +
          '<div class="accordion-body" id="acc-body-' + idx + '" role="region">' +
            '<div class="accordion-content">' +
              formatContent(section.content) +
              (tipsHtml ? '<div class="section-tips">' + tipsHtml + '</div>' : '') +
            '</div>' +
          '</div>' +
        '</div>';
      }).join("");

      sectionsHtml = '<section class="section-sm" aria-labelledby="study-heading">' +
        '<div class="section-label" id="study-heading">Study Sections</div>' +
        '<div class="accordion-group" style="margin-top:1rem;">' + items + '</div>' +
      '</section>';
    }

    /* ── Inline practice questions ── */
    var practiceHtml = "";
    if (data.practice_questions && data.practice_questions.length) {
      var qHtml = data.practice_questions.map(function (q, qi) {
        var opts = q.options.map(function (opt, oi) {
          var letter = String.fromCharCode(65 + oi);
          return '<button class="option-btn" data-qi="' + qi + '" data-oi="' + oi + '" data-correct="' + q.answer + '">' +
            '<span class="option-letter">' + letter + '</span>' +
            '<span>' + escHtml(opt) + '</span>' +
          '</button>';
        }).join("");

        return '<div class="practice-question" id="pq-' + qi + '">' +
          '<p class="question-text"><strong>Q' + (qi+1) + '.</strong> ' + escHtml(q.q) + '</p>' +
          '<div class="question-options" role="group" aria-label="Answer options">' + opts + '</div>' +
          '<div class="explanation-box" id="exp-' + qi + '" aria-live="polite">' + escHtml(q.explanation) + '</div>' +
        '</div>';
      }).join("");

      practiceHtml = '<section class="section-sm" aria-labelledby="practice-heading">' +
        '<div class="section-label" id="practice-heading">Practice Questions</div>' +
        '<p class="text-sm text-muted" style="margin-bottom:1.25rem;">Select an answer to see the explanation.</p>' +
        '<div id="inlinePractice">' + qHtml + '</div>' +
        '<div style="margin-top:1.5rem;">' +
          '<a href="practice.html?core=' + core + '&ch=' + ch + '" class="btn btn-outline">Full Chapter Practice Mode</a>' +
        '</div>' +
      '</section>';
    }

    /* ── Chapter nav ── */
    var prevHref = ch > 1 ? "chapter.html?core=" + core + "&ch=" + (ch - 1) : "";
    var nextHref = ch < total ? "chapter.html?core=" + core + "&ch=" + (ch + 1) : "";
    var chNavHtml = '<nav class="chapter-nav" aria-label="Chapter navigation">' +
      '<a class="chapter-nav-btn' + (prevHref ? "" : " disabled") + '" ' +
        (prevHref ? 'href="' + prevHref + '"' : 'aria-disabled="true"') + '>' +
        '&#8592; Previous Chapter' +
      '</a>' +
      '<a href="' + coreHref + '" class="btn btn-secondary btn-sm">All Chapters</a>' +
      '<a class="chapter-nav-btn' + (nextHref ? "" : " disabled") + '" ' +
        (nextHref ? 'href="' + nextHref + '"' : 'aria-disabled="true"') + '>' +
        'Next Chapter &#8594;' +
      '</a>' +
    '</nav>';

    /* ── Assemble root ── */
    root.innerHTML =
      '<div class="container" style="padding-top:2.5rem;padding-bottom:4rem;">' +

        /* Breadcrumb */
        '<nav class="breadcrumb" aria-label="Breadcrumb">' +
          '<a href="index.html">Home</a>' +
          '<span class="breadcrumb-sep">›</span>' +
          '<a href="' + coreHref + '">' + coreLabel + '</a>' +
          '<span class="breadcrumb-sep">›</span>' +
          '<span>Ch ' + ch + '</span>' +
        '</nav>' +

        /* Chapter header */
        '<header style="margin-bottom:2rem;">' +
          '<div style="display:flex;flex-wrap:wrap;align-items:center;gap:0.5rem;margin-bottom:0.75rem;">' +
            '<span class="text-muted text-sm">Chapter ' + ch + ' of ' + total + ' &bull; ' + coreLabel + '</span>' +
          '</div>' +
          '<h1 style="font-size:clamp(1.5rem,3.5vw,2.25rem);margin-bottom:0.75rem;">' + escHtml(data.title) + '</h1>' +
          '<div style="display:flex;flex-wrap:wrap;gap:0.4rem;align-items:center;">' +
            covBadge + ' ' + objBadges +
            '<span class="badge" style="background:var(--accent2-dim);color:var(--accent2);">' + escHtml(data.domain_label || data.domain) + '</span>' +
          '</div>' +
        '</header>' +

        '<div class="divider-accent"></div>' +

        /* Content sections */
        cardsHtml +
        (cardsHtml && sectionsHtml ? '<div class="divider"></div>' : '') +
        sectionsHtml +
        (sectionsHtml && practiceHtml ? '<div class="divider"></div>' : '') +
        practiceHtml +

        '<div class="divider"></div>' +
        chNavHtml +
      '</div>';

    /* ── Wire up interactions ── */
    if (typeof window.initAccordions === "function") {
      window.initAccordions(root);
    }
    wireConceptCardNav(root, data.concept_cards ? data.concept_cards.length : 0);
    wirePracticeAnswers(root);
    wireNavFadeIns(root);
  }

  function wireConceptCardNav(root, totalCards) {
    if (totalCards === 0) return;
    var track = root.querySelector("#cardsTrack");
    var prevBtn = root.querySelector("#cardPrev");
    var nextBtn = root.querySelector("#cardNext");
    var countEl = root.querySelector("#cardCount");
    if (!track || !prevBtn || !nextBtn) return;

    var current = 0;

    function scrollTo(idx) {
      var cards = track.querySelectorAll(".concept-card");
      if (!cards[idx]) return;
      track.scrollTo({ left: cards[idx].offsetLeft - track.offsetLeft, behavior: "smooth" });
      current = idx;
      if (countEl) countEl.textContent = (idx + 1) + " / " + totalCards;
    }

    prevBtn.addEventListener("click", function () {
      scrollTo(Math.max(0, current - 1));
    });
    nextBtn.addEventListener("click", function () {
      scrollTo(Math.min(totalCards - 1, current + 1));
    });

    /* Update count on manual scroll */
    track.addEventListener("scroll", function () {
      var cards = track.querySelectorAll(".concept-card");
      var midX = track.scrollLeft + track.clientWidth / 2;
      var closest = 0;
      var minDist = Infinity;
      cards.forEach(function (card, i) {
        var dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - midX);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      current = closest;
      if (countEl) countEl.textContent = (current + 1) + " / " + totalCards;
    }, { passive: true });
  }

  function wirePracticeAnswers(root) {
    root.querySelectorAll(".option-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var qi = this.dataset.qi;
        var correct = parseInt(this.dataset.correct, 10);
        var oi = parseInt(this.dataset.oi, 10);

        /* Disable all options in this question */
        var qEl = root.querySelector("#pq-" + qi);
        if (!qEl) return;
        qEl.querySelectorAll(".option-btn").forEach(function (b) {
          b.disabled = true;
          var bOi = parseInt(b.dataset.oi, 10);
          if (bOi === correct) {
            b.classList.add("correct");
          } else if (bOi === oi) {
            b.classList.add("wrong");
          }
        });

        /* Show explanation */
        var expEl = root.querySelector("#exp-" + qi);
        if (expEl) expEl.classList.add("visible");
      });
    });
  }

  function wireNavFadeIns(root) {
    var els = root.querySelectorAll(".fade-in");
    if (els.length === 0) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add("visible"); io.unobserve(entry.target); }
      });
    }, { threshold: 0.05 });
    els.forEach(function (el) { io.observe(el); });
  }

  function init(rootEl, opts) {
    var root = rootEl || document.getElementById("chapter-root");
    if (!root) return;

    var params = (opts && opts.core) ? opts : getParams();
    if (!params) {
      showError("Invalid chapter URL. Expected: chapter.html?core=1&ch=3", root);
      return;
    }

    /* Show loading state */
    root.innerHTML = '<div class="loading-state"><div class="spinner" aria-label="Loading"></div><p>Loading chapter content...</p></div>';

    fetch(dataUrl(params.core, params.ch))
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(function (data) {
        renderPage(data, params, root);
      })
      .catch(function (err) {
        showError("Could not load chapter data. Run the converter or start a local server.\n(" + err.message + ")", root);
      });
  }

  /* Expose for desktop window manager */
  window.ChapterLoader = { init: init };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { if (!document.getElementById("windows-layer")) init(); });
  } else {
    if (!document.getElementById("windows-layer")) init();
  }
})();
