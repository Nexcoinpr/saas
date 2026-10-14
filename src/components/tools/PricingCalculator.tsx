"use client";

import React, { useState } from "react";
import { Calculator, DollarSign, Users, AlertCircle, ArrowRight, ShieldCheck, Check } from "lucide-react";

export function PricingCalculator() {
  const [teamSeats, setTeamSeats] = useState<number>(10);
  const [basePricePerSeat, setBasePricePerSeat] = useState<number>(25);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");
  const [includeAddons, setIncludeAddons] = useState<boolean>(true);
  const [includeSso, setIncludeSso] = useState<boolean>(false);

  // Math
  const discountMultiplier = billingCycle === "annual" ? 0.8 : 1.0;
  const effectiveSeatPrice = basePricePerSeat * discountMultiplier;
  const rawSeatTotal = teamSeats * effectiveSeatPrice;
  const addonCost = includeAddons ? Math.max(20, teamSeats * 3.5) : 0;
  const ssoPremiumCost = includeSso ? Math.max(50, teamSeats * 5) : 0;
  const monthlyTotal = rawSeatTotal + addonCost + ssoPremiumCost;
  const annualTotal = monthlyTotal * 12;
  const annualSavings = (basePricePerSeat * teamSeats - rawSeatTotal) * 12;

  return (
    <div className="my-12 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] shadow-sm">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <span className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950/70 text-cyan-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
          <Calculator className="w-5 h-5" />
        </span>
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Interactive SaaS Cost &amp; Hidden Fee Calculator
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Calculate accurate annual commitment totals including typical enterprise SSO markups and automation add-ons.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Seats Slider */}
          <div>
            <div className="flex justify-between items-center mb-2 text-sm font-semibold text-slate-900 dark:text-slate-200">
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                Team Collaborator Seats:
              </span>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold px-3 py-0.5 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800">
                {teamSeats} {teamSeats === 1 ? "seat" : "seats"}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={150}
              value={teamSeats}
              onChange={(e) => setTeamSeats(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-600"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-medium">
              <span>1 seat</span>
              <span>50 seats</span>
              <span>100 seats</span>
              <span>150 seats</span>
            </div>
          </div>

          {/* Base Seat Price */}
          <div>
            <div className="flex justify-between items-center mb-2 text-sm font-semibold text-slate-900 dark:text-slate-200">
              <span className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                Published Per-Seat Monthly Rate:
              </span>
              <span className="text-slate-900 dark:text-white font-bold">
                ${basePricePerSeat} /seat/mo
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[12, 25, 45, 80].map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setBasePricePerSeat(tier)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    basePricePerSeat === tier
                      ? "bg-cyan-600 text-white border-cyan-600 shadow-sm"
                      : "bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300"
                  }`}
                >
                  ${tier}/mo
                </button>
              ))}
            </div>
          </div>

          {/* Payment Schedule Toggle */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Payment Schedule
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setBillingCycle("annual")}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  billingCycle === "annual"
                    ? "border-cyan-500 bg-cyan-50/60 dark:bg-cyan-950/40 text-slate-900 dark:text-white"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400"
                }`}
              >
                <div className="text-xs font-bold flex items-center justify-between">
                  <span>Annual Billing</span>
                  <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                    Save 20%
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Paid once yearly upfront</p>
              </button>

              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`p-3 rounded-2xl border text-left transition-all ${
                  billingCycle === "monthly"
                    ? "border-cyan-500 bg-cyan-50/60 dark:bg-cyan-950/40 text-slate-900 dark:text-white"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400"
                }`}
              >
                <div className="text-xs font-bold">Monthly Billing</div>
                <p className="text-[11px] text-slate-500 mt-1">Flexible pay-as-you-go</p>
              </button>
            </div>
          </div>

          {/* Enterprise Add-ons Checklist */}
          <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Hidden Add-on Audits
            </label>

            <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50 cursor-pointer text-xs">
              <input
                type="checkbox"
                checked={includeAddons}
                onChange={(e) => setIncludeAddons(e.target.checked)}
                className="w-4 h-4 rounded text-cyan-600 focus:ring-cyan-500 border-slate-300"
              />
              <span className="flex-1 text-slate-800 dark:text-slate-200">
                Include automation execution packs &amp; premium integration connectors
              </span>
              <span className="text-slate-500 font-semibold">+${addonCost.toFixed(0)}/mo</span>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50 cursor-pointer text-xs">
              <input
                type="checkbox"
                checked={includeSso}
                onChange={(e) => setIncludeSso(e.target.checked)}
                className="w-4 h-4 rounded text-cyan-600 focus:ring-cyan-500 border-slate-300"
              />
              <span className="flex-1 text-slate-800 dark:text-slate-200">
                SAML 2.0 / Okta SSO &amp; SCIM User Provisioning requirement
              </span>
              <span className="text-slate-500 font-semibold">+${ssoPremiumCost.toFixed(0)}/mo</span>
            </label>
          </div>
        </div>

        {/* Calculation Result Summary Column */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-50 dark:bg-[#060a14] border border-slate-200/90 dark:border-cyan-900/40 space-y-5">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 block">
            Procurement Commitment Summary
          </span>

          <div className="space-y-1">
            <span className="text-xs text-slate-500 dark:text-slate-400 block">Estimated Annual Spend:</span>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              ${annualTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              <span className="text-xs text-slate-500 font-normal"> /year</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Or ~${monthlyTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}/month amortized.
            </p>
          </div>

          {billingCycle === "annual" && annualSavings > 0 && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>
                <strong>${annualSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })} saved</strong> per year via annual prepayment discount.
              </span>
            </div>
          )}

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex justify-between">
              <span>Base Seat Subtotal:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                ${(rawSeatTotal * 12).toLocaleString(undefined, { maximumFractionDigits: 0 })}/yr
              </span>
            </div>
            <div className="flex justify-between">
              <span>Automation / Integration Quota:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                ${(addonCost * 12).toLocaleString(undefined, { maximumFractionDigits: 0 })}/yr
              </span>
            </div>
            <div className="flex justify-between">
              <span>Enterprise Identity &amp; SSO:</span>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                ${(ssoPremiumCost * 12).toLocaleString(undefined, { maximumFractionDigits: 0 })}/yr
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
            <a
              href="/comparisons"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-cyan-600 dark:hover:bg-cyan-500 font-semibold text-xs transition-colors"
            >
              <span>Compare Tools on Value &amp; ROI</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
