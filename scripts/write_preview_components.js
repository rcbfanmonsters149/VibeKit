const fs = require('fs');
const path = require('path');
const baseDir = 'C:\\Create_websites\\VibeKit';

// 1. src/components/preview/ViewportControls.tsx
const viewportControlsCode = `"use client";
import React from "react";
import { Monitor, Tablet, Smartphone, Maximize2, ExternalLink, RefreshCw } from "lucide-react";

export type ViewportMode = "desktop" | "tablet" | "mobile";

interface ViewportControlsProps {
  currentMode: ViewportMode;
  onModeChange: (mode: ViewportMode) => void;
  previewUrl: string;
  onRefresh: () => void;
}

export default function ViewportControls({
  currentMode,
  onModeChange,
  previewUrl,
  onRefresh
}: ViewportControlsProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 bg-[#11131c] border border-white/10 p-2.5 rounded-2xl">
      {/* Device Mode Switcher */}
      <div className="flex items-center space-x-1 bg-black/40 p-1 rounded-xl border border-white/5">
        <button
          onClick={() => onModeChange("desktop")}
          className={\`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition \${
            currentMode === "desktop" ? "bg-purple-600 text-white shadow" : "text-zinc-400 hover:text-white"
          }\`}
          title="Desktop (100% full width)"
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Desktop</span>
        </button>

        <button
          onClick={() => onModeChange("tablet")}
          className={\`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition \${
            currentMode === "tablet" ? "bg-purple-600 text-white shadow" : "text-zinc-400 hover:text-white"
          }\`}
          title="Tablet Viewport (768px)"
        >
          <Tablet className="w-3.5 h-3.5" />
          <span>Tablet (768px)</span>
        </button>

        <button
          onClick={() => onModeChange("mobile")}
          className={\`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition \${
            currentMode === "mobile" ? "bg-purple-600 text-white shadow" : "text-zinc-400 hover:text-white"
          }\`}
          title="Mobile Viewport (375px)"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Mobile (375px)</span>
        </button>
      </div>

      {/* Frame Actions (Refresh, Open in New Tab) */}
      <div className="flex items-center space-x-2">
        <button
          onClick={onRefresh}
          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white transition text-xs flex items-center gap-1.5"
          title="Reload preview iframe"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reload</span>
        </button>

        <a
          href={previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-medium text-xs transition flex items-center space-x-1.5"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Open Full Tab</span>
        </a>
      </div>
    </div>
  );
}
`;

// 2. src/components/preview/LivePreviewFrame.tsx
const livePreviewFrameCode = `"use client";
import React, { useState, useRef } from "react";
import ViewportControls, { ViewportMode } from "./ViewportControls";
import { Sparkles, Layers, MousePointerClick } from "lucide-react";

interface LivePreviewFrameProps {
  previewUrl: string;
  title: string;
}

export default function LivePreviewFrame({ previewUrl, title }: LivePreviewFrameProps) {
  const [mode, setMode] = useState<ViewportMode>("desktop");
  const [iframeKey, setIframeKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const getContainerWidth = () => {
    switch (mode) {
      case "mobile":
        return "max-w-[390px]";
      case "tablet":
        return "max-w-[768px]";
      case "desktop":
      default:
        return "w-full";
    }
  };

  const handleRefresh = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="space-y-4">
      {/* Viewport Control Bar */}
      <ViewportControls
        currentMode={mode}
        onModeChange={setMode}
        previewUrl={previewUrl}
        onRefresh={handleRefresh}
      />

      {/* Frame Container with live multi-section scrolling */}
      <div className="relative rounded-2xl bg-[#06070a] border border-white/15 p-2 sm:p-4 min-h-[680px] flex items-center justify-center overflow-hidden shadow-2xl">
        {/* Helper Hint */}
        <div className="absolute top-3 left-6 z-10 hidden sm:flex items-center space-x-2 text-[11px] font-mono text-zinc-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <MousePointerClick className="w-3 h-3 text-purple-400" />
          <span>Fully scrollable interactive preview</span>
        </div>

        <div
          className={\`\${getContainerWidth()} h-[720px] transition-all duration-300 rounded-xl overflow-hidden border border-white/10 bg-black shadow-inner relative\`}
        >
          <iframe
            key={iframeKey}
            ref={iframeRef}
            src={previewUrl}
            title={title}
            className="w-full h-full border-0 bg-black custom-scroll"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      </div>
    </div>
  );
}
`;

