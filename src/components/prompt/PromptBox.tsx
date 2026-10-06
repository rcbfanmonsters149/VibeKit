"use client";
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
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center space-x-1.5 ${
            activeTab === "standard" ? "bg-white text-black font-semibold" : "text-zinc-400 hover:text-white"
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Universal Prompt</span>
        </button>

        <button
          onClick={() => setActiveTab("cursor")}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center space-x-1.5 ${
            activeTab === "cursor" ? "bg-purple-600 text-white font-semibold" : "text-zinc-400 hover:text-white"
          }`}
        >
          <Terminal className="w-3.5 h-3.5 text-purple-300" />
          <span>Cursor / Windsurf</span>
        </button>

        <button
          onClick={() => setActiveTab("v0")}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center space-x-1.5 ${
            activeTab === "v0" ? "bg-purple-600 text-white font-semibold" : "text-zinc-400 hover:text-white"
          }`}
        >
          <Bot className="w-3.5 h-3.5 text-cyan-300" />
          <span>v0.dev / Bolt.new</span>
        </button>

        <button
          onClick={() => setActiveTab("claude")}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center space-x-1.5 ${
            activeTab === "claude" ? "bg-purple-600 text-white font-semibold" : "text-zinc-400 hover:text-white"
          }`}
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
