'use client';
import React, { useState, useEffect, useRef, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { DESIGNS_3D, CATEGORIES_3D, Design3D } from '@/data/designs3d';
import { 
  Box, Sparkles, Rotate3d, Orbit, MousePointer, 
  ExternalLink, Copy, Check, Monitor, Smartphone, 
  Tablet, Maximize2, Search, Sliders, Layers, 
  Code2, Terminal, ArrowLeft, RefreshCw, Zap, Eye
} from 'lucide-react';

function Studio3DContent() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get('id') || DESIGNS_3D[0].id;

  const [selectedDesign, setSelectedDesign] = useState<Design3D>(() => {
    return DESIGNS_3D.find(d => d.id === initialId) || DESIGNS_3D[0];
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile' | 'stage'>('desktop');
  const [activeInspectorTab, setActiveInspectorTab] = useState<'specs' | 'prompt' | 'code' | 'lighting'>('specs');
  
  // 3D Physics Controls
  const [enableTilt, setEnableTilt] = useState(true);
  const [enableGlare, setEnableGlare] = useState(true);
  const [autoOrbit, setAutoOrbit] = useState(false);
  const [perspectiveVal, setPerspectiveVal] = useState<'600' | '1000' | '1500'>('1000');
  
  // Real-time Telemetry
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [copiedText, setCopiedText] = useState<'prompt' | 'code' | null>(null);

  const stageRef = useRef<HTMLDivElement>(null);

  // Filter 3D designs for sidebar
  const filteredDesigns = useMemo(() => {
    return DESIGNS_3D.filter(d => {
      const matchCat = selectedCategory === 'all' || d.category === selectedCategory;
      const matchSearch = d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Handle pointer tracking on 3D stage
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || autoOrbit || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width) * 2 - 1;
    const normY = (y / rect.height) * 2 - 1;

    const rotX = -normY * 16;
    const rotY = normX * 16;

    setCursorPos({ x: Math.round(x), y: Math.round(y) });
    setRotation({ x: parseFloat(rotX.toFixed(1)), y: parseFloat(rotY.toFixed(1)) });
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
  };

  const handleMouseLeave = () => {
    if (!autoOrbit) {
      setRotation({ x: 0, y: 0 });
    }
  };

  // Auto orbit mode
  useEffect(() => {
    if (!autoOrbit) return;
    let angle = 0;
    const interval = setInterval(() => {
      angle += 0.03;
      setRotation({
        x: parseFloat((Math.sin(angle) * 10).toFixed(1)),
        y: parseFloat((Math.cos(angle) * 18).toFixed(1))
      });
      setGlarePos({
        x: 50 + Math.cos(angle) * 35,
        y: 50 + Math.sin(angle) * 35
      });
    }, 30);
    return () => clearInterval(interval);
  }, [autoOrbit]);

  const copyToClipboard = (type: 'prompt' | 'code', text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="h-screen flex flex-col bg-[#07080e] text-white overflow-hidden select-none">
      
      {/* 1. Global 3D Studio Header */}
      <header className="h-14 flex-shrink-0 bg-[#0a0c16] border-b border-white/10 px-4 flex items-center justify-between z-30">
        
        {/* Left: Brand & Return Navigation */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Home</span>
          </Link>

          <div className="flex items-center gap-2 border-l border-white/10 pl-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center p-[1px]">
              <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                <Box className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm text-white">VibeKit 3D Studio</span>
              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase font-bold">
                PRO 3D
              </span>
            </div>
          </div>
        </div>

        {/* Center: Navigation Switcher Tabs */}
        <div className="hidden md:flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10 text-xs font-bold">
          <span className="px-3 py-1 rounded-lg bg-cyan-500 text-black shadow-sm flex items-center gap-1.5">
            <Rotate3d className="w-3.5 h-3.5" />
            <span>3D Workbench</span>
          </span>
          <Link
            href="/gallery-3d"
            className="px-3 py-1 rounded-lg text-zinc-400 hover:text-white transition flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>3D Gallery</span>
          </Link>
          <Link
            href="/studio"
            className="px-3 py-1 rounded-lg text-zinc-400 hover:text-white transition flex items-center gap-1.5"
          >
            <span>2D Style Studio</span>
          </Link>
        </div>

        {/* Right: Quick Action Controls */}
        <div className="flex items-center gap-2">
          <a
            href={selectedDesign.previewUrl}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition flex items-center gap-1.5"
          >
            <span>Fullscreen</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => copyToClipboard('prompt', selectedDesign.aiPrompt.cursor)}
            className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xs uppercase transition shadow-md shadow-cyan-500/20 flex items-center gap-1.5"
          >
            {copiedText === 'prompt' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copiedText === 'prompt' ? 'Copied' : 'Copy 3D Prompt'}</span>
          </button>
        </div>
      </header>

      {/* 2. Main Studio 3-Column Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Column: 3D Websites Sidebar */}
        <aside className="w-72 flex-shrink-0 bg-[#0a0c16] border-r border-white/10 flex flex-col overflow-hidden">
          
          {/* Search & Category Filter Header */}
          <div className="p-3 border-b border-white/10 space-y-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search 3D models & sites..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Category Select Pills */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none text-[11px]">
              {CATEGORIES_3D.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2 py-0.5 rounded-md font-medium whitespace-nowrap transition ${
                    selectedCategory === cat.id
                      ? 'bg-cyan-500 text-black font-bold'
                      : 'bg-white/5 text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* List of 3D Websites */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1.5">
            {filteredDesigns.map((d) => {
              const active = d.id === selectedDesign.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDesign(d)}
                  className={`w-full p-2.5 rounded-xl border text-left transition flex flex-col space-y-1 ${
                    active
                      ? 'bg-gradient-to-r from-cyan-950/60 to-purple-950/40 border-cyan-500/50 shadow-md shadow-cyan-500/10'
                      : 'bg-white/5 hover:bg-white/10 border-white/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-bold uppercase">
                      {d.categoryLabel}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">
                      {d.stats.fps}
                    </span>
                  </div>

                  <h4 className={`text-xs font-bold leading-tight ${active ? 'text-white' : 'text-zinc-300'}`}>
                    {d.title}
                  </h4>

                  <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono">
                    <span>{d.specs.perspective}</span>
                    <span>•</span>
                    <span>{d.techStack[0]}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Sidebar Footer Link */}
          <div className="p-3 border-t border-white/10 bg-black/40 flex items-center justify-between text-xs">
            <span className="text-zinc-500 font-mono">{filteredDesigns.length} Websites</span>
            <Link href="/gallery-3d" className="text-cyan-400 hover:underline font-bold">
              View in Gallery &rarr;
            </Link>
          </div>
        </aside>

        {/* Center Column: Interactive 3D Canvas Viewport */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#05060b] relative">
          
          {/* Viewport Action & Perspective Toolbar */}
          <div className="h-12 bg-[#090b14] border-b border-white/10 px-4 flex items-center justify-between z-20">
            
            {/* Viewport Frame Size Switches */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/10">
              <button
                onClick={() => setViewportMode('desktop')}
                title="Desktop 1440px"
                className={`p-1.5 rounded transition ${viewportMode === 'desktop' ? 'bg-cyan-500 text-black font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewportMode('tablet')}
                title="Tablet 768px"
                className={`p-1.5 rounded transition ${viewportMode === 'tablet' ? 'bg-cyan-500 text-black font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewportMode('mobile')}
                title="Mobile 375px"
                className={`p-1.5 rounded transition ${viewportMode === 'mobile' ? 'bg-cyan-500 text-black font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewportMode('stage')}
                title="Full 3D Stage"
                className={`p-1.5 rounded transition ${viewportMode === 'stage' ? 'bg-cyan-500 text-black font-bold' : 'text-zinc-400 hover:text-white'}`}
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* 3D Physics Toggles */}
            <div className="flex items-center gap-2 text-xs font-mono">
              <button
                onClick={() => setEnableTilt(!enableTilt)}
                className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold transition flex items-center gap-1 ${
                  enableTilt 
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' 
                    : 'bg-white/5 text-zinc-500 border-white/10'
                }`}
              >
                <MousePointer className="w-3 h-3" />
                <span>Tilt: {enableTilt ? 'ON' : 'OFF'}</span>
              </button>

              <button
                onClick={() => setAutoOrbit(!autoOrbit)}
                className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold transition flex items-center gap-1 ${
                  autoOrbit 
                    ? 'bg-purple-500/20 text-purple-300 border-purple-500/40' 
                    : 'bg-white/5 text-zinc-500 border-white/10'
                }`}
              >
                <Orbit className="w-3 h-3" />
                <span>Orbit: {autoOrbit ? 'ON' : 'OFF'}</span>
              </button>

              {/* Perspective Preset */}
              <div className="hidden sm:flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-lg border border-white/10">
                <span className="text-zinc-500 text-[10px]">FOV:</span>
                {(['600', '1000', '1500'] as const).map(p => (
                  <button
                    key={p}
                    onClick={() => setPerspectiveVal(p)}
                    className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                      perspectiveVal === p ? 'bg-cyan-500 text-black' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {p}px
                  </button>
                ))}
              </div>
            </div>

            {/* Real-time Pitch & Roll Display */}
            <div className="hidden lg:flex items-center gap-2 font-mono text-[10px] text-zinc-400">
              <span className="text-cyan-400">PITCH: {rotation.x}&deg;</span>
              <span className="text-purple-400">ROLL: {rotation.y}&deg;</span>
            </div>
          </div>

          {/* Central 3D Stage Container */}
          <div 
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="flex-1 flex items-center justify-center p-4 sm:p-8 relative overflow-hidden cursor-crosshair preserve-3d"
            style={{ perspective: `${perspectiveVal}px` }}
          >
            {/* Ambient Background Glow Orbs */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Interactive 3D Frame */}
            <div
              style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transformStyle: 'preserve-3d',
                transition: autoOrbit ? 'transform 0.05s linear' : 'transform 0.08s ease-out'
              }}
              className={`rounded-2xl border-2 border-white/20 bg-black shadow-2xl relative overflow-hidden transition-all duration-300 flex flex-col ${
                viewportMode === 'desktop' ? 'w-full max-w-5xl h-[560px]' :
                viewportMode === 'tablet' ? 'w-[768px] h-[540px]' :
                viewportMode === 'mobile' ? 'w-[375px] h-[560px]' : 'w-full h-full'
              }`}
            >
              {/* Specular Light Glare Layer */}
              {enableGlare && (
                <div 
                  className="absolute inset-0 pointer-events-none z-30 opacity-40 transition-opacity"
                  style={{
                    background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.35) 0%, transparent 60%)`
                  }}
                />
              )}

              {/* Window Frame Titlebar */}
              <div className="h-8 bg-[#111322] border-b border-white/10 px-3 flex items-center justify-between z-20">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-zinc-400 ml-2">
                    {selectedDesign.title} &bull; {selectedDesign.previewUrl}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-cyan-400 font-bold">
                  {selectedDesign.stats.fps}
                </span>
              </div>

              {/* Live 3D Website Iframe */}
              <div className="flex-1 w-full h-full relative">
                <iframe
                  key={selectedDesign.id}
                  src={selectedDesign.previewUrl}
                  title={selectedDesign.title}
                  className="w-full h-full border-0"
                />
              </div>
            </div>

          </div>

          {/* Bottom Telemetry Statusbar */}
          <div className="h-8 bg-[#090b14] border-t border-white/10 px-4 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
            <div className="flex items-center gap-3">
              <span className="text-cyan-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                ACTIVE ENGINE: CSS 3D & HARDWARE GPU
              </span>
              <span className="hidden sm:inline">POINTER: X:{cursorPos.x} Y:{cursorPos.y}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>PERSPECTIVE: {perspectiveVal}px</span>
              <span className="text-emerald-400">120 FPS</span>
            </div>
          </div>

        </div>

        {/* Right Column: 3D Inspector & Prompt/Code Panel */}
        <aside className="w-80 flex-shrink-0 bg-[#0a0c16] border-l border-white/10 flex flex-col overflow-hidden">
          
          {/* Inspector Tab Switcher */}
          <div className="flex border-b border-white/10 bg-black/40 text-xs">
            <button
              onClick={() => setActiveInspectorTab('specs')}
              className={`flex-1 py-2.5 font-bold transition border-b-2 ${
                activeInspectorTab === 'specs'
                  ? 'border-cyan-400 text-white bg-white/5'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              3D Specs
            </button>
            <button
              onClick={() => setActiveInspectorTab('prompt')}
              className={`flex-1 py-2.5 font-bold transition border-b-2 ${
                activeInspectorTab === 'prompt'
                  ? 'border-cyan-400 text-white bg-white/5'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              AI Prompt
            </button>
            <button
              onClick={() => setActiveInspectorTab('code')}
              className={`flex-1 py-2.5 font-bold transition border-b-2 ${
                activeInspectorTab === 'code'
                  ? 'border-cyan-400 text-white bg-white/5'
                  : 'border-transparent text-zinc-400 hover:text-white'
              }`}
            >
              Code
            </button>
          </div>

          {/* Inspector Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            
            {/* Tab: 3D Specs */}
            {activeInspectorTab === 'specs' && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-white font-heading">{selectedDesign.title}</h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{selectedDesign.description}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase font-bold block">
                    Z-Depth Elevation Layers:
                  </span>
                  <div className="space-y-1">
                    {selectedDesign.specs.zLayers.map((layer, i) => (
                      <div key={i} className="px-2.5 py-1 rounded bg-white/5 border border-white/5 font-mono text-[11px] text-zinc-300">
                        {layer}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-[11px] font-mono text-purple-400 uppercase font-bold block">
                    Lighting & Shader Physics:
                  </span>
                  <p className="text-xs text-zinc-300 bg-white/5 p-2 rounded border border-white/5 font-mono">
                    {selectedDesign.specs.lighting}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase font-bold block">
                    Color DNA:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="flex items-center gap-2 p-1.5 rounded bg-white/5">
                      <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: selectedDesign.colorPalette.bg }} />
                      <span className="text-zinc-300">Base</span>
                    </div>
                    <div className="flex items-center gap-2 p-1.5 rounded bg-white/5">
                      <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: selectedDesign.colorPalette.accent }} />
                      <span className="text-zinc-300">Accent</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab: AI Prompt */}
            {activeInspectorTab === 'prompt' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 uppercase font-bold">Cursor & Claude Code:</span>
                  <button
                    onClick={() => copyToClipboard('prompt', selectedDesign.aiPrompt.cursor)}
                    className="px-2 py-0.5 rounded bg-cyan-500 text-black text-[10px] font-bold hover:bg-cyan-400 transition"
                  >
                    {copiedText === 'prompt' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="p-3 rounded-xl bg-black border border-white/10 font-mono text-[11px] text-zinc-300 leading-relaxed max-h-52 overflow-y-auto select-text">
                  {selectedDesign.aiPrompt.cursor}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-mono text-purple-400 uppercase font-bold">v0 Formulation:</span>
                </div>
                <div className="p-3 rounded-xl bg-black border border-white/10 font-mono text-[11px] text-zinc-300 leading-relaxed select-text">
                  {selectedDesign.aiPrompt.v0}
                </div>
              </div>
            )}

            {/* Tab: Code */}
            {activeInspectorTab === 'code' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 uppercase font-bold">React & CSS 3D:</span>
                  <button
                    onClick={() => copyToClipboard('code', selectedDesign.codeSnippet)}
                    className="px-2 py-0.5 rounded bg-emerald-500 text-black text-[10px] font-bold hover:bg-emerald-400 transition"
                  >
                    {copiedText === 'code' ? 'Copied!' : 'Copy Code'}
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-black border border-white/10 font-mono text-[11px] text-zinc-300 overflow-x-auto select-text leading-relaxed">
                  <code>{selectedDesign.codeSnippet}</code>
                </pre>
              </div>
            )}

          </div>

          {/* Inspector Footer CTA */}
          <div className="p-3 border-t border-white/10 bg-black/40">
            <a
              href={selectedDesign.previewUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase flex items-center justify-center gap-1.5 transition"
            >
              <span>Launch Standalone Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </aside>

      </div>

    </div>
  );
}

export default function Studio3DView() {
  return (
    <Suspense fallback={<div className="h-screen bg-[#07080e] flex items-center justify-center text-cyan-400 font-mono">Loading 3D Studio...</div>}>
      <Studio3DContent />
    </Suspense>
  );
}
