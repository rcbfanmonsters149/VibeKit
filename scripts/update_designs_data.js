const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'designs.ts');
const fileContent = fs.readFileSync(filePath, 'utf8');

// The 5 comparison designs
const comparisonDesigns = [
  {
    id: "1",
    slug: "minimal-clean",
    title: "Design 1 — Minimal / Clean",
    tagline: "Lots of whitespace, simple typography, subtle borders, restrained visual elements",
    description: "A pure Swiss and Scandinavian-inspired minimalist design for PulseOS. Prioritizes generous whitespace, understated monochrome palette, delicate 1px neutral borders, restrained flat cards, and clean typography.",
    category: "style-comparison",
    style: "Minimal / Clean",
    difficulty: "Beginner",
    mode: "light",
    fontType: "sans",
    defaultFont: "Inter",
    tags: ["Minimalist", "Clean", "Whitespace", "Subtle Borders", "Monochrome"],
    features: [
      "Airy spacious layout with high whitespace padding and relaxed line heights",
      "Hairline 1px subtle neutral borders with zero loud drop shadows",
      "Restrained typography scale with clean Inter sans-serif",
      "Flat rectangular cards with subtle border hover transitions",
      "Monochrome high-contrast CTA buttons and minimalist inputs"
    ],
    colorPalette: { name: "Chalk & Charcoal", bg: "#ffffff", accent: "#171717", text: "#171717" },
    previewUrl: "/previews/minimal-clean/index.html",
    stats: { likes: 1820, views: "28.4k", vibecoders: "5.2k" },
    aiPrompt: {
      standard: "Create a Minimal / Clean SaaS page for PulseOS. Lots of whitespace, simple typography, subtle 1px gray borders, restrained visual elements, flat rectangular cards, monochrome black/white CTA buttons, and airy layout.",
      cursorPrompt: "Build a Minimal / Clean Tailwind page for PulseOS with lots of whitespace, subtle borders, restrained typography, and flat cards.",
      v0Prompt: "Minimal clean white SaaS page for PulseOS with generous padding, subtle borders, and simple typography.",
      claudePrompt: "Design a minimalist, restrained interface with subtle 1px borders, ample whitespace, and calm typography."
    },
    code: {
      react: "import DesignMinimalClean from '@/components/variations/DesignMinimalClean';\nexport default function Page() { return <DesignMinimalClean />; }",
      html: "<!-- See public/previews/minimal-clean/index.html -->"
    }
  },
  {
    id: "2",
    slug: "glassmorphism",
    title: "Design 2 — Glassmorphism",
    tagline: "Frosted-glass cards, transparency, blur effects, soft gradients, layered backgrounds",
    description: "A modern frosted-glass visual treatment featuring multi-layer backdrop blur filters, glowing ambient mesh gradient orbs, specular white highlights, iridescent accents, and pillowy translucent cards.",
    category: "style-comparison",
    style: "Glassmorphism",
    difficulty: "Intermediate",
    mode: "dark",
    fontType: "sans",
    defaultFont: "Plus Jakarta Sans",
    tags: ["Glassmorphism", "Backdrop Blur", "Aurora Glow", "Soft Gradients", "Frosted Glass"],
    features: [
      "Multi-layer backdrop-blur-2xl with semi-transparent frosted cards",
      "Ambient colorful glowing mesh orbs (cyan, violet, indigo, pink)",
      "Specular highlight borders (1px white/20 and border-t-white/30)",
      "Soft layered elevation shadows with subtle colored refractions",
      "Glossy gradient buttons with luminous backdrop reflections"
    ],
    colorPalette: { name: "Prismatic Aurora & Fuchsia", bg: "#0d0a21", accent: "#ec4899", text: "#ffffff" },
    previewUrl: "/previews/glassmorphism/index.html",
    stats: { likes: 2340, views: "34.1k", vibecoders: "6.8k" },
    aiPrompt: {
      standard: "Build a Glassmorphism design variation for PulseOS: Frosted-glass cards, backdrop-blur-3xl, transparency, multi-color aurora mesh gradient orbs (fuchsia, cyan, pink), specular highlight borders, and translucent glossy buttons.",
      cursorPrompt: "Create a Glassmorphic UI with backdrop-blur-3xl, border-white/30, glowing fuchsia/cyan radial gradients, and translucent frosted glass panels.",
      v0Prompt: "Glassmorphism UI with frosted glass cards, blur effects, vibrant aurora gradients, and glossy buttons.",
      claudePrompt: "Design a glassmorphic interface with translucent cards, specular highlights, and ambient multi-color light glows."
    },
    code: {
      react: "import DesignGlassmorphism from '@/components/variations/DesignGlassmorphism';\nexport default function Page() { return <DesignGlassmorphism />; }",
      html: "<!-- See public/previews/glassmorphism/index.html -->"
    }
  },
  {
    id: "3",
    slug: "bold-modern",
    title: "Design 3 — Bold / Modern",
    tagline: "High-voltage flame orange, jet carbon, heavy 900 typography, prominent buttons, aggressive spacing",
    description: "A high-impact, punchy modern design featuring heavyweight bold 900 typography, jet carbon contrast, saturated electric flame orange accents, large prominent buttons, and aggressive asymmetric bento grids.",
    category: "style-comparison",
    style: "Bold / Modern",
    difficulty: "Advanced",
    mode: "dark",
    fontType: "sans",
    defaultFont: "Plus Jakarta Sans",
    tags: ["Bold Typography", "High Contrast", "Flame Orange", "Jet Carbon", "Modern Bento"],
    features: [
      "Heavyweight 900-weight typography with high-contrast text scaling",
      "Jet carbon surface (#0a0a0d) with high-voltage searing flame orange fills (#ff3d00)",
      "Oversized prominent CTA buttons with drop shadows and hover transforms",
      "High-contrast 2px borders with bright flame orange hover illumination",
      "Punchy metrics cards with oversized numerical readouts"
    ],
    colorPalette: { name: "Flame Orange & Carbon", bg: "#0a0a0d", accent: "#ff3d00", text: "#ffffff" },
    previewUrl: "/previews/bold-modern/index.html",
    stats: { likes: 2190, views: "31.7k", vibecoders: "5.9k" },
    aiPrompt: {
      standard: "Create a Bold / Modern design for PulseOS: Heavyweight 900 typography, high-contrast jet carbon background, searing flame orange accents (#ff3d00), oversized prominent buttons, and punchy bento cards.",
      cursorPrompt: "Build a Bold Modern Next.js component with high contrast jet carbon, heavy typography, flame orange accents, and prominent buttons.",
      v0Prompt: "High-contrast bold modern SaaS page with 900-weight headings, searing flame orange buttons, and strong card geometry.",
      claudePrompt: "Implement a bold modern design with aggressive visual hierarchy, saturated buttons, and strong typographic scale."
    },
    code: {
      react: "import DesignBoldModern from '@/components/variations/DesignBoldModern';\nexport default function Page() { return <DesignBoldModern />; }",
      html: "<!-- See public/previews/bold-modern/index.html -->"
    }
  },
  {
    id: "4",
    slug: "neobrutalism",
    title: "Design 4 — Neobrutalism",
    tagline: "Thick borders, sharp shadows, bold colors, block-like components, raw & expressive styling",
    description: "An intentionally raw, tactile, and expressive aesthetic featuring heavy 3px solid black borders, hard non-blurred offset drop shadows, pop color blocks (canary yellow, mint, lavender), and physical tactile click states.",
    category: "style-comparison",
    style: "Neobrutalism",
    difficulty: "Intermediate",
    mode: "light",
    fontType: "mono",
    defaultFont: "Space Grotesk",
    tags: ["Neobrutalism", "Thick Borders", "Hard Shadows", "Pop Colors", "Tactile"],
    features: [
      "Solid 3px black borders on every card, button, badge, and input",
      "Hard non-blurred offset drop shadows (shadow-[5px_5px_0px_0px_#000])",
      "Vibrant pop color blocks (canary yellow, bubblegum pink, lime mint)",
      "Tactile button click physics with active translation depression",
      "Expressive grotesque black typography with high energy uppercase labels"
    ],
    colorPalette: { name: "Canary Pop & Black", bg: "#fffdf0", accent: "#facc15", text: "#000000" },
    previewUrl: "/previews/neobrutalism/index.html",
    stats: { likes: 2750, views: "41.9k", vibecoders: "7.4k" },
    aiPrompt: {
      standard: "Build a Neobrutalism design for PulseOS: Thick 3px black borders, hard non-blurred offset drop shadows (shadow-[5px_5px_0px_0px_#000]), bold pop colors (yellow, lavender, mint), block-like components, and tactile click states.",
      cursorPrompt: "Create a Neobrutalist design with border-[3px] border-black, shadow-[5px_5px_0px_0px_#000], warm cream background, and bold pop buttons.",
      v0Prompt: "Neobrutalism landing page with thick black borders, hard drop shadows, retro pop colors, and block cards.",
      claudePrompt: "Design an expressive neobrutalist UI with hard black borders, sharp shadows, and high-energy colored components."
    },
    code: {
      react: "import DesignNeobrutalism from '@/components/variations/DesignNeobrutalism';\nexport default function Page() { return <DesignNeobrutalism />; }",
      html: "<!-- See public/previews/neobrutalism/index.html -->"
    }
  },
  {
    id: "5",
    slug: "dark-premium",
    title: "Design 5 — Dark Premium",
    tagline: "Stealth obsidian, champagne gold metallic borders, subtle ambient glow, executive luxury styling",
    description: "An ultra-refined executive luxury dark aesthetic inspired by haute horlogerie and stealth luxury design. Features deep obsidian black surfaces, champagne gold hairline borders, glowing warm amber accents, and silky smooth transitions.",
    category: "style-comparison",
    style: "Dark Premium",
    difficulty: "Advanced",
    mode: "dark",
    fontType: "sans",
    defaultFont: "Inter",
    tags: ["Dark Premium", "Stealth Obsidian", "Champagne Gold", "Metallic Borders", "Executive Luxury"],
    features: [
      "Deep stealth obsidian surfaces (#050507) with warm champagne gold lighting",
      "Hairline metallic champagne-gold borders (border-amber-400/25) with subtle luminous edge sheens",
      "Refined typography hierarchy with crisp monospace telemetry accents",
      "Glowing gold accent indicators with radiant warm ambient pulses",
      "Gold metallic gradient CTA button (from-amber-300 via-amber-400 to-yellow-500)"
    ],
    colorPalette: { name: "Obsidian & Champagne Gold", bg: "#050507", accent: "#f59e0b", text: "#ffffff" },
    previewUrl: "/previews/dark-premium/index.html",
    stats: { likes: 3120, views: "48.2k", vibecoders: "8.9k" },
    aiPrompt: {
      standard: "Build a Dark Premium design for PulseOS: Stealth obsidian background (#050507), champagne gold metallic hairline borders, warm gold ambient glow, gold metallic gradient CTA buttons, and executive luxury styling.",
      cursorPrompt: "Create a Dark Premium UI with obsidian background, champagne gold metallic borders, warm amber glow, and elegant card styling.",
      v0Prompt: "Dark luxury premium design with obsidian surfaces, champagne gold glow, refined typography, and golden pill badges.",
      claudePrompt: "Implement an ultra-refined dark premium interface with champagne gold borders, warm luminescence, and executive styling."
    },
    code: {
      react: "import DesignDarkPremium from '@/components/variations/DesignDarkPremium';\nexport default function Page() { return <DesignDarkPremium />; }",
      html: "<!-- See public/previews/dark-premium/index.html -->"
    }
  }
];

// Read existing DESIGNS
let existingDesigns = [];
try {
  // Use regex to extract the array
  const match = fileContent.match(/export const DESIGNS: Design\[\] = (\[[\s\S]*\]);/);
  if (match) {
    existingDesigns = eval(match[1]);
  }
} catch (e) {
  console.log('Error parsing existing designs, creating fresh list', e);
}

// Filter out any existing with same slugs and append rest
const remainingDesigns = existingDesigns
  .filter(d => !['minimal-clean', 'glassmorphism', 'bold-modern', 'neobrutalism', 'dark-premium'].includes(d.slug))
  .map((d, index) => ({
    ...d,
    id: (index + 6).toString()
  }));

const allDesigns = [...comparisonDesigns, ...remainingDesigns];

const outputTs = `import { Design } from "@/types";

export const DESIGNS: Design[] = ${JSON.stringify(allDesigns, null, 2)};
`;

fs.writeFileSync(filePath, outputTs, 'utf8');
console.log(`Updated designs.ts with ${allDesigns.length} total designs! Top 5 are the comparison variations.`);
