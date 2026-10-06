const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Create_websites\\VibeKit';
const previewsDir = path.join(baseDir, 'public', 'previews');
const designs = JSON.parse(fs.readFileSync(path.join(baseDir, 'scripts', 'part1.json'), 'utf8'))
  .concat(JSON.parse(fs.readFileSync(path.join(baseDir, 'scripts', 'part2.json'), 'utf8')))
  .concat(JSON.parse(fs.readFileSync(path.join(baseDir, 'scripts', 'part3.json'), 'utf8')));

function generatePreviewHtml(d) {
  const fontUrl = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap";
  
  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${d.title} - Live Preview</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${fontUrl}" rel="stylesheet">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: '${d.colorPalette.accent}',
            darkbg: '${d.colorPalette.bg}'
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            heading: ['Plus Jakarta Sans', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace']
          }
        }
      }
    }
  </script>
  <style>
    body {
      background-color: ${d.colorPalette.bg};
      color: ${d.colorPalette.text};
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
    }
    .custom-scroll::-webkit-scrollbar { width: 6px; }
    .custom-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }
    .glow-glow { box-shadow: 0 0 40px -10px ${d.colorPalette.accent}40; }
    .border-glow { border-color: ${d.colorPalette.accent}50; }
  </style>
</head>
<body class="min-h-screen selection:bg-[${d.colorPalette.accent}] selection:text-white">
  <!-- 1. Sticky Navigation -->
  <header class="sticky top-0 z-50 backdrop-blur-xl bg-[${d.colorPalette.bg}]/80 border-b border-white/10 px-6 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-[${d.colorPalette.accent}] to-indigo-500 flex items-center justify-center font-bold text-white shadow-lg">
          <i data-lucide="sparkles" class="w-5 h-5"></i>
        </div>
        <span class="font-heading font-bold text-lg tracking-tight">${d.title.split(' ')[0]}</span>
      </div>
      <nav class="hidden md:flex items-center space-x-8 text-sm text-zinc-400 font-medium">
        <a href="#overview" class="hover:text-white transition">Overview</a>
        <a href="#features" class="hover:text-white transition">Features</a>
        <a href="#showcase" class="hover:text-white transition">Showcase</a>
        <a href="#testimonials" class="hover:text-white transition">Testimonials</a>
        <a href="#pricing" class="hover:text-white transition">Pricing</a>
      </nav>
      <div class="flex items-center space-x-4">
        <button class="text-sm text-zinc-300 hover:text-white transition">Log in</button>
        <button class="text-sm bg-[${d.colorPalette.accent}] hover:opacity-90 text-white font-medium px-5 py-2.5 rounded-full transition shadow-md flex items-center space-x-2">
          <span>Get Started</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- 2. Hero Section -->
  <section id="overview" class="relative pt-24 pb-20 px-6 max-w-6xl mx-auto text-center">
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[${d.colorPalette.accent}]/20 blur-[120px] rounded-full pointer-events-none"></div>
    
    <div class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 mb-8 backdrop-blur-md">
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      <span class="font-medium">${d.style} Design</span>
      <span class="text-zinc-500">•</span>
      <span class="text-zinc-400">${d.difficulty} Level</span>
      <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-zinc-500"></i>
    </div>

    <h1 class="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1]">
      ${d.title}
    </h1>
    <p class="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
      ${d.tagline}
    </p>

    <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
      <button class="w-full sm:w-auto px-8 py-4 bg-[${d.colorPalette.accent}] hover:opacity-95 text-white font-semibold rounded-xl shadow-xl transition flex items-center justify-center space-x-2">
        <span>Try Interactive Demo</span>
        <i data-lucide="zap" class="w-4 h-4"></i>
      </button>
      <button class="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 font-medium rounded-xl transition flex items-center justify-center space-x-2">
        <i data-lucide="code" class="w-4 h-4 text-zinc-400"></i>
        <span>Explore Architecture</span>
      </button>
    </div>

    <!-- Tags Pill Row -->
    <div class="mt-8 flex flex-wrap items-center justify-center gap-2">
      ${d.tags.map(t => `<span class="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-zinc-400">${t}</span>`).join('')}
    </div>
  </section>

  <!-- 3. Interactive Main App / Showcase Section -->
  <section id="showcase" class="max-w-6xl mx-auto px-6 py-12">
    <div class="relative rounded-2xl border border-white/15 bg-white/[0.02] backdrop-blur-2xl p-4 sm:p-8 overflow-hidden glow-glow">
      <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <div class="flex items-center space-x-2">
          <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
          <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          <span class="ml-3 text-xs font-mono text-zinc-500">${d.slug}.preview.vibekit.dev</span>
        </div>
        <div class="flex items-center space-x-2 text-xs font-mono text-zinc-400">
          <span class="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20 flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Live Interactive
          </span>
        </div>
      </div>

      <!-- Main Showcase Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 space-y-4">
          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/10">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-heading font-semibold text-lg">Active Telemetry & Workflow</h3>
              <span class="text-xs font-mono bg-[${d.colorPalette.accent}]/20 text-[${d.colorPalette.accent}] px-2 py-0.5 rounded">99.98% Healthy</span>
            </div>
            <!-- Mock Visual Bars/Data -->
            <div class="space-y-3">
              <div class="flex items-center justify-between text-xs text-zinc-400">
                <span>Real-time Throughput</span>
                <span class="font-mono text-zinc-200">1,420 ops/sec</span>
              </div>
              <div class="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <div class="bg-gradient-to-r from-[${d.colorPalette.accent}] to-cyan-400 h-full w-4/5 rounded-full"></div>
              </div>
              <div class="grid grid-cols-3 gap-3 pt-4">
                <div class="p-3 bg-white/5 rounded-lg border border-white/5">
                  <div class="text-xs text-zinc-500">Latency</div>
                  <div class="text-lg font-mono font-bold text-emerald-400">14ms</div>
                </div>
                <div class="p-3 bg-white/5 rounded-lg border border-white/5">
                  <div class="text-xs text-zinc-500">Vibecoders</div>
                  <div class="text-lg font-mono font-bold text-[${d.colorPalette.accent}]">${d.stats.vibecoders}</div>
                </div>
                <div class="p-3 bg-white/5 rounded-lg border border-white/5">
                  <div class="text-xs text-zinc-500">Total Views</div>
                  <div class="text-lg font-mono font-bold text-zinc-200">${d.stats.views}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/10">
            <h4 class="text-sm font-semibold text-zinc-300 mb-3">Key Design Capabilities</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${d.features.map(f => `
                <div class="flex items-start space-x-2 text-xs text-zinc-300 p-2 rounded-lg bg-white/5">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
                  <span>${f}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <div class="p-6 rounded-xl bg-gradient-to-b from-[${d.colorPalette.accent}]/10 to-transparent border border-[${d.colorPalette.accent}]/30">
            <i data-lucide="cpu" class="w-8 h-8 text-[${d.colorPalette.accent}] mb-4"></i>
            <h4 class="font-heading font-bold text-base mb-2">Prompt Architecture</h4>
            <p class="text-xs text-zinc-400 leading-relaxed mb-4">
              Engineered with optimized tokens for direct prompting into Cursor, v0, Lovable, Claude Code, and Bolt.new.
            </p>
            <div class="p-3 bg-black/40 rounded-lg border border-white/10 font-mono text-[11px] text-zinc-300 overflow-x-auto custom-scroll max-h-32">
              <code>${d.aiPrompt.standard.slice(0, 180)}...</code>
            </div>
          </div>

          <div class="p-6 rounded-xl bg-white/[0.03] border border-white/10">
            <h4 class="text-xs uppercase tracking-wider text-zinc-500 font-mono mb-3">Color Tokens</h4>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-xs font-mono" style="background-color: ${d.colorPalette.accent}"></div>
              <div class="w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-xs font-mono" style="background-color: ${d.colorPalette.bg}"></div>
              <div class="text-xs text-zinc-400">
                <div class="font-semibold text-zinc-200">${d.colorPalette.name}</div>
                <div class="font-mono text-zinc-500">${d.colorPalette.accent} / ${d.colorPalette.bg}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. Bento Feature Grid Section -->
  <section id="features" class="max-w-6xl mx-auto px-6 py-20">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h2 class="text-3xl sm:text-4xl font-heading font-bold tracking-tight">Engineered for Perfection</h2>
      <p class="mt-4 text-zinc-400">Every corner, curve, and animation token designed with meticulous intention.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[${d.colorPalette.accent}]/50 transition">
        <div class="w-12 h-12 rounded-xl bg-[${d.colorPalette.accent}]/10 border border-[${d.colorPalette.accent}]/30 flex items-center justify-center mb-6">
          <i data-lucide="layers" class="w-6 h-6 text-[${d.colorPalette.accent}]"></i>
        </div>
        <h3 class="text-xl font-heading font-semibold mb-2">Modular Structure</h3>
        <p class="text-sm text-zinc-400 leading-relaxed">Separated concerns into standalone composable React components and clean Tailwind utilities.</p>
      </div>

      <div class="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[${d.colorPalette.accent}]/50 transition">
        <div class="w-12 h-12 rounded-xl bg-[${d.colorPalette.accent}]/10 border border-[${d.colorPalette.accent}]/30 flex items-center justify-center mb-6">
          <i data-lucide="smartphone" class="w-6 h-6 text-[${d.colorPalette.accent}]"></i>
        </div>
        <h3 class="text-xl font-heading font-semibold mb-2">Ultra Responsive</h3>
        <p class="text-sm text-zinc-400 leading-relaxed">Flawlessly adapts across Desktop (1920px), Tablet (768px), and Mobile (375px) breakpoints.</p>
      </div>

      <div class="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[${d.colorPalette.accent}]/50 transition">
        <div class="w-12 h-12 rounded-xl bg-[${d.colorPalette.accent}]/10 border border-[${d.colorPalette.accent}]/30 flex items-center justify-center mb-6">
          <i data-lucide="shield-check" class="w-6 h-6 text-[${d.colorPalette.accent}]"></i>
        </div>
        <h3 class="text-xl font-heading font-semibold mb-2">A11y Compliant</h3>
        <p class="text-sm text-zinc-400 leading-relaxed">High contrast typography ratios, semantic HTML landmarks, and keyboard navigation triggers.</p>
      </div>
    </div>
  </section>

  <!-- 5. Testimonials Section -->
  <section id="testimonials" class="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="p-6 rounded-xl bg-white/[0.02] border border-white/10">
        <div class="flex items-center space-x-1 text-amber-400 mb-4">
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
        </div>
        <p class="text-sm text-zinc-300 italic mb-4">"Copying this prompt into Cursor gave me a working 1:1 frontend in under 4 minutes. Incredible work."</p>
        <div class="text-xs font-semibold text-zinc-400">— Alex V., Founder & Vibecoder</div>
      </div>

      <div class="p-6 rounded-xl bg-white/[0.02] border border-white/10">
        <div class="flex items-center space-x-1 text-amber-400 mb-4">
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
        </div>
        <p class="text-sm text-zinc-300 italic mb-4">"The layout hierarchy and color palette choices are on par with top Silicon Valley landing pages."</p>
        <div class="text-xs font-semibold text-zinc-400">— Sarah K., Lead Designer</div>
      </div>

      <div class="p-6 rounded-xl bg-white/[0.02] border border-white/10">
        <div class="flex items-center space-x-1 text-amber-400 mb-4">
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
        </div>
        <p class="text-sm text-zinc-300 italic mb-4">"VibeKit saved us days of tinkering with Tailwind styling. This template is rock solid."</p>
        <div class="text-xs font-semibold text-zinc-400">— Marcus R., Fullstack Dev</div>
      </div>
    </div>
  </section>

  <!-- 6. Call to Action Banner -->
  <section class="max-w-5xl mx-auto px-6 py-20">
    <div class="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden bg-gradient-to-b from-[${d.colorPalette.accent}]/20 to-white/5 border border-[${d.colorPalette.accent}]/40">
      <h2 class="text-3xl sm:text-5xl font-heading font-extrabold text-white">Start Building With ${d.title.split(' ')[0]}</h2>
      <p class="mt-4 text-zinc-300 max-w-xl mx-auto text-base">Grab the prompt, launch your AI coding assistant, and ship in record time.</p>
      <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button class="px-8 py-4 bg-white text-zinc-950 font-bold rounded-xl shadow-lg hover:bg-zinc-100 transition">Copy AI Prompt Now</button>
        <button class="px-8 py-4 bg-black/40 border border-white/20 text-white font-medium rounded-xl hover:bg-black/60 transition">Download Code</button>
      </div>
    </div>
  </section>

  <!-- 7. Footer -->
  <footer class="border-t border-white/10 py-12 px-6 text-center text-xs text-zinc-500 font-mono">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>© 2026 ${d.title} • Showcase Powered by VibeKit</div>
      <div class="flex items-center space-x-6">
        <a href="#" class="hover:text-zinc-300">Privacy</a>
        <a href="#" class="hover:text-zinc-300">Terms</a>
        <a href="#" class="hover:text-zinc-300">GitHub</a>
        <a href="#" class="hover:text-zinc-300">Twitter</a>
      </div>
    </div>
  </footer>

  <script>
    lucide.createIcons();
  </script>
</body>
</html>`;
}

// Generate all 25 previews
let count = 0;
designs.forEach(d => {
  const html = generatePreviewHtml(d);
  const dir = path.join(previewsDir, d.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  count++;
});

console.log(`Generated ${count} rich, scrollable HTML preview websites in public/previews/`);
