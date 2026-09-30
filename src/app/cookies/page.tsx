import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cookie Policy | SaaSInsider",
  description: "Explanation of cookies, local storage preferences, and zero tracking on SaaSInsider.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/cookies`,
  },
};

export default function CookiesPage() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ name: "Cookie Policy", item: "/cookies" }]} />

        <header className="my-8 max-w-2xl space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last Updated: September 2026
          </p>
        </header>

        <div className="prose-content text-slate-800 dark:text-slate-200 space-y-6 my-8">
          <section>
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small data files placed on your computer or mobile device when you visit a website. They are commonly used to remember user preferences and maintain secure sessions.
            </p>
          </section>

          <section>
            <h2>2. How SaaSInsider Uses Cookies &amp; Local Storage</h2>
            <p>
              We maintain a minimal, privacy-centric approach to local storage:
            </p>
            <ul>
              <li><strong>Functional Preferences (Local Storage):</strong> We store your chosen display theme (<code>light</code> or <code>dark</code> mode) in your browser’s <code>localStorage</code> so your preference persists across page navigations without requiring cookies.</li>
              <li><strong>No Third-Party Advertising Cookies:</strong> We do not deploy third-party advertising cookies, retargeting pixels (e.g. Facebook Pixel), or cross-site tracking scripts.</li>
            </ul>
          </section>

          <section>
            <h2>3. Managing Cookie Preferences</h2>
            <p>
              You can configure your browser settings to reject or delete cookies at any time. Because SaaSInsider does not depend on invasive tracking cookies, disabling cookies will not degrade your reading experience.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
