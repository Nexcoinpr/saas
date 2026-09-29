"use client";

import React, { useState, useEffect } from "react";
import { List, ChevronDown, ChevronUp } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length > 0) {
      setActiveId(items[0].id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0% -60% 0%",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="p-4 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-slate-50/70 dark:bg-slate-900/50 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800/80">
        <div className="flex items-center gap-2">
          <List className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <span className="text-xs uppercase font-extrabold tracking-wider text-slate-800 dark:text-slate-200">
            Table of Contents
          </span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Collapse table of contents" : "Expand table of contents"}
          className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {isOpen && (
        <ul className="mt-3.5 space-y-1.5 text-xs text-slate-600 dark:text-slate-400 max-h-[70vh] overflow-y-auto pr-1">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li
                key={item.id}
                className={item.level === 3 ? "pl-3.5" : item.level === 4 ? "pl-7" : ""}
              >
                <a
                  href={`#${item.id}`}
                  className={`block py-1 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors leading-tight ${
                    isActive
                      ? "text-cyan-600 dark:text-cyan-400 font-semibold"
                      : ""
                  }`}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
