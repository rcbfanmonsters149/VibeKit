"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Design } from "@/types";
import { Copy, Check, Eye, Sparkles, ExternalLink, Flame, ArrowUpRight } from "lucide-react";
import MiniDesignThumbnail from "./MiniDesignThumbnail";

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
    <div className="group relative rounded-2xl bg-[#10121a] border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 virtualized-card">
      {/* Top Preview Frame Header / Thumbnail */}
      <div className="relative aspect-[16/10] w-full bg-[#08090d] border-b border-white/10 overflow-hidden group/frame">
        {/* Wireframe Thumbnail */}
        <MiniDesignThumbnail design={design} />

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
            href={`/designs/${design.slug}`}
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
            <Link href={`/designs/${design.slug}`} className="hover:text-purple-400 transition">
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
        <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-end text-xs text-zinc-400">
          <Link
            href={`/designs/${design.slug}`}
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
