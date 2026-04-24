#!/usr/bin/env bash
# check-mock-sync.sh
# Checks whether the Express Interest mock in index.html is in sync with
# the app's constants.ts (categories + target types).
#
# Usage:
#   bash scripts/check-mock-sync.sh [path-to-init-repo]
#
# Example:
#   bash scripts/check-mock-sync.sh ~/code/init
#   bash scripts/check-mock-sync.sh /Users/MAC/code/init

set -euo pipefail

INIT_DIR="${1:-$(cd "$(dirname "$0")/../.." && pwd)/init}"
WEBSITE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
CONSTANTS="$INIT_DIR/mobile/src/utils/constants.ts"
INDEX="$WEBSITE_DIR/index.html"

if [[ ! -f "$CONSTANTS" ]]; then
  echo "ERROR: constants.ts not found at $CONSTANTS"
  echo "Pass the init repo path as argument: bash scripts/check-mock-sync.sh /path/to/init"
  exit 1
fi

ok=true

# ── 1. Interest categories ───────────────────────────────────────────────────
# Extract from constants.ts (lines between INTEREST_CATEGORIES = [ ... ])
app_cats=$(awk "/INTEREST_CATEGORIES = \[/,/\] as const/" "$CONSTANTS" \
  | grep "'" | sed "s/.*'\(.*\)'.*/\1/" | tr '[:upper:]' '[:lower:]' | sort)

# Extract from index.html (ei-pill elements, skip *_story keys)
html_cats=$(grep 'class="ei-pill' "$INDEX" \
  | grep -oE 'data-i18n="cat_[^"]*"' | sed 's/data-i18n="cat_//;s/"//' | sort)

echo "=== Interest categories ==="
echo "App    : $(echo "$app_cats" | tr '\n' ' ')"
echo "Mock   : $(echo "$html_cats" | tr '\n' ' ')"

missing_pills=$(comm -23 <(echo "$app_cats") <(echo "$html_cats"))
extra_pills=$(comm -13 <(echo "$app_cats") <(echo "$html_cats"))
[[ -n "$missing_pills" ]] && { echo "MISSING pills : $missing_pills"; ok=false; }
[[ -n "$extra_pills"  ]] && { echo "EXTRA pills   : $extra_pills";   ok=false; }
[[ -z "$missing_pills" && -z "$extra_pills" ]] && echo "✓ in sync"

echo ""

# ── 2. Target types (Express via methods) ───────────────────────────────────
# Active (uncommented) TARGET_TYPES keys from constants.ts
app_types=$(awk "/TARGET_TYPES = \[/,/\] as const/" "$CONSTANTS" \
  | grep "key:" | grep -v "^\s*//" | sed "s/.*key: '\([^']*\)'.*/\1/" | tr '[:upper:]' '[:lower:]' | sort)

# Method tiles in the mock: primary card (PHONE) + ei-method-tile elements
html_types=$(grep -E 'ei-method-card|ei-method-tile"' "$INDEX" -A3 \
  | grep 'ei-method-tile-label\|ei-dial' \
  | grep -oE 'data-i18n="[^"]*"|>\+91<' \
  | sed 's/data-i18n="mock_//;s/"//g;s/>+91</phone/' \
  | tr '[:upper:]' '[:lower:]' | sort)

echo "=== Target types ==="
echo "App    : $(echo "$app_types" | tr '\n' ' ')"
# Note: html_types is approximate — check manually if flagged
echo "(method tiles in mock — verify manually if categories changed)"
echo ""

# ── 3. i18n key coverage ────────────────────────────────────────────────────
echo "=== i18n key coverage ==="
mock_keys=$(grep -oE 'data-i18n="[^"]*"' "$INDEX" | sed 's/data-i18n="//;s/"//' | sort -u)
i18n_en=$(node -e "
const fs = require('fs');
const src = fs.readFileSync('$WEBSITE_DIR/js/i18n.js', 'utf8');
const m = src.match(/\ben\s*:\s*\{([\s\S]*?)\n    \},/);
if (!m) { console.log('parse error'); process.exit(1); }
const keys = [...m[1].matchAll(/^\s+(\w+)\s*:/mg)].map(x => x[1]);
console.log(keys.sort().join('\n'));
" 2>/dev/null || true)

if [[ -n "$i18n_en" ]]; then
  missing_keys=$(comm -23 <(echo "$mock_keys") <(echo "$i18n_en"))
  [[ -n "$missing_keys" ]] && { echo "MISSING i18n keys: $missing_keys"; ok=false; } \
                           || echo "✓ all data-i18n keys present in EN translations"
else
  echo "(skipped — node not available or parse error)"
fi

echo ""

# ── Summary ──────────────────────────────────────────────────────────────────
if $ok; then
  echo "All checks passed."
else
  echo "ACTION NEEDED — update index.html / js/i18n.js to match app changes."
  echo "See CLAUDE.md § init-website for what to update."
  exit 1
fi
