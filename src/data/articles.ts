import { Article } from "@/types/blog";
import publishedArticlesData from "./published-articles.json";

export const ARTICLES: Article[] = [
  ...(publishedArticlesData as unknown as Article[])
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return ARTICLES.filter(a => 
    a.category === categorySlug || 
    (categorySlug === "crm" && (a.subcategory?.toLowerCase().includes("crm") || a.tags?.some(t => t.toLowerCase().includes("crm"))))
  );
}

export function getArticlesByAuthor(authorSlug: string): Article[] {
  return ARTICLES.filter(a => a.author.slug === authorSlug);
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
