const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'public', 'previews');

const CONTENT = {
  brand: { name: "PulseOS", badge: "v2.4 Ready" },
  navLinks: ["Overview", "Features", "Solutions", "Pricing"],
  signIn: "Sign In",
  getStarted: "Get Started",
  heroBadge: "Next-Generation Platform",
  headline: "Supercharge your engineering workflow with real-time telemetry",
  subtitle: "Monitor performance, automate deployments, and collaborate with your team without leaving your terminal.",
  primaryCta: "Start 14-Day Free Trial",
  secondaryCta: "Schedule Product Demo",
  trustText: "No credit card required • Instant 2-minute setup • 99.99% uptime SLA",
  metrics: [
    { value: "99.99%", label: "System Availability", trend: "+0.04% this month" },
    { value: "14ms", label: "Median Edge Latency", trend: "-3.2ms faster" },
    { value: "142k+", label: "Active Deployments", trend: "+12k this week" },
    { value: "4.9 / 5", label: "Developer Satisfaction", trend: "from 1,840 reviews" }
  ],
  features: [
    { tag: "Edge Compute", title: "Instant Global Replication", desc: "Distribute your microservices to over 300 edge nodes with sub-millisecond cold starts and automatic caching.", action: "Explore Architecture →" },
    { tag: "Enterprise Security", title: "Automated Compliance Guardrails", desc: "Continuous vulnerability scanning, SOC-2 Type II audit logging, and automated branch permissions right out of the box.", action: "Read Security Spec →" },
    { tag: "Developer CLI", title: "Keyboard-Driven Orchestration", desc: "Execute complex infrastructure changes with interactive command palette fuzzy search and git hooks.", action: "View CLI Reference →" }
  ],
  newsletterHeading: "Ready to accelerate your delivery cycle?",
  newsletterSubtext: "Join thousands of top tier engineering teams shipping faster every day.",
  placeholder: "Enter your work email address...",
  newsletterButton: "Request Early Access",
  testimonialQuote: "PulseOS cut our deployment pipeline times by 65%. It is by far the most polished developer tool our team has ever used.",
  testimonialAuthor: "Elena Rostova",
  testimonialRole: "VP of Infrastructure, Veloce Labs",
  testimonialRating: "★★★★★ 5.0 Rating",
  copyright: "© 2026 PulseOS Inc. All rights reserved.",
  statusText: "All Systems Operational"
};

// 1. Minimal Clean HTML
const minimalCleanHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PulseOS — Minimal / Clean</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
  <style>body { font-family: 'Inter', sans-serif; }</style>
