import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "SaaSInsider's analysis of webhook automation prevented our team from overpaying on monthly operations. The execution speed benchmarks matched what we observed in production.",
    author: "Marcus Vance",
    role: "VP of Engineering",
    company: "ScaleCloud Systems",
    rating: 5
  },
  {
    quote: "The unit economics breakdown on contract seat minimums saved our company tens of thousands of dollars during software procurement. Direct facts without vendor sales spin.",
    author: "Elena Rostova",
    role: "Co-Founder & COO",
    company: "FinPulse Labs",
    rating: 5
  },
  {
    quote: "Rare to find software evaluations where the team actually provisions paid accounts and tests webhook error handling. Genuine technical rigor on every teardown.",
    author: "David Chen",
    role: "Head of Infrastructure",
    company: "DevStack Global",
    rating: 5
  }
];

export function SaaSTestimonials() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-[#060a16] border-b border-slate-200/80 dark:border-cyan-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest font-extrabold text-cyan-600 dark:text-cyan-400">
            Reader Feedback &amp; Verification
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trusted by 28,000+ Software Architects &amp; Founders
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal">
            What engineering leaders and software buyers say about our independent research.
          </p>
        </div>

        {/* 3-Column Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="p-6 sm:p-7 rounded-3xl border border-slate-200/90 dark:border-cyan-500/20 bg-slate-50/50 dark:bg-darkSurface flex flex-col justify-between shadow-xs hover:border-cyan-500/50 hover:shadow-cyan-glow transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300 dark:text-slate-700" />
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role} • {t.company}
                  </p>
                </div>
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
