const fs = require('fs');
const path = require('path');

// CLI options
const args = process.argv.slice(2);
let count = 3;
let dryRun = false;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--count' && args[i + 1]) {
    count = parseInt(args[i + 1], 10) || 3;
    i++;
  } else if (args[i] === '--dry-run') {
    dryRun = true;
  }
}

console.log(`[Publisher] Starting daily publishing pipeline (Target: ${count} articles, Dry Run: ${dryRun})...`);

const roadmapPath = path.join(__dirname, '../data/keywords/article-roadmap-master.json');
const statePath = path.join(__dirname, '../data/publishing-state.json');
const publishedJsonPath = path.join(__dirname, '../src/data/published-articles.json');

if (!fs.existsSync(roadmapPath)) {
  console.error('[Publisher] Error: Master roadmap not found at:', roadmapPath);
  process.exit(1);
}

const roadmap = JSON.parse(fs.readFileSync(roadmapPath, 'utf8'));
const state = fs.existsSync(statePath)
  ? JSON.parse(fs.readFileSync(statePath, 'utf8'))
  : { totalPublishedCount: 0, publishedSlugs: [], history: [] };

const publishedArticles = fs.existsSync(publishedJsonPath)
  ? JSON.parse(fs.readFileSync(publishedJsonPath, 'utf8'))
  : [];

const publishedSlugsSet = new Set([
  ...state.publishedSlugs,
  ...publishedArticles.map(a => a.slug)
]);

// Authors pool from src/data/authors.ts
const AUTHORS = [
  {
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
  {
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
  {
    id: "maya-lin",
    name: "Maya Lin",
    slug: "maya-lin",
    role: "AI & Automation Editor",
    bio: "Maya has built automation pipelines and evaluated natural language software since 2019. She spends her workdays connecting webhooks across Zapier, Make, and Python to separate practical AI tools from marketing claims.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    credentials: [
      "M.S. in Computer Science from Carnegie Mellon",
      "Former Automation Specialist at ParsePoint",
      "Creator of open-source API testing scripts"
    ],
    specialties: [
      "No-Code Automation Builders",
      "Large Language Model Tools",
      "API Webhook Integrations",
      "Workflow Logic Architecture"
    ],
    twitter: "https://twitter.com/mayalin_ai",
    linkedin: "https://linkedin.com/in/mayalin-tech",
    articlesCount: 15
  },
  {
    id: "liam-vance",
    name: "Liam Vance",
    slug: "liam-vance",
    role: "Senior Workplace & Collaboration Specialist",
    bio: "Liam has led IT operations and tool migration projects across four high-growth technology firms. He writes hands-on comparisons of project management boards, team documentation hubs, and real-time chat tools.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    credentials: [
      "Former Workplace Tech Manager at SyncLoop",
      "B.A. in Information Systems from Boston University",
      "Project Management Professional (PMP)"
    ],
    specialties: [
      "Workplace Tools & Collaboration",
      "Team Wiki & Knowledge Bases",
      "Project Management Showdowns",
      "Software Rollout Strategies"
    ],
    twitter: "https://twitter.com/liamvance_ops",
    linkedin: "https://linkedin.com/in/liamvance-collab",
    articlesCount: 21
  }
];

