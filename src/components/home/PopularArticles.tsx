"use client";

import React, { useState, useEffect } from "react";
import { TrendingUp, Shuffle } from "lucide-react";
import { Article } from "@/types/blog";
import { ArticleCard } from "@/components/common/ArticleCard";

interface PopularArticlesProps {
  articles: Article[];
  allArticles?: Article[];
}

export function PopularArticles({ articles, allArticles = [] }: PopularArticlesProps) {
  const [displayedArticles, setDisplayedArticles] = useState<Article[]>(articles);

  // Pool of candidate articles to sample from
  const candidatePool = allArticles.length > 0 ? allArticles : articles;

  const shufflePicks = () => {
    if (candidatePool.length <= 4) return;
    const shuffled = [...candidatePool].sort(() => 0.5 - Math.random()).slice(0, 6);
    setDisplayedArticles(shuffled);
  };

  useEffect(() => {
    // Randomize on client mount so each visit gets a fresh random selection
    if (candidatePool.length > 4) {
      const shuffled = [...candidatePool].sort(() => 0.5 - Math.random()).slice(0, 6);
      setDisplayedArticles(shuffled);
    }
  }, []);

  if (!displayedArticles || displayedArticles.length === 0) return null;

  return (
    <section className="py-14 md:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200/80 dark:border-slate-800 gap-4">
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
          
          <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              Curated by our editorial staff based on reader feedback
            </span>
            <button
              onClick={shufflePicks}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700 shrink-0 cursor-pointer"
              title="Shuffle picks"
            >
              <Shuffle className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
              <span>Shuffle Picks</span>
            </button>
          </div>
        </div>

        {/* 2-Column Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} variant="horizontal" />
          ))}
        </div>

      </div>
    </section>
  );
}
