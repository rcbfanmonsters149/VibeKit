import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VibeKit — Frontend Design Gallery & AI Prompt Engine',
  description: 'Curated collection of 25 iconic modern frontend designs with copy-ready AI prompts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-[#090a0f] text-zinc-100 font-sans">
        {children}
      </body>
    </html>
  );
}
