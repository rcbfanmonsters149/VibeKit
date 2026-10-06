const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Create_websites\\VibeKit';
const previewsDir = path.join(baseDir, 'public', 'previews');

// Helper to write preview HTML
function writePreview(slug, title, htmlContent) {
  const dir = path.join(previewsDir, slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), htmlContent, 'utf8');
}

console.log('Preview helper initialized');
