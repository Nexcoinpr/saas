"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Article } from "@/types/blog";
import { ArticleCard } from "@/components/common/ArticleCard";
import { ArrowRight } from "lucide-react";

interface LatestArticlesGridProps {
  articles: Article[];
}

export function LatestArticlesGrid({ articles }: LatestArticlesGridProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterTabs = [
    { label: "All Formats", value: "all" },
    { label: "In-Depth Analysis", value: "informational" },
    { label: "Software Reviews", value: "review" },
    { label: "Comparisons", value: "comparison" },
    { label: "How-To & Tutorials", value: "how-to" },
  ];

  const filteredArticles = selectedFilter === "all"
    ? articles
    : articles.filter(a => a.template === selectedFilter);

  return (
    <section id="latest-articles" className="py-14 md:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Format Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200/80 dark:border-cyan-950/40 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              Nexsas Dispatches
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              Latest Intel &amp; Playbooks
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-[#0a0f1d] border border-slate-200/80 dark:border-cyan-950/60">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedFilter(tab.value)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedFilter === tab.value
                    ? "bg-white dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-300 border border-slate-200/50 dark:border-cyan-800/60 shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {/* View All In Search */}
        <div className="mt-12 text-center">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-cyan-900/60 bg-white dark:bg-[#0a0f1d] hover:bg-slate-50 dark:hover:bg-cyan-950/40 text-slate-900 dark:text-slate-100 font-semibold text-sm transition-all shadow-sm hover:shadow-cyan-glow"
          >
            <span>Search &amp; Filter All Articles</span>
            <ArrowRight className="w-4 h-4 text-cyan-500" />
          </Link>
        </div>

      </div>
    </section>
  );
}
