const fs = require('fs');
const path = require('path');
const baseDir = 'C:\\Create_websites\\VibeKit';

// 1. src/app/layout.tsx
const layoutCode = `import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "VibeKit — Frontend Design Gallery & AI Prompt Engine for Vibecoding",
  description: "Curated collection of 25 iconic modern frontend designs, scrollable multi-section live previews, copy-ready AI prompts, and source code for Cursor, v0, Bolt, and Claude Code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#090a0f] text-zinc-100 font-sans flex flex-col selection:bg-purple-500 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
`;

// 2. src/app/page.tsx
const homePageCode = `"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { DESIGNS } from "@/data/designs";
import { CATEGORIES } from "@/data/categories";
import DesignCard from "@/components/gallery/DesignCard";
import FilterBar from "@/components/gallery/FilterBar";
import { Sparkles, ArrowRight, Zap, Terminal, Code2, Layers, Flame, CheckCircle2, Shield } from "lucide-react";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDesigns = useMemo(() => {
    return DESIGNS.filter((d) => {
      // Category filter
      if (selectedCategory !== "all" && d.category !== selectedCategory) {
        return false;
      }
      // Difficulty filter
      if (selectedDifficulty !== "all" && d.difficulty !== selectedDifficulty) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = d.title.toLowerCase().includes(q);
        const matchesStyle = d.style.toLowerCase().includes(q);
        const matchesTag = d.tags.some((t) => t.toLowerCase().includes(q));
        const matchesDesc = d.description.toLowerCase().includes(q);
        if (!matchesTitle && !matchesStyle && !matchesTag && !matchesDesc) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedDifficulty, searchQuery]);

  return (
    <div className="space-y-24 pb-20">
      {/* 1. Hero Section */}
      <section className="relative pt-20 sm:pt-28 pb-12 px-4 sm:px-8 max-w-7xl mx-auto text-center overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-purple-600/25 via-indigo-600/20 to-cyan-500/15 blur-[140px] rounded-full pointer-events-none" />
        
        {/* Top Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-8 backdrop-blur-md shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>The Definitive Frontend Gallery for Vibecoding</span>
          <span className="text-purple-500">•</span>
          <span className="text-white font-semibold">25 Iconic Templates</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.1] text-white">
          Ship gorgeous frontends with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400">
            copy-ready AI prompts
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          Never stare at a blank prompt again. Explore 25 iconic, multi-section scrollable designs. Grab the battle-tested prompt for Cursor, v0, Bolt, or Claude Code and build in minutes.
        </p>

        {/* Hero CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#gallery"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:opacity-95 text-white font-bold text-sm shadow-xl shadow-purple-600/25 transition flex items-center justify-center space-x-2"
          >
            <span>Explore 25 Designs</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/prompts"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 font-semibold text-sm transition flex items-center justify-center space-x-2"
          >
            <Terminal className="w-4 h-4 text-purple-400" />
            <span>AI Prompt Playbook</span>
          </Link>
        </div>

        {/* Quick Trust / Stats Bar */}
        <div className="mt-14 pt-8 border-t border-white/5 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-heading font-bold text-white">25</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">Iconic Designs</div>
          </div>
          <div>
            <div className="text-2xl font-heading font-bold text-purple-400">100%</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">Scrollable Previews</div>
          </div>
          <div>
            <div className="text-2xl font-heading font-bold text-cyan-400">4+</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">AI Prompt Formats</div>
          </div>
          <div>
            <div className="text-2xl font-heading font-bold text-emerald-400">0</div>
            <div className="text-xs text-zinc-400 font-mono mt-1">Backend Setup Needed</div>
          </div>
        </div>
      </section>

      {/* 2. "How Vibecoding Works" 3-Step Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold">The Vibecoding Workflow</span>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-white mt-2">From Inspiration to Working UI in 3 Steps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#0e1017] border border-white/10 relative">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 flex items-center justify-center font-mono font-bold text-base mb-4">
                01
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">1. Browse & Scroll</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Explore real, multi-section scrollable designs (Hero, Bento, Dashboards, Modals) across 8 categories.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e1017] border border-white/10 relative">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-mono font-bold text-base mb-4">
                02
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">2. Copy AI Prompt</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Click one button to copy structured tokens with color palettes, layout trees, and responsive rules.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0e1017] border border-white/10 relative">
              <div className="w-10 h-10 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-base mb-4">
                03
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">3. Paste & Ship</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Paste into Cursor, v0.dev, Bolt, Windsurf, or Claude Code. Watch your assistant generate 1:1 frontend code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Gallery Section */}
      <section id="gallery" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 scroll-mt-24">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold">Curated Catalog</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-1">Design Gallery</h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">Showing {filteredDesigns.length} of 25 production designs</p>
          </div>
        </div>

        {/* Filter Bar */}
        <FilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedDifficulty={selectedDifficulty}
          onSelectDifficulty={setSelectedDifficulty}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Design Grid */}
        {filteredDesigns.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
            {filteredDesigns.map((design) => (
              <DesignCard key={design.id} design={design} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/[0.02] rounded-2xl border border-white/10">
            <Sparkles className="w-10 h-10 text-zinc-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white">No designs found matching your filter</h3>
            <p className="text-xs text-zinc-400 mt-2">Try clearing your search query or selecting a different category.</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSelectedDifficulty("all");
                setSearchQuery("");
              }}
              className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-semibold"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
`;

fs.writeFileSync(path.join(baseDir, 'src/app/layout.tsx'), layoutCode, 'utf8');
fs.writeFileSync(path.join(baseDir, 'src/app/page.tsx'), homePageCode, 'utf8');
console.log('Saved layout.tsx and page.tsx');
