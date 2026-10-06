export interface ComparisonContent {
  brand: {
    name: string;
    tagline: string;
    versionBadge: string;
  };
  navigation: {
    links: { label: string; href: string }[];
    signInText: string;
    primaryCtaText: string;
  };
  hero: {
    pillBadge: string;
    headline: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trustText: string;
  };
  metrics: {
    value: string;
    label: string;
    trend: string;
  }[];
  features: {
    tag: string;
    title: string;
    description: string;
    actionText: string;
    iconType: 'cpu' | 'shield' | 'terminal';
  }[];
  newsletter: {
    heading: string;
    subtext: string;
    placeholder: string;
    buttonText: string;
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
    ratingText: string;
  };
  footer: {
    copyright: string;
    statusText: string;
    links: { label: string; href: string }[];
  };
}

export const COMPARISON_CONTENT: ComparisonContent = {
  brand: {
    name: "PulseOS",
    tagline: "Real-time Developer Telemetry & Cloud Orchestration",
    versionBadge: "v2.4 Ready",
  },
  navigation: {
    links: [
      { label: "Overview", href: "#overview" },
      { label: "Features", href: "#features" },
      { label: "Solutions", href: "#solutions" },
      { label: "Pricing", href: "#pricing" },
    ],
    signInText: "Sign In",
    primaryCtaText: "Get Started",
  },
  hero: {
    pillBadge: "Next-Generation Platform",
    headline: "Supercharge your engineering workflow with real-time telemetry",
    subtitle: "Monitor performance, automate deployments, and collaborate with your team without leaving your terminal.",
    primaryCta: "Start 14-Day Free Trial",
    secondaryCta: "Schedule Product Demo",
    trustText: "No credit card required • Instant 2-minute setup • 99.99% uptime SLA",
  },
  metrics: [
    {
      value: "99.99%",
      label: "System Availability",
      trend: "+0.04% this month",
    },
    {
      value: "14ms",
      label: "Median Edge Latency",
      trend: "-3.2ms faster",
    },
    {
      value: "142k+",
      label: "Active Deployments",
      trend: "+12k this week",
    },
    {
      value: "4.9 / 5",
      label: "Developer Satisfaction",
      trend: "from 1,840 reviews",
    },
  ],
  features: [
    {
      tag: "Edge Compute",
      title: "Instant Global Replication",
      description: "Distribute your microservices to over 300 edge nodes with sub-millisecond cold starts and automatic caching.",
      actionText: "Explore Architecture →",
      iconType: "cpu",
    },
    {
      tag: "Enterprise Security",
      title: "Automated Compliance Guardrails",
      description: "Continuous vulnerability scanning, SOC-2 Type II audit logging, and automated branch permissions right out of the box.",
      actionText: "Read Security Spec →",
      iconType: "shield",
    },
    {
      tag: "Developer CLI",
      title: "Keyboard-Driven Orchestration",
      description: "Execute complex infrastructure changes with interactive command palette fuzzy search and git hooks.",
      actionText: "View CLI Reference →",
      iconType: "terminal",
    },
  ],
  newsletter: {
    heading: "Ready to accelerate your delivery cycle?",
    subtext: "Join thousands of top tier engineering teams shipping faster every day.",
    placeholder: "Enter your work email address...",
    buttonText: "Request Early Access",
  },
  testimonial: {
    quote: "PulseOS cut our deployment pipeline times by 65%. It is by far the most polished developer tool our team has ever used.",
    author: "Elena Rostova",
    role: "VP of Infrastructure, Veloce Labs",
    ratingText: "★★★★★ 5.0 Rating",
  },
  footer: {
    copyright: "© 2026 PulseOS Inc. All rights reserved.",
    statusText: "All Systems Operational",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Status", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
};
