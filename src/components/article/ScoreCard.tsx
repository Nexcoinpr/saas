import React from "react";
import { Star, CheckCircle, ExternalLink, ShieldCheck } from "lucide-react";

interface ScoreCardProps {
  reviewData: {
    productName: string;
    productCategory: string;
    overallRating: number;
    ratingBreakdown: { aspect: string; score: number }[];
    bestFor: string;
    startingPrice: string;
    pricingModel: string;
    freeTrial: string;
    verdict: string;
    editorialScorecard: {
      performance: number;
      easeOfUse: number;
      featureDepth: number;
      customerSupport: number;
      valueForMoney: number;
    };
  };
}

export function ScoreCard({ reviewData }: ScoreCardProps) {
  return (
    <div
      id="verdict-scorecard"
      className="my-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-lg"
    >
      {/* Top Banner */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-xs uppercase font-extrabold tracking-wider text-indigo-300 block mb-1">
            {reviewData.productCategory} Review Scorecard
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {reviewData.productName}
          </h2>
          <div className="mt-2 flex items-center gap-2 text-xs text-indigo-200">
            <span className="font-semibold text-white">Best For:</span>
            <span>{reviewData.bestFor}</span>
          </div>
        </div>

        {/* Big Overall Rating Box */}
        <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/15 backdrop-blur-sm flex-shrink-0">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {reviewData.overallRating.toFixed(1)}
            </div>
            <div className="flex items-center justify-center gap-0.5 mt-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(reviewData.overallRating)
                      ? "fill-amber-400 text-amber-400"
                      : "text-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="text-left text-xs border-l border-white/20 pl-3 space-y-0.5 text-indigo-100">
            <span className="font-semibold block text-white">Editor&apos;s Choice</span>
            <span className="text-[11px] text-indigo-200">Tested &amp; Verified</span>
          </div>
        </div>
      </div>

      {/* Breakdown Bars & Quick Specs */}
      <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-slate-100 dark:border-slate-800">
        
        {/* Rating Breakdown Bars */}
        <div className="space-y-4">
          <h3 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">
            Evaluation Breakdown
          </h3>
          <div className="space-y-3">
            {reviewData.ratingBreakdown.map((item) => (
              <div key={item.aspect}>
                <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  <span>{item.aspect}</span>
                  <span className="text-indigo-600 dark:text-indigo-400">{item.score.toFixed(1)} / 5.0</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: `${(item.score / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Specs Column */}
        <div className="flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Pricing &amp; Availability
            </h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                <span className="text-slate-400 block mb-0.5">Starting Price</span>
                <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                  {reviewData.startingPrice}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
                <span className="text-slate-400 block mb-0.5">Free Trial / Plan</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                  {reviewData.freeTrial}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 col-span-2">
                <span className="text-slate-400 block mb-0.5">Monetization Model</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {reviewData.pricingModel}
                </span>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-2">
            <a
              href="#"
              rel="nofollow noopener"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-600/20"
            >
              <span>Explore {reviewData.productName}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Editorial Verdict */}
      <div className="p-6 bg-slate-50/80 dark:bg-slate-900/40 text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
            The Editorial Verdict:
          </span>
          {reviewData.verdict}
        </div>
      </div>
    </div>
  );
}