</head>
<body class="bg-white text-neutral-900 selection:bg-neutral-200">
  <header class="border-b border-neutral-200/80 bg-white sticky top-0 z-30">
    <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-7 h-7 rounded border border-neutral-300 flex items-center justify-center bg-neutral-50 text-neutral-800 text-xs">⚡</div>
        <span class="font-medium text-base tracking-tight">${CONTENT.brand.name}</span>
        <span class="text-[11px] font-mono text-neutral-500 px-2 py-0.5 rounded border border-neutral-200 bg-neutral-50">${CONTENT.brand.badge}</span>
      </div>
      <nav class="hidden md:flex items-center gap-8 text-xs text-neutral-500 font-normal">
        ${CONTENT.navLinks.map(l => `<a href="#" class="hover:text-neutral-900 transition-colors">${l}</a>`).join('')}
      </nav>
      <div class="flex items-center gap-3">
        <button class="text-xs text-neutral-600 hover:text-neutral-900 px-3 py-1.5">${CONTENT.signIn}</button>
        <button class="text-xs bg-neutral-900 hover:bg-neutral-800 text-white px-3.5 py-1.5 rounded-md">${CONTENT.getStarted}</button>
      </div>
    </div>
  </header>

  <main class="max-w-5xl mx-auto px-6 py-16 space-y-20">
    <section class="text-center max-w-3xl mx-auto space-y-6 pt-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 text-xs text-neutral-600">
        <span class="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
        <span>${CONTENT.heroBadge}</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-normal tracking-tight leading-[1.15]">${CONTENT.headline}</h1>
      <p class="text-base text-neutral-500 font-normal max-w-2xl mx-auto leading-relaxed">${CONTENT.subtitle}</p>
      <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button class="bg-neutral-900 hover:bg-neutral-800 text-white text-xs px-5 py-2.5 rounded-md font-medium">${CONTENT.primaryCta} →</button>
        <button class="border border-neutral-300 hover:border-neutral-400 bg-white text-neutral-700 text-xs px-5 py-2.5 rounded-md font-medium">▶ ${CONTENT.secondaryCta}</button>
      </div>
      <p class="text-xs text-neutral-400 pt-1 font-mono">${CONTENT.trustText}</p>
    </section>

    <section class="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-y border-neutral-200/80">
      ${CONTENT.metrics.map(m => `
        <div class="text-left space-y-1">
          <div class="text-2xl font-light text-neutral-900 tracking-tight">${m.value}</div>
          <div class="text-xs text-neutral-500 font-normal">${m.label}</div>
          <div class="text-[11px] text-neutral-400 font-mono">${m.trend}</div>
        </div>
      `).join('')}
    </section>

    <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${CONTENT.features.map(f => `
        <div class="p-6 rounded-lg border border-neutral-200 bg-white hover:border-neutral-300 transition flex flex-col justify-between">
          <div class="space-y-4">
            <div class="w-8 h-8 rounded border border-neutral-200 bg-neutral-50 flex items-center justify-center text-xs">◈</div>
            <div>
              <span class="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">${f.tag}</span>
              <h3 class="text-base font-medium text-neutral-900 tracking-tight">${f.title}</h3>
            </div>
            <p class="text-xs text-neutral-500 leading-relaxed">${f.desc}</p>
          </div>
          <div class="pt-6">
            <span class="text-xs font-medium text-neutral-700 hover:text-neutral-900 cursor-pointer">${f.action}</span>
          </div>
        </div>
      `).join('')}
    </section>

    <section class="p-8 rounded-lg border border-neutral-200 bg-neutral-50/60 max-w-3xl mx-auto text-center space-y-4">
      <div class="text-neutral-800 text-xs font-mono">${CONTENT.testimonialRating}</div>
      <blockquote class="text-base text-neutral-700 italic font-normal leading-relaxed">"${CONTENT.testimonialQuote}"</blockquote>
      <div class="pt-1">
        <div class="text-xs font-medium text-neutral-900">${CONTENT.testimonialAuthor}</div>
        <div class="text-xs text-neutral-500">${CONTENT.testimonialRole}</div>
      </div>
    </section>

    <section class="border border-neutral-200 rounded-lg p-8 text-center max-w-xl mx-auto space-y-4">
      <h3 class="text-lg font-medium text-neutral-900 tracking-tight">${CONTENT.newsletterHeading}</h3>
      <p class="text-xs text-neutral-500">${CONTENT.newsletterSubtext}</p>
      <form class="flex gap-2 max-w-md mx-auto pt-2" onsubmit="event.preventDefault(); alert('Subscribed!');">
        <input type="email" placeholder="${CONTENT.placeholder}" class="flex-1 px-3 py-2 text-xs border border-neutral-300 rounded-md focus:outline-none focus:border-neutral-500" required>
        <button type="submit" class="bg-neutral-900 text-white text-xs px-4 py-2 rounded-md font-medium">${CONTENT.newsletterButton}</button>
      </form>
    </section>
  </main>

  <footer class="border-t border-neutral-200/80 mt-20 py-8 bg-neutral-50/50">
    <div class="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
      <div class="flex items-center gap-3">
        <span>${CONTENT.copyright}</span>
        <span class="inline-flex items-center gap-1.5 text-[11px] font-mono text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>${CONTENT.statusText}
        </span>
      </div>
      <div class="flex items-center gap-6">
        <a href="#" class="hover:text-neutral-900">Documentation</a>
        <a href="#" class="hover:text-neutral-900">API Status</a>
        <a href="#" class="hover:text-neutral-900">Privacy Policy</a>
      </div>
    </div>
  </footer>
