import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Scale, 
  Star, 
  Activity, 
  Layers, 
  Cpu, 
  Server,
  Lock,
  ExternalLink
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-18 md:pb-24 border-b border-slate-200/80 dark:border-cyan-950/40 bg-gradient-to-b from-slate-100/70 via-slate-50 to-white dark:from-[#040711] dark:via-[#060a16] dark:to-[#070c1a] saas-grid-pattern">
      {/* Background ambient subtle cyan and azure glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-teal-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          
          {/* Announcement tag badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/90 dark:bg-cyan-950/50 border border-cyan-200/80 dark:border-cyan-800/70 text-cyan-800 dark:text-cyan-300 shadow-xs backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>SaaSInsider Telemetry • Verified Software Teardowns 2026</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Independent Software Intelligence &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-500 to-blue-600 dark:from-cyan-400 dark:via-sky-300 dark:to-blue-400">
              SaaS Architecture Benchmarks
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Direct sandbox evaluations, verified unit economics, and honest software teardowns written by engineers and finance leads, not vendors.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="#latest-articles"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm shadow-md shadow-cyan-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Browse Software Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/comparisons"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-cyan-900/60 bg-white/80 dark:bg-slate-900/70 hover:bg-slate-100 dark:hover:bg-cyan-950/40 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all backdrop-blur-sm shadow-xs"
            >
              <Scale className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Compare Top Stacks</span>
            </Link>
          </div>

          {/* Social Proof Star Rating */}
          <div className="pt-3 flex items-center justify-center gap-3 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span>
              <strong className="text-slate-900 dark:text-white font-bold">4.9 / 5.0</strong> rating from 28,000+ technology leaders and software buyers
            </span>
          </div>

        </div>

        {/* NextSaaS Interactive Software Dashboard Mockup */}
        <div className="mt-12 relative max-w-5xl mx-auto">
          {/* Floating Glow Behind Dashboard */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-transparent blur-3xl rounded-3xl -z-10" />

          {/* Browser / App Frame */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-cyan-500/30 bg-white/95 dark:bg-[#070d1d]/95 shadow-2xl backdrop-blur-xl overflow-hidden">
            
            {/* Window Topbar */}
            <div className="px-4 py-3 bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>

              {/* URL bar */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-mono text-[11px] max-w-md w-full justify-center">
                <Lock className="w-3 h-3 text-emerald-500" />
                <span>saasinsider.io/telemetry/live-matrix</span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="hidden sm:inline font-mono">Telemetry: Live</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-5 sm:p-7 space-y-6">
              
              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs mb-1">
                    <span>Software Evaluated</span>
                    <Layers className="w-3.5 h-3.5 text-cyan-500" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    142 <span className="text-xs font-semibold text-emerald-500">+18 Q3</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs mb-1">
                    <span>Test Sandbox Hours</span>
                    <Activity className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    1,420h <span className="text-xs font-semibold text-cyan-500">Live</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs mb-1">
                    <span>Vendor Independence</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    100% <span className="text-xs font-semibold text-emerald-500">Verified</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800">
                  <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-xs mb-1">
                    <span>Trust Index</span>
                    <Star className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                    4.9 / 5 <span className="text-xs font-semibold text-amber-500">Top Tier</span>
                  </div>
                </div>
              </div>

              {/* Live Leaderboard / Matrix Table */}
              <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950/70 overflow-hidden shadow-xs">
                <div className="px-4 py-2.5 bg-slate-50/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                  <span>Featured Software Benchmark Teardowns</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold text-[11px]">Updated Weekly</span>
                </div>

                <div className="divide-y divide-slate-100 dark:divide-slate-800/80 text-xs sm:text-sm">
                  {/* Notion Row */}
                  <div className="p-3.5 sm:px-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/50 dark:hover:bg-slate-900/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold flex items-center justify-center text-xs">
                        N
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          <span>Notion Workspace</span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                            Editor&apos;s Pick
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 dark:text-slate-400">Team Docs, Database &amp; Knowledge Base</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="text-right hidden md:block">
                        <span className="text-slate-400 block text-[10px]">Benchmark Score</span>
                        <span className="font-bold text-slate-900 dark:text-white">4.8 / 5.0</span>
                      </div>
                      <div className="text-right hidden sm:block">
                        <span className="text-slate-400 block text-[10px]">Pricing</span>
                        <span className="font-bold text-cyan-600 dark:text-cyan-400">$8/seat</span>
                      </div>
                      <Link
                        href="/reviews/notion-review"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold transition-colors"
                      >
                        <span>View Review</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>

                  {/* Zapier vs Make Row */}
                  <div className="p-3.5 sm:px-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/50 dark:hover:bg-slate-900/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500 text-white font-bold flex items-center justify-center text-xs">
                        ⚡
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          <span>Zapier vs. Make</span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300">
                            Head-to-Head
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 dark:text-slate-400">Workflow Automation &amp; Webhook Reliability</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="text-right hidden md:block">
                        <span className="text-slate-400 block text-[10px]">Benchmark Score</span>
                        <span className="font-bold text-slate-900 dark:text-white">4.7 / 5.0</span>
                      </div>
                      <div className="text-right hidden sm:block">
                        <span className="text-slate-400 block text-[10px]">Pricing</span>
                        <span className="font-bold text-cyan-600 dark:text-cyan-400">Free Tier Available</span>
                      </div>
                      <Link
                        href="/comparisons/zapier-vs-make"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold transition-colors"
                      >
                        <span>View Comparison</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>

                  {/* Notion vs ClickUp Row */}
                  <div className="p-3.5 sm:px-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/50 dark:hover:bg-slate-900/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-600 text-white font-bold flex items-center justify-center text-xs">
                        C
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                          <span>Notion vs. ClickUp</span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300">
                            Pillar Teardown
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 dark:text-slate-400">Task Management, Wiki Architecture &amp; Scale</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="text-right hidden md:block">
                        <span className="text-slate-400 block text-[10px]">Benchmark Score</span>
                        <span className="font-bold text-slate-900 dark:text-white">4.8 / 5.0</span>
                      </div>
                      <div className="text-right hidden sm:block">
                        <span className="text-slate-400 block text-[10px]">Pricing</span>
                        <span className="font-bold text-cyan-600 dark:text-cyan-400">$7 to $10/seat</span>
                      </div>
                      <Link
                        href="/comparisons/notion-vs-clickup"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 hover:text-cyan-600 dark:hover:text-cyan-400 font-semibold transition-colors"
                      >
                        <span>View Comparison</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

          {/* Floating Trust Pills on Sides */}
          <div className="hidden lg:flex items-center gap-2 absolute -top-5 -left-6 bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/40 px-3.5 py-2 rounded-2xl shadow-lg backdrop-blur-md text-xs font-bold text-slate-900 dark:text-white">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>100% Sandbox Tested</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 absolute -bottom-5 -right-6 bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-cyan-500/40 px-3.5 py-2 rounded-2xl shadow-lg backdrop-blur-md text-xs font-bold text-slate-900 dark:text-white">
            <ShieldCheck className="w-4 h-4 text-cyan-500" />
            <span>Zero Sponsored Rankings</span>
          </div>
        </div>

        {/* Tech Stack / Tested Software Marquee */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 dark:border-cyan-950/60 text-center">
          <p className="text-xs uppercase tracking-widest font-extrabold text-slate-400 dark:text-slate-500 mb-6">
            Benchmarking &amp; Testing Modern Cloud Software Across 14 Stacks
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-500 dark:text-slate-400 font-bold text-sm">
            <span className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Notion</span>
            <span className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Zapier</span>
            <span className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">ClickUp</span>
            <span className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Stripe</span>
            <span className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">HubSpot</span>
            <span className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Slack</span>
            <span className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Make</span>
            <span className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Airtable</span>
          </div>
        </div>

      </div>
    </section>
  );
}
