import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqAccordion } from "@/components/article/FaqAccordion";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Nexsas",
  description: "Answers to common questions regarding Nexsas testing methodology, editorial independence, affiliate policies, and software updates.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/faq`,
  },
};

const SITE_FAQS = [
  {
    question: "How does Nexsas test and evaluate software?",
    answer: "Every software review on Nexsas is conducted inside a real, dedicated sandbox environment. Our reviewers test initial account setup, build multi-table data models, execute integrations through APIs or webhooks, measure client loading times, and evaluate support responsiveness over a 30 to 90 day evaluation cycle."
  },
  {
    question: "Can software vendors pay to improve their review scores?",
    answer: "No. Never. Nexsas operates under strict editorial separation between monetization and evaluation. Review scores, pros and cons lists, and final verdicts are determined solely by our editorial engineering staff based on empirical benchmarking."
  },
  {
    question: "How often are software pricing plans and feature lists updated?",
    answer: "Software pricing and feature sets change rapidly. Our editorial team audits all reviews and comparison matrices on a quarterly basis. Every article displays both its original publication date and its most recent verified update timestamp."
  },
  {
    question: "Does Nexsas use affiliate links?",
    answer: "Yes. In accordance with FTC guidelines, we openly disclose that some outgoing links may generate a referral commission if a reader decides to purchase a software subscription. This comes at zero additional cost to the reader and has no bearing on our ratings or verdicts."
  },
  {
    question: "What makes Nexsas AI tool reviews different from other blogs?",
    answer: "We do not publish superficial regurgitations of vendor marketing copy. We evaluate generative AI tools and agents across real developer repos, long-context reasoning stress tests, token costs, security certifications (SOC 2 Type II, ISO 27001), and contractual zero data retention policies."
  },
  {
    question: "Can I reproduce Nexsas formulas and metrics in my company?",
    answer: "Yes! All unit economic formulas, cohort templates, and step-by-step automation guides published on Nexsas are freely available for founders, finance teams, and product managers to adopt."
  }
];

export default function FAQPage() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ name: "FAQ", item: "/faq" }]} />

        <header className="my-8 max-w-2xl space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-600 dark:text-cyan-400">
            Readership Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Everything you need to know about our testing methodology, scoring rubrics, editorial independence, and review refresh cycles.
          </p>
        </header>

        <div className="my-10">
          <FaqAccordion faqs={SITE_FAQS} />
        </div>

      </div>
    </div>
  );
}
