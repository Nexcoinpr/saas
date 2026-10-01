const fs = require('fs');
const path = require('path');

// Author objects pool
const AUTHORS = {
  "sarah-jenkins": {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    slug: "sarah-jenkins",
    role: "Editor-in-Chief & SaaS Finance Lead",
    bio: "Sarah spent nine years managing software budgets and subscription renewals at mid-sized tech companies before joining SaaSInsider. She tests pricing changes, audits contract terms, and breaks down the math behind software unit economics.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    credentials: [
      "Former Director of Finance Operations at CloudScale",
      "B.S. in Economics from University of Michigan",
      "Speaker on SaaS subscription economics"
    ],
    specialties: [
      "SaaS Unit Economics (CAC, LTV, NRR)",
      "Subscription Pricing Models",
      "Contract Renewal Math",
      "Software Procurement Checklists"
    ],
    twitter: "https://twitter.com/sarahjenkins_saas",
    linkedin: "https://linkedin.com/in/sarahjenkins-ops",
    website: "https://sarahjenkins.dev",
    articlesCount: 18
  },
  "alex-rivera": {
    id: "alex-rivera",
    name: "Alex Rivera",
    slug: "alex-rivera",
    role: "Principal Technical Reviewer & Systems Engineer",
    bio: "Alex is a backend software developer who spent over a decade maintaining distributed systems and internal developer portals. At SaaSInsider, he tests software speed, writes custom webhook scripts, and stress-tests third-party API limits.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    credentials: [
      "Former Senior Infrastructure Engineer at DataMesh",
      "B.S. in Computer Engineering from Georgia Tech",
      "Certified Kubernetes Administrator (CKA)"
    ],
    specialties: [
      "Head-to-Head Software Testing",
      "API & Webhook Reliability",
      "Cloud Infrastructure & Hosting",
      "Database & Backup Systems"
    ],
    twitter: "https://twitter.com/alexrivera_dev",
    linkedin: "https://linkedin.com/in/alexrivera-tech",
    github: "https://github.com/alexrivera-dev",
    articlesCount: 24
  },
  "maya-lin": {
    id: "maya-lin",
    name: "Maya Lin",
    slug: "maya-lin",
    role: "AI & Automation Editor",
    bio: "Maya has built automation pipelines and evaluated natural language software since 2019. She spends her workdays connecting webhooks across Zapier, Make, and Python to separate practical AI tools from marketing claims.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    credentials: [
      "M.S. in Computer Science from Carnegie Mellon",
      "Former Automation Specialist at ParsePoint",
      "Contributor to open-source LLM benchmarking datasets"
    ],
    specialties: [
      "AI & Large Language Model Evaluations",
      "Webhook & API Automation Workflows",
      "Data Extraction Pipelines",
      "Autonomous Agent Architectures"
    ],
    twitter: "https://twitter.com/mayalin_ai",
    linkedin: "https://linkedin.com/in/mayalin-automation",
    github: "https://github.com/mayalin-ai",
    articlesCount: 15
  },
  "liam-cooper": {
    id: "liam-cooper",
    name: "Liam Cooper",
    slug: "liam-cooper",
    role: "Workplace Software & Productivity Editor",
    bio: "Liam spent eight years setting up workspace software, documentation wikis, and task systems for software teams. He writes practical evaluations on how software handles real team communication.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    credentials: [
      "Former Product Operations Lead at TeamSync",
      "B.A. in Technical Communication from University of Washington",
      "Advisor to early-stage founder collectives"
    ],
    specialties: [
      "Project & Task Management Tools",
      "Team Knowledge Bases & Wikis",
      "Workspace Organization",
      "No-Code Business Workflows"
    ],
    twitter: "https://twitter.com/liamcooper_ops",
    linkedin: "https://linkedin.com/in/liamcooper-work",
    articlesCount: 19
  }
};

