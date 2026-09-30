import React from "react";
import Link from "next/link";
import { BookOpen, Scale, ArrowRight } from "lucide-react";

export function BuyerGuideCta() {
  return (
    <section className="py-16 md:py-20 bg-slate-50/60 dark:bg-[#060912] border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-extrabold text-blue-600 dark:text-cyan-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Software Buyer&apos;s Playbook
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
              Looking for the Right Tool for Your Team?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              Browse our tested software teardowns, head-to-head comparisons, and setup playbooks to discover hidden limitations before signing annual contracts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 flex-shrink-0 w-full lg:w-auto">
            <Link
              href="/reviews"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm transition-all hover:bg-slate-800 dark:hover:bg-slate-100 shadow-xs"
            >
              <BookOpen className="w-4 h-4" />
              <span>Browse All Reviews</span>
            </Link>

            <Link
              href="/comparisons"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors"
            >
              <Scale className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>Compare Head-to-Head</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
