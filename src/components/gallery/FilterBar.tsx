"use client";
import React from "react";
import { CATEGORIES } from "@/data/categories";
import { Sparkles, Search, SlidersHorizontal } from "lucide-react";

interface FilterBarProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  selectedDifficulty: string;
  onSelectDifficulty: (diff: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function FilterBar({
  selectedCategory,
  onSelectCategory,
  selectedDifficulty,
  onSelectDifficulty,
  searchQuery,
  onSearchChange
}: FilterBarProps) {
  const difficulties = ["All Levels", "Beginner", "Intermediate", "Advanced"];

  return (
    <div id="categories" className="space-y-6 pt-4">
      {/* Search and Secondary Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search 25 designs, tags, or styles (e.g. bento, dark, stripe, prompt)..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white px-1.5 py-0.5 rounded bg-white/10"
            >
              Clear
            </button>
          )}
        </div>

        {/* Difficulty Selector */}
        <div className="flex items-center space-x-1.5 self-start sm:self-auto bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
          {difficulties.map((diff) => (
            <button
              key={diff}
              onClick={() => onSelectDifficulty(diff === "All Levels" ? "all" : diff)}
              className={`px-3 py-1.5 rounded-lg font-medium transition ${
                (selectedDifficulty === "all" && diff === "All Levels") || selectedDifficulty === diff
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {diff}
            </button>
          ))}
        </div>
      </div>

      {/* Category Pills (Horizontal Scroll) */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 custom-scroll scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition flex items-center space-x-2 border ${
              selectedCategory === cat.id
                ? "bg-white text-zinc-950 border-white shadow-lg"
                : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10 hover:border-white/20"
            }`}
          >
            <span>{cat.name}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                selectedCategory === cat.id ? "bg-zinc-200 text-zinc-950" : "bg-white/10 text-zinc-400"
              }`}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
