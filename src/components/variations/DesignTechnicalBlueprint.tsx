'use client';
import React, { useState } from 'react';
import { COMPARISON_CONTENT } from '@/data/comparisonContent';
import { Sparkles, ArrowRight, Play, Cpu, Shield, Terminal, Crosshair, Compass, Ruler } from 'lucide-react';

export default function DesignTechnicalBlueprint() {
  const content = COMPARISON_CONTENT;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="w-full min-h-full bg-[#081326] text-[#e0f2fe] font-mono selection:bg-[#38bdf8]/30 relative overflow-hidden">
      {/* Blueprint Grid Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, #38bdf8 1px, transparent 1px),
            linear-gradient(to bottom, #38bdf8 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, #38bdf8 1px, transparent 1px),
            linear-gradient(to bottom, #38bdf8 1px, transparent 1px)
          `,
          backgroundSize: '8px 8px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto p-4 sm:p-8 space-y-12">
        {/* Blueprint Perimeter Frame */}
        <div className="border border-[#38bdf8]/40 p-4 sm:p-6 relative bg-[#0a1832]/80 backdrop-blur-sm">
          
          {/* Corner Alignment Marks */}
          <div className="absolute top-1 left-1 text-[9px] text-[#38bdf8]/70 font-mono">[+] ORIGIN_0,0</div>
          <div className="absolute top-1 right-1 text-[9px] text-[#38bdf8]/70 font-mono">SEC_REF: A-A [+]</div>

          {/* 1. Header & Navigation */}
          <header className="border-b border-[#38bdf8]/30 pb-4 mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#38bdf8] flex items-center justify-center bg-[#38bdf8]/10 text-[#38bdf8]">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold tracking-wider text-white uppercase">{content.brand.name} SPEC_DOC</div>
                <div className="text-[10px] text-[#38bdf8]/70">{content.brand.tagline}</div>
              </div>
            </div>

            <nav className="flex items-center gap-4 text-xs">
              {content.navigation.links.map((l, i) => (
                <a key={i} href={l.href} className="text-[#93c5fd] hover:text-[#facc15] transition">
                  //{l.label.toUpperCase()}
                </a>
              ))}
            </nav>

            <button className="px-3.5 py-1.5 border border-[#facc15] bg-[#facc15]/10 hover:bg-[#facc15]/20 text-[#facc15] text-xs font-bold transition">
              [{content.navigation.primaryCtaText.toUpperCase()}]
            </button>
          </header>

          {/* 2. Hero Dimension Box */}
          <section className="border border-[#38bdf8]/30 p-6 sm:p-10 space-y-6 relative bg-[#0c1e3d]/60">
            <div className="flex items-center justify-between text-[10px] text-[#38bdf8]/70">
              <span>DIM_REF: W:100% × H:AUTO</span>
              <span className="text-[#facc15] font-bold">STATUS: {content.brand.versionBadge}</span>
            </div>

            {/* Dimension Horizontal Indicator Line */}
            <div className="flex items-center gap-2 text-[10px] text-[#38bdf8]/60">
              <div className="w-2 h-2 border-l border-t border-[#38bdf8]" />
              <div className="flex-1 h-px bg-[#38bdf8]/40 dashed" />
              <span>|← SPATIAL SPECIFICATION 1280mm →|</span>
              <div className="flex-1 h-px bg-[#38bdf8]/40" />
              <div className="w-2 h-2 border-r border-t border-[#38bdf8]" />
            </div>

            <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              {content.hero.headline}
            </h1>

            <p className="text-xs sm:text-sm text-[#bae6fd] max-w-2xl leading-relaxed">
              {content.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-5 py-2.5 bg-[#38bdf8] text-[#081326] font-black text-xs hover:bg-[#7dd3fc] transition flex items-center gap-2 shadow-lg shadow-[#38bdf8]/20">
                <span>{content.hero.primaryCta.toUpperCase()}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button className="px-5 py-2.5 border border-[#38bdf8] hover:bg-[#38bdf8]/10 text-[#38bdf8] text-xs font-bold transition flex items-center gap-2">
                <Ruler className="w-3.5 h-3.5" />
                <span>{content.hero.secondaryCta.toUpperCase()}</span>
              </button>
            </div>

            <div className="text-[10px] text-[#38bdf8]/70 pt-2 border-t border-[#38bdf8]/20">
              SPEC_NOTE: {content.hero.trustText}
            </div>
          </section>

          {/* 3. Engineering Metrics Readout */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-6">
            {content.metrics.map((m, i) => (
              <div key={i} className="border border-[#38bdf8]/30 p-3 bg-[#0a1832]/60 space-y-1">
                <div className="text-[10px] text-[#38bdf8]/80 uppercase">{m.label}</div>
                <div className="text-xl sm:text-2xl font-black text-[#facc15]">{m.value}</div>
                <div className="text-[9px] text-[#38bdf8]/70">CALIBRATION: {m.trend}</div>
              </div>
            ))}
          </section>

          {/* 4. Schematic Modules */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            {content.features.map((f, i) => (
              <div key={i} className="border border-[#38bdf8]/30 p-4 space-y-3 bg-[#0a1832]/40 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] text-[#facc15]">
                    <span>MOD_0{i + 1}</span>
                    <span>[{f.tag}]</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mt-2">{f.title}</h3>
                  <p className="text-xs text-[#93c5fd] mt-1.5 leading-relaxed font-sans">{f.description}</p>
                </div>
                <div className="pt-3 border-t border-[#38bdf8]/20 text-[10px] text-[#38bdf8] font-bold">
                  {f.actionText.toUpperCase()} →
                </div>
              </div>
            ))}
          </section>

          {/* 5. Engineering Newsletter & Title Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 border-t border-[#38bdf8]/30">
            <div className="border border-[#38bdf8]/30 p-4 space-y-2 bg-[#0c1e3d]/40">
              <div className="text-xs font-bold text-white uppercase">{content.newsletter.heading}</div>
              <p className="text-xs text-[#93c5fd] font-sans">{content.newsletter.subtext}</p>
              <form onSubmit={handleSubscribe} className="flex gap-2 pt-2">
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENGINEER@ORGANIZATION.COM"
                  className="flex-1 bg-[#081326] border border-[#38bdf8]/40 px-3 py-1.5 text-xs text-white outline-none focus:border-[#facc15]"
                />
                <button type="submit" className="px-4 py-1.5 bg-[#facc15] text-[#081326] text-xs font-black hover:bg-[#fde047]">
                  {subscribed ? 'VERIFIED' : 'SUBSCRIBE'}
                </button>
              </form>
            </div>

            {/* Official Title Block */}
            <div className="border border-[#38bdf8] p-3 text-[10px] bg-[#0a1832] grid grid-cols-2 gap-2">
              <div>
                <span className="text-[#38bdf8]/70">PROJECT:</span>
                <div className="font-bold text-white">{content.brand.name} PLATFORM</div>
              </div>
              <div>
                <span className="text-[#38bdf8]/70">DWG NO:</span>
                <div className="font-bold text-[#facc15]">PLS-TELEMETRY-2026</div>
              </div>
              <div>
                <span className="text-[#38bdf8]/70">SCALE:</span>
                <div className="font-bold text-white">1:1 FULL ARCH</div>
              </div>
              <div>
                <span className="text-[#38bdf8]/70">REVISION:</span>
                <div className="font-bold text-white">REV 2.4 APPROVED</div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#38bdf8]/20 flex justify-between text-[9px] text-[#38bdf8]/60">
            <span>{content.footer.copyright}</span>
            <span>{content.footer.statusText}</span>
          </div>

        </div>
      </div>
    </div>
  );
}
