import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, RefreshCw, Star } from "lucide-react";
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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-slate-200/80 dark:border-slate-800">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-blue-600 dark:text-cyan-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Editor&apos;s Recommendations
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              Featured Software Teardowns
            </h2>
          </div>
          <Link
            href="/reviews"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors"
          >
            <span>View All Reviews</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Main Grid: 1 Hero Card + 3 Secondary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Primary Big Feature Card (7 cols) */}
          <div className="lg:col-span-7">
            <article className="group h-full flex flex-col rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all">
              <Link
                href={primary.path}
                aria-label={`Read cover story: ${primary.title}`}
                className="aspect-[16/9] relative overflow-hidden bg-slate-100 dark:bg-slate-800"
              >
                <Image
                  src={primary.featuredImage}
                  alt={primary.featuredImageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900/90 dark:bg-white/90 text-white dark:text-slate-900 shadow-sm backdrop-blur-sm flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    Cover Story
                  </span>
                </div>
              </Link>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Link
                      href={`/${primary.category}`}
                      className="text-xs font-bold text-blue-600 dark:text-cyan-400 hover:underline uppercase tracking-wider"
                    >
                      {primary.subcategory || primary.category}
                    </Link>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-tight">
                    <Link href={primary.path}>{primary.title}</Link>
                  </h3>

                  <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                    {primary.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
                  <Link href={`/authors/${primary.author.slug}`} className="flex items-center gap-2.5 hover:underline">
                    <Image
                      src={primary.author.avatar}
                      alt=""
                      aria-hidden="true"
                      width={32}
                      height={32}
                      className="rounded-full object-cover ring-1 ring-slate-200 dark:ring-slate-700"
                    />
                    <div>
                      <span className="font-semibold text-slate-900 dark:text-slate-100 block">
                        {primary.author.name}
                      </span>
                      <span className="text-[11px] text-slate-600 dark:text-slate-400 block -mt-0.5">
                        {primary.author.role}
                      </span>
                    </div>
                  </Link>

                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {formatDate(primary.publishedAt)}
                    </span>
                    {primary.updatedAt && (
                      <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                        <RefreshCw className="w-3 h-3" />
                        Updated
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Secondary Stacked Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {secondaries.map((article) => (
              <article
                key={article.slug}
                className="group flex-1 flex flex-col sm:flex-row gap-5 p-5 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all"
              >
                <Link
                  href={article.path}
                  aria-label={`Read ${article.title}`}
                  className="sm:w-2/5 aspect-[16/10] relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0"
                >
                  <Image
                    src={article.featuredImage}
                    alt={article.featuredImageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 200px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Link
                        href={`/${article.category}`}
                        className="text-[11px] font-bold text-blue-600 dark:text-cyan-400 hover:underline uppercase tracking-wider"
                      >
                        {article.subcategory || article.category}
                      </Link>
                    </div>

                    <h4 className="font-bold text-base text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-snug line-clamp-2">
                      <Link href={article.path}>{article.title}</Link>
                    </h4>

                    <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400">
                    <span className="font-medium text-slate-700 dark:text-slate-300 truncate max-w-[120px]">
                      {article.author.name}
                    </span>
                    <span>{formatDate(article.publishedAt)}</span>
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
