const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'data', 'keywords');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// 1. TOP SAAS & TECH TOOLS (300 items across all competitor verticals)
const TOOLS = [
  // Productivity & Project Management
  "Notion", "ClickUp", "Asana", "Monday", "Jira", "Trello", "Airtable", "Basecamp", "Linear", "Wrike",
  "Smartsheet", "Todoist", "TickTick", "OmniFocus", "Things3", "Coda", "Slite", "Craft", "Obsidian", "Roam",
  "Logseq", "Evernote", "OneNote", "Bear", "Supernotes", "Taskade", "Height", "Routine", "Akiflow", "Sunsama",
  
  // Automation & Workflows (Kissflow, Zapier, Make)
  "Zapier", "Make", "n8n", "Kissflow", "Workato", "Tray.io", "Appian", "Mendix", "OutSystems", "Power Automate",
  "Pipedream", "Activepieces", "Integrately", "Automate.io", "IFTTT", "Camunda", "ProcessMaker", "Nintex", "Pipefy", "Zoho Creator",
  
  // Data Integration & ETL (Airbyte)
  "Airbyte", "Fivetran", "dbt", "Segment", "RudderStack", "Meltano", "Stitch", "Hevo Data", "Talend", "Informatica",
  "Matillion", "Rivery", "Dataddo", "Portable", "Census", "Hightouch", "Polytomic", "Estuary", "Kafka", "Debezium",
  
  // AI Tools & Code Assistants (Startuphub, TheDataScientist, Denebrix)
  "ChatGPT", "Claude", "Cursor", "Perplexity", "GitHub Copilot", "Gemini", "Midjourney", "Runway", "ElevenLabs", "Jasper",
  "Copy.ai", "Synthesia", "HeyGen", "Descript", "ScreenApp", "Otter.ai", "Fireflies.ai", "Fathom", "Grain", "Superhuman",
  "Rewind", "Granola", "Harvey", "CoCounsel", "Replit", "v0", "Lovable", "Bolt.new", "Devin", "Codeium",
  
  // Communication & Video (ScreenApp, Dev.to)
  "Slack", "Microsoft Teams", "Zoom", "Google Meet", "Loom", "Vidyard", "Vimeo", "Zulip", "Mattermost", "Discord",
  "Webex", "RingCentral", "Dialpad", "Aircall", "JustCall", "Krisp", "Riverside", "SquadCast", "Cleanfeed", "Tandem",
  
  // CRM & Sales
  "HubSpot", "Salesforce", "Pipedrive", "Zoho CRM", "Close", "Freshsales", "Copper", "Attio", "Folk", "Apollo",
  "ZoomInfo", "Cognism", "Lusha", "Clearbit", "Lemlist", "Instantly", "Smartlead", "Outreach", "Salesloft", "Clay",
  
  // Finance, Invoicing & Billing (Refrens, HowToBuySaaS)
  "QuickBooks", "Xero", "FreshBooks", "Wave", "Refrens", "Zoho Books", "Stripe", "Paddle", "Chargebee", "Recurly",
  "Maxio", "Ordway", "Sage", "NetSuite", "Bill.com", "Ramp", "Brex", "Expensify", "Navan", "Airbase",
  
  // Design & Branding (Venngage, BrandCrowd)
  "Canva", "Figma", "Adobe Express", "BrandCrowd", "Looka", "Venngage", "Visme", "Piktochart", "Infogram", "Lucidchart",
  "Miro", "Mural", "Whimsical", "Draw.io", "Sketch", "Penpot", "Framermotion", "Webflow", "Framer", "SquareSpace",
  
  // HR & Payroll (PeopleStrong)
  "Gusto", "Deel", "Rippling", "Remote", "BambooHR", "Workday", "PeopleStrong", "Darwinbox", "Keka", "Zoho People",
  "HiBob", "Factorial", "Justworks", "Papaya Global", "Oyster", "Lattice", "Culture Amp", "15Five", "Leapsome", "Workable"
];

