'use client';
import React, { useState } from 'react';
import { Palette, Copy, Check, Sparkles, Sliders, ShieldCheck } from 'lucide-react';

interface PaletteTheme {
  name: string;
  style: string;
  bg: string;
  surface: string;
  accent: string;
  text: string;
  border: string;
}

const THEMES: PaletteTheme[] = [
  {
    name: 'Windows Teal & Slate',
    style: 'Retro Y2K OS',
    bg: '#008080',
    surface: '#c0c0c0',
    accent: '#000080',
    text: '#000000',
    border: '#ffffff'
  },
  {
    name: 'Blueprint Cyan & Yellow',
    style: 'CAD Blueprint',
    bg: '#081326',
    surface: '#0a1832',
    accent: '#38bdf8',
    text: '#e0f2fe',
    border: '#1e3a5f'
  },
  {
    name: 'Pastel Lilac Clay',
    style: 'Claymorphism',
    bg: '#e2e8f0',
    surface: '#f1f5f9',
    accent: '#8b5cf6',
    text: '#1e293b',
    border: '#cbd5e1'
  },
  {
    name: 'Rice Paper & Terracotta',
    style: 'Wabi-Sabi Craft',
    bg: '#f8f6f0',
    surface: '#faf8f4',
    accent: '#c2704a',
    text: '#262422',
    border: '#e2ded4'
  },
  {
    name: 'Cosmic Spatial Glass',
    style: 'Spatial VisionOS',
    bg: '#030308',
    surface: 'rgba(255,255,255,0.06)',
    accent: '#06b6d4',
    text: '#ffffff',
    border: 'rgba(255,255,255,0.2)'
  },
  {
    name: 'Signal Red Bauhaus',
    style: 'Swiss Bauhaus',
    bg: '#f4f4f0',
    surface: '#ffffff',
    accent: '#e11d48',
    text: '#0a0a0a',
    border: '#0a0a0a'
  },
  {
    name: 'Abyssal Bioluminescent',
    style: 'Bioluminescent',
    bg: '#02050b',
    surface: '#061022',
    accent: '#00f0ff',
    text: '#e2f8ff',
    border: '#00f0ff'
  }
];

export default function PaletteLabView() {
  const [selectedTheme, setSelectedTheme] = useState<PaletteTheme>(THEMES[0]);
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const getTailwindConfig = () => `// tailwind.config.ts extension
export default {
  theme: {
    extend: {
      colors: {
        background: '${selectedTheme.bg}',
        surface: '${selectedTheme.surface}',
        accent: '${selectedTheme.accent}',
        foreground: '${selectedTheme.text}',
      }
    }
  }
};`;

  const getCssVars = () => `:root {
  --background: ${selectedTheme.bg};
  --surface: ${selectedTheme.surface};
  --accent: ${selectedTheme.accent};
  --foreground: ${selectedTheme.text};
}`;

  const handleCopy = (format: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  return (
    <div className="flex-1 h-full overflow-y-auto bg-[#07080e] p-4 sm:p-8 space-y-8 select-text">
      {/* Hero */}
      <div className="rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#101220] to-purple-950/40 border border-white/10 p-6 sm:p-10">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300 font-mono">
            <Palette className="w-3.5 h-3.5 text-cyan-400" />
            <span>Design Tokens & Palette Exporter</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Color Tokens & Theme Generator
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Inspect curated color palettes across all design styles and export ready-to-use Tailwind configurations and CSS custom properties.
          </p>
        </div>
      </div>

      {/* Palette Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {THEMES.map((theme) => {
          const isSelected = selectedTheme.name === theme.name;
          return (
            <button
              key={theme.name}
              onClick={() => setSelectedTheme(theme)}
              className={`p-4 rounded-2xl border text-left transition ${
                isSelected 
                  ? 'bg-white/10 border-purple-500 shadow-lg shadow-purple-950/30' 
                  : 'bg-[#0f111a] border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full border border-white/20" style={{ backgroundColor: theme.accent }} />
                <span className="w-5 h-5 rounded-full border border-white/20" style={{ backgroundColor: theme.bg }} />
                <span className="w-5 h-5 rounded-full border border-white/20" style={{ backgroundColor: theme.surface }} />
              </div>
              <div className="font-bold text-sm text-white">{theme.name}</div>
              <div className="text-[11px] text-zinc-400 mt-0.5">{theme.style}</div>
            </button>
          );
        })}
      </div>

      {/* Active Theme Preview & Exporters */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tailwind Config Export */}
        <div className="rounded-2xl bg-[#0f111a] border border-white/10 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-sm text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Tailwind Config Snippet</span>
            </div>
            <button
              onClick={() => handleCopy('tailwind', getTailwindConfig())}
              className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs text-white font-semibold transition flex items-center gap-1.5"
            >
              {copiedFormat === 'tailwind' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedFormat === 'tailwind' ? 'Copied!' : 'Copy Config'}</span>
            </button>
          </div>
          <pre className="p-4 rounded-xl bg-[#06070b] border border-white/10 text-xs font-mono text-zinc-200 overflow-x-auto">
            {getTailwindConfig()}
          </pre>
        </div>

        {/* CSS Variables Export */}
        <div className="rounded-2xl bg-[#0f111a] border border-white/10 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-sm text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span>CSS Custom Properties (:root)</span>
            </div>
            <button
              onClick={() => handleCopy('css', getCssVars())}
              className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-xs text-white font-semibold transition flex items-center gap-1.5"
            >
              {copiedFormat === 'css' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedFormat === 'css' ? 'Copied!' : 'Copy CSS'}</span>
            </button>
          </div>
          <pre className="p-4 rounded-xl bg-[#06070b] border border-white/10 text-xs font-mono text-zinc-200 overflow-x-auto">
            {getCssVars()}
          </pre>
        </div>
      </div>
    </div>
  );
}
