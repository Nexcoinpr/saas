import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getCategoryBySlug, CATEGORIES } from "@/data/categories";
import { getArticlesByCategory, getLatestArticles } from "@/data/articles";
import { getCategoryGuide } from "@/data/categoryGuides";
import { ArticleCard } from "@/components/common/ArticleCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/seo";
import { 
  Layers, 
  Star, 
  Scale, 
  Sparkles, 
  Cpu, 
  CheckCircle, 
  GitMerge, 
  Briefcase, 
  Rocket, 
  Cloud, 
  BookOpen, 
  HelpCircle, 
  Newspaper, 
  FolderArchive,
  ArrowRight
} from "lucide-react";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Star,
  Scale,
  Sparkles,
  Cpu,
  CheckCircle,
  GitMerge,
  Briefcase,
  Rocket,
  Cloud,
  BookOpen,
  HelpCircle,
  Newspaper,
  FolderArchive,
};

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({
    category: c.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: category.metaTitle,
    description: category.metaDescription,
    keywords: category.keywords,
    alternates: {
      canonical: `${SITE_CONFIG.siteUrl}${category.path}`,
    },
    openGraph: {
      title: category.metaTitle,
      description: category.metaDescription,
      url: `${SITE_CONFIG.siteUrl}${category.path}`,
      siteName: SITE_CONFIG.name,
      type: "website",
      images: [
        {
          url: SITE_CONFIG.defaultOgImage,
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: category.metaTitle,
      description: category.metaDescription,
      creator: SITE_CONFIG.twitterHandle,
      images: [SITE_CONFIG.defaultOgImage],
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(category.slug);
  const fallbackArticles = articles.length === 0 ? getLatestArticles(4) : [];
  const IconComponent = ICON_MAP[category.iconName] || Layers;
  const guide = getCategoryGuide(category.slug);

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ name: category.name, item: category.path }]} />

        {/* Category Hero Banner */}
        <header className="my-8 p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-darkSurface border border-slate-200/90 dark:border-cyan-500/20 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shadow-md shadow-cyan-600/20">
                <IconComponent className="w-6 h-6" />
              </span>
              <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-600 dark:text-cyan-400">
                Topic Pillar Hub
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {category.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {category.longDescription}
            </p>

            {/* Keyword pills */}
            <div className="pt-2 flex flex-wrap gap-2">
              {category.keywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-slate-600 dark:text-slate-400 font-medium"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Article Grid */}
        <div className="my-12">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {articles.length > 0 ? `Published in ${category.name} (${articles.length})` : "Recommended Reading in this Topic"}
            </h2>
            <span className="text-xs text-slate-500">
              Sorted by Editorial Freshness
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.length > 0
              ? articles.map((art) => <ArticleCard key={art.slug} article={art} />)
              : fallbackArticles.map((art) => <ArticleCard key={art.slug} article={art} />)}
          </div>
        </div>

        {/* Editorial Guide & Evaluation Framework */}
        <section className="my-16 pt-12 border-t border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200">
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-600 dark:text-cyan-400 block mb-2">
                Editorial Evaluation Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                {guide.title}
              </h2>
            </div>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {guide.intro}
            </p>

            {/* Evaluation Criteria Grid */}
            <div className="pt-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Laboratory Testing Criteria
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {guide.evaluationCriteria.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white dark:bg-[#0a0f1d] border border-slate-200/90 dark:border-cyan-950/60 space-y-2 shadow-sm"
                  >
                    <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 block">
                      Criterion 0{idx + 1}
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Buyer Checklist & Traps */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Buyer Checklist &amp; Procurement Considerations
                </h3>
                <div className="space-y-3">
                  {guide.buyerConsiderations.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">
                        • {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-3">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Common Procurement Traps to Avoid
                </h3>
                <div className="space-y-3">
                  {guide.commonPitfalls.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <h4 className="text-xs font-bold text-amber-700 dark:text-amber-400">
                        ⚠ {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-3">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Other Hubs Navigation */}
        <section className="my-16 pt-10 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Browse Other Category Hubs
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {CATEGORIES.filter((c) => c.slug !== category.slug).map((c) => (
              <Link
                key={c.slug}
                href={c.path}
                className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-darkSurface hover:border-cyan-500 dark:hover:border-cyan-700/60 hover:shadow-sm transition-all text-xs font-semibold text-slate-800 dark:text-slate-200 text-center block"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
