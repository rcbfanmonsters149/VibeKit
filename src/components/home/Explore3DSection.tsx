'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  Box, Sparkles, Orbit, Compass, Move, MousePointer, 
  ExternalLink, Copy, Check, Eye, Maximize2, Zap, 
  Rotate3d, Layers, Disc, Terminal, Shield, ArrowUpRight
} from 'lucide-react';

interface Sample3D {
  id: string;
  name: string;
  tagline: string;
  category: string;
  previewUrl: string;
  tech: string[];
  description: string;
  prompt: string;
}

const SAMPLES_3D: Sample3D[] = [
  {
    id: 'visionos',
    name: 'Spatial VisionOS Hologram',
    tagline: 'Multi-layer spatial glass, specular glare & floating 3D orb',
    category: 'Spatial Computing / Apple',
    previewUrl: '/previews/3d-spatial-visionos/index.html',
    tech: ['CSS 3D Transforms', 'Multi-layer Z-Index', 'Backdrop Filter', 'Dynamic Specular Glare'],
    description: 'Floating spatial glass with multi-depth Z-axis layering (Z: +30px, Z: +60px), ambient mesh refraction, and an interactive 3D holographic orb that responds to cursor pitch and roll.',
    prompt: 'Build a Spatial VisionOS 3D website hero: interactive frosted glass cards that tilt with mouse coordinates (perspective: 1000px, rotateX, rotateY), dynamic light glare overlay tracking the cursor, and floating UI pills at translateZ(50px) over an ambient glowing orb.'
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk 3D Wireframe Grid',
    tagline: 'Infinite perspective horizon, rotating wireframe cube & neon spotlight',
    category: 'Web3 / Dev Terminal',
    previewUrl: '/previews/3d-cyberpunk-terminal/index.html',
    tech: ['Perspective 3D Grid', 'CSS 3D Wireframe Cube', 'Cursor Spotlight', 'Scanline Shaders'],
    description: 'Receding 3D cyber grid receding into the horizon at a 65-degree tilt with an animated forward-motion grid, rotating 3D wireframe voxel cube, and a cursor-following neon spotlight.',
    prompt: 'Create a Cyberpunk 3D terminal website: infinite receding 3D grid ground (perspective: 500px, rotateX(65deg), animated keyframes), floating rotating 3D wireframe cube in center, neon cyan/magenta glow, cursor-following spotlight beam, and monospace HUD data.'
  },
  {
    id: 'product-stage',
    name: '3D Interactive Product Stage',
    tagline: 'Physical hardware tilt, opposite floor shadow & tactile 3D buttons',
    category: 'E-Commerce / Hardware',
    previewUrl: '/previews/3d-product-showcase/index.html',
    tech: ['3D Tilt Physics', 'Reactive Light Flare', 'Opposite Shadow Physics', 'Tactile Popout'],
    description: 'A physical 3D luxury device stage where the product card tilts toward the cursor, while the cast shadow on the floor moves inversely to simulate a physical directional spotlight.',
    prompt: 'Design a 3D luxury product showcase: central product card with cursor-following 3D perspective tilt (rotateX, rotateY), reactive light flare highlight, floor shadow that moves opposite to the cursor to simulate directional lighting, and CTA buttons popping out at translateZ(30px).'
  },
  {
    id: 'bento-spatial',
    name: 'Multi-Depth Spatial Bento',
    tagline: 'Staggered Z-space cards, holographic chip & proximity glow',
    category: 'SaaS / AI Copilot',
    previewUrl: '/previews/3d-spatial-visionos/index.html',
    tech: ['Staggered translateZ', 'Proximity Hover', 'CSS Preserve-3D', 'Ambient Mesh Orbs'],
    description: 'Modular bento cards arranged in 3D space with staggered depth offsets (Card 1 at Z: 15px, Card 2 at Z: 40px, Card 3 at Z: 75px). As the mouse moves, cards shift at different parallax speeds.',
    prompt: 'Build a multi-depth 3D SaaS bento grid: transform-style: preserve-3d, cards layered at staggered translateZ depths (20px, 45px, 70px) creating real parallax on mouse hover, specular border highlights, and ambient glowing orbs.'
  }
];

