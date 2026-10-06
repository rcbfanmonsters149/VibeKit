'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Menu, X, Rocket, Terminal, Flame } from 'lucide-react';

export default function LandingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fffef5] border-b-[3px] border-black select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-[#facc15] border-2 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center transition-transform group-hover:-rotate-3">
            <Sparkles className="w-5 h-5 text-black stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-black text-xl sm:text-2xl tracking-tight text-black font-heading">
                VIBEKIT
              </span>
              <span className="px-1.5 py-0.2 text-[9px] font-black uppercase bg-[#4ade80] text-black border border-black rounded shadow-[1px_1px_0px_#000]">
                v2.0
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold text-zinc-600 hidden sm:block">
              AI VIBECODING FRONTEND SUITE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-black uppercase tracking-wider text-black">
          <Link href="/canvas" className="hover:text-purple-600 transition flex items-center gap-1 text-purple-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Wireframe Canvas</span>
            <span className="px-1.5 py-0.2 text-[9px] bg-[#facc15] text-black border border-black rounded shadow-[1px_1px_0px_#000]">
              New
            </span>
          </Link>
          <a href="#features" className="hover:text-purple-600 transition">
            Features
          </a>
          <a href="#styles" className="hover:text-purple-600 transition">
            12 Styles
          </a>
          <a href="#future-features" className="hover:text-purple-600 transition flex items-center gap-1">
            <span>Roadmap</span>
            <span className="px-1.5 py-0.5 text-[9px] bg-[#fb923c] text-black border border-black rounded shadow-[1px_1px_0px_#000]">
              New
            </span>
          </a>
          <a href="#workflow" className="hover:text-purple-600 transition">
            How It Works
          </a>
          <Link href="/prompts" className="hover:text-purple-600 transition">
            AI Prompts
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/studio?tab=templates"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-black uppercase hover:bg-zinc-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition"
          >
            <Rocket className="w-3.5 h-3.5 text-black" />
            <span>Templates</span>
          </Link>

          <Link
            href="/studio"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#facc15] hover:bg-[#eab308] border-2 border-black shadow-[4px_4px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none text-xs sm:text-sm font-black uppercase text-black tracking-wide transition"
          >
            <span>Look at Frontend Designs</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white border-2 border-black shadow-[3px_3px_0px_#000] text-black active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-2 border-black bg-[#fef08a] p-5 space-y-4 font-black uppercase text-sm text-black">
          <div className="flex flex-col space-y-3">
            <Link 
              href="/canvas" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-[#facc15] rounded-lg border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-between"
            >
              <span>Wireframe-to-Prompt Canvas</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-black text-white font-mono">NEW</span>
            </Link>
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0px_#000]"
            >
              Platform Features
            </a>
            <a 
              href="#styles" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0px_#000]"
            >
              12 Design Archetypes
            </a>
            <a 
              href="#future-features" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0px_#000]"
            >
              Upcoming Feature Roadmap
            </a>
            <a 
              href="#workflow" 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-white rounded-lg border-2 border-black shadow-[2px_2px_0px_#000]"
            >
              How Vibecoding Works
            </a>
          </div>

          <div className="pt-2 border-t-2 border-black/20 flex flex-col gap-2.5">
            <Link
              href="/studio"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-[#38bdf8] text-black border-2 border-black shadow-[3px_3px_0px_#000] font-black uppercase text-xs"
            >
              Launch Frontend Design Studio ➔
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
