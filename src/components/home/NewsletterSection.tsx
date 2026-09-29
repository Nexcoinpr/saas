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
      setMessage("You're subscribed! Welcome to SaaSInsider Weekly.");
      setEmail("");
    }, 600);
  };

  return (
    <section id="newsletter" className="py-16 bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 text-white relative overflow-hidden">
      {/* Subtle backdrop shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-800/60 border border-indigo-700/60 text-indigo-200 mb-6">
          <Mail className="w-3.5 h-3.5 text-indigo-300" />
          <span>Curated Weekly Dispatch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Get the latest SaaS, AI and software insights in your inbox.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-indigo-200/90 max-w-xl mx-auto leading-relaxed">
          Join 28,000+ software founders, engineering leaders, and operations executives who read our breakdown every Thursday morning.
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
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-indigo-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/15 text-sm transition-all"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 flex-shrink-0 disabled:opacity-50"
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
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-indigo-300/80">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>Strict zero-spam policy. Unsubscribe anytime with 1-click.</span>
          </div>
        </form>

      </div>
    </section>
  );
}
