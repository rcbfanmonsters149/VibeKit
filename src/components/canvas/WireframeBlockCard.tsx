'use client';
import React, { useState } from 'react';
import { WireframeBlock, BlockLayout } from '@/types/wireframeTypes';
import { 
  ChevronUp, ChevronDown, Trash2, Edit3, 
  Layers, Check, Sparkles, Plus, Grid, LayoutTemplate 
} from 'lucide-react';

interface WireframeBlockCardProps {
  block: WireframeBlock;
  index: number;
  totalBlocks: number;
  onUpdate: (updated: WireframeBlock) => void;
  onDelete: (id: string) => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}

const COMMON_ELEMENTS = [
  'Pill Badge', 'Headline', 'Subtitle', 'Primary CTA', 
  'Secondary CTA', 'Email Input', 'Avatar Stack', 
  'Stat Chips', 'Bento Cards', 'Pricing Tiers', 
  'Testimonial Quote', 'Brand Logos', 'Search Bar'
];

const LAYOUT_OPTIONS: { id: BlockLayout; label: string }[] = [
  { id: '1-col-centered', label: '1-Col Centered' },
  { id: '2-col-split', label: '2-Col Split' },
  { id: '3-col-grid', label: '3-Col Grid' },
  { id: '4-col-grid', label: '4-Col Grid' },
  { id: 'bento-grid', label: 'Bento Grid' },
  { id: 'card-stack', label: 'Card Stack' },
];

