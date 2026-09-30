import React from "react";
import { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/contact/ContactForm";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Editorial Team & Support | SaaSInsider",
  description: "Contact the SaaSInsider editorial desk for software review inquiries, pricing updates, and correction requests.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Editorial Team & Support | SaaSInsider",
    description: "Contact the SaaSInsider editorial desk for software review inquiries, pricing updates, and correction requests.",
    url: `${SITE_CONFIG.siteUrl}/contact`,
    siteName: SITE_CONFIG.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Editorial Team & Support | SaaSInsider",
    description: "Contact the SaaSInsider editorial desk for software review inquiries, pricing updates, and correction requests.",
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
                <a href="mailto:editorial@saasinsider.io" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                  editorial@saasinsider.io
                </a>
              </div>

              <div>
                <strong className="block text-slate-800 dark:text-slate-200 mb-0.5">
                  Fact-Checking &amp; Corrections:
                </strong>
                <a href="mailto:corrections@saasinsider.io" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                  corrections@saasinsider.io
                </a>
              </div>

              <div>
                <strong className="block text-slate-800 dark:text-slate-200 mb-0.5">
                  Press &amp; Syndication:
                </strong>
                <a href="mailto:press@saasinsider.io" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                  press@saasinsider.io
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

          </div>

        </div>

      </div>
    </div>
  );
}
