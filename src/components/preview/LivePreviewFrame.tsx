"use client";
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
          className={`${getContainerWidth()} h-[720px] transition-all duration-300 rounded-xl overflow-hidden border border-white/10 bg-black shadow-inner relative`}
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
