"use client";

import React, { useState } from "react";
import { TrendingUp, RefreshCw, BarChart3, Check } from "lucide-react";

export function MrrArrConverter() {
  const [mode, setMode] = useState<"mrr" | "arr">("mrr");
  const [value, setValue] = useState<number>(10000);
  const [growthRate, setGrowthRate] = useState<number>(5);

  const mrr = mode === "mrr" ? value : value / 12;
  const arr = mode === "arr" ? value : value * 12;

  // Projected ARR after 12 months with monthly compound growth
  const projectedArr = mrr * Math.pow(1 + growthRate / 100, 12) * 12;

  return (
    <div className="w-full bg-white dark:bg-[#070b14] border border-slate-200 dark:border-cyan-950/60 rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200/80 dark:border-cyan-950/40">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-900/60 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Financial Metric Converter</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            MRR to ARR Revenue Converter &amp; Run-Rate Projector
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Switch between monthly recurring revenue and annual run rate with compounded forward projections.
          </p>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
          <button
            onClick={() => { setMode("mrr"); setValue(10000); }}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              mode === "mrr"
                ? "bg-white dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Start with MRR
          </button>
          <button
            onClick={() => { setMode("arr"); setValue(120000); }}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              mode === "arr"
                ? "bg-white dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 shadow-xs"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            Start with ARR
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Sliders */}
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0a0f1d] border border-slate-200/80 dark:border-cyan-950/40 space-y-4">
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
              <span>{mode === "mrr" ? "Monthly Recurring Revenue (MRR)" : "Annual Recurring Revenue (ARR)"}</span>
              <span className="font-mono text-cyan-600 dark:text-cyan-400 font-bold">
                ${value.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={mode === "mrr" ? 500 : 6000}
              max={mode === "mrr" ? 150000 : 1800000}
              step={mode === "mrr" ? 500 : 6000}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-600"
            />
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0a0f1d] border border-slate-200/80 dark:border-cyan-950/40 space-y-4">
            <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
              <span>Expected Month-over-Month Growth Rate</span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                {growthRate}% / mo
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="25"
              step="1"
              value={growthRate}
              onChange={(e) => setGrowthRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
          </div>
        </div>

        {/* Output */}
        <div className="p-6 rounded-3xl bg-slate-900 text-white dark:bg-[#040711] border border-slate-800 dark:border-cyan-900/60 shadow-xl space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs text-slate-400 mb-1">Standard Monthly (MRR)</div>
              <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">
                ${Math.round(mrr).toLocaleString()}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-xs text-slate-400 mb-1">Annual Run-Rate (ARR)</div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                ${Math.round(arr).toLocaleString()}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-300 flex items-center gap-1.5 font-medium">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                12-Month Compounded Run-Rate:
              </span>
              <span className="text-xl font-mono font-black text-white">
                ${Math.round(projectedArr).toLocaleString()}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Assuming a consistent {growthRate}% monthly compound expansion rate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
