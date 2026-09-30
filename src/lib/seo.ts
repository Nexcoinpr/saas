import { Article, Author, Category } from "@/types/blog";

export const SITE_CONFIG = {
  name: "SaaSInsider",
  title: "SaaSInsider | SaaS Intelligence, Software Teardowns & Architecture",
  description: "Independent software testing, verified SaaS benchmarks, head-to-head software comparisons, AI agent analysis, and workflow automation playbooks.",
  siteUrl: "https://saasinsider.io",
  defaultOgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  twitterHandle: "@saasinsider",
  publisher: {
    name: "SaaSInsider",
    logo: "https://saasinsider.io/logo.png"
  }
};

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_CONFIG.name,
    "url": SITE_CONFIG.siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_CONFIG.siteUrl}/logo.png`,
      "width": 600,
      "height": 120
    },
    "sameAs": [
      "https://twitter.com/saasinsider",
      "https://linkedin.com/company/saasinsider",
      "https://github.com/saasinsider"
    ],
    "description": SITE_CONFIG.description
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_CONFIG.name,
    "url": SITE_CONFIG.siteUrl,
    "description": SITE_CONFIG.description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_CONFIG.siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.item.startsWith("http") ? crumb.item : `${SITE_CONFIG.siteUrl}${crumb.item}`
    }))
  };
}

export function generatePersonSchema(author: Author) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": author.name,
    "jobTitle": author.role,
    "description": author.bio,
    "image": author.avatar,
    "url": `${SITE_CONFIG.siteUrl}/authors/${author.slug}`,
    "sameAs": [
      author.twitter,
      author.linkedin,
      author.github,
      author.website
    ].filter(Boolean)
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateArticleSchema(article: Article) {
  const authorSchema = generatePersonSchema(article.author);
  
  const baseSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": article.template === 'review' ? "Review" : "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "image": [article.featuredImage.startsWith("http") ? article.featuredImage : `${SITE_CONFIG.siteUrl}${article.featuredImage}`],
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.siteUrl}${article.path}`
    },
    "author": {
      "@type": "Person",
      "name": article.author.name,
      "url": `${SITE_CONFIG.siteUrl}/authors/${article.author.slug}`,
      "jobTitle": article.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_CONFIG.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_CONFIG.siteUrl}/logo.png`
      }
    },
    "keywords": article.tags.join(", ")
  };

  // If Review template, add SoftwareApplication and reviewRating schema
  if (article.template === "review" && article.reviewData) {
    baseSchema["itemReviewed"] = {
      "@type": "SoftwareApplication",
      "name": article.reviewData.productName,
      "applicationCategory": article.reviewData.productCategory,
      "operatingSystem": "Web, Windows, macOS, iOS, Android",
      "offers": {
        "@type": "Offer",
        "price": article.reviewData.startingPrice.replace(/[^0-9.]/g, "") || "0",
        "priceCurrency": "USD"
      }
    };
    baseSchema["reviewRating"] = {
      "@type": "Rating",
      "ratingValue": article.reviewData.overallRating,
      "bestRating": 5,
      "worstRating": 1
    };
  }

  // If How-To template, add HowTo step markup
  if (article.template === "how-to" && article.howToData) {
    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": article.title,
      "description": article.metaDescription,
      "image": article.featuredImage,
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "tool": article.howToData.toolsNeeded.map(tool => ({
        "@type": "HowToTool",
        "name": tool
      })),
      "step": article.howToData.steps.map(step => ({
        "@type": "HowToStep",
        "position": step.stepNumber,
        "name": step.title,
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": step.description
          }
        ]
      })),
      "author": {
        "@type": "Person",
        "name": article.author.name
      },
      "publisher": {
        "@type": "Organization",
        "name": SITE_CONFIG.name
      }
    };
  }

  return baseSchema;
}
