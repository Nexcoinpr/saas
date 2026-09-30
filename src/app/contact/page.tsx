import React from "react";
import { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Editorial Team & Support | SaaSInsider",
  description: "Contact the SaaSInsider editorial desk for software review inquiries, pricing updates, correction requests, and media questions.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Editorial Team & Support | SaaSInsider",
    description: "Contact the SaaSInsider editorial desk for software review inquiries, pricing updates, correction requests, and media questions.",
    url: `${SITE_CONFIG.siteUrl}/contact`,
    siteName: SITE_CONFIG.name,
    type: "website",
    images: [
      {
        url: SITE_CONFIG.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Contact SaaSInsider",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Editorial Team & Support | SaaSInsider",
    description: "Contact the SaaSInsider editorial desk for software review inquiries, pricing updates, correction requests, and media questions.",
    creator: SITE_CONFIG.twitterHandle,
    images: [SITE_CONFIG.defaultOgImage],
  },
};

export default function ContactPage() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ name: "Contact Us", item: "/contact" }]} />

        {/* Page Header */}
        <header className="my-8 max-w-2xl space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Contact the Editorial Team
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Have a question about a software review, a product pitch, or a factual pricing update? We value thoughtful feedback from our readership.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 my-10">
          
          {/* Contact Form (7 cols) */}
          <div className="md:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] shadow-sm">
              <ContactForm />
            </div>
          </div>

          {/* Sidebar Guidelines (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            
            <div className="p-6 rounded-3xl border border-slate-200 dark:border-cyan-950/60 bg-slate-50 dark:bg-[#0a0f1d] text-xs text-slate-600 dark:text-slate-400 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Direct Department Inboxes
              </h3>

              <div>
                <strong className="block text-slate-800 dark:text-slate-200 mb-0.5">
                  Editorial &amp; Review Desk:
                </strong>
                <a href="mailto:info.saasinsider@gmail.com" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                  info.saasinsider@gmail.com
                </a>
              </div>

              <div>
                <strong className="block text-slate-800 dark:text-slate-200 mb-0.5">
                  Fact-Checking &amp; Corrections:
                </strong>
                <a href="mailto:info.saasinsider@gmail.com" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                  info.saasinsider@gmail.com
                </a>
              </div>

              <div>
                <strong className="block text-slate-800 dark:text-slate-200 mb-0.5">
                  Press &amp; Syndication:
                </strong>
                <a href="mailto:info.saasinsider@gmail.com" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                  info.saasinsider@gmail.com
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl border border-slate-200 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] text-xs text-slate-600 dark:text-slate-400 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Vendor Submission Policy</span>
              </div>
              <p className="leading-relaxed">
                We accept sandbox account invitations from software founders and product teams. Submitting a tool does not guarantee coverage, and editorial evaluations remain entirely independent.
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-slate-200 dark:border-cyan-950/60 bg-slate-50 dark:bg-[#0a0f1d] text-xs text-slate-600 dark:text-slate-400 space-y-2">
              <span className="font-bold text-slate-900 dark:text-white block">
                Editorial Review SLA
              </span>
              <p className="leading-relaxed">
                Our editorial team reviews incoming inquiries Monday through Friday. Typical response time for factual corrections and test account invitations is 24 to 48 business hours.
              </p>
            </div>

          </div>

        </div>

        {/* Comprehensive Editorial & Press Standards Guide */}
        <section className="mt-16 pt-12 border-t border-slate-200 dark:border-cyan-950/60 text-slate-700 dark:text-slate-300">
          <div className="max-w-3xl space-y-8">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-600 dark:text-cyan-400 block mb-1">
                Editorial Operating Standards
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Software Evaluation Inquiries &amp; Newsroom Policies
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                SaaSInsider is dedicated to producing empirical, hands-on software assessments for engineering leaders, finance directors, and operational teams. Here is how our newsroom handles submissions, editorial disputes, and factual updates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
              <div className="p-6 rounded-2xl bg-white dark:bg-[#0a0f1d] border border-slate-200/90 dark:border-cyan-950/60 space-y-2">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  1. Product Review Submissions
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Software companies interested in having their product reviewed should provide full-feature sandbox workspace credentials. Our technical team does not test limited demo screen recordings. We test actual database imports, user role permissions, API rate limits, and webhook trigger payloads across live environments.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0a0f1d] border border-slate-200/90 dark:border-cyan-950/60 space-y-2">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  2. Pricing &amp; Tier Audits
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Because cloud software pricing evolves rapidly, our research desk monitors seat minimums, annual renewal terms, and hidden add-on costs. If your software recently updated its pricing tiers or quota caps, submit verified documentation so our editors can audit and update the published comparison matrix.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0a0f1d] border border-slate-200/90 dark:border-cyan-950/60 space-y-2">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  3. Corrections &amp; Factual Errata
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We maintain a transparent corrections standard. If you discover a factual error regarding a software feature, API specification, or compliance standard, email our corrections desk with supporting links. Validated corrections are published with an explicit update timestamp within 48 hours.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-[#0a0f1d] border border-slate-200/90 dark:border-cyan-950/60 space-y-2">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  4. Editorial Independence Guarantee
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  No software company can pay to alter an editorial verdict, remove negative benchmark findings, or influence numerical scorecard ratings. Our reviews reflect authentic operator experience to ensure software buyers make sound purchasing decisions.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <span className="font-bold text-slate-900 dark:text-white block mb-1">
                Newsroom Headquarters &amp; Media Inquiries
              </span>
              <p>
                SaaSInsider Digital Publication • Central Editorial Operations • Direct contact: info.saasinsider@gmail.com. We respond to all formal inquiries from verified corporate domains.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
