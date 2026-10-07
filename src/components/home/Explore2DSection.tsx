'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Grid, Layout, Eye, Copy, Check, Sparkles, 
  ArrowRight, Sliders, Monitor, Smartphone, Square, 
  Layers, Maximize2, Palette, FileCode2
} from 'lucide-react';

interface Style2D {
  id: string;
  name: string;
  tagline: string;
  category: string;
  primaryColor: string;
  accentColor: string;
  fontStyle: string;
  features: string[];
  prompt: string;
}

const STYLES_2D: Style2D[] = [
  {
    id: 'bauhaus',
    name: 'Swiss Bauhaus Poster',
    tagline: 'Strict asymmetric grid, heavy geometric sans & primary punches',
    category: 'Editorial / Print 2D',
    primaryColor: '#e11d48',
    accentColor: '#2563eb',
    fontStyle: 'font-mono font-black',
    features: [
      'Bold primary color blocks (Red #e11d48, Blue #2563eb, Yellow #facc15)',
      'Asymmetrical multi-column typographic layouts',
      'Hairline 1px crosshair rules and registration marks',
      'High-contrast grotesque typography with tight tracking'
    ],
    prompt: 'Design a Swiss Bauhaus 2D poster interface: strict asymmetric grid, bold primary colors (#e11d48 red, #2563eb blue, #facc15 yellow), hairline 1px divider lines, heavy geometric sans typography, and raw flat blocks with zero drop shadows.'
  },
  {
    id: 'neobrutalist',
    name: 'Tactile Neobrutalism 2D',
    tagline: 'Solid 3px black borders, canary yellow slabs & hard offset shadows',
    category: 'Vibecoding / Raw Web',
    primaryColor: '#facc15',
    accentColor: '#38bdf8',
    fontStyle: 'font-black tracking-tight',
    features: [
      'Stark 3px solid black borders (border-3 border-black)',
      'Hard offset shadows with no blur (shadow-[5px_5px_0px_#000])',
      'Canary yellow (#facc15) and electric cyan (#38bdf8) pops',
      'Tactile button presses: active:translate-x-1 active:translate-y-1'
    ],
    prompt: 'Create a tactile Neobrutalist 2D web layout: solid 3px black borders, canary yellow #facc15 and cyan #38bdf8 fills, hard 5px solid black offset shadows with zero blur, uppercase bold typography, and interactive tactile buttons.'
  },
  {
    id: 'editorial',
    name: 'Modern Editorial & Magazine',
    tagline: 'High-fashion serif headlines, multi-column print baseline & pull-quotes',
    category: 'Publication / Editorial',
    primaryColor: '#18181b',
    accentColor: '#d97706',
    fontStyle: 'font-serif italic',
    features: [
      'Editorial serif display typography paired with clean mono captions',
      'Multi-column magazine newspaper layout with vertical rules',
      'Refined warm newsprint paper tone (#faf9f6)',
      'Subtle pull-quotes and large decorative initial caps'
    ],
    prompt: 'Build a modern 2D editorial magazine landing page: warm newsprint paper background (#faf9f6), serif display typography, multi-column grid with vertical hairline rules, amber #d97706 accent tags, and refined literary hierarchy.'
  },
  {
    id: 'blueprint',
    name: 'Technical 2D Blueprint',
    tagline: 'Schematic cyan coordinate lines, crosshairs & tabular mono specs',
    category: 'Developer / Technical',
    primaryColor: '#0284c7',
    accentColor: '#10b981',
    fontStyle: 'font-mono tracking-wider',
    features: [
      'Architectural blueprint grid lines (linear-gradient 20px x 20px)',
      'Crosshair target markers (+ coordinate badges) at element corners',
      'Pure JetBrains Mono typography with tabular figures',
      'Technical parameter spec chips and schematic dimension arrows'
    ],
    prompt: 'Create a technical 2D blueprint web interface: deep blueprint navy #0c1829, cyan #0284c7 grid schematics, crosshair corner markers (+ X: 104, Y: 82), monospace typography, dimension measurement callouts, and tabular data cards.'
  },
  {
    id: 'flat-bento',
    name: 'Minimalist Flat Bento',
    tagline: 'Structured modular 2D cards, crisp metric sparklines & badge chips',
    category: 'Modern SaaS 2D',
    primaryColor: '#4f46e5',
    accentColor: '#10b981',
    fontStyle: 'font-sans font-bold',
    features: [
      'Strict modular 2D rectangular bento grid hierarchy',
      'Hairline 1px neutral borders (border-zinc-200 / border-zinc-800)',
      'Flat vector chips, sparklines, and metric counters',
      'Zero 3D skew or faux-depth; pure clean flat elevation'
    ],
    prompt: 'Generate a clean 2D flat bento grid SaaS section: modular cards with subtle 1px border-zinc-200, crisp typography, clean metric badges, flat vector chips, and harmonious whitespace without faux-3D or heavy skews.'
  }
];

