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

  /* R4-11: sentence starters by type — scaffolds so a stuck writer can begin. */
  var FRAMES = {
    explain: ["___ happens because ___.", "First, ___. This means ___.", "For example, ___.", "In short, ___."],
    opinion: ["I think that ___.", "One reason is ___.", "Another reason is ___.", "For these reasons, ___."],
    narrative: ["One day, ___.", "First ___, then ___.", "I felt ___ because ___.", "In the end, ___."],
    compare: ["___ and ___ are alike because both ___.", "One difference is ___.", "However, ___.", "Overall, ___."],
    essay: ["Many people believe ___, but I will argue ___.", "First, ___.", "In addition, ___.", "In conclusion, ___."],
    mathexplain: ["To solve this, first ___.", "Next, ___ because ___.", "For example, ___.", "So the answer is ___, which makes sense because ___."]
  };
  /* A short model answer per prompt, hidden until the writer asks — encourages a real attempt first. */
  var MODELS = {
    "w-daynight": "Earth spins like a top on its axis. The side facing the Sun gets light, so it is day there. At the same time the other side faces away and is dark, so it is night. As Earth keeps turning, each place moves from day into night and back again about every 24 hours.",
    "w-plant": "A plant makes its own food through photosynthesis. Its leaves take in sunlight, air (carbon dioxide), and water from the roots. Inside the leaves, these are turned into sugar, which the plant uses for energy, and oxygen, which is released into the air.",
    "w-learned": "When I learned to ride a bike, I was nervous and kept falling. First my dad held the seat, then he let go without telling me. I wobbled, but I kept pedaling and stayed up. I felt proud and a little scared at the same time, and I couldn't wait to try again.",
    "w-seasons": "Summer and winter are both seasons, and both can be fun outside. They are different because summer is hot and the days are long, while winter is cold and the days are short. In summer I swim; in winter I wear a coat. Both have their own activities I enjoy.",
    "w-homework": "I think students should have a small amount of homework. One reason is that practicing at home helps ideas stick. Another reason is that it teaches responsibility and time management. Too much is stressful, but a little homework each night is helpful.",
    "w-fractions": "To add fractions with different denominators, first find a common denominator (a number both bottoms divide into). Next, rewrite each fraction with that denominator by multiplying the top and bottom by the same number. Then add the numerators and keep the denominator. For example, 1/2 + 1/3 becomes 3/6 + 2/6 = 5/6.",
    "w-goal": "One goal I have is to read 20 books this year. To reach it, I will read for 15 minutes every night and keep a list of what I finish. If I fall behind, I'll read a little longer on weekends. Breaking a big goal into small daily steps makes it possible.",
    "w-photo-resp": "Photosynthesis and cellular respiration are opposites that work together. In photosynthesis, plants use sunlight to turn carbon dioxide and water into sugar and oxygen. In respiration, living things break sugar and oxygen back down to release energy, giving off carbon dioxide and water. The outputs of one are the inputs of the other.",
    "w-uniforms": "Schools should require uniforms. First, uniforms reduce pressure about clothes and bullying over brands. Second, they save families money because students re-wear the same outfits. Third, they create a sense of belonging and help mornings go faster. For these reasons, uniforms do more good than harm.",
    "w-tech": "Technology has made life better overall, though it has costs. It connects people across the world, puts vast knowledge a tap away, and improves medicine and safety. The downsides are real—distraction, privacy loss, and screen overuse—but these can be managed. Used wisely, technology expands what people can do."
  };

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
      ".wr-score{font-weight:700;margin-top:10px;font-size:.9rem}" +
      ".wr-frames{margin:0 0 10px}" +
      ".wr-frames-h{font-size:.72rem;color:var(--text-muted,#9aa);margin-bottom:5px;font-weight:600}" +
      ".wr-frame{display:inline-block;border:1px dashed var(--border,#334);background:transparent;color:var(--text-muted,#9aa);border-radius:999px;padding:4px 10px;margin:0 5px 5px 0;font:inherit;font-size:.76rem;cursor:pointer}" +
      ".wr-frame:hover{border-color:var(--accent2,#39e3c8);color:var(--text,#dfe)}" +
      ".wr-model{border:1px solid var(--accent2,#39e3c8);background:rgba(57,227,200,.06);border-radius:10px;padding:11px 13px;margin-top:10px;font-size:.9rem;line-height:1.55}" +
      ".wr-model-h{font-size:.72rem;font-weight:700;color:var(--accent2,#39e3c8);text-transform:uppercase;letter-spacing:.05em;margin-bottom:5px}";
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
          '<div class="wr-frames"><div class="wr-frames-h">✏️ Sentence starters — tap one to add it</div>' +
            (FRAMES[pr.type] || FRAMES.explain).map(function (f) { return '<button class="wr-frame" type="button">' + esc(f) + '</button>'; }).join("") +
          '</div>' +
          '<textarea class="wr-ta" id="wr-ta" aria-label="Your written answer" placeholder="Write your answer here…">' + esc(d.text) + '</textarea>' +
          '<div class="wr-meta"><span id="wr-wc">' + words(d.text) + ' words</span><span id="wr-saved">Saved automatically</span></div>' +
          '<div class="wr-row"><button class="wr-btn" id="wr-check">✓ Check my work</button>' +
            (MODELS[pr.id] ? '<button class="wr-btn ghost" id="wr-model">👀 Show a model answer</button>' : "") + '</div>' +
          '<div id="wr-model-wrap"></div>' +
          '<div id="wr-rubric-wrap"></div>' +
        '</div>';
      var ta = content.querySelector("#wr-ta");
      function persist() { d.text = ta.value; saved[pr.id] = d; save(saved); }
      ta.addEventListener("input", function () {
        content.querySelector("#wr-wc").textContent = words(ta.value) + " words";
        persist();
      });
      content.querySelectorAll(".wr-frame").forEach(function (b) {   /* R4-11: insert a sentence starter */
        b.addEventListener("click", function () {
          var s = this.textContent;
          ta.value = ta.value + (ta.value && !/\n$/.test(ta.value) ? "\n" : "") + s + " ";
          ta.dispatchEvent(new Event("input", { bubbles: true }));
          ta.focus();
        });
      });
      var modelBtn = content.querySelector("#wr-model");
      if (modelBtn) modelBtn.addEventListener("click", function () {   /* R4-11: reveal a model answer */
        var w = content.querySelector("#wr-model-wrap");
        if (w.innerHTML) { w.innerHTML = ""; this.textContent = "👀 Show a model answer"; return; }
        w.innerHTML = '<div class="wr-model"><div class="wr-model-h">One strong answer (yours can be different):</div>' + esc(MODELS[pr.id]) + '</div>';
        this.textContent = "Hide model answer";
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
