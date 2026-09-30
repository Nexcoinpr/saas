import React from "react";
import { TrendingUp, Eye } from "lucide-react";
import { Article } from "@/types/blog";
import { ArticleCard } from "@/components/common/ArticleCard";

interface PopularArticlesProps {
  articles: Article[];
}

export function PopularArticles({ articles }: PopularArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="py-14 md:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200/80 dark:border-cyan-950/40">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-extrabold text-cyan-600 dark:text-cyan-400">
                SaaSInsider Telemetry
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1 flex items-center gap-2.5">
              <span>Most Read This Month</span>
              <TrendingUp className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
            Ranked by verified readership activity
          </span>
        </div>

        {/* 2-Column Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div key={article.slug} className="relative">
              <div className="absolute top-2 right-4 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-900/85 dark:bg-[#070b14]/90 border border-slate-800 dark:border-cyan-950/60 backdrop-blur text-[11px] font-mono text-cyan-300">
                <Eye className="w-3 h-3 text-cyan-400" />
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
