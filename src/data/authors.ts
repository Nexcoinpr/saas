import { Author } from "@/types/blog";

export const AUTHORS: Author[] = [
  {
    id: "elena-vance",
    name: "Elena Vance",
    slug: "elena-vance",
    role: "Editor-in-Chief & SaaS Metrics Analyst",
    bio: "Elena Vance has over 12 years of experience covering enterprise cloud economics, B2B software architectures, and product-led growth. Previously a VP of Product Strategy at a Series B developer platform, she leads editorial direction and methodology at SaaSInsider.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    credentials: [
      "Former VP of Product Strategy at CloudFlow",
      "MBA from Stanford Graduate School of Business",
      "Featured speaker at SaaStr Annual and TechCrunch Disrupt"
    ],
    expertise: [
      "SaaS Unit Economics (CAC, LTV, NRR)",
      "B2B Pricing Strategies",
      "Product-Led Growth (PLG)",
      "Enterprise Software Procurement"
    ],
    twitter: "https://twitter.com/elenavance_tech",
    linkedin: "https://linkedin.com/in/elenavance-saas",
    website: "https://elenavance.io",
    articlesCount: 18
  },
  {
    id: "marcus-chen",
    name: "Marcus Chen",
    slug: "marcus-chen",
    role: "Principal Software Reviewer & Lead Engineer",
    bio: "Marcus Chen is a former senior systems engineer and tech lead who has benchmarked over 250 enterprise applications. He specializes in cloud hosting, software performance benchmarking, database architectures, and API integrations.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    credentials: [
      "B.S. in Computer Science from UC Berkeley",
      "10+ years engineering experience across distributed systems",
      "Certified Kubernetes Administrator (CKA)"
    ],
    expertise: [
      "Head-to-Head Software Benchmarking",
      "Cloud Infrastructure & Serverless",
      "Developer Tools & CI/CD",
      "Database & Storage Systems"
    ],
    twitter: "https://twitter.com/marcuschen_dev",
    linkedin: "https://linkedin.com/in/marcuschen-systems",
    github: "https://github.com/marcuschen-dev",
    articlesCount: 24
  },
  {
    id: "sophia-alvarez",
    name: "Dr. Sophia Alvarez",
    slug: "sophia-alvarez",
    role: "Lead AI & Automation Researcher",
    bio: "Dr. Sophia Alvarez leads artificial intelligence and workflow automation coverage at SaaSInsider. Holding a Ph.D. in Machine Learning, she analyzes generative AI models, enterprise agent architectures, and autonomous business workflows.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    credentials: [
      "Ph.D. in Machine Learning from MIT",
      "Former Senior Research Scientist in Applied NLP",
      "Author of 8 peer-reviewed publications on generative systems"
    ],
    expertise: [
      "Autonomous AI Agents",
      "Enterprise Large Language Models (LLMs)",
      "Workflow Automation (Zapier, Make, n8n)",
      "AI Governance & Safety"
    ],
    twitter: "https://twitter.com/drsophiaalvarez",
    linkedin: "https://linkedin.com/in/drsophiaalvarez",
    articlesCount: 15
  },
  {
    id: "david-ross",
    name: "David Ross",
    slug: "david-ross",
    role: "Senior Startup & Productivity Editor",
    bio: "David Ross has spent a decade advising seed and Series A startups on operational excellence, team collaboration toolkits, and async workspace architecture. He writes extensively on project management software, no-code stacks, and digital transformation.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    credentials: [
      "Co-founder of RemoteOps Collective",
      "Advisor to 15+ Y-Combinator alumni startups",
      "Former Head of Growth at Asana Integrations"
    ],
    expertise: [
      "Project & Task Management Systems",
      "Async Team Collaboration",
      "Startup Tech Stacks",
      "No-Code Business Operations"
    ],
    twitter: "https://twitter.com/davidross_ops",
    linkedin: "https://linkedin.com/in/davidross-ops",
    articlesCount: 19
  }
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find(a => a.slug === slug || a.id === slug);
}
