#!/usr/bin/env node
/**
 * Syncs category icons from the app codebase into index.html.
 *
 * Run from the init-website root:
 *   node scripts/sync-category-icons.js
 *
 * Reads icon SVG paths from the app's node_modules (lucide-react-native +
 * phosphor-react-native) and replaces the SVG markup inside each .cat-card
 * in index.html.
 */

const fs = require('fs');
const path = require('path');

const APP_MOBILE = path.resolve(__dirname, '../../init/mobile');
const LUCIDE_DIR = path.join(APP_MOBILE, 'node_modules/lucide-react-native/dist/esm/icons');
const PHOSPHOR_DIR = path.join(APP_MOBILE, 'node_modules/phosphor-react-native/lib/module/defs');
const INDEX_HTML = path.resolve(__dirname, '../index.html');

// ── Icon definitions (mirrors categoryConfig.ts) ──────────────────────────
const ICONS = {
  'cat-crush':    { lib: 'lucide',   name: 'flame' },
  'cat-hangout':  { lib: 'phosphor', name: 'Cheers',       weight: 'fill' },
  'cat-love':     { lib: 'lucide',   name: 'heart-pulse' },
  'cat-date':     { lib: 'lucide',   name: 'calendar-heart' },
  'cat-marriage': { lib: 'lucide',   name: 'gem' },
  'cat-apology':  { lib: 'phosphor', name: 'HandsPraying', weight: 'fill' },
};

// ── Extract paths from a lucide ESM JS file ───────────────────────────────
function getLucidePaths(iconName) {
  const file = path.join(LUCIDE_DIR, `${iconName}.js`);
  const src = fs.readFileSync(file, 'utf8');

  // Each element: ["path"|"line"|"rect"|"polyline"|"circle"|"polygon", { d/x1/... }]
  const paths = [];
  const elementRe = /\[\s*"(path|line|rect|polyline|circle|polygon)"\s*,\s*\{([^}]+)\}/g;
  let m;
  while ((m = elementRe.exec(src)) !== null) {
    const tag = m[1];
    const attrs = m[2];
    const attrMap = {};
    const attrRe = /(\w[\w-]*):\s*"([^"]+)"/g;
    let a;
    while ((a = attrRe.exec(attrs)) !== null) {
      if (a[1] !== 'key') attrMap[a[1]] = a[2];
    }
    // Also capture numeric attrs (x, y, x1, y1, etc.)
    const numRe = /(\w[\w-]*):\s*(-?[\d.]+)(?=[,\s}])/g;
    while ((a = numRe.exec(attrs)) !== null) {
      if (a[1] !== 'key') attrMap[a[1]] = a[2];
    }
    const attrStr = Object.entries(attrMap).map(([k, v]) => `${k}="${v}"`).join(' ');
    paths.push(`<${tag} ${attrStr}/>`);
  }
  return { viewBox: '0 0 24 24', paths, stroke: true };
}

// ── Extract fill path from a phosphor defs JS file ────────────────────────
function getPhosphorPaths(iconName) {
  const file = path.join(PHOSPHOR_DIR, `${iconName}.js`);
  const src = fs.readFileSync(file, 'utf8');

  // Find the fill variant: ['fill', jsx(...Path, { d: "..." })]
  const fillIdx = src.indexOf("['fill'");
  if (fillIdx === -1) throw new Error(`No fill variant found in ${iconName}.js`);
  const chunk = src.slice(fillIdx, fillIdx + 5000);
  const dMatch = chunk.match(/d:\s*"((?:[^"\\]|\\.)*)"/);
  if (!dMatch) throw new Error(`No d= attr found in fill variant of ${iconName}.js`);
  return { viewBox: '0 0 256 256', paths: [`<path d="${dMatch[1]}"/>`], stroke: false };
}

// ── Build full <svg> string ───────────────────────────────────────────────
function buildSvg(icon) {
  const { viewBox, paths, stroke } = icon.lib === 'lucide'
    ? getLucidePaths(icon.name)
    : getPhosphorPaths(icon.name);

  const strokeAttrs = stroke
    ? ' fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"'
    : ' fill="currentColor"';

  return `<svg viewBox="${viewBox}"${strokeAttrs}>\n            ${paths.join('\n            ')}\n          </svg>`;
}

// ── Replace SVG inside a .cat-card block in index.html ────────────────────
function replaceIconInHtml(html, catClass, newSvg) {
  // Match the article with this class, then the cat-image-icon span inside it
  const articleRe = new RegExp(
    `(<article[^>]*class="[^"]*${catClass}[^"]*"[^>]*>[\\s\\S]*?<span[^>]*class="cat-image-icon"[^>]*aria-hidden="true">\\s*)(<svg[\\s\\S]*?<\\/svg>)(\\s*<\\/span>)`,
    'm'
  );
  if (!articleRe.test(html)) {
    console.warn(`⚠️  Could not find icon span for ${catClass}`);
    return html;
  }
  return html.replace(articleRe, `$1${newSvg}$3`);
}

// ── Main ──────────────────────────────────────────────────────────────────
let html = fs.readFileSync(INDEX_HTML, 'utf8');

for (const [catClass, icon] of Object.entries(ICONS)) {
  try {
    const svg = buildSvg(icon);
    html = replaceIconInHtml(html, catClass, svg);
    console.log(`✓ ${catClass} (${icon.lib}/${icon.name})`);
  } catch (err) {
    console.error(`✗ ${catClass}: ${err.message}`);
  }
}

fs.writeFileSync(INDEX_HTML, html, 'utf8');
console.log('\nDone. index.html updated.');
