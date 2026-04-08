/**
 * LetsCode — Main JavaScript
 * Handles navigation, scroll effects, AOS, Typed.js, Waypoints
 * No Bootstrap dependency
 */

(function () {
  "use strict";

  /* ── Scroll class on body (for header style change) ── */
  function toggleScrolled() {
    const body = document.body;
    window.scrollY > 80
      ? body.classList.add("scrolled")
      : body.classList.remove("scrolled");
  }
  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /* ── Mobile nav toggle ── */
  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const mobileCloseBtn = document.getElementById("mobile-nav-close");

  function openMobileNav() {
    document.body.classList.add("mobile-nav-active");
  }
  function closeMobileNav() {
    document.body.classList.remove("mobile-nav-active");
  }

  if (mobileToggle) mobileToggle.addEventListener("click", openMobileNav);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener("click", closeMobileNav);

  // Close mobile nav when clicking a hash link inside it
  document.querySelectorAll("#mobile-nav a").forEach(function (link) {
    link.addEventListener("click", closeMobileNav);
  });

  /* ── Desktop dropdown toggle ── */
  document.querySelectorAll(".dropdown-trigger").forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var list = this.nextElementSibling;
      if (list) list.classList.toggle("dropdown-active");
    });
  });

  // Close dropdowns on outside click
  document.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-dropdown-list.dropdown-active")
      .forEach(function (el) {
        el.classList.remove("dropdown-active");
      });
  });

  /* ── Mobile dropdown toggle ── */
  document
    .querySelectorAll(".mobile-dropdown-trigger")
    .forEach(function (trigger) {
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        var list = this.nextElementSibling;
        if (list) list.classList.toggle("hidden");
        // Rotate chevron
        var chevron = this.querySelector(".chevron-icon");
        if (chevron) chevron.classList.toggle("rotate-180");
      });
    });

  /* ── Preloader ── */
  var preloader = document.getElementById("preloader");
  if (preloader) {
    // Script loads afterInteractive so page is already ready — remove immediately
    preloader.style.opacity = "0";
    setTimeout(function () {
      preloader.remove();
    }, 400);
  }

  /* ── Scroll-to-top button ── */
  var scrollTopBtn = document.getElementById("scroll-top");

  function toggleScrollTop() {
    if (!scrollTopBtn) return;
    window.scrollY > 200
      ? scrollTopBtn.classList.add("active")
      : scrollTopBtn.classList.remove("active");
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /* ── AOS (Animate on Scroll) ── */
  function aosInit() {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 600,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    }
  }
  window.addEventListener("load", aosInit);

  /* ── Typed.js ── */
  window.addEventListener("load", function () {
    var selectTyped = document.querySelector(".typed");
    if (selectTyped && typeof Typed !== "undefined") {
      var items = selectTyped.getAttribute("data-typed-items");
      if (items) {
        new Typed(".typed", {
          strings: items.split(",").map(function (s) {
            return s.trim();
          }),
          loop: true,
          typeSpeed: 80,
          backSpeed: 40,
          backDelay: 2000,
        });
      }
    }
  });

  /* ── Waypoints — skill bar animation ── */
  window.addEventListener("load", function () {
    if (typeof Waypoint === "undefined") return;
    document.querySelectorAll("[data-skills-animate]").forEach(function (item) {
      new Waypoint({
        element: item,
        offset: "80%",
        handler: function () {
          item.querySelectorAll("[role='progressbar']").forEach(function (el) {
            el.style.width = el.getAttribute("aria-valuenow") + "%";
          });
        },
      });
    });
  });

  /* ── Hash scroll correction ── */
  window.addEventListener("load", function () {
    if (window.location.hash) {
      var section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(function () {
          var offset = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(offset || "0"),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  /* ── Scrollspy for nav links ── */
  var navlinks = document.querySelectorAll(".navlink, #mobile-nav a[href^='#']");

  function scrollspy() {
    navlinks.forEach(function (link) {
      if (!link.hash) return;
      var section = document.querySelector(link.hash);
      if (!section) return;
      var pos = window.scrollY + 200;
      if (
        pos >= section.offsetTop &&
        pos <= section.offsetTop + section.offsetHeight
      ) {
        navlinks.forEach(function (l) {
          l.classList.remove("active");
        });
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("load", scrollspy);
  document.addEventListener("scroll", scrollspy);
})();