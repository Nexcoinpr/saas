"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, ExternalLink, Search, ArrowRight, CheckCircle2 } from "lucide-react";

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
    name: "Remote.com",
    category: "HR & Global",
    categorySlug: "reviews",
    rating: 4.4,
    pricing: "Free (Contractors) / $599 (EOR)",
    model: "Per worker monthly",
    strength: "Zero platform fee for international contractors and localized agreements in 180+ regions",
    verdictBadge: "Global HR Pick",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300",
    path: "/reviews/remote-review"
  },
  {
    name: "Perplexity AI",
    category: "AI Tools",
    categorySlug: "reviews",
    rating: 4.6,
    pricing: "Free / $20/mo (Pro)",
    model: "Monthly subscription",
    strength: "Conversational search engine providing verified web citations, source transparency, and reasoning",
    verdictBadge: "Top Research AI",
    badgeColor: "bg-cyan-100 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300",
    path: "/reviews/perplexity-review"
  },
  {
    name: "Asana",
    category: "Productivity",
    categorySlug: "reviews",
    rating: 4.4,
    pricing: "Free / $10.99/mo (Starter)",
    model: "Per seat monthly",
    strength: "Sprint boards, Kanban task cards, timeline Gantt views, and team workload capacity tracking",
    verdictBadge: "Work Management",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300",
    path: "/reviews/asana-review"
  },
  {
    name: "Zapier",
    category: "Automation",
    categorySlug: "reviews",
    rating: 4.3,
    pricing: "Free (100 Tasks) / $19.99/mo",
    model: "Task usage tier",
    strength: "Multi-step automated workflows connecting over 6,000 cloud applications and webhook triggers",
    verdictBadge: "Automation Leader",
    badgeColor: "bg-orange-100 text-orange-800 dark:bg-orange-950/60 dark:text-orange-300",
    path: "/reviews/zapier-review"
  },
  {
    name: "Copper CRM",
    category: "CRM & Sales",
    categorySlug: "reviews",
    rating: 4.3,
    pricing: "From $9/user/mo (Starter)",
    model: "Per seat monthly",
    strength: "Native integration directly inside Google Workspace, Gmail inbox, Calendar, and Google Drive",
    verdictBadge: "Gmail CRM Pick",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300",
    path: "/reviews/copper-review"
  },
  {
    name: "Vidyard",
    category: "Video & Sales",
    categorySlug: "reviews",
    rating: 4.2,
    pricing: "Free (25 Videos) / $19/mo",
    model: "Per seat monthly",
    strength: "Asynchronous screen and webcam recorder with viewer retention analytics and custom CTAs",
    verdictBadge: "Video Sales Pick",
    badgeColor: "bg-violet-100 text-violet-800 dark:bg-violet-950/60 dark:text-violet-300",
    path: "/reviews/vidyard-review"
  },
  {
    name: "Looka Logo Maker",
    category: "AI Tools",
    categorySlug: "reviews",
    rating: 4.1,
    pricing: "From $20 one-time / $96/yr",
    model: "Asset export & Brand Kit",
    strength: "Automated vector logo design, typography pairings, brand color palettes, and marketing kits",
    verdictBadge: "Branding Tool",
    badgeColor: "bg-cyan-100 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300",
    path: "/reviews/looka-review"
  },
  {
    name: "OutSystems",
    category: "Developer Tools",
    categorySlug: "reviews",
    rating: 4.1,
    pricing: "Free tier / Custom enterprise",
    model: "Application capacity",
    strength: "Enterprise low-code development platform with full lifecycle devops, governance, and CI/CD",
    verdictBadge: "Enterprise Low-Code",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300",
    path: "/reviews/outsystems-review"
  },
  {
    name: "WooCommerce",
    category: "Finance & Sales",
    categorySlug: "reviews",
    rating: 4.2,
    pricing: "Free Open-Source / Hosting",
    model: "Self-hosted extension ecosystem",
    strength: "Open-source WordPress e-commerce store foundation with unlimited customization and zero platform commissions",
    verdictBadge: "Open E-Commerce",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300",
    path: "/reviews/woocommerce-review"
  }
];

export function SaaSMatrixSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Productivity", "CRM & Sales", "AI Tools", "Automation", "Developer Tools", "Finance & Sales", "HR & Global", "Security"];

  const filteredItems = SOFTWARE_DIRECTORY.filter((item) => {
    const matchesCategory = selectedFilter === "All" || item.category === selectedFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.strength.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 md:py-20 bg-slate-50/70 dark:bg-[#050812] border-b border-slate-200/80 dark:border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-blue-600 dark:text-cyan-400 block mb-1">
              Editorial Software Directory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Tested Tools: Pricing, Limits &amp; Verdicts
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 font-normal">
              Quick-reference comparison of tested tools, pricing tiers, and hands-on editorial findings.
            </p>
          </div>

          <Link
            href="/reviews"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors"
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
                    ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800"
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
              placeholder="Search by tool name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 pl-9 pr-3 py-1.5 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Matrix Table */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-[11px] uppercase tracking-wider text-slate-600 dark:text-slate-400 font-bold">
                <tr>
                  <th scope="col" className="p-4 sm:px-6">Software &amp; Category</th>
                  <th scope="col" className="p-4 sm:px-6">Editorial Rating</th>
                  <th scope="col" className="p-4 sm:px-6">Pricing Model</th>
                  <th scope="col" className="p-4 sm:px-6 hidden md:table-cell">Key Evaluation Finding</th>
                  <th scope="col" className="p-4 sm:px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {filteredItems.map((item) => (
                  <tr key={item.name} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="p-4 sm:px-6">
                      <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span>{item.name}</span>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                          {item.verdictBadge}
                        </span>
                      </div>
                      <span className="text-xs text-slate-600 dark:text-slate-400">{item.category}</span>
                    </td>

                    <td className="p-4 sm:px-6">
                      <div className="flex items-center gap-1 text-slate-900 dark:text-white font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{item.rating}</span>
                        <span className="text-slate-600 dark:text-slate-400 text-xs font-normal">/ 5.0</span>
                      </div>
                    </td>

                    <td className="p-4 sm:px-6">
                      <span className="font-semibold text-slate-800 dark:text-slate-200 block">{item.pricing}</span>
                      <span className="text-[11px] text-slate-600 dark:text-slate-400">{item.model}</span>
                    </td>

                    <td className="p-4 sm:px-6 hidden md:table-cell text-slate-600 dark:text-slate-300 max-w-xs leading-relaxed">
                      {item.strength}
                    </td>

                    <td className="p-4 sm:px-6 text-right">
                      <Link
                        href={item.path}
                        aria-label={`Read ${item.name} review`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors"
                      >
                        <span>Read Review</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
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
