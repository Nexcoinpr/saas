import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CheckSquare, Calculator, BookOpen, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "SaaS Resources, Buyer Checklists & Glossaries | SaaSInsider",
  description: "Free downloadable checklists, software evaluation templates, SaaS glossary, and unit economic cheat sheets for technology executives.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/resources`,
  },
};

const GLOSSARY_TERMS = [
  {
    term: "ARR (Annual Recurring Revenue)",
    definition: "The annualized value of recurring subscription fees from paying customers, excluding one-time professional services."
  },
  {
    term: "CAC Payback Period",
    definition: "The number of months required for a software company to recoup the sales and marketing dollars invested in acquiring a single customer."
  },
  {
    term: "Net Retention Rate (NRR)",
    definition: "The percentage of recurring revenue retained from existing customers over a period, inclusive of expansion revenue, downgrades, and churn."
  },
  {
    term: "Multi-Tenancy",
    definition: "A cloud software architecture where a single instance of the application and database infrastructure serves multiple distinct customer organizations with logical data isolation."
  },
  {
    term: "Rule of 40",
    definition: "A benchmark for SaaS operational health stating that a company's year-over-year revenue expansion rate plus its free cash flow margin should equal or exceed 40%."
  },
  {
    term: "Idempotent Webhooks",
    definition: "An API and webhook design principle ensuring that receiving duplicate payloads does not produce duplicate database records or multiple charges."
  }
];

export default function ResourcesPage() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ name: "Resources", item: "/resources" }]} />

        {/* Header */}
        <header className="my-8 max-w-3xl space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-600 dark:text-cyan-400">
            Free Toolkits &amp; Glossaries
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            SaaS Buyer Resources &amp; Guides
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Practical evaluation templates, security procurement checklists, and architectural references created by our editorial engineers.
          </p>
        </header>

        {/* Toolkits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          
          <div className="p-6 rounded-3xl border border-slate-200 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-cyan-800 transition-all flex flex-col justify-between">
            <div>
              <span className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
                <CheckSquare className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Enterprise SaaS Procurement Checklist
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                A 35-point security and legal scorecard covering SOC2 Type II audits, SAML/SCIM SSO, data residency, GDPR/CCPA, and SLA guarantees before signing vendor contracts.
              </p>
            </div>
            <Link
              href="/reviews/asana-review"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              <span>Read Guide &amp; Criteria</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-cyan-800 transition-all flex flex-col justify-between">
            <div>
              <span className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <Calculator className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                SaaS Unit Economics Cheat Sheet
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Formulas and modern venture benchmarks for CAC, LTV, Net Retention Rate (NRR), Quick Ratio, Sales Multiplier, and CAC payback calculations.
              </p>
            </div>
            <Link
              href="/comparisons/pipedrive-vs-convertkit"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>Read Full Playbook</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-cyan-800 transition-all flex flex-col justify-between">
            <div>
              <span className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                No-Code vs API Automation Matrix
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Decision tree helping operations leaders determine when to deploy Zapier/Make vs writing custom serverless webhooks in Python or TypeScript.
              </p>
            </div>
            <Link
              href="/reviews/zapier-review"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span>View Automation Blueprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* SaaS Terminology Glossary */}
        <section className="my-16">
          <div className="mb-8 pb-3 border-b border-slate-200/80 dark:border-cyan-950/40">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              SaaS &amp; Cloud Terminology Glossary
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Clear definitions of standard acronyms and concepts in modern software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GLOSSARY_TERMS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-slate-200 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d]"
              >
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                  {item.term}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.definition}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
