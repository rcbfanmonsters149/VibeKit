"use client";
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
          className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition ${
            currentMode === "desktop" ? "bg-purple-600 text-white shadow" : "text-zinc-400 hover:text-white"
          }`}
          title="Desktop (100% full width)"
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Desktop</span>
        </button>

        <button
          onClick={() => onModeChange("tablet")}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition ${
            currentMode === "tablet" ? "bg-purple-600 text-white shadow" : "text-zinc-400 hover:text-white"
          }`}
          title="Tablet Viewport (768px)"
        >
          <Tablet className="w-3.5 h-3.5" />
          <span>Tablet (768px)</span>
        </button>

        <button
          onClick={() => onModeChange("mobile")}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition ${
            currentMode === "mobile" ? "bg-purple-600 text-white shadow" : "text-zinc-400 hover:text-white"
          }`}
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
