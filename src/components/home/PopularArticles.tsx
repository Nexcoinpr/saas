import React from "react";
import { TrendingUp } from "lucide-react";
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
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200/80 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400" />
              <span className="text-xs uppercase tracking-widest font-extrabold text-blue-600 dark:text-cyan-400">
                Reader Favorites
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1 flex items-center gap-2.5">
              <span>Most Read Reviews This Month</span>
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
            </h2>
          </div>
          <span className="text-xs text-slate-600 dark:text-slate-400 mt-2 sm:mt-0 font-medium">
            Curated by our editorial staff based on reader feedback
          </span>
        </div>

        {/* 2-Column Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} variant="horizontal" />
          ))}
        </div>

      </div>
    </section>
  );
}
