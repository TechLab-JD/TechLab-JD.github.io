/* Lab404 Study Hub — mastery course view (objective dashboard + placement + practice).
   window.CourseLoader.init(contentEl, {course:"g4-math"}). Uses LAB404_COURSES + LAB404_MASTERY.
   Shows a living report card (readiness % / letter / GPA), the objective list with the four mastery bands,
   a placement "test-out" diagnostic, and an anti-guess practice runner that updates mastery live. */
window.CourseLoader = (function () {
  var M = window.LAB404_MASTERY;
  var el, courseId, course, quiz = null;
  var audio = { base: "", have: null, autoplay: false, cur: null };  // pre-rendered Kokoro clips (optional per course)
  var testTimer = null;  // R5: count-up timer for the full practice test
  function fmtTime(ms) { var s = Math.floor(ms / 1000), m = Math.floor(s / 60); return m + ":" + (s % 60 < 10 ? "0" : "") + (s % 60); }
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
      /* science objectives align to the Next Generation Science Standards */
      if (x.ngss) return ' <span class="cv-std-chip" title="Next Generation Science Standards">📏 NGSS ' + esc(x.ngss) + '</span>';
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
  /* D4: audio-first mode — auto read-aloud for non-readers (K-2, or Junior mode on). */
  function audioFirst() {
    return !!(window.ReadAloud && window.ReadAloud.supported() && kidMode());
  }
  /* R3: Play Mode — K-2 (or Junior mode) sees stars + encouragement instead of a letter grade / GPA. */
  function kidMode() {
    return /^(K|1|2)$/.test(String(course && course.grade)) || document.documentElement.classList.contains("lab404-junior");
  }
  function kidStars(r) {
    var filled = r.total ? Math.round(r.mastered / r.total * 3) : 0;
    var enc = r.complete ? "You did it! 🎉" : (r.mastered > 0 ? "Great job — keep going! 🌟" : "Let’s start! 🚀");
    var stars = "";
    for (var i = 1; i <= 3; i++) stars += '<span class="cv-star' + (i <= filled ? " on" : "") + '">★</span>';
    return '<div class="cv-stars"><div class="cv-stars-row">' + stars + '</div>' +
      '<div class="cv-stars-txt">You mastered <b>' + r.mastered + '</b> of ' + r.total + '! ' + enc + '</div></div>';
  }
  function stopClip() { if (audio.cur) { try { audio.cur.pause(); } catch (e) {} audio.cur = null; } }
  function playClip(qid) {
    if (!hasClip(qid)) return;
    stopClip();
    try { audio.cur = new Audio(audio.base + audio.have[qid].file); audio.cur.play().catch(function () {}); } catch (e) {}
  }

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  /* F2: spoken form of a question — prompt plus lettered options. */
  function qReadText(q) {
    var t = String(q.q || "");
    if (q.options && q.options.length) {
      t += ". Options: " + q.options.map(function (o, i) { return String.fromCharCode(65 + i) + ". " + o; }).join(". ");
    }
    return t;
  }
  function paras(t) { return String(t == null ? "" : t).split(/\n\n+/).map(function (p) { return p.trim() ? "<p>" + esc(p.trim()) + "</p>" : ""; }).join(""); }
  function deepSection(sec) {  // textbook-depth lesson section
    return (sec.h ? '<div class="cv-ds-h">' + esc(sec.h) + "</div>" : "") +
      paras(sec.body) +
      /* I2: optional inline SVG diagram (authored, trusted) */
      (sec.visual ? '<figure class="cv-fig">' + sec.visual + (sec.caption ? '<figcaption class="cv-fig-cap">' + esc(sec.caption) + "</figcaption>" : "") + "</figure>" : "") +
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
      ".cv-bm{background:none;border:0;color:#E8A33C;font-size:1.05rem;line-height:1;cursor:pointer;vertical-align:middle;padding:0 3px}" +
      ".cv-bm:hover{transform:scale(1.15)}" +
      ".cv-fw{font-size:.68rem;color:var(--text-muted,#9aa);display:flex;gap:6px;align-items:center;flex-wrap:wrap;margin:0 0 8px}" +
      ".cv-fw-btn{font:inherit;font-size:.66rem;font-weight:700;border:1px solid var(--border,#334);background:transparent;color:var(--text-muted,#9aa);border-radius:6px;padding:3px 9px;cursor:pointer}" +
      ".cv-fw-btn.on{background:var(--accent2,#4a90e2);border-color:var(--accent2,#4a90e2);color:#fff}" +
      ".cv-std-chip{display:inline-block;font-family:system-ui,sans-serif;font-size:.58rem;font-weight:700;color:var(--accent2,#4a90e2);background:rgba(74,144,226,.12);border:1px solid rgba(74,144,226,.3);border-radius:5px;padding:1px 6px;margin-left:6px;vertical-align:middle;white-space:nowrap}" +
      ".cv-share{margin-top:10px;border:1px solid var(--accent2,#4a90e2);border-radius:10px;padding:11px 13px;background:rgba(74,144,226,.06)}" +
      ".cv-share-l{font-size:.74rem;color:var(--text-muted,#9aa);margin-bottom:7px}" +
      ".cv-share-row{display:flex;gap:7px}" +
      ".cv-share-row input{flex:1;min-width:0;background:var(--bg,#0d1117);border:1px solid var(--border,#334);border-radius:7px;padding:7px 9px;color:var(--text,#eee);font:.72rem monospace}" +
      ".cv-grade{display:flex;gap:16px;align-items:baseline}" +
      ".cv-stars{margin-top:8px}" +
      ".cv-stars-row{letter-spacing:4px;line-height:1}" +
      ".cv-star{font-size:2rem;color:var(--border,#334)}" +
      ".cv-star.on{color:#f5c518}" +
      ".cv-stars-txt{font-size:.95rem;color:var(--text,#eee);margin-top:7px}" +
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
      ".cv-fig{margin:12px auto;max-width:380px;text-align:center;background:#fff;border:1px solid var(--border,#334);border-radius:10px;padding:12px 14px}" +
      ".cv-fig svg{max-width:100%;height:auto;display:block;margin:0 auto}" +
      ".cv-fig-cap{font-size:.72rem;color:#556;margin-top:6px;text-align:center}" +
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
      ".cv-flag{margin-left:auto;background:none;border:0;color:var(--text-faint,#778);font:inherit;font-size:.72rem;cursor:pointer;padding:5px 8px}" +
      ".cv-flag:hover{color:#e0a93c}.cv-flag:disabled{color:#3cbe6e;cursor:default}" +
      ".cv-num{width:160px;font-size:1.1rem;padding:10px 12px;border:1.5px solid var(--border,#334);border-radius:10px;background:transparent;color:var(--text,#eee);font:inherit}" +
      ".cv-hint{font-size:.7rem;color:var(--text-faint,#778);margin-top:6px}" +
      ".cv-fb{border-radius:10px;padding:11px 14px;margin-top:14px;font-size:.84rem;line-height:1.5}" +
      ".cv-fb.ok{background:rgba(60,190,110,.14);border:1px solid #3cbe6e}" +
      ".cv-fb.no{background:rgba(224,72,72,.12);border:1px solid #e0484a}" +
      /* R2: step-by-step solution panel */
      ".cv-sol{margin-top:10px}" +
      ".cv-sol-h{font-weight:800;font-size:.72rem;text-transform:uppercase;letter-spacing:.5px;color:var(--accent2,#4a90e2);margin:0 0 6px}" +
      ".cv-sol-btn{border:1px solid var(--border,#334);background:transparent;color:var(--accent2,#4a90e2);border-radius:8px;padding:6px 11px;font:inherit;font-size:.78rem;font-weight:700;cursor:pointer}" +
      ".cv-sol-btn:hover{background:rgba(74,144,226,.1)}" +
      ".cv-steps{margin:4px 0 0;padding-left:22px;font-size:.86rem;line-height:1.6}" +
      ".cv-steps li{margin:3px 0;padding-left:3px}" +
      ".cv-steps li::marker{color:var(--accent2,#4a90e2);font-weight:700}" +
      ".cv-row{display:flex;gap:10px;align-items:center;margin-top:16px;flex-wrap:wrap}" +
      ".cv-done{text-align:center;padding:10px}" +
      /* D8: printable worksheet (screen-hidden; shown only when printing) */
      "#ws-print{display:none}" +
      "@media print{body.ws-printing>*:not(#ws-print){display:none!important}" +
        "body.ws-printing #ws-print{display:block!important;color:#000;font-family:Georgia,'Times New Roman',serif;font-size:12pt;line-height:1.5}" +
        "#ws-print h1{font-size:17pt;margin:0 0 2pt}#ws-print .ws-sub{font-size:10pt;color:#333;margin:0 0 10pt}" +
        "#ws-print .ws-meta{font-size:10pt;margin:0 0 14pt;border-bottom:1px solid #000;padding-bottom:8pt}" +
        "#ws-print .ws-q{margin:0 0 11pt;page-break-inside:avoid}" +
        "#ws-print .ws-qn{font-weight:bold}#ws-print .ws-opts{margin:3pt 0 0 16pt}#ws-print .ws-opt{margin:1pt 0}" +
        "#ws-print .ws-blank{margin:4pt 0 0 16pt;color:#333}" +
        "#ws-print .ws-key{page-break-before:always;margin-top:0}#ws-print .ws-key h2{font-size:14pt}" +
        "#ws-print .ws-key .ws-kq{font-size:11pt;margin:2pt 0}" +
        "@page{margin:16mm}}";
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
    try { if (window.Lab404Lib) Lab404Lib.setLastCourse(courseId, course.title); } catch (e) {}  /* B4: resume */
    loadAudioManifest();
    renderDash();
    /* R8: open straight into a specific objective's practice (used by assignments). */
    if (params && params.practice && M.questionsFor(courseId, params.practice).length) {
      startQuiz("objective", params.practice);
    }
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

  /* D8: build a printable practice worksheet (up to 2 questions/objective) + answer key. */
  function letterFor(i) { return String.fromCharCode(65 + i); }
  function printWorksheet() {
    var items = [];
    (course.objectives || []).forEach(function (ob) {
      var pool = shuffle(M.questionsFor(courseId, ob.code).slice()).slice(0, 2);
      pool.forEach(function (q) { items.push(q); });
    });
    if (!items.length) { alert("No practice questions available for this worksheet yet."); return; }

    var qHtml = "", keyHtml = "";
    items.forEach(function (q, idx) {
      var n = idx + 1;
      var block = '<div class="ws-q"><div class="ws-qn">' + n + ". " + esc(q.q) + '</div>';
      if (q.type === "numeric") {
        block += '<div class="ws-blank">Answer: ______________</div>';
        keyHtml += '<div class="ws-kq">' + n + ". " + esc(String(q.answer)) + '</div>';
      } else {
        block += '<div class="ws-opts">' + q.options.map(function (op, i) {
          return '<div class="ws-opt">' + letterFor(i) + ") " + esc(op) + '</div>';
        }).join("") + '</div>';
        if (q.type === "multi") {
          block += '<div class="ws-blank">(Select all that apply)</div>';
          keyHtml += '<div class="ws-kq">' + n + ". " + (q.correct || []).map(letterFor).join(", ") + '</div>';
        } else {
          keyHtml += '<div class="ws-kq">' + n + ". " + letterFor(q.a) + '</div>';
        }
      }
      block += '</div>';
      qHtml += block;
    });

    var ws = document.getElementById("ws-print");
    if (!ws) { ws = document.createElement("div"); ws.id = "ws-print"; document.body.appendChild(ws); }
    var today = new Date().toLocaleDateString();
    ws.innerHTML =
      '<h1>' + esc(course.title) + ' — Practice Worksheet</h1>' +
      '<div class="ws-sub">' + esc(course.standard || "") + '</div>' +
      '<div class="ws-meta">Name: ____________________________   Date: ____________   Score: ______ / ' + items.length + '</div>' +
      qHtml +
      '<div class="ws-key"><h2>Answer Key</h2>' +
        '<div class="ws-sub">' + esc(course.title) + ' · ' + esc(today) + '</div>' +
        keyHtml +
      '</div>';

    function cleanup() { document.body.classList.remove("ws-printing"); window.removeEventListener("afterprint", cleanup); }
    window.addEventListener("afterprint", cleanup);
    document.body.classList.add("ws-printing");
    window.print();
  }

  function renderDash() {
    learnText = {};
    var r = M.readiness(courseId);
    var kid = kidMode();  /* R3 */
    var pill = function (b, n) { return '<span class="cv-pill cv-' + b + '">' + n + '</span>'; };
    var counts = '<span class="cv-pill cv-mastered">' + r.counts.mastered + ' mastered</span>' +
      '<span class="cv-pill cv-strong">' + r.counts.strong + ' strong</span>' +
      '<span class="cv-pill cv-needs">' + r.counts.needs + ' needs work</span>' +
      '<span class="cv-pill cv-weak">' + r.counts.weak + ' weak</span>' +
      (r.counts.none ? '<span class="cv-pill cv-none">' + r.counts.none + ' not started</span>' : "");

    var banner = "";
    if (!r.placed) {
      banner = kid
        ? '<div class="cv-banner"><p>👋 <b>Tap Practice to start!</b> Answer a few questions and watch your stars grow.</p><button class="cv-btn" data-act="placement">⭐ Start</button></div>'
        : '<div class="cv-banner"><p><b>Start with a quick placement check.</b> A few questions across every objective tells us where you’re strong and what to focus on — no studying needed, just answer honestly.</p>' +
          '<button class="cv-btn" data-act="placement">🧭 Take placement test</button></div>';
    } else if (r.complete) {
      banner = kid
        ? '<div class="cv-banner"><p>🎉 <b>You mastered them all!</b> Amazing work! Keep playing to stay sharp.</p></div>'
        : '<div class="cv-banner"><p>🎉 <b>Course mastered!</b> Every objective is at the 85% mastery bar. Keep practicing to hold it — mastery fades if you never revisit it.</p></div>';
    } else {
      banner = kid
        ? '<div class="cv-banner"><p>🌟 <b>Great job!</b> Let’s practice a little more to earn more stars.</p><button class="cv-btn" data-act="weakest">🎯 Keep going</button></div>'
        : '<div class="cv-banner"><p><b>Keep going.</b> Practice your weakest objectives to raise your readiness toward an A.</p>' +
          '<button class="cv-btn" data-act="weakest">🎯 Practice weakest</button></div>';
    }
    if (r.placed && r.reviewDue) {  // spaced review takes priority — stale mastery is dragging the grade down
      banner = kid
        ? '<div class="cv-banner"><p>🔁 <b>Time to practice again!</b> A quick review keeps your stars shiny.</p><button class="cv-btn" data-act="review">🔁 Review</button></div>'
        : '<div class="cv-banner"><p>🔁 <b>' + r.reviewDue + ' objective' + (r.reviewDue > 1 ? 's' : '') + ' due for review.</b> ' +
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
          '<div class="cv-hmeta"><div class="cv-title">' + esc(course.title) +
            ' <button class="cv-bm" data-bm="1" title="Bookmark this course" aria-label="Bookmark this course">' +
            ((window.Lab404Lib && Lab404Lib.isBookmarked(courseId)) ? "★" : "☆") + '</button></div>' +
            (kid ? "" :
              '<div class="cv-std">' + esc(course.standard) + '</div>' +
              '<div class="cv-fw" role="group" aria-label="Standards framework"><span>📏 Standards:</span> ' +
                FW.map(function (f) { return '<button class="cv-fw-btn' + (f[0] === curFw() ? " on" : "") + '" data-fw="' + f[0] + '">' + f[1] + '</button>'; }).join("") +
              '</div>') +
            (kid ? kidStars(r) :
              '<div class="cv-grade"><div><span class="lg">' + r.letter + '</span><small>Grade</small></div>' +
                '<div><span class="lg">' + r.gpa.toFixed(1) + '</span><small>GPA</small></div>' +
                '<div><span class="lg">' + r.mastered + "/" + r.total + '</span><small>Mastered</small></div></div>') +
            '<div class="cv-counts">' + counts + '</div></div></div>' +
        banner +
        doms +
        '<div class="cv-row">' +
          (course.questions && course.questions.length >= 5 ? '<button class="cv-btn sm" data-act="test">📝 Full practice test</button>' : "") +
          '<button class="cv-btn ghost sm" data-act="reset">Reset progress</button>' +
          '<button class="cv-btn ghost sm" data-act="share">🔗 Share / Assign</button>' +
          '<button class="cv-btn ghost sm" data-act="worksheet">🖨 Print worksheet</button></div>' +
        '<div class="cv-share" id="cv-share" style="display:none"></div>' +
        '<p class="cv-note">Grades are <b>living</b>: your % / letter / GPA reflect your <i>current</i> mastery and climb toward an A as objectives reach <b>Mastered</b> (85%+, shown consistently). Objectives are aligned to <b>Common Core</b> and the <b>Massachusetts Curriculum Frameworks</b> — switch frameworks above, and each objective shows its standard code. (Texas / VA SOL / FL B.E.S.T. crosswalks are planned.)</p>' +
      '</div>';

    el.querySelectorAll("[data-fw]").forEach(function (b) {
      b.addEventListener("click", function () {
        try { localStorage.setItem("lab404.stdFramework", this.getAttribute("data-fw")); } catch (e) {}
        renderDash();
      });
    });
    el.querySelectorAll("[data-bm]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (!window.Lab404Lib) return;
        this.textContent = Lab404Lib.toggleBookmark(courseId, course.title) ? "★" : "☆";
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
        else if (a === "worksheet") { printWorksheet(); }
        else if (a === "test") { startQuiz("test"); }
      });
    });
    el.querySelectorAll("[data-practice]").forEach(function (b) {
      b.addEventListener("click", function () { startQuiz("objective", this.getAttribute("data-practice")); });
    });
    el.querySelectorAll("[data-learn]").forEach(function (b) {
      b.addEventListener("click", function () {
        var code = this.getAttribute("data-learn");
        var panel = document.getElementById("cv-learn-" + code);
        if (panel) {
          var open = panel.classList.toggle("hide"); this.classList.toggle("on", !open);
          if (open && window.ReadAloud) window.ReadAloud.stop();
          else if (!open && audioFirst()) window.ReadAloud.speak(learnText[code] || "");  /* D4: read the lesson to non-readers */
        }
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
    } else if (mode === "test") {
      /* R5: a cumulative test drawing from every objective in the course */
      qs = shuffle((course.questions || []).slice());
      var cap = (code && +code) || 20;
      qs = qs.slice(0, Math.min(cap, qs.length));
    }
    if (!qs.length) { renderDash(); return; }
    quiz = { mode: mode, qs: qs, i: 0, correct: 0, answered: false };
    if (testTimer) { clearInterval(testTimer); testTimer = null; }
    if (mode === "test") {
      quiz.startTime = Date.now();
      testTimer = setInterval(function () { var t = document.getElementById("cv-timer"); if (t && quiz) t.textContent = "⏱ " + fmtTime(Date.now() - quiz.startTime); }, 500);
    }
    renderQ();
  }

  function renderQ() {
    stopClip();
    if (window.ReadAloud) window.ReadAloud.stop();  /* F2: stop any prior read-aloud */
    var q = quiz.qs[quiz.i];
    var title = quiz.mode === "placement" ? "Placement check" : quiz.mode === "weakest" ? "Practice — weakest objectives" : quiz.mode === "review" ? "🔁 Review — due objectives" : quiz.mode === "test" ? "📝 Full practice test" : "Practice — " + q.obj;
    var timerSpan = quiz.mode === "test" ? '<span id="cv-timer" style="font-variant-numeric:tabular-nums">⏱ ' + fmtTime(Date.now() - quiz.startTime) + "</span>" : "";
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
    /* F2: text-to-speech fallback for any question without a recorded clip */
    var ra = (!hasClip(q.id) && window.ReadAloud && window.ReadAloud.supported())
      ? '<button class="cv-btn ghost sm cv-readaloud" id="cv-ra" aria-pressed="false" title="Read this question aloud"><span class="ra-lbl">🔊 Listen</span></button>' : "";
    el.innerHTML =
      '<div class="cv-wrap"><div class="cv-q">' +
        '<div class="cv-prog"><span>' + esc(title) + '</span>' + timerSpan + '<span>' + (quiz.i + 1) + " / " + quiz.qs.length + '</span></div>' +
        '<div class="cv-qtext">' + esc(q.q) + '</div>' +
        spk + ra +
        body +
        '<div id="cv-fb"></div>' +
        '<div class="cv-row" id="cv-row"><button class="cv-btn" id="cv-check">Check</button>' +
          '<button class="cv-btn ghost sm" id="cv-quit">Quit</button>' +
          '<button class="cv-flag" id="cv-flag" type="button" title="Report a problem with this question">⚑ Report</button></div>' +
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
        if (audioFirst()) window.ReadAloud.speak(q.options[i]);  /* D4: tap an answer to hear it */
      });
    });
    var spkBtn = document.getElementById("cv-spk");
    if (spkBtn) spkBtn.addEventListener("click", function () { playClip(q.id); });
    if (spkBtn && audio.autoplay) playClip(q.id);  // early grades (K-3): read the question aloud automatically
    var raBtn = document.getElementById("cv-ra");   /* F2 */
    if (raBtn) raBtn.addEventListener("click", function () { window.ReadAloud.toggle(qReadText(q), raBtn); });
    /* D4: non-readers (K-2 / Junior) hear the question + options read automatically. */
    if (!hasClip(q.id) && audioFirst()) setTimeout(function () { if (quiz && !quiz.answered) window.ReadAloud.speak(qReadText(q)); }, 350);
    document.getElementById("cv-quit").addEventListener("click", function () { if (window.ReadAloud) window.ReadAloud.stop(); stopClip(); if (testTimer) { clearInterval(testTimer); testTimer = null; } quiz = null; renderDash(); });
    var flagBtn = document.getElementById("cv-flag");
    if (flagBtn) flagBtn.addEventListener("click", function () {  /* G3: report a question (local) */
      try { var r = JSON.parse(localStorage.getItem("lab404.reported") || "[]"); r.push({ course: courseId, obj: q.obj, qid: q.id, ts: Date.now() }); localStorage.setItem("lab404.reported", JSON.stringify(r)); } catch (e) {}
      flagBtn.textContent = "✓ Reported — thanks"; flagBtn.disabled = true;
    });
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
    if (window.Lab404Missed) window.Lab404Missed.record(courseId, q, ok);  /* B3b: collect/clear misses */
    if (window.Lab404Goals) window.Lab404Goals.bump(ok);                   /* E4: daily goal count */
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
    var ansPlain = q.type === "numeric" ? String(q.answer) :
      q.type === "mc" ? q.options[q.a] :
      q.correct.map(function (i) { return q.options[i]; }).join(", ");
    /* R2: step-by-step solution. Use authored q.steps when present, else the one-line why. */
    var steps = (q.steps && q.steps.length) ? q.steps : (q.why ? [q.why] : []);
    var stepsOl = steps.length ? '<ol class="cv-steps">' + steps.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>" : "";
    var solHtml = "";
    if (stepsOl) {
      solHtml = ok
        ? '<div class="cv-sol"><button class="cv-sol-btn" id="cv-sol-btn" type="button">🧩 Show the steps</button><div class="cv-sol-body hide" id="cv-sol-body">' + stepsOl + "</div></div>"
        : '<div class="cv-sol"><div class="cv-sol-h">🧩 How to solve it</div>' + stepsOl + "</div>";
    }
    document.getElementById("cv-fb").innerHTML =
      '<div class="cv-fb ' + (ok ? "ok" : "no") + '">' + (ok ? "✅ Correct." : "❌ Not quite — the answer is " + esc(ansPlain) + ".") + "</div>" + solHtml;
    var solBtn = document.getElementById("cv-sol-btn");
    if (solBtn) solBtn.addEventListener("click", function () { var b = document.getElementById("cv-sol-body"); if (b) { b.classList.remove("hide"); this.classList.add("hide"); } });
    if (audioFirst()) window.ReadAloud.speak((ok ? "Correct! " : "Not quite. The answer is " + ansPlain + ". ") + steps.join(". "));  /* D4 */
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
    if (testTimer) { clearInterval(testTimer); testTimer = null; }
    if (quiz.mode === "placement") M.markPlaced(courseId);
    var s = quiz, r = M.readiness(courseId); quiz = null;
    var pct = s.qs.length ? Math.round(s.correct / s.qs.length * 100) : 0;
    var timeLine = (s.mode === "test" && s.startTime) ? ' · time ' + fmtTime(Date.now() - s.startTime) : "";
    el.innerHTML =
      '<div class="cv-wrap"><div class="cv-done">' +
        '<h2 style="margin:4px 0 2px">' + (s.mode === "placement" ? "Placement complete" : s.mode === "test" ? "📝 Test complete" : "Practice complete") + '</h2>' +
        (s.mode === "test" ? '<p style="font-size:1.4rem;font-weight:800;margin:6px 0;color:var(--accent2,#4a90e2)">' + pct + '%</p>' : "") +
        '<p style="color:var(--text-muted,#9aa);font-size:.85rem">You got <b>' + s.correct + " / " + s.qs.length + '</b>' + timeLine + '.</p>' +
        ringSvg(r.pct, r.letter) +
        '<p style="margin-top:8px">Course grade: <b>' + r.letter + '</b> · GPA ' + r.gpa.toFixed(1) + ' · ' + r.mastered + "/" + r.total + ' objectives mastered</p>' +
        '<div class="cv-row" style="justify-content:center"><button class="cv-btn" data-act="back">Back to course</button>' +
        (s.mode === "test" ? '<button class="cv-btn ghost" data-act="retest">📝 Retake test</button>' : (r.complete ? "" : '<button class="cv-btn ghost" data-act="again">Practice weakest</button>')) + '</div>' +
      '</div></div>';
    el.querySelectorAll("[data-act]").forEach(function (b) {
      b.addEventListener("click", function () {
        var a = this.getAttribute("data-act");
        if (a === "again") startQuiz("weakest");
        else if (a === "retest") startQuiz("test");
        else renderDash();
      });
    });
  }

  return { init: init };
})();
