import React from "react";
import { Check, Clock, Wrench, Lightbulb, AlertTriangle, Code2 } from "lucide-react";
import { HowToStep } from "@/types/blog";

interface StepByStepGuideProps {
  howToData: {
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    estimatedTime: string;
    prerequisites: string[];
    toolsNeeded: string[];
    steps: HowToStep[];
    proTips: string[];
    commonPitfalls: { issue: string; solution: string }[];
  };
}

export function StepByStepGuide({ howToData }: StepByStepGuideProps) {
  const { difficulty, estimatedTime, prerequisites, toolsNeeded, steps, proTips, commonPitfalls } = howToData;

  const difficultyColors = {
    Beginner: "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-300",
    Intermediate: "bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-300",
    Advanced: "bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 border-rose-300",
  };

  return (
    <div className="my-10 space-y-10">
      
      {/* Prerequisites & Quick Meta Card */}
      <div id="prerequisites" className="p-6 rounded-3xl border border-slate-200 dark:border-cyan-500/20 bg-white dark:bg-darkSurface shadow-sm space-y-6">
        
        {/* Meta badges */}
        <div className="flex flex-wrap items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Clock className="w-4 h-4 text-cyan-500" />
            <span>Estimated Time: <strong className="text-slate-800 dark:text-slate-200">{estimatedTime}</strong></span>
          </div>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${difficultyColors[difficulty]}`}>
            {difficulty} Level
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
          {/* Prerequisites */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2.5 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>Prerequisites &amp; Access</span>
            </h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              {prerequisites.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Needed */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2.5 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-cyan-500" />
              <span>Required Tools</span>
            </h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              {toolsNeeded.map((tool, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Step by Step Numbered Flow */}
      <div id="step-by-step-guide" className="space-y-8">
        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          Step-by-Step Instructions
        </h3>

        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.stepNumber}
              className="p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-darkSurface shadow-xs relative pl-6 sm:pl-8"
            >
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-xl bg-cyan-600 text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0 shadow-sm shadow-cyan-600/30">
                  {step.stepNumber}
                </span>
                
                <div className="flex-1 space-y-3">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h4>

                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Code snippet if present */}
                  {step.codeSnippet && (
                    <div className="rounded-xl overflow-hidden bg-slate-950 text-slate-200 text-xs border border-slate-800">
                      <div className="px-4 py-1.5 bg-slate-900 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Payload / Configuration Sample</span>
                      </div>
                      <pre className="p-4 font-mono overflow-x-auto text-[11px] leading-relaxed">
                        <code>{step.codeSnippet}</code>
                      </pre>
                    </div>
                  )}

                  {/* Tip callout */}
                  {step.tip && (
                    <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/80 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong>Pro Tip:</strong> {step.tip}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pro Tips Section */}
      {proTips && proTips.length > 0 && (
        <div id="pro-tips-for-scale" className="p-6 rounded-2xl border border-cyan-200 dark:border-cyan-900/60 bg-cyan-50/40 dark:bg-cyan-950/20 space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-900 dark:text-cyan-200 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Setup Tips for High-Volume Use</span>
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {proTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Common Pitfalls Section */}
      {commonPitfalls && commonPitfalls.length > 0 && (
        <div id="common-pitfalls" className="p-6 rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20 space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-rose-900 dark:text-rose-200 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
            <span>Common Pitfalls &amp; Troubleshooting</span>
          </h4>
          <div className="space-y-3">
            {commonPitfalls.map((pitfall, idx) => (
              <div key={idx} className="text-xs sm:text-sm">
                <strong className="text-rose-950 dark:text-rose-200 block mb-0.5">
                  Issue: {pitfall.issue}
                </strong>
                <span className="text-slate-700 dark:text-slate-300">
                  <strong>Solution:</strong> {pitfall.solution}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
