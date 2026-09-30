const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

console.log('Loading final_keywords.xlsx...');
const wb = xlsx.readFile('final_keywords.xlsx');
const ws = wb.Sheets[wb.SheetNames[0]];
const rawRows = xlsx.utils.sheet_to_json(ws);
console.log('Total raw rows:', rawRows.length);

function mapCategorySlug(category, template, primaryKw) {
  if (template === 'comparison' || /^.+?\s+vs\.?\s+.+$/i.test(primaryKw)) {
    return 'comparisons';
  }
  if (template === 'review' || /review|free plan|alternatives/i.test(primaryKw)) {
    return 'reviews';
  }
  if (template === 'how-to' || /how to|migrate|integration|setup|calculate/i.test(primaryKw)) {
    return 'how-to';
  }
  
  const map = {
    'HR & Payroll': 'business',
    'Communication & Video': 'productivity',
    'CRM & Sales': 'business',
    'Workflow Automation': 'automation',
    'Project Management': 'productivity',
    'AI & Machine Learning': 'ai-tools',
    'Design & Creative': 'software',
    'Productivity & Collaboration': 'productivity',
    'Data Integration & ETL': 'automation',
    'Finance & Accounting': 'business',
    'Support & Success': 'business',
    'Developer Tools': 'software',
    'Marketing': 'business',
    'Commerce & Sales': 'business',
    'IT & Security': 'cloud'
  };
  return map[category] || 'saas';
}

function cleanText(txt) {
  if (!txt) return '';
  return String(txt)
    .replace(/\b202\d\b/g, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/\(\s*\)/g, '')
    .trim();
}

function generateTitleWithoutYear(primaryKw, template) {
  const kw = cleanText(primaryKw);
  const vsMatch = kw.match(/^(.+?)\s+vs\.?\s+(.+)$/i);
  if (vsMatch) {
    const a = vsMatch[1].trim();
    const b = vsMatch[2].trim();
    return `${a} vs ${b}: Features, Pricing & In-Depth Comparison`;
  }
  if (/free plan limitations/i.test(kw)) {
    const tool = kw.replace(/free plan limitations/i, '').trim();
    return `${tool} Free Plan Limitations: Caps, Restrictions & Upgrade Value`;
  }
  if (/alternatives/i.test(kw)) {
    const tool = kw.replace(/alternatives.*competitors/i, '').replace(/alternatives/i, '').trim();
    return `Top 10 ${tool} Alternatives & Competitors: Features, Pricing & Comparison`;
  }
  if (/review/i.test(kw)) {
    const tool = kw.replace(/review.*/i, '').trim();
    return `${tool} Review: Features, Pricing, Pros & Cons Tested`;
  }
  if (/migrate/i.test(kw)) {
    return `${kw}: Complete Step-by-Step Migration Guide`;
  }
  if (/integration/i.test(kw)) {
    return `${kw}: Complete Setup & Workflow Guide`;
  }
  if (/how to/i.test(kw)) {
    return `${kw}: Practical Guide & Step-by-Step Walkthrough`;
  }
  return `${kw}: Complete In-Depth Guide & Practical Framework`;
}

const cleanedRoadmap = [];
const seenSlugs = new Set();

for (let i = 0; i < rawRows.length; i++) {
  const r = rawRows[i];
  const primaryKw = cleanText(r.PrimaryKeyword);
  if (!primaryKw) continue;

  const template = (r.TargetTemplate || 'informational').toLowerCase();
  const categorySlug = mapCategorySlug(r.Category, template, primaryKw);
  const title = generateTitleWithoutYear(primaryKw, template);

  // Clean LSI keywords of any 2026 or year references
  let lsi = cleanText(r.LSI_Semantic_Keywords)
    .replace(/2026\s*guide/gi, 'practical guide')
    .replace(/2026/g, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/;\s*;/g, ';')
    .trim();

  // Clean H2 outline of any 2026
  let outline = cleanText(r.SuggestedH2Outline)
    .replace(/2026/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();

  // Create clean slug
  let baseSlug = (r.SuggestedSlug || primaryKw.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''))
    .replace(/-2026-/g, '-')
    .replace(/-2026/g, '')
    .replace(/2026-/g, '');
  
  let slug = baseSlug;
  let counter = 1;
  while (seenSlugs.has(slug)) {
    slug = `${baseSlug}-${counter++}`;
  }
  seenSlugs.add(slug);

  cleanedRoadmap.push({
    ArticleID: r.ArticleID || `ART-${String(i + 1).padStart(6, '0')}`,
    PrimaryKeyword: primaryKw,
    LSI_Semantic_Keywords: lsi,
    SuggestedArticleTitle: title,
    SuggestedH2Outline: outline,
    SearchIntent: r.SearchIntent || 'Commercial',
    TargetTemplate: template,
    Category: r.Category || 'Other',
    CategorySlug: categorySlug,
    Topic: r.Topic || 'Software Comparison',
    MonthlyVolume: Number(r.MonthlyVolume) || 0,
    KeywordDifficulty_KD: Number(r.KeywordDifficulty_KD) || 0,
    Priority: r.Priority || 'Standard',
    SuggestedSlug: slug,
    Status: 'pending'
  });
}

console.log('Cleaned roadmap total articles:', cleanedRoadmap.length);

const outDir = path.join(__dirname, '../data/keywords');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const outJsonPath = path.join(outDir, 'article-roadmap-master.json');
fs.writeFileSync(outJsonPath, JSON.stringify(cleanedRoadmap, null, 2), 'utf8');
console.log('Saved master roadmap to:', outJsonPath, 'Size:', (fs.statSync(outJsonPath).size / (1024 * 1024)).toFixed(2), 'MB');

// Initialize publishing state if not exists
const statePath = path.join(__dirname, '../data/publishing-state.json');
if (!fs.existsSync(statePath)) {
  const initialState = {
    lastPublishedAt: null,
    totalPublishedCount: 0,
    dailyTarget: 3,
    publishedSlugs: [],
    history: []
  };
  fs.writeFileSync(statePath, JSON.stringify(initialState, null, 2), 'utf8');
  console.log('Initialized publishing-state.json');
}