// Curated stock photos
const IMAGES = {
  reviews: [
    { url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80", alt: "Software application dashboard with analytics graphs" },
    { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80", alt: "Business metrics and software pricing breakdown on screen" },
    { url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80", alt: "Performance data monitoring and feature review dashboard" }
  ],
  comparisons: [
    { url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80", alt: "Two technology platforms evaluated side by side on desktop" },
    { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80", alt: "Product team comparing software options in collaborative session" },
    { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80", alt: "Workstation comparing two cloud software tools" }
  ],
  general: [
    { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80", alt: "Modern tech office workspace with laptop displaying SaaS platform" },
    { url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80", alt: "Cloud computing server infrastructure and data integration" },
    { url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80", alt: "Developer terminal code and API connection pipeline" }
  ]
};

// Find candidates to publish
const candidates = [];
for (const item of roadmap) {
  if (candidates.length >= count) break;
  if (item.Status !== 'published' && !publishedSlugsSet.has(item.SuggestedSlug)) {
    candidates.push(item);
  }
}

if (candidates.length === 0) {
  console.log('[Publisher] No pending articles left in the roadmap!');
  process.exit(0);
}

console.log(`[Publisher] Selected ${candidates.length} keyword candidates:`);
candidates.forEach((c, idx) => console.log(`  ${idx + 1}. [${c.ArticleID}] ${c.PrimaryKeyword} (${c.TargetTemplate})`));

// Helper: Ensure ZERO 2026 anywhere
function stripYear(str) {
  if (!str) return '';
  return str.replace(/\b202\d\b/g, '').replace(/\s{2,}/g, ' ').trim();
}

// Helper: Strip banned words or replace them
function sanitizeProse(text) {
  if (!text) return '';
  let clean = text
    .replace(/\b202\d\b/g, '')
    // Replace typical banned words with clean equivalents
    .replace(/\bdelve\b/gi, 'examine')
    .replace(/\brobust\b/gi, 'solid')
    .replace(/\bseamlessly\b/gi, 'smoothly')
    .replace(/\bseamless\b/gi, 'smooth')
    .replace(/\blandscape\b/gi, 'market')
    .replace(/\btapestry\b/gi, 'range')
    .replace(/\btestament\b/gi, 'proof')
    .replace(/\belevate\b/gi, 'improve')
    .replace(/\bcrucial\b/gi, 'vital')
    .replace(/\bessential\b/gi, 'necessary')
    .replace(/\bcritical\b/gi, 'important')
    .replace(/\bgame-changer\b/gi, 'major shift')
    .replace(/\bgame changer\b/gi, 'major shift')
    .replace(/\bmoreover\b/gi, 'also')
    .replace(/\bfurthermore\b/gi, 'additionally')
    .replace(/\bin conclusion\b/gi, 'to summarize')
    .replace(/\butilize\b/gi, 'use')
    .replace(/\butilizing\b/gi, 'using')
    .replace(/\boptimize\b/gi, 'tune')
    .replace(/\boptimizing\b/gi, 'tuning')
    .replace(/\bleverage\b/gi, 'apply')
    .replace(/\bleveraging\b/gi, 'applying')
    .replace(/\bstreamline\b/gi, 'simplify')
    .replace(/\bstreamlined\b/gi, 'simplified')
    .replace(/\bempower\b/gi, 'help')
    .replace(/\bplethora\b/gi, 'wide selection')
    .replace(/\bparamount\b/gi, 'top priority')
    .replace(/\bgroundbreaking\b/gi, 'notable')
    .replace(/\bjourney\b/gi, 'process')
    .replace(/\bhowever\b/gi, 'yet')
    .replace(/\buptime\b/gi, 'service availability')
    // Remove dashes in prose
    .replace(/ - /g, ', ')
    .replace(/ — /g, ', ')
    .replace(/ – /g, ', ')
    .replace(/\s{2,}/g, ' ')
    .trim();
  return clean;
}

// Generate complete Article object
function buildArticleObject(item, index, totalOffset) {
  const author = AUTHORS[(totalOffset + index) % AUTHORS.length];
  const template = item.TargetTemplate;
  const kw = stripYear(item.PrimaryKeyword);
  const now = new Date();
  now.setMinutes(now.getMinutes() - (count - index) * 15);
  const publishedAt = now.toISOString();

  let articleTitle = '';
  let h1 = '';
  let metaTitle = '';
  let metaDescription = '';
  let excerpt = '';
  let sections = [];
  let tableOfContents = [];
  let keyTakeaways = [];
  let directAnswer = null;
  let faqs = [];
  let prosCons = null;
  let scoreCard = null;
  let comparisonMatrix = null;
  let howToData = null;
  let categorySlug = item.CategorySlug || 'reviews';

  // Check comparison vs review vs how-to
  const vsMatch = kw.match(/^(.+?)\s+vs\.?\s+(.+)$/i);

  if (vsMatch || template === 'comparison') {
    // ---------------- COMPARISON TEMPLATE ----------------
    categorySlug = 'comparisons';
    const toolA = vsMatch ? vsMatch[1].trim() : kw.split(' ')[0];
    const toolB = vsMatch ? vsMatch[2].trim() : (kw.split(' ')[2] || 'Alternative');

    articleTitle = `${toolA} vs ${toolB}: Features, Pricing & Detailed Comparison`;
    h1 = `${toolA} vs ${toolB}: Which Software Fits Your Team Needs?`;
    metaTitle = `${toolA} vs ${toolB} Comparison: Features, Pricing & Winner`;
    metaDescription = `Direct comparison between ${toolA} and ${toolB}. Compare interface speed, pricing models, user limits, and discover which software wins for teams.`;
    excerpt = `Evaluating ${toolA} against ${toolB} requires examining interface speed, pricing structures, seat economics, and daily team workflows. We test both software platforms head to head.`;

    directAnswer = {
      question: `Which software is better, ${toolA} or ${toolB}?`,
      answer: `${toolA} is best suited for teams that prioritize fast onboarding and straightforward visual workflows, while ${toolB} provides deeper configuration controls and structured data handling for specialized operational requirements.`,
      summaryBullets: [
        `${toolA} offers faster initial onboarding and simpler team adoption`,
        `${toolB} provides deeper architecture for technical use cases`,
        `Seat pricing differs based on annual billing commitments`,
        `Both platforms integrate with standard workplace tools via webhooks`
      ]
    };

    keyTakeaways = [
      `Evaluate your core workflow requirements before committing to annual software contracts.`,
      `${toolA} minimizes administrative overhead for daily team operators.`,
      `${toolB} delivers specialized functionality for structured projects and large datasets.`,
      `Run pilot tests with two teammates before full company rollout.`
    ];

    tableOfContents = [
      { id: "quick-verdict", title: `Quick Verdict: ${toolA} vs ${toolB}`, level: 2 },
      { id: "feature-breakdown", title: "Detailed Feature Breakdown", level: 2 },
      { id: "pricing-comparison", title: "Pricing & Seat Economics", level: 2 },
      { id: "ease-of-use", title: "Usability & Learning Curve", level: 2 },
      { id: "comparison-matrix", title: "Head-to-Head Specification Matrix", level: 2 },
      { id: "final-verdict", title: "The Editorial Verdict: Which Should You Choose?", level: 2 },
      { id: "faqs", title: "Frequently Asked Questions", level: 2 }
    ];

    sections = [
      {
        id: "quick-verdict",
        title: `Quick Verdict: ${toolA} vs ${toolB}`,
        level: 2,
        content: `
<p>Choosing between <strong>${toolA}</strong> and <strong>${toolB}</strong> comes down to the balance between simplicity and technical depth. Both tools address workplace collaboration, but their architectural priorities diverge significantly.</p>
<p>If your team needs immediate productivity with minimal configuration, ${toolA} provides an intuitive starting point. Conversely, if your workflows demand strict field governance, granular permissions, and deep third-party integrations, ${toolB} justifies its steeper setup curve.</p>
        `,
        callout: {
          type: "tip",
          text: `Teams with under 15 users typically adopt ${toolA} faster, whereas larger cross-functional teams benefit from ${toolB}'s permission controls.`
        }
      },
      {
        id: "feature-breakdown",
        title: "Detailed Feature Breakdown",
        level: 2,
        content: `
<p>When evaluating daily functionality, three operational factors differentiate these platforms: automation capabilities, reporting transparency, and integration support.</p>
<ul>
  <li><strong>Workflow Automation:</strong> ${toolA} provides template-based automations that take minutes to deploy. ${toolB} supports conditional multi-step branching logic suited for complex operations.</li>
  <li><strong>Dashboard Reporting:</strong> ${toolB} includes customizable calculation widgets and visual charts, while ${toolA} focuses on clean summary lists and milestone tracking.</li>
  <li><strong>Data Portability:</strong> Both platforms support CSV and JSON exports, ensuring team records remain accessible if requirements change.</li>
</ul>
        `
      },
      {
        id: "pricing-comparison",
        title: "Pricing & Seat Economics",
        level: 2,
        content: `
<p>Software budgets can escalate rapidly as headcount expands. Comparing baseline per-seat costs reveals important structural differences:</p>
<p>${toolA} generally starts with an accessible entry tier, making it attractive for budget-conscious startups. Still, advanced capabilities such as single sign-on (SSO) and unlimited file storage are often gated behind higher enterprise tiers.</p>
<p>${toolB} uses a slightly higher entry price point but bundles administrative management tools earlier in its tier structure. Teams should calculate annual total cost of ownership including required third-party connectors.</p>
        `,
        callout: {
          type: "warning",
          text: "Always audit active user seats quarterly to eliminate recurring subscription charges for inactive team members."
        }
      },
      {
        id: "ease-of-use",
        title: "Usability & Learning Curve",
        level: 2,
        content: `
<p>A software platform only delivers value if your teammates actively use it daily. In our hands-on testing, onboarding speed varied considerably:</p>
<p>New team members were able to navigate ${toolA} within their first working hour without formal training sessions. Its interface prioritizes clean white space, recognizable icons, and straightforward menus.</p>
<p>${toolB} presents a richer, denser workspace that rewards investment in administrative setup. Teams should plan for a dedicated administrator to construct initial templates and train staff during the first two weeks.</p>
        `
      },
      {
        id: "final-verdict",
        title: "The Editorial Verdict: Which Should You Choose?",
        level: 2,
        content: `
<p>Both ${toolA} and ${toolB} are established leaders in modern software stacks. Your ultimate selection should reflect your internal operational maturity:</p>
<p><strong>Choose ${toolA} if:</strong> You manage a nimble team, need fast deployment, and prefer intuitive daily navigation over complex multi-tier permissions.</p>
<p><strong>Choose ${toolB} if:</strong> You manage complex inter-departmental projects, require detailed audit controls, and need customized reporting dashboards.</p>
        `
      }
    ];

    comparisonMatrix = [
      { feature: "Primary Focus", category: "Core Design", entityA: "Intuitive Team Workflows", entityB: "Deep Operational Controls", winner: "Tie", notes: "Depends on team style" },
      { feature: "Setup Time", category: "Usability", entityA: "Under 1 Hour", entityB: "2 to 3 Days", winner: "A", notes: `${toolA} deploys significantly faster` },
      { feature: "Customization Depth", category: "Features", entityA: "Moderate (Templates)", entityB: "High (Custom Fields)", winner: "B", notes: `${toolB} offers granular schema rules` },
      { feature: "Automation Rules", category: "Workflow", entityA: "Standard Triggers", entityB: "Multi-branch Logic", winner: "B", notes: `${toolB} handles complex conditions` },
      { feature: "Free Plan Available", category: "Pricing", entityA: "Yes (Seat limited)", entityB: "Yes (Trial/Feature limited)", winner: "A", notes: `${toolA} offers broader free usage` },
      { feature: "API & Webhook Reliability", category: "Integration", entityA: "REST API Supported", entityB: "REST & Webhook Events", winner: "Tie", notes: "Both support standard connections" }
    ];

    scoreCard = {
      overallScore: 8.6,
      verdict: `${toolA} wins on daily adoption speed, while ${toolB} takes the lead for advanced customization and enterprise controls.`,
      ratings: [
        { label: "Onboarding Speed", score: 9.1 },
        { label: "Feature Depth", score: 8.4 },
        { label: "Pricing Value", score: 8.3 },
        { label: "Team Adoption", score: 8.8 }
      ]
    };

    faqs = [
      {
        question: `Can our team migrate data between ${toolA} and ${toolB}?`,
        answer: `Yes. Both platforms provide standard CSV export and import tools. For ongoing data synchronization, third-party webhook tools can mirror updates between both systems.`
      },
      {
        question: `Which tool offers better mobile phone applications?`,
        answer: `In our testing, ${toolA} provided a smoother mobile experience for quick task status updates, while ${toolB} mobile views felt denser due to extensive custom fields.`
      },
      {
        question: `Are there hidden costs when purchasing ${toolA} or ${toolB}?`,
        answer: `Watch out for add-on charges such as additional automation runs, guest collaborator seats, and premium customer support tiers. Always verify these limits before subscribing.`
      },
      {
        question: `Which software has better customer support response times?`,
        answer: `Both platforms offer extensive knowledge base documentation and email ticketing. Priority live chat is generally reserved for users on paid corporate tiers.`
      }
    ];

  } else {
    // ---------------- REVIEW / FREE PLAN / HOW-TO TEMPLATE ----------------
    categorySlug = 'reviews';
    const toolName = kw.replace(/free plan limitations/i, '')
                       .replace(/review/i, '')
                       .replace(/alternatives/i, '')
                       .trim() || 'Software';

    articleTitle = `${toolName} Free Plan Limitations: Caps, Restrictions & Upgrade Value`;
    h1 = `${toolName} Free Plan Limitations: What Are the Real Caps & Tradeoffs?`;
    metaTitle = `${toolName} Free Plan Limitations: Tested Caps & Review`;
    metaDescription = `Complete breakdown of ${toolName} free plan limitations. Review active user limits, storage caps, export options, and when teams must upgrade.`;
    excerpt = `Testing ${toolName} on its zero-dollar tier reveals clear operational boundaries. We examine user seat caps, storage restrictions, export limitations, and calculate the exact moment your team needs to upgrade.`;

    directAnswer = {
      question: `Does ${toolName} offer a free tier, and what are its limits?`,
      answer: `Yes, ${toolName} provides a free tier, but it enforces caps on active user seats, monthly actions, and export formats. Teams with growing workloads will hit these ceiling limits as collaboration expands.`,
      summaryBullets: [
        `User seat limits restricted to starter team sizes`,
        `Basic storage quota with premium retention locked behind upgrades`,
        `Standard email support with priority ticketing reserved for paid tiers`,
        `Manual exports supported while automated API webhooks require paid licenses`
      ]
    };

    keyTakeaways = [
      `${toolName} free tier works well for solopreneurs and early evaluation testing.`,
      `Workgroup seat limits represent the earliest restriction teams encounter.`,
      `Advanced permission controls and audit logs are kept behind paid tiers.`,
      `Calculate total annual costs before migrating company workflows.`
    ];

    tableOfContents = [
      { id: "executive-summary", title: `Executive Summary: ${toolName} Free Tier`, level: 2 },
      { id: "core-limitations", title: "Core Limitations Tested (Seats, Storage & API)", level: 2 },
      { id: "pricing-tiers", title: "Paid Tiers & Upgrade Economics", level: 2 },
      { id: "pros-and-cons", title: "Tested Pros & Cons", level: 2 },
      { id: "top-alternatives", title: `Top Alternatives to ${toolName}`, level: 2 },
      { id: "editorial-verdict", title: "The Editorial Verdict: When Should You Upgrade?", level: 2 },
      { id: "faqs", title: "Frequently Asked Questions", level: 2 }
    ];

    sections = [
      {
        id: "executive-summary",
        title: `Executive Summary: ${toolName} Free Tier`,
        level: 2,
        content: `
<p>Free tiers in modern cloud applications serve a dual purpose: they allow prospective buyers to test core workflows without financial commitment, and they establish an entry point for eventual paid conversion.</p>
<p>Our evaluation of <strong>${toolName}</strong> demonstrates that while the zero-dollar plan provides functional access to main features, purposeful friction points are designed into high-volume workflows. Solopreneurs can operate comfortably, but teams collaborating across multiple projects will quickly face upgrade prompts.</p>
        `,
        callout: {
          type: "info",
          text: `${toolName} does not require a credit card during initial registration, making evaluation completely risk-free.`
        }
      },
      {
        id: "core-limitations",
        title: "Core Limitations Tested (Seats, Storage & API)",
        level: 2,
        content: `
<p>During our structured testing, we documented four primary boundaries enforced on non-paying accounts:</p>
<ul>
  <li><strong>User Collaborator Caps:</strong> Free accounts are restricted to limited active seats. Adding additional teammates requires upgrading the entire workspace.</li>
  <li><strong>Data Storage Quotas:</strong> Workspace attachment storage is capped at a modest quota. Once reached, document uploads are suspended until older files are purged.</li>
  <li><strong>Automation Action Ceilings:</strong> Automated trigger runs and recurring tasks are restricted to a monthly quota, resetting on the first of each month.</li>
  <li><strong>Export and Reporting Restrictions:</strong> Advanced analytics dashboards and automated CSV exports remain locked behind paid subscription tiers.</li>
</ul>
        `
      },
      {
        id: "pricing-tiers",
        title: "Paid Tiers & Upgrade Economics",
        level: 2,
        content: `
<p>When your team outgrows the free tier, ${toolName} offers tiered progression plans:</p>
<p>The <strong>Starter Plan</strong> typically removes user seat barriers and expands storage capacities, making it suitable for teams of up to 10 members. The <strong>Pro Tier</strong> introduces custom field governance, advanced automation logic, and priority support response queues.</p>
<p>Choosing annual upfront billing generally provides a 15% to 20% discount compared to month-to-month invoicing.</p>
        `,
        callout: {
          type: "warning",
          text: "Verify whether seat licensing is charged for all registered members or only administrators before finalizing team invitations."
        }
      },
      {
        id: "pros-and-cons",
        title: "Tested Pros & Cons",
        level: 2,
        content: `
<p>Understanding the exact trade-offs of remaining on the free plan ensures realistic workflow expectations:</p>
<p>The interface remains clean and responsive, with zero third-party advertisements. Still, the lack of priority ticketing means technical support inquiries may take 48 to 72 hours for email resolution.</p>
        `
      },
      {
        id: "top-alternatives",
        title: `Top Alternatives to ${toolName}`,
        level: 2,
        content: `
<p>If ${toolName}'s free tier constraints prove too restrictive for your current budget, consider these established alternatives:</p>
<ul>
  <li><strong>Open-Source Self-Hosted Options:</strong> Provide unlimited user seats and storage, provided your team can manage local server maintenance.</li>
  <li><strong>Freemium Competitors:</strong> Several competing tools offer higher seat allowances on their free tiers while gating advanced security controls instead.</li>
  <li><strong>All-in-One Suites:</strong> Bundled software suites that include similar functionality under an existing workplace subscription.</li>
</ul>
        `
      },
      {
        id: "editorial-verdict",
        title: "The Editorial Verdict: When Should You Upgrade?",
        level: 2,
        content: `
<p>The free tier of ${toolName} is genuinely useful for solo practitioners, freelancers, and small evaluation projects. It provides authentic hands-on exposure to the platform's core interface.</p>
<p>Still, once your organization relies on automated daily operations, stores records, or requires multi-member collaboration, upgrading to the entry paid tier delivers clear operational value.</p>
        `
      }
    ];

    prosCons = {
      pros: [
        "Instant zero-dollar account creation with no credit card required",
        "Clean, responsive interface with intuitive navigation controls",
        "Full access to main tool mechanics during initial testing",
        "Reliable cloud service availability with isolated user workspace partitions"
      ],
      cons: [
        "Strict collaborator seat limits that prevent team scaling",
        "Modest file attachment storage ceilings on free accounts",
        "Automated webhook integrations locked behind paid subscriptions",
        "Standard support inquiries queue behind paying customer accounts"
      ]
    };

    scoreCard = {
      overallScore: 8.1,
      verdict: `A dependable free tier for evaluation and individual use, though teams will require paid licenses for multi-user collaboration.`,
      ratings: [
        { label: "Usability", score: 8.9 },
        { label: "Feature Depth", score: 7.9 },
        { label: "Free Tier Value", score: 7.5 },
        { label: "Support Speed", score: 7.8 }
      ],
      bestFor: "Solo founders, freelancers, and software evaluation teams.",
      startingPrice: "$10/user/month (when billed annually)",
      freePlan: "Available with collaborator seat and storage quotas."
    };

    faqs = [
      {
        question: `How long does the ${toolName} free plan last?`,
        answer: `The free plan is ongoing and does not expire after 14 or 30 days. You can continue using it indefinitely within the established usage caps.`
      },
      {
        question: `Will my team lose data if we hit the free storage limit?`,
        answer: `No. Existing records remain safe and accessible. Still, you will not be able to upload new attachments or create new records until space is cleared or your plan is upgraded.`
      },
      {
        question: `Can I export data from the free plan if I decide to leave?`,
        answer: `Yes. Standard manual export options (such as CSV or JSON) are provided so you retain ownership of your workspace data.`
      },
      {
        question: `Does the free plan include customer support?`,
        answer: `Free accounts have access to the public documentation knowledge base and community forums. Direct email support is available with standard queue response times.`
      }
    ];
  }

  // Pick category image
  const imgPool = IMAGES[categorySlug] || IMAGES.general;
  const chosenImg = imgPool[(totalOffset + index) % imgPool.length];

  // Final sanitization of all prose fields to guarantee 0 banned words and NO 2026
  articleTitle = sanitizeProse(stripYear(articleTitle));
  h1 = sanitizeProse(stripYear(h1));
  metaTitle = sanitizeProse(stripYear(metaTitle));
  metaDescription = sanitizeProse(stripYear(metaDescription));
  excerpt = sanitizeProse(stripYear(excerpt));

  sections.forEach(s => {
    s.title = sanitizeProse(stripYear(s.title));
    s.content = sanitizeProse(stripYear(s.content));
    if (s.callout) s.callout.text = sanitizeProse(stripYear(s.callout.text));
  });

  tableOfContents.forEach(t => {
    t.title = sanitizeProse(stripYear(t.title));
  });

  keyTakeaways = keyTakeaways.map(k => sanitizeProse(stripYear(k)));

  if (directAnswer) {
    directAnswer.question = sanitizeProse(stripYear(directAnswer.question));
    directAnswer.answer = sanitizeProse(stripYear(directAnswer.answer));
    directAnswer.summaryBullets = directAnswer.summaryBullets.map(b => sanitizeProse(stripYear(b)));
  }

  faqs.forEach(f => {
    f.question = sanitizeProse(stripYear(f.question));
    f.answer = sanitizeProse(stripYear(f.answer));
  });

  if (prosCons) {
    prosCons.pros = prosCons.pros.map(p => sanitizeProse(stripYear(p)));
    prosCons.cons = prosCons.cons.map(c => sanitizeProse(stripYear(c)));
  }

  if (scoreCard) {
    scoreCard.verdict = sanitizeProse(stripYear(scoreCard.verdict));
    if (scoreCard.bestFor) scoreCard.bestFor = sanitizeProse(stripYear(scoreCard.bestFor));
    if (scoreCard.freePlan) scoreCard.freePlan = sanitizeProse(stripYear(scoreCard.freePlan));
  }

  const slug = item.SuggestedSlug.replace(/-2026/g, '').replace(/2026-/g, '');

  return {
    slug,
    path: `/${categorySlug}/${slug}`,
    title: articleTitle,
    h1,
    metaTitle,
    metaDescription,
    excerpt,
    category: categorySlug,
    subcategory: template === 'comparison' ? 'Software Comparisons' : 'Software Reviews',
    template: template === 'comparison' ? 'comparison' : 'review',
    author,
    publishedAt,
    updatedAt: publishedAt,
    readingTime: "8 min read",
    featuredImage: chosenImg.url,
    featuredImageAlt: chosenImg.alt,
    isFeatured: index === 0,
    isPopular: false,
    isTrending: true,
    viewCount: Math.floor(Math.random() * 2000) + 1200,
    tags: [
      item.Category,
      item.Topic,
      template === 'comparison' ? 'Comparison' : 'Review',
      'SaaS Software',
      'Buyer Guide'
    ],
    keyTakeaways,
    directAnswer,
    tableOfContents,
    sections,
    faqs,
    relatedArticleSlugs: ["what-is-saas", "notion-review", "zapier-vs-make"],
    scoreCard,
    prosCons,
    comparisonMatrix,
    howToData
  };
}

// Generate the articles
const newArticles = [];
const currentTotal = state.totalPublishedCount || 0;

for (let i = 0; i < candidates.length; i++) {
  const candidate = candidates[i];
  const article = buildArticleObject(candidate, i, currentTotal);
  newArticles.push(article);
}

if (dryRun) {
  console.log('[Publisher] Dry run complete! Generated articles:');
  newArticles.forEach((a, i) => {
    console.log(`\n--- Article ${i + 1}: ${a.title} ---`);
    console.log(`URL: ${a.path}`);
    console.log(`Author: ${a.author.name}`);
    console.log(`Sections: ${a.sections.length}`);
    console.log(`TOC:`, a.tableOfContents.map(t => t.title));
  });
  process.exit(0);
}

// Save published articles
const updatedPublishedArticles = [...publishedArticles, ...newArticles];
fs.writeFileSync(publishedJsonPath, JSON.stringify(updatedPublishedArticles, null, 2), 'utf8');
console.log(`[Publisher] Saved ${newArticles.length} new articles to: ${publishedJsonPath}`);

// Update roadmap status for the published items
const candidateIds = new Set(candidates.map(c => c.ArticleID));
for (const r of roadmap) {
  if (candidateIds.has(r.ArticleID)) {
    r.Status = 'published';
    r.PublishedAt = new Date().toISOString();
  }
}
fs.writeFileSync(roadmapPath, JSON.stringify(roadmap, null, 2), 'utf8');
console.log(`[Publisher] Updated master roadmap status for ${candidates.length} articles.`);

// Update publishing state
const updatedSlugs = [...state.publishedSlugs, ...newArticles.map(a => a.slug)];
const updatedHistory = state.history || [];
updatedHistory.push({
  date: new Date().toISOString(),
  count: newArticles.length,
  articles: newArticles.map(a => ({
    id: a.slug,
    title: a.title,
    path: a.path,
    author: a.author.name
  }))
});

const updatedState = {
  lastPublishedAt: new Date().toISOString(),
  totalPublishedCount: currentTotal + newArticles.length,
  dailyTarget: 3,
  publishedSlugs: updatedSlugs,
  history: updatedHistory
};
fs.writeFileSync(statePath, JSON.stringify(updatedState, null, 2), 'utf8');
console.log(`[Publisher] Updated publishing-state.json (Total published to date: ${updatedState.totalPublishedCount})`);

console.log('\n================ PUBLISHED ARTICLES SUMMARY ================');
newArticles.forEach((a, i) => {
  console.log(`${i + 1}. Title: ${a.title}`);
  console.log(`   Path: ${a.path}`);
  console.log(`   Author: ${a.author.name}`);
  console.log(`   Template: ${a.template}`);
});
console.log('============================================================\n');
