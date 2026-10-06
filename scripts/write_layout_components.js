const fs = require('fs');
const path = require('path');
const baseDir = 'C:\\Create_websites\\VibeKit';

// 1. src/components/layout/Navbar.tsx
const navbarCode = `"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Terminal, BookOpen, Layers, Search, Github, Zap } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#090a0f]/85 border-b border-white/10 px-4 sm:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0d0e15] rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-purple-400 group-hover:text-cyan-300 transition-colors" />
            </div>
          </div>
          <div>
            <span className="font-heading font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-purple-400">
              VibeKit
            </span>
            <span className="ml-2 text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
              v1.0
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium text-zinc-300">
          <Link href="/" className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition flex items-center space-x-1.5">
            <Layers className="w-4 h-4 text-purple-400" />
            <span>Design Gallery</span>
          </Link>
          <Link href="/prompts" className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition flex items-center space-x-1.5">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Prompt Playbook</span>
          </Link>
          <a href="#categories" className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-white/5 transition">
            Categories
          </a>
        </nav>

        {/* Action Button & Badges */}
        <div className="flex items-center space-x-3">
          <Link
            href="/prompts"
            className="hidden sm:inline-flex items-center space-x-2 text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md shadow-purple-600/25 transition"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>Vibecoding Guide</span>
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
`;

// 2. src/components/layout/Footer.tsx
const footerCode = `import React from "react";
import Link from "next/link";
import { Sparkles, Heart, Github, Twitter, Code2, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06070a] pt-16 pb-12 px-4 sm:px-8 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/5">
        {/* Brand Col */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-heading font-bold text-lg text-white">VibeKit</span>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-sm leading-relaxed">
            The curated frontend gallery & prompt engine built for vibecoders. Discover iconic UI patterns, copy battle-tested AI prompts, and ship high-end web apps in record time.
          </p>
          <div className="text-xs text-zinc-500 font-mono">
            Optimized for Cursor • v0.dev • Bolt.new • Claude Code • Lovable
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-4 font-mono">Navigation</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li><Link href="/" className="hover:text-purple-400 transition">Design Gallery</Link></li>
            <li><Link href="/prompts" className="hover:text-purple-400 transition">Prompt Playbook</Link></li>
            <li><a href="#categories" className="hover:text-purple-400 transition">Browse by Category</a></li>
            <li><a href="#trending" className="hover:text-purple-400 transition">Trending Templates</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-4 font-mono">Popular Styles</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li><span className="hover:text-purple-400 transition cursor-pointer">Linear Dark Nebula</span></li>
            <li><span className="hover:text-purple-400 transition cursor-pointer">Stripe Glow Tiers</span></li>
            <li><span className="hover:text-purple-400 transition cursor-pointer">Apple Storytelling</span></li>
            <li><span className="hover:text-purple-400 transition cursor-pointer">Modular Bento Grids</span></li>
          </ul>
        </div>

        {/* AI Tools */}
        <div>
          <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-4 font-mono">AI Ecosystem</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            <li className="flex items-center space-x-1.5"><span className="hover:text-purple-400 transition">Cursor IDE</span><ArrowUpRight className="w-3 h-3 text-zinc-600" /></li>
            <li className="flex items-center space-x-1.5"><span className="hover:text-purple-400 transition">v0 by Vercel</span><ArrowUpRight className="w-3 h-3 text-zinc-600" /></li>
            <li className="flex items-center space-x-1.5"><span className="hover:text-purple-400 transition">Bolt.new</span><ArrowUpRight className="w-3 h-3 text-zinc-600" /></li>
            <li className="flex items-center space-x-1.5"><span className="hover:text-purple-400 transition">Claude Code</span><ArrowUpRight className="w-3 h-3 text-zinc-600" /></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
        <div>© 2026 VibeKit • Curated with pride for the global vibecoding community</div>
        <div className="flex items-center space-x-2">
          <span>Crafted for high-velocity software creators</span>
        </div>
      </div>
    </footer>
  );
}
`;

fs.writeFileSync(path.join(baseDir, 'src/components/layout/Navbar.tsx'), navbarCode, 'utf8');
fs.writeFileSync(path.join(baseDir, 'src/components/layout/Footer.tsx'), footerCode, 'utf8');
console.log('Saved Navbar and Footer components');
