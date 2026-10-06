"use client";
import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DESIGNS } from "@/data/designs";
import LivePreviewFrame from "@/components/preview/LivePreviewFrame";
import PromptBox from "@/components/prompt/PromptBox";
import CodeTabs from "@/components/preview/CodeTabs";
import DesignCard from "@/components/gallery/DesignCard";
import { ArrowLeft, Sparkles, Flame, Eye, Layers, Palette, ShieldCheck, ArrowUpRight, Share2, Check, Globe, CheckCircle2 } from "lucide-react";
import { getDesignSuitability } from "@/data/suitability";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function DesignDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const design = DESIGNS.find((d) => d.slug === resolvedParams.slug);

  if (!design) {
    notFound();
  }

  const suitability = getDesignSuitability(design);

  // Similar designs in same category or style
  const similarDesigns = DESIGNS.filter(
    (d) => d.slug !== design.slug && (d.category === design.category || d.difficulty === design.difficulty)
  ).slice(0, 3);

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-8 max-w-7xl mx-auto space-y-12">
      {/* Top Breadcrumb & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-medium text-zinc-400 hover:text-white transition px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All 25 Designs</span>
        </Link>

        <div className="flex items-center space-x-3 text-xs font-mono text-zinc-400">
          <span className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
            {design.style}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
            {design.difficulty}
          </span>
        </div>
      </div>

      {/* Title & Metadata Header */}
      <div className="space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
              {design.title}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-3xl leading-relaxed">
              {design.description}
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center space-x-4 bg-[#11131c] border border-white/10 p-3 rounded-2xl self-start">
            <div className="text-center px-3 border-r border-white/10">
              <div className="text-xs text-zinc-500 font-mono">Views</div>
              <div className="text-sm font-bold text-white font-mono">{design.stats.views}</div>
            </div>
            <div className="text-center px-3 border-r border-white/10">
              <div className="text-xs text-zinc-500 font-mono">Coders</div>
              <div className="text-sm font-bold text-purple-400 font-mono">{design.stats.vibecoders}</div>
            </div>
            <div className="text-center px-3">
              <div className="text-xs text-zinc-500 font-mono">Likes</div>
              <div className="text-sm font-bold text-rose-400 font-mono">{design.stats.likes}</div>
            </div>
          </div>
        </div>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {design.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 text-zinc-300 border border-white/10"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* 1. Live Interactive Scrollable Sandbox */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Layers className="w-4 h-4 text-purple-400" />
            <h2 className="font-heading font-bold text-lg text-white">Live Multi-Section Preview</h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">Scroll through all sections inside frame</span>
        </div>

        <LivePreviewFrame previewUrl={design.previewUrl} title={design.title} />
      </section>

      {/* 2. AI Prompt Engine */}
      <section className="space-y-4 pt-6">
        <PromptBox aiPrompt={design.aiPrompt} designTitle={design.title} />
      </section>

      {/* 3. Multi-Language Source Code */}
      <section className="space-y-4 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="font-heading font-bold text-lg text-white">Source Code Snippets</h2>
          <span className="text-xs font-mono text-zinc-500">Next.js / Tailwind / HTML</span>
        </div>

        <CodeTabs code={design.code} />
      </section>

      {/* 4. Design Specs & Palette Breakdown */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        {/* Features Checklist */}
        <div className="p-6 rounded-2xl bg-[#0f111a] border border-white/10 space-y-4">
          <h3 className="font-heading font-bold text-white text-base flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Built-in Design Capabilities</span>
          </h3>
          <ul className="space-y-2.5">
            {design.features.map((f, i) => (
              <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Color Palette Box */}
        <div className="p-6 rounded-2xl bg-[#0f111a] border border-white/10 space-y-4">
          <h3 className="font-heading font-bold text-white text-base flex items-center space-x-2">
            <Palette className="w-4 h-4 text-purple-400" />
            <span>Color Palette & Tokens</span>
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg border border-white/20" style={{ backgroundColor: design.colorPalette.accent }}></div>
                <div className="text-xs">
                  <div className="font-semibold text-white">Primary Accent</div>
                  <div className="font-mono text-zinc-400">{design.colorPalette.accent}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg border border-white/20" style={{ backgroundColor: design.colorPalette.bg }}></div>
                <div className="text-xs">
                  <div className="font-semibold text-white">Surface Background</div>
                  <div className="font-mono text-zinc-400">{design.colorPalette.bg}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg border border-white/20" style={{ backgroundColor: design.colorPalette.text }}></div>
                <div className="text-xs">
                  <div className="font-semibold text-white">Foreground Text</div>
                  <div className="font-mono text-zinc-400">{design.colorPalette.text}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. What Kind of Websites Suit This Design */}
      <section className="space-y-4 pt-6">
        <div className="flex items-center gap-2.5">
          <Globe className="w-5 h-5 text-cyan-400" />
          <div>
            <h2 className="font-heading font-bold text-xl text-white">
              What Kind of Websites Suit This Design?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Recommended website categories, platforms, and audiences best matching the {suitability.coreDesignName} aesthetic:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {suitability.suitableWebsites.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-gradient-to-b from-[#111320] to-[#0a0c16] border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                {item.badge && (
                  <span className="inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-500/25 mb-3">
                    {item.badge}
                  </span>
                )}
                <h4 className="text-base font-bold text-white">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center text-xs text-cyan-400 font-medium">
                <span>Optimal Match</span>
                <CheckCircle2 className="w-3.5 h-3.5 ml-1.5 text-cyan-400" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Similar Designs Section */}
      {similarDesigns.length > 0 && (
        <section className="pt-12 border-t border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-heading font-bold text-white">Similar & Related Designs</h2>
            <Link href="/" className="text-xs font-semibold text-purple-400 hover:text-purple-300">
              View All 25 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarDesigns.map((d) => (
              <DesignCard key={d.id} design={d} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
