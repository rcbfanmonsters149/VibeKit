'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { DESIGNS } from '@/data/designs';
import { ArrowUpRight, Sparkles, Layers, Eye, Check } from 'lucide-react';

export default function LiveStyleTicker() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Filter 12 unique styles from DESIGNS
  const uniqueStyles = DESIGNS.slice(0, 12);

  return (
    <section id="styles" className="py-16 sm:py-24 bg-[#fefce8] border-b-[3px] border-black select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f472b6] border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-black uppercase text-black">
              <Layers className="w-3.5 h-3.5 text-black stroke-[2.5]" />
              <span>12 Visual Aesthetics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-black uppercase tracking-tight">
              Pick Your Vibe. Switch Instantly.
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 font-medium">
              Every design style includes complete color palettes, typography tokens, component specifications, and copy-ready AI master prompts.
            </p>
          </div>

          <Link
            href="/studio"
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#38bdf8] hover:bg-[#0ea5e9] border-2 border-black shadow-[4px_4px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none text-xs sm:text-sm font-black uppercase text-black transition"
          >
            <Eye className="w-4 h-4" />
            <span>Open All in Studio</span>
          </Link>
        </div>

        {/* 12 Styles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {uniqueStyles.map((style, idx) => {
            const isDark = style.mode === 'dark';
            return (
              <div
                key={style.id}
                className="group rounded-2xl border-[3px] border-black bg-white shadow-[5px_5px_0px_#000] hover:shadow-[7px_7px_0px_#000] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                {/* Header Swatch */}
                <div 
                  className="p-4 border-b-2 border-black flex items-center justify-between"
                  style={{ backgroundColor: style.colorPalette.bg }}
                >
                  <span 
                    className="text-xs font-black uppercase px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_#000]"
                    style={{ 
                      backgroundColor: style.colorPalette.accent,
                      color: isDark ? '#000000' : '#ffffff' 
                    }}
                  >
                    {style.style}
                  </span>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-white font-bold uppercase">
                    {style.mode} mode
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-black text-lg text-black group-hover:text-purple-600 transition">
                      {style.title}
                    </h3>
                    <p className="text-xs text-zinc-600 font-medium mt-1.5 line-clamp-2 leading-relaxed">
                      {style.tagline}
                    </p>
                  </div>

                  {/* Palette dots */}
                  <div className="pt-2 border-t-2 border-black/10">
                    <div className="text-[10px] font-mono uppercase font-bold text-zinc-500 mb-1.5">
                      Palette DNA:
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div 
                        className="w-5 h-5 rounded-md border border-black shadow-[1px_1px_0px_#000]"
                        style={{ backgroundColor: style.colorPalette.bg }}
                        title={`Background: ${style.colorPalette.bg}`}
                      />
                      <div 
                        className="w-5 h-5 rounded-md border border-black shadow-[1px_1px_0px_#000]"
                        style={{ backgroundColor: style.colorPalette.accent }}
                        title={`Accent: ${style.colorPalette.accent}`}
                      />
                      <div 
                        className="w-5 h-5 rounded-md border border-black shadow-[1px_1px_0px_#000]"
                        style={{ backgroundColor: style.colorPalette.text }}
                        title={`Text: ${style.colorPalette.text}`}
                      />
                      <span className="ml-auto text-[10px] font-mono text-zinc-400">
                        {style.colorPalette.accent}
                      </span>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-t-2 border-black flex items-center justify-between">
                    <Link
                      href={`/designs/${style.slug}`}
                      className="text-xs font-black uppercase text-zinc-600 hover:text-black transition"
                    >
                      Specs & Code
                    </Link>

                    <Link
                      href="/studio"
                      className="inline-flex items-center gap-1 text-xs font-black uppercase px-2.5 py-1 rounded-lg bg-[#facc15] hover:bg-[#eab308] border border-black shadow-[2px_2px_0px_#000] text-black active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition"
                    >
                      <span>Try in Studio</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
