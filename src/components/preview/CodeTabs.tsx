"use client";
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
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono flex items-center space-x-1.5 transition ${
              activeTab === "react"
                ? "bg-purple-600 text-white shadow-sm"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>React (Next.js + Tailwind)</span>
          </button>

          <button
            onClick={() => setActiveTab("html")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono flex items-center space-x-1.5 transition ${
              activeTab === "html"
                ? "bg-purple-600 text-white shadow-sm"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
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
