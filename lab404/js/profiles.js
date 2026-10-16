/* profiles.js — per-device learner profiles (no accounts, all local).
   Siblings can share one device without blending progress. Design: the app keeps
   using its normal lab404.* keys; this manager snapshots that whole set into the
   active profile when you switch, then restores the target profile's snapshot.
   No other module needs to change. */
(function () {
  "use strict";
  var PKEY = "lab404.profiles", AKEY = "lab404.activeProfile", SNAP = "lab404.profile.";
  /* The learning state that belongs to a learner (everything else is device-level). */
  var OWNED_EXACT = ["lab404.myGrade", "lab404.junior", "lab404.stdFramework", "lab404.progress",
    "study-streak-count", "study-streak-date", "aplus-theme",
    "aplus-checklist-c1", "aplus-checklist-c2", "aplus-checklist-terms-c1", "aplus-checklist-terms-c2"];
  var OWNED_PREFIX = ["lab404.mastery."];
  var EMOJI = ["🦊", "🐼", "🐵", "🦁", "🐸", "🐙", "🦄", "🐱", "🐶", "🐯", "🐷", "🐨"];

  function ls(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function del(k) { try { localStorage.removeItem(k); } catch (e) {} }
  function getProfiles() { try { return JSON.parse(ls(PKEY)) || []; } catch (e) { return []; } }
  function saveProfiles(a) { set(PKEY, JSON.stringify(a)); }
  function activeId() { return ls(AKEY); }
  function uid() { return "p" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5); }

  function isOwned(k) {
    if (OWNED_EXACT.indexOf(k) >= 0) return true;
    for (var i = 0; i < OWNED_PREFIX.length; i++) if (k.indexOf(OWNED_PREFIX[i]) === 0) return true;
    return false;
  }
  function ownedKeys() {
    var out = [];
    try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (isOwned(k)) out.push(k); } } catch (e) {}
    return out;
  }
  function snapshotLive() { var o = {}; ownedKeys().forEach(function (k) { o[k] = ls(k); }); return o; }
  function saveSnapshot(id) { set(SNAP + id, JSON.stringify(snapshotLive())); }
  function clearOwned() { ownedKeys().forEach(del); }
  function applySnapshot(id) {
    var s; try { s = JSON.parse(ls(SNAP + id) || "{}"); } catch (e) { s = {}; }
    Object.keys(s).forEach(function (k) { if (s[k] != null) set(k, s[k]); });
  }

  function ensureDefault() {
    var ps = getProfiles();
    if (!ps.length) {
      /* first run: adopt whatever single-user data already exists as "Learner 1" */
      var id = uid();
      ps = [{ id: id, name: "Learner 1", emoji: EMOJI[0] }];
      saveProfiles(ps); set(AKEY, id); saveSnapshot(id);
    } else if (!activeId() || !ps.some(function (p) { return p.id === activeId(); })) {
      set(AKEY, ps[0].id);
    }
  }

  function current() { var id = activeId(); return getProfiles().filter(function (p) { return p.id === id; })[0] || null; }

  function switchTo(id) {
    if (id === activeId()) { closeModal(); return; }
    var cur = activeId(); if (cur) saveSnapshot(cur);
    clearOwned(); set(AKEY, id); applySnapshot(id);
    location.reload();
  }
  function add(name, emoji) {
    var cur = activeId(); if (cur) saveSnapshot(cur);
    var id = uid(), ps = getProfiles();
    ps.push({ id: id, name: name || "Learner " + (ps.length + 1), emoji: emoji || EMOJI[ps.length % EMOJI.length] });
    saveProfiles(ps);
    clearOwned(); set(AKEY, id); set(SNAP + id, "{}");
    del("lab404.guide.seen.v1");   /* onboard the new learner (welcome + grade pick) */
    location.reload();
  }
  function rename(id, name) { var ps = getProfiles(); ps.forEach(function (p) { if (p.id === id) p.name = name; }); saveProfiles(ps); renderList(); updateMenu(); }
  function remove(id) {
    var ps = getProfiles(); if (ps.length <= 1) return;
    del(SNAP + id);
    var left = ps.filter(function (p) { return p.id !== id; }); saveProfiles(left);
    if (activeId() === id) { clearOwned(); set(AKEY, left[0].id); applySnapshot(left[0].id); location.reload(); }
    else { renderList(); updateMenu(); }
  }

  ensureDefault();

  /* ---------- UI ---------- */
  var overlay = null;
  function css() {
    if (document.getElementById("pf-style")) return;
    var s = document.createElement("style"); s.id = "pf-style";
    s.textContent = [
      ".pf-ov{position:fixed;inset:0;z-index:9998;display:flex;align-items:center;justify-content:center;padding:18px;background:rgba(4,8,10,.72);backdrop-filter:blur(4px)}",
      ".pf-card{box-sizing:border-box;width:min(460px,100%);max-width:100%;max-height:88vh;overflow:auto;background:#0f1619;border:1px solid #223;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.6);padding:20px;color:#dfecea;font-family:system-ui,-apple-system,Segoe UI,sans-serif;position:relative}",
      ".pf-eyebrow{font:600 11px/1 ui-monospace,monospace;letter-spacing:.14em;text-transform:uppercase;color:#39e3c8}",
      ".pf-card h2{margin:8px 0 2px;font-size:20px;color:#fff}",
      ".pf-sub{margin:0 0 14px;font-size:12.5px;color:#9fb0ad}",
      ".pf-x{position:absolute;top:14px;right:16px;background:none;border:0;color:#73857f;font-size:22px;cursor:pointer}.pf-x:hover{color:#dfecea}",
      ".pf-row{display:flex;align-items:center;gap:11px;border:1px solid #223;border-radius:11px;padding:9px 11px;margin-bottom:8px}",
      ".pf-row.on{border-color:#39e3c8;background:rgba(57,227,200,.07)}",
      ".pf-em{font-size:22px;flex:none}",
      ".pf-nm{flex:1;min-width:0;font-weight:600;font-size:14px;background:none;border:0;color:#eaf4f2;font-family:inherit}",
      ".pf-nm:focus{outline:1px solid #39e3c8;border-radius:5px}",
      ".pf-badge{font:600 10px/1 ui-monospace,monospace;color:#39e3c8;text-transform:uppercase;letter-spacing:.06em}",
      ".pf-sw{background:#2a3b3a;border:0;color:#dfecea;border-radius:7px;padding:6px 11px;font:600 12px system-ui;cursor:pointer}.pf-sw:hover{background:#39e3c8;color:#06201c}",
      ".pf-mini{background:none;border:0;color:#73857f;font-size:15px;cursor:pointer;padding:2px 4px}.pf-mini:hover{color:#f0695c}",
      ".pf-add{margin-top:12px;border-top:1px solid #223;padding-top:14px}",
      ".pf-emrow{display:flex;flex-wrap:wrap;gap:5px;margin:8px 0}",
      ".pf-emo{font-size:19px;background:none;border:1px solid transparent;border-radius:8px;padding:3px 5px;cursor:pointer}.pf-emo.on{border-color:#39e3c8;background:rgba(57,227,200,.1)}",
      ".pf-in{width:100%;box-sizing:border-box;background:#141d1f;border:1px solid #2a3b3a;border-radius:8px;padding:9px 11px;color:#eaf4f2;font:14px system-ui;margin-bottom:8px}",
      ".pf-go{background:#39e3c8;color:#06201c;border:0;border-radius:9px;padding:9px 16px;font:600 14px system-ui;cursor:pointer}.pf-go:hover{background:#5ef0d9}",
      ".pf-note{font-size:11px;color:#73857f;margin-top:12px;line-height:1.5}"
    ].join("");
    document.head.appendChild(s);
  }

  var pickEmoji = EMOJI[0];
  function renderList() {
    if (!overlay) return;
    var list = overlay.querySelector("#pf-list"); if (!list) return;
    var act = activeId();
    list.innerHTML = "";
    getProfiles().forEach(function (p) {
      var row = document.createElement("div"); row.className = "pf-row" + (p.id === act ? " on" : "");
      row.innerHTML = '<span class="pf-em">' + p.emoji + '</span>' +
        '<input class="pf-nm" value="" aria-label="Learner name">' +
        (p.id === act ? '<span class="pf-badge">Current</span>' : '<button class="pf-sw">Switch</button>') +
        '<button class="pf-mini" title="Remove">×</button>';
      var nm = row.querySelector(".pf-nm"); nm.value = p.name;
      nm.addEventListener("change", function () { rename(p.id, nm.value.trim() || p.name); });
      var sw = row.querySelector(".pf-sw"); if (sw) sw.addEventListener("click", function () { switchTo(p.id); });
      row.querySelector(".pf-mini").addEventListener("click", function () {
        if (getProfiles().length <= 1) return;
        remove(p.id);
      });
      list.appendChild(row);
    });
  }

  function build() {
    css();
    overlay = document.createElement("div"); overlay.className = "pf-ov";
    overlay.setAttribute("role", "dialog"); overlay.setAttribute("aria-modal", "true"); overlay.setAttribute("aria-label", "Learner profiles");
    overlay.innerHTML =
      '<div class="pf-card">' +
        '<button class="pf-x" aria-label="Close">×</button>' +
        '<div class="pf-eyebrow">Learners on this device</div>' +
        '<h2>Who’s studying?</h2>' +
        '<p class="pf-sub">Each learner keeps their own grade, progress and level — all saved on this device, no accounts.</p>' +
        '<div id="pf-list"></div>' +
        '<div class="pf-add">' +
          '<input class="pf-in" id="pf-name" placeholder="New learner’s name" maxlength="24">' +
          '<div class="pf-emrow" id="pf-emrow"></div>' +
          '<button class="pf-go" id="pf-addbtn">+ Add learner</button>' +
        '</div>' +
        '<p class="pf-note">Switching or adding a learner reloads the page so everything shows the right progress.</p>' +
      '</div>';
    document.body.appendChild(overlay);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) closeModal(); });
    overlay.querySelector(".pf-x").addEventListener("click", closeModal);
    var emrow = overlay.querySelector("#pf-emrow");
    EMOJI.forEach(function (em, i) {
      var b = document.createElement("button"); b.className = "pf-emo" + (i === 0 ? " on" : ""); b.textContent = em;
      b.addEventListener("click", function () { pickEmoji = em; emrow.querySelectorAll(".pf-emo").forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on"); });
      emrow.appendChild(b);
    });
    overlay.querySelector("#pf-addbtn").addEventListener("click", function () {
      var n = overlay.querySelector("#pf-name").value.trim();
      add(n, pickEmoji);
    });
    document.addEventListener("keydown", escClose);
  }
  function escClose(e) { if (e.key === "Escape") closeModal(); }
  function openModal() { if (!overlay) build(); overlay.style.display = "flex"; renderList(); }
  function closeModal() { if (overlay) overlay.style.display = "none"; document.removeEventListener("keydown", escClose); }

  function updateMenu() {
    var item = document.getElementById("smProfile"); if (!item) return;
    var c = current();
    var lbl = item.querySelector(".pf-lbl"), ic = item.querySelector(".menu-icon");
    if (lbl) lbl.textContent = c ? c.name : "Switch learner";
    if (ic && c) ic.textContent = c.emoji;
  }
  function addMenuItem() {
    var items = document.querySelector("#startMenu .start-menu-items");
    if (!items || document.getElementById("smProfile")) return;
    var btn = document.createElement("button");
    btn.className = "start-menu-item"; btn.id = "smProfile"; btn.setAttribute("role", "menuitem");
    var c = current();
    btn.innerHTML = '<span class="menu-icon">' + (c ? c.emoji : "👤") + '</span><span class="pf-lbl">' + (c ? c.name : "Switch learner") + '</span>';
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var sm = document.getElementById("startMenu"); if (sm) sm.setAttribute("hidden", "");
      openModal();
    });
    items.insertBefore(btn, items.firstChild);
  }

  window.Lab404Profiles = { open: openModal, current: current, list: getProfiles };

  function init() { addMenuItem(); updateMenu(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
