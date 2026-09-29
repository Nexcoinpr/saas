import React from "react";
import { Info } from "lucide-react";

export function AffiliateDisclosure() {
  return (
    <div className="my-6 p-3.5 rounded-xl border border-slate-200/90 dark:border-cyan-950/50 bg-slate-50 dark:bg-[#0a0f1d] text-xs text-slate-500 dark:text-slate-400 flex items-start gap-2.5">
      <Info className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
      <div className="leading-relaxed">
        <strong>Editorial Disclosure:</strong> Nexsas conducts independent hands-on evaluations. We may earn an affiliate commission when you purchase through links on our site at no additional cost to you. Our ratings and editorial verdicts are never influenced by affiliate partnerships.
      </div>
    </div>
  );
}
