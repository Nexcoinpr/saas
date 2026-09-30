import { Article, Author, Category } from "@/types/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.saasinsider.co.uk";

export const SITE_CONFIG = {
  name: "SaaSInsider",
  title: "SaaSInsider | Software Reviews, Comparisons & Guides",
  description: "Independent software testing, verified SaaS benchmarks, head-to-head software comparisons, and workflow automation playbooks for teams.",
  siteUrl: siteUrl.replace(/\/$/, ""),
  defaultOgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  twitterHandle: "@saasinsider",
  email: "info.saasinsider@gmail.com",
  publisher: {
    name: "SaaSInsider",
    logo: `${siteUrl.replace(/\/$/, "")}/logo.png`
  }
};

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_CONFIG.name,
    "url": SITE_CONFIG.siteUrl,
    "email": SITE_CONFIG.email,
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

  if (article.template === "review") {
    const rawRating = article.reviewData?.overallRating ?? (article.scoreCard ? article.scoreCard.overallScore / 2 : 4.4);
    const numericRating = Number(Number(rawRating).toFixed(1));
    const productName = article.reviewData?.productName || article.title.replace(/Review.*$/i, "").trim() || "Software";
    const productCategory = article.reviewData?.productCategory || "BusinessApplication";
    const rawPrice = article.reviewData?.startingPrice?.replace(/[^0-9.]/g, "") || "0";

    baseSchema["itemReviewed"] = {
      "@type": "SoftwareApplication",
      "name": productName,
      "applicationCategory": productCategory,
      "operatingSystem": "Web, Windows, macOS, iOS, Android",
      "offers": {
        "@type": "Offer",
        "price": rawPrice,
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": numericRating,
        "reviewCount": 1,
        "bestRating": 5,
        "worstRating": 1
      }
    };
    baseSchema["reviewRating"] = {
      "@type": "Rating",
      "ratingValue": numericRating,
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
