/* assignments.js (R8) — a no-server assignment loop for teachers.
   A teacher picks a course + objectives, gets a shareable link; a student opens the
   link and sees a task list that jumps straight into each practice; the teacher imports
   the student's progress file into Class View to see who finished (completion logic in
   cohort.js). Everything is stateless in the URL or local — no accounts, no server.
   window.Lab404Assign = { encode, decode, renderBuilder, renderStudent } */
(function () {
  "use strict";

  function enc(o) {
    try { return btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
    catch (e) { return ""; }
  }
  function dec(s) {
    try { s = String(s).replace(/-/g, "+").replace(/_/g, "/"); return JSON.parse(decodeURIComponent(escape(atob(s)))); }
    catch (e) { return null; }
  }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function style() {
    if (document.getElementById("asg-style")) return;
    var st = document.createElement("style"); st.id = "asg-style";
    st.textContent =
      ".asg{padding:16px 18px;max-width:640px;margin:0 auto;box-sizing:border-box;font-size:.9rem}" +
      ".asg h2{font-size:1.15rem;color:var(--accent2,#39e3c8);margin:0 0 2px}" +
      ".asg .asg-lead{color:var(--text-muted,#9aa);font-size:.82rem;margin:0 0 14px;line-height:1.6}" +
      ".asg label{display:block;font-weight:700;font-size:.78rem;margin:12px 0 5px}" +
      ".asg select,.asg input[type=text]{width:100%;box-sizing:border-box;border:1px solid var(--border,#334);background:var(--surface,#10171f);color:var(--text,#dfe);border-radius:9px;padding:9px 11px;font:inherit}" +
      ".asg-objs{border:1px solid var(--border,#334);border-radius:10px;max-height:230px;overflow:auto;margin-top:4px}" +
      ".asg-obj{display:flex;gap:9px;align-items:flex-start;padding:8px 11px;border-bottom:1px solid var(--border,#334);cursor:pointer}" +
      ".asg-obj:last-child{border-bottom:0}.asg-obj input{margin-top:3px}" +
      ".asg-obj .t{font-size:.84rem}.asg-obj .c{font-size:.64rem;color:var(--text-muted,#9aa)}" +
      ".asg-row{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}" +
      ".asg-btn{border:1px solid var(--accent2,#39e3c8);background:var(--accent2,#39e3c8);color:#05211c;border-radius:9px;padding:9px 15px;font:inherit;font-weight:700;font-size:.82rem;cursor:pointer}" +
      ".asg-btn.ghost{background:transparent;color:var(--text,#dfe);border-color:var(--border,#334)}" +
      ".asg-link{margin-top:14px;border:1px solid var(--accent2,#39e3c8);border-radius:10px;padding:12px;background:rgba(57,227,200,.06)}" +
      ".asg-link input{margin-top:6px}" +
      ".asg-task{display:flex;align-items:center;gap:11px;border:1px solid var(--border,#334);border-radius:10px;padding:10px 13px;margin-bottom:7px}" +
      ".asg-task .n{font-weight:700;font-size:.9rem}.asg-task .s{font-size:.66rem;color:var(--text-muted,#9aa)}" +
      ".asg-task .go{margin-left:auto;border:1px solid var(--accent2,#39e3c8);background:transparent;color:var(--accent2,#39e3c8);border-radius:8px;padding:6px 12px;font:inherit;font-weight:700;font-size:.78rem;cursor:pointer}" +
      ".asg-note{border:1px solid var(--border,#334);border-radius:10px;padding:11px 13px;margin-top:12px;font-size:.78rem;line-height:1.5;background:var(--surface-2,rgba(127,127,127,.06))}";
    document.head.appendChild(st);
  }

  /* ---------- teacher: build an assignment ---------- */
  function renderBuilder(content) {
    style();
    var CO = window.LAB404_COURSES || {};
    var ids = Object.keys(CO).sort(function (a, b) { return (CO[a].title || a).localeCompare(CO[b].title || b); });
    content.innerHTML =
      '<div class="asg">' +
        '<h2>📋 Create an assignment</h2>' +
        '<p class="asg-lead">Pick a course and the skills to assign, then share the link. Students open it to a ready task list; collect their progress files in <b>Class View</b> to see who finished. No accounts, no server.</p>' +
        '<label for="asg-course">Course</label>' +
        '<select id="asg-course"><option value="">Choose a course…</option>' +
          ids.map(function (id) { return '<option value="' + esc(id) + '">' + esc(CO[id].title) + '</option>'; }).join("") +
        '</select>' +
        '<div id="asg-obj-wrap"></div>' +
        '<label for="asg-title" style="margin-top:14px">Assignment name</label>' +
        '<input type="text" id="asg-title" placeholder="e.g. Fractions review — due Friday">' +
        '<div class="asg-row"><button class="asg-btn" id="asg-make">🔗 Create assignment link</button></div>' +
        '<div id="asg-out"></div>' +
      '</div>';

    var sel = content.querySelector("#asg-course");
    sel.addEventListener("change", function () {
      var c = CO[sel.value], wrap = content.querySelector("#asg-obj-wrap");
      if (!c) { wrap.innerHTML = ""; return; }
      wrap.innerHTML = '<label style="margin-top:14px">Skills to assign <button class="asg-btn ghost" id="asg-all" style="padding:2px 9px;font-size:.7rem;margin-left:6px">Select all</button></label>' +
        '<div class="asg-objs">' + (c.objectives || []).map(function (o) {
          return '<label class="asg-obj"><input type="checkbox" value="' + esc(o.code) + '"><span><span class="t">' + esc(o.title) + '</span><br><span class="c">' + esc(o.code) + '</span></span></label>';
        }).join("") + '</div>';
      wrap.querySelector("#asg-all").addEventListener("click", function (e) {
        e.preventDefault();
        var boxes = wrap.querySelectorAll("input[type=checkbox]"); var allOn = [].every.call(boxes, function (b) { return b.checked; });
        boxes.forEach(function (b) { b.checked = !allOn; });
      });
    });

    content.querySelector("#asg-make").addEventListener("click", function () {
      var cid = sel.value, c = CO[cid];
      if (!c) { alert("Pick a course first."); return; }
      var objs = [].map.call(content.querySelectorAll("#asg-obj-wrap input:checked"), function (b) { return b.value; });
      if (!objs.length) { alert("Check at least one skill to assign."); return; }
      var title = (content.querySelector("#asg-title").value || "").trim() || c.title;
      var token = enc({ t: title, c: cid, o: objs });
      var url = location.origin + location.pathname + "?go=assign&a=" + token;
      var out = content.querySelector("#asg-out");
      out.innerHTML = '<div class="asg-link"><b>Share this link with your students:</b>' +
        '<input type="text" id="asg-url" readonly value="' + esc(url) + '">' +
        '<div class="asg-row"><button class="asg-btn" id="asg-copy">Copy link</button></div>' +
        '<div style="font-size:.72rem;color:var(--text-muted,#9aa);margin-top:6px">' + objs.length + ' skill' + (objs.length > 1 ? 's' : '') + ' from ' + esc(c.title) + '.</div></div>';
      var inp = out.querySelector("#asg-url");
      out.querySelector("#asg-copy").addEventListener("click", function () {
        var self = this; inp.focus(); inp.select();
        function ok() { self.textContent = "Copied!"; setTimeout(function () { self.textContent = "Copy link"; }, 1500); }
        try { if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(ok, function () { try { document.execCommand("copy"); } catch (e) {} ok(); }); else { document.execCommand("copy"); ok(); } } catch (e) { ok(); }
      });
    });
  }

  /* ---------- student: do the assignment ---------- */
  function renderStudent(content, a) {
    style();
    var CO = window.LAB404_COURSES || {};
    var c = CO[a.c];
    if (!c) { content.innerHTML = '<div class="asg"><h2>📋 Assignment</h2><p class="asg-lead">This assignment’s course isn’t available.</p></div>'; return; }
    var byCode = {}; (c.objectives || []).forEach(function (o) { byCode[o.code] = o; });
    var M = window.LAB404_MASTERY;
    var tasks = (a.o || []).map(function (code) {
      var o = byCode[code]; if (!o) return "";
      var s = M && M.objStats ? M.objStats(a.c, code) : { band: "none", seen: 0 };
      var statusTxt = s.band === "mastered" ? "✓ mastered" : s.seen > 0 ? "practiced" : "not started";
      return '<div class="asg-task"><span style="min-width:0"><span class="n">' + esc(o.title) + '</span><br><span class="s">' + esc(code) + ' · ' + statusTxt + '</span></span>' +
        '<button class="go" data-prac="' + esc(code) + '">Practice</button></div>';
    }).join("");
    content.innerHTML =
      '<div class="asg">' +
        '<h2>📋 ' + esc(a.t || "Assignment") + '</h2>' +
        '<p class="asg-lead">From your teacher · <b>' + esc(c.title) + '</b>. Do each skill below, then send your progress to your teacher.</p>' +
        tasks +
        '<div class="asg-note">✅ <b>When you’re done:</b> open <b>LAUNCH → the profile button → Export</b> and send the file to your teacher. They’ll check it off in Class View. Nothing is uploaded automatically.</div>' +
      '</div>';
    content.querySelectorAll("[data-prac]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (window.Desktop && Desktop.openWindow) Desktop.openWindow("course", { course: a.c, practice: this.getAttribute("data-prac") });
      });
    });
  }

  window.Lab404Assign = { encode: enc, decode: dec, renderBuilder: renderBuilder, renderStudent: renderStudent };
})();
