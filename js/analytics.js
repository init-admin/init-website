/* ═══════════════════════════════════════════════════════════════
   Init Website — GA4 Event Tracking
   Tracks: section views, CTA clicks, scroll depth,
   nav clicks, language switches, theme toggles.
═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // Guard: skip if gtag isn't loaded (e.g. ad-blocker)
  if (typeof gtag !== 'function') return;

  /* ── Helper ───────────────────────────────────────────── */

  function track(event, params) {
    try { gtag('event', event, params); } catch (_) { /* ignore */ }
  }

  /* ── 1. Section view tracking ─────────────────────────── */
  // Fires once per section when it enters the viewport.

  var SECTIONS = ['home', 'how', 'categories', 'lounge', 'download'];
  var sectionSeen = {};

  if ('IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        if (id && !sectionSeen[id]) {
          sectionSeen[id] = true;
          track('section_view', { section: id });
        }
      });
    }, { threshold: 0.3 });

    SECTIONS.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });
  }

  /* ── 2. Scroll depth ──────────────────────────────────── */
  // Fires at 25%, 50%, 75%, 100% thresholds.

  var scrollFired = {};

  function getScrollPercent() {
    var h = document.documentElement;
    var body = document.body;
    var totalHeight = Math.max(body.scrollHeight, h.scrollHeight) - h.clientHeight;
    if (totalHeight <= 0) return 100;
    return Math.round((window.scrollY / totalHeight) * 100);
  }

  window.addEventListener('scroll', function () {
    var pct = getScrollPercent();
    [25, 50, 75, 100].forEach(function (threshold) {
      if (pct >= threshold && !scrollFired[threshold]) {
        scrollFired[threshold] = true;
        track('scroll_depth', { percent: threshold });
      }
    });
  }, { passive: true });

  /* ── 3. CTA clicks ────────────────────────────────────── */
  // Track clicks on primary action buttons.

  document.addEventListener('click', function (e) {
    var target = e.target.closest('a, button');
    if (!target) return;

    // "Get the app" / "How it works" hero CTAs
    if (target.classList.contains('btn-primary') && target.closest('.hero-cta')) {
      track('cta_click', { cta: 'get_the_app', location: 'hero' });
    }
    if (target.classList.contains('btn-outline') && target.closest('.hero-cta')) {
      track('cta_click', { cta: 'how_it_works', location: 'hero' });
    }

    // Store download buttons (both navbar and download section)
    if (target.classList.contains('store-btn')) {
      var label = target.getAttribute('aria-label') || '';
      var location = target.closest('.download') ? 'download_section' : 'navbar';
      var store = label.toLowerCase().indexOf('google') !== -1 ? 'google_play' : 'app_store';
      track('cta_click', { cta: 'store_button', store: store, location: location });
    }

    // Navbar mini store buttons
    if (target.classList.contains('nav-store-btn')) {
      var storeLabel = target.getAttribute('aria-label') || '';
      var storeName = storeLabel.toLowerCase().indexOf('google') !== -1 ? 'google_play' : 'app_store';
      track('cta_click', { cta: 'store_button', store: storeName, location: 'navbar' });
    }

    // "See the categories" link
    if (target.classList.contains('module-link')) {
      track('cta_click', { cta: 'see_categories', location: 'how_section' });
    }
  });

  /* ── 4. Nav link clicks ───────────────────────────────── */

  document.addEventListener('click', function (e) {
    var link = e.target.closest('.nav-links a, .mobile-nav a, .footer-col a[href^="#"]');
    if (!link) return;
    var href = link.getAttribute('href') || '';
    var section = href.replace('#', '');
    if (section) {
      var source = link.closest('.mobile-nav') ? 'mobile_nav'
                 : link.closest('.nav-links') ? 'navbar'
                 : 'footer';
      track('nav_click', { section: section, source: source });
    }
  });

  /* ── 5. Theme toggle ──────────────────────────────────── */

  var themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      // Read after the toggle in main.js has fired
      setTimeout(function () {
        var theme = document.documentElement.getAttribute('data-theme') || 'light';
        track('theme_toggled', { theme: theme });
      }, 50);
    });
  }

  /* ── 6. Language switch ───────────────────────────────── */

  var langDropdown = document.getElementById('langDropdown');
  if (langDropdown) {
    langDropdown.addEventListener('click', function (e) {
      var btn = e.target.closest('.lang-option');
      if (!btn) return;
      var lang = btn.getAttribute('data-lang') || btn.textContent.trim();
      track('language_switched', { language: lang });
    });
  }

  /* ── 7. Device & viewport (custom dimension, once) ───── */

  track('site_loaded', {
    viewport_width: window.innerWidth,
    viewport_height: window.innerHeight,
    device_type: window.innerWidth <= 560 ? 'mobile'
               : window.innerWidth <= 960 ? 'tablet'
               : 'desktop'
  });

})();
