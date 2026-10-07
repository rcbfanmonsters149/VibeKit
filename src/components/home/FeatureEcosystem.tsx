'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Layers, Rocket, Grid, Terminal, Palette, 
  Code2, Sparkles, Database, Wand2, ArrowRight,
  CheckCircle2, Clock, Zap, Star, Shield
} from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  badgeColor: string;
  status: 'live' | 'upcoming';
  icon: React.ReactNode;
  actionText: string;
  actionHref: string;
  highlights: string[];
}

export default function FeatureEcosystem() {
  const [filter, setFilter] = useState<'all' | 'live' | 'upcoming'>('all');

  const features: FeatureItem[] = [
    // Current Live Features
    {
      id: 'canvas',
      title: 'Wireframe-to-Prompt Canvas',
      tagline: 'Visual Block Builder & Prompt Synthesizer',
      description: 'Visually assemble layout blocks (Hero, Bento, Pricing, Testimonials), explain what goes inside each block, and let the engine compile a ready-to-paste master prompt for Cursor & Claude.',
      badge: 'NEW • LIVE',
      badgeColor: '#facc15',
      status: 'live',
      icon: <Sparkles className="w-6 h-6 text-black stroke-[2.5]" />,
      actionText: 'Open Wireframe Canvas',
      actionHref: '/canvas',
      highlights: ['Visual block arrangement', 'Plain English explanations', 'ASCII wireframe tree generation']
    },
    {
      id: 'studio',
      title: 'Comparative Style Studio',
      tagline: '12-Style Real-time Comparison Engine',
      description: 'Render the same landing page content across 12 radical visual styles side-by-side with device frames, prompt inspectors, and design suitability details.',
      badge: 'LIVE NOW',
      badgeColor: '#4ade80',
      status: 'live',
      icon: <Layers className="w-6 h-6 text-black stroke-[2.5]" />,
      actionText: 'Launch Studio',
      actionHref: '/studio?tab=studio',
      highlights: ['Split-screen side-by-side', '1-click prompt export', 'Mobile & desktop frames']
    },
    {
      id: 'templates',
      title: '25+ Website Template Gallery',
      tagline: 'Production Landing Pages for Every Niche',
      description: 'Comprehensive directory of production-grade architectures: B2B SaaS, real-time crypto dashboards, developer tools, and immersive AI canvas apps.',
      badge: 'LIVE NOW',
      badgeColor: '#38bdf8',
      status: 'live',
      icon: <Rocket className="w-6 h-6 text-black stroke-[2.5]" />,
      actionText: 'Explore Templates',
      actionHref: '/studio?tab=templates',
      highlights: ['25+ ready-to-run sites', 'Filtered by style & category', 'Specs, color DNA & code']
    },
    {
      id: 'components',
      title: 'Component & Pattern Lab',
      tagline: 'Tactile, Copy-Ready UI Building Blocks',
      description: 'Copy-paste tested UI primitives: luminescent neon cards, retro OS dialogs, claymorphic 3D buttons, and high-density telemetry grids in React & Tailwind.',
      badge: 'LIVE NOW',
      badgeColor: '#facc15',
      status: 'live',
      icon: <Grid className="w-6 h-6 text-black stroke-[2.5]" />,
      actionText: 'Browse Components',
      actionHref: '/components',
      highlights: ['Interactive preview states', 'Clean JSX & Tailwind code', '1-click clipboard copy']
    },
    {
      id: 'prompts',
      title: 'AI Prompt Constructor',
      tagline: 'Precision Recipes for Coding Assistants',
      description: 'Tailored prompt formulations engineered specifically for Cursor IDE, Claude 3.7 Sonnet, v0 by Vercel, and Bolt.new to generate flawless code on attempt #1.',
      badge: 'LIVE NOW',
      badgeColor: '#c084fc',
      status: 'live',
      icon: <Terminal className="w-6 h-6 text-black stroke-[2.5]" />,
      actionText: 'Construct Prompts',
      actionHref: '/studio?tab=prompts',
      highlights: ['Tool-specific formatting', 'Zero generic hallucinations', 'Copy master prompt']
    },
    {
      id: 'palettes',
      title: 'Token & Palette Engine',
      tagline: 'Instant Tailwind Config & CSS Variables',
      description: 'Explore contrast-checked color tokens across every archetype with 1-click exports to tailwind.config.ts, CSS :root variables, and design spec docs.',
      badge: 'LIVE NOW',
      badgeColor: '#f472b6',
      status: 'live',
      icon: <Palette className="w-6 h-6 text-black stroke-[2.5]" />,
      actionText: 'Export Tokens',
      actionHref: '/palettes',
      highlights: ['WCAG contrast validation', 'Tailwind theme extensions', 'CSS custom properties']
    },
    {
      id: 'explore-2d',
      title: '2D Design Dimension Explorer',
      tagline: 'Swiss Bauhaus, Tactical Neobrutalism & Vector Grids',
      description: 'Explore two-dimensional layout paradigms with interactive column & baseline grid overlays, aspect ratio toggles, and pure flat frontend tokens.',
      badge: 'NEW • LIVE',
      badgeColor: '#facc15',
      status: 'live',
      icon: <Grid className="w-6 h-6 text-black stroke-[2.5]" />,
      actionText: 'Explore 2D Layouts',
      actionHref: '#explore-2d',
      highlights: ['Toggleable column grid overlays', 'Swiss Bauhaus, Print & Flat Bento', '1-click 2D AI prompts']
    },
    {
      id: 'explore-3d',
      title: '3D Spatial Dimension & Moving Cursor',
      tagline: 'Perspective Tilt, Real-time Pointer Telemetry & Web 3D',
      description: 'Experience real-time mouse-tracking card tilts, specular glare flares, and 4 production-ready 3D website frontend samples (VisionOS, Cyberpunk Horizon, 3D Product Stage).',
      badge: 'NEW • 3D LIVE',
      badgeColor: '#38bdf8',
      status: 'live',
      icon: <Zap className="w-6 h-6 text-black stroke-[2.5]" />,
      actionText: 'Test 3D & Cursor',
      actionHref: '#explore-3d',
      highlights: ['Live cursor pitch & roll telemetry', 'Dynamic specular light glare', '4 interactive 3D website samples']
    },

    // Upcoming Future Features (Easily market new capabilities!)
    {
      id: 'sandbox',
      title: 'AI Code Sandbox & Live Compiler',
      tagline: 'Instant Browser Execution Environment',
      description: 'Edit, tweak, and fork Next.js 15 and Tailwind components directly in your browser with hot reloading and one-click GitHub push.',
      badge: 'COMING SOON — Q3',
      badgeColor: '#fb923c',
      status: 'upcoming',
      icon: <Code2 className="w-6 h-6 text-black stroke-[2.5]" />,
      actionText: 'Join Beta Waitlist',
      actionHref: '#future-features',
      highlights: ['In-browser WebContainer', 'Fork & edit in 1-click', 'Direct sandbox preview']
    },
    {
      id: 'figma-importer',
      title: 'Figma-to-AI Prompt Importer',
      tagline: 'Turn Any Canvas into Coding Prompts',
      description: 'Paste any public Figma URL to automatically decompose components, colors, and layout hierarchies into structured Cursor & Claude Code prompts.',
      badge: 'COMING SOON',
      badgeColor: '#f43f5e',
      status: 'upcoming',
      icon: <Wand2 className="w-6 h-6 text-black stroke-[2.5]" />,
      actionText: 'Request Access',
      actionHref: '#future-features',
      highlights: ['Automated token extraction', 'Component tree mapping', 'Direct prompt generation']
    },
    {
      id: 'backend-scaffolder',
      title: 'Full-Stack Database & API Scaffolder',
      tagline: 'Auto-Generate Backend to Match Your UI',
      description: 'Generate production Prisma ORM schemas, Supabase PostgreSQL migrations, and Next.js Server Actions styled and structured to match your chosen frontend.',
      badge: 'IN LABS',
      badgeColor: '#a855f7',
      status: 'upcoming',
      icon: <Database className="w-6 h-6 text-black stroke-[2.5]" />,
      actionText: 'View Spec',
      actionHref: '#future-features',
      highlights: ['Prisma & Drizzle schemas', 'Next.js 15 Server Actions', 'Auth & CRUD scaffolding']
    },
    {
      id: 'style-dna-creator',
      title: 'Custom Style DNA Importer',
      tagline: 'Inject Your Private Brand Guidelines',
      description: 'Upload your company’s internal design rules, logo assets, and custom color palettes to teach VibeKit how to generate in your brand’s aesthetic.',
      badge: 'PLANNED',
      badgeColor: '#2dd4bf',
      status: 'upcoming',
      icon: <Sparkles className="w-6 h-6 text-black stroke-[2.5]" />,
      actionText: 'Notify Me',
      actionHref: '#future-features',
      highlights: ['Custom system prompts', 'Brand token ingestion', 'Team workspace sharing']
    }
  ];

  const filteredFeatures = features.filter((f) => {
    if (filter === 'live') return f.status === 'live';
    if (filter === 'upcoming') return f.status === 'upcoming';
    return true;
  });

  return (
    <section id="features" className="py-16 sm:py-24 bg-[#fffef5] border-b-[3px] border-black select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#facc15] border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-black uppercase text-black">
              <Zap className="w-3.5 h-3.5 text-black stroke-[2.5]" />
              <span>Modular Platform Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-black uppercase tracking-tight">
              A Complete Platform for Vibecoders.
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 font-medium">
              Explore our current suite of live frontend tools, or see upcoming capabilities designed to accelerate every step of your development pipeline.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border-2 border-black shadow-[3px_3px_0px_#000]">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase transition ${
                filter === 'all'
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-zinc-100'
              }`}
            >
              All Modules ({features.length})
            </button>
            <button
              onClick={() => setFilter('live')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase transition ${
                filter === 'live'
                  ? 'bg-[#4ade80] text-black border border-black shadow-[1px_1px_0px_#000]'
                  : 'text-black hover:bg-zinc-100'
              }`}
            >
              Live Now ({features.filter(f => f.status === 'live').length})
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase transition ${
                filter === 'upcoming'
                  ? 'bg-[#fb923c] text-black border border-black shadow-[1px_1px_0px_#000]'
                  : 'text-black hover:bg-zinc-100'
              }`}
            >
              Roadmap (4)
            </button>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="future-features">
          {filteredFeatures.map((item) => {
            const isLive = item.status === 'live';
            return (
              <div
                key={item.id}
                className={`rounded-3xl border-[3px] border-black p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all duration-200 ${
                  isLive 
                    ? 'bg-white shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:-translate-y-1' 
                    : 'bg-[#fffbeb] border-dashed shadow-[4px_4px_0px_#000] opacity-95 hover:opacity-100 hover:shadow-[6px_6px_0px_#000]'
                }`}
              >
                {/* Card Top Banner */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#fffdf0] border-2 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center">
                      {item.icon}
                    </div>

                    <span 
                      className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase border-2 border-black shadow-[2px_2px_0px_#000] tracking-wide"
                      style={{ backgroundColor: item.badgeColor }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black font-heading text-black">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono font-bold text-purple-700 mt-1 uppercase">
                      {item.tagline}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 pt-2 border-t-2 border-black/10">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                      <CheckCircle2 className={`w-3.5 h-3.5 stroke-[2.5] ${isLive ? 'text-emerald-600' : 'text-orange-500'}`} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-4 border-t-2 border-black">
                  {isLive ? (
                    <Link
                      href={item.actionHref}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#facc15] hover:bg-[#eab308] border-2 border-black shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none text-xs font-black uppercase text-black transition"
                    >
                      <span>{item.actionText}</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </Link>
                  ) : (
                    <div className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border-2 border-black shadow-[2px_2px_0px_#000] text-xs font-black uppercase text-zinc-700">
                      <Clock className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{item.actionText}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Future Ideas */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#fef08a] border-[3px] border-black shadow-[6px_6px_0px_#000] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-black font-heading text-black uppercase">
              Have a feature request or new design aesthetic?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-700 font-medium">
              VibeKit is continuously updated with community-requested styles and AI coding tool integrations.
            </p>
          </div>

          <Link
            href="/studio"
            className="shrink-0 px-6 py-3 rounded-2xl bg-black hover:bg-zinc-800 text-white font-black uppercase text-xs sm:text-sm shadow-[4px_4px_0px_#facc15] transition flex items-center gap-2"
          >
            <span>Look at Frontend Designs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
