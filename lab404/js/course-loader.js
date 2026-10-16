/* Lab404 Study Hub — mastery course view (objective dashboard + placement + practice).
   window.CourseLoader.init(contentEl, {course:"g4-math"}). Uses LAB404_COURSES + LAB404_MASTERY.
   Shows a living report card (readiness % / letter / GPA), the objective list with the four mastery bands,
   a placement "test-out" diagnostic, and an anti-guess practice runner that updates mastery live. */
window.CourseLoader = (function () {
  var M = window.LAB404_MASTERY;
  var el, courseId, course, quiz = null;
  var audio = { base: "", have: null, autoplay: false, cur: null };  // pre-rendered Kokoro clips (optional per course)
  var learnText = {};  // plain-text per objective for the read-aloud layer

  /* ── D1: standards crosswalk — surface the standard on each objective, switchable framework ── */
  var FW = [["cc", "Common Core", "CCSS"], ["ma", "MA Frameworks", "MA"]];  // only the two populated frameworks
  function curFw() { try { return localStorage.getItem("lab404.stdFramework") === "ma" ? "ma" : "cc"; } catch (e) { return "cc"; } }
  function stdChip(ob) {
    var x = ob.xwalk || {}, fw = curFw();
    var useKey = x[fw] ? fw : (x.cc ? "cc" : (x.ma ? "ma" : null));
    if (!useKey) {
      /* coding/CS objectives align to CSTA, not Common Core / state math-ELA frameworks */
      if (x.csta) return ' <span class="cv-std-chip" title="CSTA K-12 Computer Science Standards">📏 CSTA ' + esc(x.csta) + '</span>';
      return "";
    }
    var abbr = useKey === "cc" ? "CCSS" : "MA";
    var parts = [];
    if (x.cc) parts.push("Common Core " + x.cc);
    if (x.ma) parts.push("MA " + x.ma);
    return ' <span class="cv-std-chip" title="Aligned to: ' + esc(parts.join("  ·  ")) + '">📏 ' + abbr + ' ' + esc(x[useKey]) + '</span>';
  }

  function objPlain(ob) {
    var t = (ob.title ? ob.title + ". " : "") + (ob.teach ? ob.teach + " " : "");
    if (ob.deep && ob.deep.length) {
      ob.deep.forEach(function (s) {
        t += (s.h ? s.h + ". " : "") + (s.body ? s.body + " " : "") +
          (s.example ? "For example, " + s.example + " " : "") + (s.tip ? "Tip. " + s.tip + " " : "");
      });
    } else if (ob.ex) { t += "Worked example. " + ob.ex + " "; }
    return t;
  }

  function loadAudioManifest() {
    audio.have = null; audio.cur = null;
    audio.base = "audio/courses/" + courseId + "/";
    audio.autoplay = /^(K|1|2|3)$/.test(String(course.grade));
    try {
      fetch(audio.base + "manifest.json", { cache: "no-cache" })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (m) { audio.have = (m && m.files) || {}; })
        .catch(function () { audio.have = {}; });
    } catch (e) { audio.have = {}; }
  }
  function hasClip(qid) { return !!(audio.have && audio.have[qid]); }
  function stopClip() { if (audio.cur) { try { audio.cur.pause(); } catch (e) {} audio.cur = null; } }
  function playClip(qid) {
    if (!hasClip(qid)) return;
    stopClip();
    try { audio.cur = new Audio(audio.base + audio.have[qid].file); audio.cur.play().catch(function () {}); } catch (e) {}
  }

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function paras(t) { return String(t == null ? "" : t).split(/\n\n+/).map(function (p) { return p.trim() ? "<p>" + esc(p.trim()) + "</p>" : ""; }).join(""); }
  function deepSection(sec) {  // textbook-depth lesson section
    return (sec.h ? '<div class="cv-ds-h">' + esc(sec.h) + "</div>" : "") +
      paras(sec.body) +
      (sec.example ? '<div class="cv-ex"><span class="cv-ex-l">Worked example</span>' + esc(sec.example) + "</div>" : "") +
      (sec.tip ? '<div class="cv-tip">💡 ' + esc(sec.tip) + "</div>" : "") +
      (sec.watch ? '<div class="cv-warn">⚠️ Watch out: ' + esc(sec.watch) + "</div>" : "");
  }

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
      ".cv-std{font-size:.7rem;color:var(--text-muted,#9aa);margin:0 0 6px}" +
      ".cv-fw{font-size:.68rem;color:var(--text-muted,#9aa);display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin:0 0 8px}" +
      ".cv-fw-btn{font:inherit;font-size:.66rem;font-weight:700;border:1px solid var(--border,#334);background:transparent;color:var(--text-muted,#9aa);border-radius:6px;padding:3px 9px;cursor:pointer}" +
      ".cv-fw-btn.on{background:var(--accent2,#4a90e2);border-color:var(--accent2,#4a90e2);color:#fff}" +
      ".cv-std-chip{display:inline-block;font-family:system-ui,sans-serif;font-size:.58rem;font-weight:700;color:var(--accent2,#4a90e2);background:rgba(74,144,226,.12);border:1px solid rgba(74,144,226,.3);border-radius:5px;padding:1px 6px;margin-left:6px;vertical-align:middle;white-space:nowrap}" +
      ".cv-share{margin-top:10px;border:1px solid var(--accent2,#4a90e2);border-radius:10px;padding:11px 13px;background:rgba(74,144,226,.06)}" +
      ".cv-share-l{font-size:.74rem;color:var(--text-muted,#9aa);margin-bottom:7px}" +
      ".cv-share-row{display:flex;gap:7px}" +
      ".cv-share-row input{flex:1;min-width:0;background:var(--bg,#0d1117);border:1px solid var(--border,#334);border-radius:7px;padding:7px 9px;color:var(--text,#eee);font:.72rem monospace}" +
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
      ".cv-objwrap{margin-bottom:6px}" +
      ".cv-learn{border-left:3px solid var(--accent2,#4a90e2);border-radius:0 8px 8px 0;margin:0 0 8px;padding:11px 13px;background:rgba(74,144,226,.06);font-size:.85rem;line-height:1.55}" +
      ".cv-learn.hide{display:none}" +
      ".cv-learn p{margin:0 0 8px}" +
      ".cv-ex{background:rgba(127,127,127,.12);border-radius:8px;padding:8px 11px;margin:4px 0 10px;font-size:.82rem}" +
      ".cv-ex-l{display:block;font-size:.58rem;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--text-muted,#9aa);margin-bottom:3px}" +
      ".cv-ds-h{font-weight:800;font-size:.8rem;color:var(--accent2,#4a90e2);margin:12px 0 5px}" +
      ".cv-tip{background:rgba(60,190,110,.12);border-left:3px solid #3cbe6e;border-radius:6px;padding:7px 11px;margin:6px 0 10px;font-size:.82rem}" +
      ".cv-warn{background:rgba(230,160,40,.12);border-left:3px solid #e0a93c;border-radius:6px;padding:7px 11px;margin:6px 0 10px;font-size:.82rem}" +
      ".cv-learn-btn{border:1px solid var(--accent2,#4a90e2);background:transparent;color:var(--accent2,#4a90e2);border-radius:8px;padding:5px 10px;font:inherit;font-size:.72rem;font-weight:700;cursor:pointer;white-space:nowrap}" +
      ".cv-learn-btn.on{background:var(--accent2,#4a90e2);color:#fff}" +
      ".cv-learn-foot{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:4px}" +
      ".cv-readaloud{border-color:rgba(232,163,60,.5);color:var(--amber,#E8A33C)}" +
      ".cv-readaloud.playing{background:var(--amber,#E8A33C);color:#1a1205;border-color:var(--amber,#E8A33C)}" +
      /* quiz */
      ".cv-q{max-width:560px;margin:0 auto}" +
      ".cv-prog{font-size:.72rem;color:var(--text-muted,#9aa);margin-bottom:6px;display:flex;justify-content:space-between}" +
      ".cv-qtext{font-size:1.05rem;font-weight:600;line-height:1.5;margin:6px 0 16px}" +
      ".cv-spk{display:inline-flex;align-items:center;gap:7px;border:1.5px solid var(--accent2,#4a90e2);background:rgba(74,144,226,.1);color:var(--accent2,#4a90e2);border-radius:99px;padding:7px 15px;font:inherit;font-weight:700;font-size:.82rem;cursor:pointer;margin:0 0 14px}" +
      ".cv-spk:active{transform:scale(.96)}" +
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
    loadAudioManifest();
    renderDash();
  }

  /* C2: build a stateless deep link to this course and copy it */
  function showShare() {
    var box = document.getElementById("cv-share"); if (!box) return;
    var url = location.origin + location.pathname + "?go=course&id=" + encodeURIComponent(courseId);
    box.innerHTML =
      '<div class="cv-share-l">Share this course — anyone who opens the link lands right here, no sign-in needed:</div>' +
      '<div class="cv-share-row"><input id="cv-share-url" readonly value="' + esc(url) + '">' +
      '<button class="cv-btn sm" id="cv-share-copy">Copy</button></div>';
    box.style.display = "block";
    var inp = document.getElementById("cv-share-url");
    document.getElementById("cv-share-copy").onclick = function () {
      var self = this;
      inp.focus(); inp.select(); try { inp.setSelectionRange(0, 99999); } catch (e) {}
      function done() { self.textContent = "Copied!"; setTimeout(function () { self.textContent = "Copy"; }, 1600); }
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(done, function () { try { document.execCommand("copy"); } catch (e) {} done(); });
        } else { document.execCommand("copy"); done(); }
      } catch (e) { try { document.execCommand("copy"); } catch (x) {} done(); }
    };
    inp.focus();
  }

  function renderDash() {
    learnText = {};
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
    if (r.placed && r.reviewDue) {  // spaced review takes priority — stale mastery is dragging the grade down
      banner = '<div class="cv-banner"><p>🔁 <b>' + r.reviewDue + ' objective' + (r.reviewDue > 1 ? 's' : '') + ' due for review.</b> ' +
        'Mastery fades over time — a quick review locks it back in and restores your grade.</p>' +
        '<button class="cv-btn" data-act="review">🔁 Review now</button></div>';
    }

    var doms = (course.domains || []).map(function (dm) {
      var objs = (course.objectives || []).filter(function (o) { return o.domain === dm.code; });
      if (!objs.length) return "";
      var rows = objs.map(function (ob) {
        var s = M.objStats(courseId, ob.code);
        var nq = M.questionsFor(courseId, ob.code).length;
        var hasDeep = !!(ob.deep && ob.deep.length);
        var hasLearn = !!(ob.teach || hasDeep);
        var head = '<div class="cv-obj">' +
          '<div class="cv-obj-main"><div class="cv-obj-code">' + esc(ob.code) + stdChip(ob) + '</div>' +
          '<div class="cv-obj-title">' + esc(ob.title) + '</div>' +
          '<div class="cv-obj-bar"><span class="cv-b-' + s.band + '" style="width:' + Math.round(s.pct * 100) + '%"></span></div></div>' +
          pill(s.band, s.bandLabel + (s.seen ? " · " + Math.round(s.pct * 100) + "%" : "") + (s.dueForReview ? " · review due" : "")) +
          (hasLearn ? '<button class="cv-learn-btn" data-learn="' + esc(ob.code) + '">📖 Learn</button>' : "") +
          '<button class="cv-btn ghost sm" data-practice="' + esc(ob.code) + '"' + (nq ? "" : " disabled") + '>Practice</button>' +
          '</div>';
        var body = hasDeep
          ? (ob.teach ? paras(ob.teach) : "") + ob.deep.map(deepSection).join("")
          : (ob.teach ? paras(ob.teach) : "") + (ob.ex ? '<div class="cv-ex"><span class="cv-ex-l">Worked example</span>' + esc(ob.ex) + '</div>' : "");
        if (hasLearn) learnText[ob.code] = objPlain(ob);
        var learn = hasLearn ? '<div class="cv-learn hide" id="cv-learn-' + esc(ob.code) + '">' +
          body +
          '<div class="cv-learn-foot">' +
          '<button class="cv-btn sm" data-practice="' + esc(ob.code) + '"' + (nq ? "" : " disabled") + '>🎯 Practice this objective</button>' +
          '<button class="cv-btn ghost sm cv-readaloud" data-readaloud="' + esc(ob.code) + '" aria-pressed="false" title="Read this aloud"><span class="ra-lbl">🔊 Listen</span></button>' +
          '</div></div>' : "";
        return '<div class="cv-objwrap">' + head + learn + '</div>';
      }).join("");
      return '<div class="cv-dom"><div class="cv-domh">' + esc(dm.code) + " — " + esc(dm.name) + '</div>' + rows + '</div>';
    }).join("");

    el.innerHTML =
      '<div class="cv-wrap">' +
        '<div class="cv-head">' + ringSvg(r.pct, r.letter) +
          '<div class="cv-hmeta"><div class="cv-title">' + esc(course.title) + '</div>' +
            '<div class="cv-std">' + esc(course.standard) + '</div>' +
            '<div class="cv-fw" role="group" aria-label="Standards framework"><span>📏 Standards:</span> ' +
              FW.map(function (f) { return '<button class="cv-fw-btn' + (f[0] === curFw() ? " on" : "") + '" data-fw="' + f[0] + '">' + f[1] + '</button>'; }).join("") +
            '</div>' +
            '<div class="cv-grade"><div><span class="lg">' + r.letter + '</span><small>Grade</small></div>' +
              '<div><span class="lg">' + r.gpa.toFixed(1) + '</span><small>GPA</small></div>' +
              '<div><span class="lg">' + r.mastered + "/" + r.total + '</span><small>Mastered</small></div></div>' +
            '<div class="cv-counts">' + counts + '</div></div></div>' +
        banner +
        doms +
        '<div class="cv-row"><button class="cv-btn ghost sm" data-act="reset">Reset progress</button>' +
          '<button class="cv-btn ghost sm" data-act="share">🔗 Share / Assign</button></div>' +
        '<div class="cv-share" id="cv-share" style="display:none"></div>' +
        '<p class="cv-note">Grades are <b>living</b>: your % / letter / GPA reflect your <i>current</i> mastery and climb toward an A as objectives reach <b>Mastered</b> (85%+, shown consistently). Objectives are aligned to <b>Common Core</b> and the <b>Massachusetts Curriculum Frameworks</b> — switch frameworks above, and each objective shows its standard code. (Texas / VA SOL / FL B.E.S.T. crosswalks are planned.)</p>' +
      '</div>';

    el.querySelectorAll("[data-fw]").forEach(function (b) {
      b.addEventListener("click", function () {
        try { localStorage.setItem("lab404.stdFramework", this.getAttribute("data-fw")); } catch (e) {}
        renderDash();
      });
    });
    el.querySelectorAll("[data-act]").forEach(function (b) {
      b.addEventListener("click", function () {
        var a = this.getAttribute("data-act");
        if (a === "placement") startQuiz("placement");
        else if (a === "weakest") startQuiz("weakest");
        else if (a === "review") startQuiz("review");
        else if (a === "reset") { if (confirm("Reset all progress for this course?")) { M.reset(courseId); renderDash(); } }
        else if (a === "share") { showShare(); }
      });
    });
    el.querySelectorAll("[data-practice]").forEach(function (b) {
      b.addEventListener("click", function () { startQuiz("objective", this.getAttribute("data-practice")); });
    });
    el.querySelectorAll("[data-learn]").forEach(function (b) {
      b.addEventListener("click", function () {
        var panel = document.getElementById("cv-learn-" + this.getAttribute("data-learn"));
        if (panel) { var open = panel.classList.toggle("hide"); this.classList.toggle("on", !open); if (open && window.ReadAloud) window.ReadAloud.stop(); }
      });
    });
    el.querySelectorAll("[data-readaloud]").forEach(function (b) {
      if (!(window.ReadAloud && window.ReadAloud.supported())) { b.style.display = "none"; return; }
      b.addEventListener("click", function () { window.ReadAloud.toggle(learnText[this.getAttribute("data-readaloud")] || "", this); });
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
    } else if (mode === "review") {
      M.dueReview(courseId).forEach(function (c) { qs = qs.concat(M.questionsFor(courseId, c)); });
      shuffle(qs);
    }
    if (!qs.length) { renderDash(); return; }
    quiz = { mode: mode, qs: qs, i: 0, correct: 0, answered: false };
    renderQ();
  }

  function renderQ() {
    stopClip();
    var q = quiz.qs[quiz.i];
    var title = quiz.mode === "placement" ? "Placement check" : quiz.mode === "weakest" ? "Practice — weakest objectives" : quiz.mode === "review" ? "🔁 Review — due objectives" : "Practice — " + q.obj;
    var body;
    if (q.type === "numeric") {
      body = '<input class="cv-num" id="cv-in" type="text" inputmode="decimal" autocomplete="off" placeholder="Your answer">' +
        '<div class="cv-hint">Type the number (no units).</div>';
    } else {
      var multi = q.type === "multi";
      var order = shuffle(q.options.map(function (_, i) { return i; })); // shuffle display; data-i keeps the real index
      body = (multi ? '<div class="cv-hint" style="margin:0 0 8px">Select ALL that apply, then Check.</div>' : "") +
        '<div class="cv-opts">' + order.map(function (i) {
          return '<button class="cv-opt" data-i="' + i + '">' + esc(q.options[i]) + '</button>';
        }).join("") + '</div>';
    }
    var spk = hasClip(q.id) ? '<button class="cv-spk" id="cv-spk">🔊 Listen</button>' : "";
    el.innerHTML =
      '<div class="cv-wrap"><div class="cv-q">' +
        '<div class="cv-prog"><span>' + esc(title) + '</span><span>' + (quiz.i + 1) + " / " + quiz.qs.length + '</span></div>' +
        '<div class="cv-qtext">' + esc(q.q) + '</div>' +
        spk +
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
    var spkBtn = document.getElementById("cv-spk");
    if (spkBtn) spkBtn.addEventListener("click", function () { playClip(q.id); });
    if (spkBtn && audio.autoplay) playClip(q.id);  // early grades (K-3): read the question aloud automatically
    document.getElementById("cv-quit").addEventListener("click", function () { stopClip(); quiz = null; renderDash(); });
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
    stopClip();
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
