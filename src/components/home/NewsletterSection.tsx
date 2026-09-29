"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    // Simulate instantaneous client confirmation
    setTimeout(() => {
      setStatus("success");
      setMessage("You're subscribed! Welcome to the Nexsas Executive Dispatch.");
      setEmail("");
    }, 600);
  };

  return (
    <section id="newsletter" className="py-18 bg-gradient-to-br from-[#061529] via-[#080d1a] to-[#04060c] text-white relative overflow-hidden border-t border-cyan-950/40">
      {/* Subtle backdrop glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 mb-6">
          <Mail className="w-3.5 h-3.5 text-cyan-400" />
          <span>Curated Weekly Dispatch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
          Get verified SaaS and AI tool intelligence in your inbox.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
          Join 28,000+ software founders, engineering leaders, and operations executives who read the Nexsas breakdown every Thursday morning.
        </p>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
          {status === "success" ? (
            <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-600/60 text-emerald-200 flex items-center justify-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <span className="font-semibold text-sm">{message}</span>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email address"
                required
                aria-label="Email address for newsletter"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-cyan-500/30 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/15 text-sm transition-all"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm shadow-md shadow-cyan-600/30 transition-all flex items-center justify-center gap-2 flex-shrink-0 disabled:opacity-50"
              >
                <span>{status === "loading" ? "Subscribing..." : "Subscribe"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {status === "error" && (
            <p className="mt-2 text-xs text-rose-300">{message}</p>
          )}

          {/* Privacy messaging */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Strict zero-spam policy. Unsubscribe anytime with 1-click.</span>
          </div>
        </form>

      </div>
    </section>
  );
}
