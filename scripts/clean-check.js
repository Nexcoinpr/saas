const fs = require('fs');
const path = require('path');

const BANNED = [
  "journey", "plethora", "multitude", "testament", "accordingly", "actionable", "adept",
  "aforementioned", "agile", "ai-powered", "aligns", "align", "amplify", "arduous",
  "at the end of the day", "augment", "bandwidth", "based on the information",
  "best practices", "blockchain", "burgeoning", "cannot be overstated", "captivating",
  "change management", "cloud-based", "cognizant", "collaborative", "commendable",
  "competitive landscape", "complexity", "conceptualize", "consequently", "considerable",
  "continuous improvement", "corporate social responsibility", "cost optimization",
  "craft", "crafting", "critical", "crucial", "customer loyalty", "customer satisfaction",
  "customer-centric", "cutting-edge", "cutting edge", "data-driven", "decision-makers",
  "deep dive", "deep understanding", "deliverables", "delve", "delved", "delving",
  "digital realm", "digital transformation", "disruptive", "domain expertise", "downtime",
  "driving innovation", "dynamic", "efficiency", "elevate", "elevated", "embark",
  "emerging technologies", "empower", "empowering", "enable", "enables", "enabling",
  "enhance", "enhancing", "enlightening", "enriches", "entails", "entrenched",
  "epicenter", "essential", "essentially", "esteemed", "ever-evolving", "ever-changing",
  "excels", "exemplary", "expertise", "explore", "facilitate", "flourishing", "folks",
  "foray", "foster", "fostering", "fresh perspectives", "fundamental", "fundamentally",
  "furthermore", "future-proof", "game changer", "game-changer", "generally speaking",
  "given that", "glean", "going forward", "golden ticket", "governance framework",
  "granular", "granularly", "groundbreaking", "growing recognition", "herein",
  "heretofore", "high-level", "hinder", "holistic", "holistically", "however",
  "impactful", "implementation strategy", "implications", "important to consider",
  "in a sea of", "in brief", "in conclusion", "in light of", "in other words",
  "in the realm of", "in today", "industry best practices", "influencers",
  "innovative", "innovation", "insights into", "invaluable", "it is important to note",
  "it is worth noting", "iteration", "kaleidoscope", "key takeaways", "knowledge transfer",
  "landscape", "latency", "leverage", "leveraging", "linchpin", "low-level",
  "manifold", "market penetration", "market trends", "maximize", "milestone",
  "mission-critical", "moreover", "moving forward", "multifaceted", "navigating",
  "navigate", "nevertheless", "new heights", "next-generation", "notable",
  "notwithstanding", "nuanced", "nuance", "numerous", "offboarding", "offerings",
  "on the cutting edge", "onboarding", "operational efficiency", "operational excellence",
  "optimize", "optimizing", "pain point", "paradigm", "paradigm shift", "paramount",
  "pervasive", "pivotal", "plethora", "preemptively", "problem solving",
  "process optimization", "profitability", "profound", "promote", "pronged",
  "rapidly evolving", "reaching new heights", "realm", "recognize", "relentless",
  "remarkable", "resonate", "resonates", "resource allocation", "resource optimization",
  "revenue growth", "risk mitigation", "roadmap", "robust", "root cause analysis",
  "scalable", "seamless", "shed light", "showcasing", "significant", "significantly",
  "simply put", "solution development", "specifically", "stakeholders", "state-of-the-art",
  "strategic alignment", "streamline", "streamlined", "strive", "subject matter experts",
  "substantial", "substantially", "sustainability", "synergy", "synergies", "systemic",
  "tailor", "tailored", "tapestry", "tco", "tertiary", "that being said", "the future of",
  "the next frontier", "the power of", "the road ahead", "thereby", "therefore",
  "therein", "thereof", "thought leaders", "thought leadership", "thought-provoking",
  "thrive", "thriving", "throughput", "thus", "time optimization", "to clarify",
  "to demonstrate", "to elevate", "to elucidate", "to emphasize", "to empower",
  "to enhance", "to enrich", "to exemplify", "to facilitate", "to furnish",
  "to highlight", "to illustrate", "to maximize", "to provide", "to reiterate",
  "to shed light on", "to showcase", "to summarize", "to thrive", "to underscore",
  "to unleash", "to unlock", "touchpoint", "transformation", "transformative",
  "transforming", "treasure trove", "ultimately", "uncharted waters", "undeniable",
  "underscores", "undoubtedly", "unleash", "unlock", "unlocking", "unparalleled",
  "uptime", "user engagement", "user experience", "user feedback", "user interface",
  "utilize", "utilizing", "utilization", "utmost", "valuable", "value proposition",
  "value-added", "various", "vast", "vibrant", "vital", "well-crafted", "whilst",
  "widely recognized", "with regards to", "arena", "arsenal", "bombard", "bloated",
  "boosts", "brain dump", "break the bank", "breeze", "buzz", "cadence", "captivate",
  "catapult", "chaos into clarity", "comes to the rescue", "compelling", "cornerstone",
  "convey", "cutting edge", "digital age", "digital world", "drowning",
  "elephant in the room", "entrusting", "ever wondered", "eye roll", "fast-paced",
  "fast paced world", "fantastic", "falls flat", "fluff", "formidable", "gaslights",
  "grabs people", "hard truth", "harness", "here's the deal", "here's the truth",
  "hiccups", "hits different", "hits home", "hits a wall", "honest text", "hone",
  "imaginative", "in a world", "in the era of", "in the world of", "incorporating",
  "is all about", "juggling", "kicker", "let's dive in", "magic", "marvelous",
  "mind blowing", "miss the mark", "moves the needle", "nailing down", "necessitating",
  "nimble", "nugget", "nutshell", "perfect storm", "picture this", "powerful tool",
  "punchline", "quiet acceptance", "raves", "real deal", "revolutionize", "roll your eyes",
  "scrappy", "scroll stopper", "secret sauce", "secret weapon", "saves the day", "sifting",
  "skyrocket", "sneak peek", "stall", "stay tuned", "stellar", "supercharge", "surge",
  "tightrope", "trailblazer", "turbocharge", "uncover", "unveil", "welcome to the world", "whip"
];

