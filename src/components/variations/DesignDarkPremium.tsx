'use client';
import React, { useState } from 'react';
import { COMPARISON_CONTENT } from '@/data/comparisonContent';
import { Sparkles, ArrowRight, Play, Cpu, Shield, Terminal, Star, Crown } from 'lucide-react';

export default function DesignDarkPremium() {
  const content = COMPARISON_CONTENT;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const getIcon = (type: string) => {
    switch (type) {
      case 'cpu': return <Cpu className="w-4 h-4 text-amber-300 stroke-[1.5]" />;
      case 'shield': return <Shield className="w-4 h-4 text-amber-300 stroke-[1.5]" />;
      case 'terminal': return <Terminal className="w-4 h-4 text-amber-300 stroke-[1.5]" />;
      default: return <Crown className="w-4 h-4 text-amber-300 stroke-[1.5]" />;
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="w-full min-h-full bg-[#050507] text-zinc-100 font-sans selection:bg-amber-500/30 selection:text-amber-200 relative overflow-hidden">
      {/* Subtle Warm Champagne-Gold Ambient Lighting (Hardware Accelerated) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.2) 0%, rgba(202,138,4,0.08) 45%, transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-10 right-10 w-[450px] h-[300px] rounded-full pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(180,83,9,0.2) 0%, transparent 70%)'
        }}
      />

      {/* 1. Dark Premium Header */}
      <header className="border-b border-amber-500/15 bg-[#07070a]/90 backdrop-blur-2xl sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 via-amber-600 to-yellow-700 p-[1px] shadow-lg shadow-amber-950/40 shrink-0">
              <div className="w-full h-full bg-[#0a0a0e] rounded-[7px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
            </div>
            <span className="font-semibold text-sm sm:text-base tracking-tight text-white truncate">{content.brand.name}</span>
            <span className="hidden sm:inline-block text-[10px] font-mono tracking-wider text-amber-200/90 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/25 shadow-[0_0_10px_rgba(245,158,11,0.15)]">
              {content.brand.versionBadge}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
            {content.navigation.links.map((link, i) => (
              <a key={i} href={link.href} className="hover:text-amber-200 transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden sm:inline-block text-xs text-zinc-400 hover:text-white px-3 py-1.5 font-medium transition duration-200">
              {content.navigation.signInText}
            </button>
            <button className="relative group text-xs text-black px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold transition overflow-hidden bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:brightness-110 shadow-[0_0_20px_rgba(245,158,11,0.3)] whitespace-nowrap">
              <span>{content.navigation.primaryCtaText}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-12 sm:space-y-16 relative z-10">
        {/* 2. Sophisticated Obsidian & Gold Hero */}
        <section className="text-center space-y-4 sm:space-y-6 max-w-3xl mx-auto pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101017] border border-amber-400/20 text-[10px] sm:text-xs text-zinc-300 shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.9)] shrink-0" />
            <span className="font-mono text-[10px] sm:text-[11px] tracking-wide text-amber-200/80">{content.hero.pillBadge}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight sm:leading-[1.12] text-white break-words">
            {content.hero.headline}
          </h1>

          <p className="text-xs sm:text-base text-zinc-400 font-normal max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            {content.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 pt-2 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:brightness-110 text-black text-xs sm:text-sm font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-[0_0_30px_rgba(245,158,11,0.35)] border border-amber-300/40 transition transform active:scale-95 w-full sm:w-auto">
              <span>{content.hero.primaryCta}</span>
              <ArrowRight className="w-3.5 h-3.5 text-black stroke-[2.5]" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-[#0e0e14] hover:bg-[#14141c] border border-amber-400/20 hover:border-amber-400/40 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl transition w-full sm:w-auto">
              <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>{content.hero.secondaryCta}</span>
            </button>
          </div>

          <p className="text-[10px] sm:text-xs text-zinc-500 pt-1 font-mono tracking-tight px-2">
            {content.hero.trustText}
          </p>
        </section>

        {/* 3. Dark Premium Metrics Bar */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {content.metrics.map((m, i) => (
            <div 
              key={i} 
              className="p-3.5 sm:p-5 rounded-xl bg-[#0a0a0f] border border-amber-500/15 hover:border-amber-400/35 transition duration-300 space-y-1 sm:space-y-1.5 relative overflow-hidden group shadow-lg"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight font-mono group-hover:text-amber-200 transition">
                {m.value}
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-400 truncate">{m.label}</div>
              <div className="text-[10px] sm:text-[11px] font-mono text-emerald-400/90">{m.trend}</div>
            </div>
          ))}
        </section>

        {/* 4. Dark Premium Feature Cards */}
        <section className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
            {content.features.map((feat, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl bg-[#090a0e] border border-amber-500/15 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                <div className="space-y-3 sm:space-y-4 relative z-10">
                  <div className="w-9 h-9 rounded-lg bg-[#12121a] border border-amber-400/25 flex items-center justify-center shrink-0">
                    {getIcon(feat.iconType)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase block mb-1">
                      {feat.tag}
                    </span>
                    <h3 className="text-base font-medium text-white tracking-tight group-hover:text-amber-100 transition">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 relative z-10">
                  <span className="text-xs font-medium text-amber-400 group-hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer transition">
                    {feat.actionText}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Dark Premium Testimonial */}
        <section className="p-5 sm:p-8 lg:p-10 rounded-2xl bg-gradient-to-b from-[#0e0e16] to-[#08080c] border border-amber-500/20 max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-center gap-1 text-amber-400 text-xs">
            <Star className="w-4 h-4 fill-amber-400" />
            <span className="font-mono text-xs text-amber-200/80">{content.testimonial.ratingText}</span>
          </div>
          <blockquote className="text-sm sm:text-base lg:text-lg text-zinc-200 italic font-light leading-relaxed px-2 sm:px-0">
            &ldquo;{content.testimonial.quote}&rdquo;
          </blockquote>
          <div className="pt-1">
            <div className="text-xs font-semibold text-white tracking-wide">{content.testimonial.author}</div>
            <div className="text-xs text-amber-300/70 font-mono text-[11px]">{content.testimonial.role}</div>
          </div>
        </section>

        {/* 6. Dark Premium Action Box */}
        <section className="rounded-2xl bg-[#090a0e] border border-amber-500/20 p-5 sm:p-8 lg:p-10 text-center max-w-xl mx-auto space-y-3 sm:space-y-4 relative overflow-hidden shadow-2xl">
          <div className="space-y-1 relative z-10">
            <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">{content.newsletter.heading}</h3>
            <p className="text-xs text-zinc-400">{content.newsletter.subtext}</p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto pt-2 relative z-10">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.newsletter.placeholder}
              className="flex-1 px-4 py-2.5 text-xs bg-[#101117] border border-amber-400/20 rounded-xl focus:outline-none focus:border-amber-400 text-white placeholder:text-zinc-500"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:brightness-110 text-black text-xs px-5 py-2.5 rounded-xl font-semibold shadow-[0_0_20px_rgba(245,158,11,0.3)] whitespace-nowrap transition w-full sm:w-auto"
            >
              {subscribed ? "Confirmed" : content.newsletter.buttonText}
            </button>
          </form>
        </section>
      </main>

      {/* 7. Dark Premium Footer */}
      <footer className="border-t border-amber-500/15 mt-12 sm:mt-20 py-6 sm:py-8 bg-[#040406]/90">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-zinc-500 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <span>{content.footer.copyright}</span>
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-amber-200/80 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {content.footer.statusText}
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {content.footer.links.map((link, i) => (
              <a key={i} href={link.href} className="hover:text-amber-200 transition">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