// Load the 8 bespoke modules
const rawArticles = [
  require('./articles-data/remote.js'),
  require('./articles-data/vidyard.js'),
  require('./articles-data/copper.js'),
  require('./articles-data/asana.js'),
  require('./articles-data/pipedrive-convertkit.js'),
  require('./articles-data/perplexity.js'),
  require('./articles-data/copilot-loom.js'),
  require('./articles-data/zapier.js')
];

// Related slugs map
const RELATED_MAP = {
  "remote-review": ["asana-review", "copper-review", "zapier-review"],
  "vidyard-review": ["github-copilot-vs-loom", "zapier-review", "asana-review"],
  "copper-review": ["pipedrive-vs-convertkit", "asana-review", "remote-review"],
  "asana-review": ["copper-review", "zapier-review", "remote-review"],
  "pipedrive-vs-convertkit": ["copper-review", "asana-review", "zapier-review"],
  "perplexity-review": ["github-copilot-vs-loom", "zapier-review", "asana-review"],
  "github-copilot-vs-loom": ["perplexity-review", "vidyard-review", "zapier-review"],
  "zapier-review": ["asana-review", "pipedrive-vs-convertkit", "copper-review"]
};

const finalArticles = rawArticles.map(art => {
  const author = AUTHORS[art.authorSlug] || AUTHORS["sarah-jenkins"];
  const copy = { ...art };
  delete copy.authorSlug;
  copy.author = author;
  copy.relatedArticleSlugs = RELATED_MAP[copy.slug] || [];
  return copy;
});

// Verification assertions
console.log('--- VERIFYING UNIQUENESS ACROSS ALL 8 ARTICLES ---');

const slugs = new Set();
const titles = new Set();
const h1s = new Set();
const metaTitles = new Set();
const metaDescriptions = new Set();
const excerpts = new Set();
const images = new Set();
const imageAlts = new Set();

finalArticles.forEach((a, i) => {
  if (slugs.has(a.slug)) throw new Error(`Duplicate slug: ${a.slug}`);
  slugs.add(a.slug);

  if (titles.has(a.title)) throw new Error(`Duplicate title: ${a.title}`);
  titles.add(a.title);

  if (h1s.has(a.h1)) throw new Error(`Duplicate h1: ${a.h1}`);
  h1s.add(a.h1);

  if (metaTitles.has(a.metaTitle)) throw new Error(`Duplicate metaTitle: ${a.metaTitle}`);
  metaTitles.add(a.metaTitle);

  if (metaDescriptions.has(a.metaDescription)) throw new Error(`Duplicate metaDescription: ${a.metaDescription}`);
  metaDescriptions.add(a.metaDescription);

  if (excerpts.has(a.excerpt)) throw new Error(`Duplicate excerpt: ${a.excerpt}`);
  excerpts.add(a.excerpt);

  if (images.has(a.featuredImage)) throw new Error(`Duplicate featuredImage: ${a.featuredImage}`);
  images.add(a.featuredImage);

  if (imageAlts.has(a.featuredImageAlt)) throw new Error(`Duplicate featuredImageAlt: ${a.featuredImageAlt}`);
  imageAlts.add(a.featuredImageAlt);

  const bodyWords = a.sections.reduce((acc, s) => {
    const text = s.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return acc + text.split(' ').length;
  }, 0);

  if (bodyWords < 1000) {
    throw new Error(`Article ${a.slug} has only ${bodyWords} body words (minimum 1000 required excluding FAQs)!`);
  }

  console.log(`[PASS] Article ${i + 1}: ${a.slug}`);
  console.log(`       Title: "${a.title}"`);
  console.log(`       Image: ${a.featuredImage}`);
  console.log(`       Body Words (Excl. FAQs): ${bodyWords}`);
});

console.log('\n[PASS] All 8 articles verified with 100% unique titles, images, meta tags, and excerpts!');

// Save to published-articles.json
const targetPath = path.join(__dirname, '../src/data/published-articles.json');
fs.writeFileSync(targetPath, JSON.stringify(finalArticles, null, 2), 'utf8');
console.log(`[DONE] Successfully written ${finalArticles.length} unique articles to ${targetPath}`);
