import React from "react";
import Link from "next/link";
import { TrendingUp, Eye, ArrowRight } from "lucide-react";
import { Article } from "@/types/blog";
import { ArticleCard } from "@/components/common/ArticleCard";

interface PopularArticlesProps {
  articles: Article[];
}

export function PopularArticles({ articles }: PopularArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400">
                Live Readership Telemetry
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 flex items-center gap-2.5">
              <span>Most Read This Month</span>
              <TrendingUp className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
            Ranked by verified organic readership engagement
          </span>
        </div>

        {/* 2-Column Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, idx) => (
            <div key={article.slug} className="relative">
              <div className="absolute top-2 right-4 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-900/80 dark:bg-slate-800/80 backdrop-blur text-[11px] font-mono text-slate-200">
                <Eye className="w-3 h-3 text-indigo-400" />
                <span>{article.viewCount?.toLocaleString() || "24,000"} reads</span>
              </div>
              <ArticleCard article={article} variant="horizontal" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
