import React from "react";
import { Sparkles, Check } from "lucide-react";

interface DirectAnswerBoxProps {
  directAnswer?: {
    question: string;
    answer: string;
    summaryBullets?: string[];
  };
}

export function DirectAnswerBox({ directAnswer }: DirectAnswerBoxProps) {
  if (!directAnswer) return null;

  return (
    <section
      id="direct-answer"
      aria-label="Direct Answer"
      className="my-8 p-6 rounded-2xl border border-cyan-300 dark:border-cyan-500/40 bg-cyan-50/50 dark:bg-[#081525]/90 text-slate-800 dark:text-slate-200 shadow-cyan-glow backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="w-6 h-6 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white flex items-center justify-center shadow-xs">
          <Sparkles className="w-3.5 h-3.5" />
        </span>
        <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-700 dark:text-cyan-300">
          Nexsas Verified Summary
        </span>
      </div>

      <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-2.5">
        {directAnswer.question}
      </h2>

      <p className="text-base sm:text-lg leading-relaxed font-normal text-slate-700 dark:text-slate-300">
        {directAnswer.answer}
      </p>

      {directAnswer.summaryBullets && directAnswer.summaryBullets.length > 0 && (
        <ul className="mt-4 pt-4 border-t border-cyan-200/80 dark:border-cyan-900/50 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          {directAnswer.summaryBullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="w-4 h-4 rounded-full bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
