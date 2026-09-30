import React from "react";
import { Laptop, Calculator, Link2, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const VALUE_PILLARS = [
  {
    icon: Laptop,
    title: "Direct Sandbox Testing",
    badge: "Hands-On",
    description: "We purchase active software accounts, run team workflows, and test actual UI responsiveness rather than reciting marketing claims.",
    href: "/about"
  },
  {
    icon: Calculator,
    title: "True Cost & Billing Math",
    badge: "Finance Audits",
    description: "Our finance editors break down seat minimums, annual renewal traps, add-on fees, and the real 3-year total expense of ownership.",
    href: "/saas"
  },
  {
    icon: Link2,
    title: "App Connectivity & Webhooks",
    badge: "Reliability",
    description: "We test webhook trigger speeds, API rate limits, payload sizes, and connection reliability across modern automation stacks.",
    href: "/comparisons"
  },
  {
    icon: ShieldCheck,
    title: "Zero Vendor Sponsorship",
    badge: "Unbiased",
    description: "No software company can pay for higher ratings, remove negative findings, or influence editorial recommendations on our site.",
    href: "/about"
  }
];

export function SaaSFeatureGrid() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-[#060a15] border-b border-slate-200/80 dark:border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs uppercase tracking-widest font-extrabold text-blue-600 dark:text-cyan-400">
            Our Testing Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Independent Software Reviews You Can Actually Trust
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal">
            We spend dozens of hours inside each tool so your team doesn&apos;t waste budget on the wrong software.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center text-xs font-semibold text-blue-600 dark:text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                  <Link
                    href={pillar.href}
                    aria-label={`Read testing standard for ${pillar.title}`}
                    className="inline-flex items-center gap-1"
                  >
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
