'use client';
import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { DESIGNS } from '@/data/designs';
import DesignSidebar from '@/components/explorer/DesignSidebar';
import PreviewWindow from '@/components/explorer/PreviewWindow';
import GlobalHubHeader, { FeatureTab } from '@/components/hub/GlobalHubHeader';
import TemplateShowcaseView from '@/components/hub/TemplateShowcaseView';
import PromptStudioView from '@/components/hub/PromptStudioView';
import { X } from 'lucide-react';

function StudioContent() {
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get('tab') as FeatureTab) || 'studio';

  const [activeFeature, setActiveFeature] = useState<FeatureTab>(initialTab);
  const [selectedDesign, setSelectedDesign] = useState(DESIGNS[0]);
  const [modeFilter, setModeFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredDesigns = useMemo(() => {
    return DESIGNS.filter(d => {
      if (modeFilter !== 'all' && d.mode !== modeFilter) return false;
      if (typeFilter !== 'all' && d.fontType !== typeFilter) return false;
      return true;
    });
  }, [modeFilter, typeFilter]);

  // Auto-select first visible design when filters change
  useMemo(() => {
    if (filteredDesigns.length > 0 && !filteredDesigns.find(d => d.id === selectedDesign?.id)) {
      setSelectedDesign(filteredDesigns[0]);
    }
  }, [filteredDesigns, selectedDesign?.id]);

  const handleSelectDesign = (design: typeof DESIGNS[0]) => {
    setSelectedDesign(design);
    setIsSidebarOpen(false); // Auto close sidebar on mobile upon selection
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-[#090a0f]">
      {/* 1. Top Global Navigation Hub Header */}
      <GlobalHubHeader 
        activeTab={activeFeature} 
        onSelectTab={setActiveFeature} 
      />

      {/* 2. Main Feature Stage */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Feature 1: Style Comparison Studio */}
        {activeFeature === 'studio' && (
          <div className="w-full h-full flex overflow-hidden relative">
            {/* Mobile Sidebar Overlay Backdrop */}
            {isSidebarOpen && (
              <div 
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden transition-opacity"
                onClick={() => setIsSidebarOpen(false)}
              />
            )}

            {/* Responsive Sidebar */}
            <div 
              className={`fixed inset-y-0 left-0 z-50 transform ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
              } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col`}
            >
              {/* Mobile Close Button */}
              <div className="lg:hidden absolute top-4 right-4 z-50">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <DesignSidebar 
                designs={filteredDesigns}
                selectedDesign={selectedDesign}
                onSelectDesign={handleSelectDesign}
                modeFilter={modeFilter}
                onModeFilter={setModeFilter}
                typeFilter={typeFilter}
                onTypeFilter={setTypeFilter}
              />
            </div>

            {/* Main Preview Window */}
            <PreviewWindow 
              design={selectedDesign} 
              onSelectDesign={handleSelectDesign}
              allDesigns={DESIGNS}
              onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            />
          </div>
        )}

        {/* Feature 2: 25+ Template Gallery Showcase */}
        {activeFeature === 'templates' && (
          <TemplateShowcaseView 
            onSelectStudioDesign={(d) => {
              setSelectedDesign(d);
              setActiveFeature('studio');
            }}
          />
        )}

        {/* Feature 3: Interactive AI Prompt Studio */}
        {activeFeature === 'prompts' && (
          <PromptStudioView />
        )}
      </div>
    </div>
  );
}

export default function StudioPage() {
  return (
    <Suspense fallback={
      <div className="h-screen w-full flex items-center justify-center bg-[#090a0f] text-white">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-sm font-mono text-zinc-400">Loading VibeKit Studio...</span>
        </div>
      </div>
    }>
      <StudioContent />
    </Suspense>
  );
}
