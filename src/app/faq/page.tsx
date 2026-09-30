import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqAccordion } from "@/components/article/FaqAccordion";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | SaaSInsider",
  description: "Answers to common questions regarding SaaSInsider testing methodology, editorial independence, affiliate policies, and software updates.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/faq`,
  },
  openGraph: {
    title: "Frequently Asked Questions (FAQ) | SaaSInsider",
    description: "Answers to common questions regarding SaaSInsider testing methodology, editorial independence, affiliate policies, and software updates.",
    url: `${SITE_CONFIG.siteUrl}/faq`,
    siteName: SITE_CONFIG.name,
    type: "website",
    images: [
      {
        url: SITE_CONFIG.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "SaaSInsider FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions (FAQ) | SaaSInsider",
    description: "Answers to common questions regarding SaaSInsider testing methodology, editorial independence, affiliate policies, and software updates.",
    creator: SITE_CONFIG.twitterHandle,
    images: [SITE_CONFIG.defaultOgImage],
  },
};

const SITE_FAQS = [
  {
    question: "How does SaaSInsider test and evaluate software?",
    answer: "Every software review on SaaSInsider is conducted inside a real, dedicated sandbox environment. Our reviewers test initial account setup, build multi-table data models, execute integrations through APIs or webhooks, measure client loading times, and evaluate support responsiveness over a 30 to 90 day evaluation cycle."
  },
  {
    question: "Can software vendors pay to improve their review scores?",
    answer: "No. Never. SaaSInsider operates under strict editorial separation between monetization and evaluation. Review scores, pros and cons lists, and final verdicts are determined solely by our editorial engineering staff based on empirical benchmarking."
  },
  {
    question: "How often are software pricing plans and feature lists updated?",
    answer: "Software pricing and feature sets change rapidly. Our editorial team audits all reviews and comparison matrices on a quarterly basis. Every article displays both its original publication date and its most recent verified update timestamp."
  },
  {
    question: "Does SaaSInsider use affiliate links?",
    answer: "Yes. In accordance with FTC guidelines, we openly disclose that some outgoing links may generate a referral commission if a reader decides to purchase a software subscription. This comes at zero additional cost to the reader and has no bearing on our ratings or verdicts."
  },
  {
    question: "What makes SaaSInsider AI tool reviews different from other blogs?",
    answer: "We do not publish superficial regurgitations of vendor marketing copy. We evaluate generative AI tools and agents across real developer repos, long-context reasoning stress tests, token costs, security certifications (SOC 2 Type II, ISO 27001), and contractual zero data retention policies."
  },
  {
    question: "Can I reproduce SaaSInsider formulas and metrics in my company?",
    answer: "Yes! All unit economic formulas, cohort templates, and step-by-step automation guides published on SaaSInsider are freely available for founders, finance teams, and product managers to adopt."
  },
  {
    question: "What specific evaluation criteria determine the overall software score?",
    answer: "Our scoring rubric balances five key operational pillars, each weighted equally: Performance & Interface Speed (responsiveness under heavy data loads), Usability & Team Setup (time required for non-technical users to build workflows), Feature Depth & Customization (breadth of native settings and data validation rules), API & Webhook Reliability (rate limit caps, payload schemas, and error handling), and True Value for Money (evaluating starter seat pricing against hidden overage charges)."
  },
  {
    question: "How does your technical team test API rate limits and webhook triggers?",
    answer: "During testing, our technical staff writes custom test scripts using Python and webhook test endpoints to measure round-trip delays, payload delivery reliability, rate limit throttling responses, and concurrent call handling. We document exact rate limits and API failure modes so developers know what to expect in production."
  },
  {
    question: "How do you detect hidden costs, seat minimums, and contract upgrade traps?",
    answer: "Before recommending software, our finance analysts read through the master services agreement, privacy policy, and payment terms. We examine mandatory seat minimums, annual automatic renewal cancellation windows, per-seat storage penalties, and export fees to calculate the realistic three-year total cost of ownership."
  },
  {
    question: "How are customer support responsiveness times measured?",
    answer: "We submit anonymous support tickets at varying hours across tier-1, tier-2, and tier-3 inquiry categories (ranging from basic billing questions to complex API errors). We log authentic initial response wait times, resolution quality, and whether tier-1 agents escalate technical tickets without scripted deflections."
  },
  {
    question: "What is SaaSInsider's data privacy protocol when testing cloud software?",
    answer: "Our testing labs use synthetic data sets generated purely for stress testing. We never import confidential client information, proprietary codebase secrets, or personally identifiable information into unverified third-party software environments."
  },
  {
    question: "Who authors the reviews and teardowns on SaaSInsider?",
    answer: "Every article is authored by seasoned practitioners including former finance operations directors, systems architects, and automation engineers. You can view author bios, credentials, and editorial history on our dedicated authors index."
  },
  {
    question: "Can software vendors request a review update after a major product release?",
    answer: "Yes. When software companies release major feature redesigns, new API versions, or updated pricing tiers, vendors may notify our editorial desk at info.saasinsider@gmail.com with verified changelogs. Our engineers schedule follow-up verification audits during our quarterly review sprint."
  },
  {
    question: "How do I report an incorrect pricing tier or broken integration link?",
    answer: "If you spot a pricing discrepancy or altered feature cap, submit the article URL and evidence to info.saasinsider@gmail.com. Our fact-checking team investigates reported errors and publishes verified corrections within 48 business hours."
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

        {/* Editorial Testing Framework Summary */}
        <section className="mt-16 pt-12 border-t border-slate-200 dark:border-cyan-950/60 text-slate-700 dark:text-slate-300">
          <div className="space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-600 dark:text-cyan-400 block mb-1">
              Methodology Transparency
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Our 5-Pillar Laboratory Evaluation Framework
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              Every software review published on SaaSInsider adheres to our standardized testing framework. We spend dozens of hours inside active workspaces to verify vendor claims before scoring.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
              <div className="p-5 rounded-2xl bg-white dark:bg-[#0a0f1d] border border-slate-200/90 dark:border-cyan-950/60 space-y-1.5">
                <strong className="text-slate-900 dark:text-white font-bold block">
                  Pillar 1: Performance &amp; UI Speed
                </strong>
                <p className="text-slate-600 dark:text-slate-400">
                  We measure DOM paint delays, search indexing times, and interface responsiveness under heavy task volume and 5,000+ row database imports.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#0a0f1d] border border-slate-200/90 dark:border-cyan-950/60 space-y-1.5">
                <strong className="text-slate-900 dark:text-white font-bold block">
                  Pillar 2: Usability &amp; Team Setup
                </strong>
                <p className="text-slate-600 dark:text-slate-400">
                  We clock how long it takes a non-technical team member to complete foundational setup, invite collaborators, and build standard workflow views.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#0a0f1d] border border-slate-200/90 dark:border-cyan-950/60 space-y-1.5">
                <strong className="text-slate-900 dark:text-white font-bold block">
                  Pillar 3: Integration &amp; Webhooks
                </strong>
                <p className="text-slate-600 dark:text-slate-400">
                  We verify native connectors, test Zapier/Make webhooks, assess API error handling, and measure rate-limit throttle resilience under burst traffic.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#0a0f1d] border border-slate-200/90 dark:border-cyan-950/60 space-y-1.5">
                <strong className="text-slate-900 dark:text-white font-bold block">
                  Pillar 4: Support Verification
                </strong>
                <p className="text-slate-600 dark:text-slate-400">
                  We submit anonymous test inquiries across morning, evening, and weekend time slots to clock authentic resolution times and escalation quality.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
