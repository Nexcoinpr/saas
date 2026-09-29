"use client";

import React, { useState } from "react";
import { Link as LinkIcon, Check } from "lucide-react";
import { TwitterIcon, LinkedinIcon } from "@/components/common/SocialIcons";
import { SITE_CONFIG } from "@/lib/seo";

interface SocialShareProps {
  title: string;
  path: string;
}

export function SocialShare({ title, path }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const fullUrl = `${SITE_CONFIG.siteUrl}${path}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}&via=saasinsider_io`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  };

  const shareLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`;
    window.open(linkedinUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={shareTwitter}
        aria-label="Share on X / Twitter"
        className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-300 dark:hover:border-slate-700 transition-colors"
      >
        <TwitterIcon className="w-3.5 h-3.5" />
      </button>

      <button
        onClick={shareLinkedIn}
        aria-label="Share on LinkedIn"
        className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-300 dark:hover:border-slate-700 transition-colors"
      >
        <LinkedinIcon className="w-3.5 h-3.5" />
      </button>

      <button
        onClick={copyToClipboard}
        aria-label="Copy link to article"
        className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-300 dark:hover:border-slate-700 transition-colors relative"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <LinkIcon className="w-3.5 h-3.5" />}
        {copied && (
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-1.5 py-0.5 rounded shadow">
            Copied!
          </span>
        )}
      </button>
    </div>
  );
}