export default function WireframeBlockCard({
  block,
  index,
  totalBlocks,
  onUpdate,
  onDelete,
  onMoveUp,
  onMoveDown
}: WireframeBlockCardProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleElement = (elem: string) => {
    const exists = block.elements.includes(elem);
    const updated = exists 
      ? block.elements.filter(e => e !== elem)
      : [...block.elements, elem];
    onUpdate({ ...block, elements: updated });
  };

  return (
    <div className="rounded-2xl border-[3px] border-black bg-white shadow-[5px_5px_0px_#000] overflow-hidden transition-all select-none">
      {/* Block Header & Reorder Controls */}
      <div className="p-3 sm:p-4 bg-[#fef08a] border-b-2 border-black flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          {/* Index Pill */}
          <span className="w-7 h-7 rounded-lg bg-black text-white font-mono font-black text-xs flex items-center justify-center border border-black shadow-[1px_1px_0px_#000]">
            {String(index + 1).padStart(2, '0')}
          </span>

          <input
            type="text"
            value={block.title}
            onChange={(e) => onUpdate({ ...block, title: e.target.value })}
            className="font-black text-sm sm:text-base font-heading bg-transparent border-b border-black/20 focus:border-black outline-none px-1 uppercase tracking-tight text-black"
          />

          <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-white border border-black font-bold uppercase">
            {block.layout}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1.5">
          {/* Move Up */}
          <button
            onClick={() => onMoveUp(index)}
            disabled={index === 0}
            className={`p-1.5 rounded-lg border border-black bg-white shadow-[1px_1px_0px_#000] ${
              index === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-zinc-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none'
            }`}
            title="Move Up"
          >
            <ChevronUp className="w-3.5 h-3.5 text-black" />
          </button>

          {/* Move Down */}
          <button
            onClick={() => onMoveDown(index)}
            disabled={index === totalBlocks - 1}
            className={`p-1.5 rounded-lg border border-black bg-white shadow-[1px_1px_0px_#000] ${
              index === totalBlocks - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-zinc-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none'
            }`}
            title="Move Down"
          >
            <ChevronDown className="w-3.5 h-3.5 text-black" />
          </button>

          {/* Expand/Collapse */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg border border-black bg-white shadow-[1px_1px_0px_#000] hover:bg-zinc-100 text-xs font-black uppercase text-black"
            title={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? 'Close' : 'Edit'}
          </button>

          {/* Delete */}
          <button
            onClick={() => onDelete(block.id)}
            className="p-1.5 rounded-lg border border-black bg-[#f87171] hover:bg-[#ef4444] text-white shadow-[1px_1px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            title="Delete Block"
          >
            <Trash2 className="w-3.5 h-3.5 text-black" />
          </button>
        </div>
      </div>

      {/* Visual Wireframe Skeleton Preview Bar */}
      <div className="px-4 py-2.5 bg-[#f8fafc] border-b-2 border-black/10 flex items-center justify-between">
        <div className="w-full flex items-center gap-2">
          {block.layout === '1-col-centered' && (
            <div className="w-full h-8 rounded-lg border border-dashed border-zinc-400 bg-zinc-200/50 flex items-center justify-center text-[10px] font-mono text-zinc-600">
              Centered 1-Column Canvas
            </div>
          )}

          {block.layout === '2-col-split' && (
            <div className="w-full grid grid-cols-2 gap-2 h-8">
              <div className="rounded-lg border border-dashed border-zinc-400 bg-zinc-200/50 flex items-center justify-center text-[10px] font-mono text-zinc-600">
                Left Column
              </div>
              <div className="rounded-lg border border-dashed border-zinc-400 bg-zinc-200/50 flex items-center justify-center text-[10px] font-mono text-zinc-600">
                Right Column
              </div>
            </div>
          )}

          {block.layout === '3-col-grid' && (
            <div className="w-full grid grid-cols-3 gap-2 h-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="rounded-lg border border-dashed border-zinc-400 bg-zinc-200/50 flex items-center justify-center text-[10px] font-mono text-zinc-600">
                  Col {i}
                </div>
              ))}
            </div>
          )}

          {block.layout === '4-col-grid' && (
            <div className="w-full grid grid-cols-4 gap-1.5 h-8">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="rounded-lg border border-dashed border-zinc-400 bg-zinc-200/50 flex items-center justify-center text-[9px] font-mono text-zinc-600">
                  Card {i}
                </div>
              ))}
            </div>
          )}

          {block.layout === 'bento-grid' && (
            <div className="w-full grid grid-cols-3 gap-1.5 h-8">
              <div className="col-span-2 rounded-lg border border-dashed border-purple-400 bg-purple-100/50 flex items-center justify-center text-[9px] font-mono text-purple-700">
                Featured Bento Box
              </div>
              <div className="rounded-lg border border-dashed border-zinc-400 bg-zinc-200/50 flex items-center justify-center text-[9px] font-mono text-zinc-600">
                Small Tile
              </div>
            </div>
          )}

          {block.layout === 'card-stack' && (
            <div className="w-full h-8 rounded-lg border border-dashed border-zinc-400 bg-zinc-200/50 flex items-center justify-center text-[10px] font-mono text-zinc-600">
              Stacked Responsive List
            </div>
          )}
        </div>
      </div>

      {/* Expanded Block Explanation & Settings */}
      {isExpanded && (
        <div className="p-4 sm:p-5 space-y-4 bg-white">
          {/* 1. Layout Selector */}
          <div>
            <label className="text-[11px] font-black uppercase text-zinc-700 block mb-1.5 font-mono">
              Layout Structure:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5">
              {LAYOUT_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => onUpdate({ ...block, layout: opt.id })}
                  className={`py-1.5 px-2 rounded-lg text-[10px] font-black uppercase border transition ${
                    block.layout === opt.id
                      ? 'bg-black text-white border-black shadow-[2px_2px_0px_#facc15]'
                      : 'bg-white text-zinc-700 border-zinc-300 hover:border-black'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Plain English Explanation */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-[11px] font-black uppercase text-black font-mono">
                Explain What Goes In This Block:
              </label>
              <span className="text-[10px] font-mono text-zinc-500">
                Natural Language Instructions
              </span>
            </div>
            <textarea
              rows={3}
              value={block.description}
              onChange={(e) => onUpdate({ ...block, description: e.target.value })}
              placeholder="e.g. Left column has a title saying 'Ship 10x Faster', glowing badge, email signup form, right column has interactive 3D code window..."
              className="w-full p-3 rounded-xl border-2 border-black text-xs text-black placeholder-zinc-400 outline-none focus:bg-yellow-50/50 transition font-sans"
            />
          </div>

          {/* 3. Common Sub-Elements Checkboxes */}
          <div>
            <label className="text-[11px] font-black uppercase text-zinc-700 block mb-1.5 font-mono">
              Select Elements to Include:
            </label>
            <div className="flex flex-wrap gap-1.5">
              {COMMON_ELEMENTS.map((elem) => {
                const isSelected = block.elements.includes(elem);
                return (
                  <button
                    key={elem}
                    onClick={() => toggleElement(elem)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition flex items-center gap-1 border ${
                      isSelected
                        ? 'bg-[#38bdf8] border-black text-black shadow-[1px_1px_0px_#000]'
                        : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:border-black hover:text-black'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    <span>{elem}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Special Styling / Aesthetic Details */}
          <div>
            <label className="text-[11px] font-black uppercase text-zinc-700 block mb-1 font-mono">
              Special Styling or Animation Notes (Optional):
            </label>
            <input
              type="text"
              value={block.specialNotes || ''}
              onChange={(e) => onUpdate({ ...block, specialNotes: e.target.value })}
              placeholder="e.g. Subtle pulse animation, glassmorphic frosted card, dark gradient background"
              className="w-full px-3 py-2 rounded-xl border border-black/30 text-xs text-black placeholder-zinc-400 outline-none focus:border-black transition"
            />
          </div>
        </div>
      )}
    </div>
  );
}
