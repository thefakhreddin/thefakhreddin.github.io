// Run this whenever you add new files to "projects/Aluminum Smelting Sensor/":
//   node scripts/gen-aluminum-smelting.js

const fs   = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '..', 'projects', 'Aluminum Smelting Sensor');
const OUT_FILE   = path.join(__dirname, '..', 'js', 'aluminum-smelting-assets.js');

const IMG_EXTS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp']);
const VID_EXTS = new Set(['.mp4', '.mov', '.webm', '.m4v']);
const SKIP     = new Set(['tn3.jpg']);

const files = fs.readdirSync(ASSETS_DIR)
  .filter(f => {
    if (SKIP.has(f)) return false;
    const ext = path.extname(f).toLowerCase();
    return IMG_EXTS.has(ext) || VID_EXTS.has(ext);
  })
  .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

const content =
  `// Files from "projects/Aluminum Smelting Sensor/" — run to regenerate:\n` +
  `//   node scripts/gen-aluminum-smelting.js\n` +
  `const ALUMINUM_SMELTING_ASSETS = ${JSON.stringify(files, null, 2)};\n`;

fs.writeFileSync(OUT_FILE, content, 'utf8');
console.log(`✓ ${files.length} assets written to js/aluminum-smelting-assets.js`);