// 2. DATA SOURCES & DESTINATIONS (for Airbyte connector matrix)
const DATA_SOURCES = [
  "PostgreSQL", "MySQL", "MongoDB", "Salesforce", "HubSpot", "Stripe", "Shopify", "Google Analytics 4",
  "Facebook Ads", "Google Ads", "Zendesk", "Jira", "GitHub", "Marketo", "Mixpanel", "Amplitude",
  "DynamoDB", "MSSQL", "Oracle", "Kafka", "Amazon S3", "Google Cloud Storage", "Azure Blob", "BigQuery",
  "Snowflake", "ClickHouse", "Elasticsearch", "Square", "WooCommerce", "ServiceNow", "Workday", "NetSuite"
];

const DATA_DESTINATIONS = [
  "Snowflake", "BigQuery", "Amazon Redshift", "PostgreSQL", "Databricks", "ClickHouse", "DuckDB",
  "Amazon S3", "Google Cloud Storage", "Azure Synapse", "SingleStore", "Hydra", "MotherDuck", "StarRocks"
];

// 3. CATEGORIES (Sonary, Kissflow, Startuphub)
const CATEGORIES = [
  "CRM Software", "Project Management", "Workflow Automation", "Screen Recording", "Data Integration",
  "ETL Tools", "AI Meeting Assistant", "Invoice Software", "Accounting Software", "Logo Maker",
  "Infographic Maker", "HR Software", "Payroll Software", "Time Tracking", "Form Builder",
  "Proposal Software", "Contract Management", "Email Marketing", "Customer Support Helpdesk", "Knowledge Base",
  "Digital Asset Management", "Social Media Scheduler", "SEO Tools", "Code Assistant", "AI Image Generator",
  "Video Editing Software", "E-Commerce Platform", "Website Builder", "Cloud Hosting", "VPN Software"
];

// 4. VERTICALS & NICHES
const NICHES = [
  "Small Business", "Startups", "Enterprise", "Agencies", "Freelancers", "Real Estate",
  "Healthcare", "Law Firms", "Accounting Firms", "Ecommerce", "Construction", "Nonprofits",
  "Dental Clinics", "Restaurants", "Property Management", "Financial Advisors", "Insurance Brokers",
  "Recruiting Agencies", "Software Teams", "Remote Companies", "Consultants", "Education",
  "Fitness Studios", "Architects", "Manufacturing", "Logistics", "Marketing Teams", "Sales Reps"
];

// 5. BUSINESS WORKFLOW TASKS (Kissflow, HowToBuySaaS, Refrens)
const TASKS = [
  "Client Invoicing", "Lead Qualification", "Employee Onboarding", "Contract Approvals",
  "Expense Reporting", "Purchase Orders", "Bug Tracking", "Customer Support Escalation",
  "Social Media Posting", "Meeting Summaries", "Database Replication", "SaaS License Auditing",
  "Contract Renewal", "Vendor Security Review", "Invoice Matching", "Time Sheet Tracking",
  "Project Status Reporting", "Sprint Planning", "Feature Requests", "Sales Commission Calculation",
  "Quote Generation", "Proposal Signing", "Document Versioning", "Data Cleansing", "Audit Logging"
];

console.log("Starting calculation of 200k+ keyword matrix...");

const rows = [];
const seen = new Set();

function addKeyword(kw, intent, template, competitor, tier, slug) {
  const cleanKw = kw.toLowerCase().trim();
  if (seen.has(cleanKw)) return;
  seen.add(cleanKw);
  rows.push({
    keyword: kw,
    intent,
    template,
    competitor,
    tier,
    slug: slug || cleanKw.replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  });
}

