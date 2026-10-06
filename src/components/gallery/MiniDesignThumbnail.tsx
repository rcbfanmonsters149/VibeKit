'use client';
import React from 'react';
import { Design } from '@/types';
import { Sparkles, Terminal, Layers, Globe, Shield } from 'lucide-react';

interface MiniDesignThumbnailProps {
  design: Design;
}

export default function MiniDesignThumbnail({ design }: MiniDesignThumbnailProps) {
  const isLight = design.mode === 'light';
  const bgColor = design.colorPalette.bg;
  const accentColor = design.colorPalette.accent;
  const textColor = design.colorPalette.text;

  return (
    <div 
      className="w-full h-full p-4 flex flex-col justify-between select-none relative overflow-hidden transition-transform duration-300 group-hover:scale-105"
      style={{ backgroundColor: bgColor }}
    >
      {/* Ambient Accent Radial Glow */}
      <div 
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`
        }}
      />

      {/* Mini Mockup Navbar */}
      <div 
        className="w-full h-6 rounded-lg px-2.5 flex items-center justify-between border"
        style={{ 
          backgroundColor: isLight ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.05)',
          borderColor: isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.1)'
        }}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
          <div 
            className="w-12 h-1.5 rounded-full" 
            style={{ backgroundColor: isLight ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.4)' }} 
          />
        </div>
        <div className="flex items-center gap-1">
          <div className="w-6 h-1 rounded-full" style={{ backgroundColor: isLight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.2)' }} />
          <div className="w-6 h-1 rounded-full" style={{ backgroundColor: isLight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.2)' }} />
          <div className="w-8 h-3 rounded-md ml-1" style={{ backgroundColor: accentColor, opacity: 0.85 }} />
        </div>
      </div>

      {/* Mini Mockup Hero */}
      <div className="space-y-2 my-auto py-2">
        <div 
          className="inline-block px-2 py-0.5 rounded-full text-[9px] font-mono border"
          style={{ 
            color: accentColor, 
            borderColor: `${accentColor}40`,
            backgroundColor: `${accentColor}15`
          }}
        >
          {design.style}
        </div>
        
        <div 
          className="h-3 w-3/4 rounded font-bold text-xs truncate leading-none"
          style={{ color: textColor }}
        >
          {design.title}
        </div>

        <div className="space-y-1">
          <div className="h-1.5 w-full rounded" style={{ backgroundColor: isLight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.2)' }} />
          <div className="h-1.5 w-2/3 rounded" style={{ backgroundColor: isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.15)' }} />
        </div>
      </div>

      {/* Mini Mockup 3 Cards */}
      <div className="grid grid-cols-3 gap-1.5 pt-1">
        {[1, 2, 3].map((idx) => (
          <div 
            key={idx}
            className="p-2 rounded-lg border flex flex-col justify-between h-12"
            style={{ 
              backgroundColor: isLight ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.03)',
              borderColor: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)'
            }}
          >
            <div className="w-3 h-3 rounded" style={{ backgroundColor: `${accentColor}30` }} />
            <div className="h-1 w-full rounded" style={{ backgroundColor: isLight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.25)' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
