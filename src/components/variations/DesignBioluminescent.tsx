'use client';
import React, { useState } from 'react';
import { COMPARISON_CONTENT } from '@/data/comparisonContent';
import { Sparkles, ArrowRight, Play, Dna, Activity, Zap, Radio } from 'lucide-react';

export default function DesignBioluminescent() {
  const content = COMPARISON_CONTENT;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="w-full min-h-full bg-[#02050b] text-[#e2f8ff] font-sans selection:bg-[#00f0ff]/30 p-4 sm:p-8 md:p-12 relative overflow-hidden">
      {/* Abyssal Bioluminescent Ambient Light Orbs (Hardware Accelerated) */}
      <div 
        className="absolute top-10 left-1/3 w-[500px] h-[350px] rounded-full pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,240,255,0.3) 0%, transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-20 right-1/4 w-[450px] h-[300px] rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(34,197,94,0.25) 0%, transparent 70%)'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-14">
        
        {/* 1. Glowing Bioluminescent Header */}
        <header className="px-6 py-4 rounded-2xl bg-[#060c18]/80 border border-[#00f0ff]/20 backdrop-blur-xl shadow-[0_0_25px_rgba(0,240,255,0.1)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.4)]">
              <Dna className="w-4 h-4 animate-spin-slow" />
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-wide text-white drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">
                {content.brand.name}
              </span>
              <span className="ml-2 text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/30">
                {content.brand.versionBadge}
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs text-[#8ee7ff]/70">
            {content.navigation.links.map((l, i) => (
              <a key={i} href={l.href} className="hover:text-[#00f0ff] hover:drop-shadow-[0_0_6px_rgba(0,240,255,0.8)] transition">
                {l.label}
              </a>
            ))}
          </nav>

          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#0284c7] text-[#02050b] text-xs font-black shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] transition">
            {content.navigation.primaryCtaText}
          </button>
        </header>

        {/* 2. Deep Sea Hero */}
        <section className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#060e1d]/90 to-[#030814]/90 border border-[#00f0ff]/30 shadow-[0_0_40px_rgba(0,240,255,0.15)] text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-xs text-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.2)]">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>{content.hero.pillBadge}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto drop-shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            {content.hero.headline}
          </h1>

          <p className="text-xs sm:text-base text-[#9dd9ec] max-w-2xl mx-auto leading-relaxed font-light">
            {content.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="px-6 py-3 rounded-xl bg-[#00f0ff] hover:bg-[#38bdf8] text-[#02050b] font-black text-xs sm:text-sm transition shadow-[0_0_25px_rgba(0,240,255,0.5)] flex items-center gap-2">
              <span>{content.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 rounded-xl bg-[#061224] hover:bg-[#0b1c38] text-[#00f0ff] font-bold text-xs sm:text-sm border border-[#00f0ff]/40 transition flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
              <Play className="w-3.5 h-3.5" />
              <span>{content.hero.secondaryCta}</span>
            </button>
          </div>

          <div className="text-[11px] font-mono text-[#4ca6c2] pt-2">
            {content.hero.trustText}
          </div>
        </section>

        {/* 3. Luminescent Metrics */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {content.metrics.map((m, i) => (
            <div 
              key={i} 
              className="p-5 rounded-2xl bg-[#050b17] border border-[#00f0ff]/20 shadow-[0_0_15px_rgba(0,240,255,0.08)] hover:border-[#00f0ff]/50 transition space-y-1"
            >
              <div className="text-xs font-mono text-[#62b9d4] truncate uppercase">{m.label}</div>
              <div className="text-2xl sm:text-3xl font-black text-[#00f0ff] drop-shadow-[0_0_10px_rgba(0,240,255,0.6)]">
                {m.value}
              </div>
              <div className="text-[11px] font-mono text-[#22c55e] flex items-center gap-1">
                <Activity className="w-3 h-3" />
                <span>{m.trend}</span>
              </div>
            </div>
          ))}
        </section>

        {/* 4. Bioluminescent Feature Pods */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.features.map((f, i) => (
            <div 
              key={i} 
              className="p-6 rounded-2xl bg-gradient-to-b from-[#061022] to-[#040914] border border-[#00f0ff]/20 hover:border-[#00f0ff]/50 shadow-[0_0_20px_rgba(0,240,255,0.06)] flex flex-col justify-between space-y-4 transition-all duration-300"
            >
              <div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30">
                  {f.tag}
                </span>
                <h3 className="text-base font-bold text-white mt-3">{f.title}</h3>
                <p className="text-xs text-[#9dd9ec] mt-2 leading-relaxed font-light">{f.description}</p>
              </div>

              <div className="text-xs font-bold text-[#00f0ff] flex items-center gap-1 pt-2">
                <span>{f.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </section>

        {/* 5. Bioluminescent Newsletter */}
        <section className="p-8 rounded-3xl bg-[#061022] border border-[#00f0ff]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
          <div>
            <h3 className="text-lg font-bold text-white">{content.newsletter.heading}</h3>
            <p className="text-xs text-[#8ee7ff]/70 mt-1">{content.newsletter.subtext}</p>
          </div>

          <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.newsletter.placeholder}
              className="px-4 py-2.5 rounded-xl bg-[#02050b] border border-[#00f0ff]/30 text-xs text-white outline-none focus:border-[#00f0ff] min-w-[220px]"
            />
            <button type="submit" className="px-5 py-2.5 rounded-xl bg-[#00f0ff] hover:bg-[#38bdf8] text-[#02050b] font-black text-xs transition shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              {subscribed ? 'SYNCHRONIZED' : content.newsletter.buttonText}
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-xs font-mono text-[#4ca6c2] flex flex-wrap justify-between items-center pt-4 border-t border-[#00f0ff]/20">
          <div>{content.footer.copyright}</div>
          <div className="text-[#22c55e] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
            <span>{content.footer.statusText}</span>
          </div>
        </footer>

      </div>
    </div>
  );
}
