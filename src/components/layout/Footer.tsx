import React from "react";
import Link from "next/link";
import { Sparkles, ArrowUpRight, Code2 } from "lucide-react";

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
            <li><a href="#gallery" className="hover:text-purple-400 transition">All 25 Designs</a></li>
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
