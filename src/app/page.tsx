'use client';
import React from 'react';
import LandingNavbar from '@/components/home/LandingNavbar';
import LandingHero from '@/components/home/LandingHero';
import LiveStyleTicker from '@/components/home/LiveStyleTicker';
import FeatureEcosystem from '@/components/home/FeatureEcosystem';
import WorkflowSection from '@/components/home/WorkflowSection';
import LandingFooter from '@/components/home/LandingFooter';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fffdf2] selection:bg-[#facc15] selection:text-black">
      {/* 1. Neobrutalist Sticky Header & Navbar */}
      <LandingNavbar />

      {/* 2. Main Hero with 'Look at Frontend Designs' Action */}
      <LandingHero />

      {/* 3. 12 Visual Aesthetics Showcase Strip */}
      <LiveStyleTicker />

      {/* 4. Modular Feature Ecosystem (Current Modules & Future Roadmap) */}
      <FeatureEcosystem />

      {/* 5. How Vibecoders Ship 10x Faster Workflow */}
      <WorkflowSection />

      {/* 6. Footer & Studio Quick Links */}
      <LandingFooter />
    </div>
  );
}
