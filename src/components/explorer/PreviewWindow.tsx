'use client';
import React, { useRef, useState } from 'react';
import { Design } from '@/types';
import { Copy, ExternalLink, Check, Monitor, Tablet, Smartphone, Columns, Sparkles, Menu, Code2, Info } from 'lucide-react';
import DesignMinimalClean from '@/components/variations/DesignMinimalClean';
import DesignGlassmorphism from '@/components/variations/DesignGlassmorphism';
import DesignBoldModern from '@/components/variations/DesignBoldModern';
import DesignNeobrutalism from '@/components/variations/DesignNeobrutalism';
import DesignDarkPremium from '@/components/variations/DesignDarkPremium';
import DesignRetroY2K from '@/components/variations/DesignRetroY2K';
import DesignTechnicalBlueprint from '@/components/variations/DesignTechnicalBlueprint';
import DesignClaymorphism from '@/components/variations/DesignClaymorphism';
import DesignWabiSabi from '@/components/variations/DesignWabiSabi';
import DesignSpatialVisionOS from '@/components/variations/DesignSpatialVisionOS';
import DesignSwissBauhaus from '@/components/variations/DesignSwissBauhaus';
import DesignBioluminescent from '@/components/variations/DesignBioluminescent';
import DesignInspectorModal from '@/components/explorer/DesignInspectorModal';

