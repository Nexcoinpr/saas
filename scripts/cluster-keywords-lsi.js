const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

console.log('Loading downloaded_keywords.xlsx...');
const wb = xlsx.readFile('downloaded_keywords.xlsx');
const ws = wb.Sheets['Top Quick-Wins (Low KD)'];
const rawRows = xlsx.utils.sheet_to_json(ws);
console.log('Total raw rows read:', rawRows.length);

// Step 1: Deduplicate identical keywords
const uniqueRowsMap = new Map();
for (const r of rawRows) {
  const kw = (r.Keyword || '').trim();
  if (!kw) continue;
  const lower = kw.toLowerCase();
  if (!uniqueRowsMap.has(lower)) {
    uniqueRowsMap.set(lower, r);
  } else {
    // If duplicate exists, keep the one with higher volume or valid data
    const existing = uniqueRowsMap.get(lower);
    if ((r.Volume || 0) > (existing.Volume || 0)) {
      uniqueRowsMap.set(lower, r);
    }
  }
}
console.log('Deduplicated unique keywords:', uniqueRowsMap.size);

// Step 2: Cluster keywords by semantic entity / intent
// We will group inverted comparisons (e.g. Asana vs Monday and Monday vs Asana)
const clusterMap = new Map();

for (const [lowerKw, r] of uniqueRowsMap.entries()) {
  const rawKw = r.Keyword.trim();
  let clusterKey = '';
  let clusterType = 'general';

  // Check if it's a comparison "A vs B"
  const vsMatch = rawKw.match(/^(.+?)\s+vs\.?\s+(.+)$/i);
  if (vsMatch) {
    const p1 = vsMatch[1].trim();
    const p2 = vsMatch[2].trim();
    const sortedPair = [p1.toLowerCase(), p2.toLowerCase()].sort();
    clusterKey = 'COMPARE:' + sortedPair.join('__vs__');
    clusterType = 'comparison';
  } else if (/migrate\s+from\s+(.+?)\s+to\s+(.+)/i.test(rawKw)) {
    const migMatch = rawKw.match(/migrate\s+from\s+(.+?)\s+to\s+(.+)/i);
    const p1 = migMatch[1].trim().toLowerCase();
    const p2 = migMatch[2].trim().toLowerCase();
    clusterKey = 'MIGRATE:' + p1 + '__to__' + p2;
    clusterType = 'migration';
  } else if (/(.+?)\s+integration\s+with\s+(.+)/i.test(rawKw)) {
    const intMatch = rawKw.match(/(.+?)\s+integration\s+with\s+(.+)/i);
    const p1 = intMatch[1].trim().toLowerCase();
    const p2 = intMatch[2].trim().toLowerCase();
    const sortedPair = [p1, p2].sort();
    clusterKey = 'INTEGRATE:' + sortedPair.join('__with__');
    clusterType = 'integration';
  } else if (/alternatives\s+and\s+competitors/i.test(rawKw)) {
    const altMatch = rawKw.match(/(.+?)\s+alternatives\s+and\s+competitors/i);
    clusterKey = 'REVIEW_ALT:' + (altMatch ? altMatch[1].trim().toLowerCase() : rawKw.toLowerCase());
    clusterType = 'review';
  } else if (/review\s+2026/i.test(rawKw)) {
    const revMatch = rawKw.match(/(.+?)\s+review\s+2026/i);
    clusterKey = 'REVIEW_ALT:' + (revMatch ? revMatch[1].trim().toLowerCase() : rawKw.toLowerCase());
    clusterType = 'review';
  } else {
    // Topic-based clustering
    clusterKey = (r.Topic || 'General') + ':' + lowerKw;
    clusterType = (r.TargetTemplate || 'informational');
  }

  if (!clusterMap.has(clusterKey)) {
    clusterMap.set(clusterKey, {
      clusterKey,
      clusterType,
      primaryRecord: r,
      allKeywords: []
    });
  }

  const cluster = clusterMap.get(clusterKey);
  cluster.allKeywords.push(r);
  // Pick primary keyword as the one with highest search volume
  if ((r.Volume || 0) > (cluster.primaryRecord.Volume || 0)) {
    cluster.primaryRecord = r;
  }
}

console.log('Total semantic article clusters created:', clusterMap.size);

