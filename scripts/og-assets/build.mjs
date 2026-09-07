import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

mkdirSync('out', { recursive: true });

const fontFiles = [
  'fonts/Oswald-Bold.ttf',
  'fonts/SpaceMono-Bold.ttf',
  'fonts/Inter-Regular.ttf',
];

function render(svgPath, outPath, fitTo) {
  const svg = readFileSync(svgPath, 'utf8');
  const r = new Resvg(svg, {
    fitTo,
    font: { fontFiles, loadSystemFonts: false, defaultFontFamily: 'Inter' },
    background: 'rgba(0,0,0,0)',
    shapeRendering: 2,
    textRendering: 2,
    imageRendering: 0,
  });
  const png = r.render().asPng();
  writeFileSync(outPath, png);
  console.log(outPath.padEnd(24), png.length, 'bytes');
}

render('favicon.svg',  'out/favicon-192.png', { mode: 'width', value: 192 });
render('favicon.svg',  'out/favicon-32.png',  { mode: 'width', value: 32 });
render('og-image.svg', 'out/og-image.png',    { mode: 'width', value: 1200 });
