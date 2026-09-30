import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, Award, Zap } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us & Editorial Standards | SaaSInsider",
  description: "Learn about SaaSInsider editorial mission, hands-on software testing methodology, and our commitment to unbiased B2B software evaluations.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ name: "About Us", item: "/about" }]} />

        {/* Header */}
        <header className="my-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Independent Editorial Standards</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Independent SaaS Research &amp; Verified Software Intelligence
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            SaaSInsider was founded with a single mission: to cut through vendor marketing hype and provide technology buyers with rigorous, hands-on software teardowns, verified benchmarks, and practical architecture guides.
          </p>
        </header>

        {/* Content sections */}
        <div className="prose-content text-slate-800 dark:text-slate-200 space-y-8 my-10">
          
          <section>
            <h2>Our Mission</h2>
            <p>
              The B2B software ecosystem has exploded into tens of thousands of specialized tools. Buying committees face information overload: review aggregators riddled with incentivized feedback, vendor marketing that overpromises on capabilities, and fragmented documentation.
            </p>
            <p>
              At SaaSInsider, we believe in <strong>evidence-grounded software evaluations</strong>. Every review published on our platform is the result of direct sandbox testing by former product strategists, cloud infrastructure engineers, and machine learning researchers.
            </p>
          </section>

          {/* Pillars of Editorial Integrity */}
          <section className="my-10 p-8 rounded-3xl bg-slate-50 dark:bg-[#0a0f1d] border border-slate-200 dark:border-cyan-950/60 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0">
              Our 4 Pillars of Editorial Integrity
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm mb-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>1. Sandbox Testing Required</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  We deploy every software product inside dedicated sandbox environments, testing edge cases, API call speeds, and real workflows before rating.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-cyan-500" />
                  <span>2. Zero Sponsored Ratings</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  No vendor can purchase a favorable rating or edit our editorial conclusions. Our scorecards reflect strict technical and economic reality.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm mb-1">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>3. Verified Credentials</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our articles are authored exclusively by industry veterans with public credentials in engineering, cloud infrastructure, and SaaS finance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80">
                <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm mb-1">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>4. Transparent Monetization</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  When articles contain affiliate tracking links, we display prominent disclosures. Affiliate partnerships never influence our negative review findings.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>How We Evaluate Software (Testing Methodology)</h2>
            <p>
              Our scoring model assesses software across five standardized dimensions, each rated on a 1.0 to 5.0 scale:
            </p>
            <ul>
              <li><strong>Screen Layout &amp; First-Run Setup:</strong> How quickly can a team start using the platform with minimal friction?</li>
              <li><strong>Feature Depth &amp; Flexibility:</strong> Does the software accommodate complex team edge cases, custom fields, and relational models?</li>
              <li><strong>Security &amp; Governance:</strong> Does the vendor provide SAML SSO, SOC2 Type II compliance, role-based access control (RBAC), and encryption at rest?</li>
              <li><strong>Integration &amp; API Reliability:</strong> Are REST / GraphQL endpoints well-documented, rate-limits generous, and webhooks instant?</li>
              <li><strong>Total Cost of Ownership:</strong> How transparent are pricing tiers, seat minimums, and hidden overage fees?</li>
            </ul>
          </section>

          <section>
            <h2>Meet the Writers</h2>
            <p>
              Check our verified editorial roster on the <Link href="/authors" className="text-cyan-600 dark:text-cyan-400 font-semibold underline">Authors Directory</Link> to inspect individual credentials, past industry roles, and published guides.
            </p>
          </section>

          <section>
            <h2>Get in Touch</h2>
            <p>
              Have a question about our methodology, want to suggest a software product for evaluation, or need to report a factual update? Contact our team directly at <a href="mailto:info.saasinsider@gmail.com" className="text-cyan-600 dark:text-cyan-400 font-semibold underline">info.saasinsider@gmail.com</a>.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
