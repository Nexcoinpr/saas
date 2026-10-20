import { Article } from "@/types/blog";
import { ARTICLES } from "@/data/articles";

interface KeywordLinkTarget {
  name: string;
  pattern: RegExp;
  path: string;
  title: string;
}

// Build keyword link map from live articles (tools, software names, and comparisons)
export function getKeywordLinkTargets(currentSlug: string): KeywordLinkTarget[] {
  const targets: KeywordLinkTarget[] = [];
  const registered = new Set<string>();

  for (const art of ARTICLES) {
    if (art.slug === currentSlug) continue;

    // 1. If it's a review or has product name
    if (art.reviewData && art.reviewData.productName) {
      const prod = art.reviewData.productName.trim();
      if (prod.length >= 3 && !registered.has(prod.toLowerCase())) {
        registered.add(prod.toLowerCase());
        targets.push({
          name: prod,
          pattern: new RegExp(`\\b(${escapeRegex(prod)})\\b`, 'i'),
          path: art.path,
          title: art.title
        });
      }
    }

    // 2. Extract software names from 'X vs Y' comparison titles
    const vsMatch = art.title.match(/^([A-Za-z0-9\.\s]+?)\s+vs\s+([A-Za-z0-9\.\s]+?)(?::|\s+or|\s+Showdown|\?|$)/i);
    if (vsMatch) {
      const toolA = vsMatch[1].trim();
      const toolB = vsMatch[2].trim();
      
      const vsPhrase = `${toolA} vs ${toolB}`;
      if (!registered.has(vsPhrase.toLowerCase())) {
        registered.add(vsPhrase.toLowerCase());
        targets.push({
          name: vsPhrase,
          pattern: new RegExp(`\\b(${escapeRegex(toolA)}\\s+vs\\s+${escapeRegex(toolB)})\\b`, 'i'),
          path: art.path,
          title: art.title
        });
      }
    }
  }

  // Add high-value category & financial engine targets
  targets.push(
    {
      name: "SaaS ROI Calculator",
      pattern: /\b(ROI calculator|SaaS ROI)\b/i,
      path: "/tools#roi-calculator",
      title: "Interactive SaaS ROI Financial Engine"
    },
    {
      name: "SaaS Valuation",
      pattern: /\b(SaaS valuation|ARR multiple)\b/i,
      path: "/tools#valuation-multiple",
      title: "SaaS Valuation Multiple Calculator"
    },
    {
      name: "Software Alternatives",
      pattern: /\b(software alternatives|alternative tools)\b/i,
      path: "/comparisons",
      title: "Browse All Software Comparison Showdowns"
    }
  );

  return targets;
}

function escapeRegex(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Injects contextual internal links into HTML content without breaking existing anchor tags or attributes.
 * Limits to max 1 link per target keyword and max 4 auto-links per content block to prevent over-optimization.
 */
export function injectInternalLinks(htmlContent: string, targets: KeywordLinkTarget[], maxLinks: number = 3): string {
  if (!htmlContent || targets.length === 0) return htmlContent;

  let modifiedHtml = htmlContent;
  let linkedCount = 0;
  const usedTargets = new Set<string>();

  for (const target of targets) {
    if (linkedCount >= maxLinks) break;
    if (usedTargets.has(target.name.toLowerCase())) continue;

    // Check if keyword is inside an existing <a ...>...</a> or HTML tag
    // We split by tags to safely match text nodes only
    const parts = modifiedHtml.split(/(<[^>]+>)/g);
    let insideAnchor = false;
    let replacedInPart = false;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (part.startsWith('<')) {
        if (/^<a\b/i.test(part)) insideAnchor = true;
        if (/^<\/a>/i.test(part)) insideAnchor = false;
        continue;
      }

      if (!insideAnchor && target.pattern.test(part)) {
        // Replace only the FIRST occurrence in this text block
        parts[i] = part.replace(target.pattern, (match) => {
          if (replacedInPart) return match;
          replacedInPart = true;
          return `<a href="${target.path}" title="${target.title.replace(/"/g, '&quot;')}" class="font-semibold text-cyan-600 dark:text-cyan-400 underline decoration-cyan-500/40 hover:decoration-cyan-500 hover:text-cyan-700 transition-colors">${match}</a>`;
        });

        if (replacedInPart) {
          usedTargets.add(target.name.toLowerCase());
          linkedCount++;
          break;
        }
      }
    }

    modifiedHtml = parts.join('');
  }

  return modifiedHtml;
}
