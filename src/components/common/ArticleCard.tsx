import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, Star, Scale, BookOpen, Layers } from "lucide-react";
import { Article } from "@/types/blog";
import { formatDate } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  variant?: "standard" | "compact" | "horizontal";
  priority?: boolean;
}

export function ArticleCard({ article, variant = "standard", priority = false }: ArticleCardProps) {
  const getTemplateBadge = () => {
    switch (article.template) {
      case "review":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            {article.reviewData?.overallRating ? `${article.reviewData.overallRating}/5 Review` : "Review"}
          </span>
        );
      case "comparison":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-300">
            <Scale className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
            Showdown
          </span>
        );
      case "how-to":
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300">
            <BookOpen className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            Guide
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300">
            <Layers className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            Analysis
          </span>
        );
    }
  };

  if (variant === "horizontal") {
    return (
      <article className="group flex flex-col sm:flex-row gap-5 p-4 rounded-2xl border border-slate-200/90 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] hover:border-cyan-400/80 dark:hover:border-cyan-500/60 hover:shadow-cyan-glow transition-all">
        <Link href={article.path} className="sm:w-1/3 aspect-[16/10] relative rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0">
          <Image
            src={article.featuredImage}
            alt={article.featuredImageAlt}
            fill
            sizes="(max-width: 640px) 100vw, 300px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <div className="flex-1 flex flex-col justify-between py-1">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Link
                href={`/${article.category}`}
                className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline uppercase tracking-wider"
              >
                {article.subcategory || article.category}
              </Link>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              {getTemplateBadge()}
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
              <Link href={article.path}>{article.title}</Link>
            </h3>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
              {article.excerpt}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-cyan-950/40 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Link href={`/authors/${article.author.slug}`} className="flex items-center gap-2 hover:underline">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={24}
                  height={24}
                  className="rounded-full object-cover ring-1 ring-cyan-500/30"
                />
                <span className="font-medium text-slate-700 dark:text-slate-300">{article.author.name}</span>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(article.publishedAt)}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime}
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col rounded-2xl border border-slate-200/90 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] overflow-hidden hover:border-cyan-400/80 dark:hover:border-cyan-500/60 hover:shadow-cyan-glow transition-all">
      <Link href={article.path} className="aspect-[16/10] relative overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={article.featuredImage}
          alt={article.featuredImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {getTemplateBadge()}
        </div>
      </Link>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Link
              href={`/${article.category}`}
              className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline uppercase tracking-wider"
            >
              {article.subcategory || article.category}
            </Link>
          </div>

          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug line-clamp-2">
            <Link href={article.path}>{article.title}</Link>
          </h3>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-cyan-950/40 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <Link href={`/authors/${article.author.slug}`} className="flex items-center gap-2 hover:underline">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={22}
              height={22}
              className="rounded-full object-cover ring-1 ring-cyan-500/30"
            />
            <span className="font-medium text-slate-700 dark:text-slate-300 truncate max-w-[110px]">
              {article.author.name}
            </span>
          </Link>

          <div className="flex items-center gap-2 text-[11px]">
            <span>{formatDate(article.publishedAt)}</span>
            <span>•</span>
            <span>{article.readingTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
