export interface Design3D {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'spatial' | 'cyberpunk' | 'product' | 'bento' | 'bioluminescent' | 'web3';
  categoryLabel: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  previewUrl: string;
  stats: {
    likes: number;
    views: string;
    fps: string;
  };
  techStack: string[];
  specs: {
    perspective: string;
    zLayers: string[];
    lighting: string;
    cursorInteractions: string[];
  };
  colorPalette: {
    bg: string;
    accent: string;
    glow: string;
    text: string;
  };
  description: string;
  features: string[];
  aiPrompt: {
    cursor: string;
    claude: string;
    v0: string;
  };
  codeSnippet: string;
}

export const CATEGORIES_3D = [
  { id: 'all', name: 'All 3D Websites', icon: 'Box' },
  { id: 'spatial', name: 'Spatial & VisionOS', icon: 'Glasses' },
  { id: 'cyberpunk', name: 'Cyberpunk & Sci-Fi', icon: 'Terminal' },
  { id: 'product', name: '3D Product & E-Commerce', icon: 'ShoppingBag' },
  { id: 'bento', name: 'Interactive Bento & SaaS', icon: 'Grid' },
  { id: 'bioluminescent', name: 'Deep Tech & Particle', icon: 'Sparkles' },
  { id: 'web3', name: 'Holograms & Web3', icon: 'Coins' },
];

