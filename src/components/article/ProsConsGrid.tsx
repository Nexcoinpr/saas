import React from "react";
import { Check, X } from "lucide-react";

interface ProsConsGridProps {
  pros: string[];
  cons: string[];
}

export function ProsConsGrid({ pros, cons }: ProsConsGridProps) {
  return (
    <div id="pros-and-cons" className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Pros Column */}
      <div className="p-6 rounded-2xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/40 dark:bg-emerald-950/20">
        <h3 className="text-sm uppercase font-extrabold tracking-wider text-emerald-800 dark:text-emerald-300 mb-4 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">
            ✓
          </span>
          <span>Pros &amp; Advantages</span>
        </h3>
        <ul className="space-y-3">
          {pros.map((pro, index) => (
            <li key={index} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="w-4 h-4 rounded-full bg-emerald-600/10 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </span>
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons Column */}
      <div className="p-6 rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20">
        <h3 className="text-sm uppercase font-extrabold tracking-wider text-rose-800 dark:text-rose-300 mb-4 flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs">
            ✕
          </span>
          <span>Cons &amp; Limitations</span>
        </h3>
        <ul className="space-y-3">
          {cons.map((con, index) => (
            <li key={index} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="w-4 h-4 rounded-full bg-rose-600/10 text-rose-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <X className="w-3 h-3 stroke-[2.5]" />
              </span>
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
