import { Design, WebsiteSuitability } from '@/types';

export interface DesignSuitabilityData {
  coreDesignName: string;
  tagline: string;
  majorFeatures: string[];
  suitableWebsites: WebsiteSuitability[];
  aestheticVibe: string;
}

export const SUITABILITY_MAP: Record<string, DesignSuitabilityData> = {
  'minimal-clean': {
    coreDesignName: 'Minimal / Clean',
    aestheticVibe: 'Pure Swiss & Scandinavian Minimalist',
    tagline: 'Lots of generous whitespace, hairline 1px borders, restrained typography, and flat rectangular cards.',
    majorFeatures: [
      'Generous airy whitespace padding with relaxed line heights for distraction-free reading',
      'Hairline 1px subtle neutral borders with zero heavy drop shadows or visual clutter',
      'Restrained typography scale with clean Inter sans-serif font pairing',
      'Flat rectangular card components with whisper-quiet border hover transitions',
      'Monochrome high-contrast CTA buttons and minimalist clean input fields'
    ],
    suitableWebsites: [
      {
        title: 'Developer Tools & API Documentation',
        description: 'Perfect for documentation hubs (like Linear Docs, Supabase, Tailwind) where readability, visual clarity, and searchability are essential.',
        badge: 'Developer & Technical'
      },
      {
        title: 'Productivity & Note-Taking SaaS',
        description: 'Ideal for task managers, knowledge bases, and workspace tools (like Notion, Obsidian, Cron) where users spend multiple hours without eye strain.',
        badge: 'High Focus'
      },
      {
        title: 'Editorial Newsletters & Thought Leadership',
        description: 'Best for long-form reading experiences, Substack blogs, founder essays, and research publications.',
        badge: 'Content & Publishing'
      },
      {
        title: 'Architectural & Design Studio Portfolios',
        description: 'Exhibits client case studies, furniture design, or minimalist photography with museum-like restraint.',
        badge: 'Creative Portfolio'
      },
      {
        title: 'Open Source Software & Package Landing Pages',
        description: 'Fast, lightweight homepages for npm libraries, Rust crates, or GitHub utilities prioritizing instant comprehension.',
        badge: 'Open Source'
      }
    ]
  },
  'glassmorphism': {
    coreDesignName: 'Glassmorphism',
    aestheticVibe: 'Prismatic Aurora & Frosted Spatial Glass',
    tagline: 'Translucent frosted-glass cards, multi-layer backdrop blur, vibrant aurora glowing mesh orbs, and glossy highlights.',
    majorFeatures: [
      'Multi-layer backdrop-blur-2xl with semi-transparent frosted cards and specular highlights',
      'Ambient glowing aurora mesh gradient orbs in fuchsia, cyan, violet, and electric pink',
      'Specular highlight borders (1px white/20 with border-t-white/30 light catchers)',
      'Soft layered elevation shadows with subtle colored refractions and glow diffusion',
      'Glossy translucent gradient buttons with luminous backdrop reflections'
    ],
    suitableWebsites: [
      {
        title: 'AI Copilots & Generative Media Studios',
        description: 'Superb for AI chat canvases, image generators, and prompt studios (like Midjourney, Runway, Poe) giving an intelligent, next-gen vibe.',
        badge: 'AI & Automation'
      },
      {
        title: 'Web3, Crypto & DeFi Platforms',
        description: 'Dynamic aesthetic for token swaps, yield analytics, NFT portals, and non-custodial wallet management dashboards.',
        badge: 'Web3 & Fintech'
      },
      {
        title: 'Music Streaming & Audio Production Web Apps',
        description: 'Atmospheric backdrop ideal for audio visualizers, playlist players, synth controls, and podcast platforms.',
        badge: 'Media & Entertainment'
      },
      {
        title: 'Spatial & Futuristic Consumer Hardware',
        description: 'Showcases smart glasses, VR headsets, wearable sensors, and interactive IoT devices with spatial depth.',
        badge: 'Hardware & Tech'
      },
      {
        title: 'Creative Agency Showcase Portfolios',
        description: 'Design studios and frontend boutique agencies demonstrating high-end visual crafting and GPU-accelerated UI.',
        badge: 'Creative Agency'
      }
    ]
  },
  'bold-modern': {
    coreDesignName: 'Bold / Modern',
    aestheticVibe: 'High-Impact Industrial & High-Contrast Carbon',
    tagline: 'High-voltage flame orange accents, jet carbon backgrounds, heavy 900-weight typography, and high-impact CTA buttons.',
    majorFeatures: [
      'Heavyweight 900-weight typography with punchy condensed hero headlines and high contrast',
      'Jet carbon surfaces (#0a0a0d) with high-voltage searing flame orange fills (#ff3d00)',
      'Oversized prominent CTA buttons with drop shadows and tactile active hover states',
      'High-contrast 2px borders with bright flame orange hover illumination',
      'Punchy metrics cards with oversized numerical telemetry readouts'
    ],
    suitableWebsites: [
      {
        title: 'High-Velocity B2B SaaS & DevTools',
        description: 'Commanding presence for cloud infrastructure, CI/CD orchestration, telemetry platforms, and database services.',
        badge: 'B2B Enterprise'
      },
      {
        title: 'Fitness Tech & Athletic Performance Brands',
        description: 'High-adrenaline style for workout trackers, athletic apparel, extreme sports gear, and wearable analytics.',
        badge: 'Health & Sports'
      },
      {
        title: 'Product Launches, Keynotes & Hackathons',
        description: 'Demands immediate attention for conference registrations, software launches, and fast-moving hackathon hubs.',
        badge: 'Events & Launches'
      },
      {
        title: 'Direct-Response & High-Conversion Sales Pages',
        description: 'Engineered for maximum click-through rates, clear calls-to-action, and assertive value propositions.',
        badge: 'Conversion Focused'
      },
      {
        title: 'Cybersecurity & Infrastructure Monitoring',
        description: 'Evokes strength, speed, and real-time mission-critical reliability for security dashboards and alerts.',
        badge: 'Security & DevOps'
      }
    ]
  },
  'neobrutalism': {
    coreDesignName: 'Neobrutalism',
    aestheticVibe: 'Retro Pop & Tactile Expressive Brutalism',
    tagline: 'Thick 3px solid black borders, hard non-blurred offset shadows (5px 5px #000), canary yellow pop colors, and tactile press states.',
    majorFeatures: [
      'Solid 3px jet black borders on every card, button, badge, and input element',
      'Hard non-blurred offset drop shadows (5px 5px 0px #000) with zero opacity blur',
      'Vibrant high-saturation pop color blocks (canary yellow, bubblegum pink, lime mint)',
      'Tactile button click physics with physical translation depression when pressed',
      'Expressive grotesque typography with high-energy uppercase navigation pills'
    ],
    suitableWebsites: [
      {
        title: 'Indie Hacker & Micro-SaaS Products',
        description: 'Signature aesthetic for solo founders, boilerplate kits, and micro-tools that stand out from corporate templates.',
        badge: 'Indie & Startup'
      },
      {
        title: 'Creative Agency & Freelance Portfolios',
        description: 'Unforgettable impression for graphic designers, creative copywriters, and frontend engineers who want personality.',
        badge: 'Design Portfolio'
      },
      {
        title: 'Gen-Z Community & Lifestyle Brands',
        description: 'Playful, trendy vibe for streetwear drops, event ticketing, podcast hubs, and social networking experiments.',
        badge: 'Community & Culture'
      },
      {
        title: 'Digital Marketplaces & Gumroad-Style Stores',
        description: 'Perfect for selling digital downloads, Figma kits, UI icon packs, and Notion templates with high tactile appeal.',
        badge: 'E-Commerce'
      },
      {
        title: 'Interactive Education & Coding Bootcamps',
        description: 'Friendly, accessible atmosphere for coding challenges, interactive tutorials, and gamified learning platforms.',
        badge: 'EdTech'
      }
    ]
  },
  'dark-premium': {
    coreDesignName: 'Dark Premium',
    aestheticVibe: 'Executive Luxury & Stealth Obsidian Gold',
    tagline: 'Deep stealth obsidian black surfaces, champagne gold hairline metallic borders, warm amber glow, and executive typography.',
    majorFeatures: [
      'Deep stealth obsidian surfaces (#050507) with warm champagne gold ambient backlighting',
      'Hairline metallic champagne-gold borders (border-amber-400/25) with luminous edge sheens',
      'Refined typography hierarchy with crisp monospace telemetry accents and elegant weights',
      'Glowing gold accent indicators with radiant warm ambient pulses',
      'Gold metallic gradient CTA buttons with subtle micro-luminance highlights'
    ],
    suitableWebsites: [
      {
        title: 'Private Wealth Management & Family Offices',
        description: 'Instills confidence and discretion for bespoke wealth advisors, private equity firms, and premium hedge funds.',
        badge: 'Private Finance'
      },
      {
        title: 'Haute Horlogerie & Luxury Goods E-Commerce',
        description: 'Elite presentation for luxury timepieces, bespoke jewelry, fine perfumery, and collector-grade goods.',
        badge: 'Luxury E-Commerce'
      },
      {
        title: 'Executive Advisory & C-Suite Consulting',
        description: 'Tailored for high-ticket strategic advisory, elite corporate law firms, and boutique M&A practices.',
        badge: 'Executive Advisory'
      },
      {
        title: 'Invite-Only Clubs & Private Communities',
        description: 'Conveys exclusivity and prestige for curated mastermind networks, private concierge portals, and VIP membership clubs.',
        badge: 'Exclusive Clubs'
      },
      {
        title: 'High-End Architectural & Real Estate Showcases',
        description: 'Presents luxury penthouses, custom villas, and high-spec architectural lighting with gallery elegance.',
        badge: 'Prestige Real Estate'
      }
    ]
  },
  'linear-dark-nebula': {
    coreDesignName: 'Linear-Style Dark Nebula',
    aestheticVibe: 'High-Velocity Obsidian & Violet Radial Glow',
    tagline: 'Linear.app inspired sprint tracker with ambient mesh glow, keyboard shortcut bento grid, and interactive Kanban boards.',
    majorFeatures: [
      'Radial mesh glow background with purple/indigo ambient light highlights',
      'Glassmorphic pill badge with live pulsing beacon indicator',
      'Interactive mock Kanban board with draggable task cards and priority dots',
      'Modular 3-column bento feature grid with keyboard shortcut pills (⌘K, ⌘J)',
      'Monochrome high-contrast typography with monospace telemetry details'
    ],
    suitableWebsites: [
      {
        title: 'Issue Trackers & Sprint Planning Tools',
        description: 'Optimized for high-velocity software engineering tools, bug trackers, and sprint boards modeled after Linear.',
        badge: 'Dev Tools'
      },
      {
        title: 'Developer Platform Landing Pages',
        description: 'Great for CI/CD runners, container management, cloud orchestrators, and headless CMS platforms.',
        badge: 'Cloud & Infra'
      },
      {
        title: 'Technical SaaS with Command Palettes',
        description: 'Suits keyboard-driven applications where efficiency, shortcuts, and fast navigation are key selling points.',
        badge: 'Power User SaaS'
      }
    ]
  },
  'stripe-glow-tiers': {
    coreDesignName: 'Stripe-Style Luminescent Pricing',
    aestheticVibe: 'Luminescent Neon & Gradient Borders',
    tagline: 'Stripe-inspired billing matrix with glowing gradient cards, annual discount toggles, and feature comparison tables.',
    majorFeatures: [
      'Billed annually / monthly switch with animated discount badges',
      'Luminescent highlighted tier with glowing multi-color gradient border',
      'Comprehensive feature comparison matrix with checkmarks and tooltips',
      'Interactive usage calculator slider for monthly active users or seat counts',
      'Expandable FAQ accordion section with smooth micro-transitions'
    ],
    suitableWebsites: [
      {
        title: 'SaaS Pricing & Upgrade Pages',
        description: 'Designed specifically to maximize conversion rates on tiered subscriptions, usage-based billing, and plan upgrades.',
        badge: 'Conversion Engine'
      },
      {
        title: 'Payment Gateway & FinTech Marketing Sites',
        description: 'Builds trust for merchant billing, checkout SDKs, and international invoicing platforms.',
        badge: 'Fintech'
      },
      {
        title: 'Enterprise Software Tier Matrices',
        description: 'Ideal for clarifying complex enterprise feature sets, compliance add-ons, and custom SLA tiers.',
        badge: 'B2B Plans'
      }
    ]
  },
  'cyberpunk-dev-terminal': {
    coreDesignName: 'Cyberpunk Dev Terminal',
    aestheticVibe: 'CRT Scanlines & Neon Matrix HUD',
    tagline: 'Hacker-terminal aesthetic with green phosphor glows, ASCII headers, blinking cursors, and system metrics.',
    majorFeatures: [
      'Phosphor neon green (#00ff66) & cyber yellow glows on jet black (#050505)',
      'Subtle CRT scanline overlay effect with monospace JetBrains typography',
      'Interactive simulated command-line shell with executable commands',
      'System status telemetry gauges and raw ASCII art banners',
      'Retro-futuristic border frames with terminal prompt indicators'
    ],
    suitableWebsites: [
      {
        title: 'Cybersecurity & Ethical Hacking Portals',
        description: 'Perfect for penetration testing tools, bug bounty platforms, CTF competitions, and security firms.',
        badge: 'Infosec'
      },
      {
        title: 'Web3 Protocols & Smart Contract Audits',
        description: 'Gives crypto protocols, degen analytics, and security audit reports a distinctive crypto-native edge.',
        badge: 'Web3 & Crypto'
      },
      {
        title: 'Developer Personal Portfolios & CLI Homepages',
        description: 'Fun, deeply memorable portfolio for terminal power users, Linux kernel hackers, and backend architects.',
        badge: 'Personal Portfolio'
      }
    ]
  },
  'apple-ultra-showcase': {
    coreDesignName: 'Apple Ultra Showcase',
    aestheticVibe: 'Industrial Titanium & Precision Photography',
    tagline: 'Apple Pro-grade landing page with oversized cinematic hardware photography, titanium typography, and spec breakdowns.',
    majorFeatures: [
      'Edge-to-edge cinematic dark backdrop with titanium metallic typography',
      'Oversized product hero staging with high-detail specular reflections',
      'Spec comparison pills with aerospace-grade industrial iconography',
      'Precision scroll-triggered visual feature callouts',
      'Subtle metallic gradient buttons with ultra-smooth transitions'
    ],
    suitableWebsites: [
      {
        title: 'High-End Hardware & Gadget Reveals',
        description: 'Tailored for consumer electronics, custom mechanical keyboards, high-fidelity headphones, and drones.',
        badge: 'Hardware & Tech'
      },
      {
        title: 'Flagship Mobile Apps & Software Suites',
        description: 'Elevates premier software releases into a luxury product experience that justifies premium pricing.',
        badge: 'Flagship Apps'
      },
      {
        title: 'Industrial Design & Pro Equipment',
        description: 'Ideal for camera gear, studio microphones, smart home tech, and precision instrument manufacturers.',
        badge: 'Industrial'
      }
    ]
  },
  'bento-modular-grid': {
    coreDesignName: 'Bento Modular Grid',
    aestheticVibe: 'Apple & Vercel Bento Grid Layout',
    tagline: 'Asymmetric grid layout featuring interactive micro-widgets, animated telemetry cards, and multi-span containers.',
    majorFeatures: [
      'Multi-span responsive bento cards with diverse aspect ratios',
      'Embedded micro-widgets: sparklines, live toggles, user avatars, and status pills',
      'Delicate hairline borders with subtle radial hover spotlight illumination',
      'High information density with crystal-clear visual hierarchy',
      'Clean typography pairing with monospace numerical counters'
    ],
    suitableWebsites: [
      {
        title: 'Modern SaaS Feature Sections',
        description: 'The golden standard for SaaS feature showcases (like Vercel, Raycast, Apple) that demonstrate diverse capabilities cleanly.',
        badge: 'Feature Showcase'
      },
      {
        title: 'Product Overview & Solution Pages',
        description: 'Packs comprehensive platform capabilities into scannable, visual bite-sized widgets that retain user interest.',
        badge: 'Product Marketing'
      },
      {
        title: 'Analytics & Command Center Overviews',
        description: 'Great for highlighting multi-dimensional data, system uptime, active sessions, and performance scores in one view.',
        badge: 'Data & Analytics'
      }
    ]
  },
  'notion-clean-workspace': {
    coreDesignName: 'Notion Clean Workspace',
    aestheticVibe: 'Warm Parchment & Modular Blocks',
    tagline: 'Notion-inspired distraction-free document layout with warm parchment backgrounds, toggles, and block menus.',
    majorFeatures: [
      'Warm paper-white (#faf9f6) background with soothing charcoal typography',
      'Collapsible toggle lists, callout boxes with pastel backgrounds, and block drag handles',
      'Clean typographic hierarchy using classic serif and humanist sans pairings',
      'Understated dividers, tag pills, and breadcrumb navigation',
      'Distraction-free reading rhythm with generous margins'
    ],
    suitableWebsites: [
      {
        title: 'Knowledge Bases & Company Wikis',
        description: 'Inviting home for employee handbooks, onboarding guides, API docs, and internal operational playbooks.',
        badge: 'Knowledge Base'
      },
      {
        title: 'Product Documentation & Help Centers',
        description: 'User-friendly help center layout where customers can quickly scan FAQs and read troubleshooting steps.',
        badge: 'Support & Docs'
      },
      {
        title: 'Creator Resource Hubs & Curated Directories',
        description: 'Ideal for curated tool lists, reading libraries, courses, and digital resource packs.',
        badge: 'Resource Hub'
      }
    ]
  },
  'creator-substack-blog': {
    coreDesignName: 'Editorial Creator Substack',
    aestheticVibe: 'Editorial Serif & Long-Form Reading',
    tagline: 'Substack-style newsletter publication with centered editorial typography, email opt-in forms, and author cards.',
    majorFeatures: [
      'Centered single-column reading container with generous line-height for effortless reading',
      'Sophisticated Georgia or Merriweather serif headings paired with clean sans body',
      'Inline newsletter signup CTA cards with one-click email subscription',
      'Author bio avatars, publication timestamps, and estimated read-time pills',
      'Minimalist social sharing buttons and reader comment sections'
    ],
    suitableWebsites: [
      {
        title: 'Writer & Journalist Publications',
        description: 'Best for independent writers, cultural essayists, tech columnists, and personal newsletters.',
        badge: 'Publishing'
      },
      {
        title: 'Thought Leadership & Founder Blogs',
        description: 'Gives startup founders, VCs, and domain experts an authoritative, literary home for essays.',
        badge: 'Founder Brand'
      },
      {
        title: 'Research Dispatches & Case Studies',
        description: 'Presents deep analysis, market reports, and scientific digests in an uncluttered academic format.',
        badge: 'Research'
      }
    ]
  },
  'retro-y2k-os': {
    coreDesignName: 'Retro Desktop / Y2K OS',
    aestheticVibe: 'Nostalgic 90s Computing & Windows 95/98 Window Frame',
    tagline: 'Classic beveled 3D borders, blue title bar gradients, retro taskbar, pixel fonts, and window chrome.',
    majorFeatures: [
      'Beveled 2px raised and sunken relief borders with sharp white and black contrast lines',
      'Draggable window modal chrome with blue gradient title bar and minimize/maximize/close buttons',
      'Windows 95/98 style menu bar with File, Edit, View, Telemetry, and Help options',
      'Taskbar fixed at the bottom with a classic Start button and system digital clock',
      'Recessed input fields and metric readout tiles with inverted gray beveling'
    ],
    suitableWebsites: [
      {
        title: 'Developer & Creative Engineer Portfolios',
        description: 'Stands out instantly to recruiters, engineering teams, and nostalgic tech communities with playful retro craft.',
        badge: 'Personal Portfolio'
      },
      {
        title: 'Indie Game Studios & Launch Pages',
        description: 'Ideal for retro RPGs, chiptune albums, arcade emulation tools, and 90s inspired game projects.',
        badge: 'Gaming & Music'
      },
      {
        title: 'Interactive Easter Eggs & Marketing Drops',
        description: 'Creates viral buzz for limited-edition merchandise drops, hacker collectives, and nostalgic Web3 experiments.',
        badge: 'Viral Marketing'
      }
    ]
  },
  'technical-blueprint': {
    coreDesignName: 'Technical Blueprint / CAD Wireframe',
    aestheticVibe: 'Architectural Drafting Paper & Engineering Schematics',
    tagline: 'Deep cyan blueprint grid, dimension callout lines, crosshair markers, and engineering title block.',
    majorFeatures: [
      'Dual-layer millimeter isometric drafting grid background with origin coordinate markers',
      'Precision dimension measurement lines with tick marks indicating container widths and heights',
      'Crosshair cursor targets, wireframe component outlines, and technical leader lines',
      'Official engineering title block with Drawing Number, Scale (1:1), and Revision stamps',
      'High-contrast technical drafting yellow and blueprint cyan on deep navy canvas'
    ],
    suitableWebsites: [
      {
        title: 'Hard Tech, Robotics & Drones',
        description: 'Tailor-made for aerospace startups, autonomous vehicles, industrial robotics, and automation platforms.',
        badge: 'Hard Tech'
      },
      {
        title: 'Architecture & Structural Engineering',
        description: 'Builds instant authority for CAD plugin tools, 3D printing bureaus, and structural engineering consultancies.',
        badge: 'Architecture'
      },
      {
        title: 'High-Performance Systems & Compilers',
        description: 'Perfect for low-level systems infrastructure, database engines, and developer performance instrumentation.',
        badge: 'Dev Infra'
      }
    ]
  },
  'claymorphism-3d': {
    coreDesignName: 'Claymorphism / Soft 3D',
    aestheticVibe: 'Inflatable Soft-Touch 3D & Marshmallow Tactile UI',
    tagline: 'Dual inner shadows, inflated rounded pill buttons, playful tactile squishiness, and friendly pastel lilac.',
    majorFeatures: [
      'Dual-layer inner shadows creating an authentic inflated clay bubble appearance',
      'High border-radius pill shapes (rounded-3xl) with gentle physics hover transforms',
      'Floating 3D clay badges, squishy toggle pills, and pillowy button depression states',
      'Soft diffuse ambient color shadows beneath components rather than harsh black borders',
      'Friendly rounded sans typography with cheerful high-contrast accent highlights'
    ],
    suitableWebsites: [
      {
        title: 'Gamified EdTech & Learning Apps',
        description: 'Friendly, welcoming atmosphere for interactive language courses, math trainers, and coding challenges.',
        badge: 'EdTech'
      },
      {
        title: 'Personal Finance & Gen-Z Micro-Investing',
        description: 'Transforms intimidating finance into an approachable experience for savings jars, habit pots, and budget trackers.',
        badge: 'Consumer Fintech'
      },
      {
        title: 'Wellness, Mood & Meditation Trackers',
        description: 'Soothing visual treatment for mental health reflection apps, sleep monitors, and daily gratitude journals.',
        badge: 'Health & Wellness'
      }
    ]
  },
  'wabi-sabi-craft': {
    coreDesignName: 'Wabi-Sabi / Organic Paper Craft',
    aestheticVibe: 'Natural Textured Rice Paper, Sumi Charcoal & Earthy Terracotta',
    tagline: 'Handmade paper grain, sumi ink calligraphy accents, contemplative serif typography, and terracotta warmth.',
    majorFeatures: [
      'Warm textured rice paper background tone (#f8f6f0) with soothing sumi ink typography',
      'Contemplative editorial serif headings paired with clean, unhurried line-heights',
      'Minimalist hairline stone borders with quiet Japanese-inspired circular stamp accents',
      'Artisanal terracotta clay and matcha moss green color accents',
      'Generous spatial breathing room that rejects modern visual noise and urgency'
    ],
    suitableWebsites: [
      {
        title: 'Specialty Coffee, Tea & Matcha Roasters',
        description: 'Evokes craftsmanship and heritage for artisanal tea ceremonies, single-origin roasters, and ceramic studios.',
        badge: 'Artisanal Food'
      },
      {
        title: 'Boutique Architecture & Zen Hospitality',
        description: 'Superb for modern ryokans, eco-lodges, forest cabins, and minimalist architectural design studios.',
        badge: 'Hospitality'
      },
      {
        title: 'Mindfulness & Slow-Living Publications',
        description: 'Ideal for thoughtful reflection apps, slow-fashion lookbooks, and contemplative cultural newsletters.',
        badge: 'Slow Living'
      }
    ]
  },
  'spatial-visionos': {
    coreDesignName: 'Spatial VisionOS / Dimensional Glass',
    aestheticVibe: 'Spatial Optical Glass, Dynamic Refraction & Floating Capsule Dock',
    tagline: 'Extreme optical backdrop blur, prismatic edge lighting, floating capsule dock, and 3D spatial depth.',
    majorFeatures: [
      'Spatial glass cards with multi-layer optical backdrop-blur-3xl and white specular edge highlights',
      'Dynamic bottom capsule dock with active luminous indicator pills and blur reflection',
      'Deep cosmic ambient lighting with radial cyan and violet spatial glow spheres',
      'Multi-tier elevation hierarchy that mimics Apple Vision Pro spatial window surfaces',
      'Minimalist glowing pill badges with active beacon pulses'
    ],
    suitableWebsites: [
      {
        title: 'Spatial Computing & WebXR Applications',
        description: 'Companion sites and web demos for Vision Pro spatial apps, 3D web galleries, and VR experiences.',
        badge: 'Spatial & XR'
      },
      {
        title: 'Interactive 3D Product Configurators',
        description: 'Presents luxury automotive reveals, custom mechanical keyboards, and precision eyewear with cinematic depth.',
        badge: '3D Configurator'
      },
      {
        title: 'Immersive Audio & Media Streaming',
        description: 'Atmospheric staging for spatial audio tools, soundstage DAWs, and next-generation video streaming.',
        badge: 'Spatial Audio'
      }
    ]
  },
  'swiss-bauhaus-poster': {
    coreDesignName: 'Swiss International / Bauhaus Poster',
    aestheticVibe: 'Strict Bauhaus Mathematical Grid & Signal Red Editorial Poster',
    tagline: 'Heavy 900 grotesque typography, signal red & stark black contrast, asymmetric columns, and giant numerals.',
    majorFeatures: [
      'Strict mathematical multi-column grid with visible 2px solid black alignment rules',
      'Oversized section numerals (01, 02, 03) anchoring asymmetric editorial column layouts',
      'Pure geometric Bauhaus accents: solid signal red square, black circle, and geometric triangle',
      'Heavyweight grotesque 900 uppercase headings with zero letter spacing fluff',
      'High-impact signal red callout sections with inverted crisp white typography'
    ],
    suitableWebsites: [
      {
        title: 'Type Foundries & Design Agencies',
        description: 'Commands respect for font specimen showcases, design festival guides, and creative branding studios.',
        badge: 'Typography'
      },
      {
        title: 'Museums & Contemporary Art Exhibitions',
        description: 'Authoritative presentation for international biennales, modern art retrospectives, and cultural foundations.',
        badge: 'Arts & Culture'
      },
      {
        title: 'Architectural Monoliths & Urban Design',
        description: 'Presents brutalist architecture, mid-century furniture revivals, and urban design manifestos with conviction.',
        badge: 'Architecture'
      }
    ]
  },
  'bioluminescent-deep-tech': {
    coreDesignName: 'Bioluminescent Deep Tech',
    aestheticVibe: 'Abyssal Pitch Black & Electric Bioluminescent Luminescence',
    tagline: 'Abyssal midnight background, glowing electric cyan luminescence, toxic synth lime, and pulsing telemetry.',
    majorFeatures: [
      'Deep abyssal midnight canvas (#02050b) with glowing electric cyan (#00f0ff) ambient orbs',
      'Translucent dark glass pods with neon perimeter tracer illumination and subtle drop shadows',
      'Live pulsing status beacons and organic DNA filament iconography',
      'High-contrast neon electric CTA buttons that illuminate adjacent UI elements on hover',
      'Data telemetry cards with real-time latency indicators and synth lime activity trackers'
    ],
    suitableWebsites: [
      {
        title: 'Genomics & Synthetic BioTech',
        description: 'Perfect for CRISPR platforms, synthetic biology labs, molecular simulation, and biotech research hubs.',
        badge: 'BioTech'
      },
      {
        title: 'Deep Sea Exploration & Ocean Robotics',
        description: 'Authentic aesthetic for submersible telemetry, underwater sensor networks, and oceanographic institutions.',
        badge: 'Marine Tech'
      },
      {
        title: 'Next-Gen AI Neural Simulators',
        description: 'Electrifies quantum computing monitors, neural network visualizers, and algorithmic research models.',
        badge: 'Quantum AI'
      }
    ]
  }
};

