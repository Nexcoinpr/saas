export type ArticleTemplate = 'informational' | 'review' | 'comparison' | 'how-to';

export interface Author {
  id: string;
  name: string;
  slug: string;
  role: string;
  bio: string;
  avatar: string;
  credentials: string[];
  expertise: string[];
  twitter?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  articlesCount?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  path: string;
  description: string;
  longDescription: string;
  iconName: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  articleCount?: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  level: 2 | 3 | 4;
  content: string; // HTML or markdown-like text
  callout?: {
    type: 'tip' | 'info' | 'warning' | 'quote';
    text: string;
  };
}

export interface ComparisonMatrixRow {
  feature: string;
  category: string;
  entityA: string | boolean;
  entityB: string | boolean;
  winner?: 'A' | 'B' | 'Tie';
  notes?: string;
}

export interface HowToStep {
  stepNumber: number;
  title: string;
  description: string;
  codeSnippet?: string;
  codeLanguage?: string;
  tip?: string;
}

export interface Article {
  slug: string;
  path: string; // e.g. /saas/what-is-saas
  title: string;
  h1?: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string; // category slug
  subcategory?: string;
  template: ArticleTemplate;
  author: Author;
  publishedAt: string; // ISO date
  updatedAt: string; // ISO date
  readingTime: string;
  featuredImage: string;
  featuredImageAlt: string;
  isFeatured?: boolean;
  isPopular?: boolean;
  isTrending?: boolean;
  viewCount?: number;
  tags: string[];
  keyTakeaways: string[];
  directAnswer?: {
    question: string;
    answer: string;
    summaryBullets?: string[];
  };
  tableOfContents: { id: string; title: string; level: number }[];
  sections: ArticleSection[];
  faqs: FAQItem[];
  relatedArticleSlugs: string[];
  
  // Review specific
  reviewData?: {
    productName: string;
    productCategory: string;
    overallRating: number; // out of 5
    ratingBreakdown: { aspect: string; score: number }[];
    bestFor: string;
    startingPrice: string;
    pricingModel: string;
    freeTrial: string;
    pros: string[];
    cons: string[];
    alternatives: { name: string; slug?: string; reason: string }[];
    verdict: string;
    editorialScorecard: {
      performance: number;
      easeOfUse: number;
      featureDepth: number;
      customerSupport: number;
      valueForMoney: number;
    };
  };

  // Comparison specific
  comparisonData?: {
    entityA: {
      name: string;
      tagline: string;
      rating: number;
      startingPrice: string;
      bestFor: string;
      primaryStrength: string;
    };
    entityB: {
      name: string;
      tagline: string;
      rating: number;
      startingPrice: string;
      bestFor: string;
      primaryStrength: string;
    };
    winner: 'A' | 'B' | 'Tie';
    winnerSummary: string;
    matrix: ComparisonMatrixRow[];
    whenToChooseA: string[];
    whenToChooseB: string[];
  };

  // How-To / Tutorial specific
  howToData?: {
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    estimatedTime: string;
    prerequisites: string[];
    toolsNeeded: string[];
    steps: HowToStep[];
    proTips: string[];
    commonPitfalls: { issue: string; solution: string }[];
  };
}

export interface SearchFilterState {
  query: string;
  category: string;
  template: string;
  sortBy: 'latest' | 'popular' | 'updated';
}
