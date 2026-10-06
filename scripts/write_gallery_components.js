const fs = require('fs');
const path = require('path');
const baseDir = 'C:\\Create_websites\\VibeKit';

// 1. src/components/gallery/DesignCard.tsx
const designCardCode = `"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Design } from "@/types";
import { Copy, Check, Eye, Sparkles, ExternalLink, Flame, ArrowUpRight } from "lucide-react";

interface DesignCardProps {
  design: Design;
}

export default function DesignCard({ design }: DesignCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(design.aiPrompt.standard);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative rounded-2xl bg-[#10121a] border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10">
      {/* Top Preview Frame Header / Thumbnail */}
      <div className="relative aspect-[16/10] w-full bg-[#08090d] border-b border-white/10 overflow-hidden group/frame">
        {/* Scaled Live Iframe Preview for realistic scroll snapshot */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none bg-[#08090d]">
          <iframe
            src={design.previewUrl}
            title={design.title}
            className="w-[1200px] h-[750px] transform scale-[0.32] origin-top-left border-0 pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        </div>

        {/* Gradient Overlay & Actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#10121a] via-transparent to-black/30 opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />

        {/* Floating Category & Difficulty Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-zinc-200">
            {design.style}
          </span>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 backdrop-blur-md flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span>{design.difficulty}</span>
          </span>
        </div>

        {/* Hover Quick Action Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black/50 backdrop-blur-[2px]">
          <Link
            href={\`/designs/\${design.slug}\`}
            className="px-4 py-2 rounded-xl bg-white text-zinc-950 font-semibold text-xs shadow-lg hover:bg-zinc-100 transition flex items-center space-x-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Full Preview & Scroll</span>
          </Link>
          <button
            onClick={handleCopyPrompt}
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs shadow-lg transition flex items-center space-x-1.5"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Prompt Copied!" : "Copy Prompt"}</span>
          </button>
        </div>
      </div>

      {/* Card Info Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <Link href={\`/designs/\${design.slug}\`} className="hover:text-purple-400 transition">
              <h3 className="font-heading font-bold text-base text-white line-clamp-1 group-hover:text-purple-300 transition">
                {design.title}
              </h3>
            </Link>
          </div>
          <p className="mt-2 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
            {design.tagline}
          </p>

          {/* Tags List */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {design.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-zinc-400 border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Footer Details */}
        <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center space-x-3 text-[11px] font-mono text-zinc-500">
            <span className="flex items-center gap-1 text-purple-400">
              <Flame className="w-3.5 h-3.5" />
              <span>{design.stats.vibecoders} coders</span>
            </span>
          </div>

          <Link
            href={\`/designs/\${design.slug}\`}
            className="text-xs font-medium text-zinc-300 hover:text-white flex items-center space-x-1 group/link"
          >
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover/link:text-purple-400 transition" />
          </Link>
        </div>
      </div>
    </div>
  );
}
`;

// 2. src/components/gallery/FilterBar.tsx
const filterBarCode = `"use client";
import React from "react";
import { CATEGORIES } from "@/data/categories";
import { Sparkles, Search, SlidersHorizontal } from "lucide-react";

interface FilterBarProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  selectedDifficulty: string;
  onSelectDifficulty: (diff: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function FilterBar({
  selectedCategory,
  onSelectCategory,
  selectedDifficulty,
  onSelectDifficulty,
  searchQuery,
  onSearchChange
}: FilterBarProps) {
  const difficulties = ["All Levels", "Beginner", "Intermediate", "Advanced"];

  return (
    <div id="categories" className="space-y-6 pt-4">
      {/* Search and Secondary Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search 25 designs, tags, or styles (e.g. bento, dark, stripe, prompt)..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white px-1.5 py-0.5 rounded bg-white/10"
            >
              Clear
            </button>
          )}
        </div>

        {/* Difficulty Selector */}
        <div className="flex items-center space-x-1.5 self-start sm:self-auto bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
          {difficulties.map((diff) => (
            <button
              key={diff}
              onClick={() => onSelectDifficulty(diff === "All Levels" ? "all" : diff)}
              className={\`px-3 py-1.5 rounded-lg font-medium transition \${
                (selectedDifficulty === "all" && diff === "All Levels") || selectedDifficulty === diff
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }\`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Category Pills (Horizontal Scroll) */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 custom-scroll scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={\`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition flex items-center space-x-2 border \${
              selectedCategory === cat.id
                ? "bg-white text-zinc-950 border-white shadow-lg"
                : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10 hover:border-white/20"
            }\`}
          >
            <span>{cat.name}</span>
            <span
              className={\`text-[10px] px-1.5 py-0.2 rounded-full font-mono \${
                selectedCategory === cat.id ? "bg-zinc-200 text-zinc-950" : "bg-white/10 text-zinc-400"
              }\`}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
`;

fs.writeFileSync(path.join(baseDir, 'src/components/gallery/DesignCard.tsx'), designCardCode, 'utf8');
fs.writeFileSync(path.join(baseDir, 'src/components/gallery/FilterBar.tsx'), filterBarCode, 'utf8');
console.log('Saved DesignCard and FilterBar components');