// ----------------------------------------------------------------------------
// SILO 1: HEAD-TO-HEAD COMPARISONS (Sonary, Dev.to, TheDataScientist)
// Target: 100,000+ keywords
// ----------------------------------------------------------------------------
const COMP_MODIFIERS = [
  { mod: "vs", intent: "Commercial", tier: "High", suff: "" },
  { mod: "vs", intent: "Commercial", tier: "High", suff: "pricing" },
  { mod: "vs", intent: "Commercial", tier: "High", suff: "features" },
  { mod: "vs", intent: "Commercial", tier: "High", suff: "for small business" },
  { mod: "vs", intent: "Commercial", tier: "High", suff: "for startups" },
  { mod: "vs", intent: "Commercial", tier: "High", suff: "for enterprise" },
  { mod: "vs", intent: "Commercial", tier: "High", suff: "reddit" },
  { mod: "vs", intent: "Commercial", tier: "High", suff: "which is better" },
  { mod: "vs", intent: "Commercial", tier: "Medium", suff: "reviews and rating" },
  { mod: "vs", intent: "Commercial", tier: "Medium", suff: "migration guide" },
  { mod: "vs", intent: "Commercial", tier: "Medium", suff: "security checklist" },
  { mod: "vs", intent: "Commercial", tier: "Medium", suff: "pros and cons" }
];

for (let i = 0; i < TOOLS.length; i++) {
  // compare with next 60 tools
  for (let j = i + 1; j < Math.min(i + 60, TOOLS.length); j++) {
    const tA = TOOLS[i];
    const tB = TOOLS[j];
    for (const cm of COMP_MODIFIERS) {
      const phrase = cm.suff ? `${tA} vs ${tB} ${cm.suff}` : `${tA} vs ${tB}`;
      addKeyword(phrase, cm.intent, "comparison", "sonary.com", cm.tier, `${tA.toLowerCase()}-vs-${tB.toLowerCase()}`);
    }
    // High-intent migration queries
    addKeyword(`how to migrate from ${tA} to ${tB}`, "Informational", "how-to", "dev.to", "High");
    addKeyword(`switch from ${tA} to ${tB}`, "Commercial", "comparison", "sonary.com", "High");
    addKeyword(`export from ${tA} to ${tB}`, "Informational", "how-to", "dev.to", "Medium");
    addKeyword(`sync ${tA} with ${tB}`, "Commercial", "how-to", "airbyte.com", "High");
    addKeyword(`${tA} integration with ${tB}`, "Commercial", "how-to", "kissflow.com", "High");
  }
}

// Comparison by Niche for top pairs
for (let i = 0; i < 40; i++) {
  for (let j = i + 1; j < 40; j++) {
    const tA = TOOLS[i];
    const tB = TOOLS[j];
    for (const niche of NICHES) {
      addKeyword(`${tA} vs ${tB} for ${niche.toLowerCase()}`, "Commercial", "comparison", "sonary.com", "High");
    }
  }
}

// ----------------------------------------------------------------------------
// SILO 2: SOFTWARE REVIEWS & PRICING TEARDOWNS (HowToBuySaaS, Sonary)
// Target: 35,000+ keywords
// ----------------------------------------------------------------------------
const REVIEW_MODIFIERS = [
  { pattern: "{T} review 2026", intent: "Commercial", tier: "High", tpl: "review" },
  { pattern: "{T} pricing plans", intent: "Commercial", tier: "High", tpl: "informational" },
  { pattern: "{T} cost per user", intent: "Commercial", tier: "High", tpl: "informational" },
  { pattern: "{T} hidden fees and price increases", intent: "Commercial", tier: "Medium", tpl: "informational" },
  { pattern: "{T} free plan limitations", intent: "Commercial", tier: "High", tpl: "review" },
  { pattern: "{T} alternatives and competitors", intent: "Commercial", tier: "High", tpl: "review" },
  { pattern: "cheaper alternatives to {T}", intent: "Commercial", tier: "High", tpl: "review" },
  { pattern: "is {T} worth it for small business", intent: "Commercial", tier: "High", tpl: "review" },
  { pattern: "how to cancel {T} subscription", intent: "Informational", tier: "Medium", tpl: "how-to" },
  { pattern: "{T} enterprise discount negotiation", intent: "Transactional", tier: "High", tpl: "how-to" },
  { pattern: "{T} contract terms and SLA checklist", intent: "Commercial", tier: "Medium", tpl: "how-to" },
  { pattern: "{T} pros and cons", intent: "Commercial", tier: "High", tpl: "review" },
  { pattern: "{T} discount codes and coupons", intent: "Transactional", tier: "Medium", tpl: "informational" },
  { pattern: "{T} annual vs monthly pricing", intent: "Commercial", tier: "High", tpl: "informational" }
];

