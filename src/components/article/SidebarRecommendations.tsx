import React from "react";
import Link from "next/link";
import { Article } from "@/types/blog";
import { TrendingUp, Layers, ArrowRight } from "lucide-react";

interface SidebarRecommendationsProps {
  currentSlug: string;
  popularArticles: Article[];
}

const POPULAR_HUBS = [
  { name: "SaaS Reviews", path: "/reviews" },
  { name: "SaaS Comparisons", path: "/comparisons" },
  { name: "CRM & Sales", path: "/crm" },
  { name: "Productivity", path: "/productivity" },
  { name: "AI Tools", path: "/ai-tools" },
  { name: "Automation", path: "/automation" },
  { name: "Developer Tools", path: "/software" },
  { name: "SaaS Industry", path: "/saas" },
];

export function SidebarRecommendations({ currentSlug, popularArticles }: SidebarRecommendationsProps) {
  const filtered = popularArticles.filter(a => a.slug !== currentSlug).slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Trending Articles Box */}
      <div className="p-5 rounded-2xl border border-slate-200/90 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] shadow-sm">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
          <TrendingUp className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
            Trending Showdowns &amp; Reviews
          </h3>
        </div>

        <div className="space-y-3.5">
          {filtered.map((item, idx) => (
            <Link
              key={item.slug}
              href={item.path}
              className="group block space-y-1 transition-colors"
            >
              <div className="flex items-center gap-2 text-[10px] font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                <span>0{idx + 1}</span>
                <span>•</span>
                <span>{item.subcategory || item.category}</span>
              </div>
              <p className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 line-clamp-2 leading-snug transition-colors">
                {item.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
          <Link
            href="/comparisons"
            className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center justify-between"
          >
            <span>View All Software Comparisons</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Category Pillar Hubs Box */}
      <div className="p-5 rounded-2xl border border-slate-200/90 dark:border-cyan-950/60 bg-slate-50/60 dark:bg-[#0a0f1d] shadow-sm">
        <div className="flex items-center gap-2 mb-3.5 pb-2.5 border-b border-slate-200/70 dark:border-slate-800">
          <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
            Software Category Pillars
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {POPULAR_HUBS.map((hub) => (
            <Link
              key={hub.path}
              href={hub.path}
              className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              {hub.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
