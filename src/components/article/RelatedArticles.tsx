import React from "react";
import Link from "next/link";
import { Article } from "@/types/blog";
import { ArticleCard } from "@/components/common/ArticleCard";
import { ArrowRight, Compass, Layers } from "lucide-react";

interface RelatedArticlesProps {
  articles: Article[];
  categorySlug: string;
}

export function RelatedArticles({ articles, categorySlug }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="my-16 pt-12 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5 mb-1.5">
            <Compass className="w-3.5 h-3.5 text-cyan-500" />
            Continue Your Software Evaluation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Related Guides, Comparisons &amp; Teardowns
          </h2>
        </div>

        <Link
          href={`/${categorySlug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors group"
        >
          <span>Browse all guides in this topic</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(0, 6).map((art) => (
          <ArticleCard key={art.slug} article={art} />
        ))}
      </div>

      {/* Internal Linking Topic Cluster Bar */}
      <div className="mt-12 p-6 rounded-2xl bg-slate-50 dark:bg-[#0a0f1d] border border-slate-200/80 dark:border-cyan-950/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
            <Layers className="w-4 h-4" />
          </span>
          <div>
            <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Browse Software Pillar Hubs
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Jump directly into tested tool collections and category rankings.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <Link
            href="/comparisons"
            className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            All Comparisons
          </Link>
          <Link
            href="/reviews"
            className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            All Reviews
          </Link>
          <Link
            href="/crm"
            className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            CRM &amp; Sales
          </Link>
          <Link
            href="/productivity"
            className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            Productivity
          </Link>
          <Link
            href="/ai-tools"
            className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            AI Tools
          </Link>
          <Link
            href="/automation"
            className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
          >
            Automation
          </Link>
        </div>
      </div>
    </section>
  );
}
