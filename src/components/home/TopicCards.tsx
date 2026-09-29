import React from "react";
import Link from "next/link";
import { 
  Layers, 
  Sparkles, 
  Cpu, 
  GitMerge, 
  CheckCircle, 
  Briefcase, 
  Rocket, 
  ArrowRight 
} from "lucide-react";

interface TopicItem {
  name: string;
  slug: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  count: string;
  color: string;
}

const TOPICS: TopicItem[] = [
  {
    name: "SaaS",
    slug: "saas",
    description: "Business models, pricing psychology, unit economics & benchmarks",
    icon: Layers,
    count: "40+ Guides",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/60"
  },
  {
    name: "AI Tools",
    slug: "ai-tools",
    description: "Generative AI, enterprise LLMs, reasoning models & AI agents",
    icon: Sparkles,
    count: "28+ Tools",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900/60"
  },
  {
    name: "Software",
    slug: "software",
    description: "System architecture, developer tooling & cloud data systems",
    icon: Cpu,
    count: "35+ Reviews",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/60"
  },
  {
    name: "Automation",
    slug: "automation",
    description: "No-code workflows, webhooks, Zapier, Make & algorithmic ops",
    icon: GitMerge,
    count: "22+ Playbooks",
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/60"
  },
  {
    name: "Productivity",
    slug: "productivity",
    description: "Async collaboration, team wikis, project management & sprint tools",
    icon: CheckCircle,
    count: "30+ Reviews",
    color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900/60"
  },
  {
    name: "Business",
    slug: "business",
    description: "Software migration, vendor procurement & IT modernization",
    icon: Briefcase,
    count: "18+ Teardowns",
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-900/60"
  },
  {
    name: "Startups",
    slug: "startups",
    description: "Zero-to-one tech stacks, lean tooling & founder operations",
    icon: Rocket,
    count: "25+ Articles",
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-200 dark:rose-900/60"
  }
];

export function TopicCards() {
  return (
    <section className="py-12 bg-slate-50/70 dark:bg-slate-900/30 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-8">
          <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400">
            Browse By Subject
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Popular Topics &amp; Topic Clusters
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Structured thematic clusters arranged for fast retrieval and topic depth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOPICS.map((topic) => {
            const Icon = topic.icon;
            return (
              <Link
                key={topic.slug}
                href={`/${topic.slug}`}
                className="group p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/80 hover:border-indigo-300 dark:hover:border-indigo-800 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center border ${topic.color}`}>
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {topic.count}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                    <span>{topic.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>

                  <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
