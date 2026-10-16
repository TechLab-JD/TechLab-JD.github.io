/* writing.js (R9) — open-response writing practice with a self-check rubric.
   The hub is mostly multiple choice; this gives learners a place to write essays,
   explanations, and paragraphs, then grade themselves against a rubric. Drafts save
   locally. No AI, no server. window.Lab404Writing.render(el) */
(function () {
  "use strict";

  var KEY = "lab404.writing";  /* { <promptId>: { text, checks:[bool...] } } */

  var RUBRICS = {
    explain: ["I stated the main idea clearly.", "My facts are accurate.", "I used my own words (not copied).", "I gave an example.", "I used complete sentences."],
    opinion: ["I began with a clear opinion (a topic sentence).", "I gave at least two reasons.", "I added details or examples.", "I ended with a conclusion.", "I checked my spelling and sentences."],
    narrative: ["I set the scene — who, where, when.", "My events are in a clear order.", "I included details and feelings.", "I have a beginning, middle, and end.", "I checked my spelling and sentences."],
    compare: ["I named the two things I'm comparing.", "I gave ways they are ALIKE.", "I gave ways they are DIFFERENT.", "I organized it so it's easy to follow.", "I used complete sentences."],
    essay: ["My introduction has a clear thesis.", "I have body paragraphs, each with support.", "I used transitions between ideas.", "My conclusion restates the main point.", "I proofread for grammar and spelling."],
    mathexplain: ["I named the steps in order.", "I explained WHY, not just what.", "I used a worked example.", "My math is correct.", "Someone else could follow my steps."]
  };
  var TYPE_LABEL = { explain: "Explanation", opinion: "Opinion paragraph", narrative: "Narrative", compare: "Compare & contrast", essay: "Essay", mathexplain: "Math explanation" };

  var PROMPTS = [
    { id: "w-daynight", lvl: "Grades 3–5", subj: "Science", type: "explain", p: "Explain in your own words why we have day and night." },
    { id: "w-plant", lvl: "Grades 4–6", subj: "Science", type: "explain", p: "Explain how a plant makes its own food." },
    { id: "w-learned", lvl: "Grades 2–5", subj: "English", type: "narrative", p: "Write about a time you learned to do something new. What happened, and how did it feel?" },
    { id: "w-seasons", lvl: "Grades 3–5", subj: "English", type: "compare", p: "Compare two seasons, like summer and winter. How are they alike, and how are they different?" },
    { id: "w-homework", lvl: "Grades 4–7", subj: "English", type: "opinion", p: "Should students have homework? Write a paragraph giving your opinion and at least two reasons." },
    { id: "w-fractions", lvl: "Grades 4–6", subj: "Math", type: "mathexplain", p: "Explain how to add two fractions that have different denominators." },
    { id: "w-goal", lvl: "All ages", subj: "Life Skills", type: "narrative", p: "What is one goal you have? Describe it and explain the steps you'll take to reach it." },
    { id: "w-photo-resp", lvl: "Grades 7–10", subj: "Science", type: "compare", p: "Compare photosynthesis and cellular respiration. How are they opposite, and how do they connect?" },
    { id: "w-uniforms", lvl: "Grades 7–12", subj: "English", type: "essay", p: "Write a short persuasive essay arguing for or against school uniforms. Give three reasons." },
    { id: "w-tech", lvl: "Grades 8–12", subj: "Social Studies", type: "essay", p: "Has technology made life better or worse? Write an essay defending your position with examples." }
  ];

  function load() { try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { return {}; } }
  function save(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {} }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function words(t) { t = (t || "").trim(); return t ? t.split(/\s+/).length : 0; }

  function style() {
    if (document.getElementById("wr-style")) return;
    var st = document.createElement("style"); st.id = "wr-style";
    st.textContent =
      ".wr{padding:16px 18px;max-width:640px;margin:0 auto;box-sizing:border-box;font-size:.9rem}" +
      ".wr h2{font-size:1.15rem;color:var(--accent2,#39e3c8);margin:0 0 2px}" +
      ".wr .wr-lead{color:var(--text-muted,#9aa);font-size:.82rem;margin:0 0 14px;line-height:1.6}" +
      ".wr-item{display:flex;align-items:center;gap:11px;border:1px solid var(--border,#334);border-radius:11px;padding:11px 13px;margin-bottom:8px;cursor:pointer;background:transparent;color:var(--text,#dfe);text-align:left;width:100%;font:inherit}" +
      ".wr-item:hover{border-color:var(--accent2,#39e3c8)}" +
      ".wr-item .p{font-size:.88rem;line-height:1.35}.wr-item .m{font-size:.64rem;color:var(--text-muted,#9aa);margin-top:3px}" +
      ".wr-item .done{margin-left:auto;color:#3cbe6e;font-size:.72rem;white-space:nowrap}" +
      ".wr-chip{display:inline-block;font-size:.6rem;background:var(--surface-2,rgba(127,127,127,.1));border:1px solid var(--border,#334);border-radius:999px;padding:2px 8px;color:var(--text-muted,#9aa);margin-right:5px}" +
      ".wr-prompt{border:1px solid var(--accent2,#39e3c8);background:rgba(57,227,200,.06);border-radius:10px;padding:12px 14px;margin:0 0 12px;font-size:.95rem;line-height:1.5}" +
      ".wr-ta{width:100%;box-sizing:border-box;min-height:200px;border:1px solid var(--border,#334);background:var(--surface,#10171f);color:var(--text,#dfe);border-radius:10px;padding:12px;font:inherit;font-size:.95rem;line-height:1.6;resize:vertical}" +
      ".wr-meta{display:flex;justify-content:space-between;align-items:center;font-size:.72rem;color:var(--text-muted,#9aa);margin-top:6px}" +
      ".wr-row{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}" +
      ".wr-btn{border:1px solid var(--accent2,#39e3c8);background:var(--accent2,#39e3c8);color:#05211c;border-radius:9px;padding:9px 15px;font:inherit;font-weight:700;font-size:.82rem;cursor:pointer}" +
      ".wr-btn.ghost{background:transparent;color:var(--text,#dfe);border-color:var(--border,#334)}" +
      ".wr-rubric{border:1px solid var(--border,#334);border-radius:11px;padding:14px;margin-top:14px}" +
      ".wr-rubric h3{font-size:.95rem;margin:0 0 4px}" +
      ".wr-crit{display:flex;gap:10px;align-items:flex-start;padding:7px 0;border-bottom:1px solid var(--border,#334)}" +
      ".wr-crit:last-child{border-bottom:0}.wr-crit input{margin-top:3px}" +
      ".wr-score{font-weight:700;margin-top:10px;font-size:.9rem}";
    document.head.appendChild(st);
  }

  function render(content) {
    style();
    var saved = load();

    function list() {
      content.innerHTML =
        '<div class="wr"><h2>✍️ Writing Practice</h2>' +
          '<p class="wr-lead">Pick a prompt and write your answer. When you’re done, grade yourself against the rubric. Your drafts save on this device.</p>' +
          PROMPTS.map(function (pr) {
            var d = saved[pr.id];
            var w = d ? words(d.text) : 0;
            var status = (d && d.checks && d.checks.filter(Boolean).length) ? '<span class="done">✓ self-checked</span>' : (w ? '<span class="done" style="color:var(--text-muted,#9aa)">' + w + ' words</span>' : "");
            return '<button class="wr-item" data-id="' + pr.id + '"><span style="min-width:0"><span class="p">' + esc(pr.p) + '</span>' +
              '<span class="m"><span class="wr-chip">' + esc(TYPE_LABEL[pr.type]) + '</span>' + esc(pr.subj) + ' · ' + esc(pr.lvl) + '</span></span>' + status + '</button>';
          }).join("") +
        '</div>';
      content.querySelectorAll("[data-id]").forEach(function (b) {
        b.addEventListener("click", function () { editor(PROMPTS.filter(function (p) { return p.id === this.getAttribute("data-id"); }.bind(this))[0]); });
      });
    }

    function editor(pr) {
      var d = saved[pr.id] || { text: "", checks: [] };
      content.innerHTML =
        '<div class="wr">' +
          '<button class="wr-btn ghost" id="wr-back" style="margin-bottom:12px">← All prompts</button>' +
          '<div class="wr-chip">' + esc(TYPE_LABEL[pr.type]) + '</div><span style="font-size:.72rem;color:var(--text-muted,#9aa)">' + esc(pr.subj) + ' · ' + esc(pr.lvl) + '</span>' +
          '<div class="wr-prompt">' + esc(pr.p) + '</div>' +
          '<textarea class="wr-ta" id="wr-ta" placeholder="Write your answer here…">' + esc(d.text) + '</textarea>' +
          '<div class="wr-meta"><span id="wr-wc">' + words(d.text) + ' words</span><span id="wr-saved">Saved automatically</span></div>' +
          '<div class="wr-row"><button class="wr-btn" id="wr-check">✓ Check my work</button></div>' +
          '<div id="wr-rubric-wrap"></div>' +
        '</div>';
      var ta = content.querySelector("#wr-ta");
      function persist() { d.text = ta.value; saved[pr.id] = d; save(saved); }
      ta.addEventListener("input", function () {
        content.querySelector("#wr-wc").textContent = words(ta.value) + " words";
        persist();
      });
      content.querySelector("#wr-back").addEventListener("click", function () { persist(); list(); });
      content.querySelector("#wr-check").addEventListener("click", function () { persist(); rubric(pr, d); });
      setTimeout(function () { try { ta.focus(); } catch (e) {} }, 30);
    }

    function rubric(pr, d) {
      var crit = RUBRICS[pr.type] || RUBRICS.explain;
      d.checks = d.checks || [];
      var wrap = content.querySelector("#wr-rubric-wrap");
      function draw() {
        var met = d.checks.filter(Boolean).length;
        wrap.innerHTML = '<div class="wr-rubric"><h3>📋 Self-check rubric</h3>' +
          '<p style="font-size:.76rem;color:var(--text-muted,#9aa);margin:0 0 8px">Be honest — check each thing your writing does. It’s a checklist to improve, not a grade.</p>' +
          crit.map(function (c, i) {
            return '<label class="wr-crit"><input type="checkbox" data-i="' + i + '"' + (d.checks[i] ? " checked" : "") + '><span>' + esc(c) + '</span></label>';
          }).join("") +
          '<div class="wr-score" id="wr-score"></div></div>';
        wrap.querySelectorAll("input[type=checkbox]").forEach(function (b) {
          b.addEventListener("change", function () { d.checks[+this.getAttribute("data-i")] = this.checked; save(saved); score(); });
        });
        score();
        function score() {
          var m = d.checks.filter(Boolean).length, n = crit.length;
          var msg = m === n ? "🎉 You met all " + n + "! Strong work." : m >= n - 1 ? "Almost there — review the unchecked item and revise." : m >= 1 ? "Good start — revise to meet more of the rubric." : "Check each one honestly, then revise your writing.";
          content.querySelector("#wr-score").textContent = "You met " + m + " of " + n + ". " + msg;
        }
      }
      draw();
      wrap.scrollIntoView ? wrap.scrollIntoView({ block: "nearest" }) : null;
    }

    list();
  }

  window.Lab404Writing = { render: render };
})();
