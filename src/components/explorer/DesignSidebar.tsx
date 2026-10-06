'use client';
import React from 'react';
import { Design } from '@/types';
import { Sparkles, Layers, SlidersHorizontal, Flame } from 'lucide-react';

interface DesignSidebarProps {
  designs: Design[];
  selectedDesign: Design | null;
  onSelectDesign: (d: Design) => void;
  modeFilter: string;
  onModeFilter: (f: string) => void;
  typeFilter: string;
  onTypeFilter: (f: string) => void;
}

export default function DesignSidebar({
  designs,
  selectedDesign,
  onSelectDesign,
  modeFilter,
  onModeFilter,
  typeFilter,
  onTypeFilter,
}: DesignSidebarProps) {
  const modes = ['all', 'dark', 'light'];
  const types = ['all', 'sans', 'serif', 'mono'];

  const popularSlugs = [
    'minimal-clean',
    'neobrutalism',
    'retro-y2k-os',
    'wabi-sabi-craft',
    'bioluminescent-deep-tech',
  ];

  const comparisonSlugs = [
    'minimal-clean',
    'glassmorphism',
    'bold-modern',
    'neobrutalism',
    'dark-premium',
    'retro-y2k-os',
    'technical-blueprint',
    'claymorphism-3d',
    'wabi-sabi-craft',
    'spatial-visionos',
    'swiss-bauhaus-poster',
    'bioluminescent-deep-tech',
  ];

  const popularDesigns = designs.filter(d => popularSlugs.includes(d.slug));
  const comparisonDesigns = designs.filter(d => comparisonSlugs.includes(d.slug));

  const getCleanName = (design: Design) => {
    return design.style || design.title.replace(/^Design\s+\d+\s*[—–-]\s*/i, '');
  };

  const renderDesignButton = (design: Design, keyPrefix: string) => {
    const isActive = selectedDesign?.id === design.id;
    const cleanName = getCleanName(design);

    return (
      <button
        key={`${keyPrefix}-${design.id}`}
        onClick={() => onSelectDesign(design)}
        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition text-left group border ${
          isActive 
            ? 'bg-purple-950/40 border-purple-500/40 shadow-sm' 
            : 'border-transparent hover:bg-white/5'
        }`}
      >
        <div 
          className="w-3 h-3 rounded-full flex-shrink-0 border border-white/30 shadow-sm transition-transform group-hover:scale-110"
          style={{ backgroundColor: design.colorPalette.accent }}
        />
        <div className="flex-1 min-w-0">
          <div className={`text-xs font-semibold truncate ${isActive ? 'text-white' : 'text-zinc-200 group-hover:text-white'}`}>
            {cleanName}
          </div>
          <div className="text-[10px] text-zinc-400 truncate mt-0.5">
            <span className="capitalize">{design.mode} mode</span> • <span>{design.fontType}</span>
          </div>
        </div>
        {isActive && (
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
        )}
      </button>
    );
  };

  return (
    <div className="w-80 h-full flex flex-col border-r border-white/10 bg-[#08090f] flex-shrink-0 overflow-hidden select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-white/10">
        <div className="flex items-center gap-2.5 mb-1.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-600/30">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-lg font-bold text-white tracking-tight">VibeKit</h1>
          <span className="text-[10px] font-mono uppercase bg-purple-500/20 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded-full ml-auto">
            12 Styles
          </span>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Compare distinct frontend design styles using identical content & information.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="px-5 py-3 border-b border-white/10 flex flex-col gap-2.5 bg-[#090a12]">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-mono text-zinc-500 uppercase mr-1">Theme:</span>
          {modes.map(m => (
            <button
              key={m}
              onClick={() => onModeFilter(m)}
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium capitalize transition ${
                modeFilter === m ? 'bg-purple-500/25 text-purple-300 border border-purple-500/40' : 'bg-white/5 text-zinc-400 border border-transparent hover:bg-white/10'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-mono text-zinc-500 uppercase mr-1">Type:</span>
          {types.map(t => (
            <button
              key={t}
              onClick={() => onTypeFilter(t)}
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium capitalize transition ${
                typeFilter === t ? 'bg-purple-500/25 text-purple-300 border border-purple-500/40' : 'bg-white/5 text-zinc-400 border border-transparent hover:bg-white/10'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Scrollable Design List */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        <div className="p-3 flex flex-col gap-3">
          
          {/* 1. Popular Designs Pinned Section */}
          {popularDesigns.length > 0 && (
            <div className="space-y-1">
              <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Popular Designs</span>
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/25 font-semibold">
                  Top 5
                </span>
              </div>
              <div className="flex flex-col gap-1">
                {popularDesigns.map((design) => renderDesignButton(design, 'popular'))}
              </div>
            </div>
          )}

          {/* 2. All Design Variations Section */}
          {comparisonDesigns.length > 0 && (
            <div className="space-y-1 pt-1 border-t border-white/5">
              <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-purple-400 font-semibold flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>All Design Styles</span>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono font-semibold">
                  {comparisonDesigns.length}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                {comparisonDesigns.map((design) => renderDesignButton(design, 'all'))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
