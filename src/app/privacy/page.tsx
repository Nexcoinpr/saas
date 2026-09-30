import React from "react";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy | SaaSInsider",
  description: "Read our privacy policy detailing data protection, cookie handling, zero-tracking philosophy, and rights for SaaSInsider readers and members.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/privacy`,
  },
  openGraph: {
    title: "Privacy Policy | SaaSInsider",
    description: "Read our privacy policy detailing data protection, cookie handling, zero-tracking philosophy, and rights for SaaSInsider readers and members.",
    url: `${SITE_CONFIG.siteUrl}/privacy`,
    siteName: SITE_CONFIG.name,
    type: "website",
    images: [
      {
        url: SITE_CONFIG.defaultOgImage,
        width: 1200,
        height: 630,
        alt: "SaaSInsider Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | SaaSInsider",
    description: "Read our privacy policy detailing data protection, cookie handling, zero-tracking philosophy, and rights for SaaSInsider readers and members.",
    creator: SITE_CONFIG.twitterHandle,
    images: [SITE_CONFIG.defaultOgImage],
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs items={[{ name: "Privacy Policy", item: "/privacy" }]} />

        <header className="my-8 max-w-2xl space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last Updated: Recently Verified
          </p>
        </header>

        <div className="prose-content text-slate-800 dark:text-slate-200 space-y-6 my-8">
          <section>
            <h2>1. Our Commitment to Reader Privacy</h2>
            <p>
              SaaSInsider is dedicated to providing high-quality software journalism and analysis without invasive surveillance. We do not sell your personal information, operate covert tracking beacons, or share your email address with third-party software vendors.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <p>
              We collect minimal data necessary to deliver our content and weekly newsletter:
            </p>
            <ul>
              <li><strong>Newsletter Subscriptions:</strong> If you voluntarily subscribe to the SaaSInsider Executive Dispatch, we store your email address strictly for dispatching editorial newsletters. You may unsubscribe with a single click at any time.</li>
              <li><strong>Contact &amp; Correction Forms:</strong> Information submitted via our contact forms (name, email, feedback) is used solely to respond to your specific inquiry.</li>
              <li><strong>Aggregated Anonymous Telemetry:</strong> We collect privacy-preserving server logs (pages requested, browser type, referrer) to assess aggregate article popularity and improve site performance without profiling individual users.</li>
            </ul>
          </section>

          <section>
            <h2>3. Third-Party Links &amp; Outgoing Referrals</h2>
            <p>
              Our articles frequently link to external SaaS applications, documentation sites, and research reports. When you click an outgoing link or purchase a subscription through an affiliate link, that third party’s privacy policy governs your interaction with their platform.
            </p>
          </section>

          <section>
            <h2>4. Data Rights &amp; Contact</h2>
            <p>
              Under GDPR, CCPA, and international data regulations, you have the right to request access to or deletion of your email address from our newsletter list. Please submit any data requests to <a href="mailto:info.saasinsider@gmail.com" className="text-cyan-600 dark:text-cyan-400 underline">info.saasinsider@gmail.com</a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
