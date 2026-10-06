'use client';
import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, Layers, Rocket, Grid, Terminal, Palette, 
  ExternalLink, ArrowUpRight, Zap, ArrowLeft 
} from 'lucide-react';

export type FeatureTab = 'studio' | 'templates' | 'prompts';

interface GlobalHubHeaderProps {
  activeTab: FeatureTab;
  onSelectTab: (tab: FeatureTab) => void;
}

export default function GlobalHubHeader({ activeTab, onSelectTab }: GlobalHubHeaderProps) {
  const tabs: { id: FeatureTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    {
      id: 'studio',
      label: 'Style Studio',
      icon: <Layers className="w-3.5 h-3.5" />,
      badge: '12 Styles'
    },
    {
      id: 'templates',
      label: 'Template Showcase',
      icon: <Rocket className="w-3.5 h-3.5" />,
      badge: '25+ Sites'
    },
    {
      id: 'prompts',
      label: 'AI Prompt Studio',
      icon: <Terminal className="w-3.5 h-3.5" />,
      badge: 'AI'
    }
  ];

  return (
    <header className="h-14 flex-shrink-0 bg-[#07080e] border-b border-white/10 px-3 sm:px-6 flex items-center justify-between select-none z-30">
      {/* Left: Brand Logo & Back to Home */}
      <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 mr-2 sm:mr-6">
        <Link 
          href="/" 
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition"
          title="Return to Homepage"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Home</span>
        </Link>

        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 p-[1px] shadow-md shadow-purple-600/30 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0c0d15] rounded-lg flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 group-hover:text-cyan-300 transition-colors" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-white">
              VibeKit
            </span>
            <span className="hidden xl:inline-block text-[10px] text-zinc-400 font-mono border-l border-white/10 pl-2">
              Design Studio
            </span>
          </div>
        </Link>
      </div>

      {/* Center: Main Feature Mode Switcher Tabs */}
      <div className="flex items-center bg-white/[0.04] border border-white/10 rounded-xl p-1 overflow-x-auto scrollbar-none max-w-full">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition whitespace-nowrap shrink-0 ${
                isActive
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
              {tab.badge && (
                <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded-full ml-0.5 ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-white/5 text-zinc-400'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Right: Relocated Tools & Quick Links */}
      <div className="hidden lg:flex items-center gap-2.5 shrink-0 ml-4">
        <Link
          href="/canvas"
          className="px-2.5 py-1 rounded-lg bg-yellow-400/10 hover:bg-yellow-400/20 border border-yellow-400/30 text-xs font-semibold text-yellow-300 transition flex items-center gap-1.5"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          <span>Wireframe Canvas</span>
          <span className="text-[9px] px-1 py-0.2 rounded bg-yellow-400 text-black font-black uppercase">New</span>
        </Link>

        <Link
          href="/components"
          className="text-xs text-zinc-400 hover:text-white font-medium flex items-center gap-1 transition px-2 py-1 rounded-lg hover:bg-white/5"
        >
          <Grid className="w-3.5 h-3.5 text-zinc-500" />
          <span>Components</span>
        </Link>

        <Link
          href="/palettes"
          className="text-xs text-zinc-400 hover:text-white font-medium flex items-center gap-1 transition px-2 py-1 rounded-lg hover:bg-white/5"
        >
          <Palette className="w-3.5 h-3.5 text-zinc-500" />
          <span>Tokens</span>
        </Link>
      </div>
    </header>
  );
}