// Helper function to generate rich LSI / Semantic Keywords
function generateLsiKeywords(primaryKw, clusterType, allKws, category) {
  const lsiSet = new Set();

  // Add any existing keywords in the cluster that are different from primary
  for (const item of allKws) {
    if (item.Keyword.toLowerCase() !== primaryKw.toLowerCase()) {
      lsiSet.add(item.Keyword);
    }
  }

  const vsMatch = primaryKw.match(/^(.+?)\s+vs\.?\s+(.+)$/i);
  if (vsMatch) {
    const a = vsMatch[1].trim();
    const b = vsMatch[2].trim();
    lsiSet.add(`${b} vs ${a}`);
    lsiSet.add(`${a} vs ${b} pricing`);
    lsiSet.add(`which is better ${a} or ${b}`);
    lsiSet.add(`${a} vs ${b} features`);
    lsiSet.add(`${a} vs ${b} for small teams`);
    lsiSet.add(`${a} alternatives`);
    lsiSet.add(`${b} alternatives`);
    lsiSet.add(`${a} vs ${b} pros and cons`);
    lsiSet.add(`is ${a} better than ${b}`);
  } else if (/review/i.test(primaryKw) || /alternatives/i.test(primaryKw)) {
    const cleanTool = primaryKw.replace(/review.*|alternatives.*/i, '').trim();
    lsiSet.add(`${cleanTool} pricing 2026`);
    lsiSet.add(`${cleanTool} pros and cons`);
    lsiSet.add(`${cleanTool} hidden fees`);
    lsiSet.add(`is ${cleanTool} worth it`);
    lsiSet.add(`best ${cleanTool} alternatives`);
    lsiSet.add(`${cleanTool} features walkthrough`);
    lsiSet.add(`${cleanTool} customer ratings`);
  } else if (/migrate/i.test(primaryKw)) {
    const migMatch = primaryKw.match(/migrate\s+from\s+(.+?)\s+to\s+(.+)/i);
    if (migMatch) {
      const a = migMatch[1].trim();
      const b = migMatch[2].trim();
      lsiSet.add(`how to export data from ${a}`);
      lsiSet.add(`import data into ${b}`);
      lsiSet.add(`${a} to ${b} migration checklist`);
      lsiSet.add(`switching from ${a} to ${b}`);
      lsiSet.add(`${a} vs ${b} migration steps`);
    }
  } else if (/integration/i.test(primaryKw)) {
    const intMatch = primaryKw.match(/(.+?)\s+integration\s+with\s+(.+)/i);
    if (intMatch) {
      const a = intMatch[1].trim();
      const b = intMatch[2].trim();
      lsiSet.add(`how to connect ${a} to ${b}`);
      lsiSet.add(`${a} and ${b} webhook setup`);
      lsiSet.add(`sync data between ${a} and ${b}`);
      lsiSet.add(`${a} ${b} automation workflow`);
    }
  } else if (/calculate|metric|formula/i.test(primaryKw)) {
    lsiSet.add(`${primaryKw} formula`);
    lsiSet.add(`${primaryKw} example and benchmarks`);
    lsiSet.add(`how to improve ${primaryKw.replace(/how to calculate /i, '')}`);
    lsiSet.add(`saas metrics calculation`);
  } else {
    lsiSet.add(`${primaryKw} 2026 guide`);
    lsiSet.add(`best practices for ${primaryKw}`);
    lsiSet.add(`${primaryKw} tips for teams`);
    lsiSet.add(`${primaryKw} checklist`);
  }

  // Filter out any duplicate of primaryKw
  lsiSet.delete(primaryKw);
  return Array.from(lsiSet).slice(0, 8).join('; ');
}

// Helper to generate Title
function generateArticleTitle(primaryKw, category, template) {
  const vsMatch = primaryKw.match(/^(.+?)\s+vs\.?\s+(.+)$/i);
  if (vsMatch) {
    return `${vsMatch[1].trim()} vs ${vsMatch[2].trim()} (2026): Which Software Wins for Your Team?`;
  }
  if (/alternatives/i.test(primaryKw)) {
    const tool = primaryKw.replace(/alternatives.*competitors/i, '').trim();
    return `Top 10 ${tool} Alternatives & Competitors in 2026 (Tested & Ranked)`;
  }
  if (/review/i.test(primaryKw)) {
    const tool = primaryKw.replace(/review.*/i, '').trim();
    return `${tool} Review (2026): Hands-On Testing, Pricing & Verdict`;
  }
  if (/migrate/i.test(primaryKw)) {
    return `${primaryKw}: Complete Step-by-Step Migration Guide`;
  }
  if (/integration/i.test(primaryKw)) {
    return `${primaryKw}: Complete Setup & Workflow Guide`;
  }
  if (/how to/i.test(primaryKw)) {
    return `${primaryKw}: Practical Guide & Best Formulas`;
  }
  if (/best/i.test(primaryKw)) {
    return `${primaryKw} in 2026: Hands-On Evaluation`;
  }
  return `${primaryKw}: Complete In-Depth Guide (2026)`;
}

