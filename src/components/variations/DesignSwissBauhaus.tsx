'use client';
import React, { useState } from 'react';
import { COMPARISON_CONTENT } from '@/data/comparisonContent';
import { ArrowRight, Play, Square, Circle, Triangle } from 'lucide-react';

export default function DesignSwissBauhaus() {
  const content = COMPARISON_CONTENT;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="w-full min-h-full bg-[#f4f4f0] text-[#0a0a0a] font-sans selection:bg-[#e11d48] selection:text-white p-4 sm:p-8 md:p-12 space-y-16">
      <div className="max-w-5xl mx-auto space-y-14 border-l-4 border-[#0a0a0a] pl-4 sm:pl-8">
        
        {/* 1. Bauhaus Header Grid */}
        <header className="border-b-2 border-[#0a0a0a] pb-6 flex flex-wrap items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#e11d48]" />
              <div className="w-4 h-4 rounded-full bg-[#0a0a0a]" />
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#e11d48]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tighter uppercase text-[#0a0a0a]">
              {content.brand.name}
            </h2>
            <div className="text-xs font-mono tracking-widest uppercase text-[#555]">
              INTERNATIONAL STYLE • {content.brand.versionBadge}
            </div>
          </div>

          <nav className="flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
            {content.navigation.links.map((link, i) => (
              <a key={i} href={link.href} className="hover:text-[#e11d48] transition">
                {link.label}
              </a>
            ))}
          </nav>

          <button className="px-5 py-2.5 bg-[#e11d48] text-white font-black text-xs uppercase tracking-widest hover:bg-[#0a0a0a] transition">
            {content.navigation.primaryCtaText}
          </button>
        </header>

        {/* 2. Asymmetric Swiss Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-3 space-y-2 border-t-2 border-[#0a0a0a] pt-3">
            <span className="text-xs font-mono font-bold uppercase text-[#e11d48]">MANIFESTO 01</span>
            <div className="text-xs font-bold uppercase text-[#0a0a0a]">{content.hero.pillBadge}</div>
            <div className="text-[11px] font-mono text-[#555] leading-relaxed pt-2">
              {content.hero.trustText}
            </div>
          </div>

          <div className="lg:col-span-9 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#0a0a0a] leading-[0.95]">
              {content.hero.headline}
            </h1>

            <p className="text-sm sm:text-lg text-[#333] font-medium leading-relaxed max-w-2xl">
              {content.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="px-8 py-3.5 bg-[#0a0a0a] text-white font-black text-xs uppercase tracking-widest hover:bg-[#e11d48] transition flex items-center gap-2">
                <span>{content.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3.5 border-2 border-[#0a0a0a] text-[#0a0a0a] font-black text-xs uppercase tracking-widest hover:bg-[#0a0a0a] hover:text-white transition flex items-center gap-2">
                <Play className="w-4 h-4" />
                <span>{content.hero.secondaryCta}</span>
              </button>
            </div>
          </div>
        </section>

        {/* 3. Strict Geometric Metrics */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-y-2 border-[#0a0a0a]">
          {content.metrics.map((m, i) => (
            <div 
              key={i} 
              className={`p-6 space-y-1 ${i !== 3 ? 'border-r-2 border-[#0a0a0a]' : ''} ${i % 2 === 1 ? 'bg-[#0a0a0a] text-white' : ''}`}
            >
              <div className="text-[11px] font-mono uppercase tracking-widest font-bold opacity-80">{m.label}</div>
              <div className="text-3xl sm:text-4xl font-black tracking-tighter">{m.value}</div>
              <div className="text-[10px] font-mono uppercase tracking-wider">{m.trend}</div>
            </div>
          ))}
        </section>

        {/* 4. Numbered Modules Grid */}
        <section className="space-y-6">
          <div className="text-xs font-mono font-bold uppercase text-[#e11d48]">
            // SECTION 02 — ARCHITECTURAL CAPABILITIES
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.features.map((f, i) => (
              <div key={i} className="border-2 border-[#0a0a0a] p-6 space-y-4 bg-white flex flex-col justify-between">
                <div>
                  <div className="text-4xl font-black text-[#e11d48] font-mono leading-none">
                    0{i + 1}
                  </div>
                  <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#0a0a0a] mt-3">
                    [{f.tag}]
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-[#0a0a0a] mt-1">{f.title}</h3>
                  <p className="text-xs text-[#444] mt-2 leading-relaxed font-normal">{f.description}</p>
                </div>

                <div className="pt-4 border-t-2 border-[#0a0a0a] text-xs font-black uppercase tracking-widest text-[#e11d48] hover:text-[#0a0a0a] transition cursor-pointer">
                  {f.actionText} →
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Poster Newsletter Block */}
        <section className="p-8 border-2 border-[#0a0a0a] bg-[#e11d48] text-white space-y-4">
          <div className="text-2xl sm:text-3xl font-black uppercase tracking-tighter">
            {content.newsletter.heading}
          </div>
          <p className="text-xs sm:text-sm text-white/90 max-w-xl font-medium">
            {content.newsletter.subtext}
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-lg">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER EMAIL ADDRESS"
              className="px-4 py-3 bg-white text-[#0a0a0a] font-mono text-xs uppercase outline-none flex-1 font-bold"
            />
            <button type="submit" className="px-6 py-3 bg-[#0a0a0a] text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#0a0a0a] transition">
              {subscribed ? 'REGISTERED' : content.newsletter.buttonText}
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-xs font-mono font-bold uppercase tracking-widest flex flex-wrap justify-between items-center pt-4 border-t-2 border-[#0a0a0a]">
          <div>{content.footer.copyright}</div>
          <div>{content.footer.statusText}</div>
        </footer>

      </div>
    </div>
  );
}