</body>
</html>`;

// 2. Glassmorphism HTML — Prismatic Aurora & Fuchsia/Cyan Glow with Specular Refraction
const glassmorphismHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PulseOS — Glassmorphism</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    .glass-grid {
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
      background-size: 48px 48px;
    }
  </style>
</head>
<body class="bg-[#0a071b] text-white selection:bg-fuchsia-500/40 min-h-screen relative overflow-x-hidden">
  <!-- Geometric Grid Canvas Underlay for authentic glass refraction -->
  <div class="fixed inset-0 pointer-events-none glass-grid"></div>

  <!-- Glowing Prismatic Aurora Orbs -->
  <div class="fixed -top-32 -left-20 w-[550px] h-[550px] bg-gradient-to-br from-fuchsia-600/45 via-pink-500/35 to-purple-800/20 rounded-full blur-[110px] pointer-events-none"></div>
  <div class="fixed top-1/4 -right-24 w-[520px] h-[520px] bg-gradient-to-bl from-cyan-400/40 via-teal-400/25 to-indigo-700/20 rounded-full blur-[120px] pointer-events-none"></div>
  <div class="fixed top-2/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/35 via-indigo-600/30 to-pink-500/30 rounded-full blur-[130px] pointer-events-none"></div>
  <div class="fixed -bottom-24 right-1/4 w-[480px] h-[480px] bg-gradient-to-t from-pink-600/35 via-rose-500/25 to-amber-400/20 rounded-full blur-[110px] pointer-events-none"></div>

  <!-- Ambient Glass Rings -->
  <div class="fixed top-24 right-1/3 w-72 h-72 rounded-full border border-white/10 pointer-events-none opacity-40"></div>

  <header class="sticky top-0 z-30 border-b border-white/20 backdrop-blur-2xl bg-white/[0.07] shadow-[inset_0_-1px_0_rgba(255,255,255,0.1),0_4px_30px_rgba(0,0,0,0.3)]">
    <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-xl backdrop-blur-2xl bg-gradient-to-br from-white/30 via-white/10 to-transparent border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_4px_16px_rgba(236,72,153,0.35)] flex items-center justify-center text-fuchsia-200">✦</div>
        <span class="font-semibold text-base tracking-tight text-white drop-shadow">${CONTENT.brand.name}</span>
        <span class="text-[11px] font-mono text-fuchsia-100 px-2.5 py-0.5 rounded-full backdrop-blur-2xl bg-fuchsia-500/20 border border-fuchsia-300/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_0_15px_rgba(236,72,153,0.3)]">${CONTENT.brand.badge}</span>
      </div>
      <nav class="hidden md:flex items-center gap-8 text-xs text-white/80 font-medium drop-shadow">
        ${CONTENT.navLinks.map(l => `<a href="#" class="hover:text-white transition-colors">${l}</a>`).join('')}
      </nav>
      <div class="flex items-center gap-3">
        <button class="text-xs text-white/80 hover:text-white px-3 py-1.5 font-medium drop-shadow-sm">${CONTENT.signIn}</button>
        <button class="text-xs backdrop-blur-2xl bg-gradient-to-r from-fuchsia-500/85 via-pink-500/85 to-cyan-500/85 hover:brightness-110 border border-white/50 text-white px-4 py-2 rounded-xl font-semibold shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),0_0_25px_rgba(236,72,153,0.5)] transition">${CONTENT.getStarted}</button>
      </div>
    </div>
  </header>

  <main class="max-w-5xl mx-auto px-6 py-16 space-y-16 relative z-10">
    <section class="relative p-10 sm:p-14 rounded-3xl backdrop-blur-3xl bg-gradient-to-br from-white/[0.13] via-white/[0.06] to-white/[0.02] border border-white/25 border-t-white/50 border-l-white/35 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-1px_1px_rgba(255,255,255,0.1),0_20px_50px_rgba(0,0,0,0.45)] text-center space-y-6 overflow-hidden">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-2xl bg-white/15 border border-white/35 border-t-white/60 text-xs text-fuchsia-100 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_4px_16px_rgba(236,72,153,0.25)]">
        <span class="w-2 h-2 rounded-full bg-cyan-300 animate-pulse shadow-[0_0_10px_#67e8f9]"></span>
        <span>${CONTENT.heroBadge}</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.14] bg-gradient-to-r from-white via-pink-100 to-cyan-200 bg-clip-text text-transparent drop-shadow">${CONTENT.headline}</h1>
      <p class="text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow">${CONTENT.subtitle}</p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <button class="backdrop-blur-3xl bg-gradient-to-r from-fuchsia-500/90 via-pink-500/90 to-cyan-500/90 hover:brightness-110 text-white text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-2xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_8px_32px_rgba(236,72,153,0.5)] border border-white/50 transition transform hover:scale-105">${CONTENT.primaryCta} →</button>
        <button class="backdrop-blur-2xl bg-white/[0.10] hover:bg-white/[0.18] border border-white/30 border-t-white/50 text-white text-xs sm:text-sm font-medium px-6 py-3.5 rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_20px_rgba(0,0,0,0.2)] transition">▶ ${CONTENT.secondaryCta}</button>
      </div>
      <p class="text-xs text-white/60 pt-2 font-mono drop-shadow-sm">${CONTENT.trustText}</p>
    </section>

    <section class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      ${CONTENT.metrics.map(m => `
        <div class="p-5 rounded-2xl backdrop-blur-2xl bg-gradient-to-br from-white/[0.12] to-white/[0.03] border border-white/20 border-t-white/45 border-l-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_10px_30px_rgba(0,0,0,0.25)] space-y-1.5 hover:bg-white/[0.16] transition">
          <div class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-200 via-fuchsia-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-sm">${m.value}</div>
          <div class="text-xs text-white/80 font-medium drop-shadow-sm">${m.label}</div>
          <div class="text-[11px] text-cyan-200 font-mono drop-shadow-sm">${m.trend}</div>
        </div>
      `).join('')}
    </section>

    <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${CONTENT.features.map(f => `
        <div class="p-6 rounded-2xl backdrop-blur-3xl bg-gradient-to-br from-white/[0.11] via-white/[0.05] to-white/[0.02] border border-white/20 border-t-white/45 border-l-white/30 hover:border-white/45 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_12px_36px_rgba(0,0,0,0.3)] transition flex flex-col justify-between group relative overflow-hidden">
          <div class="space-y-4 relative z-10">
            <div class="w-11 h-11 rounded-xl backdrop-blur-2xl bg-white/[0.18] border border-white/40 border-t-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_4px_16px_rgba(0,0,0,0.2)] flex items-center justify-center text-cyan-200 text-base">✦</div>
            <div>
              <span class="text-[10px] font-mono text-cyan-200 tracking-wider uppercase block mb-1 drop-shadow-sm">${f.tag}</span>
              <h3 class="text-base font-semibold text-white tracking-tight drop-shadow-sm">${f.title}</h3>
            </div>
            <p class="text-xs text-white/75 leading-relaxed font-normal drop-shadow-sm">${f.desc}</p>
          </div>
          <div class="pt-6 relative z-10">
            <span class="text-xs font-semibold text-pink-200 group-hover:text-cyan-200 cursor-pointer drop-shadow-sm">${f.action}</span>
          </div>
        </div>
      `).join('')}
    </section>

    <section class="p-8 sm:p-10 rounded-3xl backdrop-blur-3xl bg-gradient-to-br from-white/[0.12] via-white/[0.06] to-white/[0.02] border border-white/25 border-t-white/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_16px_40px_rgba(0,0,0,0.35)] max-w-3xl mx-auto text-center space-y-4">
      <div class="text-amber-300 text-xs font-mono drop-shadow">${CONTENT.testimonialRating}</div>
      <blockquote class="text-base sm:text-lg text-white font-light italic leading-relaxed drop-shadow">"${CONTENT.testimonialQuote}"</blockquote>
      <div class="pt-1">
        <div class="text-xs font-semibold text-white drop-shadow-sm">${CONTENT.testimonialAuthor}</div>
        <div class="text-xs text-white/70 font-mono text-[11px] drop-shadow-sm">${CONTENT.testimonialRole}</div>
      </div>
    </section>

    <section class="rounded-3xl backdrop-blur-3xl bg-gradient-to-b from-white/[0.14] via-white/[0.06] to-white/[0.02] border border-white/30 border-t-white/60 p-8 sm:p-10 text-center max-w-xl mx-auto space-y-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_16px_45px_rgba(0,0,0,0.4)]">
      <h3 class="text-xl font-semibold text-white tracking-tight drop-shadow">${CONTENT.newsletterHeading}</h3>
      <p class="text-xs text-white/70 drop-shadow-sm">${CONTENT.newsletterSubtext}</p>
      <form class="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto pt-2" onsubmit="event.preventDefault(); alert('Access requested!');">
        <input type="email" placeholder="${CONTENT.placeholder}" class="flex-1 px-4 py-2.5 text-xs rounded-xl backdrop-blur-2xl bg-white/[0.12] border border-white/35 border-t-white/50 focus:outline-none focus:border-cyan-300 text-white placeholder:text-white/50" required>
        <button type="submit" class="backdrop-blur-2xl bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-xs px-5 py-2.5 rounded-xl font-semibold border border-white/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_0_25px_rgba(236,72,153,0.5)]">${CONTENT.newsletterButton}</button>
      </form>
    </section>
  </main>

  <footer class="border-t border-white/20 mt-20 py-8 backdrop-blur-2xl bg-white/[0.05]">
    <div class="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/65">
      <div class="flex items-center gap-3">
        <span>${CONTENT.copyright}</span>
        <span class="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-200 backdrop-blur-2xl bg-cyan-500/20 px-2.5 py-0.5 rounded-full border border-cyan-300/40 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
          <span class="w-1.5 h-1.5 rounded-full bg-cyan-300"></span>${CONTENT.statusText}
        </span>
      </div>
      <div class="flex items-center gap-6">
        <a href="#" class="hover:text-white">Documentation</a>
        <a href="#" class="hover:text-white">API Status</a>
        <a href="#" class="hover:text-white">Privacy Policy</a>
      </div>
    </div>
  </footer>
</body>
</html>`;

