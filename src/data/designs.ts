import { Design } from "@/types";

export const DESIGNS: Design[] = [
  {
    "id": "1",
    "slug": "minimal-clean",
    "title": "Design 1 — Minimal / Clean",
    "tagline": "Lots of whitespace, simple typography, subtle borders, restrained visual elements",
    "description": "A pure Swiss and Scandinavian-inspired minimalist design for PulseOS. Prioritizes generous whitespace, understated monochrome palette, delicate 1px neutral borders, restrained flat cards, and clean typography.",
    "category": "style-comparison",
    "style": "Minimal / Clean",
    "difficulty": "Beginner",
    "mode": "light",
    "fontType": "sans",
    "defaultFont": "Inter",
    "tags": [
      "Minimalist",
      "Clean",
      "Whitespace",
      "Subtle Borders",
      "Monochrome"
    ],
    "features": [
      "Airy spacious layout with high whitespace padding and relaxed line heights",
      "Hairline 1px subtle neutral borders with zero loud drop shadows",
      "Restrained typography scale with clean Inter sans-serif",
      "Flat rectangular cards with subtle border hover transitions",
      "Monochrome high-contrast CTA buttons and minimalist inputs"
    ],
    "colorPalette": {
      "name": "Chalk & Charcoal",
      "bg": "#ffffff",
      "accent": "#171717",
      "text": "#171717"
    },
    "previewUrl": "/previews/minimal-clean/index.html",
    "stats": {
      "likes": 1820,
      "views": "28.4k",
      "vibecoders": "5.2k"
    },
    "aiPrompt": {
      "standard": "Create a Minimal / Clean SaaS page for PulseOS. Lots of whitespace, simple typography, subtle 1px gray borders, restrained visual elements, flat rectangular cards, monochrome black/white CTA buttons, and airy layout.",
      "cursorPrompt": "Build a Minimal / Clean Tailwind page for PulseOS with lots of whitespace, subtle borders, restrained typography, and flat cards.",
      "v0Prompt": "Minimal clean white SaaS page for PulseOS with generous padding, subtle borders, and simple typography.",
      "claudePrompt": "Design a minimalist, restrained interface with subtle 1px borders, ample whitespace, and calm typography."
    },
    "code": {
      "react": "import DesignMinimalClean from '@/components/variations/DesignMinimalClean';\nexport default function Page() { return <DesignMinimalClean />; }",
      "html": "<!-- See public/previews/minimal-clean/index.html -->"
    }
  },
  {
    "id": "2",
    "slug": "glassmorphism",
    "title": "Design 2 — Glassmorphism",
    "tagline": "Frosted-glass cards, transparency, blur effects, soft gradients, layered backgrounds",
    "description": "A modern frosted-glass visual treatment featuring multi-layer backdrop blur filters, glowing ambient mesh gradient orbs, specular white highlights, iridescent accents, and pillowy translucent cards.",
    "category": "style-comparison",
    "style": "Glassmorphism",
    "difficulty": "Intermediate",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Plus Jakarta Sans",
    "tags": [
      "Glassmorphism",
      "Backdrop Blur",
      "Aurora Glow",
      "Soft Gradients",
      "Frosted Glass"
    ],
    "features": [
      "Multi-layer backdrop-blur-2xl with semi-transparent frosted cards",
      "Ambient colorful glowing mesh orbs (cyan, violet, indigo, pink)",
      "Specular highlight borders (1px white/20 and border-t-white/30)",
      "Soft layered elevation shadows with subtle colored refractions",
      "Glossy gradient buttons with luminous backdrop reflections"
    ],
    "colorPalette": {
      "name": "Prismatic Aurora & Fuchsia",
      "bg": "#0d0a21",
      "accent": "#ec4899",
      "text": "#ffffff"
    },
    "previewUrl": "/previews/glassmorphism/index.html",
    "stats": {
      "likes": 2340,
      "views": "34.1k",
      "vibecoders": "6.8k"
    },
    "aiPrompt": {
      "standard": "Build a Glassmorphism design variation for PulseOS: Frosted-glass cards, backdrop-blur-3xl, transparency, multi-color aurora mesh gradient orbs (fuchsia, cyan, pink), specular highlight borders, and translucent glossy buttons.",
      "cursorPrompt": "Create a Glassmorphic UI with backdrop-blur-3xl, border-white/30, glowing fuchsia/cyan radial gradients, and translucent frosted glass panels.",
      "v0Prompt": "Glassmorphism UI with frosted glass cards, blur effects, vibrant aurora gradients, and glossy buttons.",
      "claudePrompt": "Design a glassmorphic interface with translucent cards, specular highlights, and ambient multi-color light glows."
    },
    "code": {
      "react": "import DesignGlassmorphism from '@/components/variations/DesignGlassmorphism';\nexport default function Page() { return <DesignGlassmorphism />; }",
      "html": "<!-- See public/previews/glassmorphism/index.html -->"
    }
  },
  {
    "id": "3",
    "slug": "bold-modern",
    "title": "Design 3 — Bold / Modern",
    "tagline": "High-voltage flame orange, jet carbon, heavy 900 typography, prominent buttons, aggressive spacing",
    "description": "A high-impact, punchy modern design featuring heavyweight bold 900 typography, jet carbon contrast, saturated electric flame orange accents, large prominent buttons, and aggressive asymmetric bento grids.",
    "category": "style-comparison",
    "style": "Bold / Modern",
    "difficulty": "Advanced",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Plus Jakarta Sans",
    "tags": [
      "Bold Typography",
      "High Contrast",
      "Flame Orange",
      "Jet Carbon",
      "Modern Bento"
    ],
    "features": [
      "Heavyweight 900-weight typography with high-contrast text scaling",
      "Jet carbon surface (#0a0a0d) with high-voltage searing flame orange fills (#ff3d00)",
      "Oversized prominent CTA buttons with drop shadows and hover transforms",
      "High-contrast 2px borders with bright flame orange hover illumination",
      "Punchy metrics cards with oversized numerical readouts"
    ],
    "colorPalette": {
      "name": "Flame Orange & Carbon",
      "bg": "#0a0a0d",
      "accent": "#ff3d00",
      "text": "#ffffff"
    },
    "previewUrl": "/previews/bold-modern/index.html",
    "stats": {
      "likes": 2190,
      "views": "31.7k",
      "vibecoders": "5.9k"
    },
    "aiPrompt": {
      "standard": "Create a Bold / Modern design for PulseOS: Heavyweight 900 typography, high-contrast jet carbon background, searing flame orange accents (#ff3d00), oversized prominent buttons, and punchy bento cards.",
      "cursorPrompt": "Build a Bold Modern Next.js component with high contrast jet carbon, heavy typography, flame orange accents, and prominent buttons.",
      "v0Prompt": "High-contrast bold modern SaaS page with 900-weight headings, searing flame orange buttons, and strong card geometry.",
      "claudePrompt": "Implement a bold modern design with aggressive visual hierarchy, saturated buttons, and strong typographic scale."
    },
    "code": {
      "react": "import DesignBoldModern from '@/components/variations/DesignBoldModern';\nexport default function Page() { return <DesignBoldModern />; }",
      "html": "<!-- See public/previews/bold-modern/index.html -->"
    }
  },
  {
    "id": "4",
    "slug": "neobrutalism",
    "title": "Design 4 — Neobrutalism",
    "tagline": "Thick borders, sharp shadows, bold colors, block-like components, raw & expressive styling",
    "description": "An intentionally raw, tactile, and expressive aesthetic featuring heavy 3px solid black borders, hard non-blurred offset drop shadows, pop color blocks (canary yellow, mint, lavender), and physical tactile click states.",
    "category": "style-comparison",
    "style": "Neobrutalism",
    "difficulty": "Intermediate",
    "mode": "light",
    "fontType": "mono",
    "defaultFont": "Space Grotesk",
    "tags": [
      "Neobrutalism",
      "Thick Borders",
      "Hard Shadows",
      "Pop Colors",
      "Tactile"
    ],
    "features": [
      "Solid 3px black borders on every card, button, badge, and input",
      "Hard non-blurred offset drop shadows (shadow-[5px_5px_0px_0px_#000])",
      "Vibrant pop color blocks (canary yellow, bubblegum pink, lime mint)",
      "Tactile button click physics with active translation depression",
      "Expressive grotesque black typography with high energy uppercase labels"
    ],
    "colorPalette": {
      "name": "Canary Pop & Black",
      "bg": "#fffdf0",
      "accent": "#facc15",
      "text": "#000000"
    },
    "previewUrl": "/previews/neobrutalism/index.html",
    "stats": {
      "likes": 2750,
      "views": "41.9k",
      "vibecoders": "7.4k"
    },
    "aiPrompt": {
      "standard": "Build a Neobrutalism design for PulseOS: Thick 3px black borders, hard non-blurred offset drop shadows (shadow-[5px_5px_0px_0px_#000]), bold pop colors (yellow, lavender, mint), block-like components, and tactile click states.",
      "cursorPrompt": "Create a Neobrutalist design with border-[3px] border-black, shadow-[5px_5px_0px_0px_#000], warm cream background, and bold pop buttons.",
      "v0Prompt": "Neobrutalism landing page with thick black borders, hard drop shadows, retro pop colors, and block cards.",
      "claudePrompt": "Design an expressive neobrutalist UI with hard black borders, sharp shadows, and high-energy colored components."
    },
    "code": {
      "react": "import DesignNeobrutalism from '@/components/variations/DesignNeobrutalism';\nexport default function Page() { return <DesignNeobrutalism />; }",
      "html": "<!-- See public/previews/neobrutalism/index.html -->"
    }
  },
  {
    "id": "5",
    "slug": "dark-premium",
    "title": "Design 5 — Dark Premium",
    "tagline": "Stealth obsidian, champagne gold metallic borders, subtle ambient glow, executive luxury styling",
    "description": "An ultra-refined executive luxury dark aesthetic inspired by haute horlogerie and stealth luxury design. Features deep obsidian black surfaces, champagne gold hairline borders, glowing warm amber accents, and silky smooth transitions.",
    "category": "style-comparison",
    "style": "Dark Premium",
    "difficulty": "Advanced",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Inter",
    "tags": [
      "Dark Premium",
      "Stealth Obsidian",
      "Champagne Gold",
      "Metallic Borders",
      "Executive Luxury"
    ],
    "features": [
      "Deep stealth obsidian surfaces (#050507) with warm champagne gold lighting",
      "Hairline metallic champagne-gold borders (border-amber-400/25) with subtle luminous edge sheens",
      "Refined typography hierarchy with crisp monospace telemetry accents",
      "Glowing gold accent indicators with radiant warm ambient pulses",
      "Gold metallic gradient CTA button (from-amber-300 via-amber-400 to-yellow-500)"
    ],
    "colorPalette": {
      "name": "Obsidian & Champagne Gold",
      "bg": "#050507",
      "accent": "#f59e0b",
      "text": "#ffffff"
    },
    "previewUrl": "/previews/dark-premium/index.html",
    "stats": {
      "likes": 3120,
      "views": "48.2k",
      "vibecoders": "8.9k"
    },
    "aiPrompt": {
      "standard": "Build a Dark Premium design for PulseOS: Stealth obsidian background (#050507), champagne gold metallic hairline borders, warm gold ambient glow, gold metallic gradient CTA buttons, and executive luxury styling.",
      "cursorPrompt": "Create a Dark Premium UI with obsidian background, champagne gold metallic borders, warm amber glow, and elegant card styling.",
      "v0Prompt": "Dark luxury premium design with obsidian surfaces, champagne gold glow, refined typography, and golden pill badges.",
      "claudePrompt": "Implement an ultra-refined dark premium interface with champagne gold borders, warm luminescence, and executive styling."
    },
    "code": {
      "react": "import DesignDarkPremium from '@/components/variations/DesignDarkPremium';\nexport default function Page() { return <DesignDarkPremium />; }",
      "html": "<!-- See public/previews/dark-premium/index.html -->"
    }
  },
  {
    "id": "comp-6",
    "slug": "retro-y2k-os",
    "title": "Design 6 — Retro Y2K OS",
    "tagline": "Windows 95/98 desktop window, beveled 3D borders, blue title gradient, Start button & taskbar",
    "description": "A nostalgic 90s personal computing aesthetic. Features Windows 95/98 desktop window frames, beveled 3D borders, blue gradient title bars, system menu bar, bottom taskbar with Start button, and pixelated font touches.",
    "category": "style-comparison",
    "style": "Retro Y2K OS",
    "difficulty": "Intermediate",
    "mode": "light",
    "fontType": "sans",
    "defaultFont": "MS Sans Serif",
    "tags": [
      "Retro Computing",
      "Windows 95",
      "Beveled 3D",
      "Y2K Aesthetic",
      "Taskbar"
    ],
    "features": [
      "Beveled 2px raised and sunken relief borders with sharp white and black contrast lines",
      "Window modal chrome with blue gradient title bar and minimize/maximize/close buttons",
      "Classic OS menu bar with File, Edit, View, Telemetry, and Help options",
      "Taskbar fixed at the bottom with a classic Start button and system digital clock",
      "Recessed input fields and metric readout tiles with inverted gray beveling"
    ],
    "colorPalette": {
      "name": "Windows Teal & Steel",
      "bg": "#008080",
      "accent": "#000080",
      "text": "#000000"
    },
    "previewUrl": "/previews/retro-y2k-os/index.html",
    "stats": {
      "likes": 2940,
      "views": "45.1k",
      "vibecoders": "8.1k"
    },
    "aiPrompt": {
      "standard": "Create a Retro Y2K Windows 95 style interface for PulseOS. Background teal #008080. Classic window frame with 2px beveled borders (border-t-white border-l-white border-r-black border-b-black bg-[#c0c0c0]), blue gradient title bar, minimize/maximize/close square buttons, retro menu bar, recessed metric cards, and bottom taskbar with Start button.",
      "cursorPrompt": "Build a Windows 95 retro OS component with beveled 3D gray borders, teal #008080 backdrop, blue title bar, and system taskbar.",
      "v0Prompt": "Retro Y2K Windows 95 desktop interface with beveled cards, classic gray palette, blue title bar, and nostalgic 90s buttons.",
      "claudePrompt": "Design a 90s operating system web page mimicking Windows 95 with relief borders, system menu bar, and window chrome."
    },
    "code": {
      "react": "import DesignRetroY2K from '@/components/variations/DesignRetroY2K';\nexport default function Page() { return <DesignRetroY2K />; }",
      "html": "<!-- See public/previews/retro-y2k-os/index.html -->"
    }
  },
  {
    "id": "comp-7",
    "slug": "technical-blueprint",
    "title": "Design 7 — CAD Blueprint",
    "tagline": "Blueprint cyan drafting grid, dimension callout lines, crosshairs, and engineering title block",
    "description": "An architectural and engineering drafting aesthetic. Features dual-layer isometric millimeter blueprint grids, dimension measurement lines (|← 1280mm →|), technical crosshair indicators, and an official engineering drawing title block.",
    "category": "style-comparison",
    "style": "Technical Blueprint",
    "difficulty": "Advanced",
    "mode": "dark",
    "fontType": "mono",
    "defaultFont": "JetBrains Mono",
    "tags": [
      "Blueprint Grid",
      "CAD Wireframe",
      "Dimension Lines",
      "Crosshairs",
      "Engineering"
    ],
    "features": [
      "Dual-layer millimeter isometric drafting grid background with coordinate markers",
      "Precision dimension measurement lines with tick marks indicating container bounds",
      "Crosshair cursor targets, wireframe component outlines, and technical leader lines",
      "Official engineering title block with Drawing Number, Scale (1:1), and Revision stamps",
      "High-contrast technical drafting yellow and blueprint cyan on deep navy canvas"
    ],
    "colorPalette": {
      "name": "Blueprint Cyan & Drafting Yellow",
      "bg": "#081326",
      "accent": "#38bdf8",
      "text": "#e0f2fe"
    },
    "previewUrl": "/previews/technical-blueprint/index.html",
    "stats": {
      "likes": 2680,
      "views": "39.4k",
      "vibecoders": "7.3k"
    },
    "aiPrompt": {
      "standard": "Create an Architectural Blueprint CAD interface for PulseOS. Deep blueprint blue background #081326 with cyan grid lines. Add dimension callout lines (|← 1280mm →|), crosshair corner marks, monospace technical typography, drafting yellow accents #facc15, and an official drawing title block in the bottom corner.",
      "cursorPrompt": "Build a Blueprint CAD interface with cyan grid pattern, dimension markers, monospace typography, and engineering title block.",
      "v0Prompt": "Architectural blueprint dark cyan UI with technical dimension lines, crosshair markers, and schematic cards.",
      "claudePrompt": "Design a technical engineering schematic webpage with isometric blueprint grid, dimension rules, and CAD styling."
    },
    "code": {
      "react": "import DesignTechnicalBlueprint from '@/components/variations/DesignTechnicalBlueprint';\nexport default function Page() { return <DesignTechnicalBlueprint />; }",
      "html": "<!-- See public/previews/technical-blueprint/index.html -->"
    }
  },
  {
    "id": "comp-8",
    "slug": "claymorphism-3d",
    "title": "Design 8 — Claymorphism",
    "tagline": "Soft marshmallow 3D, dual inner shadows, inflated rounded pills, and friendly pastel lilac",
    "description": "An inflated, tactile clay-like aesthetic featuring dual inner shadows, generous rounded-3xl corners, squishy pill buttons, soft ambient diffuse shadows, and a friendly modern pastel color scheme.",
    "category": "style-comparison",
    "style": "Claymorphism",
    "difficulty": "Intermediate",
    "mode": "light",
    "fontType": "sans",
    "defaultFont": "Plus Jakarta Sans",
    "tags": [
      "Claymorphism",
      "Soft 3D",
      "Inner Shadow",
      "Rounded 3XL",
      "Friendly UI"
    ],
    "features": [
      "Dual-layer inner shadows creating an authentic inflated clay bubble appearance",
      "High border-radius pill shapes (rounded-3xl) with gentle physics hover transforms",
      "Floating 3D clay badges, squishy toggle pills, and pillowy button depression states",
      "Soft diffuse ambient color shadows beneath components rather than harsh black borders",
      "Friendly rounded sans typography with cheerful high-contrast accent highlights"
    ],
    "colorPalette": {
      "name": "Pastel Clay & Purple",
      "bg": "#e2e8f0",
      "accent": "#8b5cf6",
      "text": "#1e293b"
    },
    "previewUrl": "/previews/claymorphism-3d/index.html",
    "stats": {
      "likes": 2510,
      "views": "37.8k",
      "vibecoders": "6.9k"
    },
    "aiPrompt": {
      "standard": "Build a Claymorphism Soft 3D design for PulseOS: Rounded-3xl cards with double inner shadows (shadow-[8px_8px_16px_#cbd5e1,-8px_-8px_16px_#ffffff,inset_3px_3px_6px_rgba(255,255,255,0.7),inset_-3px_-3px_6px_rgba(0,0,0,0.06)]), pastel clay slate background #e2e8f0, bubbly gradient buttons, and pillowy squishy components.",
      "cursorPrompt": "Create a Claymorphism Tailwind UI with dual inner shadows, rounded-3xl cards, and bouncy pastel buttons.",
      "v0Prompt": "Claymorphism 3D landing page with marshmallow inflated cards, soft inner bevels, and friendly rounded components.",
      "claudePrompt": "Design a soft claymorphic interface with realistic inner shadows, pill badges, and playful tactile hover physics."
    },
    "code": {
      "react": "import DesignClaymorphism from '@/components/variations/DesignClaymorphism';\nexport default function Page() { return <DesignClaymorphism />; }",
      "html": "<!-- See public/previews/claymorphism-3d/index.html -->"
    }
  },
  {
    "id": "comp-9",
    "slug": "wabi-sabi-craft",
    "title": "Design 9 — Wabi-Sabi Craft",
    "tagline": "Textured handmade rice paper, sumi charcoal ink, contemplative serif, and earthy terracotta",
    "description": "A tranquil, contemplative Japanese-inspired aesthetic honoring natural craft and organic texture. Features warm rice paper tones, sumi charcoal ink typography, artisanal terracotta accents, unhurried line-heights, and quiet elegance.",
    "category": "style-comparison",
    "style": "Wabi-Sabi Craft",
    "difficulty": "Intermediate",
    "mode": "light",
    "fontType": "serif",
    "defaultFont": "Cormorant Garamond",
    "tags": [
      "Wabi-Sabi",
      "Rice Paper",
      "Sumi Ink",
      "Organic Serif",
      "Terracotta"
    ],
    "features": [
      "Warm textured rice paper background tone (#f8f6f0) with soothing sumi ink typography",
      "Contemplative editorial serif headings paired with clean, unhurried line-heights",
      "Minimalist hairline stone borders with quiet Japanese-inspired circular stamp accents",
      "Artisanal terracotta clay and matcha moss green color accents",
      "Generous spatial breathing room that rejects modern visual noise and urgency"
    ],
    "colorPalette": {
      "name": "Rice Paper & Terracotta",
      "bg": "#f8f6f0",
      "accent": "#c2704a",
      "text": "#262422"
    },
    "previewUrl": "/previews/wabi-sabi-craft/index.html",
    "stats": {
      "likes": 2830,
      "views": "42.0k",
      "vibecoders": "7.8k"
    },
    "aiPrompt": {
      "standard": "Design a Wabi-Sabi organic craft aesthetic for PulseOS. Warm rice paper background #f8f6f0, sumi charcoal text #262422, terracotta accents #c2704a, Cormorant Garamond serif headings, quiet hairline borders, generous contemplative whitespace, and organic botanical dividers.",
      "cursorPrompt": "Build a Wabi-Sabi paper craft UI with rice paper #f8f6f0 background, serif typography, terracotta buttons, and calm spacing.",
      "v0Prompt": "Wabi-sabi minimalist landing page with warm paper textures, editorial serif headings, and earthy terracotta accents.",
      "claudePrompt": "Implement a tranquil, organic Japanese wabi-sabi interface with sumi ink typography, unhurried margins, and craft styling."
    },
    "code": {
      "react": "import DesignWabiSabi from '@/components/variations/DesignWabiSabi';\nexport default function Page() { return <DesignWabiSabi />; }",
      "html": "<!-- See public/previews/wabi-sabi-craft/index.html -->"
    }
  },
  {
    "id": "comp-10",
    "slug": "spatial-visionos",
    "title": "Design 10 — Spatial VisionOS",
    "tagline": "Spatial optical glass, dynamic refraction, floating capsule dock, and 3D spatial depth",
    "description": "An ultra-futuristic spatial computing aesthetic inspired by Apple Vision Pro. Features multi-tier optical backdrop-blur-3xl glass cards, specular edge lighting, floating capsule dock, and cosmic ambient depth.",
    "category": "style-comparison",
    "style": "Spatial VisionOS",
    "difficulty": "Advanced",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Inter",
    "tags": [
      "Spatial UI",
      "VisionOS",
      "Refractive Glass",
      "Capsule Dock",
      "Backdrop Blur"
    ],
    "features": [
      "Spatial glass cards with multi-layer optical backdrop-blur-3xl and white specular edge highlights",
      "Dynamic bottom capsule dock with active luminous indicator pills and blur reflection",
      "Deep cosmic ambient lighting with radial cyan and violet spatial glow spheres",
      "Multi-tier elevation hierarchy that mimics Apple Vision Pro spatial window surfaces",
      "Minimalist glowing pill badges with active beacon pulses"
    ],
    "colorPalette": {
      "name": "Cosmic Obsidian & Spatial Cyan",
      "bg": "#030308",
      "accent": "#06b6d4",
      "text": "#ffffff"
    },
    "previewUrl": "/previews/spatial-visionos/index.html",
    "stats": {
      "likes": 3410,
      "views": "53.6k",
      "vibecoders": "9.7k"
    },
    "aiPrompt": {
      "standard": "Build a VisionOS Spatial Computing interface for PulseOS. Deep cosmic obsidian #030308, floating spatial glass cards with backdrop-blur-3xl and border-white/20, glowing cyan ambient lighting, specular border highlights, and a floating capsule bottom navigation dock.",
      "cursorPrompt": "Create a VisionOS spatial UI with backdrop-blur-3xl, floating capsule dock, border-white/20, and cyan glow accents.",
      "v0Prompt": "Apple Vision Pro spatial interface with refractive frosted glass panels, bottom capsule dock, and ambient glow spheres.",
      "claudePrompt": "Design a futuristic spatial computing UI with optical glass windows, floating capsule navigation, and specular edge illumination."
    },
    "code": {
      "react": "import DesignSpatialVisionOS from '@/components/variations/DesignSpatialVisionOS';\nexport default function Page() { return <DesignSpatialVisionOS />; }",
      "html": "<!-- See public/previews/spatial-visionos/index.html -->"
    }
  },
  {
    "id": "comp-11",
    "slug": "swiss-bauhaus-poster",
    "title": "Design 11 — Swiss Bauhaus",
    "tagline": "Signal red & stark black, heavy 900 grotesque, asymmetric poster columns, and giant numerals",
    "description": "A high-impact, uncompromising graphic design style rooted in the Swiss International and Bauhaus movements. Features strict mathematical grids, signal red (#e11d48) contrast, heavy 900 grotesque typography, and oversized 01/02 numerals.",
    "category": "style-comparison",
    "style": "Swiss Bauhaus",
    "difficulty": "Intermediate",
    "mode": "light",
    "fontType": "sans",
    "defaultFont": "Inter Tight",
    "tags": [
      "Bauhaus",
      "Swiss International",
      "Signal Red",
      "Grotesque 900",
      "Poster Grid"
    ],
    "features": [
      "Strict mathematical multi-column grid with visible 2px solid black alignment rules",
      "Oversized section numerals (01, 02, 03) anchoring asymmetric editorial column layouts",
      "Pure geometric Bauhaus accents: solid signal red square, black circle, and geometric triangle",
      "Heavyweight grotesque 900 uppercase headings with zero letter spacing fluff",
      "High-impact signal red callout sections with inverted crisp white typography"
    ],
    "colorPalette": {
      "name": "Signal Red & Chalk",
      "bg": "#f4f4f0",
      "accent": "#e11d48",
      "text": "#0a0a0a"
    },
    "previewUrl": "/previews/swiss-bauhaus-poster/index.html",
    "stats": {
      "likes": 3050,
      "views": "47.2k",
      "vibecoders": "8.4k"
    },
    "aiPrompt": {
      "standard": "Design a Swiss Bauhaus International Style poster UI for PulseOS. Background chalk white #f4f4f0, bold signal red #e11d48, black #0a0a0a. Mathematical grid with visible 2px black rules, heavy 900 grotesque uppercase typography, oversized numbers (01, 02, 03), and geometric Bauhaus accents.",
      "cursorPrompt": "Build a Swiss Bauhaus UI with heavy 900 typography, signal red accents, black borders, and asymmetric grid columns.",
      "v0Prompt": "Bauhaus graphic poster landing page with signal red blocks, oversized numbers, strict black borders, and heavy grotesque headings.",
      "claudePrompt": "Implement a Swiss International typographic website with mathematical column alignment, signal red contrasts, and bold architectural layout."
    },
    "code": {
      "react": "import DesignSwissBauhaus from '@/components/variations/DesignSwissBauhaus';\nexport default function Page() { return <DesignSwissBauhaus />; }",
      "html": "<!-- See public/previews/swiss-bauhaus-poster/index.html -->"
    }
  },
  {
    "id": "comp-12",
    "slug": "bioluminescent-deep-tech",
    "title": "Design 12 — Bioluminescent",
    "tagline": "Abyssal pitch black, electric cyan & synth lime luminescence, pulsing data streams, and biotech vibe",
    "description": "An ethereal deep sea and biotechnology aesthetic. Features abyssal midnight surfaces (#02050b), electric bioluminescent cyan glows (#00f0ff), toxic synth lime accents, pulsing telemetry beacons, and organic DNA filaments.",
    "category": "style-comparison",
    "style": "Bioluminescent",
    "difficulty": "Advanced",
    "mode": "dark",
    "fontType": "mono",
    "defaultFont": "JetBrains Mono",
    "tags": [
      "Bioluminescent",
      "Deep Tech",
      "Neon Cyan",
      "Bioinformatics",
      "Pulsing Glow"
    ],
    "features": [
      "Deep abyssal midnight canvas (#02050b) with glowing electric cyan (#00f0ff) ambient orbs",
      "Translucent dark glass pods with neon perimeter tracer illumination and subtle drop shadows",
      "Live pulsing status beacons and organic DNA filament iconography",
      "High-contrast neon electric CTA buttons that illuminate adjacent UI elements on hover",
      "Data telemetry cards with real-time latency indicators and synth lime activity trackers"
    ],
    "colorPalette": {
      "name": "Abyssal Cyan & Synth Lime",
      "bg": "#02050b",
      "accent": "#00f0ff",
      "text": "#e2f8ff"
    },
    "previewUrl": "/previews/bioluminescent-deep-tech/index.html",
    "stats": {
      "likes": 3280,
      "views": "50.9k",
      "vibecoders": "9.1k"
    },
    "aiPrompt": {
      "standard": "Create a Bioluminescent Deep Tech aesthetic for PulseOS. Abyssal midnight background #02050b, electric cyan glow #00f0ff, synth lime #22c55e. Glowing dark glass cards with cyan neon perimeter borders, pulsing status beacons, telemetry metrics, and high-energy neon buttons.",
      "cursorPrompt": "Build a Bioluminescent deep dark UI with electric cyan glow, synth lime accents, and pulsing telemetry pods.",
      "v0Prompt": "Bioluminescent dark mode landing page with abyssal black surfaces, glowing cyan card borders, and biotech data trackers.",
      "claudePrompt": "Design a synthetic biology and deep-sea inspired interface with glowing bioluminescent filaments and high-contrast neon elements."
    },
    "code": {
      "react": "import DesignBioluminescent from '@/components/variations/DesignBioluminescent';\nexport default function Page() { return <DesignBioluminescent />; }",
      "html": "<!-- See public/previews/bioluminescent-deep-tech/index.html -->"
    }
  },
  {
    "id": "6",
    "slug": "linear-dark-nebula",
    "title": "Nebula Cloud Issue Tracker",
    "tagline": "Ultra-refined dark mode sprint tracker with glowing mesh gradient hero and keyboard-centric bento grid",
    "description": "A Linear.app-inspired SaaS issue tracking platform featuring an obsidian dark theme, radial ambient glow, interactive Kanban boards, modular bento grids with keyboard shortcut pills, and real-time team collaboration features.",
    "category": "saas-landings",
    "style": "Dark Nebula / Obsidian",
    "difficulty": "Intermediate",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Inter",
    "tags": [
      "Dark Mode",
      "Mesh Gradient",
      "Linear Style",
      "Bento Grid",
      "Keyboard Shortcuts"
    ],
    "features": [
      "Radial mesh glow background with purple/indigo ambient light",
      "Glassmorphic pill badge with live pulsing beacon indicator",
      "Interactive mock Kanban board with draggable task cards",
      "Modular 3-column bento feature grid with keyboard shortcut pills",
      "Social proof logo ticker with tech company logos",
      "Clean monospace footer with navigation links"
    ],
    "colorPalette": {
      "name": "Obsidian & Violet Glow",
      "bg": "#08090d",
      "accent": "#8b5cf6",
      "text": "#f3f4f6"
    },
    "previewUrl": "/previews/linear-dark-nebula/index.html",
    "stats": {
      "likes": 1420,
      "views": "18.4k",
      "vibecoders": "3.2k"
    },
    "aiPrompt": {
      "standard": "Create a modern Linear.app-inspired SaaS landing page for an issue tracking platform called 'Nebula'. Use an obsidian dark theme with background color #08090d, violet accent #8b5cf6, and light text #f3f4f6. Font pairing: Inter for body text (400/500 weight), Plus Jakarta Sans for headings (700/800 weight), JetBrains Mono for code snippets and metrics.\n\nSection 1 — Sticky Navigation: Glassmorphic navbar (bg-[#08090d]/80 backdrop-blur-xl) with gradient logo icon, brand name 'Nebula', nav links (Features, Architecture, Pricing), and a rounded 'Get Started' CTA button.\n\nSection 2 — Hero: Centered layout with a subtle radial purple/indigo glow (500px blurred circle). Animated pill badge ('v3.0 Just Shipped' with pulsing emerald dot). Giant 72px gradient-text headline 'The purposeful tool for high-velocity teams'. Two-line subtitle about sprint tracking. Two CTA buttons: primary gradient 'Start Free Trial' and secondary outlined 'Book Demo'.\n\nSection 3 — Interactive Kanban Board: A mock project dashboard showing 3 columns (Backlog, In Progress, Done) with task cards containing priority color dots (red/amber/green), task titles, and circular assignee avatars. Glowing card borders on hover.\n\nSection 4 — Bento Feature Grid: 3-column responsive grid with feature cards. Each card has an icon, title, description, and unique elements — keyboard shortcut pills (⌘K, ⌘J), mini sparkline SVG charts, integration badge icons. Cards have subtle hover border glow effect (border-purple-500/50).\n\nSection 5 — Social Proof: Horizontal scrolling logo ticker of tech company names/logos. Below: 3 testimonial cards with star ratings, quote text, and reviewer name/role.\n\nSection 6 — CTA Banner: Gradient bg card (from-purple-600/20) with bold headline, subtitle, and two action buttons.\n\nSection 7 — Footer: 4-column layout with links, monospace copyright text.",
      "cursorPrompt": "Build a Next.js 15 page using Tailwind CSS for a Linear-style SaaS landing page called 'Nebula'.\n- Theme: bg-[#08090d] text-zinc-100 font-sans\n- Hero: Centered layout with radial purple glow (w-[500px] h-[300px] bg-purple-500/20 blur-[120px])\n- Pill badge: bg-zinc-900/80 border border-zinc-800 text-xs px-3 py-1 rounded-full with pulsing emerald dot\n- Kanban mock: 3 columns with task cards, priority dots, assignee avatars\n- Bento grid: 3-col grid with keyboard shortcut pills, sparklines, integration icons\n- Add Lucide icons: ArrowRight, Sparkles, Command, CheckCircle2, ShieldCheck, Layers, Zap",
      "v0Prompt": "Linear style dark mode SaaS landing page for an issue tracker called Nebula. Obsidian dark bg (#08090d) with violet accents (#8b5cf6). Include: glassmorphic navbar, hero with radial glow and pill badge, interactive Kanban board mock, bento grid with keyboard shortcut pills, social proof ticker, testimonials, and CTA banner. Use shadcn/ui button, card, and badge.",
      "claudePrompt": "Design and implement a complete single-page website for an AI-powered project management tool called 'Nebula' inspired by Linear.app. Use dark obsidian surfaces (#08090d), crisp 1px borders (#27272a), glowing violet hover effects (#8b5cf6), and typography pairing of Inter (body) and Plus Jakarta Sans (headings). Include interactive Kanban board, keyboard shortcut bento grid, social proof, and responsive design for desktop/tablet/mobile."
    },
    "code": {
      "react": "export default function NebulaSaaS() { return <div className=\"bg-[#08090d] text-zinc-100 min-h-screen\">Nebula Cloud Issue Tracker</div>; }",
      "html": "<!-- Nebula Cloud Issue Tracker -->"
    }
  },
  {
    "id": "7",
    "slug": "stripe-glow-tiers",
    "title": "PayFlow Billing & Subscriptions",
    "tagline": "Luminescent pricing cards with monthly/yearly billing toggle, interactive feature matrix, and FAQ accordion",
    "description": "A Stripe-inspired high-conversion pricing and billing platform featuring glowing gradient pricing cards, annual discount toggles, comprehensive feature comparison tables, and expandable FAQ sections for enterprise SaaS.",
    "category": "pricing-conversion",
    "style": "Luminescent Neon & Glass",
    "difficulty": "Beginner",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Plus Jakarta Sans",
    "tags": [
      "Pricing",
      "Stripe Style",
      "Glow Card",
      "Toggle Switch",
      "FAQ Accordion"
    ],
    "features": [
      "Billed annually / monthly switch with 'Save 20%' badge",
      "Luminescent highlighted tier with glowing gradient border",
      "Comprehensive feature comparison checklist",
      "Interactive monthly active users (MAU) slider",
      "Expandable FAQ accordion section",
      "Enterprise custom quote CTA banner"
    ],
    "colorPalette": {
      "name": "Stripe Violet & Cyan",
      "bg": "#0b0f19",
      "accent": "#6366f1",
      "text": "#ffffff"
    },
    "previewUrl": "/previews/stripe-glow-tiers/index.html",
    "stats": {
      "likes": 1890,
      "views": "24.1k",
      "vibecoders": "4.8k"
    },
    "aiPrompt": {
      "standard": "Build a high-conversion SaaS pricing page for a billing platform called 'PayFlow'. Background #0b0f19, accent #6366f1, text white. Font: Plus Jakarta Sans for headings, Inter for body.\n\nSection 1 — Navbar: Clean dark nav with 'PayFlow' brand, links (Products, Pricing, Docs, Blog), 'Sign In' text link and 'Get Started' indigo CTA button.\n\nSection 2 — Hero: Centered headline 'Transparent pricing, no surprises' (48px), subtitle about scaling without overages, 14-day free trial mention.\n\nSection 3 — Billing Toggle: Centered toggle switch between 'Monthly' and 'Annual' with animated 'Save 20%' emerald badge that appears on annual selection.\n\nSection 4 — Three Pricing Cards side by side: Starter ($19/mo) with basic features list and 'Get Started' ghost button. Pro ($49/mo) marked 'MOST POPULAR' with glowing indigo gradient border (from-indigo-500 via-purple-500 to-pink-500), highlighted bg, comprehensive features with green checkmarks, 'Start Free Trial' solid button. Enterprise ('Custom') with premium features, 'Contact Sales' button.\n\nSection 5 — Feature Comparison Table: 4-column table (Feature, Starter, Pro, Enterprise) with rows for Projects, Team Members, Storage, API Access, SSO, Priority Support — using green checkmarks and red crosses.\n\nSection 6 — FAQ Accordion: 5 expandable questions with animated chevron rotation: 'Can I change plans later?', 'What payment methods do you accept?', 'Is there a free trial?', 'How does billing work?', 'What happens when I exceed my quota?'\n\nSection 7 — Enterprise CTA: Full-width banner 'Need a custom solution?' with description and 'Talk to Sales' button.\n\nSection 8 — Footer with links and copyright.",
      "cursorPrompt": "Create a Tailwind CSS pricing component for 'PayFlow' with 3 pricing cards on dark slate bg (#0b0f19). Use glowing gradient borders on middle card (from-indigo-500 via-purple-500 to-pink-500). Add state for billingPeriod (monthly/yearly) with animated toggle. Feature comparison table with checkmark/cross icons. FAQ accordion with state management.",
      "v0Prompt": "Stripe style pricing page for PayFlow billing platform. Glowing border cards, annual discount toggle pill, checkmark feature list, feature comparison table, FAQ accordion, and enterprise banner. Dark mode with indigo (#6366f1) accents on #0b0f19 background.",
      "claudePrompt": "Generate a complete pricing page for PayFlow with billing toggle, interactive tier cards (Starter $19, Pro $49, Enterprise Custom), detailed feature comparison table, and FAQ accordion using Tailwind CSS and React. Dark theme #0b0f19 with indigo accents."
    },
    "code": {
      "react": "export default function PayFlowPricing() { return <div className=\"bg-[#0b0f19] text-white min-h-screen\">PayFlow Pricing</div>; }",
      "html": "<!-- PayFlow Pricing -->"
    }
  },
  {
    "id": "8",
    "slug": "vercel-monospace-metrics",
    "title": "EdgeTelemetry Cloud Analytics",
    "tagline": "Monochrome developer dashboard with real-time sparklines, deployment logs, and edge telemetry metrics",
    "description": "A Vercel-inspired developer analytics platform featuring pure monochrome aesthetics, monospace statistics, edge function latency charts, live deployment feeds with Git commit hashes, and bandwidth usage visualizations.",
    "category": "dashboards",
    "style": "Monochrome Developer",
    "difficulty": "Advanced",
    "mode": "dark",
    "fontType": "mono",
    "defaultFont": "JetBrains Mono",
    "tags": [
      "Dashboard",
      "Vercel Style",
      "Monospace",
      "Telemetry",
      "Sparklines"
    ],
    "features": [
      "Real-time edge function latency sparkline graphs",
      "Live deployment status pills (Ready, Building, Error)",
      "Monospace commit hash and branch visualizer",
      "Bandwidth and request quota progress bars",
      "Project environment switcher dropdown"
    ],
    "colorPalette": {
      "name": "Pure Monochrome",
      "bg": "#000000",
      "accent": "#0070f3",
      "text": "#ededed"
    },
    "previewUrl": "/previews/vercel-monospace-metrics/index.html",
    "stats": {
      "likes": 2120,
      "views": "31.2k",
      "vibecoders": "5.1k"
    },
    "aiPrompt": {
      "standard": "Create a Vercel-style developer analytics dashboard for 'EdgeTelemetry'. Pure black background #000000, blue accent #0070f3, text #ededed. Primary font: JetBrains Mono for all data and metrics, Inter for UI labels.\n\nSection 1 — Top Bar: Project switcher dropdown 'my-saas-app ▾', environment pills (Production active, Preview, Development), user avatar.\n\nSection 2 — Metric Cards Row: 4 cards in a grid — Total Requests (2.4M with inline SVG sparkline showing upward trend), Edge Latency (14ms with green trend arrow ↓), Bandwidth (847 GB with horizontal progress bar at 67%), Uptime (99.98% with pulsing green dot). All numbers in JetBrains Mono bold.\n\nSection 3 — Deployment History Table: Full-width table with columns — Status (colored dot: green=Ready, amber=Building, red=Error), Branch (with git branch icon and name), Commit (truncated hash in monospace e.g. 'a3f7c2d'), Message, Deployed (relative time '2m ago'), Duration ('1m 23s'). Show 8 realistic deployment rows.\n\nSection 4 — Edge Function Logs: Scrollable panel with timestamped log entries in monospace. Each entry: timestamp, function name, status code, response time.\n\nSection 5 — Usage Quotas: Progress bars for Bandwidth (847GB / 1TB), Serverless Executions (2.4M / 3M), Edge Middleware Invocations (12.8M / 20M).\n\nSection 6 — Footer: Monospace text '© 2026 EdgeTelemetry • All systems operational'.",
      "cursorPrompt": "Build a Next.js developer analytics dashboard called EdgeTelemetry. Pure black bg (#000), JetBrains Mono for metrics, blue accent #0070f3. Include project switcher, 4 metric cards with SVG sparklines, deployment table with git commit hashes, edge function logs panel, usage quota progress bars.",
      "v0Prompt": "Vercel dashboard clone called EdgeTelemetry. Dark monochrome theme, project selector, metrics cards with sparkline graphs, deployment log table with git branches and commit hashes, edge function logs, and usage quotas.",
      "claudePrompt": "Create a developer telemetry dashboard called EdgeTelemetry with real-time request metrics, edge function logs, deployment history table, and usage quotas. Vercel-inspired pure black (#000) with blue accents (#0070f3) and JetBrains Mono typography."
    },
    "code": {
      "react": "export default function EdgeTelemetry() { return <div className=\"bg-black text-white min-h-screen p-8 font-mono\">EdgeTelemetry Dashboard</div>; }",
      "html": "<!-- EdgeTelemetry Dashboard -->"
    }
  },
  {
    "id": "9",
    "slug": "apple-ultra-showcase",
    "title": "Aura Spatial Pro Headset",
    "tagline": "Cinematic sticky scroll showcase with giant headline typography, specs bar, and interactive colorway selector",
    "description": "An Apple-inspired flagship product launch page for a spatial computing headset featuring oversized cinematic typography, glassmorphic specification chips, interactive colorway selectors, and smooth feature reveals with premium aesthetics.",
    "category": "saas-landings",
    "style": "Cinematic Product Showcase",
    "difficulty": "Intermediate",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Plus Jakarta Sans",
    "tags": [
      "Apple Style",
      "Storytelling",
      "Oversized Typography",
      "Glassmorphism",
      "Product Launch"
    ],
    "features": [
      "Giant 90px gradient headline with crisp letter tracking",
      "Sticky feature callouts with floating hardware bezel",
      "Glassmorphic specs bar with dynamic numeric stats",
      "Interactive colorway selector (Space Black, Silver, Titanium)",
      "Video preview modal with cinematic ambient glow"
    ],
    "colorPalette": {
      "name": "Titanium & Deep Space",
      "bg": "#050507",
      "accent": "#2997ff",
      "text": "#f5f5f7"
    },
    "previewUrl": "/previews/apple-ultra-showcase/index.html",
    "stats": {
      "likes": 1750,
      "views": "26.8k",
      "vibecoders": "3.9k"
    },
    "aiPrompt": {
      "standard": "Design an Apple-style product showcase landing page for a spatial computing headset called 'Aura Spatial Pro'. Deep space black bg #050507, blue accent #2997ff, text #f5f5f7. Font: Plus Jakarta Sans for headlines (800 weight, 90px hero), Inter for body.\n\nSection 1 — Minimal Navbar: Centered 'Aura' wordmark in medium weight, minimal nav links.\n\nSection 2 — Cinematic Hero: MASSIVE headline 'Aura Spatial Pro' in 90px bold with gradient text fill (blue to cyan), followed by tagline 'Welcome to spatial computing.' in 24px light weight. Clean, breathing whitespace.\n\nSection 3 — Product Showcase: Full-width area with a large rounded rectangle (representing the headset) using layered CSS gradients to create a sleek titanium device silhouette with reflective highlights.\n\nSection 4 — Colorway Selector: 3 circular clickable swatches — Space Black (dark gradient), Silver (light gray gradient), Titanium (warm gold gradient) — with labels below. Active selection has ring indicator.\n\nSection 5 — Specs Bar: 4 glassmorphic cards (backdrop-blur-xl, bg-white/5, border-white/10) showing '12 cameras', 'M4 Ultra chip', '4K per eye', '2TB storage' with large numeric values and small labels.\n\nSection 6 — Feature Deep-Dive: 3 large feature cards with icons — Spatial Computing (immersive workspace description), Immersive Display (resolution and FOV details), All-Day Battery (charging specs).\n\nSection 7 — CTA: 'Experience Aura Spatial Pro' with blue gradient CTA button and secondary 'Learn More' link.\n\nSection 8 — Minimal Apple-style footer with legal links.",
      "cursorPrompt": "Create an Apple-style hardware product launch page for 'Aura Spatial Pro' headset. Deep space bg (#050507), blue accent (#2997ff). Giant 90px bold headline, glassmorphic specs cards, interactive 3-button colorway selector (Space Black, Silver, Titanium), feature cards with icons. Plus Jakarta Sans headings, Inter body.",
      "v0Prompt": "Apple product launch page for Aura Spatial Pro headset. Dark theme (#050507), large cinematic typography, specs grid with glassmorphic cards, interactive color selector with 3 options, feature cards, and buy CTA. Blue accent (#2997ff).",
      "claudePrompt": "Implement an Apple-inspired landing page for a spatial computing headset called 'Aura Spatial Pro'. Cinematic 90px typography, glassmorphic specs grid, colorway selector, and feature cards. Deep space black (#050507) with blue accents (#2997ff)."
    },
    "code": {
      "react": "export default function AuraSpatial() { return <div className=\"bg-[#050507] text-white min-h-screen\">Aura Spatial Pro</div>; }",
      "html": "<!-- Aura Spatial Pro -->"
    }
  },
  {
    "id": "10",
    "slug": "raycast-glass-hud",
    "title": "CommandX Desktop Productivity HUD",
    "tagline": "Floating glassmorphism command bar with keyboard shortcuts, quick actions, and application launcher",
    "description": "A Raycast-inspired desktop productivity application featuring a centered translucent glass command palette, real-time fuzzy search, categorized action lists with keyboard navigation badges, and a live preview pane.",
    "category": "apps-tools",
    "style": "Glassmorphism HUD",
    "difficulty": "Intermediate",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Inter",
    "tags": [
      "Command Palette",
      "Raycast",
      "Glassmorphism",
      "Keyboard Shortcuts",
      "Productivity"
    ],
    "features": [
      "Centrally aligned floating glassmorphic palette with backdrop blur",
      "Live search input with instant category groupings",
      "Right-hand quick preview pane with markdown support",
      "Bottom action bar with primary action and secondary shortcuts",
      "Interactive hotkey badges (⌘ + Enter, Tab)"
    ],
    "colorPalette": {
      "name": "Raycast Frosted Obsidian",
      "bg": "#0c0d12",
      "accent": "#ff6363",
      "text": "#ffffff"
    },
    "previewUrl": "/previews/raycast-glass-hud/index.html",
    "stats": {
      "likes": 1640,
      "views": "20.9k",
      "vibecoders": "3.5k"
    },
    "aiPrompt": {
      "standard": "Build a Raycast-style command palette application called 'CommandX'. Dark background #0c0d12, red accent #ff6363, white text. Font: Inter for UI, JetBrains Mono for shortcuts.\n\nThe entire page simulates a desktop environment with a centered floating command palette.\n\nBackground: Dark ambient surface with subtle noise texture, faded desktop-like dock at bottom with app icons.\n\nCommand Palette (centered, max-w-2xl): Glassmorphic container (backdrop-blur-2xl, bg rgba(15,17,23,0.85), rounded-2xl, border border-white/15, shadow-2xl). Contains:\n- Search input with magnifying glass icon and placeholder 'Search commands, apps, and more...'\n- Categorized action list with section headers: 'Suggested', 'Applications', 'Commands', 'AI Actions'\n- Each item: icon, label text, and right-aligned keyboard shortcut badge (⌘N, ⌘T, ⇧⌘P, etc.)\n- Active/selected item has highlighted bg (bg-white/10) with subtle left border accent\n- Bottom action bar: 'Open' primary button, secondary text shortcuts (Tab to navigate, Enter to select, Esc to close)\n\nOutside palette: Faded desktop environment with dock icons at bottom edge.",
      "cursorPrompt": "Implement a Raycast command palette overlay called 'CommandX' using React and Tailwind CSS. Glassmorphic modal (backdrop-blur-2xl, bg rgba(15,17,23,0.85)), search input, categorized action list with keyboard shortcuts, active item state highlighting. Red accent (#ff6363), dark bg (#0c0d12).",
      "v0Prompt": "Raycast command bar UI called CommandX with glassmorphic search input, categorized action list (Suggested, Applications, Commands, AI Actions), keyboard shortcut badges, active item highlight, and bottom action bar. Dark theme with red accent.",
      "claudePrompt": "Create a keyboard-first command launcher palette called 'CommandX' inspired by Raycast. Glassmorphic floating UI with fuzzy search, categorized actions, keyboard shortcut badges, and desktop environment backdrop."
    },
    "code": {
      "react": "export default function CommandX() { return <div className=\"bg-[#0c0d12] text-white min-h-screen\">CommandX HUD</div>; }",
      "html": "<!-- CommandX HUD -->"
    }
  },
  {
    "id": "11",
    "slug": "supabase-cloud-studio",
    "title": "HyperDB PostgreSQL Cloud Studio",
    "tagline": "Developer database console with interactive SQL query runner, schema visualizer, and live data grid",
    "description": "A Supabase-inspired cloud database management studio featuring a left-hand navigation rail, multi-tab SQL editor with syntax highlighting, interactive database records table with sorting and pagination, and real-time connection indicators.",
    "category": "dashboards",
    "style": "Developer Studio / Green Emerald",
    "difficulty": "Advanced",
    "mode": "dark",
    "fontType": "mono",
    "defaultFont": "JetBrains Mono",
    "tags": [
      "Developer Tool",
      "Supabase Style",
      "SQL Editor",
      "Data Table",
      "Database Studio"
    ],
    "features": [
      "Multi-tab query runner with execution time counter",
      "Interactive table data grid with inline editing and pagination",
      "Database schema tree explorer (Tables, Views, Functions, Storage)",
      "Emerald green live connection status indicator",
      "One-click SQL query template snippets"
    ],
    "colorPalette": {
      "name": "Supabase Emerald Dark",
      "bg": "#121417",
      "accent": "#3ecf8e",
      "text": "#ededed"
    },
    "previewUrl": "/previews/supabase-cloud-studio/index.html",
    "stats": {
      "likes": 1980,
      "views": "28.5k",
      "vibecoders": "4.7k"
    },
    "aiPrompt": {
      "standard": "Create a Supabase-inspired cloud database studio called 'HyperDB'. Background #121417, emerald accent #3ecf8e, text #ededed. Font: JetBrains Mono for code/data, Inter for UI labels.\n\nLayout: Fixed left sidebar + main content area.\n\nLeft Sidebar (w-60, fixed): Navigation rail with icons and labels — Dashboard, Table Editor (active, emerald highlight), SQL Editor, Authentication, Storage, Edge Functions, Logs. HyperDB logo at top. Emerald connection status dot 'Connected' at bottom.\n\nMain Content: Top tab bar with 'query-1.sql' (active) and 'query-2.sql' tabs, plus '+' new tab button.\n\nSQL Editor Panel: Dark code block with syntax-highlighted SQL (SELECT statements with proper keyword coloring — blue for SELECT/FROM/WHERE, green for strings, white for identifiers). Green 'Run Query' button with play icon. Execution result badge '14ms • 25 rows'.\n\nData Table Grid below: Column headers (id, name, email, status, created_at) with sort arrows. 8 rows of realistic user data with alternating row backgrounds. Status column uses colored badges (active=green, inactive=gray, pending=amber). Pagination footer 'Showing 1-25 of 1,847 rows' with prev/next buttons.\n\nRight Panel (collapsible): Table schema inspector showing column definitions with types (uuid, text, timestamptz) and constraints (PK, NOT NULL).",
      "cursorPrompt": "Build a database studio web app called HyperDB with SQL query editor and live data table using Tailwind CSS and React. Left sidebar navigation (Dashboard, Tables, SQL Editor, Auth, Storage). Code editor with syntax highlighting. Data grid with sorting, pagination. Emerald green (#3ecf8e) accents on dark bg (#121417). JetBrains Mono for code.",
      "v0Prompt": "Supabase cloud database dashboard called HyperDB. Left sidebar navigation rail, multi-tab SQL query editor with syntax highlighting, 'Run Query' button with execution time badge, interactive data table with sorting and pagination, schema inspector panel. Dark theme with emerald accents.",
      "claudePrompt": "Implement a full database management interface called HyperDB with SQL code editor, sortable data grid with pagination, and schema browser. Left sidebar navigation, emerald connection status, JetBrains Mono font for code. Supabase-inspired dark theme."
    },
    "code": {
      "react": "export default function HyperDB() { return <div className=\"bg-[#121417] text-white min-h-screen\">HyperDB Studio</div>; }",
      "html": "<!-- HyperDB Studio -->"
    }
  },
  {
    "id": "12",
    "slug": "ai-canvas-copilot",
    "title": "Nexus AI Split-Screen Workspace",
    "tagline": "Conversational split-screen AI workspace with streaming markdown output, token badges, and prompt pill suggestions",
    "description": "A ChatGPT Canvas and Claude Artifacts-inspired AI workspace with a split-screen layout — conversational chat panel on the left, interactive document/code canvas on the right, featuring prompt suggestions, version history, and live token counters.",
    "category": "ai-workspaces",
    "style": "Split-Screen AI Canvas",
    "difficulty": "Intermediate",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Inter",
    "tags": [
      "AI Chat",
      "Canvas",
      "Claude Artifacts",
      "Prompt Pills",
      "Markdown Streaming"
    ],
    "features": [
      "Split-screen layout with resizable chat and canvas panels",
      "Smart prompt suggestion pills (Refactor, Add Tests, Explain)",
      "Streaming markdown message bubbles with copy code button",
      "Version history slider for generated artifacts",
      "Live token and generation cost counter"
    ],
    "colorPalette": {
      "name": "Anthropic Amber & Obsidian",
      "bg": "#101114",
      "accent": "#d97706",
      "text": "#f3f4f6"
    },
    "previewUrl": "/previews/ai-canvas-copilot/index.html",
    "stats": {
      "likes": 2450,
      "views": "37.9k",
      "vibecoders": "6.8k"
    },
    "aiPrompt": {
      "standard": "Create an AI workspace called 'Nexus' with split-pane layout. Background #101114, amber accent #d97706, text #f3f4f6. Font: Inter for UI, JetBrains Mono for code blocks.\n\nSPLIT LAYOUT — Left Pane (~45% width, chat): Model selector dropdown ('Nexus Pro 4.0 ▾'), token counter badge '2,847 tokens'. Chat conversation feed with User message bubble (right-aligned, dark bg asking 'Refactor this function to use TypeScript generics') and Assistant reply bubble (left-aligned with formatted code block including syntax highlighting and Copy Code button). Prompt suggestion pills at bottom: 'Add unit tests', 'Convert to async/await', 'Explain this code', 'Optimize performance'. Expandable textarea input with send button.\n\nRight Pane (~55% width, canvas): Tab bar with 'main.ts', 'utils.ts', 'types.ts' tabs. Code editor view with line numbers and syntax-highlighted TypeScript. Bottom toolbar with 'Apply Changes', 'Revert', version slider 'Version 3 of 5'.",
      "cursorPrompt": "Build a split-screen AI chat and artifact canvas called Nexus using React and Tailwind CSS. Left pane: chat with message bubbles, model selector, prompt pills. Right pane: code editor with tabs and version switcher. Amber accent (#d97706), dark bg (#101114).",
      "v0Prompt": "Claude Artifacts style split-screen AI workspace called Nexus. Left panel: chat with user/assistant messages, code blocks with copy button, prompt suggestion pills. Right panel: code editor with file tabs and version slider. Dark theme with amber accents.",
      "claudePrompt": "Design an AI assistant canvas layout called 'Nexus' with dual-pane chat (left) and live artifact rendering panel (right). Message bubbles, code syntax highlighting, prompt pills, model selector, version history slider."
    },
    "code": {
      "react": "export default function NexusAI() { return <div className=\"bg-[#101114] text-white min-h-screen\">Nexus AI Workspace</div>; }",
      "html": "<!-- Nexus AI Workspace -->"
    }
  },
  {
    "id": "13",
    "slug": "fintech-hologram-card",
    "title": "Aether Neobank Wealth Portal",
    "tagline": "3D holographic credit card with real-time spending breakdown, quick-send contacts, and live transaction ledger",
    "description": "A luxury fintech banking dashboard for a neobank called Aether, featuring an interactive holographic debit card with metallic gradients, monthly cashflow visualizations, one-click money transfers, and categorised spending analytics.",
    "category": "fintech-banking",
    "style": "Holographic Glass & Neobank",
    "difficulty": "Intermediate",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Plus Jakarta Sans",
    "tags": [
      "Fintech",
      "3D Card",
      "Banking",
      "Neobank",
      "Charts"
    ],
    "features": [
      "Interactive 3D tilting credit card with iridescent metallic sheen",
      "Monthly spending breakdown with animated SVG progress rings",
      "Live transaction stream with merchant avatars and receipt badges",
      "Instant quick-send money contacts carousel",
      "Security toggle controls (Lock Card, Virtual CVV, Freeze)"
    ],
    "colorPalette": {
      "name": "Electric Cyan & Midnight",
      "bg": "#070a14",
      "accent": "#06b6d4",
      "text": "#f8fafc"
    },
    "previewUrl": "/previews/fintech-hologram-card/index.html",
    "stats": {
      "likes": 2190,
      "views": "33.4k",
      "vibecoders": "5.4k"
    },
    "aiPrompt": {
      "standard": "Design a fintech banking dashboard for 'Aether Neobank'. Background #070a14, cyan accent #06b6d4, text #f8fafc. Font: Plus Jakarta Sans for headings, Inter for body, JetBrains Mono for numbers.\n\nSection 1 — Top Bar: 'Aether' logo, notification bell, user avatar.\n\nSection 2 — Balance Header: Large '$48,290.40' in bold, +2.4% green trend arrow, 'Total Balance' label.\n\nSection 3 — Virtual Debit Card (centerpiece): Large card (aspect-ratio 1.586/1, rounded-2xl) with layered CSS gradients creating iridescent cyan-to-purple metallic sheen. Embossed card number '•••• •••• •••• 4829', cardholder 'ARIA CHEN', expiry '09/28', Visa logo area.\n\nSection 4 — Quick-Send Contacts: Horizontal row of 5 circular avatar placeholders with names (Sarah, Mike, Luna, Dev, Aria) and '+' add button.\n\nSection 5 — Spending Breakdown: 4 category rows with progress bars — Food & Dining (35%, $1,420), Transport (22%, $892), Shopping (28%, $1,135), Entertainment (15%, $608).\n\nSection 6 — Transaction History: 8 rows with merchant icon circle, merchant name (Spotify, Amazon, Uber, Apple Store...), category badge, timestamp, amount (+$2,400 green, -$64.99 white).\n\nSection 7 — Security Controls: 3 toggle buttons — 'Lock Card', 'Virtual CVV', 'Freeze' with icons.",
      "cursorPrompt": "Create a neobank dashboard called Aether with stylish gradient virtual debit card (cyan-to-purple metallic), balance header ($48,290.40), quick-send contacts row, spending analytics with progress bars, transaction history feed, security toggle controls. Cyan accent (#06b6d4), midnight bg (#070a14).",
      "v0Prompt": "Fintech dashboard for Aether Neobank. Holographic debit card with metallic gradients, balance display, quick transfer contacts, spending breakdown bars, transaction history list with merchant names, security controls. Dark theme with cyan accents.",
      "claudePrompt": "Build a modern banking dashboard for Aether Neobank with virtual card visualizer (iridescent gradients), cashflow charts, quick-send contacts, transaction ledger, and security controls. Dark bg #070a14, cyan accent #06b6d4."
    },
    "code": {
      "react": "export default function AetherNeobank() { return <div className=\"bg-[#070a14] text-white min-h-screen\">Aether Neobank</div>; }",
      "html": "<!-- Aether Neobank -->"
    }
  },
  {
    "id": "14",
    "slug": "bento-modular-grid",
    "title": "Prism Modular Design System",
    "tagline": "Modular bento grid showcasing features with live mini-charts, edge map, and interactive hover widgets",
    "description": "A showcase of the modern Bento Grid design pattern for a design system platform called Prism, featuring multi-span cards with live sparklines, global edge latency visualizations, team avatar stacks, and glowing hover borders.",
    "category": "bento-features",
    "style": "Modular Bento Grid",
    "difficulty": "Beginner",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Plus Jakarta Sans",
    "tags": [
      "Bento Grid",
      "Apple Style",
      "Feature Grid",
      "Interactive Cards",
      "UI Pattern"
    ],
    "features": [
      "Adaptive CSS grid with 1x1, 2x1, and 2x2 modular cards",
      "Interactive live metrics sparkline card",
      "Global low-latency edge map visualizer card",
      "Customer testimonial with animated avatar stack",
      "Hover-activated glowing gradient outlines"
    ],
    "colorPalette": {
      "name": "Deep Slate & Indigo",
      "bg": "#090b10",
      "accent": "#818cf8",
      "text": "#ffffff"
    },
    "previewUrl": "/previews/bento-modular-grid/index.html",
    "stats": {
      "likes": 2740,
      "views": "41.6k",
      "vibecoders": "7.1k"
    },
    "aiPrompt": {
      "standard": "Build a modern bento grid feature section for a design system platform called 'Prism'. Background #090b10, indigo accent #818cf8, white text. Font: Plus Jakarta Sans for headings, Inter for body.\n\nSection Header: 'Built for the modern stack' (40px bold), subtitle about modular composable architecture.\n\nBENTO GRID using CSS grid (grid-cols-3, gap-6) with varied spans:\n- Card A (col-span-2, row-span-2): Large hero card 'Real-Time Analytics' with mock mini-dashboard — bar chart using CSS columns of varying heights, live counter '14,892 events/sec', sparkline SVG line.\n- Card B (col-span-2): 'Global Edge Network' with simplified world map using positioned dots for cities (San Francisco, New York, London, Tokyo, Sydney) with latency labels (12ms, 23ms, 8ms, etc.).\n- Card C (1x1): 'Uptime' with large '99.99%' metric and pulsing green status dot.\n- Card D (1x1): 'Security' with shield icon and 'SOC 2 Type II' certification badge.\n- Card E (col-span-2): 'Developer Experience' with mock code snippet in monospace.\n- Card F (1x1): Team avatar stack (5 overlapping circles) with '+2.4k contributors' label.\n\nAll cards have subtle hover transitions: border-indigo-500/50 glow, slight translateY(-2px).\n\nBottom CTA: 'Start Building with Prism' button.",
      "cursorPrompt": "Create a responsive Bento Grid called Prism using Tailwind CSS grid (col-span-1, col-span-2, row-span-2). Cards: analytics dashboard, edge map, uptime metric, security badge, code snippet, team avatars. Hover glow borders (border-indigo-500/50). Dark bg #090b10.",
      "v0Prompt": "Bento grid feature showcase for Prism design system. 6 modular cards with analytics, edge map, uptime, security, code snippet, team avatars. Varied spans, glowing hover states. Dark theme with indigo accents.",
      "claudePrompt": "Implement a modern bento grid layout for Prism with varied card spans, live widget data (sparklines, maps, metrics), team avatar stack, and sleek dark mode styling. Background #090b10, indigo accent #818cf8."
    },
    "code": {
      "react": "export default function PrismBento() { return <div className=\"bg-[#090b10] text-white min-h-screen\">Prism Design System</div>; }",
      "html": "<!-- Prism Design System -->"
    }
  },
  {
    "id": "15",
    "slug": "notion-clean-workspace",
    "title": "Aero Distraction-Free Workspace",
    "tagline": "Clean document editor with floating slash menu, drag-drop blocks, and nested page tree sidebar",
    "description": "A Notion-inspired minimalist workspace for a productivity app called Aero, featuring customizable page banners with emoji icons, breadcrumb navigation, interactive document blocks (to-dos, callouts, toggles), and slash-command inserters.",
    "category": "apps-tools",
    "style": "Minimalist Document Workspace",
    "difficulty": "Intermediate",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Inter",
    "tags": [
      "Notion Style",
      "Minimalist",
      "Editor",
      "Slash Menu",
      "Productivity"
    ],
    "features": [
      "Customizable page header banner with emoji selector",
      "Slash command trigger menu (/heading, /todo, /table, /callout)",
      "Interactive to-do checklist with strikethrough animations",
      "Collapsible toggle block dropdowns",
      "Right sidebar table of contents overview"
    ],
    "colorPalette": {
      "name": "Notion Monolith Dark",
      "bg": "#191919",
      "accent": "#2eaadc",
      "text": "#e3e3e3"
    },
    "previewUrl": "/previews/notion-clean-workspace/index.html",
    "stats": {
      "likes": 1530,
      "views": "19.3k",
      "vibecoders": "3.1k"
    },
    "aiPrompt": {
      "standard": "Create a Notion-style document workspace called 'Aero'. Background #191919, blue accent #2eaadc, text #e3e3e3. Font: Inter for all text.\n\nSPLIT LAYOUT — Left Sidebar (w-64): Workspace header 'Aria's Workspace ▾' with avatar. Page tree with nested items using emoji + names (📋 Project Roadmap, 📝 Meeting Notes, 🎯 Q3 OKRs, 📊 Sprint Board, ⚙️ Settings) with expandable indent levels. 'New Page' button at bottom.\n\nMain Content: Top breadcrumb 'Workspace / Engineering / Sprint Board'. Page header with large emoji '🚀' and editable title 'Sprint 24 — Launch Checklist'. Cover banner area with subtle gradient.\n\nDocument body with rich blocks: H2 heading 'Pre-Launch Tasks'. Interactive to-do checklist (✅ Deploy staging environment, ✅ Run full test suite, ☐ Update API documentation, ☐ Security audit review, ☐ Performance benchmarks — checked items have strikethrough). Callout block with 💡 icon 'Remember to notify the QA team 48 hours before go-live'. Toggle block '▶ Technical Specifications' (collapsed state).\n\nFloating slash command menu overlay showing options: Text, Heading 1, To-do list, Callout, Code, Table — with icons for each.",
      "cursorPrompt": "Build a Notion-style document page called Aero in React and Tailwind CSS. Left sidebar with page tree, breadcrumbs, emoji page header, interactive to-do checkboxes with strikethrough, callout block, toggle block, and floating slash command menu. Dark bg #191919, blue accent #2eaadc.",
      "v0Prompt": "Notion clone workspace called Aero. Left sidebar with page tree and emojis, editable page title with emoji, to-do checklist with checkboxes, callout blocks, toggle sections, and slash command popup menu. Dark theme.",
      "claudePrompt": "Design a clean Notion-inspired workspace called Aero with page tree sidebar, rich document blocks (to-dos, callouts, toggles), slash command inserter, and breadcrumb navigation. Dark theme #191919."
    },
    "code": {
      "react": "export default function AeroWorkspace() { return <div className=\"bg-[#191919] text-white min-h-screen\">Aero Workspace</div>; }",
      "html": "<!-- Aero Workspace -->"
    }
  },
  {
    "id": "16",
    "slug": "arc-gradient-browser",
    "title": "Vortex Arc Web Browser",
    "tagline": "Arc Browser style vertical tab dock with workspace spaces and gradient pill navigation",
    "description": "The Arc Browser layout recreated for a modern web browser called Vortex, featuring a collapsible left sidebar with pinned app icons, workspace space switchers, split-view layouts, and smooth gradient background environments.",
    "category": "apps-tools",
    "style": "Gradient Glassmorphism",
    "difficulty": "Intermediate",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Plus Jakarta Sans",
    "tags": [
      "Arc Browser",
      "Vertical Tabs",
      "Dock",
      "Modern App",
      "Glassmorphism"
    ],
    "features": [
      "Collapsible vertical sidebar with pinned app icons",
      "Workspace space switcher pills (Work, Personal, Dev)",
      "Split-screen dual view tab layout",
      "Floating URL/Search command pill at the top",
      "Customizable ambient gradient background mesh"
    ],
    "colorPalette": {
      "name": "Arc Sunset Gradient",
      "bg": "#0f0e17",
      "accent": "#ff8906",
      "text": "#fffffe"
    },
    "previewUrl": "/previews/arc-gradient-browser/index.html",
    "stats": {
      "likes": 1720,
      "views": "22.5k",
      "vibecoders": "3.7k"
    },
    "aiPrompt": {
      "standard": "Design an Arc Browser-style web browser shell called 'Vortex'. Background #0f0e17, orange accent #ff8906, text #fffffe. Font: Plus Jakarta Sans.\n\nVertical Left Sidebar (w-14 collapsed): Pinned app icons vertically stacked — colored circles representing GitHub (gray), Figma (purple), Notion (black/white), Slack (multi), Gmail (red), Twitter/X (white). Notification dot on Slack icon. Below: workspace spaces switcher pills stacked vertically — 'Work' (orange accent, active), 'Personal' (blue), 'Dev' (green) with active indicator bar.\n\nMain Area: Floating URL/search pill (rounded-full, bg glass, green lock icon, 'vortex.arc/spaces/work'). Browser tab bar with 'Dashboard — Figma' (active), 'GitHub PRs', '+ New Tab'. Main content showing a mock rendered webpage.\n\nAmbient gradient mesh background (warm orange to purple radial gradients with blur). Bottom left: tiny 'navigate ↔ open' keyboard hint.",
      "cursorPrompt": "Build an Arc browser UI shell called Vortex using React and Tailwind CSS. Vertical tab dock with pinned app icons, workspace spaces selector (Work/Personal/Dev), floating URL search pill, split-screen web frame, ambient gradient mesh. Orange accent (#ff8906), dark bg (#0f0e17).",
      "v0Prompt": "Arc Browser style interface called Vortex. Vertical sidebar with pinned app icons and notification dots, space switcher pills, floating search bar, tabbed browser content, and ambient gradient mesh background. Dark theme with orange accents.",
      "claudePrompt": "Create a modern desktop-style app shell called Vortex inspired by Arc Browser. Vertical navigation dock with app icons, workspace spaces, gradient ambient themes, and floating URL bar."
    },
    "code": {
      "react": "export default function VortexBrowser() { return <div className=\"bg-[#0f0e17] text-white min-h-screen\">Vortex Browser</div>; }",
      "html": "<!-- Vortex Browser -->"
    }
  },
  {
    "id": "17",
    "slug": "descript-video-creator",
    "title": "ClipCraft AI Video Studio",
    "tagline": "Video playback studio with synchronized transcript highlighting and interactive audio waveform timeline",
    "description": "A Descript and Loom-inspired video editing dashboard for ClipCraft, featuring an interactive video player, word-by-word synced transcript editor, audio waveform timeline with chapter markers, and AI-powered editing tools.",
    "category": "ai-workspaces",
    "style": "Creator Studio / Dark Purple",
    "difficulty": "Advanced",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Inter",
    "tags": [
      "Video Editor",
      "Descript",
      "Waveform",
      "Transcript Sync",
      "Creator Tools"
    ],
    "features": [
      "Synced transcript with word-level click-to-seek video playback",
      "Interactive audio waveform track scrubber",
      "One-click 'Remove Filler Words' AI action badge",
      "Video export resolution and aspect ratio modal",
      "Comments and team feedback timestamp markers"
    ],
    "colorPalette": {
      "name": "Descript Indigo Studio",
      "bg": "#101015",
      "accent": "#6366f1",
      "text": "#f4f4f5"
    },
    "previewUrl": "/previews/descript-video-creator/index.html",
    "stats": {
      "likes": 1610,
      "views": "21.0k",
      "vibecoders": "3.3k"
    },
    "aiPrompt": {
      "standard": "Build a video editing studio called 'ClipCraft'. Background #101015, indigo accent #6366f1, text #f4f4f5. Font: Inter for UI, JetBrains Mono for timestamps.\n\nTop Toolbar: 'ClipCraft' logo, project name 'Q3 Product Demo', share and export buttons.\n\nMain Split Layout — Left (~60%): Video player area (16:9 dark rectangle, centered play button triangle, progress bar showing 02:34/05:12, playback controls: rewind, play/pause, forward, volume slider).\n\nRight (~40%): Transcript panel with timestamped paragraphs: '[00:00] Welcome to the Q3 product update...', '[00:45] Let me walk you through the new dashboard...', '[01:23] The performance improvements are significant...' — with word-level highlighting on current word and clickable timestamps.\n\nAI Action Badges row: 'Remove Filler Words' (sparkle icon), 'Auto-Chapters', 'Generate Summary' buttons.\n\nBottom Panel: Audio waveform timeline — vertical bars of varying heights representing amplitude, playhead line, chapter markers, timestamp ruler. Export hint: resolution selector (1080p, 720p), aspect ratio pills (16:9, 9:16, 1:1).",
      "cursorPrompt": "Create a video editing interface called ClipCraft with video player, transcript text editor with timestamped paragraphs, audio waveform timeline scrubber, AI action buttons (Remove Filler Words, Auto-Chapters). Indigo accent (#6366f1), dark bg (#101015).",
      "v0Prompt": "Descript style video editor called ClipCraft with transcript sync, video player with playback controls, audio waveform timeline with chapter markers, and AI action badges. Dark theme with indigo accents.",
      "claudePrompt": "Implement a video creator studio called ClipCraft with word-level transcript seek, video player, waveform timeline, and AI editing tools. Dark theme #101015 with indigo accents."
    },
    "code": {
      "react": "export default function ClipCraft() { return <div className=\"bg-[#101015] text-white min-h-screen\">ClipCraft Video Studio</div>; }",
      "html": "<!-- ClipCraft Video Studio -->"
    }
  },
  {
    "id": "18",
    "slug": "midjourney-art-feed",
    "title": "Lumina AI Art & Generative Gallery",
    "tagline": "Masonry image grid with prompt inspection overlays, aspect ratio filters, and upscale action buttons",
    "description": "A Midjourney and Leonardo AI-inspired generative art community gallery called Lumina, featuring responsive masonry image grids, one-click prompt inspectors, style filter chips, and generation parameter badges.",
    "category": "ai-workspaces",
    "style": "Visual Masonry & Neon",
    "difficulty": "Beginner",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Plus Jakarta Sans",
    "tags": [
      "Midjourney",
      "AI Art",
      "Masonry Grid",
      "Prompt Inspector",
      "Image Feed"
    ],
    "features": [
      "Dynamic masonry grid for varying image proportions",
      "Hover overlay with full AI prompt, model version, and seed",
      "One-click 'Copy Full Prompt' and 'Remix' buttons",
      "Aspect ratio and style filter chips",
      "Image detail modal with variations and upscale triggers"
    ],
    "colorPalette": {
      "name": "Cyber Magenta & Dark Charcoal",
      "bg": "#0c0d10",
      "accent": "#ec4899",
      "text": "#f9fafb"
    },
    "previewUrl": "/previews/midjourney-art-feed/index.html",
    "stats": {
      "likes": 2890,
      "views": "45.2k",
      "vibecoders": "8.2k"
    },
    "aiPrompt": {
      "standard": "Create a Midjourney-style AI art gallery called 'Lumina'. Background #0c0d10, pink accent #ec4899, text #f9fafb. Font: Plus Jakarta Sans headings, Inter body.\n\nTop Bar: 'Lumina' logo, search input, style filter chips: 'All Styles', 'Photorealistic', 'Anime', 'Cyberpunk', '3D Render', 'Abstract' (active chip highlighted pink). Aspect ratio pills: '16:9', '1:1', '9:16', 'All'.\n\nMasonry Grid (3-4 columns): 12-15 art cards of varying heights using CSS gradients as art placeholders — each card with a DIFFERENT gradient (purple-to-blue, orange-to-pink, green-to-cyan, dark-red-to-amber, etc.). Each card has hover overlay showing prompt text, model badge 'Lumina v5.2', seed number. Bottom hover buttons: U1-U4 (upscale), V1-V4 (variation), 'Copy Prompt', 'Remix'.\n\nFooter: '847,293 artworks generated this week' stat.",
      "cursorPrompt": "Build a responsive masonry image gallery called Lumina with hover prompt inspection overlays, style filter chips (Photorealistic, Anime, Cyberpunk, etc.), aspect ratio filters, upscale (U1-U4) and variation (V1-V4) buttons. Pink accent (#ec4899), dark bg (#0c0d10).",
      "v0Prompt": "Midjourney art feed called Lumina with masonry grid of gradient art cards, prompt inspector overlays on hover, style and aspect ratio filter chips, upscale/variation action buttons. Dark theme with pink accents.",
      "claudePrompt": "Design an AI art showcase gallery called Lumina with dynamic masonry layout, hover prompt metadata overlays, filter chips, and upscale/remix action buttons. Pink accent #ec4899 on dark bg #0c0d10."
    },
    "code": {
      "react": "export default function LuminaGallery() { return <div className=\"bg-[#0c0d10] text-white min-h-screen\">Lumina Gallery</div>; }",
      "html": "<!-- Lumina Gallery -->"
    }
  },
  {
    "id": "19",
    "slug": "cal-modern-scheduler",
    "title": "CalSync Executive Meeting Booking",
    "tagline": "Timezone-aware date picker, dynamic slot selector, and frictionless meeting confirmation flow",
    "description": "A Cal.com-inspired scheduling interface for an executive meeting booking platform called CalSync, featuring an interactive month calendar, dynamic time slot columns with timezone detection, host profile cards, and smooth booking confirmation flows.",
    "category": "apps-tools",
    "style": "Clean Minimalist Booking",
    "difficulty": "Intermediate",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Inter",
    "tags": [
      "Cal.com",
      "Calendar",
      "Scheduler",
      "Booking Flow",
      "Timezone"
    ],
    "features": [
      "Interactive monthly calendar grid with available day indicators",
      "Real-time timezone detection dropdown",
      "Dynamic time slot list with duration toggles",
      "Host profile avatar with meeting description",
      "Smooth confirmation modal with calendar invite"
    ],
    "colorPalette": {
      "name": "Slate & Emerald Booking",
      "bg": "#0f1117",
      "accent": "#10b981",
      "text": "#ffffff"
    },
    "previewUrl": "/previews/cal-modern-scheduler/index.html",
    "stats": {
      "likes": 1480,
      "views": "18.7k",
      "vibecoders": "2.9k"
    },
    "aiPrompt": {
      "standard": "Build a Cal.com-style scheduling interface called 'CalSync'. Background #0f1117, emerald accent #10b981, white text. Font: Inter.\n\nClean header with 'CalSync' logo.\n\nMain Booking Card (max-w-4xl centered, rounded-2xl, border): Split into 3 columns —\n\nLeft Column: Host profile — circular avatar, 'Aria Chen', 'CEO & Co-Founder', meeting title '30 Minute Strategy Call', duration '30 min', Google Meet badge, description text.\n\nCenter Column: Interactive month calendar grid for August 2026 — 7-column grid (Sun-Sat headers), dates 1-31 with correct alignment, available dates in white, unavailable dates dimmed, selected date highlighted with emerald bg circle, today marked.\n\nRight Column: Time slot list for selected date 'Thursday, Aug 20' — vertical list of time buttons: '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '2:00 PM', '2:30 PM', '3:00 PM'. Selected slot gets emerald highlight. 'Next' confirmation button at bottom.\n\nTimezone selector: 'Asia/Kolkata (GMT+5:30) ▾' dropdown at bottom.",
      "cursorPrompt": "Create a modern scheduling UI called CalSync with calendar date picker (August 2026 grid), time slot selector column, host profile card with avatar, timezone toggle dropdown. Emerald accent (#10b981), dark bg (#0f1117). React + Tailwind CSS.",
      "v0Prompt": "Cal.com meeting scheduler called CalSync with calendar grid, time slots column, host avatar and meeting details, timezone selector, and booking confirmation button. Dark theme with emerald accents.",
      "claudePrompt": "Implement a clean meeting scheduling widget called CalSync with interactive date picking (calendar grid), time slot selection column, host profile card, and confirmation flow. Dark theme #0f1117 with emerald accent #10b981."
    },
    "code": {
      "react": "export default function CalSync() { return <div className=\"bg-[#0f1117] text-white min-h-screen\">CalSync Scheduler</div>; }",
      "html": "<!-- CalSync Scheduler -->"
    }
  },
  {
    "id": "20",
    "slug": "cyberpunk-dev-terminal",
    "title": "NetSec Cyber Defense Command",
    "tagline": "Interactive ASCII header, functional bash commands, CRT scanlines, and phosphor green monospace interface",
    "description": "A cyberpunk terminal-style cybersecurity operations center called NetSec, featuring retro CRT scanline overlays, ASCII art security headers, interactive command-line prompts with functional command parsing, and live network monitoring displays.",
    "category": "portfolios-personal",
    "style": "Cyberpunk Terminal / Matrix Green",
    "difficulty": "Intermediate",
    "mode": "dark",
    "fontType": "mono",
    "defaultFont": "JetBrains Mono",
    "tags": [
      "Cyberpunk",
      "Terminal",
      "Portfolio",
      "CLI",
      "ASCII Art"
    ],
    "features": [
      "Interactive command line input with history and auto-complete",
      "Built-in command parser (help, scan, nodes, status, logs)",
      "CRT scanline and flicker effect toggle",
      "ASCII art security banner on startup",
      "Network traffic monitor with threat level gauge"
    ],
    "colorPalette": {
      "name": "Matrix Phosphor Green",
      "bg": "#050805",
      "accent": "#22c55e",
      "text": "#4ade80"
    },
    "previewUrl": "/previews/cyberpunk-dev-terminal/index.html",
    "stats": {
      "likes": 2310,
      "views": "35.1k",
      "vibecoders": "6.2k"
    },
    "aiPrompt": {
      "standard": "Build a cyberpunk terminal cybersecurity center called 'NetSec'. Background #050805, green accent #22c55e, phosphor green text #4ade80. Font: JetBrains Mono for everything.\n\nEntire page is a full-screen terminal with phosphor green on black.\n\nCRT Effect: Repeating linear gradient scanline overlay (1px transparent, 1px rgba(0,255,0,0.03)), subtle screen flicker CSS animation.\n\nASCII Art Banner: Large monospace block art spelling 'NETSEC' using box-drawing characters.\n\nBoot Sequence: '[BOOT] NetSec Defense Core v4.2.1 initialized...', '[OK] Firewall active — 847 rules loaded', '[OK] IDS/IPS monitoring 12 network segments', '[WARN] 3 suspicious connections flagged'.\n\nInteractive Terminal: Prompt area 'operator@netsec:~$ ' with mock command history — 'scan --network 10.0.0.0/24' output showing discovered hosts table, 'status' showing system health bars (CPU 34%, Memory 67%, Threats blocked: 14,293), 'nodes' listing active defense nodes with colored status dots.\n\nBottom Split: Left — network traffic monitor (IP addresses with packet counts). Right — threat level gauge showing 'LOW' in green.",
      "cursorPrompt": "Create an interactive CLI terminal called NetSec in React with command history, ASCII art banner, CRT scanline effects, boot sequence text, mock command outputs (scan, status, nodes). Phosphor green (#4ade80) on black (#050805). JetBrains Mono font.",
      "v0Prompt": "Cyberpunk terminal for NetSec cyber defense. Full-screen CLI with ASCII logo, CRT scanline overlay, boot sequence, interactive command outputs, network traffic monitor, threat gauge. Green monospace on black.",
      "claudePrompt": "Implement an interactive developer terminal website called NetSec with command parser, CRT scanline effects, ASCII art header, system health monitoring, and network traffic display. Phosphor green on black theme."
    },
    "code": {
      "react": "export default function NetSec() { return <div className=\"bg-[#050805] text-[#4ade80] min-h-screen font-mono\">NetSec Terminal</div>; }",
      "html": "<!-- NetSec Terminal -->"
    }
  },
  {
    "id": "21",
    "slug": "luxury-fashion-lookbook",
    "title": "Maison De L'Ombre Haute Couture",
    "tagline": "Asymmetric magazine grid, sticky filter drawer, and high-contrast editorial serif typography",
    "description": "A luxury editorial fashion lookbook for haute couture house Maison De L'Ombre, featuring oversized serif typography, asymmetrical product photography grids, sticky collection filters, and interactive quick-look slideout drawers.",
    "category": "portfolios-personal",
    "style": "Editorial Luxury & Serif",
    "difficulty": "Beginner",
    "mode": "dark",
    "fontType": "serif",
    "defaultFont": "Playfair Display",
    "tags": [
      "E-commerce",
      "Editorial",
      "Fashion",
      "Typography",
      "Lookbook"
    ],
    "features": [
      "Asymmetrical magazine-style product grid with hover zoom",
      "Sticky left editorial index with category counts",
      "Interactive quick-add drawer with size and color selectors",
      "Oversized serif editorial headlines (Playfair Display)",
      "Seamless sticky add-to-bag banner on scroll"
    ],
    "colorPalette": {
      "name": "Monochrome Cream & Charcoal",
      "bg": "#0f0f11",
      "accent": "#e2d9c8",
      "text": "#f5f5f5"
    },
    "previewUrl": "/previews/luxury-fashion-lookbook/index.html",
    "stats": {
      "likes": 1390,
      "views": "17.2k",
      "vibecoders": "2.8k"
    },
    "aiPrompt": {
      "standard": "Create a luxury fashion lookbook for 'Maison De L'Ombre'. Background #0f0f11, cream accent #e2d9c8, text #f5f5f5. Font: Playfair Display for headlines (serif), Inter for body.\n\nNavbar: 'MAISON DE L'OMBRE' in uppercase tracked Playfair Display, nav links 'Collections', 'Lookbook', 'Atelier', 'Journal' in small caps, shopping bag icon with count badge.\n\nEditorial Hero: Full-width section with oversized 80px+ serif headline 'Autumn/Winter 2026', subtitle 'The Shadow Collection' in light weight tracked text, understated 'View Lookbook' button.\n\nAsymmetric Magazine Grid: 2-column layout with varying sized product cards — large card on left (tall gradient placeholder in warm tones), 2 smaller stacked on right. Each card: hover zoom container, product name ('Obsidian Silk Drape Gown'), price ('€4,890'), subtle 'Quick Look' overlay.\n\nSticky Left Index Sidebar: 'I. Eveningwear (12)', 'II. Resort (8)', 'III. Accessories (15)', 'IV. Limited Edition (4)' in small serif.\n\nPull-Quote: Large italicized serif 'Elegance is not about being noticed, it is about being remembered.'\n\nSlide-Over Bag Drawer hint: Peek of right-side drawer with 1 item, subtotal, 'View Bag →'.",
      "cursorPrompt": "Build a high-fashion editorial lookbook called Maison De L'Ombre using React and Tailwind CSS. Asymmetrical product grid with hover zoom, oversized Playfair Display serif headlines, sticky category sidebar, editorial pull-quotes, slide-over cart drawer. Cream accent (#e2d9c8), dark bg (#0f0f11).",
      "v0Prompt": "Editorial fashion store lookbook for Maison De L'Ombre. Oversized serif typography (Playfair Display), asymmetric product grid, sticky index sidebar, editorial pull-quotes, and slideout cart. Dark theme with cream accents.",
      "claudePrompt": "Design a luxury fashion lookbook website for Maison De L'Ombre with editorial serif typography (Playfair Display), asymmetrical responsive product showcase, sticky navigation index, and slide-over bag drawer."
    },
    "code": {
      "react": "export default function MaisonLookbook() { return <div className=\"bg-[#0f0f11] text-white min-h-screen\">Maison De L'Ombre</div>; }",
      "html": "<!-- Maison De L'Ombre -->"
    }
  },
  {
    "id": "22",
    "slug": "crypto-swap-analytics",
    "title": "Vortex DEX Token Swap & Pool",
    "tagline": "Candlestick chart, slippage controls, token swap card, and one-click wallet connection",
    "description": "A Uniswap-inspired decentralized exchange called Vortex, featuring interactive candlestick price charts with timeframe toggles, token swap cards with gas fee estimators, wallet connection modals, and liquidity pool statistics.",
    "category": "fintech-banking",
    "style": "DeFi Neon & Dark Glass",
    "difficulty": "Advanced",
    "mode": "dark",
    "fontType": "mono",
    "defaultFont": "JetBrains Mono",
    "tags": [
      "Web3",
      "DEX",
      "Crypto Swap",
      "Candlestick Chart",
      "DeFi"
    ],
    "features": [
      "Interactive candlestick chart with volume bars and timeframe selector",
      "Token swap card with instant rate calculation and slippage settings",
      "Wallet connect modal with multi-chain badges",
      "Live liquidity pool APY and 24h volume stats",
      "Recent transactions trade ticker table"
    ],
    "colorPalette": {
      "name": "DeFi Indigo & Hot Pink",
      "bg": "#0d0e15",
      "accent": "#f43f5e",
      "text": "#f8fafc"
    },
    "previewUrl": "/previews/crypto-swap-analytics/index.html",
    "stats": {
      "likes": 2050,
      "views": "29.8k",
      "vibecoders": "4.9k"
    },
    "aiPrompt": {
      "standard": "Build a Web3 token swap interface called 'Vortex DEX'. Background #0d0e15, rose accent #f43f5e, text #f8fafc. Font: JetBrains Mono for prices/data, Inter for UI.\n\nTop Bar: 'Vortex' logo (gradient text), nav: Swap (active), Pool, Stake, Analytics. 'Connect Wallet' button with wallet icon.\n\nMain Split Layout — Left (~65%): Candlestick price chart area using CSS vertical lines with colored blocks (green=up, red=down). Timeline selector pills: '1H', '4H', '1D' (active), '1W', '1M'. Pair label 'ETH/USDC' with price '$3,847.62' and 24h change '+5.2%' green. 24h volume '$2.4B'. Below chart: recent trades ticker table — Price, Amount (ETH), Total (USDC), Time — 6 rows alternating green/red.\n\nRight (~35%): Token swap card (rounded-2xl, glass bg): 'You Pay' input with ETH icon, amount '1.5', USD value '$5,771.43', Max button. Arrow swap icon center. 'You Receive' USDC input with calculated '5,756.21'. Slippage '0.5% ▾'. 'Swap' rose gradient button. Gas estimate '~$4.21 • Fast (15s)'.\n\nBottom: Liquidity pool stats cards — TVL $847M, APY 12.4%, Your Position 0.05%.",
      "cursorPrompt": "Create a DeFi crypto swap interface called Vortex in React and Tailwind CSS. Candlestick chart with CSS, token swap card (ETH→USDC), slippage settings, wallet connect button, recent trades ticker, liquidity stats. Rose accent (#f43f5e), dark bg (#0d0e15). JetBrains Mono for data.",
      "v0Prompt": "Uniswap style crypto DEX called Vortex with price chart (candlestick), token swap card with slippage settings, wallet connect modal, trade ticker table, and liquidity pool stats. Dark theme with rose accents.",
      "claudePrompt": "Implement a complete Web3 swap and analytics dashboard called Vortex DEX with interactive candlestick chart, token swap card (ETH/USDC), trade ticker, wallet connection, and pool statistics."
    },
    "code": {
      "react": "export default function VortexDEX() { return <div className=\"bg-[#0d0e15] text-white min-h-screen\">Vortex DEX</div>; }",
      "html": "<!-- Vortex DEX -->"
    }
  },
  {
    "id": "23",
    "slug": "kinetic-agency-marquee",
    "title": "HyperKinetic Creative Design Studio",
    "tagline": "Infinite logo marquees, giant hover-distorted typography, and interactive case study cards",
    "description": "A bold, award-winning creative agency website for HyperKinetic studio, featuring infinite scrolling partner marquees, kinetic headline typography with cursor hover effects, interactive project case studies, and high-impact contact sections.",
    "category": "saas-landings",
    "style": "Brutalist Kinetic / High Energy",
    "difficulty": "Beginner",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Space Grotesk",
    "tags": [
      "Agency",
      "Kinetic Typography",
      "Marquee",
      "Brutalist",
      "Case Studies"
    ],
    "features": [
      "Infinite CSS marquee ticker for client logos and awards",
      "Giant headline typography with gradient hover distortion",
      "Full-bleed project showcase cards with category tags",
      "Interactive service accordion with animated plus icons",
      "Sticky 'Book a Call' floating badge"
    ],
    "colorPalette": {
      "name": "High-Contrast Solar Orange",
      "bg": "#0a0a0c",
      "accent": "#f97316",
      "text": "#ffffff"
    },
    "previewUrl": "/previews/kinetic-agency-marquee/index.html",
    "stats": {
      "likes": 1870,
      "views": "27.4k",
      "vibecoders": "4.1k"
    },
    "aiPrompt": {
      "standard": "Design a creative agency landing page for 'HyperKinetic'. Background #0a0a0c, orange accent #f97316, white text. Font: Space Grotesk for headings, Inter for body.\n\nMinimal Navbar: 'HYPERKINETIC' in bold tracked sans, links 'Work', 'About', 'Careers'.\n\nInfinite Marquee Ticker #1: Client logos scrolling horizontally — text-only logos: 'Google', 'Nike', 'Apple', 'Spotify', 'Netflix', 'Airbnb', 'Meta', 'Tesla' using CSS translateX animation loop.\n\nGiant Hero Typography: 100px+ headline 'We Design Digital Experiences That Matter.' with gradient hover effect on key word (orange accent).\n\nCase Study Cards: 3 full-width project cards stacked — each with gradient background placeholder, project title ('Nike Air Max Reimagined', 'Spotify Wrapped 2026', 'Tesla Cybertruck Launch'), category tags ('Branding', 'Digital', 'Campaign'), year, arrow link.\n\nServices Accordion: 4 expandable rows — 'Brand Strategy' (expanded with description), 'Digital Design', 'Motion & 3D', 'Development' — animated plus/minus icons.\n\nInfinite Marquee Ticker #2: Awards scrolling: 'Awwwards SOTD ★', 'FWA Winner ★', 'CSS Design Awards ★', 'Red Dot 2026 ★'.\n\nContact Footer: 'Let's create something extraordinary.' with 'Book a Call' orange CTA.",
      "cursorPrompt": "Build a creative agency portfolio called HyperKinetic with infinite CSS marquee tickers, 100px bold typography, full-width case study cards with gradient backgrounds, expandable service accordion. Orange accent (#f97316), black bg (#0a0a0c). Space Grotesk font.",
      "v0Prompt": "Digital design agency website for HyperKinetic with kinetic typography, infinite logo ticker marquees, full-width project case study cards with category tags, service accordion, and awards marquee. Dark theme with solar orange accents.",
      "claudePrompt": "Create a modern creative agency landing page for HyperKinetic with bold typography, infinite scrolling marquees, full-width portfolio showcases, and expandable service sections. Space Grotesk font, orange accents on black."
    },
    "code": {
      "react": "export default function HyperKinetic() { return <div className=\"bg-[#0a0a0c] text-white min-h-screen\">HyperKinetic Studio</div>; }",
      "html": "<!-- HyperKinetic Studio -->"
    }
  },
  {
    "id": "24",
    "slug": "airbnb-map-explorer",
    "title": "Haven Luxury Villa & Stay Explorer",
    "tagline": "Interactive map pins synchronized with scrollable property cards and multi-image photo carousels",
    "description": "A premium travel and real estate search platform called Haven, featuring a split-view layout with scrollable listing cards on the left (with image carousels, pricing, and ratings) and an interactive map canvas on the right with price marker pills.",
    "category": "apps-tools",
    "style": "Modern Real Estate / Clean Dark",
    "difficulty": "Intermediate",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Inter",
    "tags": [
      "Airbnb Style",
      "Map Explorer",
      "Real Estate",
      "Image Carousel",
      "Split View"
    ],
    "features": [
      "Split layout with scrollable property cards and interactive map",
      "Property cards with image pagination dots and favorite heart toggle",
      "Map price badge pills that highlight on hover",
      "Top filter pill bar (Price, Bedrooms, Amenities)",
      "Bottom mobile toggle between Map and List views"
    ],
    "colorPalette": {
      "name": "Coral & Dark Slate",
      "bg": "#0f1117",
      "accent": "#ff385c",
      "text": "#f3f4f6"
    },
    "previewUrl": "/previews/airbnb-map-explorer/index.html",
    "stats": {
      "likes": 1940,
      "views": "29.1k",
      "vibecoders": "4.6k"
    },
    "aiPrompt": {
      "standard": "Create an Airbnb-style travel booking platform called 'Haven'. Background #0f1117, coral accent #ff385c, text #f3f4f6. Font: Inter.\n\nTop Bar: 'Haven' logo, search bar 'Where are you going?'. Filter pill row: 'Price ▾', 'Bedrooms ▾', 'Villa', 'Beachfront', 'Pool', 'Instant Book' toggle.\n\nSplit Screen Layout — Left (~55%): 4 scrollable property listing cards, each with gradient placeholder image area (different warm/cool gradients), image pagination dots (5 dots), heart/favorite icon top-right, title ('Seaside Modern Villa with Infinity Pool'), star rating '4.97 ★ (128 reviews)', location 'Santorini, Greece', price '$340 / night' in bold, 'Superhost' badge.\n\nRight (~45%): Map area with dark background and scattered price tag markers at different positions: '$280', '$340', '$195', '$520', '$175' — each as rounded pills, hovered marker gets coral highlight.\n\nBottom: 'Show 1,847 homes' centered button, mobile toggle 'Map | List'.",
      "cursorPrompt": "Build a split-screen travel search UI called Haven with property listing cards (gradient image placeholders, ratings, pricing, Superhost badges) and map area with price tag markers. Filter chip bar at top. Coral accent (#ff385c), dark bg (#0f1117).",
      "v0Prompt": "Airbnb style travel search page for Haven with split map view, property cards with image dots and favorite hearts, price tag markers on map, filter chips, and Superhost badges. Dark theme with coral accents.",
      "claudePrompt": "Implement a property explorer called Haven with dual map and listing card synchronization, filter chips, pricing, ratings, and interactive map markers. Coral accent on dark theme."
    },
    "code": {
      "react": "export default function HavenExplorer() { return <div className=\"bg-[#0f1117] text-white min-h-screen\">Haven Explorer</div>; }",
      "html": "<!-- Haven Explorer -->"
    }
  },
  {
    "id": "25",
    "slug": "fitness-activity-rings",
    "title": "Aura Fit Biometrics & Activity Tracker",
    "tagline": "Multi-ring SVG circular progress, weekly heart-rate graph, and personal goal milestones",
    "description": "An Apple Fitness-inspired wellness tracking dashboard for Aura Fit, featuring triple concentric animated SVG activity rings, weekly calorie burn charts, workout history feeds, and achievement streak badges.",
    "category": "dashboards",
    "style": "Neon Activity Rings / Dark Health",
    "difficulty": "Intermediate",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Plus Jakarta Sans",
    "tags": [
      "Apple Fitness",
      "Activity Rings",
      "Health Dashboard",
      "Charts",
      "SVG Animation"
    ],
    "features": [
      "Concentric 3-ring SVG progress (Move, Exercise, Stand)",
      "Weekly calorie and heart-rate bar chart",
      "Recent workouts list with pace metrics",
      "Streak counter with badge awards",
      "Quick workout logger modal"
    ],
    "colorPalette": {
      "name": "Neon Move Red, Green & Cyan",
      "bg": "#07080a",
      "accent": "#fa114f",
      "text": "#ffffff"
    },
    "previewUrl": "/previews/fitness-activity-rings/index.html",
    "stats": {
      "likes": 1670,
      "views": "23.8k",
      "vibecoders": "3.6k"
    },
    "aiPrompt": {
      "standard": "Build an Apple Fitness-style health dashboard for 'Aura Fit'. Background #07080a, red accent #fa114f, white text. Font: Plus Jakarta Sans headings, JetBrains Mono for metrics.\n\nTop Bar: 'Aura Fit' logo, tabs: 'Today' (active), 'History', 'Awards', user avatar.\n\nCenterpiece: Triple concentric SVG circular progress rings — Outer RED (Move: 640/700 kcal, ~91% filled), Middle GREEN (Exercise: 42/30 min, 100%+), Inner CYAN (Stand: 11/12 hrs, ~92%). Inside rings: 'Great progress today!' Below: 3 stat labels with colored dots.\n\nWeekly Bar Chart: 7 bars (Mon-Sun) with varying heights, stacked colored segments, average line.\n\nRecent Workouts: 4 rows with emoji icons (🏃 Running, 🚴 Cycling, 🏊 Swimming, 🧘 Yoga), workout name, duration, calories, distance/pace.\n\nAchievements: '🔥 14-Day Move Streak!' badge, earned awards grid (3 medal icons).\n\n'Start Workout' floating button.",
      "cursorPrompt": "Create a health dashboard called Aura Fit with concentric SVG circular progress rings (Move/Exercise/Stand), weekly activity bar chart, workout history list with emoji icons, streak badges. Red accent (#fa114f), pitch black bg (#07080a).",
      "v0Prompt": "Apple Fitness activity rings dashboard for Aura Fit. Triple SVG rings (Move red, Exercise green, Stand cyan), weekly chart, workout list with icons, streak badges. Dark theme with neon accents.",
      "claudePrompt": "Implement an activity tracker interface called Aura Fit with animated SVG circular rings (3 concentric), weekly bar chart, workout history, and achievement badges. Dark bg #07080a with neon red accent."
    },
    "code": {
      "react": "export default function AuraFit() { return <div className=\"bg-[#07080a] text-white min-h-screen\">Aura Fit</div>; }",
      "html": "<!-- Aura Fit -->"
    }
  },
  {
    "id": "26",
    "slug": "podcast-stream-player",
    "title": "SoundWave Audio & Podcast Network",
    "tagline": "Floating bottom playback bar, animated audio visualizer, and synchronized episode playlist",
    "description": "A Spotify/Apple Podcasts-inspired streaming platform called SoundWave, featuring a persistent floating player dock with volume sliders, animated audio frequency visualizers, episode playlist queues, and chapter timestamp navigation.",
    "category": "apps-tools",
    "style": "Deep Charcoal & Lime Audio",
    "difficulty": "Intermediate",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Outfit",
    "tags": [
      "Podcast",
      "Audio Player",
      "Spotify Style",
      "Waveform",
      "Streaming"
    ],
    "features": [
      "Floating bottom player with playback controls and speed toggle",
      "Animated audio frequency equalizer bars",
      "Episode playlist queue with drag-reorder handles",
      "Show notes drawer with clickable chapter timestamps",
      "Guest speaker badges and sponsor buttons"
    ],
    "colorPalette": {
      "name": "Spotify Emerald & Pitch Dark",
      "bg": "#0c0d12",
      "accent": "#1db954",
      "text": "#ffffff"
    },
    "previewUrl": "/previews/podcast-stream-player/index.html",
    "stats": {
      "likes": 1540,
      "views": "20.1k",
      "vibecoders": "3.2k"
    },
    "aiPrompt": {
      "standard": "Design a podcast streaming platform called 'SoundWave'. Background #0c0d12, green accent #1db954, white text. Font: Outfit for headings, Inter for body.\n\nTop Bar: 'SoundWave' logo (green accent), nav: Browse, Library, Search, user avatar.\n\nFeatured Episode Hero: Large card with gradient artwork placeholder, show title 'The Developer's Mindset', episode 'Ep. 47: Building in Public — The Uncomfortable Truth', hosts 'Sarah Chen & Marcus Rivera', 'Play Now' green button and 'Add to Queue' button.\n\nTrending Shows Grid: 4 podcast cards — square gradient artwork, show title, creator, category tag.\n\nEpisode Playlist Queue: 6 rows — small artwork, episode title, show name, duration, play button.\n\nBottom Persistent Player Bar (fixed, full width, glass bg): Left — small artwork + episode info. Center — playback controls (shuffle, prev, play/pause circle, next, repeat), progress bar 12:34/47:21, speed toggle '1x ▾'. Right — volume slider, queue icon. Animated equalizer bars (5 bars, CSS animation) near play icon.",
      "cursorPrompt": "Build a podcast player web interface called SoundWave with featured episode hero, trending shows grid, episode playlist, and persistent bottom audio player bar with playback controls, progress bar, speed toggle, animated equalizer bars. Green accent (#1db954), dark bg (#0c0d12). Outfit font.",
      "v0Prompt": "Podcast streaming app called SoundWave with dark UI, bottom playback bar with progress scrubber and speed toggle, featured episode hero, trending shows grid, episode playlist, and animated audio visualizer. Green accents.",
      "claudePrompt": "Create an audio streaming platform called SoundWave with persistent bottom player, playback controls, animated equalizer, episode playlist queue, and trending shows grid. Spotify-style dark theme with green accents."
    },
    "code": {
      "react": "export default function SoundWave() { return <div className=\"bg-[#0c0d12] text-white min-h-screen\">SoundWave</div>; }",
      "html": "<!-- SoundWave -->"
    }
  },
  {
    "id": "27",
    "slug": "multi-step-onboarding",
    "title": "CloudScale SaaS Account Onboarding",
    "tagline": "Interactive step progress dots, password strength meter, and visual role-selection cards",
    "description": "A high-conversion onboarding wizard for CloudScale SaaS platform, featuring progressive step indicators, interactive role/team selection cards, dynamic password strength meters, and social single-sign-on integration.",
    "category": "apps-tools",
    "style": "Progressive Wizard / Clean Glass",
    "difficulty": "Beginner",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Inter",
    "tags": [
      "Onboarding",
      "Form Wizard",
      "Auth",
      "Step Progress",
      "SaaS Flow"
    ],
    "features": [
      "Numbered step progress indicator with completed checkmarks",
      "Interactive visual role cards (Founder, Engineer, Designer, PM)",
      "Live workspace subdomain validation input",
      "Password strength meter with real-time feedback",
      "Social SSO buttons (Google, GitHub, SSO)"
    ],
    "colorPalette": {
      "name": "Indigo & Royal Violet",
      "bg": "#0a0b10",
      "accent": "#6366f1",
      "text": "#f3f4f6"
    },
    "previewUrl": "/previews/multi-step-onboarding/index.html",
    "stats": {
      "likes": 1780,
      "views": "24.6k",
      "vibecoders": "3.8k"
    },
    "aiPrompt": {
      "standard": "Create a 3-step SaaS onboarding wizard for 'CloudScale'. Background #0a0b10, indigo accent #6366f1, text #f3f4f6. Font: Inter.\n\nMinimal Top Bar: 'CloudScale' logo centered.\n\nStep Progress Indicator: Horizontal breadcrumbs — Step 1 'Account' (completed, green checkmark), Step 2 'Your Role' (current, indigo dot), Step 3 'Workspace' (upcoming, gray dot), connected by lines.\n\nCenter Card (max-w-lg, rounded-2xl, glass bg): Step 2 content — 'What best describes your role?'\n\nRole Selection Cards (2x2 grid): 4 interactive cards — '🚀 Founder / CEO' ('Building the next big thing'), '💻 Engineer' ('Writing code and shipping features'), '🎨 Designer' ('Crafting beautiful experiences'), '📊 Product Manager' ('Driving strategy and roadmap'). Engineer card has selected state (indigo border, checkmark).\n\nBelow cards: 'Back' ghost button and 'Continue' indigo button.\n\nSocial SSO: 'Or continue with' divider — Google, GitHub, SSO buttons.\n\nSubtle radial gradient glow background. Footer: 'Step 2 of 3', 'Already have an account? Sign in'.",
      "cursorPrompt": "Build a multi-step onboarding wizard called CloudScale in React with step navigation breadcrumbs, role selector cards (Founder, Engineer, Designer, PM) with emoji icons, form validation, social SSO buttons. Indigo accent (#6366f1), dark bg (#0a0b10).",
      "v0Prompt": "SaaS onboarding modal for CloudScale with 3 steps, progress breadcrumbs, role selection cards with emojis, social sign-on buttons (Google, GitHub), and workspace setup. Dark theme with indigo accents.",
      "claudePrompt": "Implement a clean multi-step registration flow for CloudScale with animated progress indicators, role cards with emojis, password strength meter, social SSO, and workspace setup. Dark theme #0a0b10."
    },
    "code": {
      "react": "export default function CloudScaleOnboarding() { return <div className=\"bg-[#0a0b10] text-white min-h-screen\">CloudScale Onboarding</div>; }",
      "html": "<!-- CloudScale Onboarding -->"
    }
  },
  {
    "id": "28",
    "slug": "saas-feature-matrix",
    "title": "Enterprise Cloud Capability Matrix",
    "tagline": "Sticky column headers, feature category accordions, and interactive plan highlight switches",
    "description": "A comprehensive enterprise feature comparison table with sticky headers, expandable feature categories, tooltip explanations, and plan filter highlights for SaaS pricing pages.",
    "category": "pricing-conversion",
    "style": "Enterprise Data Matrix",
    "difficulty": "Intermediate",
    "mode": "dark",
    "fontType": "sans",
    "defaultFont": "Inter",
    "tags": [
      "Comparison Table",
      "Pricing Matrix",
      "Enterprise",
      "Sticky Headers",
      "Feature Table"
    ],
    "features": [
      "Sticky header row with tier names locked on scroll",
      "Expandable category rows (Core, Security, Support, Integrations)",
      "Interactive tooltips explaining feature lines",
      "Checkmark and cross badges with color indicators",
      "Plan highlight toggle to dim non-selected tiers"
    ],
    "colorPalette": {
      "name": "Enterprise Slate & Blue",
      "bg": "#0a0d14",
      "accent": "#3b82f6",
      "text": "#ededed"
    },
    "previewUrl": "/previews/saas-feature-matrix/index.html",
    "stats": {
      "likes": 1620,
      "views": "22.3k",
      "vibecoders": "3.4k"
    },
    "aiPrompt": {
      "standard": "Build a SaaS feature comparison table for 'Enterprise Cloud'. Background #0a0d14, blue accent #3b82f6, text #ededed. Font: Inter.\n\nSection Header: 'Compare Plans & Features' with subtitle.\n\nTop Tier Selector: 3 plan cards — 'Free' ($0/mo, 'Get Started' ghost button), 'Pro' ($49/mo, 'Start Free Trial' blue button, 'MOST POPULAR' badge), 'Enterprise' ('Custom pricing', 'Contact Sales').\n\nSticky Table Header (stays fixed during scroll).\n\nFeature Comparison Table by expandable categories:\n- Core Features (expanded): Projects (3, Unlimited, Unlimited), Team Members (5, 50, Unlimited), Storage (1GB, 100GB, Unlimited), API Access (✗, ✓, ✓)\n- Security (expanded): SSO/SAML (✗, ✗, ✓), 2FA (✓, ✓, ✓), Audit Logs (✗, ✓, ✓), SOC 2 (✗, ✗, ✓)\n- Support (expanded): Community (✓, ✓, ✓), Email (✗, ✓, ✓), Priority (✗, ✗, ✓), Dedicated CSM (✗, ✗, ✓)\n- Integrations (collapsed, '▶ 8 features')\n\nGreen checkmarks (✓), red crosses (✗), info tooltip (i) icons. FAQ section with 3 questions. Enterprise CTA banner.",
      "cursorPrompt": "Create a responsive feature comparison matrix in React and Tailwind CSS with sticky headers, expandable category rows (Core, Security, Support, Integrations), checkmark/cross badges, plan selector cards (Free, Pro, Enterprise). Blue accent (#3b82f6), dark bg (#0a0d14).",
      "v0Prompt": "SaaS plan comparison table with sticky headers, expandable feature categories, checkmark badges, 3 tier cards (Free, Pro, Enterprise), FAQ section. Dark theme with blue accents.",
      "claudePrompt": "Design an enterprise pricing comparison matrix with sticky column headers, expandable feature categories, tooltip details, and tier highlight toggles. Blue accent #3b82f6 on dark bg #0a0d14."
    },
    "code": {
      "react": "export default function EnterpriseMatrix() { return <div className=\"bg-[#0a0d14] text-white min-h-screen\">Enterprise Matrix</div>; }",
      "html": "<!-- Enterprise Matrix -->"
    }
  },
  {
    "id": "29",
    "slug": "creator-substack-blog",
    "title": "The Mindstream Literary Publication",
    "tagline": "High-readability serif publication with email capture newsletter banner and floating social ribbon",
    "description": "A Substack and Ghost-inspired editorial reading canvas for The Mindstream publication, featuring elegant serif typography for long-form reading, reading progress indicators, floating share ribbons, inline pull-quotes, and newsletter subscription boxes.",
    "category": "portfolios-personal",
    "style": "Editorial Serif & Clean Dark",
    "difficulty": "Beginner",
    "mode": "dark",
    "fontType": "serif",
    "defaultFont": "Newsreader",
    "tags": [
      "Substack",
      "Ghost",
      "Blog",
      "Newsletter",
      "Editorial"
    ],
    "features": [
      "High-readability serif article body with optimized line-height",
      "Top reading progress bar indicator",
      "Floating left ribbon with like, comment, bookmark buttons",
      "In-article newsletter capture card",
      "Author bio card with follow button"
    ],
    "colorPalette": {
      "name": "Warm Obsidian & Paper Gold",
      "bg": "#111115",
      "accent": "#f59e0b",
      "text": "#f0f0f2"
    },
    "previewUrl": "/previews/creator-substack-blog/index.html",
    "stats": {
      "likes": 1810,
      "views": "25.0k",
      "vibecoders": "4.0k"
    },
    "aiPrompt": {
      "standard": "Design an editorial blog article page for 'The Mindstream'. Background #111115, amber accent #f59e0b, text #f0f0f2. Font: Newsreader for article body and headlines (serif), Inter for UI elements.\n\nReading Progress Bar: Thin amber bar fixed at viewport top, fills left-to-right as page scrolls.\n\nMinimal Header: 'The Mindstream' in elegant serif, nav links 'Essays', 'Archive', 'About', 'Subscribe' amber button.\n\nArticle Header: Category tag 'Technology & Culture', large 40px+ serif headline 'The Quiet Revolution of Ambient Computing', author row: avatar, 'By Elena Vasquez', '• Aug 15, 2026', '• 8 min read'.\n\nArticle Body (max-w-prose mx-auto, serif): Opening paragraph about ambient computing, blockquote with amber left border 'Technology is most powerful when it disappears into the fabric of everyday life.', second paragraph, inline code 'ambient.observe()' in monospace, third paragraph.\n\nInline Newsletter Capture: Mid-article card 'Enjoyed this essay?', email input, 'Subscribe — Free' amber button, '12,847 readers' count.\n\nAuthor Bio Card: Larger avatar, name, bio text, 'Follow' button, '247 posts • 12.8k subscribers'.\n\nFloating Left Ribbon (fixed): Heart '284', comment '47', bookmark, share icons stacked vertically.",
      "cursorPrompt": "Build a Substack-style article page called The Mindstream with reading progress bar, serif typography (Newsreader), author byline, article body with blockquotes and inline code, newsletter subscription card, author bio, floating social reaction bar. Amber accent (#f59e0b), dark bg (#111115).",
      "v0Prompt": "Substack article reading page for The Mindstream with newsletter subscription banner, author profile, reading progress bar, serif typography, blockquotes, and floating social ribbon. Dark theme with amber accents.",
      "claudePrompt": "Implement an editorial reading experience for The Mindstream with longform serif articles (Newsreader font), newsletter capture, author bio card, reading progress bar, and floating social ribbon. Amber accent #f59e0b on dark bg."
    },
    "code": {
      "react": "export default function MindstreamBlog() { return <div className=\"bg-[#111115] text-white min-h-screen\">The Mindstream</div>; }",
      "html": "<!-- The Mindstream -->"
    }
  },
  {
    "id": "30",
    "slug": "physics-404-interactive",
    "title": "Cosmic Lost in Space 404",
    "tagline": "Playable physics-based 404 error experience with floating cosmic elements and search fallback",
    "description": "A creative interactive 404 error page with a cosmic space theme, featuring floating orbital elements, glowing 404 numerals, witty developer error messages, search fallback bars, and quick navigation escape buttons.",
    "category": "apps-tools",
    "style": "Playful Physics & Neon",
    "difficulty": "Intermediate",
    "mode": "dark",
    "fontType": "mono",
    "defaultFont": "JetBrains Mono",
    "tags": [
      "404 Page",
      "Interactive",
      "Physics",
      "Error Page",
      "Micro-Interactions"
    ],
    "features": [
      "Floating neon 404 numeral blocks with glow effect",
      "Witty developer humor error log messages",
      "Instant search fallback input with quick shortcut pills",
      "Suggested popular links grid (Home, Gallery, Pricing, Docs)",
      "Dark ambient starry space background with pulsing glow"
    ],
    "colorPalette": {
      "name": "Deep Cosmic & Neon Purple",
      "bg": "#07080f",
      "accent": "#a855f7",
      "text": "#ffffff"
    },
    "previewUrl": "/previews/physics-404-interactive/index.html",
    "stats": {
      "likes": 2150,
      "views": "32.0k",
      "vibecoders": "5.3k"
    },
    "aiPrompt": {
      "standard": "Build a creative interactive 404 error page called 'Cosmic Lost in Space'. Background #07080f, purple accent #a855f7, white text. Font: JetBrains Mono for error text, Plus Jakarta Sans for headings.\n\nCosmic Background: Deep space dark with scattered star dots (positioned tiny white dots via CSS, 2-3 subtle radial gradient glows in purple/blue).\n\nCenterpiece: Giant glowing '404' (120px+, font-extrabold, purple text-shadow glow 0 0 60px #a855f7), floating orbital elements — 3-4 small circles with CSS rotation animation.\n\nWitty Error Message: 'Lost in the Vibeverse' headline (40px), error log monospace block: 'Error 404: Coordinates [x: ∞, y: NaN] — Target page drifted beyond the observable frontend.', 'Status: EXPLORING_HYPERSPACE', 'Recommendation: Recalibrate navigation vector.'\n\nSearch Fallback: Input bar 'Search for a page...' with search icon and 'Go' button.\n\nQuick Navigation Grid: 4 cards — 'Home' (🏠), 'Gallery' (🎨), 'Pricing' (💳), 'Documentation' (📖) — with hover glow effect.\n\n'Take Me Home' large purple gradient CTA button.\n\nBottom: Small monospace text 'Signal broadcast from VibeKit Mission Control • Stardate 2026.08.23'.",
      "cursorPrompt": "Create an interactive 404 error page called Cosmic Lost in Space with glowing 404 text (purple glow shadow), floating orbital CSS animations, witty error messages in monospace, search bar, quick nav cards with emojis, and cosmic starry background. Purple accent (#a855f7), dark bg (#07080f).",
      "v0Prompt": "Creative 404 error page with cosmic theme. Glowing 404 numerals, floating orbital elements, witty error messages, search bar fallback, navigation card grid, and return home button. Dark space background with purple accents.",
      "claudePrompt": "Design an engaging 404 error experience called Cosmic Lost in Space with search fallback, orbital CSS animations, glowing numerals, witty monospace error messages, and quick navigation cards. Purple accent on cosmic dark background."
    },
    "code": {
      "react": "export default function Cosmic404() { return <div className=\"bg-[#07080f] text-white min-h-screen\">Cosmic 404</div>; }",
      "html": "<!-- Cosmic 404 -->"
    }
  }
];
