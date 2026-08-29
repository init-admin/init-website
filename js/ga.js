/* ═══════════════════════════════════════════════════════════════
   Init Website — GA4 / Firebase Analytics bootstrap
   Included as <script src="js/ga.js"> in <head> on every page.

   Data stream: "init-website" Web app in the PRODUCTION Firebase
   project — events land in the same GA4 property as the mobile apps.

   Consent Mode v2: analytics_storage starts DENIED. js/consent.js
   flips it to 'granted' once the visitor accepts the banner (choice
   persisted in localStorage under 'analytics_consent').
═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* TODO: replace with the measurementId from the production Firebase
     project → Project settings → Your apps → init-website (Web).
     This is the ONLY place the ID lives. */
  var MEASUREMENT_ID = 'G-XXXXXXXXXX';

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  /* Deny every storage bucket until the visitor opts in. GA4 still
     sends cookieless pings in this state, so we keep coarse traffic
     numbers without setting the _ga cookie. */
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500
  });

  /* Re-apply a stored "granted" choice before the first hit. */
  try {
    if (localStorage.getItem('analytics_consent') === 'granted') {
      gtag('consent', 'update', { analytics_storage: 'granted' });
    }
  } catch (_) { /* localStorage unavailable */ }

  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID, {
    send_page_view: true,
    anonymize_ip: true
  });

  /* Load the gtag library (single source of truth for the ID). */
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
  document.head.appendChild(s);
})();
