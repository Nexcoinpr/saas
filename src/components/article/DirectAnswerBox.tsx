import React from "react";
import { Award, Check } from "lucide-react";

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
      className="my-8 p-6 sm:p-7 rounded-2xl border border-blue-200/80 dark:border-blue-900/60 bg-blue-50/40 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 shadow-xs"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-xs">
          <Award className="w-3.5 h-3.5" />
        </span>
        <span className="text-xs uppercase font-extrabold tracking-wider text-blue-700 dark:text-blue-300">
          The Editorial Bottom Line
        </span>
      </div>

      <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2.5 leading-snug">
        {directAnswer.question}
      </h2>

      <p className="text-base sm:text-lg leading-relaxed font-normal text-slate-700 dark:text-slate-300">
        {directAnswer.answer}
      </p>

      {directAnswer.summaryBullets && directAnswer.summaryBullets.length > 0 && (
        <ul className="mt-4 pt-4 border-t border-blue-200/60 dark:border-slate-800 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          {directAnswer.summaryBullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
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
