import React, { Suspense } from "react";
import { Metadata } from "next";
import { SearchClient } from "@/components/search/SearchClient";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Search Articles & Software Reviews | SaaSInsider",
  description: "Search tested software reviews, head-to-head comparison showdowns, and pricing evaluations across the SaaSInsider editorial database.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/search`,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="py-12 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
            Search Articles &amp; Software Reviews
          </h1>
          <p className="text-sm text-slate-500">Loading search catalog...</p>
        </div>
      }
    >
      <SearchClient />
    </Suspense>
  );
}
