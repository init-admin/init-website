/* ═══════════════════════════════════════════════════════════════
   Init — home hero vibe-pill rotator
   Each field (Lounge / Init) has exactly 3 fixed "slot" chips in the
   DOM. This rotates a longer content list through those 3 slots one
   at a time, fading the old phrase out and the new one in. Because
   only 3 elements ever exist, the on-screen count can never exceed 3
   — unlike the old design (one element per phrase, each on its own
   independent random CSS animation), where "never more than N at
   once" wasn't actually enforceable.
═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var REDUCED_MOTION = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  var ICON = {
    // Lounge
    vibe_gym_buddy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    vibe_walk_dog: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 0-5 5v3.5a3.5 3.5 0 0 0 6.1 2.33c.6-.68 1.2-1.02 1.9-1.02s1.3.34 1.9 1.02A3.5 3.5 0 0 0 20 18.5V17a5 5 0 0 0-5-5c-.7 0-1.4.15-2 .44A5 5 0 0 0 9 10Z"/></svg>',
    vibe_catchup_tech: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg>',
    vibe_ping_pong: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="9" r="5"/><path d="M12.5 12.5 20 20"/></svg>',
    vibe_beer_bbq: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3h14l-1.4 15.2a2 2 0 0 1-2 1.8H8.4a2 2 0 0 1-2-1.8Z"/><path d="M5.5 8h13"/></svg>',
    vibe_catchup_politics: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11v3a1 1 0 0 0 1 1h2l4 5v-14l-4 5H4a1 1 0 0 0-1 1Z"/><path d="M15 9a3 3 0 0 1 0 6"/><path d="M18 6a7 7 0 0 1 0 12"/></svg>',
    vibe_chess: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="0.8" fill="currentColor"/><circle cx="15.5" cy="8.5" r="0.8" fill="currentColor"/><circle cx="12" cy="12" r="0.8" fill="currentColor"/><circle cx="8.5" cy="15.5" r="0.8" fill="currentColor"/><circle cx="15.5" cy="15.5" r="0.8" fill="currentColor"/></svg>',
    vibe_drinking_buddy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M5 3h14l-7 9-7-9Z"/></svg>',
    vibe_quick_run: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"/></svg>',
    vibe_talk_cars: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>',
    // Init
    vibe_something_unsaid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    vibe_want_hangout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10l-1.2 9.6a3.8 3.8 0 0 1-7.6 0Z"/><path d="M12 22v-7"/><path d="M8 22h8"/></svg>',
    vibe_admired_colleague: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
    vibe_gym_mate_unasked: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    vibe_do_they_like_you: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>',
    vibe_thinking_propose: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9Z"/><path d="M11 3 8 9l4 12 4-12-3-6"/><path d="M2 9h20"/></svg>',
  };

  var LOUNGE_KEYS = ['vibe_gym_buddy', 'vibe_walk_dog', 'vibe_catchup_tech', 'vibe_ping_pong', 'vibe_beer_bbq', 'vibe_catchup_politics', 'vibe_chess', 'vibe_drinking_buddy', 'vibe_quick_run', 'vibe_talk_cars'];
  var INIT_KEYS = ['vibe_something_unsaid', 'vibe_want_hangout', 'vibe_admired_colleague', 'vibe_gym_mate_unasked', 'vibe_do_they_like_you', 'vibe_thinking_propose'];

  var FADE_MS = 1100;
  var ROTATE_INTERVAL_MS = 5000;

  function t(key) {
    if (window.__i18n && typeof window.__i18n.t === 'function') return window.__i18n.t(key);
    return key;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function createRotator(fieldId, keys) {
    var field = document.getElementById(fieldId);
    if (!field) return null;
    var slots = Array.prototype.slice.call(field.querySelectorAll('.vibe-chip'));
    if (!slots.length) return null;

    var queue = shuffle(keys);
    var qi = 0;
    var currentKey = slots.map(function () { return null; });

    function nextKey(excludeIdx) {
      var avoid = currentKey.filter(function (_, i) { return i !== excludeIdx; });
      // Bounded by keys.length: with more content items than slots,
      // there's always at least one candidate not currently shown by
      // another slot, so this can't loop forever.
      for (var attempts = 0; attempts < keys.length; attempts++) {
        if (qi >= queue.length) { queue = shuffle(keys); qi = 0; }
        var candidate = queue[qi++];
        if (avoid.indexOf(candidate) === -1) return candidate;
      }
      return queue[0];
    }

    function render(slot, key) {
      var iconEl = slot.querySelector('.vibe-chip-icon');
      var textEl = slot.querySelector('.vibe-chip-text');
      if (iconEl) iconEl.innerHTML = ICON[key] || '';
      if (textEl) textEl.textContent = t(key);
    }

    function reveal(idx, key) {
      currentKey[idx] = key;
      render(slots[idx], key);
      if (REDUCED_MOTION) {
        slots[idx].classList.add('visible');
        return;
      }
      // Force a style flush between rendering the new text and adding
      // the class, so the opacity transition actually runs instead of
      // jumping straight to the end state. A short setTimeout is used
      // instead of double-rAF — rAF doesn't fire in a backgrounded tab,
      // which would otherwise leave chips permanently invisible.
      setTimeout(function () { slots[idx].classList.add('visible'); }, 20);
    }

    function cycle(idx) {
      slots[idx].classList.remove('visible');
      setTimeout(function () { reveal(idx, nextKey(idx)); }, REDUCED_MOTION ? 0 : FADE_MS);
    }

    slots.forEach(function (slot, idx) {
      setTimeout(function () { reveal(idx, nextKey(idx)); }, REDUCED_MOTION ? 0 : idx * 900);
    });

    var timer = null;
    if (!REDUCED_MOTION) {
      timer = setInterval(function () {
        cycle(Math.floor(Math.random() * slots.length));
      }, ROTATE_INTERVAL_MS);
    }

    return {
      redraw: function () {
        slots.forEach(function (slot, idx) {
          if (currentKey[idx]) render(slot, currentKey[idx]);
        });
      },
    };
  }

  function init() {
    var lounge = createRotator('loungeVibeField', LOUNGE_KEYS);
    var init_ = createRotator('initVibeField', INIT_KEYS);

    if (window.__i18n && typeof window.__i18n.onChange === 'function') {
      window.__i18n.onChange(function () {
        if (lounge) lounge.redraw();
        if (init_) init_.redraw();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
