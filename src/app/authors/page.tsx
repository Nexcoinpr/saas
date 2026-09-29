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
  title: "Authors & Editorial Team | Nexsas",
  description: "Meet the engineers, SaaS executives, and technical researchers behind Nexsas hands-on reviews and technology guides.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/authors`,
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
            Every software teardown, comparison matrix, and financial model at Nexsas is authored and audited by practitioners with deep domain experience across product leadership, cloud systems, and AI research.
          </p>
        </div>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {AUTHORS.map((author) => (
            <div
              key={author.slug}
              className="p-8 rounded-3xl border border-slate-200/90 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] shadow-sm hover:shadow-cyan-glow transition-all flex flex-col justify-between"
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

      </div>
    </div>
  );
}
