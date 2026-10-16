"use client";

import React, { useState } from "react";
import { Download, Check, FileSpreadsheet, ShieldCheck, Mail, Sparkles } from "lucide-react";

export function LeadMagnetCard() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid work email address.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "lead-magnet-procurement-checklist" }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Checklist sent to your inbox. Direct access unlocked below!");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network connection error.");
    }
  };

  return (
    <div className="w-full my-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-[#070e1e] to-slate-900 border border-cyan-500/30 text-white shadow-xl relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Free Downloadable Toolkit</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Enterprise SaaS Procurement &amp; Security Audit Sheet
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Get our complete 35-point vendor scorecard covering SOC2 Type II, SAML 2.0 SSO clauses, data sovereignty, SLA availability commitments, and pricing negotiation levers.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
              Notion &amp; Excel Format
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Security Verified
            </span>
          </div>
        </div>

        {/* Form Container */}
        <div className="w-full md:w-80 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          {status === "success" ? (
            <div className="text-center space-y-3 py-2">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">Checklist Unlocked!</h4>
              <p className="text-xs text-slate-300">{message}</p>
              <a
                href="/resources"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs transition-all shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Open Resources Hub</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleDownload} className="space-y-3">
              <label htmlFor="lead-email" className="block text-xs font-bold text-slate-200">
                Where should we send the template?
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                <input
                  id="lead-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-hidden focus:border-cyan-400 transition-colors"
                />
              </div>

              {message && status === "error" && (
                <p className="text-xs text-rose-400">{message}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md transition-all disabled:opacity-50"
              >
                <Download className="w-4 h-4" />
                <span>{status === "loading" ? "Preparing..." : "Get Free Template"}</span>
              </button>

              <p className="text-[10px] text-slate-400 text-center">
                Instant delivery. By downloading, you agree to our{" "}
                <a href="/privacy" className="underline hover:text-cyan-300">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
