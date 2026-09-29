import { Category } from "@/types/blog";

export const CATEGORIES: Category[] = [
  {
    id: "saas",
    name: "SaaS",
    slug: "saas",
    path: "/saas",
    description: "Clear explanations of software pricing, recurring revenue, unit economics, and growth numbers.",
    longDescription: "Understand how software as a service operates. Read full breakdowns of subscription revenue, customer loss rates, acquisition expenses, and pricing setups.",
    iconName: "Layers",
    metaTitle: "SaaS Industry Guides, Metrics & Pricing Models | Nexsas",
    metaDescription: "Read clear guides on software pricing models, CAC:LTV formulas, and subscription economics.",
    keywords: ["SaaS metrics", "SaaS pricing", "software as a service", "recurring revenue", "churn reduction", "SaaS benchmarks"]
  },
  {
    id: "reviews",
    name: "SaaS Reviews",
    slug: "reviews",
    path: "/reviews",
    description: "Hands-on, tested evaluations of business and productivity software.",
    longDescription: "Independent, tested software writeups. We test software across ease of use, feature depth, security settings, API connections, and real costs to help your team pick the right tool.",
    iconName: "Star",
    metaTitle: "Detailed SaaS & Software Reviews | Nexsas",
    metaDescription: "Read direct, hands-on software reviews with tested pros and cons, pricing breakdowns, and scorecards.",
    keywords: ["software reviews", "SaaS ratings", "software evaluations", "tool teardowns", "B2B software reviews"]
  },
  {
    id: "comparisons",
    name: "SaaS Comparisons",
    slug: "comparisons",
    path: "/comparisons",
    description: "Side-by-side feature comparisons, pricing charts, and tool recommendations.",
    longDescription: "Unsure which tool fits your team? Our side-by-side comparisons evaluate two competing apps with feature tables, pricing values, and direct recommendations.",
    iconName: "Scale",
    metaTitle: "Software Comparisons & Head-to-Head Tests | Nexsas",
    metaDescription: "Compare competing software tools side by side. Clear feature tables, pricing reviews, and straightforward recommendations for your team.",
    keywords: ["software comparisons", "tool vs tool", "SaaS alternative", "feature showdown", "head to head software"]
  },
  {
    id: "ai-tools",
    name: "AI Tools",
    slug: "ai-tools",
    path: "/ai-tools",
    description: "Language models, autonomous software assistants, and machine learning tools.",
    longDescription: "Keep track of artificial intelligence software. We review autonomous assistants, LLM tools, media generators, and workplace apps.",
    iconName: "Sparkles",
    metaTitle: "AI Tools for Business, Productivity & Automation | Nexsas",
    metaDescription: "Curated reviews of artificial intelligence tools, automated assistants, and generative apps for modern workplace tasks.",
    keywords: ["AI tools", "business AI", "generative AI software", "autonomous agents", "AI workflow", "LLM software"]
  },
  {
    id: "software",
    name: "Software",
    slug: "software",
    path: "/software",
    description: "Engineering tools, code editors, databases, and developer infrastructure.",
    longDescription: "Articles on developer utilities, code editors, system architecture, APIs, and hosting foundations.",
    iconName: "Cpu",
    metaTitle: "Software Engineering & Developer Tools | Nexsas",
    metaDescription: "Articles on software architecture, developer tools, database systems, and infrastructure.",
    keywords: ["software architecture", "developer tools", "tech stack", "APIs", "enterprise software"]
  },
  {
    id: "productivity",
    name: "Productivity",
    slug: "productivity",
    path: "/productivity",
    description: "Project management, notes, company wikis, and team collaboration apps.",
    longDescription: "Improve how your team works. From wikis to task lists, discover apps that cut down on daily manual steps and keep teammates connected.",
    iconName: "CheckCircle",
    metaTitle: "Team Productivity, Task Management & Wikis | Nexsas",
    metaDescription: "Practical guides and software evaluations to help your team finish work on schedule.",
    keywords: ["team productivity", "project management", "collaboration tools", "time management software", "knowledge management"]
  },
  {
    id: "automation",
    name: "Automation",
    slug: "automation",
    path: "/automation",
    description: "No-code connections, webhook pipelines, Zapier, Make, and script builders.",
    longDescription: "Eliminate repetitive data copy-pasting, alerts, and customer follow-ups using no-code integration tools and custom webhooks.",
    iconName: "GitMerge",
    metaTitle: "Business Automation, No-Code & API Workflows | Nexsas",
    metaDescription: "Learn how to link apps with Zapier, Make, n8n, and webhooks to run operations without manual data entry.",
    keywords: ["workflow automation", "no-code automation", "Zapier vs Make", "business automation", "API integration"]
  },
  {
    id: "business",
    name: "Business",
    slug: "business",
    path: "/business",
    description: "Software purchasing, vendor contracts, IT spending, and workplace tools.",
    longDescription: "Make sure software purchases deliver clear return. Practical guides on vendor negotiations, data rules, and replacing outdated tools.",
    iconName: "Briefcase",
    metaTitle: "Business Technology & Software Purchasing | Nexsas",
    metaDescription: "Executive guides on software purchasing, vendor contracts, and tool replacement.",
    keywords: ["business technology", "software purchasing", "SaaS contracts", "vendor selection"]
  },
  {
    id: "startups",
    name: "Startups",
    slug: "startups",
    path: "/startups",
    description: "Practical software stacks, bootstrap budgets, and growth tools for founders.",
    longDescription: "Software choices and operational playbooks for early-stage teams to build, launch, and acquire their first paying accounts.",
    iconName: "Rocket",
    metaTitle: "Startup Software Stacks & Founder Playbooks | Nexsas",
    metaDescription: "Curated software stacks, budget tools, and operational guides for early-stage software founders.",
    keywords: ["startup tools", "founder tech stack", "product led growth", "early stage SaaS", "lean startup"]
  },
  {
    id: "cloud",
    name: "Cloud Computing",
    slug: "cloud",
    path: "/cloud",
    description: "Serverless systems, databases, hosting plans, and server bills.",
    longDescription: "Detailed writeups on server hosting costs, container setups, database backups, and keeping cloud bills under control.",
    iconName: "Cloud",
    metaTitle: "Cloud Computing, Hosting & Server Cost Guides | Nexsas",
    metaDescription: "Guides on cloud hosting plans, serverless systems, multi-cloud setups, and lowering server bills.",
    keywords: ["cloud computing", "cloud hosting", "multi-tenant SaaS", "AWS GCP Azure", "cloud cost reduction"]
  },
  {
    id: "tutorials",
    name: "Tutorials",
    slug: "tutorials",
    path: "/tutorials",
    description: "Step-by-step setup guides, code configurations, and software walk-throughs.",
    longDescription: "Step-by-step setup tutorials with real configuration snippets, architecture diagrams, and testing steps.",
    iconName: "BookOpen",
    metaTitle: "Software Tutorials & Step-by-Step Setup Guides | Nexsas",
    metaDescription: "Step-by-step tutorials for configuring, integrating, and setting up business software and APIs.",
    keywords: ["software tutorials", "tech tutorials", "API setup", "developer tutorials"]
  },
  {
    id: "how-to",
    name: "How-To Guides",
    slug: "how-to",
    path: "/how-to",
    description: "Direct walk-throughs solving everyday software questions and bottlenecks.",
    longDescription: "Fast answers to specific software tasks: exporting records, setting up logins, connecting webhooks, and adjusting account permissions.",
    iconName: "HelpCircle",
    metaTitle: "How-To Guides for SaaS & Workplace Software | Nexsas",
    metaDescription: "Step-by-step how-to playbooks solving immediate workflow bottlenecks in business and productivity software.",
    keywords: ["how to guides", "software step by step", "SaaS how to", "quick tech fixes"]
  },
  {
    id: "news",
    name: "SaaS News",
    slug: "news",
    path: "/news",
    description: "Software acquisitions, quarterly market numbers, new version releases, and policy changes.",
    longDescription: "Clear reporting on major software news: funding rounds, public listings, pricing changes, and platform updates.",
    iconName: "Newspaper",
    metaTitle: "SaaS News, Product Releases & Market Reports | Nexsas",
    metaDescription: "Timely reporting on software market data, product releases, acquisitions, and industry shifts.",
    keywords: ["SaaS news", "software industry news", "tech releases", "SaaS IPOs", "venture trends"]
  },
  {
    id: "resources",
    name: "Resources",
    slug: "resources",
    path: "/resources",
    description: "Software buyer checklists, financial formulas, and terminology definitions.",
    longDescription: "Free buyer scorecards, software evaluation forms, metric cheat sheets, and terminology definitions.",
    iconName: "FolderArchive",
    metaTitle: "SaaS Buyer Resources, Checklists & Tech Directories | Nexsas",
    metaDescription: "Free buyer guides, software evaluation scorecards, and architectural cheat sheets for technology leaders.",
    keywords: ["SaaS resources", "software buyer guide", "tech checklists", "SaaS glossary"]
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug || c.id === slug);
}
