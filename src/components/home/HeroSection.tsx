import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-14 pb-18 md:pt-22 md:pb-28 border-b border-slate-200/80 dark:border-cyan-950/40 bg-gradient-to-b from-slate-100/60 via-slate-50 to-white dark:from-[#050811] dark:via-[#070b14] dark:to-[#070b14] nexsas-grid-pattern">
      {/* Background ambient subtle cyan and violet glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-violet-500/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          {/* Editorial tag badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/80 dark:bg-cyan-950/40 border border-cyan-200/80 dark:border-cyan-800/60 text-cyan-800 dark:text-cyan-300 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Nexsas Research Labs | Fact-Checked Software Teardowns</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            SaaS Intelligence, Software Teardowns &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-500 to-blue-600 dark:from-cyan-400 dark:via-sky-300 dark:to-blue-400">
              Technology Benchmarks
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Practical, fact-checked information about SaaS business models, B2B software reviews, AI agent tools, workflow automation, and modern enterprise technology.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="#latest-articles"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm shadow-md shadow-cyan-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Browse Intel &amp; Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/reviews"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-cyan-900/50 bg-white/60 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-cyan-950/40 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all backdrop-blur-sm"
            >
              <span>Browse Software Teardowns</span>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 border-t border-slate-200/80 dark:border-cyan-950/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <div className="flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Rigorous Sandbox Testing</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-500" />
              <span>No Sponsored Bias</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>Hands-On Testing</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>AEO &amp; GEO Optimized</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
