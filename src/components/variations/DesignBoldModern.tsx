'use client';
import React, { useState } from 'react';
import { COMPARISON_CONTENT } from '@/data/comparisonContent';
import { Sparkles, ArrowRight, Play, Cpu, Shield, Terminal, Star, Flame, Zap } from 'lucide-react';

export default function DesignBoldModern() {
  const content = COMPARISON_CONTENT;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const getIcon = (type: string) => {
    switch (type) {
      case 'cpu': return <Cpu className="w-5 h-5 text-[#ff5722] stroke-[2.5]" />;
      case 'shield': return <Shield className="w-5 h-5 text-[#ff5722] stroke-[2.5]" />;
      case 'terminal': return <Terminal className="w-5 h-5 text-[#ff5722] stroke-[2.5]" />;
      default: return <Flame className="w-5 h-5 text-[#ff5722] stroke-[2.5]" />;
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="w-full min-h-full bg-[#0a0a0d] text-zinc-100 font-sans selection:bg-[#ff5722] selection:text-white">
      {/* 1. Bold Modern Header */}
      <header className="border-b-2 border-[#ff5722]/30 bg-[#111116] sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-18 py-2 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-tr from-[#ff3d00] to-[#ff6e40] flex items-center justify-center shadow-lg shadow-[#ff3d00]/40 shrink-0">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
            </div>
            <span className="font-black text-base sm:text-xl tracking-tight text-white uppercase truncate">{content.brand.name}</span>
            <span className="hidden sm:inline-block text-[11px] font-black uppercase text-[#ff9e80] px-2.5 py-0.5 rounded bg-[#ff3d00]/20 border border-[#ff3d00]/40">
              {content.brand.versionBadge}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-xs font-black uppercase tracking-wider text-zinc-400">
            {content.navigation.links.map((link, i) => (
              <a key={i} href={link.href} className="hover:text-[#ff6e40] transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden sm:inline-block text-xs font-bold uppercase tracking-wide text-zinc-300 hover:text-white px-3 py-2 transition">
              {content.navigation.signInText}
            </button>
            <button className="text-xs font-black uppercase tracking-wider bg-[#ff3d00] hover:bg-[#ff5722] text-white px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-lg shadow-lg shadow-[#ff3d00]/40 transition whitespace-nowrap">
              {content.navigation.primaryCtaText}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-12 sm:space-y-16">
        {/* 2. High-Impact Bold Hero */}
        <section className="text-center space-y-4 sm:space-y-6 pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#ff3d00]/20 border-2 border-[#ff3d00]/50 text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#ffab91]">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff3d00] animate-ping shrink-0" />
            <span>{content.hero.pillBadge}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-black tracking-tight text-white leading-tight sm:leading-[1.05] max-w-4xl mx-auto break-words">
            {content.hero.headline}
          </h1>

          <p className="text-xs sm:text-base lg:text-lg text-zinc-300 font-medium max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            {content.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            <button className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#ff3d00] to-[#ff6e40] hover:from-[#ff5722] text-white text-xs sm:text-sm font-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-xl shadow-[#ff3d00]/50 transition transform active:scale-95 w-full sm:w-auto">
              <span>{content.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
            <button className="inline-flex items-center justify-center gap-2.5 bg-[#17171f] hover:bg-[#20202b] border-2 border-zinc-700 text-white text-xs sm:text-sm font-bold px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl transition w-full sm:w-auto">
              <Play className="w-4 h-4 fill-white text-white" />
              <span>{content.hero.secondaryCta}</span>
            </button>
          </div>

          <p className="text-[10px] sm:text-xs font-black text-zinc-400 uppercase tracking-widest pt-1 px-2">
            {content.hero.trustText}
          </p>
        </section>

        {/* 3. High-Contrast Metrics Bento Row */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {content.metrics.map((m, i) => (
            <div 
              key={i} 
              className="p-4 sm:p-6 rounded-2xl bg-[#14141c] border-2 border-[#ff3d00]/25 hover:border-[#ff3d00]/60 transition space-y-1 sm:space-y-2 shadow-xl"
            >
              <div className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">{m.value}</div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#ff8a65] truncate">{m.label}</div>
              <div className="text-[10px] sm:text-xs font-mono font-bold text-emerald-400">{m.trend}</div>
            </div>
          ))}
        </section>

        {/* 4. Bold Feature Cards */}
        <section className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
            {content.features.map((feat, i) => (
              <div
                key={i}
                className="p-5 sm:p-7 rounded-2xl bg-[#14141c] border-2 border-zinc-800 hover:border-[#ff5722] transition flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#ff3d00]/15 border border-[#ff3d00]/40 flex items-center justify-center shrink-0">
                    {getIcon(feat.iconType)}
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#ff6e40] block mb-1">
                      {feat.tag}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6">
                  <span className="text-xs font-black uppercase tracking-wider text-[#ff6e40] hover:text-[#ff9e80] inline-flex items-center gap-1 cursor-pointer">
                    {feat.actionText}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Bold Testimonial Box */}
        <section className="p-5 sm:p-8 lg:p-10 rounded-2xl bg-gradient-to-r from-[#1c1414] via-[#14141c] to-[#1c1414] border-2 border-[#ff3d00]/40 max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 shadow-2xl">
          <div className="flex items-center justify-center gap-1 text-amber-400">
            <Star className="w-4 h-4 fill-amber-400" />
            <span className="font-black text-xs uppercase tracking-wider text-white">{content.testimonial.ratingText}</span>
          </div>
          <blockquote className="text-sm sm:text-lg lg:text-xl font-bold text-white leading-snug px-2 sm:px-0">
            &ldquo;{content.testimonial.quote}&rdquo;
          </blockquote>
          <div className="pt-1">
            <div className="text-xs sm:text-sm font-black text-[#ff8a65] uppercase tracking-wide">{content.testimonial.author}</div>
            <div className="text-[11px] sm:text-xs font-medium text-zinc-400">{content.testimonial.role}</div>
          </div>
        </section>

        {/* 6. Bold Action Form */}
        <section className="rounded-2xl bg-[#14141c] border-2 border-[#ff3d00] p-5 sm:p-8 lg:p-10 text-center max-w-xl mx-auto space-y-4 sm:space-y-5 shadow-2xl">
          <div className="space-y-1 sm:space-y-2">
            <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">{content.newsletter.heading}</h3>
            <p className="text-xs sm:text-sm font-medium text-zinc-300">{content.newsletter.subtext}</p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 max-w-md mx-auto pt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.newsletter.placeholder}
              className="flex-1 px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium bg-[#0a0a0d] border-2 border-zinc-700 focus:outline-none focus:border-[#ff5722] rounded-xl text-white placeholder:text-zinc-500"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#ff3d00] to-[#ff6e40] hover:from-[#ff5722] text-white text-xs sm:text-sm font-black uppercase tracking-wider px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-lg shadow-[#ff3d00]/50 whitespace-nowrap transition w-full sm:w-auto"
            >
              {subscribed ? "Confirmed" : content.newsletter.buttonText}
            </button>
          </form>
        </section>
      </main>

      {/* 7. Bold Footer */}
      <footer className="border-t-2 border-[#ff3d00]/30 mt-12 sm:mt-20 py-6 sm:py-8 bg-[#111116]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs font-bold text-zinc-400 uppercase tracking-wider text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <span>{content.footer.copyright}</span>
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-black text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-500/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              {content.footer.statusText}
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {content.footer.links.map((link, i) => (
              <a key={i} href={link.href} className="hover:text-white transition">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
