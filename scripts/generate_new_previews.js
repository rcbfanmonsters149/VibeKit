const fs = require('fs');
const path = require('path');

const PREVIEWS_DIR = path.join(__dirname, '..', 'public', 'previews');

const variations = [
  {
    slug: 'retro-y2k-os',
    title: 'PulseOS — Retro Y2K OS',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PulseOS — Retro Y2K OS</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: 'MS Sans Serif', Tahoma, sans-serif; }
    .bevel-box { border-top: 2px solid #ffffff; border-left: 2px solid #ffffff; border-right: 2px solid #000000; border-bottom: 2px solid #000000; background: #c0c0c0; }
    .inset-box { border-top: 2px solid #808080; border-left: 2px solid #808080; border-right: 2px solid #ffffff; border-bottom: 2px solid #ffffff; background: #ffffff; }
  </style>
</head>
<body class="bg-[#008080] p-4 flex justify-center text-black">
  <div class="max-w-4xl w-full bevel-box shadow-2xl flex flex-col overflow-hidden">
    <div class="bg-gradient-to-r from-[#000080] to-[#1084d0] px-2 py-1 flex justify-between text-white font-bold text-xs">
      <span>C:\\PULSEOS\\PULSEOS.EXE - [Telemetry Navigator]</span>
      <div class="flex gap-1 text-[10px]">
        <button class="w-4 h-4 bg-[#c0c0c0] text-black font-bold">_</button>
        <button class="w-4 h-4 bg-[#c0c0c0] text-black font-bold">□</button>
        <button class="w-4 h-4 bg-[#c0c0c0] text-black font-bold">✕</button>
      </div>
    </div>
    <div class="bg-[#c0c0c0] border-b border-[#808080] px-2 py-1 flex gap-3 text-xs">
      <span><u>F</u>ile</span><span><u>E</u>dit</span><span><u>V</u>iew</span><span><u>T</u>elemetry</span><span><u>H</u>elp</span>
    </div>
    <div class="p-4 bg-[#d4d0c8] space-y-4">
      <div class="inset-box p-6 space-y-3">
        <div class="inline-block bg-[#000080] text-white text-xs px-2 py-0.5 font-bold">Next-Generation Platform</div>
        <h1 class="text-2xl font-black text-[#000080]">Supercharge your engineering workflow with real-time telemetry</h1>
        <p class="text-xs text-neutral-700">Monitor performance, automate deployments, and collaborate with your team without leaving your terminal.</p>
        <div class="flex gap-2 pt-2">
          <button class="bevel-box px-4 py-1.5 font-bold text-xs">Start 14-Day Free Trial →</button>
          <button class="bevel-box px-4 py-1.5 text-xs">▶ Schedule Product Demo</button>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div class="bevel-box p-2"><div class="text-[10px] text-neutral-600">Availability</div><div class="text-lg font-bold text-[#000080]">99.99%</div><div class="text-[9px]">+0.04%</div></div>
        <div class="bevel-box p-2"><div class="text-[10px] text-neutral-600">Latency</div><div class="text-lg font-bold text-[#000080]">14ms</div><div class="text-[9px]">-3.2ms</div></div>
        <div class="bevel-box p-2"><div class="text-[10px] text-neutral-600">Deployments</div><div class="text-lg font-bold text-[#000080]">142k+</div><div class="text-[9px]">+12k</div></div>
        <div class="bevel-box p-2"><div class="text-[10px] text-neutral-600">Satisfaction</div><div class="text-lg font-bold text-[#000080]">99.4%</div><div class="text-[9px]">4.9/5</div></div>
      </div>
    </div>
    <div class="bg-[#c0c0c0] border-t border-white px-2 py-1 flex justify-between text-xs">
      <span class="font-bold bevel-box px-2">Start</span>
      <span>PulseOS System Active • Ready</span>
    </div>
  </div>
</body>
</html>`
  },
  {
    slug: 'technical-blueprint',
    title: 'PulseOS — CAD Blueprint',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PulseOS — CAD Blueprint</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#081326] text-[#e0f2fe] font-mono p-6">
  <div class="max-w-5xl mx-auto border border-[#38bdf8]/40 p-6 bg-[#0a1832]/80 space-y-6">
    <div class="border-b border-[#38bdf8]/30 pb-3 flex justify-between text-xs">
      <span class="text-[#38bdf8] font-bold">PULSEOS ENGINEERING SCHEMATICS // SPEC_DOC</span>
      <span class="text-[#facc15]">REV 2.4 READY</span>
    </div>
    <div class="border border-[#38bdf8]/30 p-8 space-y-4 bg-[#0c1e3d]/60">
      <div class="text-xs text-[#38bdf8]/70">|← DIM_WIDTH: 1280mm →|</div>
      <h1 class="text-3xl font-black text-white">Supercharge your engineering workflow with real-time telemetry</h1>
      <p class="text-xs text-[#93c5fd] max-w-xl">Monitor performance, automate deployments, and collaborate with your team without leaving your terminal.</p>
      <div class="flex gap-4 pt-2">
        <button class="px-4 py-2 bg-[#38bdf8] text-[#081326] font-bold text-xs">[START 14-DAY FREE TRIAL]</button>
        <button class="px-4 py-2 border border-[#38bdf8] text-[#38bdf8] text-xs font-bold">[SCHEDULE DEMO]</button>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
      <div class="border border-[#38bdf8]/30 p-3 bg-[#0a1832]"><div class="text-[10px] text-[#38bdf8]">SYSTEM AVAILABILITY</div><div class="text-xl font-bold text-[#facc15]">99.99%</div></div>
      <div class="border border-[#38bdf8]/30 p-3 bg-[#0a1832]"><div class="text-[10px] text-[#38bdf8]">MEDIAN LATENCY</div><div class="text-xl font-bold text-[#facc15]">14ms</div></div>
      <div class="border border-[#38bdf8]/30 p-3 bg-[#0a1832]"><div class="text-[10px] text-[#38bdf8]">ACTIVE DEPLOYS</div><div class="text-xl font-bold text-[#facc15]">142k+</div></div>
      <div class="border border-[#38bdf8]/30 p-3 bg-[#0a1832]"><div class="text-[10px] text-[#38bdf8]">SATISFACTION</div><div class="text-xl font-bold text-[#facc15]">99.4%</div></div>
    </div>
    <div class="border border-[#38bdf8] p-3 text-[10px] flex justify-between bg-[#0a1832]">
      <span>DRAWING NO: PLS-TELEMETRY-2026</span>
      <span>SCALE: 1:1 ARCHITECTURAL SPEC</span>
    </div>
  </div>
</body>
</html>`
  },
  {
    slug: 'claymorphism-3d',
    title: 'PulseOS — Claymorphism',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PulseOS — Claymorphism</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .clay-card { background: #f1f5f9; border-radius: 24px; box-shadow: 8px 8px 16px #cbd5e1, -8px -8px 16px #ffffff, inset 3px 3px 6px rgba(255,255,255,0.7), inset -3px -3px 6px rgba(0,0,0,0.06); }
    .clay-btn { background: linear-gradient(135deg, #6366f1, #9333ea); color: white; border-radius: 16px; box-shadow: 6px 6px 12px #cbd5e1, -6px -6px 12px #ffffff; }
  </style>
</head>
<body class="bg-[#e2e8f0] text-slate-800 p-8">
  <div class="max-w-4xl mx-auto space-y-8">
    <div class="clay-card p-8 text-center space-y-4">
      <span class="bg-white px-3 py-1 rounded-full text-xs font-bold text-purple-600 shadow">✨ Next-Generation Platform</span>
      <h1 class="text-3xl font-black text-slate-900">Supercharge your engineering workflow with real-time telemetry</h1>
      <p class="text-xs text-slate-600 max-w-xl mx-auto">Monitor performance, automate deployments, and collaborate with your team without leaving your terminal.</p>
      <div class="flex justify-center gap-3 pt-2">
        <button class="clay-btn px-6 py-2.5 text-xs font-bold">Start 14-Day Free Trial →</button>
        <button class="bg-white px-6 py-2.5 text-xs font-bold rounded-2xl shadow">Schedule Demo</button>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="clay-card p-4 text-center"><div class="text-xs text-slate-500">Availability</div><div class="text-2xl font-black text-purple-600">99.99%</div></div>
      <div class="clay-card p-4 text-center"><div class="text-xs text-slate-500">Latency</div><div class="text-2xl font-black text-purple-600">14ms</div></div>
      <div class="clay-card p-4 text-center"><div class="text-xs text-slate-500">Deployments</div><div class="text-2xl font-black text-purple-600">142k+</div></div>
      <div class="clay-card p-4 text-center"><div class="text-xs text-slate-500">Satisfaction</div><div class="text-2xl font-black text-purple-600">99.4%</div></div>
    </div>
  </div>
</body>
</html>`
  },
  {
    slug: 'wabi-sabi-craft',
    title: 'PulseOS — Wabi-Sabi Craft',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PulseOS — Wabi-Sabi Craft</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
  <style>body { font-family: 'Cormorant Garamond', Georgia, serif; }</style>
</head>
<body class="bg-[#f8f6f0] text-[#262422] p-8">
  <div class="max-w-3xl mx-auto space-y-12">
    <header class="border-b border-[#e2ded4] pb-4 flex justify-between items-center text-xs font-sans uppercase tracking-widest text-[#787168]">
      <span>PulseOS 侘寂</span>
      <span>v2.4 Ready</span>
    </header>
    <div class="text-center space-y-6 py-8">
      <div class="text-xs tracking-widest uppercase text-[#c2704a] font-sans">Next-Generation Platform</div>
      <h1 class="text-4xl sm:text-5xl font-normal italic">Supercharge your engineering workflow with real-time telemetry</h1>
      <p class="font-sans text-xs text-[#615a52] max-w-lg mx-auto font-light">Monitor performance, automate deployments, and collaborate with your team without leaving your terminal.</p>
      <div class="flex justify-center gap-4 font-sans text-xs uppercase tracking-widest pt-2">
        <button class="px-6 py-3 bg-[#262422] text-[#f8f6f0]">Start Free Trial</button>
        <button class="px-6 py-3 border border-[#8f8578]">Schedule Demo</button>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-[#e2ded4] text-center">
      <div><div class="text-3xl italic">99.99%</div><div class="font-sans text-[10px] uppercase text-[#787168]">Availability</div></div>
      <div><div class="text-3xl italic">14ms</div><div class="font-sans text-[10px] uppercase text-[#787168]">Latency</div></div>
      <div><div class="text-3xl italic">142k+</div><div class="font-sans text-[10px] uppercase text-[#787168]">Deployments</div></div>
      <div><div class="text-3xl italic">99.4%</div><div class="font-sans text-[10px] uppercase text-[#787168]">Satisfaction</div></div>
    </div>
  </div>
</body>
</html>`
  },
  {
    slug: 'spatial-visionos',
    title: 'PulseOS — Spatial VisionOS',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PulseOS — Spatial VisionOS</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#030308] text-white p-8 font-sans">
  <div class="max-w-4xl mx-auto space-y-10">
    <div class="p-10 rounded-[32px] bg-white/[0.05] backdrop-blur-3xl border border-white/20 shadow-2xl text-center space-y-5">
      <span class="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs text-cyan-300">● Spatial Telemetry Suite</span>
      <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">Supercharge your engineering workflow with real-time telemetry</h1>
      <p class="text-xs text-zinc-300 max-w-xl mx-auto font-light">Monitor performance, automate deployments, and collaborate with your team without leaving your terminal.</p>
      <div class="flex justify-center gap-3 pt-2">
        <button class="px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs">Start Free Trial →</button>
        <button class="px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-xs">Schedule Demo</button>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="p-4 rounded-2xl bg-white/[0.04] border border-white/15"><div class="text-xs text-zinc-400">Availability</div><div class="text-2xl font-bold text-white">99.99%</div></div>
      <div class="p-4 rounded-2xl bg-white/[0.04] border border-white/15"><div class="text-xs text-zinc-400">Latency</div><div class="text-2xl font-bold text-white">14ms</div></div>
      <div class="p-4 rounded-2xl bg-white/[0.04] border border-white/15"><div class="text-xs text-zinc-400">Deployments</div><div class="text-2xl font-bold text-white">142k+</div></div>
      <div class="p-4 rounded-2xl bg-white/[0.04] border border-white/15"><div class="text-xs text-zinc-400">Satisfaction</div><div class="text-2xl font-bold text-white">99.4%</div></div>
    </div>
  </div>
</body>
</html>`
  },
  {
    slug: 'swiss-bauhaus-poster',
    title: 'PulseOS — Swiss Bauhaus',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PulseOS — Swiss Bauhaus</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#f4f4f0] text-[#0a0a0a] p-8 font-sans">
  <div class="max-w-4xl mx-auto space-y-10 border-l-4 border-[#0a0a0a] pl-6">
    <header class="border-b-2 border-[#0a0a0a] pb-4 flex justify-between items-end">
      <div>
        <div class="flex gap-1 mb-1"><div class="w-3 h-3 bg-[#e11d48]"></div><div class="w-3 h-3 rounded-full bg-[#0a0a0a]"></div></div>
        <h2 class="text-3xl font-black tracking-tighter uppercase">PulseOS</h2>
      </div>
      <div class="text-xs font-mono font-bold uppercase">BAUHAUS GRID 01</div>
    </header>
    <div class="space-y-4">
      <h1 class="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-none">Supercharge your engineering workflow with real-time telemetry</h1>
      <p class="text-xs font-medium max-w-xl text-neutral-700">Monitor performance, automate deployments, and collaborate with your team without leaving your terminal.</p>
      <div class="flex gap-3 pt-2 font-mono text-xs uppercase font-bold">
        <button class="px-6 py-3 bg-[#0a0a0a] text-white hover:bg-[#e11d48]">START FREE TRIAL →</button>
        <button class="px-6 py-3 border-2 border-[#0a0a0a]">SCHEDULE DEMO</button>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-0 border-y-2 border-[#0a0a0a]">
      <div class="p-4 border-r-2 border-[#0a0a0a]"><div class="text-[10px] font-mono font-bold">AVAILABILITY</div><div class="text-3xl font-black">99.99%</div></div>
      <div class="p-4 border-r-2 border-[#0a0a0a] bg-[#0a0a0a] text-white"><div class="text-[10px] font-mono font-bold">LATENCY</div><div class="text-3xl font-black">14ms</div></div>
      <div class="p-4 border-r-2 border-[#0a0a0a]"><div class="text-[10px] font-mono font-bold">DEPLOYS</div><div class="text-3xl font-black">142k+</div></div>
      <div class="p-4 bg-[#0a0a0a] text-white"><div class="text-[10px] font-mono font-bold">SATISFACTION</div><div class="text-3xl font-black">99.4%</div></div>
    </div>
  </div>
</body>
</html>`
  },
  {
    slug: 'bioluminescent-deep-tech',
    title: 'PulseOS — Bioluminescent',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PulseOS — Bioluminescent</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#02050b] text-[#e2f8ff] p-8 font-sans">
  <div class="max-w-4xl mx-auto space-y-10">
    <div class="p-10 rounded-3xl bg-[#061022] border border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,240,255,0.15)] text-center space-y-4">
      <span class="px-3 py-1 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 text-xs">● Bio-Telemetry Activated</span>
      <h1 class="text-4xl font-black text-white">Supercharge your engineering workflow with real-time telemetry</h1>
      <p class="text-xs text-[#9dd9ec] max-w-xl mx-auto">Monitor performance, automate deployments, and collaborate with your team without leaving your terminal.</p>
      <div class="flex justify-center gap-3 pt-2">
        <button class="px-6 py-2.5 rounded-xl bg-[#00f0ff] text-black font-black text-xs shadow-[0_0_15px_rgba(0,240,255,0.4)]">Start Free Trial →</button>
        <button class="px-6 py-2.5 rounded-xl border border-[#00f0ff]/40 text-[#00f0ff] font-bold text-xs">Schedule Demo</button>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="p-4 rounded-xl bg-[#050b17] border border-[#00f0ff]/20"><div class="text-xs text-[#62b9d4]">Availability</div><div class="text-2xl font-black text-[#00f0ff]">99.99%</div></div>
      <div class="p-4 rounded-xl bg-[#050b17] border border-[#00f0ff]/20"><div class="text-xs text-[#62b9d4]">Latency</div><div class="text-2xl font-black text-[#00f0ff]">14ms</div></div>
      <div class="p-4 rounded-xl bg-[#050b17] border border-[#00f0ff]/20"><div class="text-xs text-[#62b9d4]">Deployments</div><div class="text-2xl font-black text-[#00f0ff]">142k+</div></div>
      <div class="p-4 rounded-xl bg-[#050b17] border border-[#00f0ff]/20"><div class="text-xs text-[#62b9d4]">Satisfaction</div><div class="text-2xl font-black text-[#00f0ff]">99.4%</div></div>
    </div>
  </div>
</body>
</html>`
  }
];

variations.forEach(v => {
  const dir = path.join(PREVIEWS_DIR, v.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, 'index.html'), v.html);
  console.log('Created preview for:', v.slug);
});
