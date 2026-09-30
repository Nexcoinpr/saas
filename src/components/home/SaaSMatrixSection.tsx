"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, ExternalLink, Search, Check, ArrowRight } from "lucide-react";

interface SoftwareItem {
  name: string;
  category: string;
  categorySlug: string;
  rating: number;
  pricing: string;
  model: string;
  strength: string;
  verdictBadge: string;
  badgeColor: string;
  path: string;
}

const SOFTWARE_DIRECTORY: SoftwareItem[] = [
  {
    name: "Notion",
    category: "Productivity",
    categorySlug: "reviews",
    rating: 4.8,
    pricing: "From $8/mo",
    model: "Per seat monthly",
    strength: "Unified documentation, team wikis and databases",
    verdictBadge: "Editor's Choice",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300",
    path: "/reviews/notion-review"
  },
  {
    name: "Zapier",
    category: "Automation",
    categorySlug: "comparisons",
    rating: 4.7,
    pricing: "Free / $19.99/mo",
    model: "Task usage tier",
    strength: "Extensive library of 6,000+ app connectors",
    verdictBadge: "Ecosystem Leader",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300",
    path: "/comparisons/zapier-vs-make"
  },
  {
    name: "Make",
    category: "Automation",
    categorySlug: "comparisons",
    rating: 4.6,
    pricing: "From $9/mo",
    model: "Operation volume tier",
    strength: "Visual data routing, routers and cost savings",
    verdictBadge: "High Volume Pick",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300",
    path: "/comparisons/zapier-vs-make"
  },
  {
    name: "ClickUp",
    category: "Workplace",
    categorySlug: "comparisons",
    rating: 4.6,
    pricing: "From $7/mo",
    model: "Per seat monthly",
    strength: "Detailed custom fields and sprint dashboards",
    verdictBadge: "Feature Dense",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300",
    path: "/comparisons/notion-vs-clickup"
  },
  {
    name: "Claude 3.5 & AI Agents",
    category: "AI Tools",
    categorySlug: "ai-tools",
    rating: 4.9,
    pricing: "API token usage",
    model: "Per million tokens",
    strength: "Reasoning capabilities, code generation and system logic",
    verdictBadge: "Top Intelligence",
    badgeColor: "bg-cyan-100 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300",
    path: "/ai-tools/top-ai-agents-software-teams"
  }
];

export function SaaSMatrixSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Productivity", "Automation", "Workplace", "AI Tools"];

  const filteredItems = SOFTWARE_DIRECTORY.filter((item) => {
    const matchesCategory = selectedFilter === "All" || item.category === selectedFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.strength.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 md:py-20 bg-slate-50/70 dark:bg-[#050812] border-b border-slate-200/80 dark:border-cyan-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-cyan-600 dark:text-cyan-400 block mb-1">
              Verified Software Benchmark Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Software Intelligence Scoreboard
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 font-normal">
              Compare tested software ratings, monetization tiers, and editorial findings.
            </p>
          </div>

          <Link
            href="/reviews"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors"
          >
            <span>View All Software Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Filters & Search Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedFilter === cat
                    ? "bg-cyan-600 text-white shadow-xs shadow-cyan-600/30"
                    : "bg-white dark:bg-darkSurface text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Filter by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 pl-9 pr-3 py-1.5 rounded-xl text-xs bg-white dark:bg-darkSurface border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            />
          </div>
        </div>

        {/* Matrix Table */}
        <div className="rounded-3xl border border-slate-200/90 dark:border-cyan-500/20 bg-white dark:bg-darkSurface overflow-hidden shadow-lg shadow-slate-200/40 dark:shadow-none">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/70 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800 text-[11px] uppercase tracking-wider text-slate-600 dark:text-slate-400 font-bold">
                <tr>
                  <th scope="col" className="p-4 sm:px-6">Software &amp; Category</th>
                  <th scope="col" className="p-4 sm:px-6">Benchmark Score</th>
                  <th scope="col" className="p-4 sm:px-6">Pricing Model</th>
                  <th scope="col" className="p-4 sm:px-6 hidden md:table-cell">Key Evaluation Finding</th>
                  <th scope="col" className="p-4 sm:px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {filteredItems.map((item) => (
                  <tr key={item.name} className="hover:bg-slate-50/60 dark:hover:bg-cyan-950/15 transition-colors">
                    <td className="p-4 sm:px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-black text-sm flex items-center justify-center flex-shrink-0">
                          {item.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <span>{item.name}</span>
                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                              {item.verdictBadge}
                            </span>
                          </div>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{item.category}</span>
                        </div>
                      </div>
                    </td>

                    <td className="p-4 sm:px-6">
                      <div className="flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span className="font-bold text-slate-900 dark:text-white text-sm">
                          {item.rating.toFixed(1)}
                        </span>
                        <span className="text-[11px] text-slate-400">/ 5.0</span>
                      </div>
                    </td>

                    <td className="p-4 sm:px-6">
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block">{item.pricing}</span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">{item.model}</span>
                      </div>
                    </td>

                    <td className="p-4 sm:px-6 hidden md:table-cell text-slate-600 dark:text-slate-300 text-xs">
                      {item.strength}
                    </td>

                    <td className="p-4 sm:px-6 text-right">
                      <Link
                        href={item.path}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-600 dark:hover:text-white text-slate-700 dark:text-slate-200 font-semibold text-xs transition-colors"
                      >
                        <span>Inspect Review</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
