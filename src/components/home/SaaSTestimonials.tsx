import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, ArrowRight, UserCheck, Award } from "lucide-react";
import { AUTHORS } from "@/data/authors";

export function SaaSTestimonials() {
  return (
    <section className="py-16 md:py-20 bg-slate-50/70 dark:bg-[#060a16] border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Human-Led Editorial Standards</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Meet the Practitioners Behind Our Teardowns
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal max-w-2xl mx-auto">
            Our reviews are not written by AI prompt loops or sponsored marketing copywriters. Every review is authored by experienced operators who have managed enterprise software budgets and systems.
          </p>
        </div>

        {/* 4 Authors Editorial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {AUTHORS.map((author) => (
            <div
              key={author.id}
              className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-col justify-between shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-700 group-hover:ring-blue-500 transition-all"
                  />
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {author.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {author.role.split("&")[0].trim()}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {author.bio}
                </p>

                {/* Specialties Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {author.specialties.slice(0, 2).map((s, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <Link
                  href={`/authors/${author.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors"
                >
                  <span>View Author Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Independence Oath Box */}
        <div className="p-7 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0">
              <Award className="w-7 h-7" />
            </div>

            <div className="flex-1 text-center md:text-left space-y-1.5">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Our Editorial Testing Charter
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                &ldquo;Most software blogs republish vendor feature lists or regurgitate artificial summaries. At SaaSInsider, our golden rule is absolute: if we have not personally logged in, imported real data, and stress-tested quota limits inside a live workspace, we will not publish a review.&rdquo;
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold pt-1">
                — Sarah Jenkins, Editor-in-Chief &amp; SaaS Finance Lead
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span>Read Full Charter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
