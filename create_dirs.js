const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Create_websites\\VibeKit';

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. Directories
const dirs = [
  'src/app',
  'src/app/designs/[slug]',
  'src/app/prompts',
  'src/components/layout',
  'src/components/gallery',
  'src/components/preview',
  'src/components/prompt',
  'src/components/ui',
  'src/data',
  'src/lib',
  'src/types',
  'public/previews',
  'public/assets'
];

dirs.forEach(d => ensureDir(path.join(baseDir, d)));
console.log('Directories created successfully');
