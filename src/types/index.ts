export interface WebsiteSuitability {
  title: string;
  description: string;
  badge?: string;
}

export interface Design {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  style: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  mode: 'dark' | 'light';
  fontType: 'sans' | 'serif' | 'mono';
  defaultFont: string;
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
  suitableWebsites?: WebsiteSuitability[];
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
