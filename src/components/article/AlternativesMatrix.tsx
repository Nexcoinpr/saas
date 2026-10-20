import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, ShieldAlert } from "lucide-react";

interface AlternativeItem {
  name: string;
  category: string;
  bestFor: string;
  pricing: string;
  keyAdvantage: string;
  path: string;
}

interface AlternativesMatrixProps {
  currentProduct: string;
  category: string;
  alternatives?: AlternativeItem[];
}

export function AlternativesMatrix({ currentProduct, category, alternatives }: AlternativesMatrixProps) {
  // Curated alternatives mapping if not provided in article data
  const defaultAlternatives: Record<string, AlternativeItem[]> = {
    "Zapier": [
      {
        name: "Make (Integromat)",
        category: "Automation",
        bestFor: "Complex multi-branch workflows with visual canvas",
        pricing: "Free (1,000 ops) / From $9/mo",
        keyAdvantage: "Lower cost per operation on heavy loops",
        path: "/comparisons/asana-vs-make"
      },
      {
        name: "ActiveCampaign",
        category: "Automation & CRM",
        bestFor: "Customer lifecycle automation and email sequences",
        pricing: "From $29/mo",
        keyAdvantage: "Native CRM contact synchronization without connector fees",
        path: "/comparisons/activecampaign-vs-zendesk"
      }
    ],
    "Asana": [
      {
        name: "Make",
        category: "Automation",
        bestFor: "Automated task routing and external webhooks",
        pricing: "Free / $9/mo",
        keyAdvantage: "Zero-code connector for enterprise sprint notifications",
        path: "/comparisons/asana-vs-make"
      },
      {
        name: "Pipedrive",
        category: "CRM & Pipelines",
        bestFor: "Revenue-focused deal stages instead of sprint tickets",
        pricing: "From $14/user/mo",
        keyAdvantage: "Visual Kanban deal velocity and automated follow-ups",
        path: "/comparisons/pipedrive-vs-convertkit"
      }
    ],
    "1Password": [
      {
        name: "LastPass",
        category: "Security & Credentials",
        bestFor: "Centralized credential storage and family vaults",
        pricing: "From $3/user/mo",
        keyAdvantage: "Direct cross-platform autofill across legacy browser extensions",
        path: "/comparisons/1password-vs-lastpass"
      }
    ]
  };

  const list = alternatives && alternatives.length > 0 
    ? alternatives 
    : defaultAlternatives[currentProduct] || [
        {
          name: "1Password vs LastPass",
          category: "Security",
          bestFor: "Zero-knowledge credential encryption",
          pricing: "From $2.99/mo",
          keyAdvantage: "Secret key architecture and biometric integration",
          path: "/comparisons/1password-vs-lastpass"
        },
        {
          name: "Pipedrive vs ConvertKit",
          category: "Sales & Marketing",
          bestFor: "Funnels vs Deal pipeline management",
          pricing: "From $14/mo",
          keyAdvantage: "Visual deal velocity and customer segment routing",
          path: "/comparisons/pipedrive-vs-convertkit"
        }
      ];

  return (
    <div className="my-10 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-cyan-950/60 bg-white dark:bg-[#070b14] shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200/80 dark:border-cyan-950/40">
        <div>
          <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-600 dark:text-cyan-400 block mb-1">
            Buyer Alternative Finder
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Top Tested Alternatives to {currentProduct}
          </h3>
        </div>
        <span className="text-xs text-slate-500 font-medium">
          Category: {category}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map((alt, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/50 dark:bg-[#0a0f1d] hover:border-cyan-500/80 transition-all flex flex-col justify-between"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  {alt.name}
                </h4>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300">
                  {alt.pricing}
                </span>
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-400">
                <strong className="text-slate-800 dark:text-slate-200">Best for: </strong>
                {alt.bestFor}
              </div>

              <div className="text-xs text-emerald-600 dark:text-emerald-400 flex items-start gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span>{alt.keyAdvantage}</span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-800">
              <Link
                href={alt.path}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                <span>Read Head-to-Head Comparison</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