// 3. src/components/preview/CodeTabs.tsx
const codeTabsCode = `"use client";
import React, { useState } from "react";
import { Copy, Check, Code2, FileCode, CheckCircle } from "lucide-react";

interface CodeTabsProps {
  code: {
    react: string;
    html: string;
    vue?: string;
  };
}

export default function CodeTabs({ code }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState<"react" | "html">("react");
  const [copied, setCopied] = useState(false);

  const currentCode = activeTab === "react" ? code.react : code.html;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl bg-[#0c0e15] border border-white/10 overflow-hidden">
      {/* Top Code Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#11131c] border-b border-white/10">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setActiveTab("react")}
            className={\`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono flex items-center space-x-1.5 transition \${
              activeTab === "react"
                ? "bg-purple-600 text-white shadow-sm"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }\`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>React (Next.js + Tailwind)</span>
          </button>

          <button
            onClick={() => setActiveTab("html")}
            className={\`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono flex items-center space-x-1.5 transition \${
              activeTab === "html"
                ? "bg-purple-600 text-white shadow-sm"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }\`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>HTML5 + Tailwind CDN</span>
          </button>
        </div>

        <button
          onClick={handleCopy}
          className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-zinc-200 text-xs font-medium transition flex items-center space-x-1.5 border border-white/10"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Copied to Clipboard!" : "Copy Code"}</span>
        </button>
      </div>

      {/* Code Viewer Body */}
      <div className="p-4 sm:p-6 overflow-x-auto custom-scroll max-h-[460px] bg-[#090a0f]">
        <pre className="font-mono text-xs text-zinc-300 leading-relaxed">
          <code>{currentCode}</code>
        </pre>
      </div>
    </div>
  );
}
`;

// 4. src/components/prompt/PromptBox.tsx
const promptBoxCode = `"use client";
import React, { useState } from "react";
import { Copy, Check, Sparkles, Terminal, Bot, Zap, ArrowUpRight } from "lucide-react";

interface PromptBoxProps {
  aiPrompt: {
    standard: string;
    cursorPrompt: string;
    v0Prompt: string;
    claudePrompt: string;
  };
  designTitle: string;
}

export default function PromptBox({ aiPrompt, designTitle }: PromptBoxProps) {
  const [activeTab, setActiveTab] = useState<"standard" | "cursor" | "v0" | "claude">("standard");
  const [copied, setCopied] = useState(false);

  const getPromptText = () => {
    switch (activeTab) {
      case "cursor":
        return aiPrompt.cursorPrompt;
      case "v0":
        return aiPrompt.v0Prompt;
      case "claude":
        return aiPrompt.claudePrompt;
      case "standard":
      default:
        return aiPrompt.standard;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getPromptText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl bg-[#0f111a] border border-purple-500/30 overflow-hidden shadow-xl shadow-purple-950/20">
      {/* Header */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-purple-950/40 via-[#121420] to-indigo-950/40 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-1 rounded-md bg-purple-500/20 text-purple-400 border border-purple-500/30">
              <Sparkles className="w-4 h-4" />
            </span>
            <h3 className="font-heading font-bold text-white text-base sm:text-lg">
              AI Generation Prompt
            </h3>
          </div>
          <p className="mt-1 text-xs text-zinc-400">
            Battle-tested prompt optimized for 1-shot generation in AI coding tools.
          </p>
        </div>

        {/* Big Copy Button */}
        <button
          onClick={handleCopy}
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-purple-600/30 transition flex items-center justify-center space-x-2"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? "Prompt Copied!" : "Copy Full AI Prompt"}</span>
        </button>
      </div>

      {/* Target Model/Tool Selector Tabs */}
      <div className="flex items-center space-x-2 px-4 py-2.5 bg-[#0a0b10] border-b border-white/10 overflow-x-auto custom-scroll">
        <button
          onClick={() => setActiveTab("standard")}
          className={\`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center space-x-1.5 \${
            activeTab === "standard" ? "bg-white text-black font-semibold" : "text-zinc-400 hover:text-white"
          }\`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Universal Prompt</span>
        </button>

        <button
          onClick={() => setActiveTab("cursor")}
          className={\`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center space-x-1.5 \${
            activeTab === "cursor" ? "bg-purple-600 text-white font-semibold" : "text-zinc-400 hover:text-white"
          }\`}
        >
          <Terminal className="w-3.5 h-3.5 text-purple-300" />
          <span>Cursor / Windsurf</span>
        </button>

        <button
          onClick={() => setActiveTab("v0")}
          className={\`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center space-x-1.5 \${
            activeTab === "v0" ? "bg-purple-600 text-white font-semibold" : "text-zinc-400 hover:text-white"
          }\`}
        >
          <Bot className="w-3.5 h-3.5 text-cyan-300" />
          <span>v0.dev / Bolt.new</span>
        </button>

        <button
          onClick={() => setActiveTab("claude")}
          className={\`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center space-x-1.5 \${
            activeTab === "claude" ? "bg-purple-600 text-white font-semibold" : "text-zinc-400 hover:text-white"
          }\`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Claude Code</span>
        </button>
      </div>

      {/* Prompt Body */}
      <div className="p-5 sm:p-6 bg-[#08090e]">
        <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm font-mono text-zinc-200 leading-relaxed max-h-64 overflow-y-auto custom-scroll selection:bg-purple-500">
          {getPromptText()}
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(path.join(baseDir, 'src/components/preview/ViewportControls.tsx'), viewportControlsCode, 'utf8');
fs.writeFileSync(path.join(baseDir, 'src/components/preview/LivePreviewFrame.tsx'), livePreviewFrameCode, 'utf8');
fs.writeFileSync(path.join(baseDir, 'src/components/preview/CodeTabs.tsx'), codeTabsCode, 'utf8');
fs.writeFileSync(path.join(baseDir, 'src/components/prompt/PromptBox.tsx'), promptBoxCode, 'utf8');
console.log('Saved Preview and Prompt UI components');
