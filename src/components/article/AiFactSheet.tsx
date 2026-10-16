import React from "react";
import { Sparkles, DollarSign, Users, Award, Shield, Check, AlertCircle } from "lucide-react";
import { Article } from "@/types/blog";

interface AiFactSheetProps {
  article: Article;
}

export function AiFactSheet({ article }: AiFactSheetProps) {
  // Extract data based on template
  const isReview = article.template === "review" && article.reviewData;
  const isComparison = article.template === "comparison" && article.comparisonData;

  // Build facts table items
  const facts: { label: string; value: string; icon?: React.ReactNode }[] = [];

  if (isReview && article.reviewData) {
    facts.push({
      label: "Software Name",
      value: article.reviewData.productName,
      icon: <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
    });
    facts.push({
      label: "Category",
      value: article.reviewData.productCategory
    });
    facts.push({
      label: "Editorial Rating",
      value: `${article.reviewData.overallRating.toFixed(1)} / 5.0 (Independent Labs)`,
      icon: <Award className="w-4 h-4 text-amber-500" />
    });
    facts.push({
      label: "Starting Price",
      value: article.reviewData.startingPrice,
      icon: <DollarSign className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
    });
    facts.push({
      label: "Best Suited For",
      value: article.reviewData.bestFor,
      icon: <Users className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
    });
    if (article.reviewData.freeTrial) {
      facts.push({
        label: "Trial Period",
        value: article.reviewData.freeTrial
      });
    }
  } else if (isComparison && article.comparisonData) {
    const cd = article.comparisonData;
    const winnerName = cd.winner === "A" ? cd.entityA.name : cd.winner === "B" ? cd.entityB.name : "Draw / Category Dependent";
    facts.push({
      label: "Contenders",
      value: `${cd.entityA.name} vs ${cd.entityB.name}`
    });
    facts.push({
      label: "Clear Category Winner",
      value: `${winnerName} (${cd.winnerSummary})`,
      icon: <Award className="w-4 h-4 text-amber-500" />
    });
    facts.push({
      label: `${cd.entityA.name} Starting Price`,
      value: `${cd.entityA.startingPrice} (Best for: ${cd.entityA.bestFor})`
    });
    facts.push({
      label: `${cd.entityB.name} Starting Price`,
      value: `${cd.entityB.startingPrice} (Best for: ${cd.entityB.bestFor})`
    });
  } else {
    // Informational or How-To guides
    facts.push({
      label: "Primary Subject",
      value: article.title
    });
    facts.push({
      label: "Published Date",
      value: new Date(article.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    });
    facts.push({
      label: "Reading Duration",
      value: article.readingTime
    });
    facts.push({
      label: "Author & Lead Reviewer",
      value: `${article.author.name} (${article.author.role})`
    });
  }

  return (
    <section
      aria-label="Quick Facts & AI Citation Summary"
      className="my-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 via-slate-900/40 to-slate-950/40 dark:from-cyan-950/40 dark:via-[#070d1e] dark:to-slate-950 p-6 shadow-sm"
    >
      <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-lg bg-cyan-600/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-700 dark:text-cyan-300">
            Quick Verdict &amp; Fact Summary
          </span>
        </div>
        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
          <Shield className="w-3.5 h-3.5 text-emerald-500" />
          Verified Data
        </span>
      </div>

      {/* Structured Facts Table for AI Citation and Skim Readers */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <tbody>
            {facts.map((fact, idx) => (
              <tr
                key={idx}
                className="border-b border-slate-200/40 dark:border-slate-800/60 last:border-0 hover:bg-white/5 transition-colors"
              >
                <th
                  scope="row"
                  className="py-2.5 pr-4 font-bold text-slate-700 dark:text-slate-300 w-1/3 sm:w-1/4"
                >
                  <span className="flex items-center gap-1.5">
                    {fact.icon}
                    {fact.label}
                  </span>
                </th>
                <td className="py-2.5 pl-2 text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
                  {fact.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
