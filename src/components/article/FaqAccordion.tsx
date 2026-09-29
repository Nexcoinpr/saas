"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { FAQItem } from "@/types/blog";
import { JsonLd } from "@/components/common/JsonLd";
import { generateFaqSchema } from "@/lib/seo";

interface FaqAccordionProps {
  faqs: FAQItem[];
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  if (!faqs || faqs.length === 0) return null;

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const schema = generateFaqSchema(faqs);

  return (
    <section id="frequently-asked-questions" className="my-12">
      <JsonLd data={schema} />

      <div className="flex items-center gap-2 mb-6">
        <span className="w-8 h-8 rounded-xl bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
          <HelpCircle className="w-4 h-4" />
        </span>
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Concise, direct answers to common questions about this topic.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 dark:border-cyan-500/20 bg-white dark:bg-darkSurface overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleIndex(index)}
                aria-expanded={isOpen}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <span>{faq.question}</span>
                <span className="text-slate-400 flex-shrink-0">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
