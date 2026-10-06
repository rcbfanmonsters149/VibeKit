'use client';
import React, { useState } from 'react';
import { COMPARISON_CONTENT } from '@/data/comparisonContent';
import { Sparkles, ArrowRight, Play, Cpu, Shield, Terminal, Star, Smile, Heart } from 'lucide-react';

export default function DesignClaymorphism() {
  const content = COMPARISON_CONTENT;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  // Custom Claymorphic Shadows
  const clayCard = "bg-[#f1f5f9] rounded-3xl p-6 shadow-[8px_8px_16px_#cbd5e1,-8px_-8px_16px_#ffffff,inset_3px_3px_6px_rgba(255,255,255,0.7),inset_-3px_-3px_6px_rgba(0,0,0,0.06)] border border-white/60";
  const clayButton = "bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl px-6 py-3 font-bold text-xs sm:text-sm shadow-[6px_6px_12px_#cbd5e1,-6px_-6px_12px_#ffffff,inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all";
  const clayPill = "bg-[#f8fafc] rounded-full px-4 py-1.5 text-xs font-semibold text-purple-700 shadow-[4px_4px_8px_#cbd5e1,-4px_-4px_8px_#ffffff,inset_2px_2px_4px_rgba(255,255,255,0.8)]";

  return (
    <div className="w-full min-h-full bg-[#e2e8f0] text-slate-800 font-sans p-4 sm:p-8 space-y-12 select-none">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* 1. Header Bar */}
        <header className={`${clayCard} flex flex-wrap items-center justify-between gap-4 py-4`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-[inset_2px_2px_4px_rgba(255,255,255,0.4),inset_-2px_-2px_4px_rgba(0,0,0,0.2)]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-slate-900">{content.brand.name}</span>
              <span className="ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                {content.brand.versionBadge}
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-600">
            {content.navigation.links.map((link, i) => (
              <a key={i} href={link.href} className="hover:text-purple-600 transition">
                {link.label}
              </a>
            ))}
          </nav>

          <button className={clayButton}>
            {content.navigation.primaryCtaText}
          </button>
        </header>

        {/* 2. Claymorphic Hero */}
        <section className={`${clayCard} text-center py-10 sm:py-16 px-6 sm:px-12 space-y-6`}>
          <div className="inline-flex items-center gap-2">
            <span className={clayPill}>
              ✨ {content.hero.pillBadge}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            {content.hero.headline}
          </h1>

          <p className="text-xs sm:text-base text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            {content.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button className={`${clayButton} flex items-center gap-2`}>
              <span>{content.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-white rounded-2xl px-6 py-3 font-bold text-xs sm:text-sm text-slate-700 shadow-[6px_6px_12px_#cbd5e1,-6px_-6px_12px_#ffffff] hover:scale-[1.02] active:scale-[0.98] transition flex items-center gap-2">
              <Play className="w-3.5 h-3.5 text-purple-600" />
              <span>{content.hero.secondaryCta}</span>
            </button>
          </div>

          <div className="text-[11px] font-medium text-slate-500 pt-2">
            {content.hero.trustText}
          </div>
        </section>

        {/* 3. Clay Metrics Cards */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {content.metrics.map((m, i) => (
            <div key={i} className={`${clayCard} text-center p-5`}>
              <div className="text-xs font-bold text-slate-500 uppercase">{m.label}</div>
              <div className="text-2xl sm:text-3xl font-black text-purple-600 my-1">{m.value}</div>
              <div className="text-[11px] font-bold text-emerald-600">{m.trend}</div>
            </div>
          ))}
        </section>

        {/* 4. Features Bento Clay Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.features.map((f, i) => (
            <div key={i} className={`${clayCard} flex flex-col justify-between space-y-4 hover:translate-y-[-2px] transition`}>
              <div>
                <span className={clayPill}>{f.tag}</span>
                <h3 className="text-base font-extrabold text-slate-900 mt-3">{f.title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">{f.description}</p>
              </div>

              <button className="text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1 self-start pt-2">
                <span>{f.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </section>

        {/* 5. Clay Newsletter Form */}
        <section className={`${clayCard} p-8 flex flex-col md:flex-row items-center justify-between gap-6`}>
          <div>
            <h3 className="text-lg font-black text-slate-900">{content.newsletter.heading}</h3>
            <p className="text-xs text-slate-600 mt-1 font-medium">{content.newsletter.subtext}</p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.newsletter.placeholder}
              className="px-4 py-3 rounded-2xl bg-[#f8fafc] text-xs font-medium text-slate-800 shadow-[inset_3px_3px_6px_#cbd5e1,inset_-3px_-3px_6px_#ffffff] outline-none min-w-[240px]"
            />
            <button type="submit" className={clayButton}>
              {subscribed ? '✓ Subscribed!' : content.newsletter.buttonText}
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs font-semibold text-slate-500 py-4">
          <div>{content.footer.copyright} • {content.footer.statusText}</div>
        </footer>

      </div>
    </div>
  );
}
