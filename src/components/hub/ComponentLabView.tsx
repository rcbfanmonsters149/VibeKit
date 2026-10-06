'use client';
import React, { useState } from 'react';
import { 
  Grid, Copy, Check, Code2, Sparkles, Terminal, 
  Layers, Shield, Zap, Flame, Monitor, Compass 
} from 'lucide-react';

interface ComponentItem {
  id: string;
  name: string;
  category: string;
  description: string;
  tailwindSnippet: string;
  reactSnippet: string;
}

const UI_COMPONENTS: ComponentItem[] = [
  {
    id: 'luminescent-card',
    name: 'Luminescent Neon Glow Card',
    category: 'Cards & Containers',
    description: 'Frosted dark surface with vibrant gradient perimeter border and subtle ambient glow.',
    tailwindSnippet: `className="p-6 rounded-3xl bg-gradient-to-b from-[#141523] to-[#0b0c16] border border-purple-500/30 hover:border-cyan-400/50 shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all"`,
    reactSnippet: `export function GlowCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 rounded-3xl bg-gradient-to-b from-[#141523] to-[#0b0c16] border border-purple-500/30 hover:border-cyan-400/50 shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all">
      <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">★</div>
      <h4 className="text-base font-bold text-white mt-4">{title}</h4>
      <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">{desc}</p>
    </div>
  );
}`
  },
  {
    id: 'bento-widget',
    name: 'Modular Bento Stat Card',
    category: 'Bento Grids',
    description: 'Vercel-style bento card with real-time telemetry badge, sparkline, and monospace metrics.',
    tailwindSnippet: `className="p-5 rounded-2xl bg-[#0e1017] border border-white/10 hover:border-white/20 transition flex flex-col justify-between"`,
    reactSnippet: `export function BentoStat({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="p-5 rounded-2xl bg-[#0e1017] border border-white/10 hover:border-white/20 transition flex flex-col justify-between">
      <div className="flex justify-between items-center text-xs font-mono text-zinc-400">
        <span>{label}</span>
        <span className="text-emerald-400 font-bold">{trend}</span>
      </div>
      <div className="text-3xl font-black text-white my-3 font-mono">{value}</div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 w-3/4 rounded-full" />
      </div>
    </div>
  );
}`
  },
  {
    id: 'retro-beveled-window',
    name: 'Retro 90s OS Beveled Dialog',
    category: 'Retro & Y2K',
    description: 'Windows 95/98 authentic 3D beveled relief frame with classic gradient title bar.',
    tailwindSnippet: `className="bg-[#c0c0c0] border-t-2 border-l-2 border-t-white border-l-white border-r-2 border-b-2 border-r-black border-b-black p-3"`,
    reactSnippet: `export function RetroWindow() {
  return (
    <div className="w-full bg-[#c0c0c0] border-t-2 border-l-2 border-t-white border-l-white border-r-2 border-b-2 border-r-black border-b-black shadow-lg">
      <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] px-2 py-0.5 flex justify-between text-white font-bold text-xs">
        <span>SYSTEM_PROMPT.EXE</span>
        <span className="bg-[#c0c0c0] text-black px-1 text-[10px]">✕</span>
      </div>
      <div className="p-4 text-xs text-black font-sans">
        Operation executed successfully. Ready for next command.
      </div>
    </div>
  );
}`
  },
  {
    id: 'clay-squishy-btn',
    name: 'Claymorphic 3D Squishy Button',
    category: 'Buttons & CTA',
    description: 'Inflatable marshmallow button with double inner shadows and playful hover bounce.',
    tailwindSnippet: `className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-xs shadow-[6px_6px_12px_#cbd5e1,-6px_-6px_12px_#ffffff,inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.2)]"`,
    reactSnippet: `export function ClayButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold text-xs shadow-[6px_6px_12px_#cbd5e1,-6px_-6px_12px_#ffffff,inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-95 transition-transform">
      {children}
    </button>
  );
}`
  }
];

export default function ComponentLabView() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeCodeTab, setActiveCodeTab] = useState<'react' | 'tailwind'>('react');

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex-1 h-full overflow-y-auto bg-[#07080e] p-4 sm:p-8 space-y-8 select-text">
      {/* Hero */}
      <div className="rounded-3xl bg-gradient-to-r from-indigo-950/40 via-[#101220] to-purple-950/40 border border-white/10 p-6 sm:p-10">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 font-mono">
            <Grid className="w-3.5 h-3.5 text-cyan-400" />
            <span>UI Building Blocks & Primitives</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Component & Interaction Lab
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Copy-paste production-ready Tailwind CSS & React snippets for micro-widgets, glow cards, bento metrics, and retro UI modules.
          </p>
        </div>
      </div>

      {/* Code Format Switcher */}
      <div className="flex items-center justify-between pb-2 border-b border-white/10">
        <span className="text-xs font-mono text-zinc-400">Available Components: {UI_COMPONENTS.length}</span>
        <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-1">
          <button
            onClick={() => setActiveCodeTab('react')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
              activeCodeTab === 'react' ? 'bg-purple-600 text-white shadow-sm' : 'text-zinc-400 hover:text-white'
            }`}
          >
            React Component
          </button>
          <button
            onClick={() => setActiveCodeTab('tailwind')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
              activeCodeTab === 'tailwind' ? 'bg-purple-600 text-white shadow-sm' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Tailwind Classes
          </button>
        </div>
      </div>

      {/* Components Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {UI_COMPONENTS.map((item) => {
          const codeSnippet = activeCodeTab === 'react' ? item.reactSnippet : item.tailwindSnippet;
          return (
            <div 
              key={item.id}
              className="rounded-2xl bg-[#0f111a] border border-white/10 p-6 flex flex-col justify-between space-y-4 hover:border-purple-500/30 transition"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/25">
                    {item.category}
                  </span>
                  <button
                    onClick={() => handleCopyCode(item.id, codeSnippet)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/15 text-xs text-zinc-300 hover:text-white border border-white/10 transition"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Snippet</span>
                      </>
                    )}
                  </button>
                </div>

                <h3 className="text-base font-bold text-white mt-3">{item.name}</h3>
                <p className="text-xs text-zinc-400 mt-1">{item.description}</p>
              </div>

              {/* Code Snippet Box */}
              <div className="rounded-xl bg-[#05060a] border border-white/10 p-3 text-xs font-mono text-zinc-300 overflow-x-auto max-h-48 custom-scroll selection:bg-purple-500/30 whitespace-pre-wrap">
                {codeSnippet}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
