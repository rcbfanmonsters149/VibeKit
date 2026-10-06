'use client';
import React, { useState } from 'react';
import { COMPARISON_CONTENT } from '@/data/comparisonContent';
import { Sparkles, ArrowRight, Play, Cpu, Shield, Terminal, Star, Monitor, Folder, HardDrive, HelpCircle } from 'lucide-react';

export default function DesignRetroY2K() {
  const content = COMPARISON_CONTENT;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="w-full min-h-full bg-[#008080] text-black font-sans p-2 sm:p-4 md:p-6 select-none flex flex-col items-center">
      {/* Main Retro OS Window */}
      <div className="w-full max-w-5xl bg-[#c0c0c0] border-t-2 border-l-2 border-t-white border-l-white border-r-2 border-b-2 border-r-black border-b-black shadow-2xl flex flex-col overflow-hidden">
        
        {/* Windows 95 / 98 Title Bar */}
        <div className="bg-gradient-to-r from-[#000080] to-[#1084d0] px-2 py-1 flex items-center justify-between text-white font-bold text-xs sm:text-sm select-none">
          <div className="flex items-center gap-2">
            <Monitor className="w-4 h-4 text-white" />
            <span className="truncate">C:\PULSEOS\SYSTEM\{content.brand.name}.EXE - [Telemetry Suite]</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="w-4 h-4 bg-[#c0c0c0] text-black text-[10px] font-bold border-t border-l border-t-white border-l-white border-r border-b border-r-black border-b-black flex items-center justify-center active:border-t-black active:border-l-black active:border-r-white active:border-b-white">_</button>
            <button className="w-4 h-4 bg-[#c0c0c0] text-black text-[10px] font-bold border-t border-l border-t-white border-l-white border-r border-b border-r-black border-b-black flex items-center justify-center active:border-t-black active:border-l-black active:border-r-white active:border-b-white">□</button>
            <button className="w-4 h-4 bg-[#c0c0c0] text-black text-[10px] font-bold border-t border-l border-t-white border-l-white border-r border-b border-r-black border-b-black flex items-center justify-center active:border-t-black active:border-l-black active:border-r-white active:border-b-white">✕</button>
          </div>
        </div>

        {/* Menu Bar */}
        <div className="bg-[#c0c0c0] border-b border-b-[#808080] px-2 py-1 flex items-center gap-4 text-xs">
          <span className="hover:bg-[#000080] hover:text-white px-1.5 py-0.5 cursor-pointer"><u>F</u>ile</span>
          <span className="hover:bg-[#000080] hover:text-white px-1.5 py-0.5 cursor-pointer"><u>E</u>dit</span>
          <span className="hover:bg-[#000080] hover:text-white px-1.5 py-0.5 cursor-pointer"><u>V</u>iew</span>
          <span className="hover:bg-[#000080] hover:text-white px-1.5 py-0.5 cursor-pointer"><u>T</u>elemetry</span>
          <span className="hover:bg-[#000080] hover:text-white px-1.5 py-0.5 cursor-pointer"><u>H</u>elp</span>
        </div>

        {/* Navigation Toolbar */}
        <div className="bg-[#c0c0c0] p-2 border-b border-b-[#808080] flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold">{content.brand.name}</span>
            <span className="px-1 bg-white border border-[#808080] text-[10px] font-mono">{content.brand.versionBadge}</span>
          </div>

          <nav className="flex items-center gap-2">
            {content.navigation.links.map((link, i) => (
              <a 
                key={i} 
                href={link.href}
                className="px-2 py-1 bg-[#c0c0c0] border-t border-l border-t-white border-l-white border-r border-b border-r-black border-b-black hover:bg-[#d4d0c8] active:border-t-black active:border-l-black active:border-r-white active:border-b-white font-medium text-xs"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button className="px-3 py-1 bg-[#c0c0c0] border-t border-l border-t-white border-l-white border-r border-b border-r-black border-b-black font-bold text-xs hover:bg-[#d4d0c8]">
            {content.navigation.primaryCtaText}
          </button>
        </div>

        {/* Window Body Container */}
        <div className="p-4 sm:p-6 space-y-6 bg-[#d4d0c8] text-black">
          
          {/* Hero Banner Panel */}
          <div className="bg-white border-t-2 border-l-2 border-t-[#808080] border-l-[#808080] border-r-2 border-b-2 border-r-white border-b-white p-4 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#000080] text-white text-[11px] font-mono font-bold">
              <span>★</span>
              <span>{content.hero.pillBadge}</span>
            </div>

            <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-[#000080] leading-snug">
              {content.hero.headline}
            </h1>

            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-sans max-w-2xl">
              {content.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button className="px-4 py-2 bg-[#c0c0c0] border-t-2 border-l-2 border-t-white border-l-white border-r-2 border-b-2 border-r-black border-b-black font-bold text-xs hover:bg-[#e0e0e0] active:border-t-black active:border-l-black active:border-r-white active:border-b-white shadow-sm flex items-center gap-1.5">
                <span>{content.hero.primaryCta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button className="px-4 py-2 bg-[#c0c0c0] border-t-2 border-l-2 border-t-white border-l-white border-r-2 border-b-2 border-r-black border-b-black font-medium text-xs hover:bg-[#e0e0e0] flex items-center gap-1.5">
                <Play className="w-3.5 h-3.5" />
                <span>{content.hero.secondaryCta}</span>
              </button>
            </div>

            <div className="pt-2 text-[11px] font-mono text-[#808080]">
              {content.hero.trustText}
            </div>
          </div>

          {/* Metrics Status Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {content.metrics.map((m, i) => (
              <div 
                key={i}
                className="bg-[#c0c0c0] border-t-2 border-l-2 border-t-white border-l-white border-r-2 border-b-2 border-r-black border-b-black p-3"
              >
                <div className="text-[11px] text-[#404040] font-mono font-bold truncate">{m.label}</div>
                <div className="text-lg sm:text-xl font-mono font-black text-[#000080] my-1">{m.value}</div>
                <div className="text-[10px] font-mono bg-white border border-[#808080] px-1 py-0.5 inline-block">{m.trend}</div>
              </div>
            ))}
          </div>

          {/* Features Folders */}
          <div className="space-y-2">
            <div className="text-xs font-bold font-mono text-[#000080] flex items-center gap-1">
              <Folder className="w-4 h-4" />
              <span>SYSTEM CAPABILITIES / COMPONENT_EXPLORER</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {content.features.map((f, i) => (
                <div 
                  key={i}
                  className="bg-white border-t-2 border-l-2 border-t-[#808080] border-l-[#808080] border-r-2 border-b-2 border-r-white border-b-white p-4 space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#c0c0c0] border border-[#808080] font-bold">
                        {f.tag}
                      </span>
                      <HardDrive className="w-4 h-4 text-[#000080]" />
                    </div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#000080] mt-2">{f.title}</h3>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">{f.description}</p>
                  </div>

                  <button className="w-full mt-3 py-1 bg-[#c0c0c0] border-t border-l border-t-white border-l-white border-r border-b border-r-black border-b-black text-xs font-bold hover:bg-[#d0d0d0]">
                    {f.actionText} →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="bg-[#c0c0c0] border-t-2 border-l-2 border-t-white border-l-white border-r-2 border-b-2 border-r-black border-b-black p-4 space-y-3">
            <div className="font-bold text-xs sm:text-sm text-black">{content.newsletter.heading}</div>
            <p className="text-xs text-neutral-700">{content.newsletter.subtext}</p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={content.newsletter.placeholder}
                className="flex-1 px-2.5 py-1.5 text-xs bg-white border-t-2 border-l-2 border-t-[#808080] border-l-[#808080] border-r-2 border-b-2 border-r-white border-b-white font-mono outline-none"
              />
              <button 
                type="submit"
                className="px-4 py-1.5 bg-[#c0c0c0] border-t-2 border-l-2 border-t-white border-l-white border-r-2 border-b-2 border-r-black border-b-black font-bold text-xs hover:bg-[#d8d8d8]"
              >
                {subscribed ? '✓ Subscribed' : content.newsletter.buttonText}
              </button>
            </form>
          </div>

          {/* Testimonial Panel */}
          <div className="bg-white border-t-2 border-l-2 border-t-[#808080] border-l-[#808080] border-r-2 border-b-2 border-r-white border-b-white p-4">
            <div className="text-xs italic text-neutral-800 leading-relaxed">"{content.testimonial.quote}"</div>
            <div className="mt-2 text-xs font-bold text-[#000080]">
              — {content.testimonial.author}, <span className="font-normal text-neutral-600">{content.testimonial.role}</span>
            </div>
          </div>

        </div>

        {/* Windows Taskbar / Status Bar Footer */}
        <div className="bg-[#c0c0c0] border-t-2 border-t-white px-2 py-1 flex items-center justify-between text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#c0c0c0] border-t border-l border-t-white border-l-white border-r border-b border-r-black border-b-black font-black">
              Start
            </span>
            <span className="text-neutral-700">{content.footer.statusText}</span>
          </div>
          <div className="border-t border-l border-t-[#808080] border-l-[#808080] border-r border-b border-r-white border-b-white px-2 py-0.5 bg-white font-bold">
            12:00 PM
          </div>
        </div>

      </div>
    </div>
  );
}
