import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { SaaSFeatureGrid } from "@/components/home/SaaSFeatureGrid";
import { SaaSMatrixSection } from "@/components/home/SaaSMatrixSection";
import { FeaturedArticles } from "@/components/home/FeaturedArticles";
import { TopicCards } from "@/components/home/TopicCards";
import { PopularArticles } from "@/components/home/PopularArticles";
import { SaaSTestimonials } from "@/components/home/SaaSTestimonials";
import { LatestArticlesGrid } from "@/components/home/LatestArticlesGrid";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { BuyerGuideCta } from "@/components/home/BuyerGuideCta";
import { PricingCalculator } from "@/components/tools/PricingCalculator";
import { getFeaturedArticles, getPopularArticles, getLatestArticles } from "@/data/articles";

export default function HomePage() {
  const featuredArticles = getFeaturedArticles();
  const popularArticles = getPopularArticles();
  const latestArticles = getLatestArticles();

  return (
    <div className="flex flex-col">
      {/* Hero Section with Interactive Dashboard Showcase */}
      <HeroSection />

      {/* Editorial Testing Principles */}
      <SaaSFeatureGrid />

      {/* Tested Tools Breakdown & Pricing Verdicts */}
      <SaaSMatrixSection />

      {/* Featured Cover Stories & Teardowns */}
      <FeaturedArticles articles={featuredArticles} />

      {/* Popular Topic Hubs */}
      <TopicCards />

      {/* Editorial Team & Testing Charter */}
      <SaaSTestimonials />

      {/* Interactive SaaS Pricing & Hidden Cost Calculator */}
      <section className="bg-slate-50/60 dark:bg-[#050812] py-6 border-b border-slate-200/80 dark:border-cyan-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCalculator />
        </div>
      </section>

      {/* Reader Favorites */}
      <PopularArticles articles={popularArticles} allArticles={latestArticles} />

      {/* Latest Articles in clean filterable grid */}
      <LatestArticlesGrid articles={latestArticles} />

      {/* Newsletter Signup */}
      <NewsletterSection />

      {/* Final Editorial Buyer CTA */}
      <BuyerGuideCta />
    </div>
  );
}
