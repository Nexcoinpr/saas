import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  use3D?: boolean;
  className?: string;
}

export function BrandLogo({
  size = "md",
  showTagline = true,
  use3D = false,
  className = ""
}: BrandLogoProps) {
  const iconDimensions = size === "sm" ? 34 : size === "lg" ? 48 : 40;

  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Logo Emblem Icon */}
      <div className="relative flex-shrink-0">
        {use3D ? (
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-200 dark:border-cyan-900/60 shadow-sm group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/images/brand/saasinsider-favicon-3d.jpg"
              alt=""
              aria-hidden="true"
              width={iconDimensions}
              height={iconDimensions}
              className="object-cover w-full h-full"
            />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 dark:border-cyan-900/60 p-1 flex items-center justify-center shadow-sm group-hover:border-cyan-500/60 group-hover:scale-105 transition-all duration-200">
            {/* Vector Monitor & Looping Cable SVG */}
            <svg
              viewBox="0 0 512 512"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="navBrandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
                <linearGradient id="navCableGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="60%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>

              {/* Monitor Stand */}
              <path d="M 216 384 L 296 384 L 308 408 L 204 408 Z" fill="#334155" />
              <rect x="176" y="404" width="160" height="14" rx="7" fill="#1e293b" />
              <rect x="240" y="324" width="32" height="64" rx="4" fill="#334155" />

              {/* Monitor Frame */}
              <rect x="80" y="96" width="352" height="236" rx="28" fill="#070b14" stroke="#475569" strokeWidth="6" />
              <rect x="96" y="112" width="320" height="204" rx="20" fill="#0f172a" />

              {/* Cloud Symbol */}
              <path
                d="M 218 232 L 294 232 A 22 22 0 0 0 300 188 A 30 30 0 0 0 246 178 A 26 26 0 0 0 218 206 A 20 20 0 0 0 218 232 Z"
                fill="none"
                stroke="url(#navBrandGrad)"
                strokeWidth="10"
                strokeLinejoin="round"
              />
              <path
                d="M 268 198 C 264 192, 250 192, 248 199 C 246 205, 264 208, 264 216 C 264 224, 250 224, 244 218"
                fill="none"
                stroke="#ffffff"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Looping Cable with Plug */}
              <path
                d="M 88 180 C 52 180, 48 340, 120 376 C 200 416, 290 400, 340 370 C 400 334, 440 280, 424 210 C 410 148, 350 144, 330 180 C 310 220, 330 280, 380 300 C 410 312, 420 360, 390 390 L 364 416"
                stroke="url(#navCableGrad)"
                strokeWidth="28"
                strokeLinecap="round"
              />
              <path
                d="M 88 180 C 52 180, 48 340, 120 376 C 200 416, 290 400, 340 370 C 400 334, 440 280, 424 210 C 410 148, 350 144, 330 180 C 310 220, 330 280, 380 300 C 410 312, 420 360, 390 390 L 364 416"
                stroke="#e0f2fe"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.8"
              />

              {/* USB Tip */}
              <g transform="translate(364, 416) rotate(-45)">
                <rect x="-14" y="0" width="28" height="12" rx="4" fill="#0284c7" />
                <rect x="-16" y="12" width="32" height="36" rx="6" fill="#0369a1" />
                <rect x="-12" y="48" width="24" height="26" rx="2" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
                <rect x="-8" y="54" width="5" height="8" rx="1" fill="#1e293b" />
                <rect x="3" y="54" width="5" height="8" rx="1" fill="#1e293b" />
              </g>
            </svg>
          </div>
        )}
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className="font-black text-xl tracking-tight text-slate-900 dark:text-white flex items-center">
          SaaS
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-400">
            Insider
          </span>
        </span>
        {showTagline && (
          <span className="text-[9px] uppercase tracking-widest text-slate-600 dark:text-cyan-400/80 font-bold -mt-1">
            Independent Software Reviews
          </span>
        )}
      </div>
    </Link>
  );
}
