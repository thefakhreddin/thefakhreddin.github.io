// Run this whenever you add new files to projects/Christopher/:
//   node scripts/gen-christopher.js

const fs   = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '..', 'projects', 'Christopher');
const OUT_FILE   = path.join(__dirname, '..', 'js', 'christopher-assets.js');

const IMG_EXTS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp']);
const VID_EXTS = new Set(['.mp4', '.mov', '.webm', '.m4v']);

const files = fs.readdirSync(ASSETS_DIR)
  .filter(f => {
    const ext = path.extname(f).toLowerCase();
    return IMG_EXTS.has(ext) || VID_EXTS.has(ext);
  })
  .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

const content =
  `// Files from projects/Christopher/ — add filenames here, or run:\n` +
  `//   node scripts/gen-christopher.js\n` +
  `const CHRISTOPHER_ASSETS = ${JSON.stringify(files, null, 2)};\n`;

fs.writeFileSync(OUT_FILE, content, 'utf8');
console.log(`✓ ${files.length} assets written to js/christopher-assets.js`);
