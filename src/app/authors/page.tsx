import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AUTHORS } from "@/data/authors";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { TwitterIcon, LinkedinIcon, GithubIcon } from "@/components/common/SocialIcons";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Authors & Editorial Team | SaaSInsider",
  description: "Meet the engineers, SaaS executives, and technical researchers behind SaaSInsider hands-on reviews and technology guides.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/authors`,
  },
  openGraph: {
    title: "Authors & Editorial Team | SaaSInsider",
    description: "Meet the engineers, SaaS executives, and technical researchers behind SaaSInsider hands-on reviews and technology guides.",
    url: `${SITE_CONFIG.siteUrl}/authors`,
    siteName: SITE_CONFIG.name,
    type: "website",
    images: [
      {
        url: SITE_CONFIG.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "SaaSInsider Editorial Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Authors & Editorial Team | SaaSInsider",
    description: "Meet the engineers, SaaS executives, and technical researchers behind SaaSInsider hands-on reviews and technology guides.",
    creator: SITE_CONFIG.twitterHandle,
    images: [SITE_CONFIG.defaultOgImage],
  },
};

export default function AuthorsPage() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ name: "Authors", item: "/authors" }]} />

        {/* Page Header */}
        <div className="my-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
            <span>Verified Industry Experts &amp; Engineers</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Our Editorial Team &amp; Reviewers
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Every software teardown, comparison matrix, and financial model at SaaSInsider is authored and audited by practitioners with deep domain experience across product leadership, cloud systems, and AI research.
          </p>
        </div>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {AUTHORS.map((author) => (
            <div
              key={author.slug}
              className="p-8 rounded-3xl border border-slate-200/90 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-cyan-800 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-5 mb-5">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 aspect-square flex-shrink-0 rounded-2xl object-cover border border-slate-200 dark:border-cyan-900/50 ring-1 ring-cyan-500/30 shadow-sm"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                      <Link href={`/authors/${author.slug}`} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                        {author.name}
                      </Link>
                    </h2>
                    <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                      {author.role}
                    </p>
                    
                    {/* Socials */}
                    <div className="flex items-center gap-2 mt-2">
                      {author.twitter && (
                        <a
                          href={author.twitter}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Twitter"
                          className="text-slate-400 hover:text-cyan-500"
                        >
                          <TwitterIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {author.linkedin && (
                        <a
                          href={author.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="LinkedIn"
                          className="text-slate-400 hover:text-cyan-500"
                        >
                          <LinkedinIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {author.github && (
                        <a
                          href={author.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="GitHub"
                          className="text-slate-400 hover:text-cyan-500"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {author.bio}
                </p>

                {/* Focus area tags */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Focus Areas
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {author.specialties.map((exp, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Profile Action */}
              <div className="pt-4 border-t border-slate-100 dark:border-cyan-950/40">
                <Link
                  href={`/authors/${author.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  <span>Read articles by {author.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Standards Section */}
        <section className="my-16 pt-10 border-t border-slate-200 dark:border-cyan-950/40">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-[#0a0f1d] border border-slate-200/90 dark:border-cyan-950/60 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-600 dark:text-cyan-400 block">
              Editorial Standards
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Our Research &amp; Fact-Checking Standards
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Every contributor at SaaSInsider adheres to strict testing rules. Before any software review, teardown, or calculation guide goes live, our staff completes direct hands-on testing inside dedicated software environments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <strong className="text-slate-900 dark:text-white font-bold block">1. Authentic Hands-On Testing</strong>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We configure real accounts, test API endpoints, and import test datasets rather than summarizing vendor marketing copy.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <strong className="text-slate-900 dark:text-white font-bold block">2. Fact-Checking &amp; Pricing Audits</strong>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Pricing plans, seat minimums, and usage limits are verified directly against published terms and vendor quotes every quarter.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <strong className="text-slate-900 dark:text-white font-bold block">3. Zero Vendor Influence</strong>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Vendors cannot pay for favorable ratings or removal of negative benchmark scores. Our editors maintain strict independence.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
