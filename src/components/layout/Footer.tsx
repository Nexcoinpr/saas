import React from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { TwitterIcon, LinkedinIcon, GithubIcon } from "@/components/common/SocialIcons";
import { BrandLogo } from "@/components/common/BrandLogo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-cyan-950/40 bg-slate-50 dark:bg-[#050811] text-slate-600 dark:text-slate-400 text-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo />
            
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-sm">
              An independent technology publication dedicated to high-signal SaaS insights, hands-on software reviews, head-to-head comparisons, and enterprise automation guides.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-cyan-900/30 rounded-lg p-2.5 max-w-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>
                <strong>Editorial Independence:</strong> Reviews are tested rigorously in sandbox environments without sponsored vendor influence.
              </span>
            </div>

            <div className="text-xs">
              <span className="text-slate-600 dark:text-slate-400 block mb-0.5">Direct Contact:</span>
              <a href="mailto:info.saasinsider@gmail.com" className="text-cyan-600 dark:text-cyan-400 font-semibold hover:underline">
                info.saasinsider@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Popular Comparisons */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3.5">
              Popular Comparisons
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/comparisons/1password-vs-lastpass" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  1Password vs LastPass
                </Link>
              </li>
              <li>
                <Link href="/comparisons/crisp-vs-supabase" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Crisp vs Supabase
                </Link>
              </li>
              <li>
                <Link href="/comparisons/shopify-vs-1password" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Shopify vs 1Password
                </Link>
              </li>
              <li>
                <Link href="/comparisons/pipedrive-vs-convertkit" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Pipedrive vs ConvertKit
                </Link>
              </li>
              <li>
                <Link href="/comparisons/github-copilot-vs-loom" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  GitHub Copilot vs Loom
                </Link>
              </li>
              <li>
                <Link href="/comparisons/todoist-vs-debezium" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Todoist vs Debezium
                </Link>
              </li>
              <li>
                <Link href="/comparisons/quickbooks-vs-brevo" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  QuickBooks vs Brevo
                </Link>
              </li>
              <li>
                <Link href="/comparisons/activecampaign-vs-zendesk" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  ActiveCampaign vs Zendesk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tested SaaS Reviews */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3.5">
              Tested Reviews
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/reviews/zapier-review" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Zapier Automation Review
                </Link>
              </li>
              <li>
                <Link href="/reviews/asana-review" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Asana Review &amp; Pricing
                </Link>
              </li>
              <li>
                <Link href="/reviews/copper-review" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Copper CRM Review
                </Link>
              </li>
              <li>
                <Link href="/reviews/perplexity-review" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Perplexity AI Teardown
                </Link>
              </li>
              <li>
                <Link href="/reviews/remote-review" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Remote.com Contractor
                </Link>
              </li>
              <li>
                <Link href="/reviews/vidyard-review" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Vidyard Video Caps
                </Link>
              </li>
              <li>
                <Link href="/reviews/looka-review" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Looka Logo Breakdown
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="font-semibold text-cyan-600 dark:text-cyan-400 hover:underline">
                  All Software Reviews →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Software Category Pillars */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3.5">
              Category Hubs
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/crm" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  CRM &amp; Sales Tools
                </Link>
              </li>
              <li>
                <Link href="/productivity" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Productivity Suites
                </Link>
              </li>
              <li>
                <Link href="/ai-tools" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  AI &amp; Automation
                </Link>
              </li>
              <li>
                <Link href="/automation" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/software" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Software &amp; Dev Stack
                </Link>
              </li>
              <li>
                <Link href="/saas" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  SaaS Industry Reports
                </Link>
              </li>
              <li>
                <Link href="/comparisons" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Head-to-Head Hub
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Buyer Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Publication & Legal */}
          <div>
            <h3 className="font-semibold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3.5">
              Publication &amp; Legal
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  About SaaSInsider
                </Link>
              </li>
              <li>
                <Link href="/authors" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Authors &amp; Editorial Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Readers FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Technical SEO and LLM index links */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-cyan-950/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} SaaSInsider. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <Link href="/sitemap.xml" className="hover:underline">
              Sitemap.xml
            </Link>
            <span>•</span>
            <Link href="/robots.txt" className="hover:underline">
              Robots.txt
            </Link>
            <span>•</span>
            <a href="/llms.txt" target="_blank" className="hover:underline text-cyan-600 dark:text-cyan-400 font-medium">
              llms.txt (AI Search)
            </a>
            <span>•</span>
            <a href="/llms-full.txt" target="_blank" className="hover:underline">
              llms-full.txt
            </a>
          </div>

          <div className="text-right">
            Designed for Search, Answer Engines & Readers. Zero tracking bloat.
          </div>
        </div>

      </div>
    </footer>
  );
}
