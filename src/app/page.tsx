import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedArticles } from "@/components/home/FeaturedArticles";
import { TopicCards } from "@/components/home/TopicCards";
import { PopularArticles } from "@/components/home/PopularArticles";
import { LatestArticlesGrid } from "@/components/home/LatestArticlesGrid";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { BuyerGuideCta } from "@/components/home/BuyerGuideCta";
import { getFeaturedArticles, getPopularArticles, getLatestArticles } from "@/data/articles";

export default function HomePage() {
  const featuredArticles = getFeaturedArticles();
  const popularArticles = getPopularArticles();
  const latestArticles = getLatestArticles();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Cover Stories & Teardowns */}
      <FeaturedArticles articles={featuredArticles} />

      {/* Popular Topic Hubs */}
      <TopicCards />

      {/* Popular Articles based on verified readership telemetry */}
      <PopularArticles articles={popularArticles} />

      {/* Latest Articles in clean filterable grid */}
      <LatestArticlesGrid articles={latestArticles} />

      {/* Newsletter Signup */}
      <NewsletterSection />

      {/* Final Editorial Buyer CTA */}
      <BuyerGuideCta />
    </div>
  );
}