export const DESIGNS_3D: Design3D[] = [
  {
    id: '3d-spatial-visionos',
    slug: 'spatial-visionos',
    title: 'Spatial VisionOS Holographic Studio',
    tagline: 'Multi-layer spatial glass, specular glare physics & floating 3D orb',
    category: 'spatial',
    categoryLabel: 'Spatial & VisionOS',
    difficulty: 'Advanced',
    previewUrl: '/previews/3d-spatial-visionos/index.html',
    stats: { likes: 3240, views: '48.2k', fps: '120 FPS' },
    techStack: ['CSS 3D Transforms', 'Backdrop Filter Blur', 'Dynamic Glare', 'Custom Cursor'],
    specs: {
      perspective: '1000px',
      zLayers: ['Z: 0px (Backdrop)', 'Z: +25px (Header)', 'Z: +40px (Actions)', 'Z: +60px (Orb)'],
      lighting: 'Radial Specular Glare (White 40% with smooth falloff)',
      cursorInteractions: ['Pointer tracking', 'Real-time pitch/roll tilt', 'Proximity highlight']
    },
    colorPalette: {
      bg: '#05060b',
      accent: '#38bdf8',
      glow: '#818cf8',
      text: '#ffffff'
    },
    description: 'A cutting-edge spatial computing frontend mimicking visionOS. Features frosted glass windows with multi-depth elevation in Z-space, dynamic specular glare matching pointer coordinates, and a smooth magnetic cursor follower.',
    features: [
      'Multi-layer Z-space elevation with true physical perspective',
      'Dynamic specular light glare tracking cursor coordinates',
      'Rotating 3D holographic orb with dual-speed orbital rings',
      'High-performance CSS hardware-accelerated transforms'
    ],
    aiPrompt: {
      cursor: 'Build a VisionOS 3D spatial landing page: frosted glass container (bg-white/10, backdrop-blur-2xl, border-white/20) that tilts with mouse coordinates (perspective: 1000px, rotateX, rotateY). Layer child elements at translateZ(20px), translateZ(40px), and translateZ(60px). Include specular glare highlight tracking pointer.',
      claude: 'Design a spatial computing web interface inspired by Apple visionOS with multi-depth Z-axis layering, floating action pills, ambient mesh gradient orbs, and cursor-following tilt physics.',
      v0: 'VisionOS frosted glass website with 3D card tilt, floating holographic sphere, and custom glowing pointer dot.'
    },
    codeSnippet: `<div 
  onMouseMove={(e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 2 - 1;
    const y = ((e.clientY - top) / height) * 2 - 1;
    setRot({ x: -y * 18, y: x * 18 });
  }}
  style={{
    perspective: 1000,
    transform: \`rotateX(\${rot.x}deg) rotateY(\${rot.y}deg)\`,
    transformStyle: 'preserve-3d'
  }}
  className="relative rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 p-8"
>
  <div style={{ transform: 'translateZ(60px)' }}>
    {/* High elevation foreground element */}
  </div>
</div>`
  },
  {
    id: '3d-cyberpunk-terminal',
    slug: 'cyberpunk-terminal',
    title: 'Cyberpunk 3D Wireframe Horizon & Terminal',
    tagline: 'Infinite perspective horizon ground, spinning voxel cube & laser beam',
    category: 'cyberpunk',
    categoryLabel: 'Cyberpunk & Sci-Fi',
    difficulty: 'Intermediate',
    previewUrl: '/previews/3d-cyberpunk-terminal/index.html',
    stats: { likes: 2890, views: '41.6k', fps: '60 FPS' },
    techStack: ['Receding 3D Grid', 'Wireframe Voxel Keyframes', 'Cursor Spotlight', 'Scanline Shader'],
    specs: {
      perspective: '350px ground horizon',
      zLayers: ['Z: Ground (Pitch 68°)', 'Z: Center HUD', 'Z: Floating Cube (+50px)'],
      lighting: 'Neon Cyan & Magenta Cursor Spotlight Beam',
      cursorInteractions: ['Spotlight beam tracking', 'Real-time telemetry readout']
    },
    colorPalette: {
      bg: '#000000',
      accent: '#06b6d4',
      glow: '#d946ef',
      text: '#22d3ee'
    },
    description: 'An aggressive neo-Tokyo cyber terminal featuring an animated grid floor receding into the horizon at a 68-degree angle, a floating rotating wireframe voxel cube, and a cursor-tracking neon spotlight.',
    features: [
      'Infinite receding 3D cyber grid floor with linear animation',
      'Rotating 3D wireframe voxel cube with dual magenta/cyan highlights',
      'Dynamic neon spotlight beam attached to the user pointer',
      'Live monospace telemetry HUD (X, Y, horizon pitch)'
    ],
    aiPrompt: {
      cursor: 'Create a Cyberpunk 3D terminal page: dark black background (#000000), infinite 3D perspective grid floor (transform: perspective(350px) rotateX(68deg) with animated background-position), glowing cyan laser horizon line, rotating wireframe cube, and cursor-following spotlight beam.',
      claude: 'Design an intense cyberpunk web terminal with a retro-futuristic 3D grid ground, rotating wireframe geometric cube, and neon cyan telemetry gauges.',
      v0: 'Cyberpunk terminal landing page with animated 3D grid horizon and neon magenta rotating cube.'
    },
    codeSnippet: `<div className="relative min-h-screen bg-black overflow-hidden font-mono">
  {/* 3D Horizon Grid */}
  <div 
    className="absolute inset-x-0 bottom-0 h-96 animate-grid-horizon pointer-events-none"
    style={{
      transform: 'perspective(350px) rotateX(68deg)',
      transformOrigin: 'bottom center',
      backgroundImage: 'linear-gradient(to right, #06b6d4 1.5px, transparent 1.5px), linear-gradient(to bottom, #06b6d4 1.5px, transparent 1.5px)',
      backgroundSize: '32px 32px'
    }}
  />
</div>`
  },
  {
    id: '3d-product-showcase',
    slug: 'product-stage',
    title: 'Aura Titanium 3D Product Stage',
    tagline: 'Physical hardware tilt, opposite floor shadow physics & tactile popout',
    category: 'product',
    categoryLabel: '3D Product & E-Commerce',
    difficulty: 'Intermediate',
    previewUrl: '/previews/3d-product-showcase/index.html',
    stats: { likes: 3750, views: '55.1k', fps: '120 FPS' },
    techStack: ['3D Tilt Physics', 'Inverse Shadow Calculation', 'Directional Glare', 'Tactile Popout'],
    specs: {
      perspective: '1200px',
      zLayers: ['Floor Shadow', 'Device Stage (Z: 0px)', 'Watch Bezel (Z: +60px)', 'Buttons (Z: +30px)'],
      lighting: 'Amber Warm Directional Spotlight',
      cursorInteractions: ['360° tilt inspection', 'Dynamic floor shadow offset', 'Specular glare']
    },
    colorPalette: {
      bg: '#09090b',
      accent: '#f59e0b',
      glow: '#fbbf24',
      text: '#ffffff'
    },
    description: 'An ultra-luxurious 3D product showcase where moving the mouse tilts the hardware card while calculating an inverse floor shadow, creating the tangible illusion of a physical device under studio lighting.',
    features: [
      'Interactive device inspection responding to mouse movement',
      'Floor shadow that moves opposite to the cursor to simulate physical light',
      'Amber directional light glare flare on titanium surfaces',
      'Tactile CTA buttons popping forward at translateZ(30px)'
    ],
    aiPrompt: {
      cursor: 'Build a luxury 3D product stage: hardware card with mouse-following tilt (perspective: 1200px, rotateX, rotateY), floor shadow beneath the card that moves inversely (translateX(-x * 30px)), and internal product elements elevated with translateZ(60px).',
      claude: 'Design an interactive 3D luxury smartwatch stage with realistic lighting physics, interactive mouse parallax, and inverse ground shadow casting.',
      v0: 'Luxury 3D product card with interactive mouse rotation and ground shadow.'
    },
    codeSnippet: `// Inverse Shadow Physics
const onMouseMove = (e) => {
  const x = (e.clientX / window.innerWidth) * 2 - 1;
  const y = (e.clientY / window.innerHeight) * 2 - 1;
  cardRef.current.style.transform = \`rotateX(\${-y * 22}deg) rotateY(\${x * 22}deg)\`;
  shadowRef.current.style.transform = \`translateX(\${-x * 35}px) scale(\${1 - Math.abs(y) * 0.2})\`;
};`
  },
  {
    id: '3d-bioluminescent-nexus',
    slug: 'bioluminescent-nexus',
    title: 'Bioluminescent 3D Orbital Nexus',
    tagline: 'Deep space abyssal base, rotating nested gyroscope & electric emerald glow',
    category: 'bioluminescent',
    categoryLabel: 'Deep Tech & Particle',
    difficulty: 'Advanced',
    previewUrl: '/previews/3d-bioluminescent-nexus/index.html',
    stats: { likes: 2480, views: '33.9k', fps: '120 FPS' },
    techStack: ['Gyroscope 3D Rotation', 'Ambient Particle Field', 'Proximity Glow', 'CSS 3D Rings'],
    specs: {
      perspective: '900px',
      zLayers: ['Particle Void', 'Outer Gyro Ring', 'Inner Energy Core (Z: +50px)'],
      lighting: 'Electric Emerald (#10b981) and Radiant Cyan (#06b6d4)',
      cursorInteractions: ['Angular momentum drag', 'Proximity core pulse']
    },
    colorPalette: {
      bg: '#02050b',
      accent: '#10b981',
      glow: '#06b6d4',
      text: '#e2e8f0'
    },
    description: 'An ethereal deep-tech interface built around a 3D nested gyroscope with counter-rotating rings and an electric pulsating energy core that surges when the cursor approaches.',
    features: [
      'Nested 3D counter-rotating gyroscope rings in preserve-3d',
      'Electric emerald and cyan radiants on deep void-black canvas',
      'Proximity-reactive core lighting and starlight particles',
      'Monospace telemetry diagnostics and telemetry readouts'
    ],
    aiPrompt: {
      cursor: 'Create a Bioluminescent 3D website: void-black background (#02050b), 3D nested gyroscope rings rotating on different axes (rotateX, rotateY, rotateZ), glowing emerald (#10b981) energy core at center, and floating ambient particles.',
      claude: 'Design an abyssal dark tech page with a 3D rotating orbital gyroscope, radiant cyan/emerald glow, and futuristic telemetry counters.',
      v0: 'Bioluminescent dark tech website with 3D rotating rings and glowing core.'
    },
    codeSnippet: `<div className="relative w-48 h-48 preserve-3d">
  <div className="absolute inset-0 rounded-full border-2 border-emerald-400/50 animate-spin-3d" />
  <div className="absolute inset-4 rounded-full border border-cyan-400/60 animate-spin-3d" style={{ animationDirection: 'reverse' }} />
  <div className="absolute inset-12 rounded-full bg-emerald-500 shadow-[0_0_50px_#10b981]" />
</div>`
  },
  {
    id: '3d-linear-bento',
    slug: 'linear-bento-3d',
    title: 'Linear Obsidian 3D Parallax Bento',
    tagline: 'Staggered Z-depth cards, holographic telemetry chips & spring parallax',
    category: 'bento',
    categoryLabel: 'Interactive Bento & SaaS',
    difficulty: 'Intermediate',
    previewUrl: '/previews/3d-linear-bento/index.html',
    stats: { likes: 3120, views: '44.7k', fps: '120 FPS' },
    techStack: ['Staggered translateZ', 'Spring Hover Transitions', 'Hairline Borders', 'JetBrains Mono'],
    specs: {
      perspective: '1000px',
      zLayers: ['Card 1: Z +20px', 'Card 2: Z +45px', 'Card 3: Z +75px (Foreground)'],
      lighting: 'Subtle Specular Border Shimmer',
      cursorInteractions: ['Multi-layer differential parallax', 'Card hover lift']
    },
    colorPalette: {
      bg: '#08090d',
      accent: '#8b5cf6',
      glow: '#3b82f6',
      text: '#f3f4f6'
    },
    description: 'A modular engineering bento grid built with true 3D Z-depth. As the cursor tilts the viewport, cards at different elevations move with differential parallax speeds for a mesmerizing physical sense of depth.',
    features: [
      'Bento cards staggered across 3 distinct Z-space layers (20px, 45px, 75px)',
      'Subtle 1px border shimmer with low-opacity obsidian surfaces',
      'Live metric sparklines and pulsing telemetry beacons',
      'Smooth spring transitions returning cards to rest on mouse leave'
    ],
    aiPrompt: {
      cursor: 'Build a Linear-inspired 3D bento grid: dark theme (#08090d), transform-style: preserve-3d, bento cards positioned at staggered translateZ depths (20px, 45px, 75px). Tilt the container on mouse move for physical parallax separation.',
      claude: 'Design an ultra-clean obsidian SaaS bento grid with multi-depth 3D layering, purple glow accents, and responsive card elevations.',
      v0: 'Linear style dark bento grid with 3D parallax tilt on mouse move.'
    },
    codeSnippet: `<div style={{ transform: 'perspective(1000px) rotateX(12deg) rotateY(-8deg)', transformStyle: 'preserve-3d' }}>
  <div style={{ transform: 'translateZ(20px)' }}>Background Card</div>
  <div style={{ transform: 'translateZ(45px)' }}>Midground Metrics</div>
  <div style={{ transform: 'translateZ(75px)' }}>Foreground Popout Hero</div>
</div>`
  },
  {
    id: '3d-holographic-vault',
    slug: 'holographic-vault',
    title: 'Holographic Web3 Foil Card & Vault',
    tagline: 'Iridescent foil angle reflection, holographic micro-lines & crypto telemetry',
    category: 'web3',
    categoryLabel: 'Holograms & Web3',
    difficulty: 'Advanced',
    previewUrl: '/previews/3d-holographic-vault/index.html',
    stats: { likes: 2980, views: '38.4k', fps: '120 FPS' },
    techStack: ['Foil Shader Emulation', 'Iridescent Gradient Angle', 'Interactive Tilt', 'Chip Glow'],
    specs: {
      perspective: '1000px',
      zLayers: ['Card Base', 'Foil Layer (Angle Dynamic)', 'EMV Chip (Z: +30px)', 'Number Emboss (Z: +40px)'],
      lighting: 'Dynamic Rainbow Iridescent Glare',
      cursorInteractions: ['Foil reflection angle shifts with cursor X/Y', 'Card tilt']
    },
    colorPalette: {
      bg: '#05070f',
      accent: '#ec4899',
      glow: '#06b6d4',
      text: '#ffffff'
    },
    description: 'A futuristic Web3 holographic smart card featuring an iridescent rainbow sheen that rotates its angle depending on mouse position, paired with an embossed 3D EMV security chip and cryptographic ledger feed.',
    features: [
      'Interactive rainbow foil sheen shifting angles with mouse coordinates',
      'Embossed 3D hardware chip popping out towards the viewer',
      'Multi-angle reflection flare mimicking physical credit card holograms',
      'Integrated real-time crypto telemetry feed and transaction stream'
    ],
    aiPrompt: {
      cursor: 'Create a holographic Web3 card interface: 3D tilting credit card (perspective: 1000px) with dynamic iridescent rainbow gradient overlay whose angle updates with cursor (linear-gradient(angle, cyan, magenta, yellow)), and floating 3D chip.',
      claude: 'Design a futuristic holographic crypto card with interactive mouse tilt, iridescent foil glare reflection, and tactile 3D chip styling.',
      v0: 'Web3 holographic card that tilts in 3D with rainbow foil glare reflection.'
    },
    codeSnippet: `const angle = Math.atan2(y, x) * (180 / Math.PI) + 180;
foilRef.current.style.background = \`linear-gradient(\${angle}deg, rgba(236,72,153,0.3), rgba(6,182,212,0.3), rgba(234,179,8,0.3))\`;`
  }
];
