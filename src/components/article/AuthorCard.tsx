import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award } from "lucide-react";
import { TwitterIcon, LinkedinIcon, GithubIcon } from "@/components/common/SocialIcons";
import { Author } from "@/types/blog";

interface AuthorCardProps {
  author: Author;
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="my-10 p-6 sm:p-8 rounded-3xl border border-slate-200/90 dark:border-cyan-950/60 bg-slate-50/60 dark:bg-[#0a0f1d] shadow-sm">
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        
        {/* Avatar */}
        <Link href={`/authors/${author.slug}`} className="flex-shrink-0 group">
          <Image
            src={author.avatar}
            alt={author.name}
            width={72}
            height={72}
            className="rounded-2xl object-cover border-2 border-white dark:border-slate-800 ring-2 ring-cyan-500/30 shadow-md group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Bio & Details */}
        <div className="flex-1 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-cyan-600 dark:text-cyan-400 block mb-0.5">
                Written by
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                <Link href={`/authors/${author.slug}`} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  {author.name}
                </Link>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {author.role}
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {author.twitter && (
                <a
                  href={author.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${author.name} on Twitter`}
                  className="w-7 h-7 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-cyan-600 hover:border-cyan-400 transition-colors"
                >
                  <TwitterIcon className="w-3.5 h-3.5" />
                </a>
              )}
              {author.linkedin && (
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${author.name} on LinkedIn`}
                  className="w-7 h-7 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-cyan-600 hover:border-cyan-400 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
              )}
              {author.github && (
                <a
                  href={author.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${author.name} on GitHub`}
                  className="w-7 h-7 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-cyan-600 hover:border-cyan-400 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {author.bio}
          </p>

          {/* Credentials Snippet */}
          {author.credentials && author.credentials.length > 0 && (
            <div className="pt-2 flex flex-wrap gap-1.5">
              {author.credentials.slice(0, 2).map((cred, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-slate-600 dark:text-slate-300"
                >
                  <Award className="w-3 h-3 text-cyan-500" />
                  <span>{cred}</span>
                </span>
              ))}
            </div>
          )}

          <div className="pt-2">
            <Link
              href={`/authors/${author.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              <span>View all articles by {author.name}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
