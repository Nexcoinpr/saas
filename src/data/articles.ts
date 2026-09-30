import { Article } from "@/types/blog";
import publishedArticlesData from "./published-articles.json";

export const ARTICLES: Article[] = [
  ...(publishedArticlesData as unknown as Article[])
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find(a => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return ARTICLES.filter(a => a.category === categorySlug);
}

export function getArticlesByAuthor(authorSlug: string): Article[] {
  return ARTICLES.filter(a => a.author.slug === authorSlug);
}

export function getFeaturedArticles(): Article[] {
  return ARTICLES.filter(a => a.isFeatured);
}

export function getPopularArticles(): Article[] {
  return ARTICLES.filter(a => a.isPopular);
}

export function getLatestArticles(limit?: number): Article[] {
  const sorted = [...ARTICLES].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
}
