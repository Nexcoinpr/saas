# SaaSInsider | Modern, SEO & AEO-Focused SaaS Blog Publication

**SaaSInsider** is a modern, high-performance, and editorial Software as a Service (SaaS) technology publication built from scratch with Next.js 15, TypeScript, Tailwind CSS, and full Schema.org structured data.

---

## 🚀 Key Architectural Highlights

- **Pure Editorial Publication**: Dedicated to authoritative analysis, software teardowns, benchmarks, and guides. Zero customer dashboard bloat, no subscription/billing backend.
- **Topical Clusters & Core Categories**: 14 structured hubs covering SaaS, SaaS Reviews, SaaS Comparisons, AI Tools, Software, Productivity, Automation, Business, Startups, Cloud Computing, Tutorials, How-To Guides, SaaS News, and Resources.
- **4 Specialized Editorial Templates**:
  1. **Informational Article Template**: Introduction → Direct Answer (AEO/GEO) → Deep Analysis → Real-World Examples → Benefits/Limitations → Interactive FAQ → Conclusion.
  2. **Software Review Template**: Scorecard Banner → Rating Breakdown (5 criteria) → Specs & Pricing → Pros & Cons Grid → Alternatives → Editorial Verdict.
  3. **Comparison Template (Tool A vs Tool B)**: Side-by-side specs → Winner Callout → Feature Matrix Table → "When to Choose A vs B".
  4. **How-To / Tutorial Template**: Difficulty & Time requirements → Prerequisites & Tools → Sequential Numbered Steps with code snippets & tips → Pro Tips for scale → Common Pitfalls & Solutions.
- **AEO / GEO / LLMO Optimization**: Direct answer callout boxes, definitions, bulleted summaries, question-based headings, and semantic relationships optimized for Google Answer Boxes, Perplexity, Claude, ChatGPT Search, and Gemini.
- **Technical SEO & Structured Data**:
  - Full Schema.org JSON-LD: `Organization`, `WebSite`, `Article`, `BlogPosting`, `Review`, `SoftwareApplication`, `HowTo`, `BreadcrumbList`, `FAQPage`, and `Person`.
  - Dynamic `sitemap.xml` generating clean URLs and priority indexing.
  - `robots.txt` granting crawling access to search and AI agents (`GPTBot`, `ClaudeBot`, `PerplexityBot`, etc.).
  - `llms.txt` and `llms-full.txt` web standards for LLM discoverability and context ingestion.
- **Fast Search System**: Real-time client-side search with category, format/template, and sorting filters.
- **Author Credential System**: Every article features verified author bios, credentials, and areas of expertise.
- **Core Web Vitals & Performance**: 100% static prerendering (SSG), lightweight CSS, zero layout shift (CLS), dark/light mode toggle with persistent local storage.

---

## 📁 Directory Structure

```text
├── public/
│   ├── llms.txt                 # AI search engine & LLM index standard
│   └── llms-full.txt            # Full knowledge graph & direct answers
├── src/
│   ├── app/
│   │   ├── [category]/          # 14 Category Hubs (/saas, /reviews, /comparisons, etc.)
│   │   │   └── [slug]/          # Individual articles (/reviews/notion-review, etc.)
│   │   ├── about/               # Editorial Mission & Testing Methodology
│   │   ├── authors/             # Authors directory & individual author profiles
│   │   ├── contact/             # Departmental contact & correction forms
│   │   ├── cookies/             # Cookie & localStorage policy
│   │   ├── faq/                 # Readers & Buyers FAQ with FAQPage schema
│   │   ├── privacy/             # Reader privacy policy
│   │   ├── resources/           # Buyer checklists, cheat sheets & glossaries
│   │   ├── search/              # Real-time search engine with filters
│   │   ├── terms/               # Terms & conditions
│   │   ├── layout.tsx           # Global layout with Schema.org & meta
│   │   ├── page.tsx             # Editorial Homepage
│   │   ├── robots.ts            # Dynamic robots.txt
│   │   └── sitemap.ts           # Dynamic XML sitemap
│   ├── components/
│   │   ├── article/             # Article components (TOC, Scorecard, Matrix, Steps, FAQ)
│   │   ├── common/              # Common cards, badges, JSON-LD injector, icons
│   │   ├── home/                # Homepage sections (Hero, Featured, Topics, Telemetry)
│   │   └── layout/              # Header, Footer, Breadcrumbs, ThemeToggle
│   ├── data/
│   │   ├── articles.ts          # Comprehensive article dataset & query helpers
│   │   ├── authors.ts           # Verified editorial team profiles & credentials
│   │   └── categories.ts        # Category definitions, icons, and pillar metadata
│   ├── lib/
│   │   ├── seo.ts               # Schema.org JSON-LD generators
│   │   └── utils.ts             # Date formatting and style helpers
│   └── types/
│       └── blog.ts              # TypeScript interfaces for articles, reviews, how-to
```

---

## 🛠️ Running Locally

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production (Static SSG)**:
   ```bash
   npm run build
   npm run start
   ```

---

## ✍️ Adding New Articles

To publish a new article, add an entry to `src/data/articles.ts`:

```typescript
{
  slug: "your-article-slug",
  path: "/category-slug/your-article-slug",
  title: "Your Comprehensive Article Title",
  metaTitle: "SEO Optimized Meta Title",
  metaDescription: "Meta description between 150-160 characters.",
  excerpt: "Short 2-sentence teaser for cards and search snippets.",
  category: "reviews", // matches category slug
  template: "review",  // "informational" | "review" | "comparison" | "how-to"
  author: authorElena,
  publishedAt: "2026-04-01T08:00:00Z",
  updatedAt: "2026-04-01T08:00:00Z",
  readingTime: "8 min read",
  featuredImage: "https://...",
  featuredImageAlt: "Accessible description",
  tags: ["Tag1", "Tag2"],
  keyTakeaways: ["Point 1", "Point 2"],
  directAnswer: {
    question: "Direct question?",
    answer: "Concise 1-2 sentence direct answer for AEO."
  },
  tableOfContents: [...],
  sections: [...],
  faqs: [...]
}
```

The system will automatically generate the clean URL, Schema.org JSON-LD, XML sitemap entry, breadcrumbs, and related article links!