// 3. Bold Modern HTML — High-Voltage Flame Orange & Jet Carbon
const boldModernHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PulseOS — Bold / Modern</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800;900&display=swap" rel="stylesheet">
  <style>body { font-family: 'Plus Jakarta Sans', sans-serif; }</style>
</head>
<body class="bg-[#0a0a0d] text-zinc-100 selection:bg-[#ff5722] selection:text-white">
  <header class="border-b-2 border-[#ff5722]/30 bg-[#111116] sticky top-0 z-30">
    <div class="max-w-5xl mx-auto px-6 h-18 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#ff3d00] to-[#ff6e40] flex items-center justify-center shadow-lg shadow-[#ff3d00]/40 text-white font-black">⚡</div>
        <span class="font-black text-xl tracking-tight text-white uppercase">${CONTENT.brand.name}</span>
        <span class="text-[11px] font-black uppercase text-[#ff9e80] px-2.5 py-0.5 rounded bg-[#ff3d00]/20 border border-[#ff3d00]/40">${CONTENT.brand.badge}</span>
      </div>
      <nav class="hidden md:flex items-center gap-7 text-xs font-black uppercase tracking-wider text-zinc-400">
        ${CONTENT.navLinks.map(l => `<a href="#" class="hover:text-[#ff6e40] transition-colors">${l}</a>`).join('')}
      </nav>
      <div class="flex items-center gap-3">
        <button class="text-xs font-bold uppercase tracking-wide text-zinc-300 hover:text-white px-3 py-2">${CONTENT.signIn}</button>
        <button class="text-xs font-black uppercase tracking-wider bg-[#ff3d00] hover:bg-[#ff5722] text-white px-5 py-2.5 rounded-lg shadow-lg shadow-[#ff3d00]/40">${CONTENT.getStarted}</button>
      </div>
    </div>
  </header>

  <main class="max-w-5xl mx-auto px-6 py-16 space-y-16">
    <section class="text-center space-y-6 pt-2">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff3d00]/20 border-2 border-[#ff3d00]/50 text-xs font-black uppercase tracking-widest text-[#ffab91]">
        <span class="w-2.5 h-2.5 rounded-full bg-[#ff3d00] animate-ping"></span>
        <span>${CONTENT.heroBadge}</span>
      </div>
      <h1 class="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.05] max-w-4xl mx-auto">${CONTENT.headline}</h1>
      <p class="text-base sm:text-lg text-zinc-300 font-medium max-w-2xl mx-auto leading-normal">${CONTENT.subtitle}</p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
        <button class="bg-gradient-to-r from-[#ff3d00] to-[#ff6e40] text-white text-sm font-black px-8 py-4 rounded-xl shadow-2xl shadow-[#ff3d00]/50">${CONTENT.primaryCta} →</button>
        <button class="bg-[#17171f] hover:bg-[#20202b] border-2 border-zinc-700 text-white text-sm font-bold px-7 py-4 rounded-xl">▶ ${CONTENT.secondaryCta}</button>
      </div>
      <p class="text-xs font-black text-zinc-400 uppercase tracking-widest pt-2">${CONTENT.trustText}</p>
    </section>

    <section class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      ${CONTENT.metrics.map(m => `
        <div class="p-6 rounded-2xl bg-[#14141c] border-2 border-[#ff3d00]/25 hover:border-[#ff3d00]/60 transition space-y-2 shadow-xl">
          <div class="text-3xl sm:text-4xl font-black text-white tracking-tight">${m.value}</div>
          <div class="text-xs font-bold uppercase tracking-wider text-[#ff8a65]">${m.label}</div>
          <div class="text-xs font-mono font-bold text-emerald-400">${m.trend}</div>
        </div>
      `).join('')}
    </section>

    <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${CONTENT.features.map(f => `
        <div class="p-7 rounded-2xl bg-[#14141c] border-2 border-zinc-800 hover:border-[#ff5722] transition flex flex-col justify-between shadow-xl">
          <div class="space-y-4">
            <div class="w-12 h-12 rounded-xl bg-[#ff3d00]/15 border border-[#ff3d00]/40 flex items-center justify-center text-[#ff5722] font-bold">⚡</div>
            <div>
              <span class="text-xs font-black uppercase tracking-widest text-[#ff6e40] block mb-1">${f.tag}</span>
              <h3 class="text-lg font-black text-white tracking-tight">${f.title}</h3>
            </div>
            <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">${f.desc}</p>
          </div>
          <div class="pt-6">
            <span class="text-xs font-black uppercase tracking-wider text-[#ff6e40] hover:text-[#ff9e80] cursor-pointer">${f.action}</span>
          </div>
        </div>
      `).join('')}
    </section>

    <section class="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#1c1414] via-[#14141c] to-[#1c1414] border-2 border-[#ff3d00]/40 max-w-3xl mx-auto text-center space-y-4 shadow-2xl">
      <div class="text-amber-400 font-black text-xs uppercase tracking-wider text-white">${CONTENT.testimonialRating}</div>
      <blockquote class="text-lg sm:text-xl font-bold text-white leading-snug">"${CONTENT.testimonialQuote}"</blockquote>
      <div class="pt-2">
        <div class="text-sm font-black text-[#ff8a65] uppercase tracking-wide">${CONTENT.testimonialAuthor}</div>
        <div class="text-xs font-medium text-zinc-400">${CONTENT.testimonialRole}</div>
      </div>
    </section>

    <section class="rounded-2xl bg-[#14141c] border-2 border-[#ff3d00] p-8 sm:p-10 text-center max-w-xl mx-auto space-y-5 shadow-2xl shadow-[#ff3d00]/20">
      <h3 class="text-2xl font-black text-white tracking-tight">${CONTENT.newsletterHeading}</h3>
      <p class="text-xs sm:text-sm font-medium text-zinc-300">${CONTENT.newsletterSubtext}</p>
      <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2" onsubmit="event.preventDefault(); alert('Requested access!');">
        <input type="email" placeholder="${CONTENT.placeholder}" class="flex-1 px-4 py-3 text-xs sm:text-sm font-medium bg-[#0a0a0d] border-2 border-zinc-700 focus:outline-none focus:border-[#ff5722] rounded-xl text-white" required>
        <button type="submit" class="bg-gradient-to-r from-[#ff3d00] to-[#ff6e40] text-white text-xs sm:text-sm font-black uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg shadow-[#ff3d00]/50">${CONTENT.newsletterButton}</button>
      </form>
    </section>
  </main>

  <footer class="border-t-2 border-[#ff3d00]/30 mt-20 py-8 bg-[#111116]">
    <div class="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-zinc-400 uppercase tracking-wider">
      <div class="flex items-center gap-3">
        <span>${CONTENT.copyright}</span>
        <span class="inline-flex items-center gap-1.5 text-[11px] font-black text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-500/40">
          <span class="w-2 h-2 rounded-full bg-emerald-400"></span>${CONTENT.statusText}
        </span>
      </div>
      <div class="flex items-center gap-6">
        <a href="#" class="hover:text-white">Documentation</a>
        <a href="#" class="hover:text-white">API Status</a>
        <a href="#" class="hover:text-white">Privacy Policy</a>
      </div>
    </div>
  </footer>
</body>
</html>`;

// 4. Neobrutalism HTML
const neobrutalismHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PulseOS — Neobrutalism</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="">
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700;900&display=swap" rel="stylesheet">
  <style>body { font-family: 'Space Grotesk', sans-serif; }</style>
</head>
<body class="bg-[#fffdf0] text-black selection:bg-[#facc15] selection:text-black">
  <header class="border-b-[3px] border-black bg-[#fef08a] sticky top-0 z-30">
    <div class="max-w-5xl mx-auto px-6 h-18 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-lg bg-black flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_#facc15] text-[#facc15] font-black">⚡</div>
        <span class="font-black text-xl tracking-tight text-black">${CONTENT.brand.name}</span>
        <span class="text-xs font-black uppercase text-black px-2.5 py-0.5 rounded-md bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">${CONTENT.brand.badge}</span>
      </div>
      <nav class="hidden md:flex items-center gap-7 text-xs font-black uppercase tracking-wider text-black">
        ${CONTENT.navLinks.map(l => `<a href="#" class="hover:underline decoration-2 underline-offset-4">${l}</a>`).join('')}
      </nav>
      <div class="flex items-center gap-3">
        <button class="text-xs font-black uppercase tracking-wider px-3 py-1.5 border-2 border-transparent hover:border-black rounded">${CONTENT.signIn}</button>
        <button class="text-xs font-black uppercase tracking-wider bg-[#38bdf8] text-black px-4 py-2 rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">${CONTENT.getStarted}</button>
      </div>
    </div>
  </header>

  <main class="max-w-5xl mx-auto px-6 py-16 space-y-16">
    <section class="p-8 sm:p-12 rounded-2xl bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_#000] text-center space-y-6">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fbcfe8] border-2 border-black shadow-[2px_2px_0px_0px_#000] text-xs font-black uppercase text-black">
        <span class="w-2.5 h-2.5 rounded-full bg-black"></span>
        <span>${CONTENT.heroBadge}</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-black leading-tight max-w-3xl mx-auto">${CONTENT.headline}</h1>
      <p class="text-sm sm:text-base text-black/80 font-bold max-w-2xl mx-auto leading-relaxed">${CONTENT.subtitle}</p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <button class="bg-[#facc15] hover:bg-[#eab308] text-black text-xs sm:text-sm font-black uppercase px-6 py-3.5 rounded-xl border-[3px] border-black shadow-[5px_5px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">${CONTENT.primaryCta} →</button>
        <button class="bg-[#86efac] hover:bg-[#4ade80] text-black text-xs sm:text-sm font-black uppercase px-6 py-3.5 rounded-xl border-[3px] border-black shadow-[5px_5px_0px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">▶ ${CONTENT.secondaryCta}</button>
      </div>
      <p class="text-xs font-black text-black/70 pt-2 tracking-wide">${CONTENT.trustText}</p>
    </section>

    <section class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      ${CONTENT.metrics.map((m, i) => {
        const colors = ['bg-[#c7d2fe]', 'bg-[#fed7aa]', 'bg-[#bbf7d0]', 'bg-[#fbcfe8]'];
        return `
          <div class="p-5 rounded-xl ${colors[i % colors.length]} border-[3px] border-black shadow-[5px_5px_0px_0px_#000] space-y-1">
            <div class="text-3xl font-black text-black tracking-tight">${m.value}</div>
            <div class="text-xs font-black uppercase tracking-wide text-black/80">${m.label}</div>
            <div class="text-xs font-mono font-black text-black">${m.trend}</div>
          </div>
        `;
      }).join('')}
    </section>

    <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${CONTENT.features.map((f, i) => {
        const bgColors = ['bg-[#e0e7ff]', 'bg-[#fef08a]', 'bg-[#ddd6fe]'];
        return `
          <div class="p-6 rounded-2xl ${bgColors[i % bgColors.length]} border-[3px] border-black shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-xl bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center font-black">⚙</div>
              <div>
                <span class="text-[11px] font-black uppercase tracking-wider text-black bg-white px-2 py-0.5 rounded border border-black inline-block mb-2">${f.tag}</span>
                <h3 class="text-lg font-black text-black tracking-tight">${f.title}</h3>
              </div>
              <p class="text-xs font-bold text-black/80 leading-relaxed">${f.desc}</p>
            </div>
            <div class="pt-6">
              <button class="text-xs font-black text-black bg-white hover:bg-black hover:text-white px-3 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">${f.action}</button>
            </div>
          </div>
        `;
      }).join('')}
    </section>

    <section class="p-8 rounded-2xl bg-[#fed7aa] border-[3px] border-black shadow-[6px_6px_0px_0px_#000] max-w-3xl mx-auto text-center space-y-4">
      <div class="text-black font-black text-xs">${CONTENT.testimonialRating}</div>
      <blockquote class="text-base sm:text-lg font-black text-black leading-snug">"${CONTENT.testimonialQuote}"</blockquote>
      <div class="pt-2">
        <div class="text-sm font-black text-black">${CONTENT.testimonialAuthor}</div>
        <div class="text-xs font-bold text-black/75">${CONTENT.testimonialRole}</div>
      </div>
    </section>

    <section class="rounded-2xl bg-[#bfdbfe] border-[3px] border-black shadow-[7px_7px_0px_0px_#000] p-8 text-center max-w-xl mx-auto space-y-4">
      <h3 class="text-xl font-black text-black tracking-tight">${CONTENT.newsletterHeading}</h3>
      <p class="text-xs font-bold text-black/80">${CONTENT.newsletterSubtext}</p>
      <form class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2" onsubmit="event.preventDefault(); alert('Access requested!');">
        <input type="email" placeholder="${CONTENT.placeholder}" class="flex-1 px-4 py-2.5 text-xs font-bold bg-white border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_#000] focus:outline-none" required>
        <button type="submit" class="bg-[#facc15] hover:bg-[#eab308] text-black text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none">${CONTENT.newsletterButton}</button>
      </form>
    </section>
  </main>

  <footer class="border-t-[3px] border-black mt-20 py-8 bg-[#fef08a]">
    <div class="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-black text-black uppercase tracking-wider">
      <div class="flex items-center gap-3">
        <span>${CONTENT.copyright}</span>
        <span class="inline-flex items-center gap-1.5 text-[11px] font-black text-black bg-[#86efac] px-2.5 py-0.5 rounded border-2 border-black shadow-[2px_2px_0px_0px_#000]">
          <span class="w-2 h-2 rounded-full bg-black"></span>${CONTENT.statusText}
        </span>
      </div>
      <div class="flex items-center gap-6">
        <a href="#" class="hover:underline decoration-2">Documentation</a>
        <a href="#" class="hover:underline decoration-2">API Status</a>
        <a href="#" class="hover:underline decoration-2">Privacy Policy</a>
      </div>
    </div>
  </footer>
</body>
</html>`;

// 5. Dark Premium HTML — Stealth Obsidian & Champagne Gold
const darkPremiumHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PulseOS — Dark Premium</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>body { font-family: 'Inter', sans-serif; }</style>
</head>
<body class="bg-[#050507] text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200 min-h-screen relative overflow-x-hidden">
  <!-- Subtle Champagne-Gold Ambient Lighting -->
  <div class="fixed top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-amber-500/12 via-yellow-600/5 to-transparent blur-[140px] pointer-events-none"></div>
  <div class="fixed bottom-10 right-10 w-[450px] h-[300px] bg-amber-700/8 blur-[150px] pointer-events-none"></div>

  <header class="border-b border-amber-500/15 bg-[#07070a]/90 backdrop-blur-2xl sticky top-0 z-30">
    <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 via-amber-600 to-yellow-700 p-[1px] shadow-lg shadow-amber-950/40">
          <div class="w-full h-full bg-[#0a0a0e] rounded-[7px] flex items-center justify-center text-amber-300">✦</div>
        </div>
        <span class="font-semibold text-base tracking-tight text-white">${CONTENT.brand.name}</span>
        <span class="text-[10px] font-mono tracking-wider text-amber-200/90 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/25">${CONTENT.brand.badge}</span>
      </div>
      <nav class="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
        ${CONTENT.navLinks.map(l => `<a href="#" class="hover:text-amber-200 transition-colors">${l}</a>`).join('')}
      </nav>
      <div class="flex items-center gap-3">
        <button class="text-xs text-zinc-400 hover:text-white px-3 py-1.5 font-medium">${CONTENT.signIn}</button>
        <button class="text-xs bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:brightness-110 text-black px-4 py-2 rounded-lg font-semibold shadow-[0_0_20px_rgba(245,158,11,0.3)]">${CONTENT.getStarted}</button>
      </div>
    </div>
  </header>

  <main class="max-w-5xl mx-auto px-6 py-16 space-y-16 relative z-10">
    <section class="text-center space-y-6 max-w-3xl mx-auto pt-2">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#101017] border border-amber-400/20 text-xs text-zinc-300">
        <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.9)]"></span>
        <span class="font-mono text-[11px] tracking-wide text-amber-200/80">${CONTENT.heroBadge}</span>
      </div>
      <h1 class="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.12] text-white">${CONTENT.headline}</h1>
      <p class="text-sm sm:text-base text-zinc-400 font-normal max-w-2xl mx-auto leading-relaxed">${CONTENT.subtitle}</p>
      <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
        <button class="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:brightness-110 text-black text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-[0_0_30px_rgba(245,158,11,0.35)] border border-amber-300/40">${CONTENT.primaryCta} →</button>
        <button class="bg-[#0e0e14] hover:bg-[#14141c] border border-amber-400/20 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-xl">▶ ${CONTENT.secondaryCta}</button>
      </div>
      <p class="text-xs text-zinc-500 pt-2 font-mono">${CONTENT.trustText}</p>
    </section>

    <section class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      ${CONTENT.metrics.map(m => `
        <div class="p-5 rounded-xl bg-[#0a0a0f] border border-amber-500/15 hover:border-amber-400/35 transition space-y-1.5 relative overflow-hidden group shadow-lg">
          <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
          <div class="text-2xl sm:text-3xl font-semibold text-white tracking-tight font-mono group-hover:text-amber-200 transition">${m.value}</div>
          <div class="text-xs text-zinc-400">${m.label}</div>
          <div class="text-[11px] font-mono text-emerald-400/90">${m.trend}</div>
        </div>
      `).join('')}
    </section>

    <section class="grid grid-cols-1 md:grid-cols-3 gap-6">
      ${CONTENT.features.map(f => `
        <div class="p-6 rounded-2xl bg-[#090a0e] border border-amber-500/15 hover:border-amber-400/40 transition flex flex-col justify-between shadow-xl relative overflow-hidden group">
          <div class="space-y-4 relative z-10">
            <div class="w-9 h-9 rounded-lg bg-[#12121a] border border-amber-400/25 flex items-center justify-center text-amber-300">✦</div>
            <div>
              <span class="text-[10px] font-mono tracking-widest text-amber-400 uppercase block mb-1">${f.tag}</span>
              <h3 class="text-base font-medium text-white tracking-tight group-hover:text-amber-100 transition">${f.title}</h3>
            </div>
            <p class="text-xs text-zinc-400 leading-relaxed font-normal">${f.desc}</p>
          </div>
          <div class="pt-6 relative z-10">
            <span class="text-xs font-medium text-amber-400 group-hover:text-amber-300 cursor-pointer">${f.action}</span>
          </div>
        </div>
      `).join('')}
    </section>

    <section class="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#0e0e16] to-[#08080c] border border-amber-500/20 max-w-3xl mx-auto text-center space-y-4 shadow-2xl">
      <div class="text-amber-400 text-xs font-mono">${CONTENT.testimonialRating}</div>
      <blockquote class="text-base sm:text-lg text-zinc-200 italic font-light leading-relaxed">"${CONTENT.testimonialQuote}"</blockquote>
      <div class="pt-2">
        <div class="text-xs font-semibold text-white tracking-wide">${CONTENT.testimonialAuthor}</div>
        <div class="text-xs text-amber-300/70 font-mono text-[11px]">${CONTENT.testimonialRole}</div>
      </div>
    </section>

    <section class="rounded-2xl bg-[#090a0e] border border-amber-500/20 p-8 sm:p-10 text-center max-w-xl mx-auto space-y-4 shadow-2xl">
      <h3 class="text-xl font-semibold text-white tracking-tight">${CONTENT.newsletterHeading}</h3>
      <p class="text-xs text-zinc-400">${CONTENT.newsletterSubtext}</p>
      <form class="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto pt-2" onsubmit="event.preventDefault(); alert('Subscribed!');">
        <input type="email" placeholder="${CONTENT.placeholder}" class="flex-1 px-4 py-2.5 text-xs bg-[#101117] border border-amber-400/20 rounded-xl focus:outline-none focus:border-amber-400 text-white" required>
        <button type="submit" class="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 hover:brightness-110 text-black text-xs px-5 py-2.5 rounded-xl font-semibold shadow-[0_0_20px_rgba(245,158,11,0.3)]">${CONTENT.newsletterButton}</button>
      </form>
    </section>
  </main>

  <footer class="border-t border-amber-500/15 mt-20 py-8 bg-[#040406]/90">
    <div class="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
      <div class="flex items-center gap-3">
        <span>${CONTENT.copyright}</span>
        <span class="inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-200/80 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>${CONTENT.statusText}
        </span>
      </div>
      <div class="flex items-center gap-6">
        <a href="#" class="hover:text-amber-200">Documentation</a>
        <a href="#" class="hover:text-amber-200">API Status</a>
        <a href="#" class="hover:text-amber-200">Privacy Policy</a>
      </div>
    </div>
  </footer>
</body>
</html>`;

const variations = [
  { slug: 'minimal-clean', html: minimalCleanHtml },
  { slug: 'glassmorphism', html: glassmorphismHtml },
  { slug: 'bold-modern', html: boldModernHtml },
  { slug: 'neobrutalism', html: neobrutalismHtml },
  { slug: 'dark-premium', html: darkPremiumHtml },
];

variations.forEach(v => {
  const dir = path.join(baseDir, v.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), v.html, 'utf8');
  console.log(`Wrote standalone preview for ${v.slug}`);
});

console.log('Successfully regenerated all 5 standalone HTML preview variations with distinct colors!');
