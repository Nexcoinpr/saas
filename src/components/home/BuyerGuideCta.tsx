import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Scale, Sparkles } from "lucide-react";

export function BuyerGuideCta() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 dark:text-indigo-400">
              SaaS Buying Intelligence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Ready to Upgrade Your Team&apos;s Software Stack?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Read hundreds of verified software reviews, head-to-head comparisons, and setup playbooks designed to eliminate software bloat and avoid unnecessary fees.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 flex-shrink-0 w-full lg:w-auto">
            <Link
              href="/reviews"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Browse All Reviews</span>
            </Link>

            <Link
              href="/comparisons"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors"
            >
              <Scale className="w-4 h-4" />
              <span>Compare Tools</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
