export type BlockType = 
  | 'navbar' 
  | 'hero' 
  | 'bento' 
  | 'features' 
  | 'stats' 
  | 'pricing' 
  | 'testimonials' 
  | 'cta' 
  | 'footer' 
  | 'custom';

export type BlockLayout = 
  | '1-col-centered' 
  | '2-col-split' 
  | '3-col-grid' 
  | '4-col-grid' 
  | 'bento-grid' 
  | 'card-stack';

export interface WireframeBlock {
  id: string;
  type: BlockType;
  title: string;
  layout: BlockLayout;
  description: string; // What the user explains should be in this block
  elements: string[];  // e.g. ['Pill Badge', 'Headline', 'CTA Button', 'Avatar Social Proof', 'Search Bar']
  specialNotes?: string; // e.g. 'Pulsing cyan glow, glassmorphism frosted glass border'
}

export interface PromptCompilerOptions {
  blocks: WireframeBlock[];
  styleId: string; // e.g. 'neobrutalism', 'spatial-visionos', 'minimal-clean', etc.
  targetTool: 'cursor' | 'claude' | 'v0' | 'bolt';
  framework?: string; // default: 'Next.js 15 (App Router) + Tailwind CSS + Lucide Icons'
  pageName?: string;
}
