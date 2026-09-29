import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "@/components/common/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/seo";

export interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullItems: BreadcrumbItem[] = [
    { name: "Home", item: "/" },
    ...items
  ];

  const schema = generateBreadcrumbSchema(fullItems);

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="my-4 text-xs font-medium text-slate-500 dark:text-slate-400">
        <ol className="flex items-center flex-wrap gap-1.5 list-none p-0 m-0">
          {fullItems.map((crumb, index) => {
            const isLast = index === fullItems.length - 1;
            return (
              <li key={crumb.item} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 flex-shrink-0" />}
                {index === 0 && <Home className="w-3.5 h-3.5 mr-0.5 text-slate-400 dark:text-slate-500" />}
                {isLast ? (
                  <span className="text-slate-900 dark:text-slate-200 font-semibold truncate max-w-[240px] sm:max-w-xs" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.item}
                    className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