/**
 * Returns complete suitability information, major features, and core design name for any design.
 */
export function getDesignSuitability(design: Design): DesignSuitabilityData {
  const mapped = SUITABILITY_MAP[design.slug];
  if (mapped) {
    return mapped;
  }

  // Smart fallback generator for any of the 30 designs based on design properties
  const coreDesignName = design.style || design.title.split('—')[1]?.trim() || design.title;
  const isDark = design.mode === 'dark';

  const defaultSuitability: WebsiteSuitability[] = [
    {
      title: `${design.category === 'saas-landings' ? 'SaaS & Web Applications' : design.category === 'dashboards' ? 'Analytics & Telemetry Dashboards' : design.category === 'pricing-conversion' ? 'High-Conversion Landing Pages' : design.category === 'ai-workspaces' ? 'AI Tools & Copilots' : 'Modern Web Products'}`,
      description: `Tailored for ${design.category.replace('-', ' ')} websites seeking a distinct ${coreDesignName.toLowerCase()} aesthetic with high user engagement.`,
      badge: 'Core Match'
    },
    {
      title: `${isDark ? 'Modern Tech & Developer Products' : 'Clean Consumer & Business Applications'}`,
      description: `Optimized for ${isDark ? 'developers, gamers, and tech-forward audiences' : 'general consumers, professionals, and enterprise workflows'} who appreciate ${design.fontType} typography.`,
      badge: 'Audience Fit'
    },
    {
      title: 'Digital Portfolio & Creative Showcase',
      description: `Ideal for teams and creators looking to present their work with ${design.colorPalette.name} styling and modern web interactions.`,
      badge: 'Showcase'
    }
  ];

  return {
    coreDesignName: coreDesignName,
    aestheticVibe: `${coreDesignName} • ${design.mode.toUpperCase()} MODE • ${design.colorPalette.name}`,
    tagline: design.tagline,
    majorFeatures: design.features.length > 0 ? design.features : [
      `Curated ${design.mode} color palette with ${design.colorPalette.accent} accent highlight`,
      `Modern typography pairing featuring ${design.defaultFont} (${design.fontType})`,
      'Fully responsive fluid container layout with multi-device support',
      'Clean interactive state feedback with smooth CSS transitions'
    ],
    suitableWebsites: design.suitableWebsites || defaultSuitability
  };
}
