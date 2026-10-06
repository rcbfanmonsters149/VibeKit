const fs = require('fs');
const path = require('path');
const baseDir = 'C:\\Create_websites\\VibeKit';

// 1. src/app/designs/[slug]/page.tsx
const detailPageCode = `"use client";
import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DESIGNS } from "@/data/designs";
import LivePreviewFrame from "@/components/preview/LivePreviewFrame";
import PromptBox from "@/components/prompt/PromptBox";
import CodeTabs from "@/components/preview/CodeTabs";
import DesignCard from "@/components/gallery/DesignCard";
import { ArrowLeft, Sparkles, Flame, Eye, Layers, Palette, ShieldCheck, ArrowUpRight, Share2, Check } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function DesignDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const design = DESIGNS.find((d) => d.slug === resolvedParams.slug);

  if (!design) {
    notFound();
  }

  // Similar designs in same category or style
  const similarDesigns = DESIGNS.filter(
    (d) => d.slug !== design.slug && (d.category === design.category || d.difficulty === design.difficulty)
  ).slice(0, 3);

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
      {/* Top Breadcrumb & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-medium text-zinc-400 hover:text-white transition px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All 25 Designs</span>
        </Link>

        <div className="flex items-center space-x-3 text-xs font-mono text-zinc-400">
          <span className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
            {design.style}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
            {design.difficulty}
          </span>
        </div>
      </div>

      {/* Title & Metadata Header */}
      <div className="space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              {design.title}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-3xl leading-relaxed">
              {design.description}
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center space-x-4 bg-[#11131c] border border-white/10 p-3 rounded-2xl self-start">
            <div className="text-center px-3 border-r border-white/10">
              <div className="text-xs text-zinc-500 font-mono">Views</div>
              <div className="text-sm font-bold text-white font-mono">{design.stats.views}</div>
            </div>
            <div className="text-center px-3 border-r border-white/10">
              <div className="text-xs text-zinc-500 font-mono">Coders</div>
              <div className="text-sm font-bold text-purple-400 font-mono">{design.stats.vibecoders}</div>
            </div>
            <div className="text-center px-3">
              <div className="text-xs text-zinc-500 font-mono">Likes</div>
              <div className="text-sm font-bold text-rose-400 font-mono">{design.stats.likes}</div>
            </div>
          </div>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {design.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 text-zinc-300 border border-white/10"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* 1. Live Interactive Scrollable Sandbox */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Layers className="w-4 h-4 text-purple-400" />
            <h2 className="font-heading font-bold text-lg text-white">Live Multi-Section Preview</h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">Scroll through all sections inside frame</span>
        </div>

        <LivePreviewFrame previewUrl={design.previewUrl} title={design.title} />
      </section>

      {/* 2. AI Prompt Engine */}
      <section className="space-y-4 pt-6">
        <PromptBox aiPrompt={design.aiPrompt} designTitle={design.title} />
      </section>

      {/* 3. Multi-Language Source Code */}
      <section className="space-y-4 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="font-heading font-bold text-lg text-white">Source Code Snippets</h2>
          <span className="text-xs font-mono text-zinc-500">Next.js / Tailwind / HTML</span>
        </div>

        <CodeTabs code={design.code} />
      </section>

      {/* 4. Design Specs & Palette Breakdown */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        {/* Features Checklist */}
        <div className="p-6 rounded-2xl bg-[#0f111a] border border-white/10 space-y-4">
          <h3 className="font-heading font-bold text-white text-base flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Built-in Design Capabilities</span>
          </h3>
          <ul className="space-y-2.5">
            {design.features.map((f, i) => (
              <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Color Palette Box */}
        <div className="p-6 rounded-2xl bg-[#0f111a] border border-white/10 space-y-4">
          <h3 className="font-heading font-bold text-white text-base flex items-center space-x-2">
            <Palette className="w-4 h-4 text-purple-400" />
            <span>Color Palette & Tokens</span>
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg border border-white/20" style={{ backgroundColor: design.colorPalette.accent }}></div>
                <div className="text-xs">
                  <div className="font-semibold text-white">Primary Accent</div>
                  <div className="font-mono text-zinc-400">{design.colorPalette.accent}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg border border-white/20" style={{ backgroundColor: design.colorPalette.bg }}></div>
                <div className="text-xs">
                  <div className="font-semibold text-white">Surface Background</div>
                  <div className="font-mono text-zinc-400">{design.colorPalette.bg}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg border border-white/20" style={{ backgroundColor: design.colorPalette.text }}></div>
                <div className="text-xs">
                  <div className="font-semibold text-white">Foreground Text</div>
                  <div className="font-mono text-zinc-400">{design.colorPalette.text}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Similar Designs Section */}
      {similarDesigns.length > 0 && (
        <section className="pt-12 border-t border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-heading font-bold text-white">Similar & Related Designs</h2>
            <Link href="/" className="text-xs font-semibold text-purple-400 hover:text-purple-300">
              View All 25 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarDesigns.map((d) => (
              <DesignCard key={d.id} design={d} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
`;

