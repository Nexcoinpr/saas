import React from "react";
import Link from "next/link";
import { Article } from "@/types/blog";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ArticlePaginationProps {
  prev: Article | null;
  next: Article | null;
}

export function ArticlePagination({ prev, next }: ArticlePaginationProps) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Article navigation"
      className="my-10 pt-8 border-t border-slate-200/90 dark:border-slate-800"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Previous Article */}
        {prev ? (
          <Link
            href={prev.path}
            className="group p-5 rounded-2xl border border-slate-200/90 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] hover:border-cyan-400 dark:hover:border-cyan-700/60 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Previous Guide</span>
            </div>
            <div className="space-y-1">
              <span className="text-[11px] uppercase font-bold tracking-wider text-cyan-600 dark:text-cyan-400 block">
                {prev.subcategory || prev.category}
              </span>
              <p className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {prev.title}
              </p>
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

        {/* Next Article */}
        {next ? (
          <Link
            href={next.path}
            className="group p-5 rounded-2xl border border-slate-200/90 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] hover:border-cyan-400 dark:hover:border-cyan-700/60 hover:shadow-md transition-all flex flex-col justify-between text-left sm:text-right"
          >
            <div className="flex items-center sm:justify-end gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              <span>Next Guide</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] uppercase font-bold tracking-wider text-cyan-600 dark:text-cyan-400 block">
                {next.subcategory || next.category}
              </span>
              <p className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {next.title}
              </p>
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

      </div>
    </nav>
  );
}
