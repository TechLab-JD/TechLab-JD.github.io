/* accordion.js — Expand/collapse topic sections */
(function () {
  "use strict";

  function initAccordions(root) {
    var container = root || document;
    var headers = container.querySelectorAll(".accordion-header");

    headers.forEach(function (header) {
      header.addEventListener("click", function () {
        var body = this.nextElementSibling;
        var isOpen = this.classList.contains("open");

        /* Optional: close others in same group */
        var group = this.closest(".accordion-group");
        if (group) {
          group.querySelectorAll(".accordion-header.open").forEach(function (other) {
            if (other !== header) {
              other.classList.remove("open");
              var otherBody = other.nextElementSibling;
              if (otherBody) otherBody.classList.remove("open");
            }
          });
        }

        this.classList.toggle("open", !isOpen);
        if (body) body.classList.toggle("open", !isOpen);
        this.setAttribute("aria-expanded", (!isOpen).toString());
      });
    });
  }

  /* Public API so chapter-loader can call after dynamic render */
  window.initAccordions = initAccordions;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { initAccordions(); });
  } else {
    initAccordions();
  }
})();
