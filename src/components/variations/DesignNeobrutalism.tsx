'use client';
import React, { useState } from 'react';
import { COMPARISON_CONTENT } from '@/data/comparisonContent';
import { Sparkles, ArrowRight, Play, Cpu, Shield, Terminal, Star } from 'lucide-react';

export default function DesignNeobrutalism() {
  const content = COMPARISON_CONTENT;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const getIcon = (type: string) => {
    switch (type) {
      case 'cpu': return <Cpu className="w-5 h-5 text-black stroke-[2.5]" />;
      case 'shield': return <Shield className="w-5 h-5 text-black stroke-[2.5]" />;
      case 'terminal': return <Terminal className="w-5 h-5 text-black stroke-[2.5]" />;
      default: return <Sparkles className="w-5 h-5 text-black stroke-[2.5]" />;
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="w-full min-h-full bg-[#fffdf0] text-black font-sans selection:bg-[#facc15] selection:text-black">
      {/* 1. Neobrutalist Header */}
      <header className="border-b-[3px] border-black bg-[#fef08a] sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-18 py-2 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-black flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_#facc15] sm:shadow-[3px_3px_0px_0px_#facc15] shrink-0">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#facc15] stroke-[2.5]" />
            </div>
            <span className="font-black text-base sm:text-xl tracking-tight text-black truncate">{content.brand.name}</span>
            <span className="hidden sm:inline-block text-xs font-black uppercase text-black px-2.5 py-0.5 rounded-md bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
              {content.brand.versionBadge}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-xs font-black uppercase tracking-wider text-black">
            {content.navigation.links.map((link, i) => (
              <a key={i} href={link.href} className="hover:underline decoration-2 underline-offset-4">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden sm:inline-block text-xs font-black uppercase tracking-wider px-3 py-1.5 border-2 border-transparent hover:border-black rounded transition">
              {content.navigation.signInText}
            </button>
            <button className="text-xs font-black uppercase tracking-wider bg-[#38bdf8] text-black px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition whitespace-nowrap">
              {content.navigation.primaryCtaText}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-12 sm:space-y-16">
        {/* 2. Neobrutalist Hero Block */}
        <section className="p-6 sm:p-12 rounded-2xl bg-white border-[3px] border-black shadow-[5px_5px_0px_0px_#000] sm:shadow-[8px_8px_0px_0px_#000] text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#fbcfe8] border-2 border-black shadow-[2px_2px_0px_0px_#000] text-[10px] sm:text-xs font-black uppercase text-black">
            <span className="w-2 h-2 rounded-full bg-black shrink-0" />
            <span>{content.hero.pillBadge}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black leading-tight max-w-3xl mx-auto break-words">
            {content.hero.headline}
          </h1>

          <p className="text-xs sm:text-base text-black/80 font-bold max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            {content.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            <button className="inline-flex items-center justify-center gap-2 bg-[#facc15] hover:bg-[#eab308] text-black text-xs sm:text-sm font-black uppercase px-6 py-3 sm:py-3.5 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_#000] sm:shadow-[5px_5px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all w-full sm:w-auto">
              <span>{content.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-[#86efac] hover:bg-[#4ade80] text-black text-xs sm:text-sm font-black uppercase px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_#000] sm:shadow-[5px_5px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all w-full sm:w-auto">
              <Play className="w-4 h-4 fill-black text-black" />
              <span>{content.hero.secondaryCta}</span>
            </button>
          </div>

          <p className="text-[10px] sm:text-xs font-black text-black/70 pt-1 tracking-wide px-2">
            {content.hero.trustText}
          </p>
        </section>

        {/* 3. Neobrutalist Metrics Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {content.metrics.map((m, i) => {
            const colors = ['bg-[#c7d2fe]', 'bg-[#fed7aa]', 'bg-[#bbf7d0]', 'bg-[#fbcfe8]'];
            return (
              <div 
                key={i} 
                className={`p-3.5 sm:p-5 rounded-xl ${colors[i % colors.length]} border-[3px] border-black shadow-[3px_3px_0px_0px_#000] sm:shadow-[5px_5px_0px_0px_#000] space-y-1`}
              >
                <div className="text-xl sm:text-3xl font-black text-black tracking-tight">{m.value}</div>
                <div className="text-[10px] sm:text-xs font-black uppercase tracking-wide text-black/80 truncate">{m.label}</div>
                <div className="text-[10px] sm:text-xs font-mono font-black text-black">{m.trend}</div>
              </div>
            );
          })}
        </section>

        {/* 4. Neobrutalist Feature Cards */}
        <section className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
            {content.features.map((feat, i) => {
              const bgColors = ['bg-[#e0e7ff]', 'bg-[#fef08a]', 'bg-[#ddd6fe]'];
              return (
                <div
                  key={i}
                  className={`p-5 sm:p-6 rounded-2xl ${bgColors[i % bgColors.length]} border-[3px] border-black shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between`}
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000] flex items-center justify-center shrink-0">
                      {getIcon(feat.iconType)}
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-black bg-white px-2 py-0.5 rounded border border-black inline-block mb-1 sm:mb-2">
                        {feat.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-black tracking-tight">
                        {feat.title}
                      </h3>
                    </div>
                    <p className="text-xs font-bold text-black/80 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div className="pt-4 sm:pt-6">
                    <button className="text-xs font-black text-black bg-white hover:bg-black hover:text-white px-3 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all">
                      {feat.actionText}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. Neobrutalist Testimonial */}
        <section className="p-5 sm:p-8 rounded-2xl bg-[#fed7aa] border-[3px] border-black shadow-[4px_4px_0px_0px_#000] sm:shadow-[6px_6px_0px_0px_#000] max-w-3xl mx-auto text-center space-y-3 sm:space-y-4">
          <div className="flex items-center justify-center gap-1 text-black font-black text-xs">
            <Star className="w-4 h-4 fill-black" />
            <span>{content.testimonial.ratingText}</span>
          </div>
          <blockquote className="text-sm sm:text-base lg:text-lg font-black text-black leading-snug px-2 sm:px-0">
            &ldquo;{content.testimonial.quote}&rdquo;
          </blockquote>
          <div className="pt-1">
            <div className="text-xs sm:text-sm font-black text-black">{content.testimonial.author}</div>
            <div className="text-[11px] sm:text-xs font-bold text-black/75">{content.testimonial.role}</div>
          </div>
        </section>

        {/* 6. Neobrutalist Action Box */}
        <section className="rounded-2xl bg-[#bfdbfe] border-[3px] border-black shadow-[4px_4px_0px_0px_#000] sm:shadow-[7px_7px_0px_0px_#000] p-5 sm:p-8 text-center max-w-xl mx-auto space-y-3 sm:space-y-4">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-black text-black tracking-tight">{content.newsletter.heading}</h3>
            <p className="text-xs font-bold text-black/80">{content.newsletter.subtext}</p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 max-w-md mx-auto pt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={content.newsletter.placeholder}
              className="flex-1 px-4 py-2.5 text-xs font-bold bg-white border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000] focus:outline-none text-black placeholder:text-black/50"
              required
            />
            <button
              type="submit"
              className="bg-[#facc15] hover:bg-[#eab308] text-black text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] sm:shadow-[3px_3px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none whitespace-nowrap transition-all w-full sm:w-auto"
            >
              {subscribed ? "Confirmed" : content.newsletter.buttonText}
            </button>
          </form>
        </section>
      </main>

      {/* 7. Neobrutalist Footer */}
      <footer className="border-t-[3px] border-black mt-12 sm:mt-20 py-6 sm:py-8 bg-[#fef08a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs font-black text-black uppercase tracking-wider text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <span>{content.footer.copyright}</span>
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-black text-black bg-[#86efac] px-2.5 py-0.5 rounded border-2 border-black shadow-[2px_2px_0px_0px_#000]">
              <span className="w-2 h-2 rounded-full bg-black" />
              {content.footer.statusText}
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {content.footer.links.map((link, i) => (
              <a key={i} href={link.href} className="hover:underline decoration-2">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
