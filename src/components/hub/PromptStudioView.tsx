'use client';
import React, { useState } from 'react';
import { 
  Terminal, Copy, Check, Sparkles, Zap, Bot, 
  Layers, Code2, ArrowRight 
} from 'lucide-react';

export default function PromptStudioView() {
  const [framework, setFramework] = useState('Next.js 15 (App Router)');
  const [styleVibe, setStyleVibe] = useState('Retro Y2K OS');
  const [targetTool, setTargetTool] = useState('Cursor / Windsurf');
  const [appType, setAppType] = useState('Developer Telemetry SaaS');
  const [copied, setCopied] = useState(false);

  const frameworks = ['Next.js 15 (App Router)', 'Vite + React 19', 'Pure Tailwind CSS'];
  const vibes = [
    'Retro Y2K OS', 'CAD Technical Blueprint', 'Claymorphism 3D', 
    'Wabi-Sabi Organic Paper', 'Spatial VisionOS', 'Swiss Bauhaus Poster', 
    'Bioluminescent Deep Tech', 'Minimal / Clean', 'Glassmorphism', 'Neobrutalism'
  ];
  const tools = ['Cursor / Windsurf', 'Claude Code CLI', 'v0.dev / Bolt.new', 'Universal Prompt'];
  const appTypes = ['Developer Telemetry SaaS', 'Crypto Swap & DeFi', 'AI Copilot Studio', 'Portfolio & Creator Blog'];

  const generatedPrompt = `Build a high-performance ${appType} web application using ${framework} and Tailwind CSS.
Visual Aesthetic: ${styleVibe} design language.
Target Generation Tool: ${targetTool}.

CORE DESIGN REQUIREMENTS:
1. Primary Canvas & Layout:
   - Embody the authentic ${styleVibe} visual personality throughout all components.
   - Use high-fidelity micro-interactions, responsive mobile/desktop breakpoints, and modern layout geometry.
2. Color Tokens & Theme:
   - Carefully structured contrast ratios compliant with modern web design standards.
   - Distinct interactive hover states, active depression states, and focus rings.
3. Component Architecture:
   - Sticky Glass/Beveled Navigation Bar with brand logo, nav links, and high-impact CTA button.
   - Dynamic Hero Section with headline, contextual subtitle, pill badges, and dual action buttons.
   - Real-time Metrics Readout Bar with trend indicators.
   - 3-Column Responsive Feature Cards with icon treatments.
   - Interactive Email Newsletter Subscription card with state feedback.
4. Code Quality:
   - Write clean, type-safe code using Lucide icons.
   - Ensure complete self-contained styles with zero broken dependencies.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 h-full overflow-y-auto bg-[#07080e] p-4 sm:p-8 space-y-8 select-text">
      {/* Hero */}
      <div className="rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#101220] to-cyan-950/40 border border-white/10 p-6 sm:p-10">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs text-purple-300 font-mono">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span>Interactive AI Prompt Customizer</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI Prompt Studio & Prompt Constructor
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Construct 1-shot system prompts customized for Cursor Composer, Claude Code CLI, v0.dev, and Gemini to generate full-fledged websites in any design language.
          </p>
        </div>
      </div>

      {/* Interactive Parameter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Style Vibe */}
        <div className="p-4 rounded-2xl bg-[#0f111a] border border-white/10 space-y-2">
          <label className="text-[11px] font-mono text-zinc-400 uppercase font-semibold">1. Design Aesthetic</label>
          <select
            value={styleVibe}
            onChange={(e) => setStyleVibe(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none cursor-pointer"
          >
            {vibes.map((v) => <option key={v} value={v} className="bg-[#0e1017] text-white">{v}</option>)}
          </select>
        </div>

        {/* Application Type */}
        <div className="p-4 rounded-2xl bg-[#0f111a] border border-white/10 space-y-2">
          <label className="text-[11px] font-mono text-zinc-400 uppercase font-semibold">2. Website Archetype</label>
          <select
            value={appType}
            onChange={(e) => setAppType(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none cursor-pointer"
          >
            {appTypes.map((t) => <option key={t} value={t} className="bg-[#0e1017] text-white">{t}</option>)}
          </select>
        </div>

        {/* Tech Stack */}
        <div className="p-4 rounded-2xl bg-[#0f111a] border border-white/10 space-y-2">
          <label className="text-[11px] font-mono text-zinc-400 uppercase font-semibold">3. Framework & Stack</label>
          <select
            value={framework}
            onChange={(e) => setFramework(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none cursor-pointer"
          >
            {frameworks.map((f) => <option key={f} value={f} className="bg-[#0e1017] text-white">{f}</option>)}
          </select>
        </div>

        {/* Target AI Tool */}
        <div className="p-4 rounded-2xl bg-[#0f111a] border border-white/10 space-y-2">
          <label className="text-[11px] font-mono text-zinc-400 uppercase font-semibold">4. Target Coding Tool</label>
          <select
            value={targetTool}
            onChange={(e) => setTargetTool(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none cursor-pointer"
          >
            {tools.map((t) => <option key={t} value={t} className="bg-[#0e1017] text-white">{t}</option>)}
          </select>
        </div>
      </div>

      {/* Generated Prompt Output Box */}
      <div className="rounded-2xl bg-[#0b0d14] border border-purple-500/30 overflow-hidden shadow-2xl space-y-0">
        <div className="p-4 bg-[#10121d] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Custom 1-Shot Generation Prompt</span>
          </div>

          <button
            onClick={handleCopy}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              copied 
                ? 'bg-emerald-500 text-white shadow-emerald-500/30'
                : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-600/30'
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Full AI Prompt'}</span>
          </button>
        </div>

        <div className="p-6 text-xs sm:text-sm font-mono text-zinc-200 leading-relaxed bg-[#06070b] max-h-96 overflow-y-auto custom-scroll selection:bg-purple-500/30 whitespace-pre-wrap">
          {generatedPrompt}
        </div>
      </div>
    </div>
  );
}
