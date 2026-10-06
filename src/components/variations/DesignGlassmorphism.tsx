'use client';
import React, { useState } from 'react';
import { COMPARISON_CONTENT } from '@/data/comparisonContent';
import { Sparkles, ArrowRight, Play, Cpu, Shield, Terminal, Star } from 'lucide-react';

export default function DesignGlassmorphism() {
  const content = COMPARISON_CONTENT;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const getIcon = (type: string) => {
    switch (type) {
      case 'cpu': return <Cpu className="w-5 h-5 text-cyan-200 stroke-[1.75]" />;
      case 'shield': return <Shield className="w-5 h-5 text-fuchsia-200 stroke-[1.75]" />;
      case 'terminal': return <Terminal className="w-5 h-5 text-amber-200 stroke-[1.75]" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-200 stroke-[1.75]" />;
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="w-full min-h-full relative overflow-hidden bg-[#0a071b] text-white font-sans selection:bg-fuchsia-500/40">
      {/* 1. Geometric Grid Canvas Underlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      {/* 2. Vibrant Prismatic Aurora Orbs (Hardware Accelerated) */}
      <div 
        className="absolute -top-32 -left-20 w-[550px] h-[550px] rounded-full pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle at center, rgba(192,38,211,0.5) 0%, rgba(236,72,153,0.3) 40%, transparent 70%)'
        }}
      />
      <div 
        className="absolute top-1/4 -right-24 w-[520px] h-[520px] rounded-full pointer-events-none opacity-35"
        style={{
          background: 'radial-gradient(circle at center, rgba(34,211,238,0.4) 0%, rgba(79,70,229,0.2) 50%, transparent 70%)'
        }}
      />
      <div 
        className="absolute top-2/3 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(147,51,234,0.4) 0%, rgba(236,72,153,0.25) 50%, transparent 70%)'
        }}
      />
      <div 
        className="absolute -bottom-24 right-1/4 w-[480px] h-[480px] rounded-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at center, rgba(244,63,94,0.4) 0%, rgba(251,191,36,0.15) 50%, transparent 70%)'
        }}
      />

      {/* 3. Ultra-Refined Frosted Header */}
      <header className="sticky top-0 z-30 backdrop-blur-2xl bg-white/[0.07] border-b border-white/20 shadow-[inset_0_-1px_0_rgba(255,255,255,0.1),0_4px_30px_rgba(0,0,0,0.3)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 rounded-xl backdrop-blur-2xl bg-gradient-to-br from-white/30 via-white/10 to-transparent border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_16px_rgba(236,72,153,0.35)] flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-fuchsia-200" />
            </div>
            <span className="font-semibold text-sm sm:text-base tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              {content.brand.name}
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono text-fuchsia-100 px-2.5 py-0.5 rounded-full backdrop-blur-2xl bg-fuchsia-500/20 border border-fuchsia-300/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
              {content.brand.versionBadge}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs text-white/80 font-medium drop-shadow">
            {content.navigation.links.map((link, i) => (
              <a key={i} href={link.href} className="hover:text-white transition-all hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden sm:inline-block text-xs text-white/80 hover:text-white px-3 py-1.5 font-medium transition drop-shadow-sm">
              {content.navigation.signInText}
            </button>
            <button className="relative group text-xs text-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl font-semibold backdrop-blur-2xl bg-gradient-to-r from-fuchsia-500/85 via-pink-500/85 to-cyan-500/85 hover:brightness-110 border border-white/50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),0_0_20px_rgba(236,72,153,0.4)] transition whitespace-nowrap">
              {content.navigation.primaryCtaText}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-12 sm:space-y-16 relative z-10">
        {/* 4. Frosted Glass Hero Card */}
        <section className="relative p-6 sm:p-10 lg:p-14 rounded-3xl backdrop-blur-3xl bg-gradient-to-br from-white/[0.13] via-white/[0.06] to-white/[0.02] border border-white/25 border-t-white/50 border-l-white/35 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-1px_1px_rgba(255,255,255,0.1),0_20px_50px_rgba(0,0,0,0.45)] text-center space-y-4 sm:space-y-6 overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full backdrop-blur-2xl bg-white/15 border border-white/35 border-t-white/60 text-[11px] sm:text-xs text-fuchsia-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]">
            <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse shadow-[0_0_10px_#67e8f9] shrink-0" />
            <span className="font-medium tracking-wide">{content.hero.pillBadge}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight sm:leading-[1.14] bg-gradient-to-r from-white via-pink-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] break-words">
            {content.hero.headline}
          </h1>

          <p className="text-xs sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow px-2 sm:px-0">
            {content.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 pt-2 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            <button className="inline-flex items-center justify-center gap-2 backdrop-blur-3xl bg-gradient-to-r from-fuchsia-500/90 via-pink-500/90 to-cyan-500/90 hover:brightness-110 text-white text-xs sm:text-sm font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_8px_32px_rgba(236,72,153,0.5)] border border-white/50 transition w-full sm:w-auto">
              <span>{content.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 backdrop-blur-2xl bg-white/[0.10] hover:bg-white/[0.18] border border-white/30 border-t-white/50 text-white text-xs sm:text-sm font-medium px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] transition w-full sm:w-auto">
              <Play className="w-3.5 h-3.5 text-cyan-300 fill-cyan-300" />
              <span>{content.hero.secondaryCta}</span>
            </button>
          </div>

          <p className="text-[11px] sm:text-xs text-white/60 pt-2 font-mono drop-shadow-sm px-2">
            {content.hero.trustText}
          </p>
        </section>

        {/* 5. Crystalline Frosted Metrics */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {content.metrics.map((m, i) => (
            <div 
              key={i} 
              className="p-3.5 sm:p-5 rounded-2xl backdrop-blur-2xl bg-gradient-to-br from-white/[0.12] to-white/[0.03] border border-white/20 border-t-white/45 border-l-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_10px_30px_rgba(0,0,0,0.25)] space-y-1 sm:space-y-1.5 hover:bg-white/[0.16] transition"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-200 via-fuchsia-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-sm">
                {m.value}
              </div>
              <div className="text-[11px] sm:text-xs text-white/80 font-medium drop-shadow-sm truncate">{m.label}</div>
              <div className="text-[10px] sm:text-[11px] text-cyan-200 font-mono drop-shadow-sm">{m.trend}</div>
            </div>
          ))}
        </section>

        {/* 6. Multi-Layer Frosted Feature Cards */}
        <section className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
            {content.features.map((feat, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl backdrop-blur-3xl bg-gradient-to-br from-white/[0.11] via-white/[0.05] to-white/[0.02] border border-white/20 border-t-white/45 border-l-white/30 hover:border-white/45 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_12px_36px_rgba(0,0,0,0.3)] transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-3 sm:space-y-4 relative z-10">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl backdrop-blur-2xl bg-white/[0.18] border border-white/40 border-t-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] flex items-center justify-center shrink-0">
                    {getIcon(feat.iconType)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-200 tracking-wider uppercase block mb-1 drop-shadow-sm">
                      {feat.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight drop-shadow-sm">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-xs text-white/75 leading-relaxed font-normal drop-shadow-sm">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 relative z-10">
                  <span className="text-xs font-semibold text-pink-200 group-hover:text-cyan-200 inline-flex items-center gap-1 cursor-pointer transition drop-shadow-sm">
                    {feat.actionText}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Floating Frosted Acrylic Testimonial */}
        <section className="p-5 sm:p-8 lg:p-10 rounded-3xl backdrop-blur-3xl bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-white/[0.02] border border-white/25 border-t-white/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_16px_40px_rgba(0,0,0,0.35)] max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center gap-1 text-amber-300 text-xs">
            <Star className="w-4 h-4 fill-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
            <span className="font-mono text-xs text-white/90 drop-shadow">{content.testimonial.ratingText}</span>
          </div>
          <blockquote className="text-sm sm:text-base lg:text-lg text-white font-light italic leading-relaxed drop-shadow px-2 sm:px-0">
            &ldquo;{content.testimonial.quote}&rdquo;
          </blockquote>
          <div className="pt-1">
            <div className="text-xs font-semibold text-white drop-shadow-sm">{content.testimonial.author}</div>
            <div className="text-xs text-white/70 font-mono text-[11px] drop-shadow-sm">{content.testimonial.role}</div>
          </div>
        </section>

        {/* 8. Frosted Glass Newsletter Box */}
        <section className="rounded-3xl backdrop-blur-3xl bg-gradient-to-b from-white/[0.14] via-white/[0.06] to-white/[0.02] border border-white/30 border-t-white/60 p-5 sm:p-8 lg:p-10 text-center max-w-xl mx-auto space-y-3 sm:space-y-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_16px_45px_rgba(0,0,0,0.4)]">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight drop-shadow">{content.newsletter.heading}</h3>
            <p className="text-xs text-white/70 drop-shadow-sm">{content.newsletter.subtext}</p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto pt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.newsletter.placeholder}
              className="flex-1 px-4 py-2.5 text-xs rounded-xl backdrop-blur-2xl bg-white/[0.12] border border-white/35 border-t-white/50 focus:outline-none focus:border-cyan-300 text-white placeholder:text-white/50"
              required
            />
            <button
              type="submit"
              className="backdrop-blur-2xl bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-400 hover:to-pink-400 text-white text-xs px-5 py-2.5 rounded-xl font-semibold whitespace-nowrap border border-white/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_0_20px_rgba(236,72,153,0.45)] transition w-full sm:w-auto"
            >
              {subscribed ? "Confirmed" : content.newsletter.buttonText}
            </button>
          </form>
        </section>
      </main>

      {/* 9. Frosted Glass Footer */}
      <footer className="border-t border-white/20 mt-12 sm:mt-20 py-6 sm:py-8 backdrop-blur-2xl bg-white/[0.05]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-white/65 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <span>{content.footer.copyright}</span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-200 backdrop-blur-2xl bg-cyan-500/20 px-2.5 py-0.5 rounded-full border border-cyan-300/40">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
              {content.footer.statusText}
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {content.footer.links.map((link, i) => (
              <a key={i} href={link.href} className="hover:text-white transition drop-shadow-sm">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
