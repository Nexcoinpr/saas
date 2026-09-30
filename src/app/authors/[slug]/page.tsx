import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAuthorBySlug, AUTHORS } from "@/data/authors";
import { getArticlesByAuthor } from "@/data/articles";
import { ArticleCard } from "@/components/common/ArticleCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { generatePersonSchema, SITE_CONFIG } from "@/lib/seo";
import { Globe, CheckCircle } from "lucide-react";
import { TwitterIcon, LinkedinIcon, GithubIcon } from "@/components/common/SocialIcons";

interface AuthorProfilePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return AUTHORS.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: AuthorProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return {
      title: "Author Not Found",
    };
  }

  return {
    title: `${author.name} | ${author.role} | SaaSInsider`,
    description: author.bio,
    alternates: {
      canonical: `${SITE_CONFIG.siteUrl}/authors/${author.slug}`,
    },
    openGraph: {
      title: `${author.name} | SaaSInsider`,
      description: author.bio,
      type: "profile",
      images: [{ url: author.avatar }],
    },
  };
}

export default async function AuthorProfilePage({ params }: AuthorProfilePageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const articles = getArticlesByAuthor(author.slug);
  const personSchema = generatePersonSchema(author);

  return (
    <div className="py-8 md:py-12">
      <JsonLd data={personSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: "Authors", item: "/authors" },
            { name: author.name, item: `/authors/${author.slug}` },
          ]}
        />

        {/* Profile Card Header */}
        <header className="my-8 p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-[#0a0f1d] border border-slate-200/90 dark:border-cyan-950/60 shadow-cyan-glow">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            <Image
              src={author.avatar}
              alt={author.name}
              width={120}
              height={120}
              priority
              className="w-28 h-28 aspect-square rounded-3xl object-cover border-2 border-white dark:border-slate-800 ring-2 ring-cyan-500/40 shadow-md flex-shrink-0"
            />

            <div className="flex-1 space-y-4">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-600 dark:text-cyan-400 block mb-1">
                  Verified Editorial Contributor
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                  {author.name}
                </h1>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1">
                  {author.role}
                </p>
              </div>

              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {author.bio}
              </p>

              {/* Credentials */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Background &amp; Credentials
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  {author.credentials.map((cred, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Topics */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Primary Coverage Topics
                </span>
                <div className="flex flex-wrap gap-2">
                  {author.specialties.map((exp, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 font-medium text-slate-700 dark:text-slate-300"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="pt-4 flex items-center gap-3">
                {author.twitter && (
                  <a
                    href={author.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 hover:border-cyan-400 transition-colors"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                )}
                {author.linkedin && (
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 hover:border-cyan-400 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {author.github && (
                  <a
                    href={author.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 hover:border-cyan-400 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {author.website && (
                  <a
                    href={author.website}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 hover:border-cyan-400 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>

          </div>
        </header>

        {/* Articles by this author */}
        <section className="my-12">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200/80 dark:border-cyan-950/40">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Articles by {author.name} ({articles.length})
            </h2>
            <span className="text-xs text-slate-500">
              Verified Original Research
            </span>
          </div>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((art) => (
                <ArticleCard key={art.slug} article={art} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500">No articles currently published.</p>
          )}
        </section>

      </div>
    </div>
  );
}
