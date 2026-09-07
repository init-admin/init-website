# Social / favicon assets

Source SVGs + renderer for the postmark-style brand assets in `../../images/`:

| Source | Output |
|---|---|
| `og-image.svg` | `images/og-image.png` (1200×630, flattened to RGB) |
| `favicon.svg` | `images/favicon-192.png`, `images/favicon-32.png` |

## Regenerate

```bash
cd scripts/og-assets
npm i @resvg/resvg-js
# drop these three TTFs into ./fonts/ (from Google Fonts, OFL):
#   Oswald-Bold.ttf       github.com/google/fonts/tree/main/ofl/oswald
#   SpaceMono-Bold.ttf    github.com/google/fonts/tree/main/ofl/spacemono
#   Inter-Regular.ttf     github.com/google/fonts/tree/main/ofl/inter
node build.mjs            # writes to ./out/
```

Then copy `out/*.png` to `../../images/` and flatten `og-image.png` to RGB
(the OG spec dislikes alpha):

```bash
python -c "from PIL import Image; im=Image.open('out/og-image.png').convert('RGBA'); bg=Image.new('RGB',im.size,(242,230,205)); bg.paste(im,mask=im.split()[3]); bg.save('../../images/og-image.png',optimize=True)"
```

Fonts are not committed (OFL, ~1 MB). Text in `og-image.svg` is live `<text>`
rendered against the TTFs above — re-run after any copy change.
