import React from "react";
import { Cpu, Activity, Server, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const VALUE_PILLARS = [
  {
    icon: Cpu,
    title: "Direct Sandbox Testing",
    badge: "Hands-On",
    description: "We purchase active software seats, run team workflows, and measure actual execution speed rather than reading marketing brochures.",
    href: "/about"
  },
  {
    icon: Activity,
    title: "Unit Economics & True Cost",
    badge: "Finance Audits",
    description: "Our finance editors analyze seat minimums, renewal terms, overage penalties, and total cost of ownership across team sizes.",
    href: "/saas"
  },
  {
    icon: Server,
    title: "API & Webhook Stress Testing",
    badge: "Telemetry",
    description: "We test webhook delivery speeds, rate limits, payload sizes, and retry reliability across automation tools.",
    href: "/comparisons"
  },
  {
    icon: ShieldCheck,
    title: "Zero Vendor Sponsorship",
    badge: "Unbiased",
    description: "No software company can pay for higher ratings, remove negative notes, or influence benchmark rankings on our platform.",
    href: "/about"
  }
];

export function SaaSFeatureGrid() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-[#060a15] border-b border-slate-200/80 dark:border-cyan-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest font-extrabold text-cyan-600 dark:text-cyan-400">
            NextSaaS Evaluation Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering-Grade Software Teardowns, Not Sponsored Lists
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal">
            How our research lab evaluates software platforms before publishing benchmark reports.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group p-6 rounded-3xl border border-slate-200/90 dark:border-cyan-500/20 bg-slate-50/50 dark:bg-darkSurface hover:border-cyan-500/50 dark:hover:border-cyan-500/40 hover:shadow-cyan-glow transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-200/60 dark:border-cyan-800/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-200/60 dark:bg-slate-800/80 text-slate-700 dark:text-cyan-300">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center text-xs font-semibold text-cyan-600 dark:text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                  <Link href={pillar.href} className="inline-flex items-center gap-1">
                    <span>Read Testing Standard</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
