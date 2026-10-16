"use client";

import React, { useState } from "react";
import { TrendingDown, Users, DollarSign, Calculator, HelpCircle, CheckCircle } from "lucide-react";

export function ChurnCalculator() {
  const [startCustomers, setStartCustomers] = useState<number>(500);
  const [lostCustomers, setLostCustomers] = useState<number>(20);
  const [startMRR, setStartMRR] = useState<number>(25000);
  const [lostMRR, setLostMRR] = useState<number>(1200);

  // Calculations
  const customerChurnRate = startCustomers > 0 ? (lostCustomers / startCustomers) * 100 : 0;
  const revenueChurnRate = startMRR > 0 ? (lostMRR / startMRR) * 100 : 0;
  const annualCustomerChurn = (1 - Math.pow(1 - customerChurnRate / 100, 12)) * 100;
  const annualRevenueChurn = (1 - Math.pow(1 - revenueChurnRate / 100, 12)) * 100;

  // Healthy benchmarks
  const isHealthyCustomerChurn = customerChurnRate <= 3;
  const isHealthyRevenueChurn = revenueChurnRate <= 2;

  return (
    <div className="w-full bg-white dark:bg-[#070b14] border border-slate-200 dark:border-cyan-950/60 rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200/80 dark:border-cyan-950/40">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-600 dark:text-rose-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <TrendingDown className="w-3.5 h-3.5" />
            <span>Interactive SaaS Retention Tool</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            SaaS Churn Rate &amp; Revenue Retention Calculator
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Calculate your monthly and annual logo churn vs MRR churn against venture-backed standards.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Input Controls */}
        <div className="space-y-6">
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0a0f1d] border border-slate-200/80 dark:border-cyan-950/40 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              Customer / Logo Metrics
            </h3>

            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                <span>Active Customers at Start of Month</span>
                <span className="font-mono text-cyan-600 dark:text-cyan-400">{startCustomers.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="50"
                max="5000"
                step="25"
                value={startCustomers}
                onChange={(e) => setStartCustomers(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-600"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                <span>Lost / Cancelled Customers This Month</span>
                <span className="font-mono text-rose-600 dark:text-rose-400">{lostCustomers.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="0"
                max={Math.min(startCustomers, 250)}
                step="1"
                value={lostCustomers}
                onChange={(e) => setLostCustomers(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-600"
              />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#0a0f1d] border border-slate-200/80 dark:border-cyan-950/40 space-y-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Monthly Recurring Revenue (MRR)
            </h3>

            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                <span>Starting MRR ($)</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400">${startMRR.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="200000"
                step="1000"
                value={startMRR}
                onChange={(e) => setStartMRR(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                <span>Lost MRR from Downgrades &amp; Cancellations ($)</span>
                <span className="font-mono text-rose-600 dark:text-rose-400">${lostMRR.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="0"
                max={Math.min(startMRR, 20000)}
                step="100"
                value={lostMRR}
                onChange={(e) => setLostMRR(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-600"
              />
            </div>
          </div>
        </div>

        {/* Output Metrics Cards */}
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900 text-white dark:bg-[#040711] border border-slate-800 dark:border-cyan-900/60 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Calculated Rates</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 font-medium">
                Standard Monthly Cycle
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs text-slate-400 mb-1">Monthly Logo Churn</div>
                <div className="text-2xl sm:text-3xl font-black text-white">
                  {customerChurnRate.toFixed(2)}%
                </div>
                <div className={`text-xs mt-2 font-medium flex items-center gap-1 ${isHealthyCustomerChurn ? "text-emerald-400" : "text-amber-400"}`}>
                  <CheckCircle className="w-3.5 h-3.5" />
                  {isHealthyCustomerChurn ? "Within Target (<3%)" : "Above Average Target"}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs text-slate-400 mb-1">Monthly MRR Churn</div>
                <div className="text-2xl sm:text-3xl font-black text-white">
                  {revenueChurnRate.toFixed(2)}%
                </div>
                <div className={`text-xs mt-2 font-medium flex items-center gap-1 ${isHealthyRevenueChurn ? "text-emerald-400" : "text-amber-400"}`}>
                  <CheckCircle className="w-3.5 h-3.5" />
                  {isHealthyRevenueChurn ? "Within Target (<2%)" : "Above Average Target"}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-2">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Annualized Customer Churn Rate:</span>
                <span className="font-mono font-bold text-white">{annualCustomerChurn.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between text-xs text-slate-300">
                <span>Annualized Revenue Churn Rate:</span>
                <span className="font-mono font-bold text-white">{annualRevenueChurn.toFixed(1)}%</span>
              </div>
            </div>

            <div className="text-xs text-slate-400 leading-relaxed border-t border-slate-800 pt-4">
              <span className="font-semibold text-slate-200">Industry Standard:</span> High-performing B2B SaaS products aim for net negative revenue churn (expansion revenue surpassing cancellations).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