export default function Explore2DSection() {
  const [selectedStyleId, setSelectedStyleId] = useState('neobrutalist');
  const [showGridOverlay, setShowGridOverlay] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<'desktop' | 'square' | 'mobile'>('desktop');
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const currentStyle = STYLES_2D.find(s => s.id === selectedStyleId) || STYLES_2D[1];

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(currentStyle.prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <section id="explore-2d" className="py-16 sm:py-24 bg-[#fffef5] border-b-[3px] border-black select-none relative overflow-hidden">
      
      {/* Background 2D Dot Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(#000 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-black pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38bdf8] border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-black uppercase text-black">
              <Grid className="w-3.5 h-3.5 text-black stroke-[2.5]" />
              <span>2D Design Dimension</span>
              <span className="px-1.5 py-0.2 rounded bg-black text-white text-[9px] font-mono">Interactive</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-black uppercase tracking-tight">
              Explore 2D Layouts & Flat Aesthetics
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 font-medium leading-relaxed">
              Dive into the power of pure two-dimensional frontend design: Swiss grids, print-inspired typography, tactical neobrutalism, and schematic wireframes with live toggleable layout guides.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/canvas"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-100 border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-black uppercase text-black transition"
            >
              <Layout className="w-4 h-4" />
              <span>Open 2D Canvas</span>
            </Link>
            <button
              onClick={handleCopyPrompt}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#facc15] hover:bg-[#eab308] border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-black uppercase text-black transition"
            >
              {copiedPrompt ? <Check className="w-4 h-4 text-emerald-800" /> : <Copy className="w-4 h-4" />}
              <span>{copiedPrompt ? 'Prompt Copied!' : 'Copy Style Prompt'}</span>
            </button>
          </div>
        </div>

        {/* Interactive Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white border-[3px] border-black shadow-[5px_5px_0px_#000]">
          
          {/* Style Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase text-zinc-500 mr-1 hidden sm:inline">2D Paradigm:</span>
            {STYLES_2D.map(style => {
              const active = style.id === selectedStyleId;
              return (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyleId(style.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase transition-all duration-150 flex items-center gap-1.5 ${
                    active 
                      ? 'bg-[#facc15] text-black border-2 border-black shadow-[2px_2px_0px_#000] -translate-y-0.5' 
                      : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-300'
                  }`}
                >
                  <span 
                    className="w-2 h-2 rounded-full border border-black" 
                    style={{ backgroundColor: style.primaryColor }}
                  />
                  <span>{style.name}</span>
                </button>
              );
            })}
          </div>

          {/* Canvas Tools (Grid Overlay & Aspect Ratio) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowGridOverlay(!showGridOverlay)}
              className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase border-2 border-black transition flex items-center gap-1.5 ${
                showGridOverlay 
                  ? 'bg-[#4ade80] text-black shadow-[2px_2px_0px_#000]' 
                  : 'bg-white hover:bg-zinc-50 text-zinc-700 shadow-[1px_1px_0px_#000]'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Grid Overlay: {showGridOverlay ? 'ON' : 'OFF'}</span>
            </button>

            <div className="hidden sm:flex items-center gap-1 bg-zinc-100 p-1 rounded-xl border border-zinc-300">
              <button
                onClick={() => setAspectRatio('desktop')}
                title="Desktop 16:9 Canvas"
                className={`p-1.5 rounded-lg transition ${aspectRatio === 'desktop' ? 'bg-white border border-black shadow-xs text-black' : 'text-zinc-500'}`}
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setAspectRatio('square')}
                title="Square 1:1 Canvas"
                className={`p-1.5 rounded-lg transition ${aspectRatio === 'square' ? 'bg-white border border-black shadow-xs text-black' : 'text-zinc-500'}`}
              >
                <Square className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setAspectRatio('mobile')}
                title="Mobile 9:16 Canvas"
                className={`p-1.5 rounded-lg transition ${aspectRatio === 'mobile' ? 'bg-white border border-black shadow-xs text-black' : 'text-zinc-500'}`}
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Main 2D Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Interactive 2D Live Canvas Frame */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="rounded-3xl border-[3px] border-black bg-zinc-900 shadow-[8px_8px_0px_#000] overflow-hidden flex-1 flex flex-col">
              
              {/* Window Header */}
              <div className="bg-[#fef08a] border-b-2 border-black px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444] border border-black" />
                  <div className="w-3 h-3 rounded-full bg-[#eab308] border border-black" />
                  <div className="w-3 h-3 rounded-full bg-[#22c55e] border border-black" />
                  <span className="font-mono text-xs font-black uppercase text-black ml-2">
                    2D CANVAS PREVIEW — {currentStyle.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-black font-bold">
                    {aspectRatio.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Canvas Body Container */}
              <div className="p-4 sm:p-8 bg-zinc-950 flex items-center justify-center flex-1 relative overflow-hidden">
                
                {/* 2D Canvas Viewport */}
                <div 
                  className={`w-full transition-all duration-300 relative overflow-hidden ${
                    aspectRatio === 'desktop' ? 'max-w-3xl min-h-[380px]' :
                    aspectRatio === 'square' ? 'max-w-md min-h-[380px]' : 'max-w-xs min-h-[460px]'
                  }`}
                >
                  
                  {/* Grid Overlay Lines (when enabled) */}
                  {showGridOverlay && (
                    <div className="absolute inset-0 z-20 pointer-events-none">
                      <div className="w-full h-full grid grid-cols-6 divide-x divide-rose-500/30 border border-rose-500/40">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div key={i} className="h-full bg-rose-500/5 flex items-start justify-end p-1">
                            <span className="text-[9px] font-mono text-rose-500/60 font-bold">col-{i+1}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Render Style Specific 2D UI */}
                  {selectedStyleId === 'bauhaus' && (
                    <div className="w-full h-full bg-[#f8f6f0] border-4 border-black p-6 space-y-5 text-black relative">
                      {/* Geometric Red Block */}
                      <div className="flex justify-between items-start border-b-4 border-black pb-4">
                        <div>
                          <span className="text-[11px] font-mono font-black tracking-widest uppercase bg-black text-white px-2 py-0.5 inline-block mb-1">
                            WEIMAR 1919 / 2026
                          </span>
                          <h3 className="text-3xl sm:text-4xl font-black font-mono leading-none tracking-tighter">
                            FORM FOLLOWS FUNCTION
                          </h3>
                        </div>
                        <div className="w-14 h-14 bg-[#e11d48] border-3 border-black rounded-none shadow-[4px_4px_0px_#000] flex items-center justify-center font-mono font-black text-white text-lg">
                          01
                        </div>
                      </div>

                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-7 bg-[#2563eb] text-white p-4 border-3 border-black shadow-[4px_4px_0px_#000]">
                          <span className="text-xs font-mono font-black uppercase">Primary Grid System</span>
                          <p className="text-xs font-medium mt-1 leading-snug">
                            Strict horizontal and vertical alignments with primary color saturation.
                          </p>
                        </div>
                        <div className="col-span-5 bg-[#facc15] text-black p-4 border-3 border-black shadow-[4px_4px_0px_#000] text-center">
                          <span className="text-2xl font-black font-mono block">100%</span>
                          <span className="text-[10px] font-mono font-black uppercase">Flat Plane</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t-2 border-black font-mono text-xs font-black">
                        <span>TYPOGRAPHY: AKZIDENZ GROTESK</span>
                        <span className="bg-black text-white px-2 py-0.5">SCALE: 1:1.618</span>
                      </div>
                    </div>
                  )}

                  {selectedStyleId === 'neobrutalist' && (
                    <div className="w-full h-full bg-[#fffdf0] border-4 border-black p-6 space-y-4 text-black shadow-[6px_6px_0px_#000]">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-[#facc15] border-2 border-black font-black text-xs uppercase shadow-[2px_2px_0px_#000]">
                          ⚡ NEOBRUTALISM 2D
                        </span>
                        <span className="text-xs font-black font-mono">EST. 2026</span>
                      </div>

                      <div className="p-4 bg-white border-3 border-black shadow-[4px_4px_0px_#000] space-y-2">
                        <h3 className="text-2xl sm:text-3xl font-black uppercase leading-tight tracking-tight">
                          RAW TACTILE IMPACT WITHOUT FAUX DEPTH
                        </h3>
                        <p className="text-xs text-zinc-800 font-bold leading-relaxed">
                          Hard offset shadows, 3px solid black outlines, and unapologetic contrast. Pure flat aesthetic that refuses to conform to corporate minimalism.
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <button className="px-4 py-2 rounded-xl bg-[#38bdf8] border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-black uppercase hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition">
                          Click Tactile Button
                        </button>
                        <button className="px-4 py-2 rounded-xl bg-[#4ade80] border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-black uppercase hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-none transition">
                          Secondary Action
                        </button>
                      </div>
                    </div>
                  )}

                  {selectedStyleId === 'editorial' && (
                    <div className="w-full h-full bg-[#faf9f6] border-2 border-zinc-900 p-6 space-y-4 text-zinc-950">
                      <div className="border-b border-zinc-900 pb-2 flex justify-between items-baseline font-serif">
                        <span className="text-xs uppercase tracking-widest text-zinc-600 font-sans font-bold">Issue No. 42</span>
                        <span className="text-sm italic font-bold">The Frontend Review</span>
                        <span className="text-xs font-sans text-zinc-600">October 2026</span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-3xl sm:text-4xl font-serif italic tracking-tight leading-none text-zinc-950">
                          The Poetry of Typographic Rhythm
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-xs font-serif leading-relaxed text-zinc-800 border-t border-b border-zinc-300 py-3">
                          <p>
                            <span className="float-left text-3xl font-serif mr-2 font-bold leading-none text-zinc-900">E</span>
                            ditorial design brings the contemplative elegance of physical print magazines into modern responsive browser viewports.
                          </p>
                          <p>
                            Generous leading, delicate serifs, and disciplined column ratios evoke calm confidence without needing flashy animations.
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center text-[11px] font-sans font-bold text-amber-800">
                        <span>COLUMNS: 2-RHYTHM</span>
                        <span>FONT: PLAYFAIR / INTER</span>
                      </div>
                    </div>
                  )}

                  {selectedStyleId === 'blueprint' && (
                    <div className="w-full h-full bg-[#0a192f] border-2 border-cyan-500/60 p-6 space-y-4 text-cyan-200 font-mono relative">
                      <div 
                        className="absolute inset-0 pointer-events-none opacity-20"
                        style={{
                          backgroundImage: 'linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #06b6d4 1px, transparent 1px)',
                          backgroundSize: '24px 24px'
                        }}
                      />

                      <div className="relative flex justify-between items-start border-b border-cyan-500/40 pb-2">
                        <div>
                          <span className="text-[10px] text-cyan-400 font-bold tracking-widest">SPECIFICATION: DWG-2026-X</span>
                          <h3 className="text-2xl font-bold text-white tracking-wide">
                            TECHNICAL SCHEMATIC 2D
                          </h3>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded border border-cyan-500/50 bg-cyan-950/60 text-cyan-300">
                          COORDS: X:480 Y:320
                        </span>
                      </div>

                      <div className="relative grid grid-cols-3 gap-3 text-xs">
                        <div className="p-2.5 rounded border border-cyan-500/30 bg-cyan-950/30 space-y-1">
                          <span className="text-[10px] text-cyan-400 block">+ NODE ALPHA</span>
                          <span className="text-white font-bold">120.4 px</span>
                        </div>
                        <div className="p-2.5 rounded border border-cyan-500/30 bg-cyan-950/30 space-y-1">
                          <span className="text-[10px] text-cyan-400 block">+ TOLERANCE</span>
                          <span className="text-emerald-400 font-bold">&plusmn; 0.002</span>
                        </div>
                        <div className="p-2.5 rounded border border-cyan-500/30 bg-cyan-950/30 space-y-1">
                          <span className="text-[10px] text-cyan-400 block">+ GRID BASE</span>
                          <span className="text-white font-bold">8px Modular</span>
                        </div>
                      </div>

                      <div className="relative text-[11px] text-cyan-400 flex justify-between pt-2 border-t border-cyan-500/30">
                        <span>STATUS: VERIFIED SPEC</span>
                        <span>SCALE: 1:1 METRIC</span>
                      </div>
                    </div>
                  )}

                  {selectedStyleId === 'flat-bento' && (
                    <div className="w-full h-full bg-zinc-900 border border-zinc-800 p-6 space-y-4 text-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Flat Bento Grid</span>
                        </div>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                          2D Clean UI
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="col-span-2 p-4 rounded-xl bg-zinc-800/80 border border-zinc-700/60 space-y-2">
                          <h4 className="text-base font-bold text-white">SaaS Metrics Card</h4>
                          <p className="text-xs text-zinc-400">Subtle 1px borders, high contrast badges, and clean spacing hierarchy.</p>
                          <div className="pt-2 flex items-center gap-2">
                            <span className="text-lg font-black text-indigo-400">+94.2%</span>
                            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">Growing</span>
                          </div>
                        </div>

                        <div className="col-span-1 p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex flex-col justify-between">
                          <span className="text-[10px] font-mono text-indigo-300 font-bold uppercase">Zero Skew</span>
                          <span className="text-2xl font-black text-white">2D</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>

          {/* Right: Style Specifications & Prompt Recipe */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            
            {/* Style Features Card */}
            <div className="p-5 rounded-3xl bg-white border-[3px] border-black shadow-[6px_6px_0px_#000] space-y-4 flex-1">
              <div className="flex items-center justify-between pb-3 border-b-2 border-black">
                <span className="text-xs font-black uppercase text-zinc-500 font-mono">
                  {currentStyle.category}
                </span>
                <span 
                  className="w-4 h-4 rounded-full border-2 border-black" 
                  style={{ backgroundColor: currentStyle.primaryColor }}
                />
              </div>

              <div>
                <h3 className="text-xl font-black text-black uppercase font-heading">
                  {currentStyle.name}
                </h3>
                <p className="text-xs text-zinc-700 font-medium mt-1 leading-relaxed">
                  {currentStyle.tagline}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-zinc-200">
                <span className="text-[11px] font-mono font-black uppercase text-black block">Key 2D Tokens:</span>
                <ul className="space-y-1.5">
                  {currentStyle.features.map((feat, idx) => (
                    <li key={idx} className="text-xs text-zinc-700 font-medium flex items-start gap-2">
                      <span className="text-black font-black">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AI Prompt Box Card */}
            <div className="p-5 rounded-3xl bg-[#0c0d15] border-[3px] border-black shadow-[6px_6px_0px_#000] text-white space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <FileCode2 className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs font-mono font-bold text-yellow-400 uppercase">2D AI Prompt</span>
                </div>
                <button
                  onClick={handleCopyPrompt}
                  className="px-2.5 py-1 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black text-[11px] font-black uppercase transition flex items-center gap-1"
                >
                  {copiedPrompt ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedPrompt ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-300 leading-relaxed max-h-28 overflow-y-auto select-text">
                {currentStyle.prompt}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
