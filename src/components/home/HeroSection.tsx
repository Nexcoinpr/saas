import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Scale, 
  Star, 
  Calendar,
  Layers, 
  FileText,
  BadgeCheck,
  CreditCard,
  MessageSquare
} from "lucide-react";
import { getArticleBySlug } from "@/data/articles";
import { formatDate } from "@/lib/utils";

export function HeroSection() {
  // Grab our primary cover story and trending editorial articles
  const leadArticle = getArticleBySlug("remote-review");
  const trending1 = getArticleBySlug("pipedrive-vs-convertkit");
  const trending2 = getArticleBySlug("asana-review");
  const trending3 = getArticleBySlug("zapier-review");

  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:pt-12 md:pb-20 border-b border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Masthead Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
            <BadgeCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Independent Testing Lab • 100% Unbiased Software Reviews</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Honest Software Reviews &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-400">
              Tested Pricing Audits
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            We purchase real accounts, build actual team workflows, and stress-test quota limits before publishing. Zero vendor sponsorships, zero paid rankings.
          </p>

          {/* Quick Topic Chips */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs">
            <Link
              href="/reviews"
              className="px-3 py-1.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold transition-all hover:opacity-90"
            >
              All Reviews
            </Link>
            <Link
              href="/comparisons"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Head-to-Head Showdowns
            </Link>
            <Link
              href="/productivity"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Project Management
            </Link>
            <Link
              href="/crm"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              CRM &amp; Sales
            </Link>
            <Link
              href="/ai-tools"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              AI &amp; Search Tools
            </Link>
            <Link
              href="/automation"
              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Automation
            </Link>
          </div>
        </div>

        {/* Magazine-Style Editorial Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Lead Story (7 cols) */}
          {leadArticle && (
            <div className="lg:col-span-7 flex">
              <article className="group w-full flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 p-5 sm:p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm">
                <div>
                  {/* Lead Story Tag & Score */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      Lead Story • Editor&apos;s Choice
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(leadArticle.publishedAt)}
                    </span>
                  </div>

                  {/* Big Featured UI Screenshot */}
                  <Link href={leadArticle.path} className="block relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800 mb-5">
                    <Image
                      src={leadArticle.featuredImage}
                      alt={leadArticle.featuredImageAlt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </Link>

                  {/* Headline */}
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors mb-3">
                    <Link href={leadArticle.path}>
                      {leadArticle.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-5">
                    {leadArticle.excerpt}
                  </p>
                </div>

                {/* Author Byline & CTA */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={leadArticle.author.avatar}
                      alt={leadArticle.author.name}
                      width={38}
                      height={38}
                      className="rounded-full object-cover ring-1 ring-slate-300 dark:ring-slate-700"
                    />
                    <div>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white block">
                        {leadArticle.author.name}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 block">
                        {leadArticle.author.role}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={leadArticle.path}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all"
                  >
                    <span>Read Full Review</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            </div>
          )}

          {/* Trending Editorial Stack (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400" />
                Trending Showdowns &amp; Audits
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Tested This Week
              </span>
            </div>

            {/* Trending Card 1: Pipedrive vs ConvertKit */}
            {trending1 && (
              <article className="group p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex gap-4">
                <Link href={trending1.path} className="w-28 sm:w-32 aspect-[4/3] rounded-xl overflow-hidden relative flex-shrink-0 bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800">
                  <Image
                    src={trending1.featuredImage}
                    alt={trending1.featuredImageAlt}
                    fill
                    sizes="120px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 block mb-1">
                      Head-to-Head Showdown
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                      <Link href={trending1.path}>
                        {trending1.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-2">
                    <span>{trending1.author.name}</span>
                    <span>•</span>
                    <span>{formatDate(trending1.publishedAt)}</span>
                  </div>
                </div>
              </article>
            )}

            {/* Trending Card 2: Asana */}
            {trending2 && (
              <article className="group p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex gap-4">
                <Link href={trending2.path} className="w-28 sm:w-32 aspect-[4/3] rounded-xl overflow-hidden relative flex-shrink-0 bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800">
                  <Image
                    src={trending2.featuredImage}
                    alt={trending2.featuredImageAlt}
                    fill
                    sizes="120px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                      Limits Teardown
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                      <Link href={trending2.path}>
                        {trending2.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-2">
                    <span>{trending2.author.name}</span>
                    <span>•</span>
                    <span>{formatDate(trending2.publishedAt)}</span>
                  </div>
                </div>
              </article>
            )}

            {/* Trending Card 3: Zapier */}
            {trending3 && (
              <article className="group p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/30 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex gap-4">
                <Link href={trending3.path} className="w-28 sm:w-32 aspect-[4/3] rounded-xl overflow-hidden relative flex-shrink-0 bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800">
                  <Image
                    src={trending3.featuredImage}
                    alt={trending3.featuredImageAlt}
                    fill
                    sizes="120px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block mb-1">
                      Automation Limits
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                      <Link href={trending3.path}>
                        {trending3.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-2">
                    <span>{trending3.author.name}</span>
                    <span>•</span>
                    <span>{formatDate(trending3.publishedAt)}</span>
                  </div>
                </div>
              </article>
            )}

          </div>

        </div>

        {/* Editorial Independence Trust Bar (100% Human Verification) */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <div>
                <strong className="text-slate-900 dark:text-white font-bold block mb-0.5">
                  Hands-On Sandbox Testing
                </strong>
                <span className="text-slate-600 dark:text-slate-400 leading-relaxed block">
                  We build actual project boards, invite test accounts, and measure real interface responsiveness.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-4 h-4" />
              </span>
              <div>
                <strong className="text-slate-900 dark:text-white font-bold block mb-0.5">
                  Verified Billing Audits
                </strong>
                <span className="text-slate-600 dark:text-slate-400 leading-relaxed block">
                  We examine contract fine print, overage penalties, and per-seat upgrade traps.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <div>
                <strong className="text-slate-900 dark:text-white font-bold block mb-0.5">
                  Zero Vendor Sponsorship
                </strong>
                <span className="text-slate-600 dark:text-slate-400 leading-relaxed block">
                  Vendors cannot pay for placement, alter editorial scores, or preview reviews before publication.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4" />
              </span>
              <div>
                <strong className="text-slate-900 dark:text-white font-bold block mb-0.5">
                  Real Support Checks
                </strong>
                <span className="text-slate-600 dark:text-slate-400 leading-relaxed block">
                  We submit anonymous customer support tickets to clock authentic resolution times.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
