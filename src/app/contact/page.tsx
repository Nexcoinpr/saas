"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "editorial",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", topic: "editorial", message: "" });
    }, 700);
  };

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ name: "Contact Us", item: "/contact" }]} />

        {/* Page Header */}
        <header className="my-8 max-w-2xl space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Contact the Editorial Team
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Have a question about a software review, a product pitch, or a factual pricing update? We value thoughtful feedback from our readership.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 my-10">
          
          {/* Contact Form (7 cols) */}
          <div className="md:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] shadow-sm">
              {status === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Message Dispatched
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. Our editorial desk reviews incoming inquiries daily and responds within 24 to 48 business hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Work Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="editorial">Editorial Inquiry / Story Lead</option>
                      <option value="correction">Factual Correction / Pricing Update</option>
                      <option value="review-request">Submit Software for Sandbox Review</option>
                      <option value="press">Press &amp; Media Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide specific details or links to relevant articles..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-sm transition-all shadow-md shadow-cyan-600/25 disabled:opacity-50"
                  >
                    <span>{status === "loading" ? "Transmitting..." : "Send Inquiry"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar Guidelines (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            
            <div className="p-6 rounded-3xl border border-slate-200 dark:border-cyan-950/60 bg-slate-50 dark:bg-[#0a0f1d] text-xs text-slate-600 dark:text-slate-400 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Direct Department Inboxes
              </h3>

              <div>
                <strong className="block text-slate-800 dark:text-slate-200 mb-0.5">
                  Editorial &amp; Review Desk:
                </strong>
                <a href="mailto:editorial@nexsas.io" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                  editorial@nexsas.io
                </a>
              </div>

              <div>
                <strong className="block text-slate-800 dark:text-slate-200 mb-0.5">
                  Fact-Checking &amp; Corrections:
                </strong>
                <a href="mailto:corrections@nexsas.io" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                  corrections@nexsas.io
                </a>
              </div>

              <div>
                <strong className="block text-slate-800 dark:text-slate-200 mb-0.5">
                  Press &amp; Syndication:
                </strong>
                <a href="mailto:press@nexsas.io" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                  press@nexsas.io
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl border border-slate-200 dark:border-cyan-950/60 bg-white dark:bg-[#0a0f1d] text-xs text-slate-600 dark:text-slate-400 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Vendor Submission Policy</span>
              </div>
              <p className="leading-relaxed">
                We accept sandbox account invitations from software founders and product teams. Submitting a tool does not guarantee coverage, and editorial evaluations remain entirely independent.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
