const fs = require('fs');
const path = require('path');
const baseDir = 'C:\\Create_websites\\VibeKit';

const p1 = [
  {
    id: "1",
    slug: "linear-dark-nebula",
    title: "Linear Dark Nebula SaaS",
    tagline: "Ultra-refined dark mode hero, glowing mesh gradient, and keyboard-centric bento grid",
    description: "Inspired by Linear.app and Raycast, this design features an obsidian dark theme, subtle radial ambient glow, pill badges, interactive keyboard shortcuts, and a modular bento grid showcasing real-time features.",
    category: "saas-landings",
    style: "Dark Nebula / Obsidian",
    difficulty: "Intermediate",
    tags: ["Dark Mode", "Mesh Gradient", "Linear Style", "Bento Grid", "Keyboard Shortcuts"],
    features: ["Radial mesh glow background", "Glassmorphic pill badge with live pulsing beacon", "Floating product dashboard with mock task Kanban", "Modular 3-column bento feature grid", "Interactive customer testimonial slider", "Clean monospace footer"],
    colorPalette: { name: "Obsidian & Violet Glow", bg: "#08090d", accent: "#8b5cf6", text: "#f3f4f6" },
    previewUrl: "/previews/linear-dark-nebula/index.html",
    stats: { likes: 1420, views: "18.4k", vibecoders: "3.2k" },
    aiPrompt: {
      standard: "Create a modern Linear.app-inspired SaaS landing page with an obsidian dark theme (#08090d). Include a top glassmorphic navbar with logo and 'Sign In' CTA. In the hero, add a subtle glowing purple/indigo radial background gradient, an animated pill badge 'v2.0 is live', a bold 72px headline with gradient text fill, a 2-line subtitle, and two CTA buttons ('Get Started for Free' and 'Book Demo'). Below the hero, place an interactive mock Kanban dashboard with glowing borders. Follow with a 3-column Bento grid with icon cards, micro-charts, and keyboard shortcut pills (e.g. 'Cmd + K'). Finish with a social proof logo ticker and a clean 4-column footer.",
      cursorPrompt: "// Prompt for Cursor:\nBuild a Next.js 15 page using Tailwind CSS for a Linear-style SaaS landing.\n- Theme: bg-[#08090d] text-zinc-100 font-sans.\n- Hero: Centered layout with radial purple glow.\n- Pill badge: bg-zinc-900/80 border border-zinc-800 text-xs px-3 py-1 rounded-full with pulsing emerald dot.\n- Components: Navbar, HeroSection, AppMockup, BentoFeatures, SocialProof, and Footer.\n- Add Lucide icons (ArrowRight, Sparkles, Command, CheckCircle2, ShieldCheck).",
      v0Prompt: "Linear style dark mode SaaS landing page with glowing violet background accents. Bento grid layout with interactive task list, keyboard shortcuts badges, customer logos, and glowing CTA cards. Use shadcn/ui button, card, and badge primitives.",
      claudePrompt: "Design and implement a complete single-page website for an AI project management tool inspired by Linear.app. Use dark obsidian surfaces (#090a0f), crisp 1px borders (#27272a), glowing violet hover effects (#8b5cf6), and typography pairing of Inter and JetBrains Mono."
    },
    code: {
      react: `import React from 'react';\nimport { ArrowRight, Sparkles, Command, ShieldCheck, Zap, Layers } from 'lucide-react';\n\nexport default function LinearDarkNebula() {\n  return (\n    <div className="min-h-screen bg-[#08090d] text-zinc-100 font-sans">\n      <nav className="sticky top-0 z-50 border-b border-zinc-800/60 bg-[#08090d]/80 backdrop-blur-md px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">\n        <div className="flex items-center space-x-3">\n          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20">V</div>\n          <span className="font-semibold text-lg tracking-tight">Nebula.io</span>\n        </div>\n        <div className="hidden md:flex items-center space-x-8 text-sm text-zinc-400">\n          <a href="#features" className="hover:text-white transition">Features</a>\n          <a href="#bento" className="hover:text-white transition">Architecture</a>\n          <a href="#pricing" className="hover:text-white transition">Pricing</a>\n        </div>\n        <button className="text-sm bg-zinc-100 hover:bg-white text-zinc-950 font-medium px-4 py-2 rounded-full transition">Get Started</button>\n      </nav>\n      <section className="relative pt-24 pb-20 px-6 max-w-5xl mx-auto text-center">\n        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300 mb-8">\n          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>\n          <span>Linear Nebula 2.0 is now live</span>\n          <ArrowRight className="w-3 h-3 text-zinc-500" />\n        </div>\n        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto">\n          The purposeful tool for <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300">high-velocity</span> software teams.\n        </h1>\n        <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">Streamline issue tracking, sprint cycles, and automated roadmaps with blazing-fast keyboard commands.</p>\n      </section>\n    </div>\n  );\n}`,
      html: `<!-- Linear Dark Nebula HTML -->\n<div class="bg-[#08090d] text-zinc-100 min-h-screen font-sans">\n  <header class="p-6 border-b border-zinc-800 flex justify-between items-center">\n    <div class="text-xl font-bold text-purple-400">Nebula.io</div>\n    <button class="bg-white text-black px-4 py-2 rounded-full font-medium text-sm">Sign In</button>\n  </header>\n  <main class="py-20 px-6 text-center max-w-4xl mx-auto">\n    <h1 class="text-6xl font-bold tracking-tight">Built for high velocity teams</h1>\n    <p class="text-zinc-400 mt-4 text-lg">Next generation task tracking.</p>\n  </main>\n</div>`
    }
  },
  {
    id: "2",
    slug: "stripe-glow-tiers",
    title: "Stripe Glow Tiers & Pricing",
    tagline: "Luminescent pricing cards with monthly/yearly billing toggle and interactive feature matrix",
    description: "An elegant, high-conversion pricing page inspired by Stripe and Supabase. Includes annual billing discount badge, highlighted 'Most Popular' tier with neon gradient border, ROI calculator, and FAQ accordion.",
    category: "pricing-conversion",
    style: "Luminescent Neon & Glass",
    difficulty: "Beginner",
    tags: ["Pricing", "Stripe Style", "Glow Card", "Toggle Switch", "FAQ Accordion"],
    features: ["Billed annually / monthly switch with 'Save 20%' badge", "Luminescent highlighted tier with glowing border", "Comprehensive feature comparison checklist", "Interactive monthly active users (MAU) slider", "Expandable FAQ accordion section", "Enterprise custom quote CTA banner"],
    colorPalette: { name: "Stripe Violet & Cyan", bg: "#0b0f19", accent: "#6366f1", text: "#ffffff" },
    previewUrl: "/previews/stripe-glow-tiers/index.html",
    stats: { likes: 1890, views: "24.1k", vibecoders: "4.8k" },
    aiPrompt: {
      standard: "Build a high-conversion SaaS pricing page with 3 tiers: Starter ($19/mo), Pro ($49/mo - marked as Most Popular with glowing indigo gradient border), and Enterprise (Custom). Include an annual vs. monthly billing toggle that applies a 20% discount. Under the cards, add a collapsible FAQ section and a feature comparison table with checkmarks.",
      cursorPrompt: "Create a Tailwind CSS pricing component with 3 pricing cards on a dark slate background (#0b0f19). Use glowing gradient borders on the middle card (from-indigo-500 via-purple-500 to-pink-500). Add state for billingPeriod (monthly/yearly) with animated toggle.",
      v0Prompt: "Stripe style pricing page with glowing border cards, annual discount toggle pill, checkmark feature list, and enterprise banner. Dark mode with cyan and violet accents.",
      claudePrompt: "Generate a complete pricing page with billing toggle, interactive tier cards, detailed feature comparison table, and FAQ accordion using Tailwind CSS and React."
    },
    code: {
      react: `import React, { useState } from 'react';\nimport { Check, Sparkles, ArrowRight } from 'lucide-react';\n\nexport default function StripeGlowPricing() {\n  const [annual, setAnnual] = useState(true);\n  return (\n    <div className="min-h-screen bg-[#0b0f19] text-white py-20 px-6">\n      <div className="max-w-6xl mx-auto text-center">\n        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Predictable pricing for ambitious teams</h2>\n        <p className="mt-4 text-zinc-400">Scale without surprise overages. 14-day free trial on all plans.</p>\n      </div>\n    </div>\n  );\n}`,
      html: `<!-- Stripe Glow Pricing HTML -->\n<div class="bg-[#0b0f19] text-white min-h-screen p-8">\n  <h1 class="text-4xl font-bold text-center">Predictable Pricing</h1>\n</div>`
    }
  },
  {
    id: "3",
    slug: "vercel-monospace-metrics",
    title: "Vercel Monospace Metrics",
    tagline: "Monochrome developer dashboard with real-time sparklines, deployment logs, and edge telemetry",
    description: "Ultra-clean black and white interface inspired by Vercel and GitHub. Features monospace statistics, edge function latency charts, live deployment stream with status dots, and commit history feed.",
    category: "dashboards",
    style: "Monochrome Developer",
    difficulty: "Advanced",
    tags: ["Dashboard", "Vercel Style", "Monospace", "Telemetry", "Sparklines"],
    features: ["Real-time edge function latency graph", "Live deployment status pills (Ready, Building, Error)", "Monospace commit hash and branch visualizer", "Bandwidth and request quota progress bars", "Quick project environment switcher"],
    colorPalette: { name: "Pure Monochrome", bg: "#000000", accent: "#0070f3", text: "#ededed" },
    previewUrl: "/previews/vercel-monospace-metrics/index.html",
    stats: { likes: 2120, views: "31.2k", vibecoders: "5.1k" },
    aiPrompt: {
      standard: "Create a Vercel-style developer analytics dashboard with a pitch-black theme (#000000), crisp 1px borders (#222222), and JetBrains Mono accents. Include a top project switcher, 4 metric cards with sparkline SVG charts (Total Requests, Edge Latency, Bandwidth, 99.9% Uptime), and a live deployment table with Git branch tags and commit hashes.",
      cursorPrompt: "Build a Next.js developer analytics dashboard in pure black and white. Use JetBrains Mono font for numbers and commit hashes. Add live deployment status badges.",
      v0Prompt: "Vercel dashboard clone with dark mode, project metrics cards, sparkline graphs, deployment log list, and git commit details.",
      claudePrompt: "Create a developer telemetry dashboard with real-time request metrics, edge function logs, and deployment histories inspired by Vercel."
    },
    code: {
      react: `export default function VercelMetrics() { return <div className="bg-black text-white min-h-screen p-8">Vercel Metrics Dashboard</div>; }`,
      html: `<!-- Vercel Metrics HTML -->`
    }
  },
  {
    id: "4",
    slug: "apple-ultra-showcase",
    title: "Apple Ultra Storytelling Showcase",
    tagline: "Sticky scroll storytelling showcase with giant headline typography, 3D mockups, and glass cards",
    description: "Experience the iconic Apple hardware/software launch page style with oversized cinematic typography, sticky scroll product highlights, ultra-refined glassmorphic specification chips, and smooth feature reveals.",
    category: "saas-landings",
    style: "Cinematic Product Showcase",
    difficulty: "Intermediate",
    tags: ["Apple Style", "Storytelling", "Oversized Typography", "Glassmorphism", "Product Launch"],
    features: ["Giant 90px gradient headline with crisp tracking", "Sticky feature callouts with floating hardware bezel", "Glassmorphic specs bar with dynamic numeric stats", "Interactive colorway selector (Space Black, Silver, Titanium)", "Video preview modal with cinematic ambient glow"],
    colorPalette: { name: "Titanium & Deep Space", bg: "#050507", accent: "#2997ff", text: "#f5f5f7" },
    previewUrl: "/previews/apple-ultra-showcase/index.html",
    stats: { likes: 1750, views: "26.8k", vibecoders: "3.9k" },
    aiPrompt: {
      standard: "Design an Apple-style product showcase landing page for a flagship developer device or SaaS platform. Use deep space black (#050507), giant bold headlines ('Supercharged for brilliance'), subtle blue accent glowing buttons, sticky feature spec cards, and an interactive 3D product view with colorway switcher.",
      cursorPrompt: "Create an Apple-style hardware/software reveal page using Tailwind CSS. Giant typography, high-contrast dark theme, glassmorphic spec badges, and interactive color switcher.",
      v0Prompt: "Apple product launch landing page with dark theme, large typography, specs grid, interactive color selector, and buy CTA button.",
      claudePrompt: "Implement an Apple-inspired landing page with cinematic typography, product specs grid, and interactive showcase elements."
    },
    code: {
      react: `export default function AppleShowcase() { return <div className="bg-[#050507] text-white min-h-screen p-8">Apple Ultra Showcase</div>; }`,
      html: `<!-- Apple Showcase HTML -->`
    }
  },
  {
    id: "5",
    slug: "raycast-glass-hud",
    title: "Raycast Glass Command HUD",
    tagline: "Floating glassmorphism command bar (`Cmd+K`) with keyboard shortcuts, quick actions, and app launcher",
    description: "A desktop-grade web application HUD inspired by Raycast and Spotlight. Features a centered translucent glass palette, real-time fuzzy filter list, custom action ribbons, and keyboard navigation badges.",
    category: "apps-tools",
    style: "Glassmorphism HUD",
    difficulty: "Intermediate",
    tags: ["Command Palette", "Raycast", "Glassmorphism", "Keyboard Shortcuts", "Productivity"],
    features: ["Centrally aligned floating glassmorphic palette with backdrop blur", "Live search input with instant category groupings (Apps, Commands, Snippets, AI)", "Right-hand quick preview pane with markdown support", "Bottom action bar with primary action and secondary menu shortcuts", "Interactive hotkey badges ('⌘ + Enter', 'Tab')"],
    colorPalette: { name: "Raycast Frosted Obsidian", bg: "#0c0d12", accent: "#ff6363", text: "#ffffff" },
    previewUrl: "/previews/raycast-glass-hud/index.html",
    stats: { likes: 1640, views: "20.9k", vibecoders: "3.5k" },
    aiPrompt: {
      standard: "Build a Raycast-style command palette (`Cmd+K`) web interface with a dark glassmorphic modal (rgba(15,17,23,0.85) backdrop-blur-2xl), search bar with shortcut icons, categorized action items (Create Issue, Run Migration, Toggle Dark Mode, Ask AI), and a live preview sidebar.",
      cursorPrompt: "Implement a Raycast command palette overlay using React and Tailwind CSS. Include search input, list of actions grouped by category, active item state, and keyboard shortcuts.",
      v0Prompt: "Raycast command bar UI with search input, action list, keyboard shortcuts, and detail preview panel.",
      claudePrompt: "Create a keyboard-first command launcher palette component inspired by Raycast with fuzzy search and preview pane."
    },
    code: {
      react: `export default function RaycastHUD() { return <div className="bg-[#0c0d12] text-white min-h-screen p-8">Raycast HUD</div>; }`,
      html: `<!-- Raycast HUD HTML -->`
    }
  },
  {
    id: "6",
    slug: "supabase-cloud-studio",
    title: "Supabase Cloud Studio",
    tagline: "Developer platform with interactive SQL query runner, schema visualizer, and live table data grid",
    description: "A powerful developer platform UI modeled after Supabase and PostgreSQL cloud studios. Features a left-hand navigation rail, multi-tab SQL editor with syntax highlight, and an interactive database records table.",
    category: "dashboards",
    style: "Developer Studio / Green Emerald",
    difficulty: "Advanced",
    tags: ["Developer Tool", "Supabase Style", "SQL Editor", "Data Table", "Database Studio"],
    features: ["Multi-tab query runner with execution time counter", "Interactive table data grid with inline editing and pagination", "Database schema tree explorer (Tables, Views, Functions, Storage)", "Emerald green live connection status indicator", "One-click SQL query template snippets"],
    colorPalette: { name: "Supabase Emerald Dark", bg: "#121417", accent: "#3ecf8e", text: "#ededed" },
    previewUrl: "/previews/supabase-cloud-studio/index.html",
    stats: { likes: 1980, views: "28.5k", vibecoders: "4.7k" },
    aiPrompt: {
      standard: "Create a Supabase-inspired cloud database studio interface. Include a left navigation sidebar with database tables, a center SQL editor tab bar, a query output table with column filters, execution speed badge (e.g. '14ms'), and an action bar to insert or export rows.",
      cursorPrompt: "Build a developer studio web app with SQL query editor and live data table using Tailwind CSS and React. Use Supabase emerald green (#3ecf8e) for primary accents and dark slate backgrounds.",
      v0Prompt: "Supabase cloud database dashboard with sidebar navigation, SQL query editor, execution button, and interactive data table.",
      claudePrompt: "Implement a full database management interface with SQL code editor, data grid, and schema browser."
    },
    code: {
      react: `export default function SupabaseStudio() { return <div className="bg-[#121417] text-white min-h-screen p-8">Supabase Studio</div>; }`,
      html: `<!-- Supabase Studio HTML -->`
    }
  },
  {
    id: "7",
    slug: "ai-canvas-copilot",
    title: "AI Canvas & Chat Copilot",
    tagline: "Conversational split-screen AI workspace with streaming markdown output, token badges, and prompt pill suggestions",
    description: "Inspired by ChatGPT Canvas and Claude Artifacts, this layout provides a split workspace with a conversational chat panel on the left and an interactive document/code canvas on the right.",
    category: "ai-workspaces",
    style: "Split-Screen AI Canvas",
    difficulty: "Intermediate",
    tags: ["AI Chat", "Canvas", "Claude Artifacts", "Prompt Pills", "Markdown Streaming"],
    features: ["Split-screen layout with resizable chat and canvas panels", "Smart prompt suggestion pills (e.g. 'Refactor to TypeScript', 'Add Unit Tests')", "Streaming markdown message bubbles with copy code button", "Version history slider for generated artifacts", "Live token and generation cost counter"],
    colorPalette: { name: "Anthropic Amber & Obsidian", bg: "#101114", accent: "#d97706", text: "#f3f4f6" },
    previewUrl: "/previews/ai-canvas-copilot/index.html",
    stats: { likes: 2450, views: "37.9k", vibecoders: "6.8k" },
    aiPrompt: {
      standard: "Create a modern AI workspace with split-pane layout. The left pane is an AI conversation feed with user messages, assistant replies with code syntax highlighting, and an expanding prompt input with model selector. The right pane is a live editable document/canvas preview with version tabs.",
      cursorPrompt: "Build a split-screen AI chat and artifact canvas interface using React and Tailwind CSS. Support prompt pill buttons, code block copy, and canvas version switcher.",
      v0Prompt: "Claude Artifacts style split-screen AI chat and document editor with model picker and prompt pills.",
      claudePrompt: "Design an AI assistant canvas layout with dual-pane chat and live artifact rendering panel."
    },
    code: {
      react: `export default function AICanvas() { return <div className="bg-[#101114] text-white min-h-screen p-8">AI Canvas Copilot</div>; }`,
      html: `<!-- AI Canvas HTML -->`
    }
  },
  {
    id: "8",
    slug: "fintech-hologram-card",
    title: "Fintech Neobank Hologram",
    tagline: "3D holographic credit card with interactive tilt, real-time spending chart, and live transaction ledger",
    description: "A luxury fintech dashboard with an interactive holographic debit card, monthly cashflow donut charts, one-click international wire transfers, and categorised spending alerts.",
    category: "fintech-banking",
    style: "Holographic Glass & Neobank",
    difficulty: "Intermediate",
    tags: ["Fintech", "3D Card", "Banking", "Neobank", "Charts"],
    features: ["Interactive 3D tilting credit card with iridescent metallic sheen", "Monthly spending breakdown with animated SVG progress rings", "Live transaction stream with merchant avatars and receipt badges", "Instant quick-send money contacts carousel", "Security toggle controls (Lock Card, Virtual CVV, Freeze)"],
    colorPalette: { name: "Electric Cyan & Midnight", bg: "#070a14", accent: "#06b6d4", text: "#f8fafc" },
    previewUrl: "/previews/fintech-hologram-card/index.html",
    stats: { likes: 2190, views: "33.4k", vibecoders: "5.4k" },
    aiPrompt: {
      standard: "Design a futuristic fintech banking dashboard featuring an iridescent metallic virtual debit card with embossed numbers, balance header ($48,290.40), weekly spend line chart, quick transfer contact bubbles, and a transaction history feed with category badges.",
      cursorPrompt: "Create a neobank web dashboard with a stylish gradient virtual card, spending analytics chart, and recent transactions list using Tailwind CSS.",
      v0Prompt: "Fintech dashboard with holographic debit card, spending statistics, quick transfer widget, and transaction list.",
      claudePrompt: "Build a modern banking dashboard with virtual card visualizer, cashflow charts, and transaction ledger."
    },
    code: {
      react: `export default function FintechHologram() { return <div className="bg-[#070a14] text-white min-h-screen p-8">Fintech Hologram</div>; }`,
      html: `<!-- Fintech Hologram HTML -->`
    }
  }
];

fs.writeFileSync(path.join(baseDir, 'scripts', 'part1.json'), JSON.stringify(p1, null, 2), 'utf8');
console.log('Part 1 saved (1-8)');
