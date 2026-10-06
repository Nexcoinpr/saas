import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SafeImage } from "@/components/common/SafeImage";
import { getArticleBySlug, ARTICLES, getPreviousAndNextArticle, getRelatedArticles, getPopularArticles } from "@/data/articles";
import { getCategoryBySlug } from "@/data/categories";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleHeader } from "@/components/article/ArticleHeader";
import { DirectAnswerBox } from "@/components/article/DirectAnswerBox";
import { KeyTakeaways } from "@/components/article/KeyTakeaways";
import { TableOfContents } from "@/components/article/TableOfContents";
import { ScoreCard } from "@/components/article/ScoreCard";
import { ProsConsGrid } from "@/components/article/ProsConsGrid";
import { ComparisonTable } from "@/components/article/ComparisonTable";
import { StepByStepGuide } from "@/components/article/StepByStepGuide";
import { FaqAccordion } from "@/components/article/FaqAccordion";
import { AuthorCard } from "@/components/article/AuthorCard";
import { ArticlePagination } from "@/components/article/ArticlePagination";
import { SidebarRecommendations } from "@/components/article/SidebarRecommendations";
import { RelatedArticles } from "@/components/article/RelatedArticles";
import { AffiliateDisclosure } from "@/components/article/AffiliateDisclosure";
import { JsonLd } from "@/components/common/JsonLd";
import { generateArticleSchema, SITE_CONFIG } from "@/lib/seo";

interface ArticlePageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({
    category: a.category,
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.tags,
    alternates: {
      canonical: `${SITE_CONFIG.siteUrl}${article.path}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${SITE_CONFIG.siteUrl}${article.path}`,
      siteName: SITE_CONFIG.name,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      images: [
        {
          url: article.featuredImage.startsWith("http") ? article.featuredImage : `${SITE_CONFIG.siteUrl}${article.featuredImage}`,
          width: 1200,
          height: 630,
          alt: article.featuredImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      creator: SITE_CONFIG.twitterHandle,
      images: [article.featuredImage.startsWith("http") ? article.featuredImage : `${SITE_CONFIG.siteUrl}${article.featuredImage}`],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category: categorySlug, slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || article.category !== categorySlug) {
    notFound();
  }

  const category = getCategoryBySlug(article.category);
  const articleSchema = generateArticleSchema(article);

  // Compute smart related articles based on category, author & tags
  const relatedArticles = getRelatedArticles(article, 6);

  // Sequential Next / Previous articles for unbroken crawler traversal
  const { prev, next } = getPreviousAndNextArticle(article.slug);

  // Popular articles for sticky sidebar recommendations
  const popularArticles = getPopularArticles(6);

  return (
    <article className="py-8 md:py-12">
      {/* Schema.org Structured Data */}
      <JsonLd data={articleSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: category ? category.name : article.category, item: `/${article.category}` },
            { name: article.title, item: article.path },
          ]}
        />

        {/* Affiliate & Editorial Disclosure for reviews and comparisons */}
        {(article.template === "review" || article.template === "comparison") && (
          <AffiliateDisclosure />
        )}

        {/* Article Header (H1, Meta, Author, Dates) */}
        <ArticleHeader article={article} />

        {/* Featured Image */}
        <figure className="my-8 rounded-3xl overflow-hidden aspect-[16/9] relative bg-slate-100 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-sm">
          <SafeImage
            src={article.featuredImage}
            alt={article.featuredImageAlt}
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover"
          />
        </figure>

        {/* AEO / GEO Direct Answer Box */}
        <DirectAnswerBox directAnswer={article.directAnswer} />

        {/* Main Points */}
        <KeyTakeaways takeaways={article.keyTakeaways} />

        {/* 2-Column Content Layout: Main Text (8 cols) + Sticky TOC (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-10 items-start">
          
          {/* Main Editorial Body (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Template-Specific Injections */}

            {/* 1. Review Template: Scorecard and Pros/Cons */}
            {article.template === "review" && article.reviewData && (
              <>
                <ScoreCard reviewData={article.reviewData} />
                <ProsConsGrid
                  pros={article.reviewData.pros}
                  cons={article.reviewData.cons}
                />
              </>
            )}

            {/* 2. Comparison Template: Comparison Matrix & Decision Guide */}
            {article.template === "comparison" && article.comparisonData && (
              <ComparisonTable comparisonData={article.comparisonData} />
            )}

            {/* 3. How-To Template: Step-by-Step Playbook */}
            {article.template === "how-to" && article.howToData && (
              <StepByStepGuide howToData={article.howToData} />
            )}

            {/* Standard Article Content Sections */}
            <div className="prose-content text-slate-800 dark:text-slate-200">
              {article.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  {section.level === 2 && <h2>{section.title}</h2>}
                  {section.level === 3 && <h3>{section.title}</h3>}
                  {section.level === 4 && <h4 className="font-bold text-base mt-4">{section.title}</h4>}

                  <div
                    dangerouslySetInnerHTML={{ __html: section.content }}
                    className="leading-relaxed"
                  />

                  {section.callout && (
                    <div
                      className={`my-6 p-4 rounded-xl border text-sm flex items-start gap-3 ${
                        section.callout.type === "info"
                          ? "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/60 text-blue-900 dark:text-blue-200"
                          : section.callout.type === "tip"
                          ? "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200"
                          : "bg-slate-50 dark:bg-slate-900 border-slate-200 text-slate-800 dark:text-slate-200"
                      }`}
                    >
                      <div className="leading-relaxed font-medium">
                        {section.callout.text}
                      </div>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Key Topics Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
                  Topics:
                </span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Interactive FAQ Accordion */}
            <FaqAccordion faqs={article.faqs} />

            {/* Author Credential Bio Box with other articles */}
            <AuthorCard author={article.author} currentSlug={article.slug} />

            {/* Sequential Next & Previous Article Internal Links */}
            <ArticlePagination prev={prev} next={next} />

          </div>

          {/* Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6 sticky top-24">
            
            {/* Table of Contents */}
            <TableOfContents items={article.tableOfContents} />

            {/* Trending & Pillar Internal Links */}
            <SidebarRecommendations
              currentSlug={article.slug}
              popularArticles={popularArticles}
            />

            {/* Quick Fact Checking & Methodology Card */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-cyan-500/20 bg-white dark:bg-darkSurface text-xs text-slate-600 dark:text-slate-400 space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Editorial Rigor
              </h4>
              <p>
                Our evaluations adhere to strict editorial independence. No software vendor can pay for preferential ratings or score manipulation.
              </p>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href="/about"
                  className="font-semibold text-cyan-600 dark:text-cyan-400 hover:underline block"
                >
                  Read our Testing Methodology →
                </Link>
              </div>
            </div>

            {/* In-Article Mini Newsletter Signup */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-darkSurface border border-slate-200 dark:border-cyan-900/30 space-y-3">
              <h4 className="font-bold text-sm text-slate-950 dark:text-cyan-200">
                The Weekly Software Briefing
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Hands-on teardowns, pricing math, and architecture reviews delivered every Thursday morning.
              </p>
              <a
                href="#newsletter"
                className="w-full inline-flex items-center justify-center px-3.5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs shadow-sm transition-colors"
              >
                Get Weekly Dispatch
              </a>
            </div>

          </aside>

        </div>

        {/* Related Articles in Topic Cluster */}
        <RelatedArticles
          articles={relatedArticles}
          categorySlug={article.category}
        />

      </div>
    </article>
  );
}
