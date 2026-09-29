"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search, Filter, Calendar, Clock, Star, Scale, BookOpen, Layers, X } from "lucide-react";
import { ARTICLES } from "@/data/articles";
import { CATEGORIES } from "@/data/categories";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { formatDate } from "@/lib/utils";

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedTemplate, setSelectedTemplate] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"latest" | "popular" | "title">("latest");

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      // Search term matching
      if (query.trim() !== "") {
        const q = query.toLowerCase();
        const matchesTitle = article.title.toLowerCase().includes(q);
        const matchesExcerpt = article.excerpt.toLowerCase().includes(q);
        const matchesTag = article.tags.some((t) => t.toLowerCase().includes(q));
        const matchesCategory = article.category.toLowerCase().includes(q);
        const matchesAuthor = article.author.name.toLowerCase().includes(q);

        if (!matchesTitle && !matchesExcerpt && !matchesTag && !matchesCategory && !matchesAuthor) {
          return false;
        }
      }

      // Category matching
      if (selectedCategory !== "all" && article.category !== selectedCategory) {
        return false;
      }

      // Template matching
      if (selectedTemplate !== "all" && article.template !== selectedTemplate) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "popular") {
        return (b.viewCount || 0) - (a.viewCount || 0);
      }
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
  }, [query, selectedCategory, selectedTemplate, sortBy]);

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ name: "Search", item: "/search" }]} />

        {/* Page Header */}
        <div className="my-6 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Search Articles &amp; Software Reviews
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Find in-depth teardowns, head-to-head comparisons, SaaS benchmarks, and automation playbooks.
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="relative my-6 max-w-3xl">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by keywords, software name (e.g. Notion, Zapier, CAC, pricing)..."
              aria-label="Search articles"
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl border border-slate-300 dark:border-cyan-500/30 bg-white dark:bg-darkSurface text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-xs transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search input"
                className="absolute right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="my-6 flex flex-wrap items-center gap-3 text-xs">
          
          {/* Category Filter */}
          <div className="flex items-center gap-1.5">
            <label htmlFor="cat-filter" className="font-semibold text-slate-700 dark:text-slate-300">
              Category:
            </label>
            <select
              id="cat-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-darkSurface text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            >
              <option value="all">All Categories</option>
              {CATEGORIES.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Template Filter */}
          <div className="flex items-center gap-1.5">
            <label htmlFor="temp-filter" className="font-semibold text-slate-700 dark:text-slate-300">
              Format:
            </label>
            <select
              id="temp-filter"
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-darkSurface text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            >
              <option value="all">All Formats</option>
              <option value="informational">In-Depth Analysis</option>
              <option value="review">Software Reviews</option>
              <option value="comparison">Comparisons</option>
              <option value="how-to">How-To &amp; Tutorials</option>
            </select>
          </div>

          {/* Sort By Filter */}
          <div className="flex items-center gap-1.5">
            <label htmlFor="sort-filter" className="font-semibold text-slate-700 dark:text-slate-300">
              Sort By:
            </label>
            <select
              id="sort-filter"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-darkSurface text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            >
              <option value="latest">Latest Published</option>
              <option value="popular">Most Popular (Reads)</option>
              <option value="title">Alphabetical (A-Z)</option>
            </select>
          </div>

          {/* Reset Filters */}
          {(query || selectedCategory !== "all" || selectedTemplate !== "all") && (
            <button
              onClick={() => {
                setQuery("");
                setSelectedCategory("all");
                setSelectedTemplate("all");
              }}
              className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline"
            >
              Reset Filters
            </button>
          )}

        </div>

        {/* Results Count */}
        <div className="my-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
          Showing {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
        </div>

        {/* Results List */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col rounded-2xl border border-slate-200/80 dark:border-cyan-500/20 bg-white dark:bg-darkSurface overflow-hidden hover:border-cyan-500/50 hover:shadow-cyan-glow transition-all"
              >
                <Link
                  href={article.path}
                  className="aspect-[16/10] relative overflow-hidden bg-slate-100 dark:bg-slate-800"
                >
                  <Image
                    src={article.featuredImage}
                    alt={article.featuredImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-900/80 text-white backdrop-blur">
                      {article.subcategory || article.category}
                    </span>
                  </div>
                </Link>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug line-clamp-2">
                      <Link href={article.path}>{article.title}</Link>
                    </h3>

                    <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                    <span>By {article.author.name}</span>
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="my-16 p-12 text-center rounded-3xl border border-dashed border-slate-300 dark:border-slate-800">
            <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              No matching articles found
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              Try searching for &quot;Notion&quot;, &quot;CAC&quot;, &quot;Make&quot;, &quot;Pricing&quot;, or &quot;Automation&quot;.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm">Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}
