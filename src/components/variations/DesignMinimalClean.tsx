'use client';
import React, { useState } from 'react';
import { COMPARISON_CONTENT } from '@/data/comparisonContent';
import { Sparkles, ArrowRight, Play, Cpu, Shield, Terminal, Star } from 'lucide-react';

export default function DesignMinimalClean() {
  const content = COMPARISON_CONTENT;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const getIcon = (type: string) => {
    switch (type) {
      case 'cpu': return <Cpu className="w-4 h-4 stroke-[1.5] text-neutral-700" />;
      case 'shield': return <Shield className="w-4 h-4 stroke-[1.5] text-neutral-700" />;
      case 'terminal': return <Terminal className="w-4 h-4 stroke-[1.5] text-neutral-700" />;
      default: return <Sparkles className="w-4 h-4 stroke-[1.5] text-neutral-700" />;
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="w-full min-h-full bg-white text-neutral-900 font-sans selection:bg-neutral-200">
      {/* 1. Minimal Header */}
      <header className="border-b border-neutral-200/80 bg-white sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-7 h-7 rounded border border-neutral-300 flex items-center justify-center bg-neutral-50 shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-neutral-800 stroke-[1.5]" />
            </div>
            <span className="font-medium text-sm sm:text-base tracking-tight text-neutral-900 truncate">{content.brand.name}</span>
            <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-500 px-2 py-0.5 rounded border border-neutral-200 bg-neutral-50">
              {content.brand.versionBadge}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs text-neutral-500 font-normal">
            {content.navigation.links.map((link, i) => (
              <a key={i} href={link.href} className="hover:text-neutral-900 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden sm:inline-block text-xs text-neutral-600 hover:text-neutral-900 px-3 py-1.5 font-normal transition">
              {content.navigation.signInText}
            </button>
            <button className="text-xs bg-neutral-900 hover:bg-neutral-800 text-white px-3 sm:px-3.5 py-1.5 rounded-md font-normal transition whitespace-nowrap">
              {content.navigation.primaryCtaText}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-12 sm:space-y-20">
        {/* 2. Restrained Minimal Hero */}
        <section className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6 pt-2 sm:pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50/80 text-[11px] sm:text-xs text-neutral-600">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
            <span>{content.hero.pillBadge}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-neutral-900 leading-tight sm:leading-[1.15] break-words">
            {content.hero.headline}
          </h1>

          <p className="text-xs sm:text-base text-neutral-500 font-normal max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            {content.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 pt-2 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            <button className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs px-5 py-2.5 rounded-md font-medium transition w-full sm:w-auto">
              <span>{content.hero.primaryCta}</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[1.5]" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 border border-neutral-300 hover:border-neutral-400 bg-white text-neutral-700 text-xs px-5 py-2.5 rounded-md font-medium transition w-full sm:w-auto">
              <Play className="w-3.5 h-3.5 stroke-[1.5]" />
              <span>{content.hero.secondaryCta}</span>
            </button>
          </div>

          <p className="text-[11px] sm:text-xs text-neutral-400 pt-1 font-mono tracking-tight px-2">
            {content.hero.trustText}
          </p>
        </section>

        {/* 3. Minimal Metrics Bar */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 py-5 sm:py-8 border-y border-neutral-200/80">
          {content.metrics.map((m, i) => (
            <div key={i} className="text-left space-y-1 p-2 sm:p-0">
              <div className="text-xl sm:text-2xl font-light text-neutral-900 tracking-tight">{m.value}</div>
              <div className="text-[11px] sm:text-xs text-neutral-500 font-normal truncate">{m.label}</div>
              <div className="text-[10px] sm:text-[11px] text-neutral-400 font-mono">{m.trend}</div>
            </div>
          ))}
        </section>

        {/* 4. Minimal Features Cards */}
        <section className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {content.features.map((feat, i) => (
              <div 
                key={i} 
                className="p-5 sm:p-6 rounded-lg border border-neutral-200 bg-white hover:border-neutral-300 transition flex flex-col justify-between"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-8 h-8 rounded border border-neutral-200 bg-neutral-50 flex items-center justify-center shrink-0">
                    {getIcon(feat.iconType)}
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400 tracking-wider uppercase block mb-1">
                      {feat.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-medium text-neutral-900 tracking-tight">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6">
                  <span className="text-xs font-medium text-neutral-700 hover:text-neutral-900 inline-flex items-center gap-1 cursor-pointer">
                    {feat.actionText}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Minimal Testimonial */}
        <section className="p-5 sm:p-8 rounded-lg border border-neutral-200 bg-neutral-50/60 max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center gap-1 text-neutral-800 text-xs">
            <Star className="w-3.5 h-3.5 fill-neutral-800" />
            <span className="font-mono text-xs">{content.testimonial.ratingText}</span>
          </div>
          <blockquote className="text-sm sm:text-base text-neutral-700 italic font-normal leading-relaxed px-2">
            &ldquo;{content.testimonial.quote}&rdquo;
          </blockquote>
          <div className="pt-1">
            <div className="text-xs font-medium text-neutral-900">{content.testimonial.author}</div>
            <div className="text-[11px] sm:text-xs text-neutral-500">{content.testimonial.role}</div>
          </div>
        </section>

        {/* 6. Minimal Newsletter / Action Box */}
        <section className="border border-neutral-200 rounded-lg p-5 sm:p-8 text-center max-w-xl mx-auto space-y-3 sm:space-y-4">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-medium text-neutral-900 tracking-tight">{content.newsletter.heading}</h3>
            <p className="text-xs text-neutral-500 font-normal">{content.newsletter.subtext}</p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.newsletter.placeholder}
              className="flex-1 px-3 py-2 text-xs border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-500 text-neutral-900 placeholder:text-neutral-400"
              required
            />
            <button
              type="submit"
              className="bg-neutral-900 hover:bg-neutral-800 text-white text-xs px-4 py-2 rounded-md font-medium whitespace-nowrap transition w-full sm:w-auto"
            >
              {subscribed ? "Confirmed" : content.newsletter.buttonText}
            </button>
          </form>
        </section>
      </main>

      {/* 7. Minimal Footer */}
      <footer className="border-t border-neutral-200/80 mt-12 sm:mt-20 py-6 sm:py-8 bg-neutral-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-neutral-500 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <span>{content.footer.copyright}</span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {content.footer.statusText}
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {content.footer.links.map((link, i) => (
              <a key={i} href={link.href} className="hover:text-neutral-900 transition">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
