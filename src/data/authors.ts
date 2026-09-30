import { Author } from "@/types/blog";

export const AUTHORS: Author[] = [
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    slug: "sarah-jenkins",
    role: "Editor-in-Chief & SaaS Finance Lead",
    bio: "Sarah spent nine years managing software budgets and subscription renewals at mid-sized tech companies before joining SaaSInsider. She tests pricing changes, audits contract terms, and breaks down the math behind software unit economics.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    credentials: [
      "Former Director of Finance Operations at CloudScale",
      "B.S. in Economics from University of Michigan",
      "Speaker on SaaS subscription economics"
    ],
    specialties: [
      "SaaS Unit Economics (CAC, LTV, NRR)",
      "Subscription Pricing Models",
      "Contract Renewal Math",
      "Software Procurement Checklists"
    ],
    twitter: "https://twitter.com/sarahjenkins_saas",
    linkedin: "https://linkedin.com/in/sarahjenkins-ops",
    website: "https://sarahjenkins.dev",
    articlesCount: 18,
    metaDescription: "Read software teardowns, subscription pricing models, and procurement guides by Sarah Jenkins, SaaS Finance Lead at SaaSInsider."
  },
  {
    id: "alex-rivera",
    name: "Alex Rivera",
    slug: "alex-rivera",
    role: "Principal Technical Reviewer & Systems Engineer",
    bio: "Alex is a backend software developer who spent over a decade maintaining distributed systems and internal developer portals. At SaaSInsider, he tests software speed, writes custom webhook scripts, and stress-tests third-party API limits.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    credentials: [
      "Former Senior Infrastructure Engineer at DataMesh",
      "B.S. in Computer Engineering from Georgia Tech",
      "Certified Kubernetes Administrator (CKA)"
    ],
    specialties: [
      "Head-to-Head Software Testing",
      "API & Webhook Reliability",
      "Cloud Infrastructure & Hosting",
      "Database & Backup Systems"
    ],
    twitter: "https://twitter.com/alexrivera_dev",
    linkedin: "https://linkedin.com/in/alexrivera-tech",
    github: "https://github.com/alexrivera-dev",
    articlesCount: 24,
    metaDescription: "Read hands-on software reviews, webhook testing, and cloud infrastructure guides by Alex Rivera, Systems Engineer at SaaSInsider."
  },
  {
    id: "maya-lin",
    name: "Maya Lin",
    slug: "maya-lin",
    role: "AI & Automation Editor",
    bio: "Maya has built automation pipelines and evaluated natural language software since 2019. She spends her workdays connecting webhooks across Zapier, Make, and Python to separate practical AI tools from marketing claims.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    credentials: [
      "M.S. in Computer Science from Carnegie Mellon",
      "Former Automation Specialist at ParsePoint",
      "Creator of open-source API testing scripts"
    ],
    specialties: [
      "Autonomous AI Agents",
      "Enterprise Language Models",
      "Workflow Automation (Zapier, Make, n8n)",
      "Data Privacy & Retention Rules"
    ],
    twitter: "https://twitter.com/mayalin_ai",
    linkedin: "https://linkedin.com/in/mayalin-automation",
    articlesCount: 15,
    metaDescription: "Read independent software teardowns, AI tool evaluations, and workflow automation guides by Maya Lin, AI Editor at SaaSInsider."
  },
  {
    id: "liam-cooper",
    name: "Liam Cooper",
    slug: "liam-cooper",
    role: "Workplace Software & Productivity Editor",
    bio: "Liam spent eight years setting up workspace software, documentation wikis, and task systems for software teams. He writes practical evaluations on how software handles real team communication.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    credentials: [
      "Former Product Operations Lead at TeamSync",
      "B.A. in Technical Communication from University of Washington",
      "Advisor to early-stage founder collectives"
    ],
    specialties: [
      "Project & Task Management Tools",
      "Team Knowledge Bases & Wikis",
      "Workspace Organization",
      "No-Code Business Workflows"
    ],
    twitter: "https://twitter.com/liamcooper_ops",
    linkedin: "https://linkedin.com/in/liamcooper-work",
    articlesCount: 19,
    metaDescription: "Read workplace software reviews, project management tests, and collaboration guides by Liam Cooper, Productivity Editor at SaaSInsider."
  }
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find(a => a.slug === slug || a.id === slug);
}