// Helper to generate H2 Outline
function generateOutline(primaryKw, template) {
  const vsMatch = primaryKw.match(/^(.+?)\s+vs\.?\s+(.+)$/i);
  if (vsMatch) {
    const a = vsMatch[1].trim();
    const b = vsMatch[2].trim();
    return `H2: Quick Verdict (${a} vs ${b}) | H2: Detailed Feature Breakdown | H2: Pricing & Seat Economics | H2: Ease of Use & Learning Curve | H2: Final Buying Recommendation`;
  }
  if (/review|alternatives/i.test(template) || /review|alternatives/i.test(primaryKw)) {
    return `H2: Executive Summary & Ratings | H2: Standout Features Tested | H2: Pricing Breakdown & Hidden Fees | H2: Pros & Cons | H2: Top Alternatives | H2: The Editorial Verdict`;
  }
  if (/how-to|migration|integration/i.test(template) || /migrate|integration|how to/i.test(primaryKw)) {
    return `H2: Prerequisites & Required Access | H2: Step 1: Exporting & Preparing Data | H2: Step 2: Mapping Fields & Connectors | H2: Step 3: Verification & Sandbox Testing | H2: Troubleshooting Common Pitfalls`;
  }
  return `H2: Understanding the Concept | H2: Key Components & Formulas | H2: Industry Benchmarks for 2026 | H2: Step-by-Step Implementation | H2: Common Mistakes to Avoid`;
}

console.log('Transforming clusters into structured article roadmap...');
const articleRoadmap = [];
let counter = 1;

for (const [clusterKey, data] of clusterMap.entries()) {
  const p = data.primaryRecord;
  const primaryKw = p.Keyword.trim();
  const lsi = generateLsiKeywords(primaryKw, data.clusterType, data.allKeywords, p.Category);
  const title = generateArticleTitle(primaryKw, p.Category, p.TargetTemplate);
  const outline = generateOutline(primaryKw, p.TargetTemplate);
  
  // Calculate total volume across cluster
  const totalClusterVol = data.allKeywords.reduce((s, k) => s + (k.Volume || 0), 0);
  const avgKd = Math.round(data.allKeywords.reduce((s, k) => s + (k.KD || 0), 0) / data.allKeywords.length);

  let priority = 'Standard';
  if (avgKd <= 25 && totalClusterVol >= 1000) {
    priority = 'Tier 1 (High Quick-Win)';
  } else if (avgKd <= 35 && totalClusterVol >= 2000) {
    priority = 'Tier 2 (High Potential)';
  } else if (totalClusterVol >= 8000) {
    priority = 'Pillar Focus (High Volume)';
  } else {
    priority = 'Supporting Long-Tail';
  }

  articleRoadmap.push({
    ArticleID: `ART-${String(counter++).padStart(6, '0')}`,
    PrimaryKeyword: primaryKw,
    LSI_Semantic_Keywords: lsi,
    SuggestedArticleTitle: title,
    SuggestedH2Outline: outline,
    SearchIntent: p.SearchIntent || 'Commercial',
    TargetTemplate: p.TargetTemplate || 'comparison',
    Category: p.Category || 'Other',
    Topic: p.Topic || 'Software Comparison',
    MonthlyVolume: totalClusterVol,
    KeywordDifficulty_KD: avgKd,
    Priority: priority,
    SuggestedSlug: p.SuggestedSlug || primaryKw.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  });
}

console.log('Total articles in roadmap:', articleRoadmap.length);