for (const tool of TOOLS) {
  for (const rm of REVIEW_MODIFIERS) {
    const kw = rm.pattern.replace("{T}", tool);
    addKeyword(kw, rm.intent, rm.tpl, "howtobuysaas.com", rm.tier, `${tool.toLowerCase()}-review`);
    for (const niche of NICHES.slice(0, 10)) {
      const nicheKw = `${tool} for ${niche.toLowerCase()}`;
      addKeyword(nicheKw, "Commercial", "review", "sonary.com", "High", `${tool.toLowerCase()}-for-${niche.toLowerCase().replace(/\s+/g, '-')}`);
    }
  }
}

// ----------------------------------------------------------------------------
// SILO 3: BEST SOFTWARE FOR [NICHE] (Sonary, Kissflow, Refrens, PeopleStrong)
// Target: 40,000+ keywords
// ----------------------------------------------------------------------------
const BEST_MODIFIERS = [
  "best {C} for {N}",
  "top 10 {C} tools for {N}",
  "cheapest {C} for {N}",
  "free {C} software for {N}",
  "cloud {C} platform for {N}",
  "open source {C} for {N}",
  "simple {C} tool for {N}",
  "how to choose {C} for {N}"
];

for (const cat of CATEGORIES) {
  for (const niche of NICHES) {
    for (const bm of BEST_MODIFIERS) {
      const kw = bm.replace("{C}", cat).replace("{N}", niche);
      addKeyword(kw, "Commercial", "review", "sonary.com", "High");
    }
  }
}

// ----------------------------------------------------------------------------
// SILO 4: DATA INTEGRATION & CONNECTORS (Airbyte Competitor Silo)
// Target: 25,000+ keywords
// ----------------------------------------------------------------------------
for (const src of DATA_SOURCES) {
  for (const dst of DATA_DESTINATIONS) {
    addKeyword(`how to connect ${src} to ${dst}`, "Informational", "how-to", "airbyte.com", "High");
    addKeyword(`sync ${src} data to ${dst}`, "Commercial", "how-to", "airbyte.com", "High");
    addKeyword(`${src} to ${dst} ETL pipeline`, "Commercial", "how-to", "airbyte.com", "High");
    addKeyword(`${src} to ${dst} connector`, "Transactional", "review", "airbyte.com", "High");
    addKeyword(`replicate ${src} database to ${dst}`, "Informational", "how-to", "airbyte.com", "Medium");
    addKeyword(`automated ${src} to ${dst} data pipeline`, "Commercial", "how-to", "airbyte.com", "Medium");
  }
}

// ----------------------------------------------------------------------------
// SILO 5: WORKFLOW AUTOMATION & BPM (Kissflow, Zapier, Make)
// Target: 30,000+ keywords
// ----------------------------------------------------------------------------
const AUTO_ENGINES = ["Zapier", "Make", "n8n", "Kissflow", "Power Automate"];
for (const task of TASKS) {
  for (const engine of AUTO_ENGINES) {
    addKeyword(`how to automate ${task.toLowerCase()} with ${engine}`, "Informational", "how-to", "kissflow.com", "High");
    addKeyword(`${engine} template for ${task.toLowerCase()}`, "Commercial", "how-to", "kissflow.com", "High");
    addKeyword(`step by step ${task.toLowerCase()} automation guide`, "Informational", "how-to", "kissflow.com", "Medium");
    addKeyword(`automated ${task.toLowerCase()} workflow software`, "Commercial", "review", "kissflow.com", "High");
  }
  for (const niche of NICHES) {
    addKeyword(`${task} template for ${niche.toLowerCase()}`, "Commercial", "how-to", "refrens.com", "Medium");
  }
}

// ----------------------------------------------------------------------------
// SILO 6: AI TOOLS & PROMPTS (Startuphub.ai, Denebrix, TheDataScientist, ScreenApp)
// Target: 25,000+ keywords
// ----------------------------------------------------------------------------
const AI_DOMAINS = [
  "Code Generation", "Meeting Transcription", "Customer Support", "Data Analysis",
  "Blog Writing", "Image Creation", "Video Generation", "Financial Modeling",
  "Lead Scraping", "Resume Screening", "Market Research", "Contract Summary"
];