// 2. src/app/prompts/page.tsx
const promptsPageCode = `"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Terminal, Copy, Check, BookOpen, Bot, Zap, ArrowLeft, Layers, ShieldAlert, Cpu } from "lucide-react";

export default function PromptsPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyPrompt = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const playbookItems = [
    {
      id: "master-system",
      title: "Master System Prompt for Frontend Vibecoding",
      tool: "Cursor (.cursorrules) / Claude Code / Windsurf",
      description: "Paste this into your project rules to force AI models to generate high-end modern frontends by default.",
      prompt: \`You are an elite Senior Frontend Architect specializing in modern, award-winning web UI.
When generating UI and websites:
1. DESIGN TOKENS:
   - Always default to ultra-refined dark mode (#08090d / #0a0c10) unless explicitly asked for light mode.
   - Use crisp 1px borders with low opacity (border-white/10 or border-zinc-800/80).
   - Use subtle ambient mesh gradients with high blur (blur-[120px]) for glowing depth.
   - Typography hierarchy: Inter / Plus Jakarta Sans for headings, JetBrains Mono for metrics and code.

2. COMPONENT ARCHITECTURE:
   - Build modular, composable React 19 / Next.js 15 components with TypeScript.
   - Use Tailwind CSS utility classes without arbitrary magic numbers where standard tokens apply.
   - Support responsive breakpoints: Mobile (375px), Tablet (768px), Desktop (1440px).
   - Add micro-interactions: smooth hover transitions, glow states, and interactive feedback.

3. ACCESSIBILITY & PERFORMANCE:
   - Ensure high text contrast against dark backgrounds.
   - Use semantic HTML tags (<header>, <nav>, <main>, <section>, <footer>).\`
    },
    {
      id: "linear-style",
      title: "Linear Dark Mode & Bento Grid Generator",
      tool: "Universal (Cursor / v0 / Bolt)",
      description: "Generates high-velocity SaaS hero sections with obsidian surfaces, pill badges, and bento cards.",
      prompt: \`Build a Linear-inspired SaaS landing page for an engineering intelligence platform.
- Dark theme: bg-[#08090d] text-zinc-100.
- Hero Section:
  * Pill badge at top: 'v2.0 Architecture Live' with animated pulsing emerald beacon dot.
  * Headline: 68px bold font with gradient fill (white to purple-300).
  * Subtitle: 2-line clean description of real-time telemetry.
  * 2 CTA buttons: Primary filled purple glow, Secondary outlined with 'Cmd + K Demo' badge.
- Interactive App Mockup:
  * Floating Kanban/Sprint dashboard with glowing borders.
- Bento Grid Features:
  * 3-column asymmetric layout with 50ms interaction badges and edge map visualizers.
- Responsive for mobile, tablet, and desktop.\`
    },
    {
      id: "stripe-pricing",
      title: "Stripe-Style High-Conversion Pricing Table",
      tool: "v0.dev / Bolt.new / Cursor",
      description: "Generates a 3-tier pricing section with annual toggle, glowing highlighted card, and FAQ accordion.",
      prompt: \`Create a high-conversion SaaS pricing section with 3 tiers:
- Starter ($19/mo): Essential tooling for solo devs.
- Pro ($49/mo): Highlighted as 'Most Popular' with glowing gradient border (from-indigo-500 to-purple-500) and scale-up effect.
- Enterprise (Custom): Dedicated VPC and SLA.
Include:
1. Animated toggle switch for 'Monthly' vs. 'Annual' billing (with 'Save 20%' discount pill).
2. Comprehensive checkmark feature list for each tier.
3. Feature comparison checklist table underneath.
4. Expandable FAQ accordion section with 4 questions.\`
    },
    {
      id: "dashboard-telemetry",
      title: "Vercel / Supabase Style Developer Studio",
      tool: "Claude Code / Cursor / Windsurf",
      description: "Generates real-time telemetry dashboards with monospace metrics and sparklines.",
      prompt: \`Design a monochrome developer analytics dashboard inspired by Vercel.
- Background: Pitch black (#000000) with crisp 1px borders (#222222).
- Top bar: Project switcher dropdown and environment badges (Production / Staging).
- 4 Top Metric Cards:
  * Edge Latency (14ms, sparkline chart)
  * Total Requests (1.4M, +12% vs last week)
  * Error Rate (0.02%, emerald status dot)
  * Bandwidth (240GB / 1TB quota bar)
- Live Deployment Table:
  * Git commit hash in JetBrains Mono font
  * Branch pill tag (main, staging)
  * Status badge (Ready with green dot, Building with yellow spinner)
  * Deploy timestamp.\`
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-8 max-w-5xl mx-auto space-y-12">
      {/* Top Breadcrumb */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-medium text-zinc-400 hover:text-white transition px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Gallery</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Vibecoding Master Playbook</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          How to Prompt AI for World-Class Frontend UI
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          Master the exact prompt structures, token hierarchies, and rulesets that make AI coding tools produce 10/10 visual designs on the first try.
        </p>
      </div>

      {/* Rules of Vibecoding Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#0f111a] border border-white/10">
          <div className="text-purple-400 font-mono font-bold text-sm mb-2">RULE #1</div>
          <h3 className="font-heading font-bold text-white text-base mb-2">Specify Exact Color Tokens</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Never say "make it dark". Always specify hex codes (e.g. #08090d, #11131c, #8b5cf6) to avoid generic grey themes.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0f111a] border border-white/10">
          <div className="text-cyan-400 font-mono font-bold text-sm mb-2">RULE #2</div>
          <h3 className="font-heading font-bold text-white text-base mb-2">Enforce Border-Centric Depth</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Instruct AI to use 1px subtle borders (border-white/10) and backdrop blur (backdrop-blur-xl) instead of heavy drop shadows.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0f111a] border border-white/10">
          <div className="text-emerald-400 font-mono font-bold text-sm mb-2">RULE #3</div>
          <h3 className="font-heading font-bold text-white text-base mb-2">Name Design Archetypes</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Reference famous UI patterns: Linear bento grids, Stripe pricing glow, Vercel monospace, or Apple storytelling scroll.
          </p>
        </div>
      </div>

      {/* Master Prompts List */}
      <div className="space-y-8 pt-4">
        <h2 className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-4">
          Copy-Ready Master Prompts
        </h2>

        {playbookItems.map((item) => (
          <div key={item.id} className="rounded-2xl bg-[#0e1017] border border-white/10 overflow-hidden space-y-4">
            <div className="p-5 bg-white/[0.02] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono text-purple-400 font-semibold uppercase">{item.tool}</span>
                <h3 className="font-heading font-bold text-lg text-white mt-0.5">{item.title}</h3>
                <p className="text-xs text-zinc-400 mt-1">{item.description}</p>
              </div>

              <button
                onClick={() => copyPrompt(item.id, item.prompt)}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition flex items-center space-x-1.5 self-start sm:self-auto shrink-0 shadow-md"
              >
                {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedId === item.id ? "Copied!" : "Copy Prompt"}</span>
              </button>
            </div>

            <div className="p-5 pt-0">
              <pre className="p-4 rounded-xl bg-black/50 border border-white/10 text-xs font-mono text-zinc-300 leading-relaxed overflow-x-auto custom-scroll whitespace-pre-wrap">
                <code>{item.prompt}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`;

fs.writeFileSync(path.join(baseDir, 'src/app/designs/[slug]/page.tsx'), detailPageCode, 'utf8');
fs.writeFileSync(path.join(baseDir, 'src/app/prompts/page.tsx'), promptsPageCode, 'utf8');
console.log('Saved detail page and prompts playbook page');
