'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { DESIGNS } from '@/data/designs';
import { WireframeBlock, BlockType, BlockLayout } from '@/types/wireframeTypes';
import WireframeBlockCard from './WireframeBlockCard';
import { compileWireframePrompt, generateWireframePromptAI } from '@/utils/promptCompiler';
import { 
  Sparkles, Plus, Copy, Check, ArrowRight, ArrowLeft, 
  Trash2, Layers, Terminal, Rocket, Grid, Palette, 
  Download, RefreshCw, Wand2, Eye, Layout, ChevronRight 
} from 'lucide-react';

const INITIAL_BLOCKS: WireframeBlock[] = [
  {
    id: 'block-1',
    type: 'navbar',
    title: 'Sticky Navbar',
    layout: '1-col-centered',
    description: 'Logo with sparkle badge on left, navigation links in center (Features, Pricing, Docs), and glowing CTA button "Get Started" on right.',
    elements: ['Pill Badge', 'Primary CTA'],
    specialNotes: 'Frosted glass blur with subtle 1px border'
  },
  {
    id: 'block-2',
    type: 'hero',
    title: 'Hero Section',
    layout: '2-col-split',
    description: 'Left column has an announcement pill "v2.0 Released", bold headline "Build with AI Vibes", subtitle, email input form with primary CTA, and avatar proof "+10k developers". Right column has an interactive 3D card preview.',
    elements: ['Pill Badge', 'Headline', 'Subtitle', 'Primary CTA', 'Email Input', 'Avatar Stack'],
    specialNotes: 'Ambient radial gradient glow behind the right column card'
  },
  {
    id: 'block-3',
    type: 'bento',
    title: 'Bento Feature Grid',
    layout: 'bento-grid',
    description: '3-card grid: Large 2-column featured card showing live real-time code compiler with syntax highlighting, and two smaller cards showing instant prompt exports and accessible color contrast.',
    elements: ['Bento Cards', 'Stat Chips'],
    specialNotes: 'Subtle hover scale transition and glowing borders'
  },
  {
    id: 'block-4',
    type: 'pricing',
    title: 'Pricing Comparison',
    layout: '3-col-grid',
    description: '3 tiered pricing cards: Starter (Free), Pro ($29/mo with popular badge and highlight border), and Enterprise (Custom). Each tier lists 5 features with green check icons and a subscription button.',
    elements: ['Pricing Tiers', 'Primary CTA', 'Pill Badge'],
    specialNotes: 'Middle Pro card is scaled 105% with active accent glow'
  },
  {
    id: 'block-5',
    type: 'footer',
    title: 'Footer & Callout',
    layout: '1-col-centered',
    description: 'Final CTA banner with headline "Ready to ship?", followed by a 4-column link directory (Product, Resources, Company, Legal) and copyright notice.',
    elements: ['Headline', 'Primary CTA', 'Brand Logos'],
    specialNotes: 'Dark background with top border'
  }
];

