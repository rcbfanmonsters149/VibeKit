const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Create_websites\\VibeKit';
const p1 = JSON.parse(fs.readFileSync(path.join(baseDir, 'scripts', 'part1.json'), 'utf8'));
const p2 = JSON.parse(fs.readFileSync(path.join(baseDir, 'scripts', 'part2.json'), 'utf8'));
const p3 = JSON.parse(fs.readFileSync(path.join(baseDir, 'scripts', 'part3.json'), 'utf8'));

const allDesigns = [...p1, ...p2, ...p3];

// Save src/data/designs.ts
const tsContent = `import { Design } from "@/types";

export const DESIGNS: Design[] = ${JSON.stringify(allDesigns, null, 2)};
`;

fs.writeFileSync(path.join(baseDir, 'src', 'data', 'designs.ts'), tsContent, 'utf8');
console.log(`Merged ${allDesigns.length} designs into src/data/designs.ts`);
