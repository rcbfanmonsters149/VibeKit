'use client';
import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, MousePointerClick, Copy, Rocket, Check } from 'lucide-react';

export default function WorkflowSection() {
  const steps = [
    {
      num: '01',
      title: 'Pick Visual Archetype',
      badge: 'EXPLORE & COMPARE',
      badgeColor: '#fef08a',
      description: 'Review 12 distinct design systems side-by-side. Inspect live split-screen comparisons across desktop, tablet, and mobile breakpoints.',
      icon: <MousePointerClick className="w-6 h-6 text-black stroke-[2.5]" />,
      snippet: 'Select: Neobrutalism / VisionOS / Retro Y2K'
    },
    {
      num: '02',
      title: 'Copy Master AI Prompt',
      badge: '1-CLICK EXPORT',
      badgeColor: '#38bdf8',
      description: 'Grab tailor-made prompts engineered for Cursor, Claude Code, and v0 with exact color hexes, font pairings, and component schemas.',
      icon: <Copy className="w-6 h-6 text-black stroke-[2.5]" />,
      snippet: 'cursorPrompt: "Build Next.js 15 page with..."'
    },
    {
      num: '03',
      title: 'Ship In Record Time',
      badge: 'PRODUCTION READY',
      badgeColor: '#4ade80',
      description: 'Paste into your AI coding tool and watch it construct a production-ready Next.js 15 app with zero style guesswork and zero rework.',
      icon: <Rocket className="w-6 h-6 text-black stroke-[2.5]" />,
      snippet: '✓ 100% TypeScript + Tailwind + Responsive'
    }
  ];

  return (
    <section id="workflow" className="py-16 sm:py-24 bg-[#fffdf2] border-b-[3px] border-black select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f472b6] border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-black uppercase text-black">
            <Sparkles className="w-3.5 h-3.5 text-black stroke-[2.5]" />
            <span>The Vibecoding Method</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-black uppercase tracking-tight">
            How Vibecoders Ship 10x Faster.
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 font-medium">
            Skip the endless prompt tweaking and design debates. Follow our simple 3-step pipeline to transform your ideas into iconic frontend software.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-3xl border-[3px] border-black bg-white p-6 sm:p-8 shadow-[6px_6px_0px_#000] flex flex-col justify-between space-y-6 hover:-translate-y-1 transition-transform"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl sm:text-5xl font-black font-heading text-black/20">
                    {step.num}
                  </span>
                  <span 
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase border border-black shadow-[1px_1px_0px_#000]"
                    style={{ backgroundColor: step.badgeColor }}
                  >
                    {step.badge}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-[#fffdf0] border-2 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center">
                  {step.icon}
                </div>

                <h3 className="text-xl font-black font-heading text-black uppercase">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950 text-[#4ade80] font-mono text-[11px] border border-black truncate">
                {step.snippet}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="text-center pt-4">
          <Link
            href="/studio"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#facc15] hover:bg-[#eab308] border-[3px] border-black shadow-[6px_6px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none text-sm sm:text-base font-black uppercase text-black tracking-wide transition"
          >
            <span>Start Exploring Frontend Designs Now</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
