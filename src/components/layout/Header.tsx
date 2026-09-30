"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Search, 
  Menu, 
  X, 
  ArrowRight,
  Zap
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "SaaS", href: "/saas" },
  { name: "Reviews", href: "/reviews" },
  { name: "Comparisons", href: "/comparisons" },
  { name: "AI Tools", href: "/ai-tools" },
  { name: "Tutorials", href: "/tutorials" },
  { name: "News", href: "/news" },
  { name: "Resources", href: "/resources" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-cyan-950/40 bg-white/85 dark:bg-[#070b14]/85 backdrop-blur-xl transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-cyan-500 to-blue-600 p-[1.5px] shadow-sm shadow-cyan-500/30 group-hover:shadow-cyan-500/50 group-hover:scale-105 transition-all">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300 text-lg tracking-tight">
                    S
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight text-slate-900 dark:text-white flex items-center">
                  SaaS<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400">Insider</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-slate-400 dark:text-cyan-400/80 font-bold -mt-1">
                  Software Intelligence
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "text-cyan-600 dark:text-cyan-300 bg-cyan-50/80 dark:bg-cyan-950/40 border border-cyan-200/50 dark:border-cyan-800/40 font-semibold shadow-xs"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/40"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Link Button */}
            <Link
              href="/search"
              aria-label="Search articles"
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800/90 rounded-lg hover:border-cyan-400 dark:hover:border-cyan-700/60 hover:bg-slate-50 dark:hover:bg-slate-900/60 transition-all"
            >
              <Search className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="hidden sm:inline font-normal">Search...</span>
              <kbd className="hidden sm:inline text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 font-mono border border-slate-200 dark:border-slate-700">
                ⌘K
              </kbd>
            </Link>

            {/* Dark/Light mode toggle */}
            <ThemeToggle />

            {/* Newsletter CTA Button */}
            <a
              href="#newsletter"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white transition-all shadow-sm shadow-cyan-600/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Get Updates</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open mobile menu"
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-cyan-950/60 bg-white dark:bg-[#070b14] px-4 pt-3 pb-6 space-y-2">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100 dark:border-slate-800/80">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${
                    isActive
                      ? "text-cyan-600 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/50 font-semibold"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/search"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 text-sm text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <Search className="w-4 h-4 text-cyan-500" />
              <span>Full Site Search</span>
            </Link>
            <a
              href="#newsletter"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-center shadow-md shadow-cyan-600/25"
            >
              <span>Subscribe to SaaSInsider Briefing</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
