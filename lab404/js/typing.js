/* typing.js — Typing Tutor (Tech): keyboarding lessons + a timed WPM/accuracy test.
   A self-contained desktop app. Type on the highlighted line; each key is checked
   live. Tracks best WPM and finished lessons locally. window.Lab404Typing.render(el) */
(function () {
  "use strict";

  var KEY = "lab404.typing";

  var LESSONS = [
    { id: "home1",  title: "Home row — basics",      text: "asdf jkl; asdf jkl; fj fj dk dk sl sl a; a;" },
    { id: "home2",  title: "Home row — words",       text: "a sad lad asks dad; a glass flask; all fall; ask" },
    { id: "top",    title: "Top row",                text: "we type two quiet quotes; require your power up" },
    { id: "bottom", title: "Bottom row",             text: "a man can mix; vivid zebra; nick came by at noon" },
    { id: "caps",   title: "Capitals & Shift",       text: "The Fox Ran Fast. Mary Had A Lamb. New York City." },
    { id: "nums",   title: "Numbers & symbols",      text: "buy 3 for $5; call 555-0142; room 27 on floor 4" },
    { id: "words",  title: "Common words",           text: "the and for you that with have this from they said were" },
    { id: "sent",   title: "Full sentences",         text: "practice a little every day and your typing speed will grow" }
  ];

  var TESTS = [
    { id: "t1", title: "Short", text: "The sun set slowly behind the hills as the travelers made camp for the night, grateful for a long day of rest." },
    { id: "t2", title: "Medium", text: "Good typing is less about speed and more about rhythm. Keep your fingers on the home row, look at the screen instead of your hands, and let accuracy come first. Speed follows the habit of hitting the right key without thinking about it." }
  ];

  function load() { try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { return {}; } }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function dispChar(ch) {
    if (ch === " ") return "&middot;";    /* visible space marker */
    return esc(ch);
  }

  function style() {
    if (document.getElementById("ty-style")) return;
    var s = document.createElement("style"); s.id = "ty-style";
    s.textContent =
      ".ty{padding:16px 18px;max-width:640px;margin:0 auto;box-sizing:border-box;font-size:.9rem}" +
      ".ty h2{font-size:1.1rem;color:var(--accent2,#39e3c8);margin:0 0 2px}" +
      ".ty .ty-lead{color:var(--text-muted,#9aa);font-size:.8rem;margin:0 0 14px}" +
      ".ty-tabs{display:flex;gap:6px;margin-bottom:14px}" +
      ".ty-tab{flex:1;border:1px solid var(--border,#334);background:transparent;color:var(--text,#dfe);border-radius:9px;padding:8px;font:inherit;font-weight:700;font-size:.82rem;cursor:pointer}" +
      ".ty-tab.on{background:var(--accent2,#39e3c8);border-color:var(--accent2,#39e3c8);color:#05211c}" +
      ".ty-list{display:flex;flex-direction:column;gap:7px}" +
      ".ty-item{display:flex;align-items:center;gap:10px;border:1px solid var(--border,#334);border-radius:10px;padding:10px 13px;cursor:pointer;background:transparent;color:var(--text,#dfe);font:inherit;text-align:left;width:100%}" +
      ".ty-item:hover{border-color:var(--accent2,#39e3c8)}" +
      ".ty-item .n{font-weight:700;font-size:.9rem}.ty-item .s{margin-left:auto;font-size:.68rem;color:var(--text-muted,#9aa)}" +
      ".ty-item .done{color:#3cbe6e}" +
      ".ty-field{border:1px solid var(--border,#334);border-radius:12px;padding:16px 18px;font-family:'Consolas','SF Mono',ui-monospace,monospace;font-size:1.15rem;line-height:2;letter-spacing:.5px;outline:none;cursor:text;word-break:break-word;background:var(--surface,#10171f)}" +
      ".ty-field.focus{border-color:var(--accent2,#39e3c8);box-shadow:0 0 0 2px rgba(57,227,200,.2)}" +
      ".ty-ch{border-radius:3px;padding:0 1px}" +
      ".ty-ch.ok{color:#3cbe6e}" +
      ".ty-ch.bad{color:#fff;background:#e0484a;border-radius:3px}" +
      ".ty-ch.cur{background:rgba(57,227,200,.3);box-shadow:inset 0 -2px 0 var(--accent2,#39e3c8)}" +
      ".ty-ch.todo{color:var(--text-faint,#8a97a6)}" +
      ".ty-hint{font-size:.72rem;color:var(--text-faint,#778);margin-top:8px;text-align:center}" +
      ".ty-stats{display:flex;gap:10px;margin:12px 0}" +
      ".ty-stat{flex:1;border:1px solid var(--border,#334);border-radius:10px;padding:10px;text-align:center}" +
      ".ty-stat b{display:block;font-size:1.5rem;font-weight:800;line-height:1;color:var(--accent2,#39e3c8)}" +
      ".ty-stat small{display:block;font-size:.58rem;color:var(--text-muted,#9aa);text-transform:uppercase;letter-spacing:.4px;margin-top:4px}" +
      ".ty-row{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}" +
      ".ty-btn{border:1px solid var(--accent2,#39e3c8);background:var(--accent2,#39e3c8);color:#05211c;border-radius:9px;padding:9px 16px;font:inherit;font-weight:700;font-size:.84rem;cursor:pointer}" +
      ".ty-btn.ghost{background:transparent;color:var(--text,#dfe);border-color:var(--border,#334)}" +
      ".ty-done{text-align:center;padding:10px 0}";
    document.head.appendChild(s);
  }

  /* ── core typing engine ── */
  function runTyping(content, title, text, onFinish, backLabel, onBack) {
    var pos = 0, correct = 0, typed = 0, started = 0, done = false;

    content.innerHTML =
      '<div class="ty">' +
        '<h2>' + esc(title) + '</h2>' +
        '<p class="ty-lead">Click the box, then type. Each key is checked as you go.</p>' +
        '<div class="ty-field" id="ty-field" tabindex="0" role="textbox" aria-label="Typing area">' +
          text.split("").map(function (ch, i) {
            return '<span class="ty-ch ' + (i === 0 ? "cur" : "todo") + '" data-i="' + i + '">' + dispChar(ch) + '</span>';
          }).join("") +
        '</div>' +
        '<div class="ty-hint">A keyboard is needed. Backspace fixes a mistake. Spaces show as &middot;</div>' +
        '<div class="ty-stats">' +
          '<div class="ty-stat"><b id="ty-wpm">0</b><small>WPM</small></div>' +
          '<div class="ty-stat"><b id="ty-acc">100%</b><small>Accuracy</small></div>' +
          '<div class="ty-stat"><b id="ty-prog">0%</b><small>Progress</small></div>' +
        '</div>' +
        '<div class="ty-row"><button class="ty-btn ghost" id="ty-restart">Restart</button>' +
          '<button class="ty-btn ghost" id="ty-back">' + esc(backLabel || "Back") + '</button></div>' +
      '</div>';

    var field = content.querySelector("#ty-field");
    var spans = field.querySelectorAll(".ty-ch");

    function stats() {
      var mins = started ? (Date.now() - started) / 60000 : 0;
      var wpm = mins > 0 ? Math.round((correct / 5) / mins) : 0;
      var acc = typed > 0 ? Math.round(correct / typed * 100) : 100;
      content.querySelector("#ty-wpm").textContent = wpm;
      content.querySelector("#ty-acc").textContent = acc + "%";
      content.querySelector("#ty-prog").textContent = Math.round(pos / text.length * 100) + "%";
      return { wpm: wpm, acc: acc };
    }

    function finish() {
      done = true;
      var s = stats();
      content.querySelector("#ty-field").classList.remove("focus");
      if (onFinish) onFinish(s);
      content.querySelector(".ty-stats").insertAdjacentHTML("beforebegin",
        '<div class="ty-done" id="ty-result"><b style="color:#3cbe6e;font-size:1.05rem">✓ Done!</b> ' +
        s.wpm + ' WPM · ' + s.acc + '% accuracy</div>');
    }

    field.addEventListener("focus", function () { field.classList.add("focus"); });
    field.addEventListener("blur", function () { field.classList.remove("focus"); });
    field.addEventListener("keydown", function (e) {
      if (done) return;
      if (e.key === "Backspace") {
        e.preventDefault();
        if (pos > 0) {
          spans[pos].classList.remove("cur"); spans[pos].classList.add("todo");
          pos--;
          var prev = spans[pos];
          /* undo its correct/incorrect scoring */
          if (prev.classList.contains("ok")) correct--;
          if (prev.classList.contains("ok") || prev.classList.contains("bad")) typed--;
          prev.classList.remove("ok", "bad", "todo"); prev.classList.add("cur");
        }
        stats();
        return;
      }
      if (e.key.length !== 1 || e.ctrlKey || e.metaKey || e.altKey) return;  /* ignore non-character keys */
      e.preventDefault();
      if (pos >= text.length) return;
      if (!started) started = Date.now();
      var want = text[pos];
      typed++;
      spans[pos].classList.remove("cur");
      if (e.key === want) { spans[pos].classList.add("ok"); correct++; }
      else { spans[pos].classList.add("bad"); }
      pos++;
      if (pos < text.length) spans[pos].classList.add("cur");
      stats();
      if (pos >= text.length) finish();
    });

    content.querySelector("#ty-restart").addEventListener("click", function () {
      runTyping(content, title, text, onFinish, backLabel, onBack);
    });
    content.querySelector("#ty-back").addEventListener("click", function () { if (onBack) onBack(); });

    setTimeout(function () { try { field.focus(); } catch (e) {} }, 30);
  }

  /* ── menus ── */
  function render(content) {
    style();
    var mode = "lessons";

    function draw() {
      var st = load();
      var tabs =
        '<div class="ty-tabs">' +
          '<button class="ty-tab' + (mode === "lessons" ? " on" : "") + '" data-m="lessons">⌨️ Lessons</button>' +
          '<button class="ty-tab' + (mode === "test" ? " on" : "") + '" data-m="test">⏱ Speed test</button>' +
        '</div>';

      var body;
      if (mode === "lessons") {
        var doneMap = st.lessonsDone || {}, bestL = st.bestByLesson || {};
        body = '<div class="ty-list">' + LESSONS.map(function (l) {
          var d = doneMap[l.id];
          var b = bestL[l.id];
          return '<button class="ty-item" data-lesson="' + l.id + '"><span class="n">' + esc(l.title) + '</span>' +
            '<span class="s">' + (d ? '<span class="done">✓ ' + (b ? b + " WPM" : "done") + '</span>' : "start") + '</span></button>';
        }).join("") + '</div>';
      } else {
        body = '<p class="ty-lead" style="margin-bottom:10px">Pick a passage and type it as fast and accurately as you can. Your best speed is saved.' +
          (st.bestWpm ? ' Personal best: <b style="color:var(--accent2,#39e3c8)">' + st.bestWpm + ' WPM</b>.' : '') + '</p>' +
          '<div class="ty-list">' + TESTS.map(function (t) {
            return '<button class="ty-item" data-test="' + t.id + '"><span class="n">' + esc(t.title) + '</span>' +
              '<span class="s">' + t.text.length + ' chars</span></button>';
          }).join("") + '</div>';
      }

      content.innerHTML = '<div class="ty"><h2>Typing Tutor</h2>' +
        '<p class="ty-lead">Learn to touch-type and build speed — part of the Tech track.</p>' +
        tabs + body + '</div>';

      content.querySelectorAll(".ty-tab").forEach(function (b) {
        b.addEventListener("click", function () { mode = this.getAttribute("data-m"); draw(); });
      });
      content.querySelectorAll("[data-lesson]").forEach(function (b) {
        b.addEventListener("click", function () {
          var l = LESSONS.filter(function (x) { return x.id === this.getAttribute("data-lesson"); }.bind(this))[0];
          runTyping(content, l.title, l.text, function (s) {
            var st2 = load();
            st2.lessonsDone = st2.lessonsDone || {}; st2.lessonsDone[l.id] = true;
            st2.bestByLesson = st2.bestByLesson || {};
            if (!st2.bestByLesson[l.id] || s.wpm > st2.bestByLesson[l.id]) st2.bestByLesson[l.id] = s.wpm;
            save(st2);
          }, "← Lessons", draw);
        });
      });
      content.querySelectorAll("[data-test]").forEach(function (b) {
        b.addEventListener("click", function () {
          var t = TESTS.filter(function (x) { return x.id === this.getAttribute("data-test"); }.bind(this))[0];
          runTyping(content, "Speed test — " + t.title, t.text, function (s) {
            var st2 = load();
            if (!st2.bestWpm || s.wpm > st2.bestWpm) { st2.bestWpm = s.wpm; save(st2); }
          }, "← Tests", draw);
        });
      });
    }
    draw();
  }

  window.Lab404Typing = { render: render };
})();