function scanDir(dir, fileList = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (item === 'node_modules' || item === '.next' || item === '.git') continue;
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      scanDir(full, fileList);
    } else if (/\.(ts|tsx|txt|md|json)$/.test(item) && !item.endsWith('package-lock.json')) {
      fileList.push(full);
    }
  }
  return fileList;
}

const files = scanDir('./src').concat(scanDir('./public'));
const results = [];

for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    for (const b of BANNED) {
      const reg = new RegExp(`\\b${b.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
      if (reg.test(line)) {
        results.push({ file: f, line: idx + 1, word: b, text: line.trim() });
      }
    }
  });
}

// Author integrity check: Ensure all articles strictly use registered authors from src/data/authors.ts
const VALID_AUTHORS = ['sarah-jenkins', 'alex-rivera', 'maya-lin', 'liam-cooper'];
const publishedArticlesPath = path.join(__dirname, '../src/data/published-articles.json');
if (fs.existsSync(publishedArticlesPath)) {
  const publishedArticles = JSON.parse(fs.readFileSync(publishedArticlesPath, 'utf8'));
  publishedArticles.forEach((article, idx) => {
    const authorSlug = article.author ? (article.author.slug || article.author.id) : null;
    const authorName = article.author ? article.author.name : null;
    if (!VALID_AUTHORS.includes(authorSlug) || authorName === 'Liam Vance' || authorSlug === 'liam-vance') {
      results.push({
        file: 'src/data/published-articles.json',
        line: idx + 1,
        word: `invalid-author: ${authorName} (${authorSlug})`,
        text: `Article "${article.slug}" has unauthorized author "${authorName}"`
      });
    }
  });
}

console.log(`Found ${results.length} occurrences across files.`);
results.forEach(r => {
  console.log(`${r.file}:${r.line} [${r.word}] -> ${r.text.substring(0, 100)}`);
});

if (results.length > 0) {
  process.exit(1);
}