interface PreviewWindowProps {
  design: Design | null;
  onSelectDesign?: (d: Design) => void;
  allDesigns?: Design[];
  onToggleSidebar?: () => void;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

const STYLE_SPECS: Record<string, { badge: string; traits: string; accentColor: string; shortLabel: string }> = {
  'minimal-clean': {
    badge: 'Design 1 — Minimal / Clean',
    traits: 'Pure White base • 1px hairline gray borders • Swiss typography • Restrained flat cards',
    accentColor: '#171717',
    shortLabel: '1. Minimal',
  },
  'glassmorphism': {
    badge: 'Design 2 — Glassmorphism',
    traits: 'Prismatic Aurora base • Translucent milky frosted glass • Multi-color fuchsia/cyan glow',
    accentColor: '#ec4899',
    shortLabel: '2. Glass',
  },
  'bold-modern': {
    badge: 'Design 3 — Bold / Modern',
    traits: 'High-Voltage Flame Orange • Jet Carbon Black • Heavy 900 typography • Searing CTA buttons',
    accentColor: '#ff3d00',
    shortLabel: '3. Bold',
  },
  'neobrutalism': {
    badge: 'Design 4 — Neobrutalism',
    traits: 'Canary Yellow & Vanilla • 3px solid black borders • 5px hard offset drop shadows • Pop badges',
    accentColor: '#facc15',
    shortLabel: '4. Brutal',
  },
  'dark-premium': {
    badge: 'Design 5 — Dark Premium',
    traits: 'Stealth Obsidian Black • Champagne Gold metallic borders • Warm amber ambient glow • Executive luxury',
    accentColor: '#f59e0b',
    shortLabel: '5. Premium',
  },
  'retro-y2k-os': {
    badge: 'Design 6 — Retro Y2K OS',
    traits: 'Windows 95/98 Teal • Beveled 3D borders • Window title gradients & Start taskbar',
    accentColor: '#008080',
    shortLabel: '6. Y2K OS',
  },
  'technical-blueprint': {
    badge: 'Design 7 — CAD Blueprint',
    traits: 'Blueprint cyan grid • Dimension lines & crosshairs • Monospace schematics • Engineering title block',
    accentColor: '#38bdf8',
    shortLabel: '7. Blueprint',
  },
  'claymorphism-3d': {
    badge: 'Design 8 — Claymorphism',
    traits: 'Soft marshmallow 3D • Dual inner shadows • Inflated rounded pills • Friendly pastel lilac',
    accentColor: '#8b5cf6',
    shortLabel: '8. Clay 3D',
  },
  'wabi-sabi-craft': {
    badge: 'Design 9 — Wabi-Sabi Craft',
    traits: 'Textured handmade rice paper • Sumi charcoal ink • Contemplative serif • Earthy terracotta',
    accentColor: '#c2704a',
    shortLabel: '9. Wabi-Sabi',
  },
  'spatial-visionos': {
    badge: 'Design 10 — Spatial VisionOS',
    traits: 'Spatial optical glass • Prismatic refraction • Floating capsule dock • 3D ambient depth',
    accentColor: '#06b6d4',
    shortLabel: '10. VisionOS',
  },
  'swiss-bauhaus-poster': {
    badge: 'Design 11 — Swiss Bauhaus',
    traits: 'Signal red & stark black • Heavy 900 grotesque • Asymmetric poster columns • Oversized 01/02 numerals',
    accentColor: '#e11d48',
    shortLabel: '11. Bauhaus',
  },
  'bioluminescent-deep-tech': {
    badge: 'Design 12 — Bioluminescent',
    traits: 'Abyssal pitch black • Electric cyan & synth lime luminescence • Pulsing data streams • Biotech vibe',
    accentColor: '#00f0ff',
    shortLabel: '12. BioTech',
  },
};

const VARIATION_SLUGS = [
  'minimal-clean',
  'glassmorphism',
  'bold-modern',
  'neobrutalism',
  'dark-premium',
  'retro-y2k-os',
  'technical-blueprint',
  'claymorphism-3d',
  'wabi-sabi-craft',
  'spatial-visionos',
  'swiss-bauhaus-poster',
  'bioluminescent-deep-tech',
];

export default function PreviewWindow({ design, onSelectDesign, allDesigns = [], onToggleSidebar }: PreviewWindowProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [copied, setCopied] = useState(false);
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [compareMode, setCompareMode] = useState(false);
  const [compareSlug, setCompareSlug] = useState<string>('neobrutalism');
  const [inspectorOpen, setInspectorOpen] = useState(false);
  const [inspectorTab, setInspectorTab] = useState<'prompt' | 'details'>('prompt');

  const handleOpenInspector = (tab: 'prompt' | 'details') => {
    setInspectorTab(tab);
    setInspectorOpen(true);
  };

  const activeSpec = design?.slug ? STYLE_SPECS[design.slug] : null;

  const handleCopyPrompt = () => {
    if (design?.aiPrompt?.standard) {
      navigator.clipboard.writeText(design.aiPrompt.standard);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleOpenNewTab = () => {
    if (design?.previewUrl) {
      window.open(design.previewUrl, '_blank');
    }
  };

  const renderComponent = (slug: string) => {
    switch (slug) {
      case 'minimal-clean':
        return <DesignMinimalClean />;
      case 'glassmorphism':
        return <DesignGlassmorphism />;
      case 'bold-modern':
        return <DesignBoldModern />;
      case 'neobrutalism':
        return <DesignNeobrutalism />;
      case 'dark-premium':
        return <DesignDarkPremium />;
      case 'retro-y2k-os':
        return <DesignRetroY2K />;
      case 'technical-blueprint':
        return <DesignTechnicalBlueprint />;
      case 'claymorphism-3d':
        return <DesignClaymorphism />;
      case 'wabi-sabi-craft':
        return <DesignWabiSabi />;
      case 'spatial-visionos':
        return <DesignSpatialVisionOS />;
      case 'swiss-bauhaus-poster':
        return <DesignSwissBauhaus />;
      case 'bioluminescent-deep-tech':
        return <DesignBioluminescent />;
      default:
        return null;
    }
  };

  if (!design) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#050505]">
        <div className="text-zinc-500">Select a design style to preview</div>
      </div>
    );
  }

  const isComparisonDesign = VARIATION_SLUGS.includes(design.slug);

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-[#05060a] overflow-hidden">
      {/* 1. Top Action Bar */}
      <div className="h-14 sm:h-16 flex-shrink-0 border-b border-white/10 px-3 sm:px-6 flex items-center justify-between bg-[#0a0b12]">
        {/* Left: Mobile Menu Toggle + Title */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 mr-2">
          {onToggleSidebar && (
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 transition shrink-0"
              title="Toggle designs sidebar"
            >
              <Menu className="w-4 h-4" />
            </button>
          )}

          <div 
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full shrink-0 border border-white/20"
            style={{ backgroundColor: design.colorPalette.accent }}
          />
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <h2 className="text-xs sm:text-sm font-bold text-white truncate">{design.title}</h2>
              <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 capitalize">
                {design.mode} mode
              </span>
            </div>
            <p className="hidden md:block text-[11px] text-zinc-400 truncate max-w-md lg:max-w-xl">
              {activeSpec ? activeSpec.traits : design.tagline}
            </p>
          </div>
        </div>
        
        {/* Right: Controls Toolbar */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Side-by-Side Compare Toggle */}
          {isComparisonDesign && (
            <button
              onClick={() => setCompareMode(!compareMode)}
              className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                compareMode 
                  ? 'bg-purple-600 text-white border-purple-500' 
                  : 'bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10'
              }`}
              title="Compare 2 styles side-by-side"
            >
              <Columns className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{compareMode ? 'Exit Split View' : 'Side-by-Side'}</span>
            </button>
          )}

          {/* Viewport Device Controls (only in Single View) */}
          {!compareMode && (
            <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-0.5">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`p-1 sm:p-1.5 rounded-md transition ${deviceMode === 'desktop' ? 'bg-white/15 text-white' : 'text-zinc-400 hover:text-zinc-200'}`}
                title="Desktop View (100%)"
              >
                <Monitor className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceMode('tablet')}
                className={`p-1 sm:p-1.5 rounded-md transition ${deviceMode === 'tablet' ? 'bg-white/15 text-white' : 'text-zinc-400 hover:text-zinc-200'}`}
                title="Tablet View (768px)"
              >
                <Tablet className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`p-1 sm:p-1.5 rounded-md transition ${deviceMode === 'mobile' ? 'bg-white/15 text-white' : 'text-zinc-400 hover:text-zinc-200'}`}
                title="Mobile View (375px)"
              >
                <Smartphone className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* View Prompt Button (User can click to view prompt, then copy prompt) */}
          <button 
            onClick={() => handleOpenInspector('prompt')}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold transition shadow-md shadow-purple-950/40 shrink-0"
            title="View AI prompt and copy"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>View Prompt</span>
          </button>

          {/* Design Details Button (Core design name, major features, suitable websites) */}
          <button 
            onClick={() => handleOpenInspector('details')}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-200 hover:text-white border border-white/10 text-xs font-semibold transition shrink-0"
            title="View core design name, major features, and what kind of websites suit that design"
          >
            <Info className="w-3.5 h-3.5 text-purple-400" />
            <span className="hidden sm:inline">Design Details</span>
            <span className="sm:hidden">Details</span>
          </button>
          
          {/* Open Standalone HTML */}
          <button 
            onClick={handleOpenNewTab}
            className="flex items-center justify-center p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 transition border border-white/10"
            title="Open standalone page in new tab"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. Style Switcher Ribbon (Horizontally scrollable for mobile) */}
      <div className="h-11 flex-shrink-0 border-b border-white/10 px-3 sm:px-6 flex items-center justify-between bg-[#08090f] overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="text-[11px] font-mono text-zinc-400 mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span>Styles:</span>
          </span>
          {VARIATION_SLUGS.map((slug, idx) => {
            const isActive = design.slug === slug;
            const targetDesign = allDesigns.find(d => d.slug === slug);
            const label = STYLE_SPECS[slug]?.shortLabel || slug;

            return (
              <button
                key={slug}
                onClick={() => targetDesign && onSelectDesign && onSelectDesign(targetDesign)}
                className={`px-2 sm:px-2.5 py-1 rounded-md text-xs font-medium transition flex items-center gap-1.5 shrink-0 ${
                  isActive 
                    ? 'bg-white/15 text-white border border-white/20 shadow-sm' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: STYLE_SPECS[slug]?.accentColor || '#888' }}
                />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {compareMode && (
          <div className="flex items-center gap-2 shrink-0 ml-4">
            <span className="text-xs text-zinc-400 font-mono hidden sm:inline">Compare with:</span>
            <select
              value={compareSlug}
              onChange={(e) => setCompareSlug(e.target.value)}
              className="bg-white/10 border border-white/20 rounded text-xs text-zinc-200 px-2 py-1 focus:outline-none cursor-pointer"
            >
              {VARIATION_SLUGS.map((s) => (
                <option key={s} value={s} className="bg-[#0e1017] text-white">
                  {STYLE_SPECS[s]?.badge || s}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* 3. Main Frame Preview Area */}
      <div className="flex-1 p-1 sm:p-4 lg:p-6 overflow-hidden flex flex-col items-center justify-center min-h-0 bg-[#040508]">
        {compareMode ? (
          /* Side-by-Side Split View Comparison */
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 overflow-hidden">
            {/* Left Comparison Pane */}
            <div className="h-full flex flex-col rounded-xl border border-white/10 bg-[#09090b] shadow-2xl overflow-hidden min-h-0">
              <div className="h-9 flex-shrink-0 bg-[#14151b] flex items-center justify-between px-3 border-b border-white/10 text-xs font-mono text-zinc-300">
                <span className="font-bold flex items-center gap-1.5 truncate">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: design.colorPalette.accent }} />
                  {design.title}
                </span>
                <span className="text-[10px] text-zinc-500 uppercase">{design.mode}</span>
              </div>
              <div className="flex-1 overflow-y-auto bg-black relative">
                {renderComponent(design.slug) || (
                  <iframe src={design.previewUrl} className="w-full h-full border-0" title={design.title} />
                )}
              </div>
            </div>

            {/* Right Comparison Pane */}
            <div className="h-full flex flex-col rounded-xl border border-white/10 bg-[#09090b] shadow-2xl overflow-hidden min-h-0">
              <div className="h-9 flex-shrink-0 bg-[#14151b] flex items-center justify-between px-3 border-b border-white/10 text-xs font-mono text-zinc-300">
                <span className="font-bold flex items-center gap-1.5 truncate">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: STYLE_SPECS[compareSlug]?.accentColor || '#888' }} />
                  {STYLE_SPECS[compareSlug]?.badge || compareSlug}
                </span>
                <span className="text-[10px] text-zinc-500 uppercase">Target</span>
              </div>
              <div className="flex-1 overflow-y-auto bg-black relative">
                {renderComponent(compareSlug) || (
                  <div className="flex items-center justify-center h-full text-zinc-500 text-xs">Loading comparison variation...</div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Single View: Device Viewport Wrapper */
          <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
            {deviceMode === 'mobile' ? (
              /* High-End Smartphone Frame Mockup */
              <div className="w-[375px] max-w-[calc(100%-8px)] sm:max-w-[calc(100%-16px)] h-full max-h-[740px] rounded-[38px] sm:rounded-[44px] border-[6px] sm:border-[8px] border-[#1e2028] bg-[#07080e] shadow-2xl relative flex flex-col overflow-hidden ring-1 ring-white/15">
                {/* Mobile Status Bar with Dynamic Island */}
                <div className="h-9 flex-shrink-0 px-6 flex items-center justify-between text-[11px] font-medium text-white/80 select-none relative z-20 bg-black/40 border-b border-white/5">
                  <span className="font-semibold tracking-tight text-[12px]">9:41</span>
                  {/* Dynamic Island Capsule */}
                  <div className="absolute left-1/2 top-2 -translate-x-1/2 w-24 h-5 bg-black rounded-full border border-white/15 flex items-center justify-end px-2">
                    <div className="w-2 h-2 rounded-full bg-blue-900/60 border border-blue-400/40" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px]">
                    <span className="text-[10px] font-mono">5G</span>
                    <div className="w-4 h-2 rounded-2xs border border-white/70 p-0.5 flex items-center">
                      <div className="w-full h-full bg-white rounded-3xs" />
                    </div>
                  </div>
                </div>

                {/* Smartphone Screen Content */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden relative bg-black">
                  {renderComponent(design.slug) ? (
                    renderComponent(design.slug)
                  ) : (
                    <iframe
                      ref={iframeRef}
                      src={design.previewUrl}
                      className="w-full h-full border-0"
                      title={`Preview of ${design.title}`}
                    />
                  )}
                </div>

                {/* Mobile Home Bar Pill Indicator */}
                <div className="h-5 flex-shrink-0 flex items-center justify-center bg-black/60 relative z-20">
                  <div className="w-28 h-1 bg-white/40 rounded-full" />
                </div>
              </div>
            ) : deviceMode === 'tablet' ? (
              /* High-End Tablet Frame Mockup */
              <div className="w-[768px] max-w-[calc(100%-8px)] sm:max-w-[calc(100%-16px)] h-full max-h-[820px] rounded-2xl sm:rounded-3xl border-6 sm:border-8 border-[#1e2028] bg-[#07080e] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/15">
                {/* Tablet Camera Header */}
                <div className="h-6 flex-shrink-0 bg-black/40 flex items-center justify-center border-b border-white/5 relative">
                  <div className="w-2 h-2 rounded-full bg-black border border-white/20" />
                </div>

                <div className="flex-1 overflow-y-auto overflow-x-hidden relative bg-black">
                  {renderComponent(design.slug) ? (
                    renderComponent(design.slug)
                  ) : (
                    <iframe
                      ref={iframeRef}
                      src={design.previewUrl}
                      className="w-full h-full border-0"
                      title={`Preview of ${design.title}`}
                    />
                  )}
                </div>

                {/* Tablet Home Bar */}
                <div className="h-4 flex-shrink-0 flex items-center justify-center bg-black/40">
                  <div className="w-36 h-1 bg-white/40 rounded-full" />
                </div>
              </div>
            ) : (
              /* Desktop Window Frame */
              <div className="w-full h-full rounded-lg sm:rounded-xl border border-white/10 flex flex-col bg-[#09090b] shadow-2xl overflow-hidden transition-all duration-300">
                {/* Mac-style Window Header Bar */}
                <div className="h-8 sm:h-9 flex-shrink-0 bg-[#12131a] flex items-center px-3 sm:px-4 relative border-b border-white/10 select-none">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
                    <div className="flex items-center bg-black/50 px-2.5 sm:px-3 py-0.5 rounded-md border border-white/10 text-[10px] sm:text-[11px] font-mono text-zinc-400 max-w-[150px] sm:max-w-none truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 shrink-0" />
                      <span className="truncate">vibekit.dev/style/{design.slug}</span>
                    </div>
                  </div>

                  <div className="ml-auto text-[10px] font-mono text-zinc-400 hidden sm:block">
                    Same Content • Visual Variation
                  </div>
                </div>
                
                {/* Desktop Canvas */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden relative bg-black">
                  {renderComponent(design.slug) ? (
                    renderComponent(design.slug)
                  ) : (
                    <iframe
                      ref={iframeRef}
                      src={design.previewUrl}
                      className="w-full h-full border-0"
                      title={`Preview of ${design.title}`}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Design Inspector Modal (View Prompt & Design Details) */}
      <DesignInspectorModal
        isOpen={inspectorOpen}
        initialTab={inspectorTab}
        onClose={() => setInspectorOpen(false)}
        design={design}
      />
    </div>
  );
}
