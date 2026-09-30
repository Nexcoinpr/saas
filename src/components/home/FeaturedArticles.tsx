import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, RefreshCw } from "lucide-react";
import { Article } from "@/types/blog";
import { formatDate } from "@/lib/utils";

interface FeaturedArticlesProps {
  articles: Article[];
}

export function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  const primary = articles[0];
  const secondaries = articles.slice(1, 4);

  return (
    <section className="py-14 md:py-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200/80 dark:border-cyan-950/40">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              SaaSInsider Curated Intelligence
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              Featured Analysis &amp; Teardowns
            </h2>
          </div>
          <Link
            href="/saas"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors"
          >
            <span>View All Analysis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Main Grid: 1 Hero Card + 3 Secondary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Primary Big Feature Card (7 cols) */}
          <div className="lg:col-span-7">
            <article className="group h-full flex flex-col rounded-3xl border border-slate-200/90 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] overflow-hidden hover:border-cyan-400/80 dark:hover:border-cyan-500/60 hover:shadow-cyan-glow transition-all">
              <Link href={primary.path} className="aspect-[16/9] relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  src={primary.featuredImage}
                  alt={primary.featuredImageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-600/30">
                    Featured Dossier
                  </span>
                </div>
              </Link>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Link
                      href={`/${primary.category}`}
                      className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline uppercase tracking-wider"
                    >
                      {primary.subcategory || primary.category}
                    </Link>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {primary.readingTime}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                    <Link href={primary.path}>{primary.title}</Link>
                  </h3>

                  <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                    {primary.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-cyan-950/40 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <Link href={`/authors/${primary.author.slug}`} className="flex items-center gap-2.5 hover:underline">
                    <Image
                      src={primary.author.avatar}
                      alt={primary.author.name}
                      width={32}
                      height={32}
                      className="rounded-full object-cover ring-2 ring-cyan-500/30"
                    />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-100 block">
                        {primary.author.name}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block -mt-0.5">
                        {primary.author.role}
                      </span>
                    </div>
                  </Link>

                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      Published: {formatDate(primary.publishedAt)}
                    </span>
                    {primary.updatedAt && (
                      <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                        <RefreshCw className="w-3 h-3" />
                        Updated: {formatDate(primary.updatedAt)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Secondary 3 Featured Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {secondaries.map((sec) => (
              <article
                key={sec.slug}
                className="group flex flex-col sm:flex-row gap-4 p-4 rounded-2xl border border-slate-200/90 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] hover:border-cyan-400/80 dark:hover:border-cyan-500/60 hover:shadow-cyan-glow transition-all"
              >
                <Link
                  href={sec.path}
                  className="sm:w-36 h-28 relative rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0"
                >
                  <Image
                    src={sec.featuredImage}
                    alt={sec.featuredImageAlt}
                    fill
                    sizes="160px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Link
                        href={`/${sec.category}`}
                        className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 hover:underline uppercase tracking-wider"
                      >
                        {sec.subcategory || sec.category}
                      </Link>
                      <span className="text-slate-300 dark:text-slate-700">•</span>
                      <span className="text-[11px] text-slate-400">{sec.readingTime}</span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                      <Link href={sec.path}>{sec.title}</Link>
                    </h4>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-cyan-950/40">
                    <span className="truncate max-w-[130px] font-medium text-slate-700 dark:text-slate-300">
                      By {sec.author.name}
                    </span>
                    <span>{formatDate(sec.publishedAt)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
