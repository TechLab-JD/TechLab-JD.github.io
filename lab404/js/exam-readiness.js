/* exam-readiness.js (R4-9) — a blueprint-weighted CompTIA mock + readiness score.
   Adult cert learners (and the panel) wanted one honest "am I ready?" number and a
   mock that mirrors the real exam's domain mix, not just topic quizzes. This draws
   questions from the practice pool in proportion to CompTIA's published domain
   weightings, times the attempt, and reports an overall % plus a per-domain
   breakdown and a pass/no-pass verdict. Loads data/practice-core{1,2,3}.json at
   runtime (the deployed Security+ pool is originals-only). window.Lab404ExamReady */
(function () {
  "use strict";

  /* Official domain weightings (%) and names. core1=220-1101, core2=220-1102,
     core3=Security+ SY0-701 (internal slot 3; the UI never says "core" for it). */
  var EXAMS = {
    1: { label: "A+ Core 1 (220-1101)", pass: 78, len: 40,
      dom: { "1": ["Mobile Devices", 15], "2": ["Networking", 20], "3": ["Hardware", 25], "4": ["Virtualization & Cloud", 11], "5": ["Hardware & Network Troubleshooting", 29] } },
    2: { label: "A+ Core 2 (220-1102)", pass: 78, len: 40,
      dom: { "1": ["Operating Systems", 31], "2": ["Security", 25], "3": ["Software Troubleshooting", 22], "4": ["Operational Procedures", 22] } },
    3: { label: "Security+ (SY0-701)", pass: 83, len: 40,
      dom: { "1": ["General Security Concepts", 12], "2": ["Threats, Vulnerabilities & Mitigations", 22], "3": ["Security Architecture", 18], "4": ["Security Operations", 28], "5": ["Security Program Management & Oversight", 20] } }
  };

  function rkey(c) { return "lab404.examReady." + c; }
  function lastReady(c) { try { return JSON.parse(localStorage.getItem(rkey(c)) || "null"); } catch (e) { return null; } }
  function saveReady(c, pct) { try { localStorage.setItem(rkey(c), JSON.stringify({ pct: pct, ts: Date.now() })); } catch (e) {} }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function fmt(ms) { var s = Math.floor(ms / 1000), m = Math.floor(s / 60); return m + ":" + (s % 60 < 10 ? "0" : "") + (s % 60); }

  function style() {
    if (document.getElementById("xr-style")) return;
    var s = document.createElement("style"); s.id = "xr-style";
    s.textContent =
      ".xr{padding:16px 18px;max-width:640px;margin:0 auto;box-sizing:border-box}" +
      ".xr h2{font-size:1.15rem;margin:0 0 2px;color:var(--accent2,#39e3c8)}" +
      ".xr .xr-lead{color:var(--text-muted,#9aa);font-size:.82rem;margin:0 0 14px;line-height:1.55}" +
      ".xr-pick{display:flex;flex-direction:column;gap:10px}" +
      ".xr-exam{display:flex;align-items:center;gap:12px;border:1px solid var(--border,#334);border-radius:12px;padding:14px 15px;cursor:pointer;background:transparent;color:var(--text,#dfe);text-align:left;font:inherit;width:100%}" +
      ".xr-exam:hover{border-color:var(--accent2,#39e3c8)}" +
      ".xr-exam .xr-nm{font-weight:700;font-size:.98rem}" +
      ".xr-exam .xr-sub{font-size:.74rem;color:var(--text-muted,#9aa);margin-top:2px}" +
      ".xr-exam .xr-rd{margin-left:auto;text-align:right;font-size:.72rem;color:var(--text-muted,#9aa);white-space:nowrap}" +
      ".xr-exam .xr-rd b{display:block;font-size:1.1rem;color:var(--accent2,#39e3c8)}" +
      ".xr-q{font-size:1rem;line-height:1.5;margin:4px 0 14px}" +
      ".xr-opts{display:flex;flex-direction:column;gap:8px}" +
      ".xr-opt{border:1px solid var(--border,#334);background:var(--surface,#10171f);color:var(--text,#dfe);border-radius:10px;padding:11px 13px;font:inherit;font-size:.9rem;cursor:pointer;text-align:left}" +
      ".xr-opt:hover{border-color:var(--accent2,#39e3c8)}.xr-opt.sel{border-color:var(--accent2,#39e3c8);background:rgba(57,227,200,.1)}" +
      ".xr-bar{display:flex;justify-content:space-between;align-items:center;font-size:.76rem;color:var(--text-muted,#9aa);margin-bottom:10px}" +
      ".xr-row{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}" +
      ".xr-btn{border:1px solid var(--accent2,#39e3c8);background:var(--accent2,#39e3c8);color:#05211c;border-radius:9px;padding:10px 16px;font:inherit;font-weight:700;font-size:.85rem;cursor:pointer}" +
      ".xr-btn.ghost{background:transparent;color:var(--text,#dfe);border-color:var(--border,#334)}" +
      ".xr-btn:disabled{opacity:.5;cursor:default}" +
      ".xr-score{font-size:2.6rem;font-weight:800;text-align:center;margin:6px 0 2px}" +
      ".xr-verdict{text-align:center;font-weight:700;margin-bottom:4px}" +
      ".xr-pass{color:#3cbe6e}.xr-near{color:#e0a000}.xr-no{color:#e0603a}" +
      ".xr-meta{text-align:center;color:var(--text-muted,#9aa);font-size:.82rem;margin-bottom:16px}" +
      ".xr-dom{margin:10px 0}" +
      ".xr-drow{margin-bottom:9px}" +
      ".xr-dhead{display:flex;justify-content:space-between;font-size:.78rem;margin-bottom:3px}" +
      ".xr-dhead .w{color:var(--text-muted,#9aa)}" +
      ".xr-track{height:9px;background:var(--surface-2,rgba(127,127,127,.15));border-radius:6px;overflow:hidden}" +
      ".xr-fill{height:100%;border-radius:6px}";
    document.head.appendChild(s);
  }

  function render(content) {
    style();
    var el = content;

    function picker() {
      el.innerHTML = '<div class="xr"><h2>🎓 Exam Readiness</h2>' +
        '<p class="xr-lead">A timed mock built to mirror the <b>real exam’s domain mix</b> — questions are drawn in the same proportions CompTIA publishes. You get one overall readiness score and a per-domain breakdown so you know exactly what to drill.</p>' +
        '<div class="xr-pick">' +
        Object.keys(EXAMS).map(function (c) {
          var e = EXAMS[c], r = lastReady(c);
          return '<button class="xr-exam" data-core="' + c + '"><span><span class="xr-nm">' + esc(e.label) + '</span>' +
            '<span class="xr-sub">' + e.len + '-question weighted mock · pass ≈ ' + e.pass + '%</span></span>' +
            (r ? '<span class="xr-rd">last<br><b>' + r.pct + '%</b></span>' : '<span class="xr-rd">not tried</span>') +
            '</button>';
        }).join("") + '</div></div>';
      el.querySelectorAll("[data-core]").forEach(function (b) {
        b.addEventListener("click", function () { start(this.getAttribute("data-core")); });
      });
    }

    function start(core) {
      var e = EXAMS[core];
      el.innerHTML = '<div class="xr"><div class="loading-state" style="padding:2rem;text-align:center;color:var(--text-muted,#9aa)">Building your mock…</div></div>';
      fetch("data/practice-core" + core + ".json").then(function (r) { return r.json(); }).then(function (pool) {
        var byDom = {};
        pool.forEach(function (q) { var d = String(q.objective || "").split(".")[0]; if (EXAMS[core].dom[d]) (byDom[d] = byDom[d] || []).push(q); });
        var picks = [];
        Object.keys(e.dom).forEach(function (d) {
          var n = Math.max(1, Math.round(e.dom[d][1] / 100 * e.len));
          picks = picks.concat(shuffle((byDom[d] || []).slice()).slice(0, n));
        });
        picks = shuffle(picks).slice(0, e.len);
        if (!picks.length) { el.innerHTML = '<div class="xr"><p class="xr-lead">No questions available for this exam yet.</p><button class="xr-btn ghost" id="xr-back">← Back</button></div>'; el.querySelector("#xr-back").addEventListener("click", picker); return; }
        runTest(core, picks);
      }).catch(function () {
        el.innerHTML = '<div class="xr"><p class="xr-lead">Couldn’t load the question pool. Check your connection and try again.</p><button class="xr-btn ghost" id="xr-back">← Back</button></div>';
        el.querySelector("#xr-back").addEventListener("click", picker);
      });
    }

    function runTest(core, qs) {
      var e = EXAMS[core], i = 0, answers = [], t0 = Date.now(), timer = null;
      function renderQ() {
        var q = qs[i];
        el.innerHTML = '<div class="xr">' +
          '<div class="xr-bar"><span>' + esc(e.label) + '</span><span>Question ' + (i + 1) + ' / ' + qs.length + ' · <span id="xr-timer">0:00</span></span></div>' +
          '<div class="xr-q">' + esc(q.q) + '</div>' +
          '<div class="xr-opts">' + q.options.map(function (o, k) { return '<button class="xr-opt' + (answers[i] === k ? " sel" : "") + '" data-k="' + k + '">' + esc(o) + '</button>'; }).join("") + '</div>' +
          '<div class="xr-row"><button class="xr-btn ghost" id="xr-prev"' + (i === 0 ? " disabled" : "") + '>← Back</button>' +
          '<button class="xr-btn" id="xr-next">' + (i === qs.length - 1 ? "Finish & score" : "Next →") + '</button>' +
          '<button class="xr-btn ghost" id="xr-quit">Quit</button></div></div>';
        el.querySelectorAll(".xr-opt").forEach(function (b) {
          b.addEventListener("click", function () { answers[i] = +this.getAttribute("data-k"); el.querySelectorAll(".xr-opt").forEach(function (x) { x.classList.remove("sel"); }); this.classList.add("sel"); });
        });
        el.querySelector("#xr-prev").addEventListener("click", function () { if (i > 0) { i--; renderQ(); } });
        el.querySelector("#xr-next").addEventListener("click", function () { if (i === qs.length - 1) finish(); else { i++; renderQ(); } });
        el.querySelector("#xr-quit").addEventListener("click", function () { if (timer) clearInterval(timer); picker(); });
        tick();
      }
      function tick() { var s = el.querySelector("#xr-timer"); if (s) s.textContent = fmt(Date.now() - t0); }
      timer = setInterval(tick, 1000);

      function finish() {
        if (timer) clearInterval(timer);
        var correct = 0, dom = {};
        qs.forEach(function (q, k) {
          var d = String(q.objective || "").split(".")[0];
          dom[d] = dom[d] || { c: 0, n: 0 };
          dom[d].n++;
          if (answers[k] === q.answer) { correct++; dom[d].c++; }
        });
        var pct = Math.round(correct / qs.length * 100);
        saveReady(core, pct);
        var vclass = pct >= e.pass ? "xr-pass" : pct >= e.pass - 10 ? "xr-near" : "xr-no";
        var verdict = pct >= e.pass ? "✅ On track to pass" : pct >= e.pass - 10 ? "⚠️ Almost there" : "📚 Keep studying";
        /* weakest domain by accuracy */
        var weak = null;
        Object.keys(dom).forEach(function (d) { var a = dom[d].c / dom[d].n; if (weak === null || a < weak.a) weak = { d: d, a: a }; });
        var domBars = Object.keys(e.dom).map(function (d) {
          var s = dom[d] || { c: 0, n: 0 };
          var acc = s.n ? Math.round(s.c / s.n * 100) : 0;
          var col = acc >= e.pass ? "#3cbe6e" : acc >= e.pass - 10 ? "#e0a000" : "#e0603a";
          return '<div class="xr-drow"><div class="xr-dhead"><span>' + esc(e.dom[d][0]) + ' <span class="w">(' + e.dom[d][1] + '% of exam)</span></span><span>' + s.c + '/' + s.n + ' · ' + acc + '%</span></div>' +
            '<div class="xr-track"><div class="xr-fill" style="width:' + acc + '%;background:' + col + '"></div></div></div>';
        }).join("");
        el.innerHTML = '<div class="xr"><h2>Mock result — ' + esc(e.label) + '</h2>' +
          '<div class="xr-score ' + vclass + '">' + pct + '%</div>' +
          '<div class="xr-verdict ' + vclass + '">' + verdict + '</div>' +
          '<div class="xr-meta">' + correct + ' / ' + qs.length + ' correct · time ' + fmt(Date.now() - t0) + ' · pass line ≈ ' + e.pass + '%</div>' +
          (weak ? '<p class="xr-lead">Focus next on <b>' + esc(e.dom[weak.d][0]) + '</b> — your weakest domain this mock.</p>' : "") +
          '<div class="xr-dom">' + domBars + '</div>' +
          '<div class="xr-row"><button class="xr-btn" id="xr-retry">Take another mock</button><button class="xr-btn ghost" id="xr-back">← All exams</button></div></div>';
        el.querySelector("#xr-retry").addEventListener("click", function () { start(core); });
        el.querySelector("#xr-back").addEventListener("click", picker);
      }

      renderQ();
    }

    picker();
  }

  window.Lab404ExamReady = { render: render };
})();
