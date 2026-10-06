'use client';
import React from 'react';
import Link from 'next/link';
import ComponentLabView from '@/components/hub/ComponentLabView';
import { Sparkles, ArrowLeft, Layers, Palette, Eye, ArrowRight } from 'lucide-react';

export default function ComponentLabPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#07080e] select-none">
      {/* Top Header */}
      <header className="h-14 flex-shrink-0 bg-[#0c0d15] border-b border-white/10 px-4 sm:px-6 flex items-center justify-between z-30">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>

          <div className="flex items-center gap-2 border-l border-white/10 pl-3">
            <div className="w-7 h-7 rounded-lg bg-yellow-400 border border-black flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-black stroke-[2.5]" />
            </div>
            <div>
              <span className="font-extrabold text-sm text-white">VibeKit</span>
              <span className="text-[10px] font-mono text-yellow-400 ml-2 border border-yellow-400/30 px-1.5 py-0.2 rounded bg-yellow-400/10 uppercase">
                Component Lab
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/canvas"
            className="text-xs text-zinc-400 hover:text-white font-medium flex items-center gap-1.5 transition px-2.5 py-1.5 rounded-lg hover:bg-white/5"
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span className="hidden sm:inline">Wireframe Canvas</span>
          </Link>

          <Link
            href="/palettes"
            className="text-xs text-zinc-400 hover:text-white font-medium flex items-center gap-1.5 transition px-2.5 py-1.5 rounded-lg hover:bg-white/5"
          >
            <Palette className="w-3.5 h-3.5 text-pink-400" />
            <span className="hidden sm:inline">Tokens & Palettes</span>
          </Link>

          <Link
            href="/studio"
            className="px-3.5 py-1.5 rounded-xl bg-[#facc15] hover:bg-[#eab308] text-black font-black text-xs uppercase flex items-center gap-1.5 shadow-md shadow-yellow-500/20 transition"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Design Studio</span>
          </Link>
        </div>
      </header>

      {/* Main Lab View */}
      <div className="flex-1 overflow-hidden">
        <ComponentLabView />
      </div>
    </div>
  );
}
