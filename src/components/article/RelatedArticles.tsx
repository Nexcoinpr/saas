import React from "react";
import Link from "next/link";
import { Article } from "@/types/blog";
import { ArticleCard } from "@/components/common/ArticleCard";
import { ArrowRight, Sparkles } from "lucide-react";

interface RelatedArticlesProps {
  articles: Article[];
  categorySlug: string;
}

export function RelatedArticles({ articles, categorySlug }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="my-14 pt-10 border-t border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 block mb-1">
            Topic Cluster Continuity
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Related Guides &amp; Teardowns
          </h2>
        </div>

        <Link
          href={`/${categorySlug}`}
          className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
        >
          <span>More in this topic</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.slice(0, 3).map((art) => (
          <ArticleCard key={art.slug} article={art} />
        ))}
      </div>
    </section>
  );
}
