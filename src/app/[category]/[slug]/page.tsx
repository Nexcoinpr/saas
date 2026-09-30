import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getArticleBySlug, ARTICLES } from "@/data/articles";
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

  // Fetch related articles based on slugs
  const relatedArticles = ARTICLES.filter(
    (a) => article.relatedArticleSlugs.includes(a.slug) || (a.category === article.category && a.slug !== article.slug)
  );

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
          <Image
            src={article.featuredImage}
            alt={article.featuredImageAlt}
            fill
            priority
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

            {/* Interactive FAQ Accordion */}
            <FaqAccordion faqs={article.faqs} />

            {/* Author Credential Bio Box */}
            <AuthorCard author={article.author} />

          </div>

          {/* Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6 sticky top-24">
            
            {/* Table of Contents */}
            <TableOfContents items={article.tableOfContents} />

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
            <div className="p-5 rounded-2xl bg-cyan-950/20 dark:bg-darkSurface border border-cyan-500/20 space-y-3">
              <h4 className="font-bold text-sm text-slate-950 dark:text-cyan-200">
                SaaSInsider Executive Dispatch
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Receive practical SaaS metrics, software teardowns, and automation playbooks in your inbox every Thursday.
              </p>
              <a
                href="#newsletter"
                className="w-full inline-flex items-center justify-center px-3.5 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs shadow-cyan-glow transition-colors"
              >
                Join 28,000+ Subscribers
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
