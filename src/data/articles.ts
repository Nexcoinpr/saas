import { Article } from "@/types/blog";
import publishedArticlesData from "./published-articles.json";

export const ARTICLES: Article[] = [
  ...(publishedArticlesData as unknown as Article[])
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug);
}

const CATEGORY_TOPIC_MAP: Record<string, string[]> = {
  crm: ["crm", "sales", "copper", "pipedrive", "brevo", "activecampaign", "zendesk", "leads"],
  "ai-tools": ["ai", "artificial intelligence", "perplexity", "copilot", "looka", "copy.ai", "cursor", "generator"],
  productivity: ["productivity", "project management", "task", "asana", "todoist", "slite", "crisp", "1password", "lastpass", "deel", "collaboration"],
  automation: ["automation", "workflow", "zapier", "make", "talend", "debezium", "webhook", "pipeline"],
  software: ["software", "developer", "supabase", "debezium", "github", "replit", "code", "database", "api"],
  "developer-tools": ["developer", "code", "github", "supabase", "replit", "debezium", "copilot", "api"],
  finance: ["finance", "accounting", "quickbooks", "brex", "chargebee", "payroll", "bookkeeping", "billing"],
  reviews: ["reviews", "review"],
  comparisons: ["comparisons", "comparison"],
  saas: ["saas", "software", "pricing", "subscription", "business"],
  startups: ["startup", "small business", "founder", "scaling", "eor"],
  cloud: ["cloud", "hosting", "infrastructure", "supabase", "debezium", "database"],
  marketing: ["marketing", "email", "convertkit", "brevo", "activecampaign", "sproutsocial"],
  tutorials: ["how to", "guide", "setup", "migration", "playbook", "checklist"],
  "how-to": ["how to", "guide", "setup", "migration", "playbook", "checklist"],
  business: ["business", "contract", "seat", "licensing", "procurement", "economics"],
  news: ["dispatch", "teardown", "updates", "market"]
};

export function getArticlesByCategory(categorySlug: string): Article[] {
  const exact = ARTICLES.filter(a => a.category === categorySlug);
  if (exact.length >= 6) return exact;

  const keywords = CATEGORY_TOPIC_MAP[categorySlug] || [categorySlug];
  const matched = ARTICLES.filter(a => {
    if (a.category === categorySlug) return true;
    const textToMatch = [a.title, a.slug, a.subcategory, ...(a.tags || [])].join(" ").toLowerCase();
    return keywords.some(k => textToMatch.includes(k));
  });

  const unique = Array.from(new Set([...exact, ...matched]));
  if (unique.length >= 6) return unique;

  // Backfill with remaining top articles so every category hub offers 6-8 deep internal links
  const remaining = ARTICLES.filter(a => !unique.some(u => u.slug === a.slug));
  return [...unique, ...remaining].slice(0, 8);
}

export function getArticlesByAuthor(authorSlug: string): Article[] {
  return ARTICLES.filter(a => a.author.slug === authorSlug || a.author.id === authorSlug);
}

export function getPreviousAndNextArticle(slug: string): { prev: Article | null; next: Article | null } {
  const idx = ARTICLES.findIndex(a => a.slug === slug);
  if (idx === -1 || ARTICLES.length <= 1) return { prev: null, next: null };
  const prev = idx > 0 ? ARTICLES[idx - 1] : ARTICLES[ARTICLES.length - 1];
  const next = idx < ARTICLES.length - 1 ? ARTICLES[idx + 1] : ARTICLES[0];
  return { prev, next };
}

export function getRelatedArticles(article: Article, limit: number = 6): Article[] {
  const currentSlug = article.slug;
  const currentTags = (article.tags || []).map(t => t.toLowerCase());

  const scored = ARTICLES.filter(a => a.slug !== currentSlug).map(a => {
    let score = 0;
    if (a.category === article.category) score += 3;
    if (a.author.slug === article.author.slug) score += 1;
    const aTags = (a.tags || []).map(t => t.toLowerCase());
    const commonTags = aTags.filter(t => currentTags.includes(t));
    score += commonTags.length * 2;
    return { article: a, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const selected = scored.slice(0, limit).map(s => s.article);

  // If fewer than limit, backfill from latest
  if (selected.length < limit) {
    const extra = ARTICLES.filter(a => a.slug !== currentSlug && !selected.some(s => s.slug === a.slug));
    return [...selected, ...extra].slice(0, limit);
  }

  return selected;
}

export function getTopComparisons(limit: number = 6): Article[] {
  return ARTICLES.filter(a => a.template === "comparison" || a.category === "comparisons").slice(0, limit);
}

export function getTopReviews(limit: number = 6): Article[] {
  return ARTICLES.filter(a => a.template === "review" || a.category === "reviews").slice(0, limit);
}

export function getFeaturedArticles(limit?: number): Article[] {
  const sorted = [...ARTICLES]
    .filter(a => a.isFeatured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  return limit ? sorted.slice(0, limit) : sorted;
}

export function getPopularArticles(limit: number = 6): Article[] {
  const pool = ARTICLES.filter(a => a.template === "review" || a.template === "comparison" || a.isPopular);
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit);
}

export function getRandomArticles(count: number = 6, excludeSlugs: string[] = []): Article[] {
  const pool = ARTICLES.filter(a => !excludeSlugs.includes(a.slug));
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function getLatestArticles(limit?: number): Article[] {
  const sorted = [...ARTICLES].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
}
