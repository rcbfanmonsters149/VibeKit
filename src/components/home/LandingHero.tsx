'use client';
import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, ArrowRight, Eye, Play, Star, 
  Terminal, Layers, Rocket, ShieldCheck, Zap 
} from 'lucide-react';

export default function LandingHero() {
  return (
    <section className="relative bg-[#fffdf2] text-black overflow-hidden border-b-[3px] border-black py-12 sm:py-20 lg:py-24">
      {/* Background Decorative Graphic Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Top Floating Sticker Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fef08a] border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-black uppercase tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-black stroke-[2.5]" />
            <span>VibeKit v2.0 Live</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38bdf8] border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-black uppercase tracking-wide">
            <Layers className="w-3.5 h-3.5 text-black stroke-[2.5]" />
            <span>12 Visual Archetypes</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4ade80] border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-black uppercase tracking-wide">
            <Rocket className="w-3.5 h-3.5 text-black stroke-[2.5]" />
            <span>25+ Production Sites</span>
          </div>

          <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f472b6] border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-black uppercase tracking-wide">
            <Zap className="w-3.5 h-3.5 text-black stroke-[2.5]" />
            <span>Cursor & Claude Ready</span>
          </div>
        </div>

        {/* Hero Headlines */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-black tracking-tight leading-[1.08] uppercase">
            Stop Building Boring Websites.
            <br />
            <span className="bg-[#facc15] px-2 sm:px-4 py-0.5 border-2 border-black shadow-[4px_4px_0px_#000] inline-block mt-2 sm:mt-3 rotate-[-1deg]">
              Vibecode Iconic Frontends
            </span>
            <span className="block text-2xl sm:text-4xl lg:text-5xl mt-2 text-zinc-900 font-extrabold normal-case">
              with Instant AI Prompts & Design Systems.
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-zinc-700 max-w-2xl mx-auto leading-relaxed font-medium">
            VibeKit is the all-in-one frontend studio for modern developers. Preview <strong className="text-black font-black underline decoration-yellow-400 decoration-4">12 radical design aesthetics</strong> side-by-side, inspect prompt recipes for Cursor, Claude Code, and v0, and ship production-grade Next.js apps.
          </p>
        </div>

        {/* Hero Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-lg mx-auto pt-2">
          {/* Main User Requested CTA */}
          <Link
            href="/studio"
            className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#facc15] hover:bg-[#eab308] border-[3px] border-black shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000] hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none text-base sm:text-lg font-black uppercase text-black tracking-wide transition-all duration-150"
          >
            <Eye className="w-5 h-5 stroke-[2.5]" />
            <span>Look at Frontend Designs</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/studio?tab=templates"
            className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white hover:bg-zinc-50 border-[3px] border-black shadow-[5px_5px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none text-sm sm:text-base font-black uppercase text-black transition-all duration-150"
          >
            <Rocket className="w-4 h-4" />
            <span>Browse 25+ Templates</span>
          </Link>
        </div>

        {/* Quick Social Proof / Key Numbers Banner */}
        <div className="pt-4 max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { num: '12+', label: 'Design Archetypes', color: '#fef08a' },
              { num: '25+', label: 'Complete Templates', color: '#fed7aa' },
              { num: '4', label: 'AI Formats (Cursor, Claude, v0)', color: '#bfdbfe' },
              { num: '100%', label: 'Production Ready Code', color: '#bbf7d0' },
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl border-2 border-black shadow-[3px_3px_0px_#000] text-center"
                style={{ backgroundColor: stat.color }}
              >
                <div className="text-xl sm:text-2xl font-black font-heading text-black">{stat.num}</div>
                <div className="text-[11px] font-mono font-bold uppercase text-zinc-800 tracking-tight mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Studio Preview Teaser Window (Neobrutalist Frame) */}
        <div className="pt-6 max-w-5xl mx-auto">
          <div className="rounded-3xl border-[3px] border-black bg-black shadow-[10px_10px_0px_#000] overflow-hidden">
            {/* Window Titlebar */}
            <div className="bg-[#fef08a] border-b-2 border-black px-4 sm:px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ef4444] border border-black shadow-[1px_1px_0px_#000]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#eab308] border border-black shadow-[1px_1px_0px_#000]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#22c55e] border border-black shadow-[1px_1px_0px_#000]" />
                <span className="ml-3 font-mono font-black text-xs uppercase text-black hidden sm:inline-block">
                  VIBEKIT STUDIO WORKSPACE — LIVE INTERACTIVE PREVIEW
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-black font-bold text-black">
                  SPLIT-VIEW COMPARISON
                </span>
                <Link
                  href="/studio"
                  className="text-xs font-black uppercase bg-[#38bdf8] text-black px-3 py-1 rounded-lg border border-black shadow-[2px_2px_0px_#000] hover:bg-[#0284c7] hover:text-white transition flex items-center gap-1"
                >
                  <span>Launch Full Studio</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Inner Studio Teaser Graphic */}
            <Link href="/studio" className="block relative group overflow-hidden bg-[#090a0f] p-4 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                {/* Simulated Left Sidebar */}
                <div className="md:col-span-4 bg-[#11131a] rounded-2xl border border-white/10 p-4 space-y-3 pointer-events-none">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-xs font-bold text-white">Design Archetypes</span>
                    <span className="text-[10px] font-mono bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded">12 Styles</span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { name: 'Minimal / Clean', tag: 'Linear aesthetic', active: false },
                      { name: 'Neobrutalism', tag: 'High-contrast raw', active: true },
                      { name: 'Retro Y2K OS', tag: 'Windows 95/98', active: false },
                      { name: 'Spatial VisionOS', tag: 'Glass depth', active: false },
                      { name: 'Bioluminescent', tag: 'Abyssal glow', active: false },
                    ].map((item, i) => (
                      <div 
                        key={i}
                        className={`p-2.5 rounded-xl border flex items-center justify-between text-xs transition ${
                          item.active 
                            ? 'bg-purple-600/30 border-purple-500 text-white font-bold shadow-md shadow-purple-500/20' 
                            : 'bg-white/5 border-white/5 text-zinc-400'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${item.active ? 'bg-purple-400' : 'bg-zinc-600'}`} />
                          <span>{item.name}</span>
                        </div>
                        <span className="text-[10px] text-zinc-500 font-mono">{item.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated Right Live Canvas */}
                <div className="md:col-span-8 bg-[#181924] rounded-2xl border border-white/15 p-6 space-y-4 relative overflow-hidden pointer-events-none">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">Active Preview</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">Live Rendering</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
                      <span className="px-2 py-0.5 bg-white/5 rounded border border-white/10">View Prompt</span>
                      <span className="px-2 py-0.5 bg-white/5 rounded border border-white/10">Design Details</span>
                      <span className="px-2 py-0.5 bg-purple-600 text-white rounded font-bold">Side-by-Side</span>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-[#fffdf0] border-2 border-black text-black space-y-3 shadow-lg">
                    <span className="inline-block px-2 py-0.5 rounded bg-[#facc15] border border-black text-[10px] font-black uppercase">
                      NEOBRUTALISM DEMO
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black font-heading leading-tight">
                      HIGH-CONTRAST TACTILE UI WITH ZERO FLUFF
                    </h3>
                    <p className="text-xs text-zinc-700">
                      Solid 3px black borders, hard offset shadows, vibrant pop accents, and tactile interactive feedback.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Invitation Overlay */}
              <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="px-6 py-3 rounded-2xl bg-[#facc15] border-2 border-black shadow-[5px_5px_0px_#000] text-black font-black uppercase text-sm flex items-center gap-2">
                  <Play className="w-4 h-4 fill-black" />
                  <span>Click to Enter Interactive Design Studio</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
