import React from "react";
import Link from "next/link";
import { Article } from "@/types/blog";
import { Network, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface TopicClusterLinksProps {
  currentArticle: Article;
  clusterArticles: Article[];
}

export function TopicClusterLinks({ currentArticle, clusterArticles }: TopicClusterLinksProps) {
  if (!clusterArticles || clusterArticles.length === 0) return null;

  return (
    <div className="my-10 p-6 rounded-2xl bg-gradient-to-br from-slate-50 via-cyan-50/20 to-slate-100/60 dark:from-slate-900/90 dark:via-cyan-950/20 dark:to-slate-950 border border-slate-200/80 dark:border-cyan-950/70 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <span className="p-1.5 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400">
          <Network className="w-4 h-4" />
        </span>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
          Related Research in {currentArticle.category.toUpperCase()}
        </h3>
      </div>
      <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
        Our research desk tested these related platforms side-by-side using the same benchmarking metrics:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {clusterArticles.slice(0, 4).map((art) => (
          <Link
            key={art.slug}
            href={art.path}
            className="flex items-start justify-between p-3 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-800 hover:border-cyan-500/80 hover:shadow-md transition-all group"
          >
            <div className="pr-2">
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 line-clamp-2 transition-colors">
                {art.title}
              </span>
              <div className="flex items-center gap-2 mt-1.5 text-[11px] text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" /> Tested
                </span>
                <span>•</span>
                <span>{art.readingTime}</span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-0.5" />
          </Link>
        ))}
      </div>
    </div>
  );
}
