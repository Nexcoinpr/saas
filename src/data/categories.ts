import { Category } from "@/types/blog";

export const CATEGORIES: Category[] = [
  {
    id: "saas",
    name: "SaaS",
    slug: "saas",
    path: "/saas",
    description: "In-depth insights into SaaS business models, unit economics, metrics, and industry benchmarks.",
    longDescription: "Master the dynamics of modern Software as a Service. Explore comprehensive breakdowns of recurring revenue models, churn mitigation, customer acquisition strategies, SaaS pricing architectures, and market benchmarks.",
    iconName: "Layers",
    metaTitle: "SaaS Industry Guides, Metrics & Business Models | SaaSInsider",
    metaDescription: "Explore expert insights on SaaS growth, pricing models, CAC:LTV economics, and industry trends to build and scale recurring revenue software.",
    keywords: ["SaaS metrics", "SaaS pricing", "software as a service", "recurring revenue", "churn reduction", "SaaS benchmarks"]
  },
  {
    id: "reviews",
    name: "SaaS Reviews",
    slug: "reviews",
    path: "/reviews",
    description: "Hands-on, rigorous, and verified evaluations of B2B and consumer software platforms.",
    longDescription: "Unbiased, deeply tested software reviews. We test software across usability, feature depth, enterprise security, API flexibility, and total cost of ownership to help buying committees make confident decisions.",
    iconName: "Star",
    metaTitle: "Comprehensive SaaS & Software Reviews | SaaSInsider",
    metaDescription: "Read objective, hands-on software reviews with verified pros and cons, pricing teardowns, and scorecard ratings for modern tools.",
    keywords: ["software reviews", "SaaS ratings", "software evaluations", "tool teardowns", "B2B software reviews"]
  },
  {
    id: "comparisons",
    name: "SaaS Comparisons",
    slug: "comparisons",
    path: "/comparisons",
    description: "Head-to-head feature matrices, pricing breakdowns, and use-case comparisons.",
    longDescription: "Indecisive about two leading platforms? Our head-to-head comparisons pit flagship products against each other with feature matrices, pricing value teardowns, and scenario-based recommendations.",
    iconName: "Scale",
    metaTitle: "Software Comparisons & Head-to-Head Showdowns | SaaSInsider",
    metaDescription: "Compare the leading SaaS platforms side by side. Clear feature matrices, pricing evaluations, and direct recommendations for your team.",
    keywords: ["software comparisons", "tool vs tool", "SaaS alternative", "feature showdown", "head to head software"]
  },
  {
    id: "ai-tools",
    name: "AI Tools",
    slug: "ai-tools",
    path: "/ai-tools",
    description: "Next-generation generative AI, agentic systems, and machine intelligence software for enterprise teams.",
    longDescription: "Stay at the frontier of artificial intelligence. We analyze autonomous AI agents, enterprise LLM wrappers, multimodal creativity suites, and machine learning infrastructure driving operational productivity.",
    iconName: "Sparkles",
    metaTitle: "Best AI Tools for Business, Productivity & Automation | SaaSInsider",
    metaDescription: "Discover curated evaluations of leading artificial intelligence tools, agent workflows, and generative platforms reshaping modern digital work.",
    keywords: ["AI tools", "business AI", "generative AI software", "autonomous agents", "AI workflow", "LLM software"]
  },
  {
    id: "software",
    name: "Software",
    slug: "software",
    path: "/software",
    description: "Architecture, developer tools, database systems, and modern digital infrastructure.",
    longDescription: "Examine core software paradigms, enterprise tech stacks, API design, DevOps pipelines, and developer tooling shaping modern applications.",
    iconName: "Cpu",
    metaTitle: "Software Engineering, Architecture & Dev Tools | SaaSInsider",
    metaDescription: "Articles and teardowns on software architecture, developer productivity suites, tech stack evaluation, and digital infrastructure.",
    keywords: ["software architecture", "developer tools", "tech stack", "APIs", "enterprise software"]
  },
  {
    id: "productivity",
    name: "Productivity",
    slug: "productivity",
    path: "/productivity",
    description: "Project management, asynchronous collaboration, and high-performance operating systems for teams.",
    longDescription: "Streamline how your team executes. From knowledge management and task prioritization to async communication frameworks, discover tools that eliminate friction.",
    iconName: "CheckCircle",
    metaTitle: "Team Productivity, Task Management & Collaboration | SaaSInsider",
    metaDescription: "Actionable frameworks and software reviews to elevate personal and team productivity, task execution, and async communication.",
    keywords: ["team productivity", "project management", "collaboration tools", "time management software", "knowledge management"]
  },
  {
    id: "automation",
    name: "Automation",
    slug: "automation",
    path: "/automation",
    description: "Workflow engines, webhooks, no-code integrations, and algorithmic business automation.",
    longDescription: "Automate repetitive data hygiene, notifications, customer onboarding, and back-office pipelines using no-code integration builders and custom API webhooks.",
    iconName: "GitMerge",
    metaTitle: "Business Automation, No-Code & API Workflows | SaaSInsider",
    metaDescription: "Learn how to build resilient automated workflows with Zapier, Make, n8n, and custom webhooks to scale business operations effortlessly.",
    keywords: ["workflow automation", "no-code automation", "Zapier vs Make", "business automation", "API integration"]
  },
  {
    id: "business",
    name: "Business",
    slug: "business",
    path: "/business",
    description: "Digital transformation, organizational operating systems, and B2B tech investment strategy.",
    longDescription: "Align software investments with bottom-line corporate impact. Navigate procurement, vendor negotiations, data governance, and technology modernization.",
    iconName: "Briefcase",
    metaTitle: "Business Technology & Digital Transformation | SaaSInsider",
    metaDescription: "Strategic guides for executive leaders on software procurement, tech consolidation, and digital transformation.",
    keywords: ["business technology", "digital transformation", "SaaS procurement", "enterprise tech strategy"]
  },
  {
    id: "startups",
    name: "Startups",
    slug: "startups",
    path: "/startups",
    description: "Lean tooling, product-led growth engines, and zero-to-one tech stacks for founders.",
    longDescription: "Everything early-stage and venture-backed founders need to bootstrap, iterate, and scale their product-led growth funnels with modern software.",
    iconName: "Rocket",
    metaTitle: "Startup Tech Stacks, PLG & Founder Toolkits | SaaSInsider",
    metaDescription: "Curated software stacks, growth engines, and operating playbooks designed specifically for early-stage software founders.",
    keywords: ["startup tools", "founder tech stack", "product led growth", "early stage SaaS", "lean startup"]
  },
  {
    id: "cloud",
    name: "Cloud Computing",
    slug: "cloud",
    path: "/cloud",
    description: "Serverless architectures, multi-tenant databases, cloud hosting, and infrastructure costs.",
    longDescription: "Deep dives into cloud economics, Kubernetes orchestration, edge computing, multi-region database redundancy, and cloud cost management.",
    iconName: "Cloud",
    metaTitle: "Cloud Computing, Infrastructure & Hosting Guides | SaaSInsider",
    metaDescription: "Explore cloud architecture patterns, serverless computing, multi-cloud strategies, and cloud infrastructure optimization.",
    keywords: ["cloud computing", "cloud hosting", "multi-tenant SaaS", "AWS GCP Azure", "cloud cost optimization"]
  },
  {
    id: "tutorials",
    name: "Tutorials",
    slug: "tutorials",
    path: "/tutorials",
    description: "Technical step-by-step guides, code configurations, and software setup tutorials.",
    longDescription: "Deeply educational implementation tutorials complete with code snippets, architecture diagrams, and production configuration parameters.",
    iconName: "BookOpen",
    metaTitle: "Software Tutorials & Implementation Guides | SaaSInsider",
    metaDescription: "Hands-on tutorials for setting up, integrating, and configuring modern software stacks and developer APIs.",
    keywords: ["software tutorials", "tech tutorials", "API setup", "developer tutorials"]
  },
  {
    id: "how-to",
    name: "How-To Guides",
    slug: "how-to",
    path: "/how-to",
    description: "Clear, practical, and outcome-oriented playbooks for everyday software workflows.",
    longDescription: "Fast answers to specific software questions. Learn how to export data, configure SSO, connect disparate webhooks, and optimize settings across leading SaaS platforms.",
    iconName: "HelpCircle",
    metaTitle: "Practical How-To Guides for SaaS & Software | SaaSInsider",
    metaDescription: "Step-by-step how-to playbooks solving immediate workflow bottlenecks in business and productivity software.",
    keywords: ["how to guides", "software step by step", "SaaS how to", "quick tech fixes"]
  },
  {
    id: "news",
    name: "SaaS News",
    slug: "news",
    path: "/news",
    description: "Mergers & acquisitions, quarterly market trends, major software releases, and policy shifts.",
    longDescription: "Stay ahead of breaking shifts in the software industry. Analysis of notable funding rounds, IPOs, antitrust developments, and major software updates.",
    iconName: "Newspaper",
    metaTitle: "SaaS Industry News, Product Launches & Market Analysis | SaaSInsider",
    metaDescription: "Timely reporting and thoughtful analysis on SaaS market trends, tech IPOs, major feature launches, and ecosystem shifts.",
    keywords: ["SaaS news", "software industry news", "tech releases", "SaaS IPOs", "venture trends"]
  },
  {
    id: "resources",
    name: "Resources",
    slug: "resources",
    path: "/resources",
    description: "Curated software directories, buyer checklists, ROI calculators, and glossaries.",
    longDescription: "Downloadable buyer templates, software evaluation matrices, SaaS terminology glossaries, and comprehensive tech stack directories.",
    iconName: "FolderArchive",
    metaTitle: "SaaS Buyer Resources, Checklists & Tech Directories | SaaSInsider",
    metaDescription: "Free buyer guides, software evaluation scorecards, and architectural cheat sheets for technology leaders.",
    keywords: ["SaaS resources", "software buyer guide", "tech checklists", "SaaS glossary"]
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug || c.id === slug);
}
