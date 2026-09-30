import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms & Conditions | SaaSInsider",
  description: "Terms and conditions of use for SaaSInsider content, reviews, metrics, and guides.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ name: "Terms & Conditions", item: "/terms" }]} />

        <header className="my-8 max-w-2xl space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last Updated: September 2026
          </p>
        </header>

        <div className="prose-content text-slate-800 dark:text-slate-200 space-y-6 my-8">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using SaaSInsider (https://saasinsider.io), you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please discontinue use of the website.
            </p>
          </section>

          <section>
            <h2>2. Editorial Content &amp; No Warranty</h2>
            <p>
              The articles, software reviews, financial metrics, and comparison tables published on SaaSInsider are provided for informational and educational purposes only. While our editorial team makes diligent efforts to ensure factual accuracy, software features, terms, and pricing plans change frequently. SaaSInsider provides all content &quot;as is&quot; without warranties of any kind.
            </p>
          </section>

          <section>
            <h2>3. Intellectual Property</h2>
            <p>
              All articles, teardown frameworks, illustrations, and original editorial content published on SaaSInsider are the intellectual property of SaaSInsider and its contributing authors, protected by copyright laws. You may cite short excerpts with clear attribution and a canonical hyperlink back to the original article.
            </p>
          </section>

          <section>
            <h2>4. Affiliate Disclosures &amp; Commercial Relationships</h2>
            <p>
              Some outbound links on SaaSInsider are affiliate referral links. SaaSInsider may earn compensation if you purchase software through these links. This relationship never compromises our editorial independence or scorecard ratings.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
