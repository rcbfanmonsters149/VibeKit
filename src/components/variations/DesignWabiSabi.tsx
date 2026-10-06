'use client';
import React, { useState } from 'react';
import { COMPARISON_CONTENT } from '@/data/comparisonContent';
import { ArrowRight, Play, Compass, Feather, Wind, Leaf } from 'lucide-react';

export default function DesignWabiSabi() {
  const content = COMPARISON_CONTENT;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="w-full min-h-full bg-[#f8f6f0] text-[#262422] font-serif selection:bg-[#c2704a]/20 p-4 sm:p-8 md:p-12 space-y-16">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* 1. Serene Wabi-Sabi Header */}
        <header className="border-b border-[#e2ded4] pb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full border border-[#8f8578] flex items-center justify-center text-xs text-[#8f8578]">
              侘
            </span>
            <span className="text-lg tracking-widest uppercase font-sans font-medium text-[#262422]">
              {content.brand.name}
            </span>
            <span className="text-[11px] font-sans text-[#787168] italic tracking-normal ml-2">
              — {content.brand.tagline}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-sans text-xs tracking-wider uppercase text-[#787168]">
            {content.navigation.links.map((link, i) => (
              <a key={i} href={link.href} className="hover:text-[#262422] transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <button className="font-sans text-xs uppercase tracking-widest px-4 py-2 border border-[#262422] text-[#262422] hover:bg-[#262422] hover:text-[#f8f6f0] transition-colors duration-300">
            {content.navigation.primaryCtaText}
          </button>
        </header>

        {/* 2. Contemplative Hero */}
        <section className="text-center py-8 sm:py-16 space-y-8">
          <div className="inline-block text-[11px] font-sans tracking-widest uppercase text-[#787168] pb-1 border-b border-[#c2704a]">
            {content.hero.pillBadge}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1c1a18] leading-[1.15] max-w-3xl mx-auto italic">
            {content.hero.headline}
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#615a52] max-w-xl mx-auto leading-relaxed font-light">
            {content.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 font-sans text-xs tracking-widest uppercase">
            <button className="px-8 py-3.5 bg-[#262422] text-[#f8f6f0] hover:bg-[#3f3b37] transition duration-300">
              {content.hero.primaryCta}
            </button>
            <button className="px-8 py-3.5 border border-[#8f8578] text-[#262422] hover:border-[#262422] transition duration-300">
              {content.hero.secondaryCta}
            </button>
          </div>

          <div className="font-sans text-[11px] text-[#8f8578] tracking-wider pt-2">
            {content.hero.trustText}
          </div>
        </section>

        {/* Decorative Sumi Ink Brush Divider */}
        <div className="flex items-center justify-center gap-4 text-[#8f8578]/40">
          <div className="h-px w-24 bg-[#8f8578]/30" />
          <Leaf className="w-4 h-4 text-[#3f4e3f]" />
          <div className="h-px w-24 bg-[#8f8578]/30" />
        </div>

        {/* 3. Quiet Metrics Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-y border-[#e2ded4]">
          {content.metrics.map((m, i) => (
            <div key={i} className="text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-light text-[#1c1a18] italic">{m.value}</div>
              <div className="font-sans text-xs tracking-widest uppercase text-[#787168]">{m.label}</div>
              <div className="font-sans text-[10px] text-[#c2704a] font-medium">{m.trend}</div>
            </div>
          ))}
        </section>

        {/* 4. Craft Modules / Features */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-light italic text-[#1c1a18]">Essential Elements</h2>
            <p className="font-sans text-xs tracking-widest uppercase text-[#8f8578] mt-1">Built with patience & intention</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.features.map((f, i) => (
              <div key={i} className="p-6 border border-[#e2ded4] bg-[#faf8f4] space-y-3 flex flex-col justify-between">
                <div>
                  <span className="font-sans text-[10px] tracking-widest uppercase text-[#c2704a]">
                    0{i + 1} // {f.tag}
                  </span>
                  <h3 className="text-lg font-normal italic text-[#1c1a18] mt-2">{f.title}</h3>
                  <p className="font-sans text-xs text-[#615a52] mt-2 leading-relaxed font-light">{f.description}</p>
                </div>
                <div className="font-sans text-xs uppercase tracking-widest text-[#262422] pt-4 border-t border-[#e2ded4] hover:text-[#c2704a] transition cursor-pointer">
                  {f.actionText} →
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Minimal Newsletter */}
        <section className="p-8 border border-[#e2ded4] bg-[#faf8f4] text-center space-y-4">
          <h3 className="text-xl font-light italic text-[#1c1a18]">{content.newsletter.heading}</h3>
          <p className="font-sans text-xs text-[#787168] max-w-md mx-auto">{content.newsletter.subtext}</p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto font-sans text-xs">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.newsletter.placeholder}
              className="px-4 py-2.5 bg-white border border-[#e2ded4] outline-none text-[#262422] flex-1"
            />
            <button type="submit" className="px-6 py-2.5 bg-[#262422] text-[#f8f6f0] uppercase tracking-widest hover:bg-[#3f3b37] transition">
              {subscribed ? 'Acknowledged' : content.newsletter.buttonText}
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="font-sans text-[11px] text-[#8f8578] flex flex-wrap justify-between items-center pt-8 border-t border-[#e2ded4]">
          <div>{content.footer.copyright}</div>
          <div>{content.footer.statusText}</div>
        </footer>

      </div>
    </div>
  );
}
