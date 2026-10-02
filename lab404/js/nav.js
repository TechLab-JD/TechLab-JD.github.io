/* nav.js — Sticky nav, smooth scroll, active section tracking */
(function () {
  "use strict";

  function init() {
    setupSmoothScroll();
    setupActiveTracking();
    setupMobileMenu();
  }

  function setupSmoothScroll() {
    document.querySelectorAll("a[href^='#']").forEach(function (link) {
      link.addEventListener("click", function (e) {
        const id = this.getAttribute("href").slice(1);
        const target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        const navHeight = 60;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top: top, behavior: "smooth" });
      });
    });
  }

  function setupActiveTracking() {
    const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
    if (navLinks.length === 0) return;

    const sections = Array.from(navLinks)
      .map(function (link) {
        const id = link.getAttribute("href").slice(1);
        return document.getElementById(id);
      })
      .filter(Boolean);

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(function (link) {
              link.classList.toggle("active", link.getAttribute("href") === "#" + id);
            });
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach(function (s) { observer.observe(s); });
  }

  function setupMobileMenu() {
    const toggle = document.querySelector(".nav-mobile-toggle");
    const menu = document.querySelector(".nav-mobile-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open.toString());
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Fade-in via IntersectionObserver */
  function setupFadeIns() {
    const els = document.querySelectorAll(".fade-in");
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach(function (el) { io.observe(el); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { init(); setupFadeIns(); });
  } else {
    init();
    setupFadeIns();
  }
})();
