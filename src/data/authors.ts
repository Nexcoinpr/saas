import { Author } from "@/types/blog";

export const AUTHORS: Author[] = [
  {
    id: "elena-vance",
    name: "Elena Vance",
    slug: "elena-vance",
    role: "Editor-in-Chief & SaaS Metrics Analyst",
    bio: "Elena Vance has over 12 years of background covering software economics, business applications, and product growth. Previously VP of Product Strategy at a developer platform, she leads editorial direction and testing standards at SaaSInsider.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    credentials: [
      "Former VP of Product Strategy at CloudFlow",
      "MBA from Stanford Graduate School of Business",
      "Speaker at SaaStr Annual and TechCrunch Disrupt"
    ],
    specialties: [
      "SaaS Unit Economics (CAC, LTV, NRR)",
      "B2B Pricing Plans",
      "Product Growth Models",
      "Enterprise Software Purchasing"
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
    bio: "Marcus Chen is a former systems engineer and tech lead who has tested over 250 enterprise applications. He focuses on server hosting, software speed tests, database systems, and API integrations.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    credentials: [
      "B.S. in Computer Science from UC Berkeley",
      "10+ years engineering across distributed systems",
      "Certified Kubernetes Administrator (CKA)"
    ],
    specialties: [
      "Head-to-Head Software Testing",
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
    bio: "Dr. Sophia Alvarez heads artificial intelligence and workflow automation coverage at SaaSInsider. Holding a Ph.D. in Machine Learning, she reviews language models, automated assistants, and business workflows.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    credentials: [
      "Ph.D. in Machine Learning from MIT",
      "Former Senior Research Scientist in Applied NLP",
      "Author of 8 peer-reviewed publications on machine intelligence"
    ],
    specialties: [
      "Autonomous AI Assistants",
      "Enterprise Large Language Models (LLMs)",
      "Workflow Linking (Zapier, Make, n8n)",
      "AI Data Safety & Privacy Rules"
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
    bio: "David Ross has spent a decade advising early-stage companies on team coordination and workspace software. He writes on project management software, no-code stacks, and tool replacement.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    credentials: [
      "Co-founder of RemoteOps Collective",
      "Advisor to 15+ Y-Combinator alumni startups",
      "Former Growth Lead at Asana Integrations"
    ],
    specialties: [
      "Project & Task Management Systems",
      "Async Team Coordination",
      "Startup Software Stacks",
      "No-Code Operations"
    ],
    twitter: "https://twitter.com/davidross_ops",
    linkedin: "https://linkedin.com/in/davidross-ops",
    articlesCount: 19
  }
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find(a => a.slug === slug || a.id === slug);
}