export default function WireframeCanvas() {
  const [blocks, setBlocks] = useState<WireframeBlock[]>(INITIAL_BLOCKS);
  const [selectedStyleId, setSelectedStyleId] = useState<string>('neobrutalism');
  const [targetTool, setTargetTool] = useState<'cursor' | 'claude' | 'v0' | 'bolt'>('cursor');
  const [pageName, setPageName] = useState<string>('Vibecoding SaaS Landing Page');

  // AI Prompt Modal State
  const [isCompiling, setIsCompiling] = useState(false);
  const [compiledPrompt, setCompiledPrompt] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Add a new block
  const handleAddBlock = (type: BlockType, defaultTitle: string, defaultLayout: BlockLayout) => {
    const newBlock: WireframeBlock = {
      id: `block-${Date.now()}`,
      type,
      title: defaultTitle,
      layout: defaultLayout,
      description: '',
      elements: ['Headline', 'Primary CTA'],
      specialNotes: ''
    };
    setBlocks([...blocks, newBlock]);
  };

  // Update a block
  const handleUpdateBlock = (updated: WireframeBlock) => {
    setBlocks(blocks.map(b => b.id === updated.id ? updated : b));
  };

  // Delete a block
  const handleDeleteBlock = (id: string) => {
    setBlocks(blocks.filter(b => b.id !== id));
  };

  // Move up
  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const newBlocks = [...blocks];
    const temp = newBlocks[index - 1];
    newBlocks[index - 1] = newBlocks[index];
    newBlocks[index] = temp;
    setBlocks(newBlocks);
  };

  // Move down
  const handleMoveDown = (index: number) => {
    if (index === blocks.length - 1) return;
    const newBlocks = [...blocks];
    const temp = newBlocks[index + 1];
    newBlocks[index + 1] = newBlocks[index];
    newBlocks[index] = temp;
    setBlocks(newBlocks);
  };

  // Preset Loaders
  const handleLoadPreset = (presetType: 'saas' | 'devtool' | 'minimal') => {
    if (presetType === 'saas') {
      setBlocks(INITIAL_BLOCKS);
      setSelectedStyleId('neobrutalism');
    } else if (presetType === 'devtool') {
      setBlocks([
        {
          id: 'dev-1',
          type: 'navbar',
          title: 'Developer Navbar',
          layout: '1-col-centered',
          description: 'Dark terminal style navbar with git branch selector, documentation links, and GitHub star counter.',
          elements: ['Pill Badge', 'Primary CTA'],
          specialNotes: 'Monospace font with border-b'
        },
        {
          id: 'dev-2',
          type: 'hero',
          title: 'CLI / Terminal Hero',
          layout: '2-col-split',
          description: 'Left: headline "Ship APIs at Terminal Speed", copyable curl command chip, right: live interactive CLI simulator with simulated typing.',
          elements: ['Headline', 'Subtitle', 'Search Bar', 'Primary CTA'],
          specialNotes: 'Terminal window with red/yellow/green header dots'
        },
        {
          id: 'dev-3',
          type: 'features',
          title: 'Telemetry & Benchmarks',
          layout: '3-col-grid',
          description: '3 cards showing latency stats, zero-config deployment diagram, and automated schema migration.',
          elements: ['Stat Chips', 'Bento Cards'],
          specialNotes: 'Matrix style green accent accents'
        }
      ]);
      setSelectedStyleId('cad-blueprint');
    } else {
      setBlocks([
        {
          id: 'min-1',
          type: 'navbar',
          title: 'Minimal Header',
          layout: '1-col-centered',
          description: 'Subtle brand wordmark, journal links, and contact email.',
          elements: ['Headline'],
          specialNotes: 'Clean whitespace with no borders'
        },
        {
          id: 'min-2',
          type: 'hero',
          title: 'Editorial Hero',
          layout: '1-col-centered',
          description: 'Large typography headline centered with single line subtext and high whitespace margins.',
          elements: ['Headline', 'Subtitle', 'Primary CTA'],
          specialNotes: 'Serif or clean grotesque font pairing'
        }
      ]);
      setSelectedStyleId('minimal-clean');
    }
  };

  // Trigger Prompt Synthesis
  const handleGeneratePrompt = async () => {
    setIsCompiling(true);
    try {
      const result = await generateWireframePromptAI({
        blocks,
        styleId: selectedStyleId,
        targetTool,
        pageName
      });
      setCompiledPrompt(result);
    } finally {
      setIsCompiling(false);
    }
  };

  const handleCopyPrompt = () => {
    if (!compiledPrompt) return;
    navigator.clipboard.writeText(compiledPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedDesign = DESIGNS.find(d => d.slug === selectedStyleId || d.id === selectedStyleId) || DESIGNS[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#fffdf2] select-none selection:bg-[#facc15] selection:text-black">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#fffef5] border-b-[3px] border-black px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white border-2 border-black shadow-[2px_2px_0px_#000] text-xs font-black uppercase text-black hover:bg-zinc-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition"
          >
            <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Home</span>
          </Link>

          <div className="flex items-center gap-2 border-l-2 border-black/20 pl-3">
            <div className="w-8 h-8 rounded-xl bg-[#facc15] border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-black stroke-[2.5]" />
            </div>
            <div>
              <span className="font-black text-base text-black font-heading tracking-tight">
                VIBEKIT CANVAS
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.2 rounded-full bg-[#4ade80] text-black border border-black shadow-[1px_1px_0px_#000] font-bold uppercase ml-2">
                Wireframe-to-Prompt Engine
              </span>
            </div>
          </div>
        </div>

        {/* Header Right Navigation */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/studio"
            className="text-xs font-black uppercase px-3 py-1.5 rounded-xl bg-white border-2 border-black shadow-[2px_2px_0px_#000] hover:bg-zinc-50 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none text-black transition flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5 text-black" />
            <span className="hidden sm:inline">Design Studio</span>
          </Link>

          <button
            onClick={handleGeneratePrompt}
            disabled={blocks.length === 0 || isCompiling}
            className="px-4 py-2 rounded-xl bg-[#facc15] hover:bg-[#eab308] border-2 border-black shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none text-xs sm:text-sm font-black uppercase text-black tracking-wide transition flex items-center gap-1.5"
          >
            {isCompiling ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-black" />
                <span>Compiling Prompt...</span>
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4 text-black" />
                <span>Compile AI Prompt</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Studio Body: Left Toolbar, Center Canvas, Right Settings */}
      <div className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* CENTER / MAIN: The Interactive Block Canvas (Cols 8) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Canvas Toolbar: Add Blocks & Presets */}
          <div className="rounded-3xl border-[3px] border-black bg-white p-5 shadow-[6px_6px_0px_#000] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b-2 border-black/10">
              <div>
                <h2 className="text-base font-black font-heading uppercase text-black">
                  Page Wireframe Architecture ({blocks.length} Sections)
                </h2>
                <p className="text-xs text-zinc-600 font-medium mt-0.5">
                  Click any block button to insert. Expand to explain the contents in plain English.
                </p>
              </div>

              {/* Preset Buttons */}
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase mr-1">Presets:</span>
                <button
                  onClick={() => handleLoadPreset('saas')}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase bg-[#fef08a] border border-black shadow-[1px_1px_0px_#000] hover:bg-yellow-200 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                >
                  SaaS
                </button>
                <button
                  onClick={() => handleLoadPreset('devtool')}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase bg-[#bfdbfe] border border-black shadow-[1px_1px_0px_#000] hover:bg-blue-200 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                >
                  DevTool
                </button>
                <button
                  onClick={() => handleLoadPreset('minimal')}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase bg-[#f3f4f6] border border-black shadow-[1px_1px_0px_#000] hover:bg-zinc-200 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                >
                  Minimal
                </button>
                <button
                  onClick={() => setBlocks([])}
                  className="p-1 rounded-lg text-[10px] font-black uppercase text-red-600 hover:bg-red-50"
                  title="Clear All"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Block Type Palette / Add Buttons */}
            <div>
              <div className="text-[10px] font-mono font-bold uppercase text-zinc-600 mb-2">
                + Add Section Primitives:
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { type: 'navbar', label: '+ Navbar', layout: '1-col-centered', color: '#fef08a' },
                  { type: 'hero', label: '+ Hero Section', layout: '2-col-split', color: '#fed7aa' },
                  { type: 'bento', label: '+ Bento Grid', layout: 'bento-grid', color: '#e9d5ff' },
                  { type: 'features', label: '+ Feature 3-Col', layout: '3-col-grid', color: '#bfdbfe' },
                  { type: 'stats', label: '+ Stats Bar', layout: '4-col-grid', color: '#bbf7d0' },
                  { type: 'pricing', label: '+ Pricing Tiers', layout: '3-col-grid', color: '#fbcfe8' },
                  { type: 'testimonials', label: '+ Social Proof', layout: '3-col-grid', color: '#fef08a' },
                  { type: 'cta', label: '+ CTA Banner', layout: '1-col-centered', color: '#fed7aa' },
                  { type: 'footer', label: '+ Footer', layout: '1-col-centered', color: '#e2e8f0' },
                  { type: 'custom', label: '+ Custom Box', layout: '2-col-split', color: '#facc15' },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAddBlock(item.type as BlockType, item.label.replace('+ ', ''), item.layout as BlockLayout)}
                    className="px-3 py-1.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000] text-xs font-black uppercase text-black active:translate-x-0.5 active:translate-y-0.5 active:shadow-none hover:-translate-y-0.5 transition"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Stack of Wireframe Block Cards */}
          <div className="space-y-4">
            {blocks.length === 0 ? (
              <div className="p-12 rounded-3xl border-[3px] border-dashed border-black bg-white text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-yellow-100 border-2 border-black shadow-[3px_3px_0px_#000] mx-auto flex items-center justify-center">
                  <Layout className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-black font-heading uppercase text-black">Canvas is Empty</h3>
                <p className="text-xs text-zinc-600 max-w-sm mx-auto">
                  Click any of the "+ Section" buttons above or choose a preset to start laying out your page.
                </p>
              </div>
            ) : (
              blocks.map((block, idx) => (
                <WireframeBlockCard
                  key={block.id}
                  block={block}
                  index={idx}
                  totalBlocks={blocks.length}
                  onUpdate={handleUpdateBlock}
                  onDelete={handleDeleteBlock}
                  onMoveUp={handleMoveUp}
                  onMoveDown={handleMoveDown}
                />
              ))
            )}
          </div>
        </div>

        {/* RIGHT SIDEBAR: AI Prompt Synthesis Controls (Cols 4) */}
        <div className="lg:col-span-4 space-y-5 sticky top-20 select-none">
          
          {/* Settings Card */}
          <div className="rounded-3xl border-[3px] border-black bg-white p-5 sm:p-6 shadow-[6px_6px_0px_#000] space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b-2 border-black/10">
              <Wand2 className="w-5 h-5 text-black stroke-[2.5]" />
              <h3 className="font-black text-base uppercase text-black font-heading">
                AI Synthesis Engine
              </h3>
            </div>

            {/* 1. Page Name */}
            <div>
              <label className="text-xs font-black uppercase text-black block mb-1 font-mono">
                Project / Page Title:
              </label>
              <input
                type="text"
                value={pageName}
                onChange={(e) => setPageName(e.target.value)}
                className="w-full p-2.5 rounded-xl border-2 border-black text-xs font-bold text-black outline-none focus:bg-yellow-50"
              />
            </div>

            {/* 2. Choose Design Aesthetic */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-black uppercase text-black font-mono">
                  Design System Aesthetic:
                </label>
                <span className="text-[10px] font-mono text-purple-700 font-bold uppercase">
                  12 Archetypes
                </span>
              </div>
              <select
                value={selectedStyleId}
                onChange={(e) => setSelectedStyleId(e.target.value)}
                className="w-full p-2.5 rounded-xl border-2 border-black text-xs font-black uppercase text-black outline-none bg-white cursor-pointer"
              >
                {DESIGNS.slice(0, 12).map((d) => (
                  <option key={d.slug} value={d.slug}>
                    {d.style} ({d.mode} mode)
                  </option>
                ))}
              </select>

              {/* Style DNA Badge */}
              <div className="mt-2 p-2.5 rounded-xl border border-black/20 bg-zinc-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded border border-black"
                    style={{ backgroundColor: selectedDesign.colorPalette.accent }}
                  />
                  <span className="text-[11px] font-bold text-black truncate max-w-[170px]">
                    {selectedDesign.title}
                  </span>
                </div>
                <span className="text-[9px] font-mono uppercase bg-black text-white px-1.5 py-0.5 rounded">
                  {selectedDesign.mode}
                </span>
              </div>
            </div>

            {/* 3. Target AI Tool */}
            <div>
              <label className="text-xs font-black uppercase text-black block mb-1.5 font-mono">
                Target AI Coding Assistant:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'cursor', label: 'Cursor IDE', badge: 'Popular' },
                  { id: 'claude', label: 'Claude 3.7', badge: 'Sonnet' },
                  { id: 'v0', label: 'v0 Vercel', badge: 'v0' },
                  { id: 'bolt', label: 'Bolt.new', badge: 'Web' }
                ].map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => setTargetTool(tool.id as any)}
                    className={`p-2.5 rounded-xl border-2 border-black text-xs font-black uppercase transition flex flex-col items-start justify-between ${
                      targetTool === tool.id
                        ? 'bg-[#38bdf8] text-black shadow-[2px_2px_0px_#000]'
                        : 'bg-white text-zinc-700 hover:bg-zinc-50'
                    }`}
                  >
                    <span>{tool.label}</span>
                    <span className="text-[9px] font-mono opacity-80">{tool.badge}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Big Action Button */}
            <div className="pt-2">
              <button
                onClick={handleGeneratePrompt}
                disabled={blocks.length === 0 || isCompiling}
                className="w-full py-4 rounded-2xl bg-[#facc15] hover:bg-[#eab308] border-[3px] border-black shadow-[5px_5px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none text-sm font-black uppercase text-black tracking-wide transition flex items-center justify-center gap-2"
              >
                {isCompiling ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Compiling Wireframe Prompt...</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4 stroke-[2.5]" />
                    <span>Compile AI Master Prompt</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </>
                )}
              </button>
            </div>

            <div className="text-[10px] text-zinc-500 font-mono text-center">
              ✓ Ready for 1-click clipboard paste into Cursor & Claude
            </div>
          </div>

          {/* Quick Info Box */}
          <div className="p-4 rounded-2xl border-2 border-black bg-[#fef08a] shadow-[4px_4px_0px_#000] text-xs font-medium text-black space-y-1.5">
            <div className="font-black uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>How It Works</span>
            </div>
            <p className="text-[11px] leading-relaxed text-zinc-800">
              The engine takes your section order, layout choices, and plain English descriptions, formats an ASCII wireframe tree, and combines them with exact design tokens for your chosen aesthetic.
            </p>
          </div>
        </div>
      </div>

      {/* Generated Master Prompt Modal */}
      {compiledPrompt && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center overflow-y-auto">
          <div className="w-full max-w-3xl rounded-3xl border-[3px] border-black bg-[#0f111a] text-white shadow-[10px_10px_0px_#facc15] overflow-hidden flex flex-col max-h-[85vh]">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-black border-b-2 border-white/15 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#4ade80] border border-black flex items-center justify-center">
                  <Check className="w-4 h-4 text-black stroke-[3]" />
                </div>
                <div>
                  <h3 className="font-black text-sm sm:text-base uppercase tracking-tight text-white font-heading">
                    AI Master Prompt Generated
                  </h3>
                  <div className="text-[10px] font-mono text-zinc-400">
                    Target: {targetTool.toUpperCase()} • Style: {selectedDesign.style} • {blocks.length} Sections
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyPrompt}
                  className="px-4 py-2 rounded-xl bg-[#facc15] hover:bg-[#eab308] border border-black text-black font-black text-xs uppercase flex items-center gap-1.5 shadow-[2px_2px_0px_#fff] transition active:translate-x-0.5 active:translate-y-0.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-black stroke-[3]" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-black" />
                      <span>Copy Master Prompt</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setCompiledPrompt(null)}
                  className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Modal Body: Prompt Code Viewer */}
            <div className="p-4 sm:p-6 flex-1 overflow-y-auto font-mono text-xs text-zinc-300 leading-relaxed bg-[#07080e] select-text">
              <pre className="whitespace-pre-wrap">{compiledPrompt}</pre>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-black border-t border-white/15 flex items-center justify-between text-xs font-mono text-zinc-400">
              <div>
                Paste directly into Cursor Composer (<kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white">Cmd + I</kbd> or <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-white">Ctrl + I</kbd>)
              </div>
              <button
                onClick={handleCopyPrompt}
                className="text-yellow-400 hover:underline font-bold"
              >
                Copy Again ➔
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
