import React from "react";
import { CheckCircle2 } from "lucide-react";

interface KeyTakeawaysProps {
  takeaways: string[];
}

export function KeyTakeaways({ takeaways }: KeyTakeawaysProps) {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <div className="my-8 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/60">
      <h3 className="text-xs uppercase font-extrabold tracking-widest text-slate-500 dark:text-slate-400 mb-4">
        Key Takeaways &amp; Executive Summary
      </h3>
      <ul className="space-y-3">
        {takeaways.map((point, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
