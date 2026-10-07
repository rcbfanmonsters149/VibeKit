'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { DESIGNS_3D, CATEGORIES_3D, Design3D } from '@/data/designs3d';
import { 
  Box, Sparkles, Rotate3d, Search, ExternalLink, 
  Copy, Check, Layers, Eye, Zap, Orbit, Compass, 
  Maximize2, ArrowRight, ShieldCheck, Flame
} from 'lucide-react';

export default function Gallery3DView() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredDesigns = useMemo(() => {
    return DESIGNS_3D.filter((d) => {
      const matchesCat = selectedCategory === 'all' || d.category === selectedCategory;
      const matchesSearch = 
        d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        d.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyPrompt = (d: Design3D, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(d.aiPrompt.cursor);
    setCopiedId(d.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#07080e] text-white flex flex-col select-none">
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#0c0e18]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
              <div className="w-full h-full bg-[#0a0c16] rounded-xl flex items-center justify-center">
                <Rotate3d className="w-4 h-4 text-cyan-300 group-hover:rotate-180 transition-transform duration-500" />
              </div>
            </div>
            <span className="font-black text-lg tracking-tight text-white font-heading">VIBEKIT 3D</span>
            <span className="px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono border border-cyan-500/40 font-bold">
              GALLERY
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/studio-3d"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-black text-xs uppercase flex items-center gap-1.5 shadow-md shadow-cyan-500/20 transition"
          >
            <Box className="w-4 h-4" />
            <span>Launch 3D Studio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/"
            className="hidden sm:inline-flex px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-xs font-semibold transition"
          >
            Home
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        
        {/* Hero Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#0e1222] to-purple-950/40 border border-white/10 p-6 sm:p-10 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Spatial Computing • CSS 3D Transforms • WebGL Physics</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight">
              Curated 3D Websites & Spatial Frontends Gallery
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-medium">
              Explore production-ready 3D website templates engineered with interactive moving cursor animations, perspective tilts, multi-layer Z-space depth, and zero third-party bloat.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>{DESIGNS_3D.length} Active 3D Websites</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>120 FPS Hardware Acceleration</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                <span>Cursor & Claude Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {CATEGORIES_3D.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      active
                        ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20'
                        : 'bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/5'
                    }`}
                  >
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search 3D websites, tech stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>
          </div>
        </div>

        {/* 3D Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDesigns.map((design) => {
            const isCopied = copiedId === design.id;
            return (
              <div
                key={design.id}
                className="group rounded-3xl bg-[#0c0d17] border border-white/10 hover:border-cyan-500/50 p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Top Header */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 uppercase font-bold">
                      {design.categoryLabel}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-emerald-400 border border-emerald-500/30">
                      {design.stats.fps}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors font-heading">
                      {design.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                      {design.tagline}
                    </p>
                  </div>
                </div>

                {/* Interactive 3D Preview Frame Container */}
                <div className="my-4 rounded-2xl bg-black border border-white/10 h-44 overflow-hidden relative group/frame">
                  <iframe
                    src={design.previewUrl}
                    title={design.title}
                    className="w-full h-full border-0 pointer-events-none transform scale-90 group-hover/frame:scale-95 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3 justify-between">
                    <span className="text-[10px] font-mono text-zinc-400">
                      Perspective: {design.specs.perspective}
                    </span>
                    <a
                      href={design.previewUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-white text-[10px] font-bold uppercase transition flex items-center gap-1 backdrop-blur-md"
                    >
                      <span>Fullscreen</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="space-y-3 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {design.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                    <Link
                      href={`/studio-3d?id=${design.id}`}
                      className="flex-1 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xs uppercase flex items-center justify-center gap-1.5 transition shadow-md shadow-cyan-500/20"
                    >
                      <Box className="w-3.5 h-3.5" />
                      <span>Open in 3D Studio</span>
                    </Link>

                    <button
                      onClick={(e) => handleCopyPrompt(design, e)}
                      title="Copy 3D AI Prompt"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 transition"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#090b14] py-8 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>VibeKit 3D Spatial Gallery • CSS 3D Transforms, WebGL & Cursor Physics</span>
          <div className="flex items-center gap-4">
            <Link href="/studio-3d" className="text-cyan-400 hover:underline">3D Studio Workbench</Link>
            <Link href="/canvas" className="hover:text-white transition">2D Canvas</Link>
            <Link href="/" className="hover:text-white transition">Homepage</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
