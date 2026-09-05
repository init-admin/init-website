# Archive — "Init Match" marketing content (pre Lounge-first revamp)

**Snapshotted:** 2026-09-05, on branch `feature/website-lounge-first`.

## Why this exists

The Init mobile app hid the mutual-interest **Match** feature from its UI
(app PR [#615](https://github.com/init-admin/init/pull/615) — Home became
Lounge-only). The Match code still exists in the app and backend but is
unreachable from the UI, with no near-term plan to resurface it.

The marketing site was revamped to present Init purely as a **Lounge-first**
(location-based, check-in / vibe-matching) app. That revamp:

- deleted the homepage's dual-product teaser and the entire `#init-landing`
  section (phone-number mutual-interest pitch)
- removed the Init/Match `data-i18n` keys (`nav_init`, `home_hero_init_title`,
  `il_*`, `cat_*`, the Init `vibe_*` set, `mock_lounge_tab_init`) from `i18n.js`
- rewrote `privacy.html` / `terms.html` (and their upstream source docs in the
  `init` repo) to lead with Lounge and add location-data disclosures

## What's in here

Verbatim copies, as they were immediately before the revamp:

| File | Was |
|---|---|
| `index.html` | Dual-product homepage — `#lounge-landing` + `#init-landing` |
| `i18n.js` | All 11 languages incl. the Init/Match copy keys |
| `analytics.js` | `SECTIONS` array still listed `init-landing` |
| `privacy.html` | Described Init as "a mutual interest matching platform"; no Lounge/location disclosures |
| `terms.html` | §4 "How Init Works" = interest expression + privacy-preserving matching only |
| `cookie-policy.html` | Meta described "the Init mutual interest matching app" |
| `child-safety.html` | §1 "Init is a mutual interest matching platform" |
| `sync-category-icons.js` | Dev script that patched the six Init interest-category icons into `index.html`'s `.cat-card` blocks — dead once the "Init is for" section was removed (was at `scripts/sync-category-icons.js`) |

## Restoring the Match marketing content

1. Copy the relevant file(s) back over the live versions.
2. Re-add the removed `data-i18n` keys to every language block in `js/i18n.js`
   (this archive's `i18n.js` has them).
3. Re-add `'init-landing'` to `SECTIONS` in `js/analytics.js`.
4. Re-add the `.home-*`, `.landing-init`, `.steps.s-init`, `.usp-grid.u-init`
   rules to `css/v2.css` (recover from git history at the revamp commit's parent).
5. Legal: the upstream source docs
   (`init/docs/security-compliance/privacy-policy.md`,
   `terms-of-service.md`) are versioned in the `init` repo — recover the
   pre-revamp revision there.
