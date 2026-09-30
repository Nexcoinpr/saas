import React from "react";
import { Check, X, Trophy, Star } from "lucide-react";
import { ComparisonMatrixRow } from "@/types/blog";

interface ComparisonTableProps {
  comparisonData: {
    entityA: {
      name: string;
      tagline: string;
      rating: number;
      startingPrice: string;
      bestFor: string;
      primaryStrength: string;
    };
    entityB: {
      name: string;
      tagline: string;
      rating: number;
      startingPrice: string;
      bestFor: string;
      primaryStrength: string;
    };
    winner: "A" | "B" | "Tie";
    winnerSummary: string;
    matrix: ComparisonMatrixRow[];
    whenToChooseA: string[];
    whenToChooseB: string[];
  };
}

export function ComparisonTable({ comparisonData }: ComparisonTableProps) {
  const { entityA, entityB, winner, winnerSummary, matrix, whenToChooseA, whenToChooseB } = comparisonData;

  const renderValue = (val: string | boolean) => {
    if (typeof val === "boolean") {
      return val ? (
        <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
          <Check className="w-4 h-4 stroke-[3]" /> Yes
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 text-slate-400 font-medium">
          <X className="w-4 h-4" /> No
        </span>
      );
    }
    return <span>{val}</span>;
  };

  return (
    <div id="quick-verdict" className="my-10 space-y-8">
      
      {/* Head-to-Head Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Entity A Card */}
        <div className={`p-6 rounded-3xl border ${winner === "A" ? "border-cyan-500 bg-cyan-50/40 dark:bg-cyan-950/20 shadow-md ring-1 ring-cyan-500/20" : "border-slate-200 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d]"} shadow-sm`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-600 dark:text-cyan-400">
              Contender A
            </span>
            <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{entityA.rating} / 5.0</span>
            </div>
          </div>

          <h3 className="text-2xl font-black text-slate-900 dark:text-white">
            {entityA.name}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 mb-4">
            {entityA.tagline}
          </p>

          <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/60">
              <strong className="block text-slate-900 dark:text-slate-100 mb-0.5">Starting Price:</strong>
              {entityA.startingPrice}
            </div>
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/60">
              <strong className="block text-slate-900 dark:text-slate-100 mb-0.5">Best For:</strong>
              {entityA.bestFor}
            </div>
          </div>
        </div>

        {/* Entity B Card */}
        <div className={`p-6 rounded-3xl border ${winner === "B" ? "border-cyan-500 bg-cyan-50/40 dark:bg-cyan-950/20 shadow-md ring-1 ring-cyan-500/20" : "border-slate-200 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d]"} shadow-sm`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase font-extrabold tracking-wider text-blue-600 dark:text-blue-400">
              Contender B
            </span>
            <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{entityB.rating} / 5.0</span>
            </div>
          </div>

          <h3 className="text-2xl font-black text-slate-900 dark:text-white">
            {entityB.name}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 mb-4">
            {entityB.tagline}
          </p>

          <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/60">
              <strong className="block text-slate-900 dark:text-slate-100 mb-0.5">Starting Price:</strong>
              {entityB.startingPrice}
            </div>
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/60">
              <strong className="block text-slate-900 dark:text-slate-100 mb-0.5">Best For:</strong>
              {entityB.bestFor}
            </div>
          </div>
        </div>

      </div>

      {/* Winner Callout Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white flex items-start gap-4 border border-slate-800 shadow-md">
        <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center flex-shrink-0">
          <Trophy className="w-5 h-5 text-amber-400" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block mb-0.5">
            Editorial Verdict &amp; Recommendation
          </span>
          <h4 className="text-lg font-bold text-white mb-1">
            {winner === "Tie" ? "Contextual Draw (Specific Use Cases)" : `Winner: ${winner === "A" ? entityA.name : entityB.name}`}
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {winnerSummary}
          </p>
        </div>
      </div>

      {/* Side-by-Side Comparison Matrix Table */}
      <div id="feature-comparison-matrix" className="space-y-3">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Detailed Feature Comparison Matrix
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Evaluated side-by-side across architecture, capabilities, and usability.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-cyan-950/60">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-slate-50 dark:bg-[#0d1424] font-semibold text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-3.5">Capability / Spec</th>
                <th className="p-3.5">{entityA.name}</th>
                <th className="p-3.5">{entityB.name}</th>
                <th className="p-3.5">Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {matrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-cyan-950/20">
                  <td className="p-3.5 font-medium text-slate-900 dark:text-slate-100">
                    <div>{row.feature}</div>
                    {row.notes && (
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                        {row.notes}
                      </span>
                    )}
                  </td>
                  <td className="p-3.5">{renderValue(row.entityA)}</td>
                  <td className="p-3.5">{renderValue(row.entityB)}</td>
                  <td className="p-3.5 font-bold">
                    {row.winner === "A" && (
                      <span className="text-cyan-600 dark:text-cyan-400">{entityA.name}</span>
                    )}
                    {row.winner === "B" && (
                      <span className="text-blue-600 dark:text-blue-400">{entityB.name}</span>
                    )}
                    {row.winner === "Tie" && (
                      <span className="text-slate-500">Draw</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* When to Choose A vs When to Choose B */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        
        <div id="when-to-choose-notion" className="p-6 rounded-2xl border border-cyan-200 dark:border-cyan-900/60 bg-cyan-50/30 dark:bg-cyan-950/20">
          <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-800 dark:text-cyan-300 mb-3">
            Choose {entityA.name} If:
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {whenToChooseA.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div id="when-to-choose-clickup" className="p-6 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/30 dark:bg-blue-950/20">
          <h4 className="text-sm font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-3">
            Choose {entityB.name} If:
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {whenToChooseB.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
}
