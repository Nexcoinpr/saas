import React, { Suspense } from "react";
import { Metadata } from "next";
import { SearchClient } from "@/components/search/SearchClient";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Search Articles & Software Reviews | SaaSInsider",
  description: "Search tested software reviews, head-to-head comparison showdowns, and pricing evaluations across the SaaSInsider database.",
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
    <Suspense fallback={<div className="p-12 text-center text-sm text-slate-500">Loading search...</div>}>
      <SearchClient />
    </Suspense>
  );
}
