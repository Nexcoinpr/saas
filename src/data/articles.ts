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

export function getPopularArticles(limit?: number): Article[] {
  const sorted = [...ARTICLES]
    .filter(a => a.isPopular)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  return limit ? sorted.slice(0, limit) : sorted;
}

export function getLatestArticles(limit?: number): Article[] {
  const sorted = [...ARTICLES].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
}
