/* ═══════════════════════════════════════════════════════════════
   Init Website — analytics consent banner
   Shows once until the visitor chooses. "Accept" grants
   analytics_storage (Consent Mode v2) and lets GA4 set the _ga
   cookie; "Decline" keeps it denied (cookieless pings only).
   Choice persisted in localStorage under 'analytics_consent'.
═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var KEY = 'analytics_consent';

  function stored() {
    try { return localStorage.getItem(KEY); } catch (_) { return null; }
  }

  function save(value) {
    try { localStorage.setItem(KEY, value); } catch (_) { /* ignore */ }
  }

  // Already chosen — nothing to show.
  if (stored() === 'granted' || stored() === 'denied') return;

  function decide(value) {
    save(value);
    if (value === 'granted' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
    }
    var el = document.getElementById('cookieConsent');
    if (el) el.remove();
  }

  function build() {
    var bar = document.createElement('div');
    bar.id = 'cookieConsent';
    bar.className = 'cookie-consent';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Analytics consent');

    var text = document.createElement('p');
    text.className = 'cookie-consent-text';
    text.setAttribute('data-i18n', 'cookie_consent_text');
    text.innerHTML = 'We use Google Analytics to understand how this site is used. ' +
      'Analytics cookies are only set if you accept. See our ' +
      '<a href="cookie-policy.html">Cookie Policy</a>.';

    var actions = document.createElement('div');
    actions.className = 'cookie-consent-actions';

    var decline = document.createElement('button');
    decline.type = 'button';
    decline.className = 'cookie-consent-btn cookie-consent-decline';
    decline.setAttribute('data-i18n', 'cookie_consent_decline');
    decline.textContent = 'Decline';
    decline.addEventListener('click', function () { decide('denied'); });

    var accept = document.createElement('button');
    accept.type = 'button';
    accept.className = 'cookie-consent-btn cookie-consent-accept';
    accept.setAttribute('data-i18n', 'cookie_consent_accept');
    accept.textContent = 'Accept';
    accept.addEventListener('click', function () { decide('granted'); });

    actions.appendChild(decline);
    actions.appendChild(accept);
    bar.appendChild(text);
    bar.appendChild(actions);
    document.body.appendChild(bar);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