for (const aid of AI_DOMAINS) {
  for (const niche of NICHES) {
    addKeyword(`best AI tools for ${aid.toLowerCase()} in ${niche.toLowerCase()}`, "Commercial", "informational", "startuphub.ai", "High");
    addKeyword(`how to use AI for ${aid.toLowerCase()} in ${niche.toLowerCase()}`, "Informational", "how-to", "thedatascientist.com", "High");
    addKeyword(`free AI ${aid.toLowerCase()} software for ${niche.toLowerCase()}`, "Commercial", "review", "denebrixai.com", "Medium");
  }
  for (const tool of ["ChatGPT", "Claude", "Cursor", "Perplexity", "ScreenApp"]) {
    addKeyword(`how to use ${tool} for ${aid.toLowerCase()}`, "Informational", "how-to", "screenapp.io", "High");
  }
}

// ----------------------------------------------------------------------------
// SILO 7: SAAS PROCUREMENT, PRICING & METRICS (HowToBuySaaS)
// Target: 10,000+ keywords
// ----------------------------------------------------------------------------
const METRICS = ["CAC", "LTV", "NRR", "Gross Churn", "Net Churn", "Rule of 40", "Magic Number", "Quick Ratio", "Payback Period", "ARR", "MRR"];
for (const metric of METRICS) {
  addKeyword(`how to calculate ${metric}`, "Informational", "how-to", "howtobuysaas.com", "High");
  addKeyword(`${metric} formula and 2026 benchmarks`, "Informational", "informational", "howtobuysaas.com", "High");
  addKeyword(`${metric} calculator excel template`, "Transactional", "how-to", "howtobuysaas.com", "High");
  for (const niche of NICHES.slice(0, 15)) {
    addKeyword(`average ${metric} for ${niche.toLowerCase()} SaaS`, "Informational", "informational", "howtobuysaas.com", "Medium");
  }
}

for (const tool of TOOLS) {
  addKeyword(`how to negotiate ${tool} renewal`, "Transactional", "how-to", "howtobuysaas.com", "High");
  addKeyword(`${tool} procurement security questionnaire`, "Commercial", "how-to", "howtobuysaas.com", "Medium");
  addKeyword(`${tool} enterprise pricing negotiation tips`, "Commercial", "how-to", "howtobuysaas.com", "High");
}

console.log(`Generated ${rows.length} unique targeted keywords.`);

// Write CSV
const csvHeader = "Keyword,SearchIntent,TargetTemplate,CompetitorTarget,SearchTier,SuggestedSlug\n";
const csvPath = path.join(OUTPUT_DIR, 'keywords-200k.csv');
const writeStream = fs.createWriteStream(csvPath);
writeStream.write(csvHeader);

for (let i = 0; i < rows.length; i++) {
  const r = rows[i];
  const line = `"${r.keyword.replace(/"/g, '""')}","${r.intent}","${r.template}","${r.competitor}","${r.tier}","${r.slug}"\n`;
  writeStream.write(line);
}
writeStream.end();

// Write summary JSON
const summary = {
  totalKeywords: rows.length,
  generatedAt: new Date().toISOString(),
  distributionByCompetitor: {},
  distributionByIntent: {},
  distributionByTemplate: {},
  topHighIntentSamples: rows.slice(0, 100)
};

for (const r of rows) {
  summary.distributionByCompetitor[r.competitor] = (summary.distributionByCompetitor[r.competitor] || 0) + 1;
  summary.distributionByIntent[r.intent] = (summary.distributionByIntent[r.intent] || 0) + 1;
  summary.distributionByTemplate[r.template] = (summary.distributionByTemplate[r.template] || 0) + 1;
}

fs.writeFileSync(path.join(OUTPUT_DIR, 'keyword-summary.json'), JSON.stringify(summary, null, 2), 'utf8');

console.log("Complete! Saved to data/keywords/keywords-200k.csv and data/keywords/keyword-summary.json");
