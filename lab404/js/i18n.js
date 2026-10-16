/* i18n.js (F5) — selectable UI language for the shell chrome (ESL support).
   Translates elements tagged with data-i18n / data-i18n-ph. English is the source;
   additional languages live in DICT. Lesson content stays in its original language.
   A 🌐 button in the taskbar tray switches language; the choice is saved per device. */
(function () {
  "use strict";
  var KEY = "lab404.lang";
  var LANGS = ["en", "es"];            /* add more codes + a DICT entry to grow */
  var LABEL = { en: "EN", es: "ES" };

  var DICT = {
    es: {
      "boot.tagline": "Aprendizaje gratuito de todas las materias · de primaria a la universidad · privado y sin conexión",
      "brand.sub": "Centro de estudio — todas las materias, gratis",
      "search.ph": "Buscar en todo…",
      "nav.launch": "INICIO",
      "nav.myGrade": "Mi grado",
      "sec.subjects": "Materias",
      "sec.tools": "Herramientas de estudio",
      "tool.practice": "Examen de práctica",
      "tool.flashcards": "Tarjetas",
      "tool.review": "Lista de repaso",
      "tool.glossary": "Glosario",
      "tool.notepad": "Notas",
      "tool.data": "Gestor de datos",
      "tool.skills": "Resumen de destrezas",
      "tool.typing": "Mecanografía",
      "tool.families": "Para padres y maestros",
      "privacy.badge": "🔒 Sin cuentas · Sin anuncios · Sin rastreo · Funciona sin conexión",
      "ctx.comptia": "Abrir CompTIA",
      "ctx.review": "Lista de repaso",
      "ctx.reset": "Restablecer iconos",
      "ctx.about": "Acerca de"
    }
  };

  var lang = "en";
  try { var r = localStorage.getItem(KEY); if (r && LANGS.indexOf(r) >= 0) lang = r; } catch (e) {}

  function t(key) {
    if (lang === "en") return null;              /* null => use the original text */
    var d = DICT[lang]; return (d && d[key] != null) ? d[key] : null;
  }

  function apply() {
    var els = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) {
      var el = els[i], k = el.getAttribute("data-i18n");
      if (el._i18nOrig == null) el._i18nOrig = el.textContent;     /* remember source once */
      var tr = t(k);
      el.textContent = tr != null ? tr : el._i18nOrig;
    }
    var phs = document.querySelectorAll("[data-i18n-ph]");
    for (i = 0; i < phs.length; i++) {
      var p = phs[i], pk = p.getAttribute("data-i18n-ph");
      if (p._i18nOrigPh == null) p._i18nOrigPh = p.getAttribute("placeholder") || "";
      var pt = t(pk);
      p.setAttribute("placeholder", pt != null ? pt : p._i18nOrigPh);
    }
    try { document.documentElement.setAttribute("lang", lang); } catch (e) {}
    var btn = document.getElementById("langBtn");
    if (btn) { btn.textContent = LABEL[lang]; }
  }

  function setLang(l) {
    if (LANGS.indexOf(l) < 0) return;
    lang = l;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    apply();
  }
  function cycle() { setLang(LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length]); }

  function addButton() {
    var tray = document.querySelector(".taskbar-tray");
    if (!tray || document.getElementById("langBtn")) return;
    if (!document.getElementById("lang-style")) {
      var s = document.createElement("style"); s.id = "lang-style";
      s.textContent = ".lang-btn{display:inline-flex;align-items:center;gap:3px;min-width:26px;height:26px;padding:0 6px;border-radius:7px;border:1px solid var(--border,#2a3432);background:transparent;color:inherit;font:700 11px/1 system-ui,sans-serif;cursor:pointer;opacity:.82}.lang-btn:hover{opacity:1;border-color:var(--accent2,#39e3c8);color:var(--accent2,#39e3c8)}";
      document.head.appendChild(s);
    }
    var btn = document.createElement("button");
    btn.className = "lang-btn"; btn.id = "langBtn"; btn.type = "button";
    btn.title = "Language / Idioma";
    btn.setAttribute("aria-label", "Change language");
    btn.textContent = LABEL[lang];
    btn.addEventListener("click", function (e) { e.stopPropagation(); cycle(); });
    var clock = document.getElementById("taskbarClock");
    if (clock) tray.insertBefore(btn, clock); else tray.appendChild(btn);
  }

  function init() { apply(); addButton(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.Lab404I18n = { apply: apply, setLang: setLang, get: function () { return lang; } };
})();
