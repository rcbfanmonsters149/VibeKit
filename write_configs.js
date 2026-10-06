const fs = require('fs');
const path = require('path');
const baseDir = 'C:\\Create_websites\\VibeKit';

// tsconfig.json
fs.writeFileSync(path.join(baseDir, 'tsconfig.json'), JSON.stringify({
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}, null, 2), 'utf8');

// next.config.mjs
fs.writeFileSync(path.join(baseDir, 'next.config.mjs'), `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
`, 'utf8');

// postcss.config.js
fs.writeFileSync(path.join(baseDir, 'postcss.config.js'), `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`, 'utf8');

// tailwind.config.ts
fs.writeFileSync(path.join(baseDir, 'tailwind.config.ts'), `import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        accent: {
          DEFAULT: "#06b6d4",
          neon: "#00f0ff",
          purple: "#a855f7",
          emerald: "#10b981",
          amber: "#f59e0b",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        heading: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px -3px rgba(139, 92, 246, 0.3)' },
          '100%': { boxShadow: '0 0 30px 4px rgba(139, 92, 246, 0.7)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
`, 'utf8');

// src/lib/utils.ts
fs.writeFileSync(path.join(baseDir, 'src/lib/utils.ts'), `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`, 'utf8');

// src/types/index.ts
fs.writeFileSync(path.join(baseDir, 'src/types/index.ts'), `export interface Design {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  style: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  features: string[];
  colorPalette: {
    name: string;
    bg: string;
    accent: string;
    text: string;
  };
  previewUrl: string;
  aiPrompt: {
    standard: string;
    cursorPrompt: string;
    v0Prompt: string;
    claudePrompt: string;
  };
  code: {
    react: string;
    html: string;
    vue?: string;
  };
  stats: {
    likes: number;
    views: string;
    vibecoders: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  description: string;
  count: number;
  gradient: string;
}
`, 'utf8');

// src/app/globals.css
fs.writeFileSync(path.join(baseDir, 'src/app/globals.css'), `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: #090a0f;
    --foreground: #f3f4f6;
    --card: #11131a;
    --card-foreground: #ffffff;
    --border: #1f2430;
    --primary: #8b5cf6;
    --primary-foreground: #ffffff;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  overflow-x: hidden;
}

/* Custom Scrollbars */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #090a0f;
}
::-webkit-scrollbar-thumb {
  background: #1f2430;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #374151;
}

/* Radial Glow Backgrounds */
.bg-grid-pattern {
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
}

.bg-dot-pattern {
  background-size: 24px 24px;
  background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
}

.glass-panel {
  background: rgba(17, 19, 26, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.glass-panel-hover {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.glass-panel-hover:hover {
  background: rgba(22, 25, 35, 0.9);
  border-color: rgba(139, 92, 246, 0.4);
  transform: translateY(-2px);
  box-shadow: 0 12px 30px -10px rgba(139, 92, 246, 0.2);
}

.glow-text {
  text-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
}
`, 'utf8');

console.log('Configs created successfully');
