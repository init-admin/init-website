/* ═══════════════════════════════════════════════════════════════
   Init — site scripts
   Theme toggle (light/dark), navbar scroll state,
   mobile nav, reveal-on-scroll.
═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const STORAGE_KEY = 'theme';
  const root = document.documentElement;

  /* ── Theme ─────────────────────────────────────────────── */

  function getSavedTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (_) { /* localStorage unavailable */ }
    return null;
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (_) { /* ignore */ }
  }

  // Initial theme: saved > current attribute > light default.
  const initial = getSavedTheme()
    || root.getAttribute('data-theme')
    || 'light';
  applyTheme(initial);

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ── Navbar scroll state ──────────────────────────────── */

  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 8) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Mobile nav ───────────────────────────────────────── */

  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
    mobileNav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') mobileNav.classList.remove('open');
    });
  }

  /* ── Download dropdown ────────────────────────────────── */

  const navDownload = document.getElementById('navDownload');
  const downloadToggle = document.getElementById('downloadToggle');
  if (navDownload && downloadToggle) {
    downloadToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = navDownload.classList.toggle('open');
      downloadToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', (e) => {
      if (!navDownload.contains(e.target)) {
        navDownload.classList.remove('open');
        downloadToggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navDownload.classList.contains('open')) {
        navDownload.classList.remove('open');
        downloadToggle.setAttribute('aria-expanded', 'false');
        downloadToggle.focus();
      }
    });
  }

  /* ── Hero slideshow ──────────────────────────────────── */

  const slides = document.querySelectorAll('.hero-slideshow .slide');
  if (slides.length > 1) {
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 4000);
  }

  /* ── Reveal on scroll ─────────────────────────────────── */

  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach((el) => io.observe(el));
  } else {
    // Fallback — no IO support: show everything.
    revealEls.forEach((el) => el.classList.add('in'));
  }
})();
