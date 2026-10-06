import { DESIGNS } from '@/data/designs';
import { PromptCompilerOptions, WireframeBlock } from '@/types/wireframeTypes';

export function compileWireframePrompt(options: PromptCompilerOptions): string {
  const { blocks, styleId, targetTool, framework = 'Next.js 15 (App Router) + Tailwind CSS + Lucide Icons', pageName = 'Landing Page' } = options;

  // Find style details
  const selectedDesign = DESIGNS.find(d => d.slug === styleId || d.id === styleId) || DESIGNS[0];
  const palette = selectedDesign.colorPalette;
  const styleName = selectedDesign.style;

  // 1. Generate ASCII Wireframe Visual Map
  const asciiTree = blocks.map((block, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    const elementsList = block.elements.length > 0 ? block.elements.join(', ') : 'Custom Content';
    return `[Block ${num}: ${block.title.toUpperCase()} (${block.layout})]
  ├── Goal: ${block.description || 'Standard section content'}
  ├── Elements: ${elementsList}
  └── Styling: ${block.specialNotes || 'Default aesthetic rules'}`;
  }).join('\n\n');

  // 2. Block Detailed Specifications
  const blockSpecs = blocks.map((block, idx) => {
    const num = idx + 1;
    return `### SECTION ${num}: ${block.title.toUpperCase()}
- **Layout Structure**: \`${block.layout}\`
- **What to build**: ${block.description || 'Implement modern high-converting section content.'}
- **Required Sub-Components**:
${block.elements.map(el => `  * [x] ${el}`).join('\n')}
${block.specialNotes ? `- **Special Visual Polish**: ${block.specialNotes}` : ''}`;
  }).join('\n\n');

  // 3. Tool-specific header formatting
  let toolHeader = '';
  if (targetTool === 'cursor') {
    toolHeader = `You are an expert full-stack engineer and UI designer using Cursor IDE. Build a complete, production-ready, single-file ${framework} implementation for "${pageName}".`;
  } else if (targetTool === 'claude') {
    toolHeader = `You are Claude 3.7 Sonnet, an elite frontend architect. Write clean, accessible, production-grade ${framework} code matching this exact wireframe specification for "${pageName}".`;
  } else if (targetTool === 'v0') {
    toolHeader = `Generate a modern, responsive landing page in Next.js 15 and Tailwind CSS with Lucide React icons based on this wireframe layout.`;
  } else {
    toolHeader = `Create a complete responsive ${framework} page based on the following wireframe architecture.`;
  }

  // 4. Full Structured Master Prompt
  const compiledPrompt = `${toolHeader}

## DESIGN SYSTEM & STYLE DNA: "${styleName.toUpperCase()}"
- **Aesthetic Vibe**: ${selectedDesign.tagline}
- **Background Color**: \`${palette.bg}\`
- **Surface / Card Color**: \`${palette.surface || 'rgba(255,255,255,0.05)'}\`
- **Accent Highlight**: \`${palette.accent}\`
- **Primary Text**: \`${palette.text}\`
- **Border Treatment**: \`${palette.border || '1px solid rgba(255,255,255,0.1)'}\`
- **Typography Pairing**: \`${selectedDesign.defaultFont || 'Inter'}, system-ui, sans-serif\`
- **Key Design Signatures**:
${selectedDesign.features.map(f => `  * ${f}`).join('\n')}

---

## VISUAL WIREFRAME ARCHITECTURE MAP
\`\`\`text
${asciiTree}
\`\`\`

---

## COMPONENT SPECIFICATIONS BY SECTION

${blockSpecs}

---

## ENGINEERING & IMPLEMENTATION CONSTRAINTS
1. **Next.js 15 Standard**:
   - Place \`'use client';\` at the top of the file.
   - Use standard React hooks (\`useState\`, \`useMemo\`) for all interactive elements (tabs, toggles, accordion items, interactive buttons).
2. **Tailwind CSS & Styling**:
   - Strictly use Tailwind CSS utility classes.
   - Incorporate exact hex codes for background (\`${palette.bg}\`), accent (\`${palette.accent}\`), and borders.
   - Fully responsive design: test and polish \`sm:\`, \`md:\`, and \`lg:\` breakpoints.
3. **Icons & Assets**:
   - Use standard \`lucide-react\` icons (e.g. \`ArrowRight\`, \`Sparkles\`, \`Check\`, \`Star\`, \`Terminal\`, \`Shield\`).
   - Do NOT use placeholder \`lorem ipsum\` — generate realistic, punchy, contextual SaaS copy.
4. **Output Format**:
   - Output the complete, fully functional, copy-pasteable React component ready to save in \`src/app/page.tsx\`. Zero ellipses (...), zero missing code.`;

  return compiledPrompt;
}

// Future AI Backend Integration Wrapper
// When backend AI is ready, replace this mock promise with `fetch('/api/prompt/generate', ...)`
export async function generateWireframePromptAI(options: PromptCompilerOptions): Promise<string> {
  // Simulate intelligent compilation latency
  await new Promise(resolve => setTimeout(resolve, 800));
  return compileWireframePrompt(options);
}
