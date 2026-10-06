'use client';
import React, { useState } from 'react';
import { COMPARISON_CONTENT } from '@/data/comparisonContent';
import { Sparkles, ArrowRight, Play, Cpu, Shield, Terminal, Eye, Compass, Layers, Radio } from 'lucide-react';

export default function DesignSpatialVisionOS() {
  const content = COMPARISON_CONTENT;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeDock, setActiveDock] = useState(0);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="w-full min-h-full bg-[#030308] text-white font-sans selection:bg-cyan-500/30 p-4 sm:p-8 md:p-12 relative overflow-hidden">
      {/* Deep Spatial Lighting Environment (Hardware Accelerated) */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.25) 0%, rgba(147,51,234,0.15) 45%, transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle at center, rgba(99,102,241,0.25) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-14">
        
        {/* 1. Spatial Floating Header */}
        <header className="px-6 py-3.5 rounded-full bg-white/[0.06] backdrop-blur-3xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 flex items-center justify-center text-black font-bold shadow-lg shadow-cyan-500/30">
              <Eye className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-sm tracking-tight text-white">{content.brand.name}</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-cyan-300 border border-white/10">
              {content.brand.versionBadge}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs text-zinc-300">
            {content.navigation.links.map((l, i) => (
              <a key={i} href={l.href} className="hover:text-cyan-300 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <button className="px-4 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-semibold backdrop-blur-xl border border-white/30 transition shadow-sm">
            {content.navigation.primaryCtaText}
          </button>
        </header>

        {/* 2. Spatial Hero Window */}
        <section className="p-8 sm:p-14 rounded-3xl sm:rounded-[36px] bg-white/[0.04] backdrop-blur-3xl border border-white/20 shadow-[0_16px_48px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.3)] text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs text-cyan-300">
            <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>{content.hero.pillBadge}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-400 tracking-tight leading-tight max-w-3xl mx-auto">
            {content.hero.headline}
          </h1>

          <p className="text-xs sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed font-light">
            {content.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs sm:text-sm hover:bg-cyan-100 transition shadow-lg shadow-white/10 flex items-center gap-2">
              <span>{content.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm border border-white/20 backdrop-blur-xl transition flex items-center gap-2">
              <Play className="w-3.5 h-3.5 text-cyan-400" />
              <span>{content.hero.secondaryCta}</span>
            </button>
          </div>

          <div className="text-[11px] text-zinc-400 font-mono pt-2">
            {content.hero.trustText}
          </div>
        </section>

        {/* 3. Spatial Metrics Floating Pods */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {content.metrics.map((m, i) => (
            <div 
              key={i} 
              className="p-5 rounded-2xl bg-white/[0.04] backdrop-blur-2xl border border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] space-y-1 hover:border-cyan-400/40 transition"
            >
              <div className="text-xs text-zinc-400 truncate">{m.label}</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{m.value}</div>
              <div className="text-[11px] font-mono text-cyan-400">{m.trend}</div>
            </div>
          ))}
        </section>

        {/* 4. Spatial Floating Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.features.map((f, i) => (
            <div 
              key={i} 
              className="p-6 rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between space-y-4 hover:scale-[1.02] hover:border-white/30 transition-all duration-300"
            >
              <div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/10 text-cyan-300 border border-white/10">
                  {f.tag}
                </span>
                <h3 className="text-base font-bold text-white mt-3">{f.title}</h3>
                <p className="text-xs text-zinc-300 mt-2 leading-relaxed font-light">{f.description}</p>
              </div>

              <div className="text-xs font-semibold text-cyan-400 flex items-center gap-1 pt-2">
                <span>{f.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </section>

        {/* 5. Spatial Newsletter */}
        <section className="p-8 rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">{content.newsletter.heading}</h3>
            <p className="text-xs text-zinc-400 mt-1">{content.newsletter.subtext}</p>
          </div>

          <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.newsletter.placeholder}
              className="px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-xs text-white outline-none focus:border-cyan-400 min-w-[220px]"
            />
            <button type="submit" className="px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition">
              {subscribed ? 'Connected' : content.newsletter.buttonText}
            </button>
          </form>
        </section>

        {/* Spatial Bottom Capsule Dock (Floating Navigation) */}
        <div className="sticky bottom-4 z-40 flex justify-center">
          <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-3xl border border-white/25 shadow-2xl flex items-center gap-4">
            {['Overview', 'Spatial Mesh', 'Telemetry', 'Settings'].map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDock(idx)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                  activeDock === idx
                    ? 'bg-white/25 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
