import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, RefreshCw, ShieldCheck } from "lucide-react";
import { Article } from "@/types/blog";
import { formatDate } from "@/lib/utils";
import { SocialShare } from "./SocialShare";

interface ArticleHeaderProps {
  article: Article;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <header className="mb-8">
      {/* Category and Read Time */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Link
          href={`/${article.category}`}
          className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider px-2.5 py-1 rounded-md bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200/80 dark:border-cyan-800/60 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 transition-colors"
        >
          {article.subcategory || article.category}
        </Link>
        <span className="text-slate-300 dark:text-slate-700">•</span>
        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-800/60">
          <ShieldCheck className="w-3 h-3 text-emerald-500" />
          Fact Checked
        </span>
      </div>

      {/* H1 Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.18] mb-4">
        {article.h1 || article.title}
      </h1>

      {/* Excerpt */}
      <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
        {article.excerpt}
      </p>

      {/* Metadata Row: Author, Dates, Share */}
      <div className="pt-4 border-t border-b border-slate-200/80 dark:border-cyan-950/50 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Author Details */}
        <Link
          href={`/authors/${article.author.slug}`}
          className="flex items-center gap-3 group"
        >
          <Image
            src={article.author.avatar}
            alt=""
            aria-hidden="true"
            width={44}
            height={44}
            className="rounded-full object-cover border border-slate-200 dark:border-slate-700 ring-1 ring-cyan-500/30 group-hover:ring-cyan-500 transition-all"
          />
          <div>
            <span className="font-semibold text-sm text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors block">
              {article.author.name}
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-400 block">
              {article.author.role}
            </span>
          </div>
        </Link>

        {/* Dates and Social Share */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex flex-col sm:items-end">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              Published: {formatDate(article.publishedAt)}
            </span>
            {article.updatedAt && (
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">
                <RefreshCw className="w-3 h-3" />
                Updated: {formatDate(article.updatedAt)}
              </span>
            )}
          </div>

          <div className="hidden sm:block w-px h-8 bg-slate-200 dark:border-cyan-950" />

          {/* Social sharing icons */}
          <SocialShare title={article.title} path={article.path} />
        </div>

      </div>
    </header>
  );
}
