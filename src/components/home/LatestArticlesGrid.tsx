"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Article } from "@/types/blog";
import { ArticleCard } from "@/components/common/ArticleCard";
import { ArrowRight, Filter } from "lucide-react";

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
    <section id="latest-articles" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Format Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400">
              Fresh Intelligence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Latest Articles &amp; Playbooks
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedFilter(tab.value)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  selectedFilter === tab.value
                    ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm"
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold text-sm transition-colors shadow-sm"
          >
            <span>Search &amp; Filter All Articles</span>
            <ArrowRight className="w-4 h-4 text-indigo-500" />
          </Link>
        </div>

      </div>
    </section>
  );
}
