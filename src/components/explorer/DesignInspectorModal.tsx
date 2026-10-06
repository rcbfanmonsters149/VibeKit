'use client';
import React, { useState, useEffect } from 'react';
import { Design } from '@/types';
import { getDesignSuitability } from '@/data/suitability';
import { 
  X, Copy, Check, Sparkles, Terminal, Bot, Zap, 
  Layers, Palette, Globe, CheckCircle2, ArrowRight,
  Code2, Info, Layout, ShieldCheck, ExternalLink
} from 'lucide-react';

interface DesignInspectorModalProps {
  isOpen: boolean;
  initialTab?: 'prompt' | 'details';
  onClose: () => void;
  design: Design | null;
}

export default function DesignInspectorModal({
  isOpen,
  initialTab = 'prompt',
  onClose,
  design
}: DesignInspectorModalProps) {
  const [activeTab, setActiveTab] = useState<'prompt' | 'details'>(initialTab);
  const [promptModel, setPromptModel] = useState<'standard' | 'cursor' | 'v0' | 'claude'>('standard');
  const [copied, setCopied] = useState(false);

  // Sync tab whenever modal opens with a specific requested tab
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      setCopied(false);
    }
  }, [isOpen, initialTab]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !design) return null;

  const suitability = getDesignSuitability(design);

  const getActivePromptText = () => {
    switch (promptModel) {
      case 'cursor':
        return design.aiPrompt.cursorPrompt || design.aiPrompt.standard;
      case 'v0':
        return design.aiPrompt.v0Prompt || design.aiPrompt.standard;
      case 'claude':
        return design.aiPrompt.claudePrompt || design.aiPrompt.standard;
      case 'standard':
      default:
        return design.aiPrompt.standard;
    }
  };

  const handleCopyPrompt = () => {
    const text = getActivePromptText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 select-text">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[88vh] bg-[#0c0d14] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-950/40 flex flex-col overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex-shrink-0 px-4 sm:px-6 py-3.5 sm:py-4 bg-[#10121d] border-b border-white/10 flex items-center justify-between gap-3">
          
          {/* Left: Design Info + Tabs Switcher */}
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <div 
              className="w-4 h-4 rounded-full shrink-0 border border-white/30 shadow-sm"
              style={{ backgroundColor: design.colorPalette.accent }}
            />
            
            <div className="min-w-0 hidden sm:block">
              <h3 className="text-sm font-bold text-white truncate">{design.title}</h3>
              <p className="text-[11px] text-zinc-400 truncate">{suitability.coreDesignName}</p>
            </div>

            {/* Main Tabs (View Prompt vs Design Details) */}
            <div className="flex items-center bg-black/50 border border-white/10 rounded-xl p-1 shrink-0">
              <button
                onClick={() => setActiveTab('prompt')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'prompt'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>View Prompt</span>
              </button>

              <button
                onClick={() => setActiveTab('details')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'details'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Info className="w-3.5 h-3.5" />
                <span>Design Details</span>
              </button>
            </div>
          </div>

          {/* Right: Close Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white border border-white/10 transition"
              title="Close modal (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 bg-[#080910] space-y-6">

          {/* ============================================================ */}
          {/* TAB 1: VIEW PROMPT (with prominent Copy Prompt button)       */}
          {/* ============================================================ */}
          {activeTab === 'prompt' && (
            <div className="space-y-5 animate-in fade-in-50 duration-150">
              
              {/* Top Banner with Action Copy Button */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#131522] to-indigo-950/40 border border-purple-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      <Sparkles className="w-4 h-4" />
                    </span>
                    <h4 className="font-heading font-bold text-white text-base">
                      AI Generation Prompt for {suitability.coreDesignName}
                    </h4>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">
                    Engineered to replicate this exact design aesthetic, typography, and color tokens in 1 shot.
                  </p>
                </div>

                {/* PROMINENT COPY PROMPT BUTTON */}
                <button
                  onClick={handleCopyPrompt}
                  className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg transition flex items-center justify-center gap-2 shrink-0 ${
                    copied
                      ? 'bg-emerald-500 text-white shadow-emerald-500/30'
                      : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-600/40'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Prompt</span>
                    </>
                  )}
                </button>
              </div>

              {/* Target Tool / Model Selector Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                <span className="text-[11px] font-mono text-zinc-400 mr-1 hidden sm:inline">Format:</span>
                
                <button
                  onClick={() => setPromptModel('standard')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 shrink-0 ${
                    promptModel === 'standard'
                      ? 'bg-white text-black font-semibold shadow-sm'
                      : 'bg-white/5 text-zinc-400 hover:text-white border border-white/5 hover:bg-white/10'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Universal Prompt</span>
                </button>

                <button
                  onClick={() => setPromptModel('cursor')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 shrink-0 ${
                    promptModel === 'cursor'
                      ? 'bg-purple-600 text-white font-semibold shadow-sm'
                      : 'bg-white/5 text-zinc-400 hover:text-white border border-white/5 hover:bg-white/10'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5 text-purple-300" />
                  <span>Cursor / Windsurf</span>
                </button>

                <button
                  onClick={() => setPromptModel('v0')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 shrink-0 ${
                    promptModel === 'v0'
                      ? 'bg-purple-600 text-white font-semibold shadow-sm'
                      : 'bg-white/5 text-zinc-400 hover:text-white border border-white/5 hover:bg-white/10'
                  }`}
                >
                  <Bot className="w-3.5 h-3.5 text-cyan-300" />
                  <span>v0.dev / Bolt.new</span>
                </button>

                <button
                  onClick={() => setPromptModel('claude')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 shrink-0 ${
                    promptModel === 'claude'
                      ? 'bg-purple-600 text-white font-semibold shadow-sm'
                      : 'bg-white/5 text-zinc-400 hover:text-white border border-white/5 hover:bg-white/10'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Claude Code</span>
                </button>
              </div>

              {/* Code Box */}
              <div className="relative rounded-2xl bg-[#05060a] border border-white/10 overflow-hidden shadow-inner">
                <div className="h-9 px-4 bg-[#0d0e17] border-b border-white/10 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>prompt_{promptModel}.txt</span>
                  <button
                    onClick={handleCopyPrompt}
                    className="flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="p-4 sm:p-5 text-xs sm:text-sm font-mono text-zinc-200 leading-relaxed max-h-80 sm:max-h-96 overflow-y-auto custom-scroll selection:bg-purple-500/30 whitespace-pre-wrap">
                  {getActivePromptText()}
                </div>
              </div>

              {/* Quick switch to design details */}
              <div className="pt-2 flex items-center justify-between text-xs text-zinc-400">
                <span>Want to know which websites suit this design?</span>
                <button
                  onClick={() => setActiveTab('details')}
                  className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1 transition"
                >
                  <span>Check Design Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          )}

          {/* ============================================================ */}
          {/* TAB 2: DESIGN DETAILS                                        */}
          {/* (Name of core design, major features, what kind of websites suit that design) */}
          {/* ============================================================ */}
          {activeTab === 'details' && (
            <div className="space-y-8 animate-in fade-in-50 duration-150">
              
              {/* 1. NAME OF THE CORE DESIGN & AESTHETIC DNA */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#121422] to-[#0a0c16] border border-white/10 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-purple-400 font-semibold">
                      Core Design Name
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                      {suitability.coreDesignName}
                    </h2>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 capitalize">
                      {design.mode} mode
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                      Font: {design.defaultFont} ({design.fontType})
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                      Difficulty: {design.difficulty}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {design.description || suitability.tagline}
                </p>

                {/* Color Palette Tokens Preview */}
                <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs">
                  <span className="text-zinc-400 font-mono text-[11px]">Color Tokens:</span>
                  
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-black/40 border border-white/10">
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-white/30"
                      style={{ backgroundColor: design.colorPalette.accent }}
                    />
                    <span className="text-zinc-300 font-mono text-[11px]">Accent: {design.colorPalette.accent}</span>
                  </div>

                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-black/40 border border-white/10">
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-white/30"
                      style={{ backgroundColor: design.colorPalette.bg }}
                    />
                    <span className="text-zinc-300 font-mono text-[11px]">Surface: {design.colorPalette.bg}</span>
                  </div>

                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-black/40 border border-white/10">
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-white/30"
                      style={{ backgroundColor: design.colorPalette.text }}
                    />
                    <span className="text-zinc-300 font-mono text-[11px]">Text: {design.colorPalette.text}</span>
                  </div>

                  <span className="text-zinc-400 text-[11px] ml-auto font-mono">
                    Palette: {design.colorPalette.name}
                  </span>
                </div>
              </div>

              {/* 2. MAJOR FEATURES */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                    Major Features & Visual Elements
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {suitability.majorFeatures.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-xl bg-[#0f111c] border border-white/10 hover:border-purple-500/30 transition flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold font-mono">
                        {idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. WHAT KIND OF WEBSITES SUIT THAT DESIGN */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-cyan-400" />
                    <div>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                        What Kind of Websites Suit This Design?
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Recommended industries, website categories, and product archetypes:
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                  {suitability.suitableWebsites.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl bg-gradient-to-b from-[#111320] to-[#0a0c16] border border-white/10 hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between group shadow-sm"
                    >
                      <div>
                        {item.badge && (
                          <span className="inline-block text-[10px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/15 text-cyan-300 border border-cyan-500/25 mb-2.5">
                            {item.badge}
                          </span>
                        )}
                        <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                          {item.title}
                        </h4>
                        <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-2 border-t border-white/5 flex items-center text-[11px] text-cyan-400/80 font-medium">
                        <span>Optimal Fit</span>
                        <CheckCircle2 className="w-3.5 h-3.5 ml-1 text-cyan-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Switch to View Prompt */}
              <div className="p-4 sm:p-5 rounded-2xl bg-purple-950/30 border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-white">Ready to generate this design?</div>
                  <div className="text-xs text-zinc-400">View the battle-tested AI prompt and copy it with 1-click.</div>
                </div>

                <button
                  onClick={() => setActiveTab('prompt')}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 shrink-0"
                >
                  <Code2 className="w-4 h-4" />
                  <span>View & Copy AI Prompt</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
