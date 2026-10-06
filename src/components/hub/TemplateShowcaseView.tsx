'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { DESIGNS } from '@/data/designs';
import { CATEGORIES } from '@/data/categories';
import { Design } from '@/types';
import { 
  Search, Eye, ExternalLink, Sparkles, Code2, 
  ArrowUpRight, Copy, Check, Filter, Layers 
} from 'lucide-react';
import MiniDesignThumbnail from '@/components/gallery/MiniDesignThumbnail';

interface TemplateShowcaseViewProps {
  onSelectStudioDesign?: (d: Design) => void;
}

export default function TemplateShowcaseView({ onSelectStudioDesign }: TemplateShowcaseViewProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredTemplates = useMemo(() => {
    return DESIGNS.filter((d) => {
      // Exclude style-comparison internal items or include all
      const matchesCategory = selectedCategory === 'all' || d.category === selectedCategory;
      const matchesSearch = 
        d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        d.style.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyPrompt = (design: Design, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(design.aiPrompt.standard);
    setCopiedId(design.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex-1 h-full overflow-y-auto bg-[#07080e] p-4 sm:p-8 space-y-8 select-text">
      {/* Top Hero Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#101220] to-indigo-950/40 border border-white/10 p-6 sm:p-10 overflow-hidden shadow-2xl">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs text-purple-300 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>25+ Production Website Templates</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Curated Vibecoding Landing Page Gallery
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Production-grade complete website architectures across modern SaaS, real-time developer dashboards, crypto analytics, and creator spaces.
          </p>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                selectedCategory === cat.id
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, tag, or style..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-zinc-500 outline-none focus:border-purple-500 transition"
          />
        </div>
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="group rounded-2xl bg-[#0f111a] border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-950/30 virtualized-card"
          >
            {/* Design Snapshot Wireframe Thumbnail */}
            <div className="relative aspect-[16/10] w-full bg-[#08090d] border-b border-white/10 overflow-hidden">
              <MiniDesignThumbnail design={template} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f111a] via-transparent to-black/20 pointer-events-none" />

              {/* Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-auto">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-zinc-200">
                  {template.style}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 backdrop-blur-md capitalize">
                  {template.mode} mode
                </span>
              </div>

              {/* Hover Actions Overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black/60 backdrop-blur-[2px]">
                <a
                  href={template.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-xl bg-white text-black font-bold text-xs shadow-lg hover:bg-zinc-200 transition flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Full Preview</span>
                </a>
                <Link
                  href={`/designs/${template.slug}`}
                  className="px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg transition flex items-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Specs & Code</span>
                </Link>
              </div>
            </div>

            {/* Template Information */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition">
                  {template.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {template.tagline}
                </p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {template.tags.slice(0, 3).map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-zinc-400 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <button
                  onClick={(e) => handleCopyPrompt(template, e)}
                  className="text-[11px] text-zinc-400 hover:text-white flex items-center gap-1.5 transition"
                >
                  {copiedId === template.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy AI Prompt</span>
                    </>
                  )}
                </button>

                <Link
                  href={`/designs/${template.slug}`}
                  className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1"
                >
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
