# Init — Landing Page

Marketing landing page for [Init](https://initmatch.com) — the mutual interest matching app.

## Live Site

**[https://initmatch.com](https://initmatch.com)**

Hosted on GitHub Pages. Deploys automatically on every push to `main`.

## Stack

Static HTML + CSS + JS. No framework, no build step.

| File | Purpose |
|---|---|
| `index.html` | All page structure and content |
| `css/style.css` | Styles — 3 themes: dark (default), light, init |
| `js/main.js` | Translations (EN/HI), FAQ, theme switching, scroll animations |

## Local Development

```bash
npx serve -l 3333 .
# Open http://localhost:3333
```

## Syncing App Icons

Category icons in the "Init is for" section are sourced from the app's icon libraries. Run this after updating icons in the app:

```bash
node scripts/sync-category-icons.js
```

Reads SVG paths directly from `../init/mobile/node_modules` (lucide-react-native + phosphor-react-native) and patches `index.html` automatically.

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) → GitHub Pages → live at initmatch.com.

```bash
# Feature branch workflow
git checkout -b fix/your-change
# ... make changes ...
git push origin fix/your-change
gh pr create    # merge to main triggers auto-deploy
```

## Related

- **App repo**: [init-admin/init](https://github.com/init-admin/init) — React Native mobile app + backend
