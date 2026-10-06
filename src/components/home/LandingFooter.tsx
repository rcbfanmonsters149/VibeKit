'use client';
import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Globe, Code2, Layers, Terminal, Zap } from 'lucide-react';

export default function LandingFooter() {
  return (
    <footer className="bg-[#090a0f] text-white border-t-[3px] border-black select-none">
      {/* Top Action Callout Banner */}
      <div className="border-b border-white/10 bg-gradient-to-r from-purple-950/40 via-black to-indigo-950/40 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-xs font-mono text-yellow-300">
              <Zap className="w-3.5 h-3.5" />
              <span>Instant Setup — Zero Config</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white uppercase">
              Ready to create your next frontend masterpiece?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Launch into the Studio now to compare 12 styles, copy prompts, and deploy in minutes.
            </p>
          </div>

          <Link
            href="/studio"
            className="shrink-0 px-8 py-4 rounded-2xl bg-[#facc15] hover:bg-[#eab308] border-2 border-black shadow-[4px_4px_0px_#fff] text-black font-black uppercase text-sm sm:text-base flex items-center gap-2 transition"
          >
            <span>Look at Frontend Designs</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#facc15] border-2 border-white shadow-[2px_2px_0px_#fff] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-black stroke-[2.5]" />
              </div>
              <span className="font-black text-xl tracking-tight text-white font-heading">
                VIBEKIT
              </span>
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed font-medium">
              The premier frontend design system and prompt engine designed for the AI vibecoding generation.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition"
                title="Code Repository"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a 
                href="https://vibekit.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition"
                title="Global Network"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Studio Features */}
          <div className="space-y-3">
            <div className="text-xs font-black uppercase text-yellow-400 tracking-wider">
              Studio Modules
            </div>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <Link href="/studio?tab=studio" className="hover:text-white transition">
                  12-Style Comparison Studio
                </Link>
              </li>
              <li>
                <Link href="/studio?tab=templates" className="hover:text-white transition">
                  25+ Production Templates
                </Link>
              </li>
              <li>
                <Link href="/studio?tab=components" className="hover:text-white transition">
                  Component & Pattern Lab
                </Link>
              </li>
              <li>
                <Link href="/studio?tab=prompts" className="hover:text-white transition">
                  AI Prompt Studio
                </Link>
              </li>
              <li>
                <Link href="/studio?tab=palettes" className="hover:text-white transition">
                  Token & Palette Exporter
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Popular Aesthetics */}
          <div className="space-y-3">
            <div className="text-xs font-black uppercase text-yellow-400 tracking-wider">
              Top Aesthetics
            </div>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <Link href="/designs/neobrutalism" className="hover:text-white transition">
                  Neobrutalism (High-Contrast)
                </Link>
              </li>
              <li>
                <Link href="/designs/minimal-clean" className="hover:text-white transition">
                  Minimal / Clean (Linear Vibe)
                </Link>
              </li>
              <li>
                <Link href="/designs/retro-y2k-os" className="hover:text-white transition">
                  Retro Y2K OS (90s Bevel)
                </Link>
              </li>
              <li>
                <Link href="/designs/spatial-visionos" className="hover:text-white transition">
                  Spatial VisionOS (Glass Depth)
                </Link>
              </li>
              <li>
                <Link href="/designs/bioluminescent" className="hover:text-white transition">
                  Bioluminescent (Abyssal Glow)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Future Roadmap */}
          <div className="space-y-3">
            <div className="text-xs font-black uppercase text-yellow-400 tracking-wider">
              Future Capabilities
            </div>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li className="flex items-center gap-2">
                <span>AI Live Sandbox</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-orange-500/20 text-orange-400 font-mono">Q3</span>
              </li>
              <li className="flex items-center gap-2">
                <span>Figma Prompt Importer</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-pink-500/20 text-pink-400 font-mono">Beta</span>
              </li>
              <li className="flex items-center gap-2">
                <span>Full-Stack Scaffolder</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-400 font-mono">Labs</span>
              </li>
              <li className="flex items-center gap-2">
                <span>Custom Style DNA</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-400 font-mono">Planned</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div>
            © 2026 VibeKit. All rights reserved. Built for modern AI vibecoders.
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Next.js 15</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
