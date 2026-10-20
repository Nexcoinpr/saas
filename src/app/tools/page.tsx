import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Calculator, TrendingDown, RefreshCw, ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { PricingCalculator } from "@/components/tools/PricingCalculator";
import { ChurnCalculator } from "@/components/tools/ChurnCalculator";
import { MrrArrConverter } from "@/components/tools/MrrArrConverter";
import { LeadMagnetCard } from "@/components/tools/LeadMagnetCard";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Free SaaS Financial Calculators & Growth Estimators | SaaSInsider",
  description: "Free online calculators for software leaders: pricing & hidden fee estimator, monthly logo & MRR churn rate calculator, and MRR to ARR run-rate converter.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/tools`,
  },
  openGraph: {
    title: "Free SaaS Financial Calculators & Growth Estimators | SaaSInsider",
    description: "Free online calculators for software leaders: pricing & hidden fee estimator, monthly logo & MRR churn rate calculator, and MRR to ARR run-rate converter.",
    url: `${SITE_CONFIG.siteUrl}/tools`,
    siteName: SITE_CONFIG.name,
    type: "website",
  },
};

export default function ToolsHubPage() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ name: "Tools & Calculators", item: "/tools" }]} />

        {/* Hero Section */}
        <header className="my-8 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Financial Engines</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Free SaaS Calculators &amp; Unit Economic Tools
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Empirical calculation tools built by our finance editors. Model enterprise contract markups, predict revenue loss rates, and project compounded forward ARR run rates.
          </p>
        </header>

        {/* Quick Anchor Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          <a
            href="#pricing-calculator"
            className="p-4 rounded-2xl border border-slate-200 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] hover:border-cyan-500 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                <Calculator className="w-4 h-4" />
              </span>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">Pricing &amp; Cost</h4>
                <p className="text-[11px] text-slate-500">SSO &amp; add-on audit</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-0.5 transition-all" />
          </a>

          <a
            href="#churn-calculator"
            className="p-4 rounded-2xl border border-slate-200 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] hover:border-rose-500 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                <TrendingDown className="w-4 h-4" />
              </span>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">Churn Rate</h4>
                <p className="text-[11px] text-slate-500">Logo &amp; MRR retention</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-rose-500 group-hover:translate-x-0.5 transition-all" />
          </a>

          <a
            href="#mrr-converter"
            className="p-4 rounded-2xl border border-slate-200 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] hover:border-emerald-500 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <RefreshCw className="w-4 h-4" />
              </span>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">MRR to ARR</h4>
                <p className="text-[11px] text-slate-500">Forward run-rate</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

        {/* 1. Pricing Calculator */}
        <div id="pricing-calculator" className="scroll-mt-24 my-12">
          <PricingCalculator />
        </div>

        {/* 2. Churn Calculator */}
        <div id="churn-calculator" className="scroll-mt-24 my-12">
          <ChurnCalculator />
        </div>

        {/* 3. MRR to ARR Converter */}
        <div id="mrr-converter" className="scroll-mt-24 my-12">
          <MrrArrConverter />
        </div>

        {/* Lead Magnet */}
        <div className="my-14">
          <LeadMagnetCard />
        </div>

      </div>
    </div>
  );
}
