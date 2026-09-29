import React from "react";
import Link from "next/link";
import { Sparkles, Scale } from "lucide-react";

export function BuyerGuideCta() {
  return (
    <section className="py-16 md:py-20 bg-slate-50/60 dark:bg-[#060912] border-t border-slate-200/80 dark:border-cyan-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#0a0f1d] border border-slate-200/90 dark:border-cyan-950/60 shadow-cyan-glow flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-extrabold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              Nexsas Procurement Intelligence
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
              Ready to Upgrade Your Team&apos;s Software Stack?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Read hundreds of verified software reviews, head-to-head comparisons, and setup playbooks designed to eliminate software bloat and avoid unnecessary fees.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 flex-shrink-0 w-full lg:w-auto">
            <Link
              href="/reviews"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm transition-all shadow-md shadow-cyan-600/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Browse All Reviews</span>
            </Link>

            <Link
              href="/comparisons"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-cyan-900/60 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-cyan-950/40 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-colors"
            >
              <Scale className="w-4 h-4 text-cyan-500" />
              <span>Compare Tools</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
