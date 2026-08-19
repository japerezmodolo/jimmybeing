/* =========================================================================
   JIMMYBEING.COM — SITE LOGIC
   - Renders content from translations.js into the DOM
   - Handles language switching (EN default, remembers choice)
   - Handles the video placeholder modal + mobile nav toggle
   ========================================================================= */

(function () {
  "use strict";

  var DEFAULT_LANG = "en";
  var SUPPORTED = ["en", "es", "pt"];

  function getStoredLang() {
    try {
      var stored = window.localStorage.getItem("jimmybeing_lang");
      if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (e) {
      /* localStorage unavailable — ignore, fall back to default */
    }
    return null;
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem("jimmybeing_lang", lang);
    } catch (e) {
      /* ignore */
    }
  }

  function escapeAttr(str) {
    return String(str).replace(/"/g, "&quot;");
  }

  function renderTimeline(t) {
    var container = document.getElementById("timelineContainer");
    if (!container) return;
    var html = "";
    t.experience.timeline.forEach(function (item) {
      var bullets = item.bullets
        .map(function (b) {
          return "<li>" + b + "</li>";
        })
        .join("");

      var links = "";
      var posts = item.linkedinPosts || [];
      if (posts.length > 0) {
        links +=
          '<span class="timeline-links-label">' +
          t.experience.featuredPostsLabel +
          "</span>";
        posts.forEach(function (post, idx) {
          var label = post.title
            ? "“" + post.title + "”"
            : t.experience.linkedinLabel + (posts.length > 1 ? " " + (idx + 1) : "");
          links +=
            '<a class="timeline-link" href="' +
            escapeAttr(post.url) +
            '" target="_blank" rel="noopener">' +
            label +
            " ↗</a>";
        });
      } else {
        links +=
          '<a class="timeline-link link-placeholder" href="#" title="' +
          escapeAttr(t.experience.addLinkLabel) +
          ': LinkedIn">' +
          t.experience.linkedinLabel +
          "</a>";
      }
      if (item.isVenture) {
        if (item.instagram) {
          links +=
            '<a class="timeline-link" href="' +
            escapeAttr(item.instagram) +
            '" target="_blank" rel="noopener">' +
            t.experience.instagramLabel +
            " →</a>";
        } else {
          links +=
            '<a class="timeline-link link-placeholder" href="#" title="' +
            escapeAttr(t.experience.addLinkLabel) +
            ': Instagram">' +
            t.experience.instagramLabel +
            "</a>";
        }
      }

      html +=
        '<div class="timeline-item' +
        (item.isVenture ? " is-venture" : "") +
        '">' +
        '<div class="timeline-dot"></div>' +
        '<div class="timeline-content">' +
        '<span class="timeline-period">' +
        item.period +
        "</span>" +
        '<div class="timeline-head">' +
        "<h3>" +
        item.company +
        "</h3>" +
        (item.isVenture
          ? '<span class="badge badge-venture">' + t.experience.ventureBadge + "</span>"
          : "") +
        "</div>" +
        '<p class="timeline-role">' +
        item.role +
        "</p>" +
        '<span class="timeline-tag">' +
        item.tag +
        "</span>" +
        "<ul>" +
        bullets +
        "</ul>" +
        '<div class="timeline-links">' +
        links +
        "</div>" +
        "</div>" +
        "</div>";
    });
    container.innerHTML = html;
  }

  function renderEducation(t) {
    var container = document.getElementById("educationList");
    if (!container) return;
    var html = "";
    t.education.items.forEach(function (item) {
      html +=
        '<div class="education-item">' +
        '<span class="education-period">' +
        item.period +
        "</span>" +
        "<div>" +
        "<h3>" +
        item.school +
        "</h3>" +
        "<p>" +
        item.detail +
        "</p>" +
        "</div>" +
        "</div>";
    });
    container.innerHTML = html;
  }

  function renderSkills(t) {
    var container = document.getElementById("skillsGrid");
    if (!container) return;
    var groups = [
      { label: t.skills.languagesLabel, value: t.skills.languages },
      { label: t.skills.technicalLabel, value: t.skills.technical },
      { label: t.skills.businessLabel, value: t.skills.business },
    ];
    var html = "";
    groups.forEach(function (g) {
      html +=
        '<div class="skills-card">' +
        "<h4>" +
        g.label +
        "</h4>" +
        "<p>" +
        g.value +
        "</p>" +
        "</div>";
    });
    container.innerHTML = html;
  }

  function renderPersonal(t) {
    var container = document.getElementById("personalList");
    if (!container) return;
    var html = "";
    t.personal.items.forEach(function (item) {
      html += "<li>" + item + "</li>";
    });
    container.innerHTML = html;
  }

  function applyTranslations(lang) {
    var t = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];

    document.getElementById("html-root").setAttribute("lang", t.meta.htmlLang);
    document.title =
      lang === "es"
        ? "Jimmy Being — Jaime Pérez Modolo"
        : lang === "pt"
        ? "Jimmy Being — Jaime Pérez Modolo"
        : "Jimmy Being — Jaime Pérez Modolo";

    // Simple text/html nodes
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var path = el.getAttribute("data-i18n");
      var value = path.split(".").reduce(function (acc, key) {
        return acc && acc[key] !== undefined ? acc[key] : null;
      }, t);
      if (value !== null) el.innerHTML = value;
    });

    // title/aria attributes
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var path = el.getAttribute("data-i18n-title");
      var value = path.split(".").reduce(function (acc, key) {
        return acc && acc[key] !== undefined ? acc[key] : null;
      }, t);
      if (value !== null) el.setAttribute("title", value);
    });

    renderTimeline(t);
    renderEducation(t);
    renderSkills(t);
    renderPersonal(t);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    storeLang(lang);
    document.body.setAttribute("data-current-lang", lang);
  }

  function initLangSwitch() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyTranslations(btn.getAttribute("data-lang"));
      });
    });
  }

  function initVideoModal() {
    var placeholder = document.getElementById("videoPlaceholder");
    var modal = document.getElementById("videoModal");
    var closeBtn = document.getElementById("videoModalClose");
    if (!placeholder || !modal || !closeBtn) return;

    function openModal() {
      modal.classList.add("open");
    }
    function closeModal() {
      modal.classList.remove("open");
    }

    placeholder.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });
  }

  function initNavToggle() {
    var toggle = document.getElementById("navToggle");
    var nav = document.querySelector(".main-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  function initHeaderScroll() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    window.addEventListener("scroll", function () {
      header.classList.toggle("scrolled", window.scrollY > 12);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var initialLang = getStoredLang() || DEFAULT_LANG;
    applyTranslations(initialLang);
    initLangSwitch();
    initVideoModal();
    initNavToggle();
    initHeaderScroll();
  });
})();