// Sort roadmap: High Priority Quick-Wins & High Volume first!
articleRoadmap.sort((a, b) => {
  // Sort by priority rank then volume
  const rank = {
    'Tier 1 (High Quick-Win)': 1,
    'Tier 2 (High Potential)': 2,
    'Pillar Focus (High Volume)': 3,
    'Supporting Long-Tail': 4,
    'Standard': 5
  };
  const rA = rank[a.Priority] || 9;
  const rB = rank[b.Priority] || 9;
  if (rA !== rB) return rA - rB;
  return b.MonthlyVolume - a.MonthlyVolume;
});

// Sheet 2: Top Quick-Wins (KD <= 35)
const quickWins = articleRoadmap.filter(a => a.KeywordDifficulty_KD <= 35 && a.MonthlyVolume >= 1000);
console.log('Total Quick-Wins identified:', quickWins.length);

// Sheet 3: Category Summaries
const catSummary = {};
for (const a of articleRoadmap) {
  if (!catSummary[a.Category]) {
    catSummary[a.Category] = {
      Category: a.Category,
      TotalArticles: 0,
      TotalMonthlyVolume: 0,
      TotalKD: 0
    };
  }
  catSummary[a.Category].TotalArticles++;
  catSummary[a.Category].TotalMonthlyVolume += a.MonthlyVolume;
  catSummary[a.Category].TotalKD += Number(a.KeywordDifficulty_KD) || 0;
}

const catSummaryList = Object.values(catSummary).map(c => ({
  Category: c.Category,
  TotalArticlesPlanned: c.TotalArticles,
  TotalCombinedVolume: c.TotalMonthlyVolume,
  AverageKD: Math.round(c.TotalKD / c.TotalArticlesPlanned)
})).sort((a, b) => b.TotalCombinedVolume - a.TotalCombinedVolume);

console.log('Writing Excel workbooks...');
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

// 1. High-Priority Focused Workbook (Top 5,000 Actionable Articles, quick to open)
const quickWb = xlsx.utils.book_new();
const top5000QuickWins = quickWins.slice(0, 5000);
const wsQuick = xlsx.utils.json_to_sheet(top5000QuickWins);
xlsx.utils.book_append_sheet(quickWb, wsQuick, 'Top 5000 Quick-Wins (Low KD)');

const wsCatSummary = xlsx.utils.json_to_sheet(catSummaryList);
xlsx.utils.book_append_sheet(quickWb, wsCatSummary, 'Category Strategy');

const quickExcelPath = path.join(publicDir, 'SaaSInsider-High-Priority-QuickWins-LSI.xlsx');
xlsx.writeFile(quickWb, quickExcelPath);
console.log('Saved High-Priority Excel file to:', quickExcelPath, 'Size:', fs.statSync(quickExcelPath).size);

const quickCsvPath = path.join(publicDir, 'SaaSInsider-High-Priority-QuickWins-LSI.csv');
const quickCsvContent = xlsx.utils.sheet_to_csv(wsQuick);
fs.writeFileSync(quickCsvPath, quickCsvContent, 'utf8');
console.log('Saved High-Priority CSV file to:', quickCsvPath, 'Size:', fs.statSync(quickCsvPath).size);

// 2. Master Full Workbook
const newWb = xlsx.utils.book_new();
const topRoadmap = articleRoadmap.slice(0, 30000);
const ws1 = xlsx.utils.json_to_sheet(topRoadmap);
xlsx.utils.book_append_sheet(newWb, ws1, 'Article Roadmap (Top 30k)');

const ws2 = xlsx.utils.json_to_sheet(quickWins.slice(0, 20000));
xlsx.utils.book_append_sheet(newWb, ws2, 'Top Quick-Wins (Low KD)');

xlsx.utils.book_append_sheet(newWb, wsCatSummary, 'Category Strategy');

const excelPath = path.join(publicDir, 'SaaSInsider-SEO-Keyword-Roadmap-LSI.xlsx');
xlsx.writeFile(newWb, excelPath);
console.log('Saved Master Excel file to:', excelPath, 'Size:', fs.statSync(excelPath).size);

const csvPath = path.join(publicDir, 'SaaSInsider-SEO-Keyword-Roadmap-LSI.csv');
const csvContent = xlsx.utils.sheet_to_csv(ws1);
fs.writeFileSync(csvPath, csvContent, 'utf8');
console.log('Saved Master CSV file to:', csvPath, 'Size:', fs.statSync(csvPath).size);

console.log('Done!');
