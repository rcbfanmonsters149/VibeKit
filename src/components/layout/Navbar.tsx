"use client";
import React from "react";
import Link from "next/link";
import { Sparkles, Terminal, BookOpen, Layers, Zap, Code2 } from "lucide-react";

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
          <Link
            href="/prompts"
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition"
            title="Code Playground"
          >
            <Code2 className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
