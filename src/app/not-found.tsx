import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Search, Star, Scale } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-900/60">
          <span>Error 404 • Resource Not Found</span>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            The page or software review you requested could not be located. It may have been updated, relocated to a new category, or unpublished.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold text-sm hover:opacity-90 transition-opacity shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/search"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
          >
            <Search className="w-4 h-4" />
            <span>Search Reviews</span>
          </Link>
        </div>

        {/* Popular Topic Links */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400 block">
            Popular Directories
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors border border-slate-200/80 dark:border-slate-700/80"
            >
              <Star className="w-3.5 h-3.5 text-amber-500" />
              <span>Software Reviews</span>
            </Link>
            <Link
              href="/comparisons"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors border border-slate-200/80 dark:border-slate-700/80"
            >
              <Scale className="w-3.5 h-3.5 text-cyan-500" />
              <span>Comparisons</span>
            </Link>
            <Link
              href="/crm"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors border border-slate-200/80 dark:border-slate-700/80"
            >
              <span>CRM &amp; Sales</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