export default function Explore3DSection() {
  const [selectedSampleId, setSelectedSampleId] = useState('visionos');
  const [tiltIntensity, setTiltIntensity] = useState<'gentle' | 'standard' | 'hyper'>('standard');
  const [autoOrbit, setAutoOrbit] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Mouse telemetry state
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const currentSample = SAMPLES_3D.find(s => s.id === selectedSampleId) || SAMPLES_3D[0];

  // Multiplier for tilt angle
  const maxTilt = tiltIntensity === 'gentle' ? 8 : tiltIntensity === 'standard' ? 18 : 32;

  // Mouse move handler for 3D tilt calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normalizedX = (x / rect.width) * 2 - 1; // -1 to 1
    const normalizedY = (y / rect.height) * 2 - 1; // -1 to 1

    // Calculate rotation: moving mouse UP tilts card BACK (negative rotateX)
    const rotateX = -normalizedY * maxTilt;
    const rotateY = normalizedX * maxTilt;

    setCursorPos({ x: Math.round(x), y: Math.round(y) });
    setRotation({ 
      rotateX: parseFloat(rotateX.toFixed(1)), 
      rotateY: parseFloat(rotateY.toFixed(1)) 
    });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.6
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!autoOrbit) {
      setRotation({ rotateX: 0, rotateY: 0 });
      setGlare(g => ({ ...g, opacity: 0 }));
    }
  };

  // Auto-orbit animation when enabled
  useEffect(() => {
    if (!autoOrbit) return;
    let angle = 0;
    const interval = setInterval(() => {
      angle += 0.04;
      const rotX = Math.sin(angle) * (maxTilt * 0.7);
      const rotY = Math.cos(angle) * maxTilt;
      setRotation({
        rotateX: parseFloat(rotX.toFixed(1)),
        rotateY: parseFloat(rotY.toFixed(1))
      });
      setGlare({
        x: 50 + Math.cos(angle) * 35,
        y: 50 + Math.sin(angle) * 35,
        opacity: 0.5
      });
    }, 30);
    return () => clearInterval(interval);
  }, [autoOrbit, maxTilt]);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(currentSample.prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleCopyCode = () => {
    const codeSnippet = `// 3D Card Tilt with Mouse Parallax
const [rot, setRot] = useState({ x: 0, y: 0 });
const onMouseMove = (e) => {
  const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - left) / width) * 2 - 1;
  const y = ((e.clientY - top) / height) * 2 - 1;
  setRot({ x: -y * 20, y: x * 20 });
};

<div 
  onMouseMove={onMouseMove}
  onMouseLeave={() => setRot({ x: 0, y: 0 })}
  style={{
    perspective: 1000,
    transform: \`rotateX(\${rot.x}deg) rotateY(\${rot.y}deg)\`,
    transformStyle: 'preserve-3d',
    transition: 'transform 0.1s ease-out'
  }}
  className="relative rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 shadow-2xl"
>
  {/* Floating Popout Element */}
  <div style={{ transform: 'translateZ(40px)' }} className="text-xl font-bold">
    Floating 3D Content
  </div>
</div>`;
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="explore-3d" className="py-16 sm:py-24 bg-[#07080e] text-white border-b-[3px] border-black select-none relative overflow-hidden">
      
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-xs font-mono text-purple-300">
              <Rotate3d className="w-3.5 h-3.5 text-cyan-400" />
              <span>3D Spatial Dimension</span>
              <span className="px-1.5 py-0.2 rounded bg-purple-500/30 text-white text-[9px] font-bold">Interactive</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white uppercase tracking-tight">
              Explore 3D Designs & Moving Cursor Physics
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-medium leading-relaxed">
              Step into the third dimension. Test real-time cursor tracking, perspective card tilt, specular glare physics, and explore production-ready 3D frontend samples built for next-generation web apps.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/studio-3d"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xs uppercase transition shadow-lg shadow-cyan-500/25"
            >
              <Box className="w-4 h-4" />
              <span>Launch 3D Studio</span>
            </Link>

            <Link
              href="/gallery-3d"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold uppercase transition"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>3D Gallery</span>
            </Link>

            <button
              onClick={() => setAutoOrbit(!autoOrbit)}
              className={`inline-flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-bold uppercase transition ${
                autoOrbit 
                  ? 'bg-purple-600 text-white border-purple-400 shadow-md shadow-purple-600/30' 
                  : 'bg-white/5 hover:bg-white/10 text-zinc-300 border-white/10'
              }`}
            >
              <Orbit className="w-3.5 h-3.5" />
              <span>Orbit: {autoOrbit ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>

        {/* 3D Samples Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#0f111a] border border-white/10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase text-zinc-500 mr-2 hidden sm:inline">3D Frontend Samples:</span>
            {SAMPLES_3D.map(sample => {
              const active = sample.id === selectedSampleId;
              return (
                <button
                  key={sample.id}
                  onClick={() => setSelectedSampleId(sample.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                    active 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30 border border-purple-400/30' 
                      : 'bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/5'
                  }`}
                >
                  <Box className="w-3.5 h-3.5" />
                  <span>{sample.name}</span>
                </button>
              );
            })}
          </div>

          {/* Tilt Intensity Selector */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-zinc-500 hidden md:inline">Tilt Angle:</span>
            {(['gentle', 'standard', 'hyper'] as const).map(level => (
              <button
                key={level}
                onClick={() => setTiltIntensity(level)}
                className={`px-2.5 py-1 rounded-lg uppercase text-[11px] font-bold transition ${
                  tiltIntensity === level 
                    ? 'bg-cyan-500 text-black' 
                    : 'bg-white/5 text-zinc-400 hover:text-white'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Main 3D Interactive Stage & Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Interactive 3D Canvas Sandbox */}
          <div className="lg:col-span-8 flex flex-col">
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="rounded-3xl border border-white/15 bg-[#090b14] overflow-hidden flex-1 flex flex-col relative group cursor-crosshair shadow-2xl min-h-[460px] perspective-1000"
            >
              
              {/* Window Header with Real-Time Telemetry */}
              <div className="bg-[#111320] border-b border-white/10 px-4 py-3 flex items-center justify-between z-30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="font-mono text-xs font-bold text-zinc-300 ml-2">
                    3D PERSPECTIVE ENGINE — {currentSample.name}
                  </span>
                </div>

                {/* Telemetry Chips */}
                <div className="flex items-center gap-2 font-mono text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-400">
                    PITCH: {rotation.rotateX}&deg;
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-purple-400">
                    ROLL: {rotation.rotateY}&deg;
                  </span>
                  <span className="hidden sm:inline px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400">
                    X:{cursorPos.x} Y:{cursorPos.y}
                  </span>
                </div>
              </div>

              {/* Cursor Spotlight Follower */}
              <div 
                className="absolute pointer-events-none transition-opacity duration-300 z-10"
                style={{
                  left: `${cursorPos.x}px`,
                  top: `${cursorPos.y}px`,
                  transform: 'translate(-50%, -50%)',
                  width: '320px',
                  height: '320px',
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.22) 0%, rgba(6, 182, 212, 0.12) 40%, transparent 70%)',
                  opacity: isHovered || autoOrbit ? 1 : 0
                }}
              />

              {/* 3D Spatial Canvas Stage */}
              <div className="flex-1 flex items-center justify-center p-6 sm:p-12 relative overflow-hidden preserve-3d">
                
                {/* 1. Spatial VisionOS Hologram Sample */}
                {selectedSampleId === 'visionos' && (
                  <div 
                    style={{
                      transform: `perspective(1000px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
                      transformStyle: 'preserve-3d',
                      transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out'
                    }}
                    className="w-full max-w-lg rounded-3xl bg-zinc-900/60 backdrop-blur-2xl border border-white/25 p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden"
                  >
                    {/* Specular Light Glare Overlay */}
                    <div 
                      className="absolute inset-0 pointer-events-none transition-opacity duration-200 z-30"
                      style={{
                        background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.35) 0%, transparent 60%)`,
                        opacity: glare.opacity
                      }}
                    />

                    {/* Top Spatial Bar (Z: 20px) */}
                    <div style={{ transform: 'translateZ(20px)' }} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                          Spatial OS 3.0
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-white">
                        Depth Layer +60px
                      </span>
                    </div>

                    {/* Center Hologram Floating Orb (Z: 60px) */}
                    <div style={{ transform: 'translateZ(60px)' }} className="flex flex-col items-center justify-center py-4 space-y-4">
                      <div className="relative w-28 h-28 flex items-center justify-center">
                        {/* Outer Orbiting Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40 animate-spin-3d" />
                        {/* Inner Glowing Core */}
                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 shadow-[0_0_40px_rgba(6,182,212,0.6)] animate-pulse" />
                        {/* Center Icon */}
                        <Sparkles className="w-7 h-7 text-white absolute z-10" />
                      </div>
                      <h4 className="text-xl sm:text-2xl font-black text-white text-center tracking-tight">
                        Volumetric Spatial UI
                      </h4>
                      <p className="text-xs text-zinc-300 text-center max-w-xs leading-relaxed">
                        Move your cursor across this card to experience real-time 3D tilt, specular glare refraction, and multi-depth floating elements.
                      </p>
                    </div>

                    {/* Floating Spatial Action Pills (Z: 40px) */}
                    <div style={{ transform: 'translateZ(40px)' }} className="flex items-center justify-between pt-2 border-t border-white/15">
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-bold border border-white/30 transition">
                          Spatial Window
                        </button>
                        <button className="px-3 py-1.5 rounded-full bg-cyan-500 text-black text-xs font-bold transition shadow-lg shadow-cyan-500/30">
                          Inspect Depth
                        </button>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400">Z-Index: 60px</span>
                    </div>
                  </div>
                )}

                {/* 2. Cyberpunk 3D Wireframe Grid Sample */}
                {selectedSampleId === 'cyberpunk' && (
                  <div 
                    style={{
                      transform: `perspective(1000px) rotateX(${rotation.rotateX * 0.7}deg) rotateY(${rotation.rotateY * 0.7}deg)`,
                      transformStyle: 'preserve-3d',
                      transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out'
                    }}
                    className="w-full max-w-lg h-80 rounded-3xl bg-black border-2 border-cyan-500/40 p-6 relative overflow-hidden flex flex-col justify-between shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                  >
                    {/* 3D Horizon Grid Ground Floor */}
                    <div 
                      className="absolute inset-x-0 bottom-0 h-44 pointer-events-none opacity-50 animate-grid-horizon"
                      style={{
                        transform: 'perspective(300px) rotateX(65deg)',
                        transformOrigin: 'bottom center',
                        backgroundImage: 'linear-gradient(to right, #06b6d4 1.5px, transparent 1.5px), linear-gradient(to bottom, #06b6d4 1.5px, transparent 1.5px)',
                        backgroundSize: '28px 28px'
                      }}
                    />

                    {/* Horizon Glowing Laser Line */}
                    <div className="absolute inset-x-0 bottom-44 h-0.5 bg-cyan-400 shadow-[0_0_15px_#22d3ee] pointer-events-none" />

                    {/* Floating Center 3D Wireframe Cube */}
                    <div style={{ transform: 'translateZ(50px)' }} className="flex items-center justify-between z-20">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-mono font-bold text-cyan-300">CYBER_HORIZON_3D.EXE</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/50 text-cyan-400">
                        FPS: 120 // V-SYNC ON
                      </span>
                    </div>

                    <div style={{ transform: 'translateZ(70px)' }} className="flex flex-col items-center justify-center my-auto z-20 space-y-3">
                      <div className="w-20 h-20 border-2 border-magenta-500/80 rounded-2xl animate-spin-3d bg-purple-900/30 flex items-center justify-center shadow-[0_0_25px_rgba(217,70,239,0.5)]">
                        <Box className="w-9 h-9 text-cyan-400 animate-pulse" />
                      </div>
                      <h4 className="text-xl font-mono font-bold text-white tracking-wider">
                        NEO-TOKYO WIREFRAME
                      </h4>
                      <p className="text-xs font-mono text-cyan-300 text-center max-w-xs">
                        Infinite perspective horizon with real-time coordinate matrix tracking.
                      </p>
                    </div>

                    <div style={{ transform: 'translateZ(30px)' }} className="flex justify-between items-center z-20 font-mono text-[11px] text-zinc-400">
                      <span>STATUS: ONLINE</span>
                      <span className="text-cyan-400">GRID PITCH: 65&deg;</span>
                    </div>
                  </div>
                )}

                {/* 3. 3D Product Showcase Sample */}
                {selectedSampleId === 'product-stage' && (
                  <div 
                    style={{
                      transform: `perspective(1000px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
                      transformStyle: 'preserve-3d',
                      transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out'
                    }}
                    className="w-full max-w-lg rounded-3xl bg-gradient-to-b from-zinc-800 to-zinc-950 border border-zinc-700/60 p-8 shadow-2xl relative space-y-6"
                  >
                    {/* Directional Specular Light */}
                    <div 
                      className="absolute inset-0 pointer-events-none rounded-3xl"
                      style={{
                        background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(250, 204, 21, 0.25) 0%, transparent 60%)`,
                        opacity: glare.opacity
                      }}
                    />

                    <div style={{ transform: 'translateZ(20px)' }} className="flex justify-between items-center">
                      <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 font-bold">
                        VIBE CHIP ONE — EDITION 2026
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-yellow-400 text-black font-black font-mono">
                        $499
                      </span>
                    </div>

                    {/* Central 3D Hardware Device Graphic (Z: 60px) */}
                    <div style={{ transform: 'translateZ(60px)' }} className="flex flex-col items-center justify-center py-4 space-y-4">
                      <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-zinc-700 via-zinc-900 to-black border-2 border-yellow-400/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center relative">
                        <div className="w-20 h-20 rounded-xl bg-black border border-yellow-400/40 flex items-center justify-center">
                          <Zap className="w-10 h-10 text-yellow-400" />
                        </div>
                        {/* Hardware LED */}
                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                      </div>
                      <h4 className="text-2xl font-black text-white font-heading">
                        Neural Accelerator Unit
                      </h4>
                      <p className="text-xs text-zinc-400 text-center max-w-xs">
                        Physical 3D card tilt with inverse shadow physics. Move your mouse to inspect angles.
                      </p>
                    </div>

                    <div style={{ transform: 'translateZ(40px)' }} className="flex items-center justify-between pt-3 border-t border-zinc-800">
                      <button className="px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-black text-xs uppercase transition shadow-lg shadow-yellow-500/20">
                        Order Hardware Unit
                      </button>
                      <span className="text-xs font-mono text-zinc-400">360&deg; Responsive</span>
                    </div>
                  </div>
                )}

                {/* 4. Multi-Depth Spatial Bento Sample */}
                {selectedSampleId === 'bento-spatial' && (
                  <div 
                    style={{
                      transform: `perspective(1000px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
                      transformStyle: 'preserve-3d',
                      transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out'
                    }}
                    className="w-full max-w-lg grid grid-cols-2 gap-4 p-4"
                  >
                    {/* Card 1: Elevated at Z: 30px */}
                    <div 
                      style={{ transform: 'translateZ(30px)' }} 
                      className="p-5 rounded-2xl bg-zinc-900/80 backdrop-blur-md border border-white/15 space-y-2 shadow-xl"
                    >
                      <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase">DEPTH: Z +30px</span>
                      <h5 className="text-base font-bold text-white">Neural Telemetry</h5>
                      <p className="text-xs text-zinc-400">Lifts outward in 3D parallax space as cursor tilts.</p>
                      <div className="text-xl font-mono font-bold text-cyan-400">+148%</div>
                    </div>

                    {/* Card 2: Elevated at Z: 65px */}
                    <div 
                      style={{ transform: 'translateZ(65px)' }} 
                      className="p-5 rounded-2xl bg-gradient-to-br from-purple-900/80 to-indigo-950/80 backdrop-blur-md border border-purple-400/40 space-y-2 shadow-2xl"
                    >
                      <span className="text-[10px] font-mono text-purple-300 font-bold uppercase">DEPTH: Z +65px</span>
                      <h5 className="text-base font-bold text-white">Maximum Popout</h5>
                      <p className="text-xs text-purple-200">Floats nearest to the viewer for instant visual hierarchy.</p>
                      <span className="inline-block px-2 py-0.5 rounded bg-purple-500 text-black text-[10px] font-bold">
                        ACTIVE FOREGROUND
                      </span>
                    </div>

                    {/* Card 3: Wide Bottom Card at Z: 20px */}
                    <div 
                      style={{ transform: 'translateZ(20px)' }} 
                      className="col-span-2 p-5 rounded-2xl bg-zinc-900/90 border border-white/10 flex items-center justify-between"
                    >
                      <div>
                        <h5 className="text-sm font-bold text-white">Staggered Z-Space Architecture</h5>
                        <p className="text-xs text-zinc-400">Different layers move at differential parallax speeds.</p>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                        <Rotate3d className="w-5 h-5 text-cyan-300" />
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Instructions Footer */}
              <div className="bg-[#0f111a] border-t border-white/10 px-4 py-2.5 flex items-center justify-between z-20 text-[11px] text-zinc-400">
                <div className="flex items-center gap-2">
                  <MousePointer className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Move your mouse across the canvas to tilt in 3D space</span>
                </div>
                <span className="font-mono text-cyan-400 hidden sm:inline">CSS Perspective 1000px</span>
              </div>
            </div>
          </div>

          {/* Right: 3D Specifications & Quick Action Card */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            
            {/* Sample Specs Details */}
            <div className="p-5 rounded-3xl bg-[#0f111a] border border-white/15 space-y-4 flex-1">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono font-bold uppercase text-purple-400">
                  {currentSample.category}
                </span>
                <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono border border-cyan-500/30">
                  3D Sample #{SAMPLES_3D.findIndex(s => s.id === currentSample.id) + 1}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black text-white font-heading">
                  {currentSample.name}
                </h3>
                <p className="text-xs text-zinc-400 font-medium mt-1 leading-relaxed">
                  {currentSample.tagline}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[11px] font-mono font-bold uppercase text-zinc-300 block">3D Architecture Stack:</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentSample.tech.map((t, idx) => (
                    <span key={idx} className="px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                {currentSample.description}
              </p>

              {/* Actions */}
              <div className="pt-2 flex flex-col gap-2">
                <Link
                  href="/studio-3d"
                  className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xs uppercase flex items-center justify-center gap-1.5 transition shadow-md shadow-cyan-500/20"
                >
                  <Box className="w-3.5 h-3.5" />
                  <span>Inspect in 3D Studio</span>
                </Link>

                <a
                  href={currentSample.previewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase flex items-center justify-center gap-1.5 transition"
                >
                  <span>Open Standalone 3D Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* AI Prompt Box for 3D Frontend */}
            <div className="p-5 rounded-3xl bg-[#0a0c14] border border-white/15 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase">3D AI Prompt Recipe</span>
                </div>
                <button
                  onClick={handleCopyPrompt}
                  className="px-2.5 py-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-[11px] font-bold uppercase transition flex items-center gap-1"
                >
                  {copiedPrompt ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedPrompt ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-[11px] font-mono text-zinc-300 leading-relaxed max-h-28 overflow-y-auto select-text">
                {currentSample.prompt}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
