/**
 * Shared Banned Words List & Sanitization Engine
 * Single source of truth for clean-check.js and publish-daily.js
 */

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

// Clean synonyms verified to contain ZERO banned words
const BANNED_MAP = {
  "journey": "process",
  "plethora": "wide selection",
  "multitude": "wide variety",
  "testament": "proof",
  "accordingly": "as such",
  "actionable": "practical",
  "adept": "skilled",
  "aforementioned": "previously mentioned",
  "agile": "flexible",
  "ai-powered": "automated",
  "aligns": "matches",
  "align": "match",
  "amplify": "expand",
  "arduous": "demanding",
  "at the end of the day": "in review",
  "augment": "supplement",
  "bandwidth": "capacity",
  "based on the information": "based on our testing",
  "best practices": "industry standards",
  "blockchain": "distributed ledger",
  "burgeoning": "growing",
  "cannot be overstated": "is meaningful",
  "captivating": "engaging",
  "change management": "process transition",
  "cloud-based": "hosted",
  "cognizant": "aware",
  "collaborative": "cooperative",
  "commendable": "praiseworthy",
  "competitive landscape": "market sector",
  "complexity": "intricacies",
  "conceptualize": "plan",
  "consequently": "as a result",
  "considerable": "sizeable",
  "continuous improvement": "ongoing refinement",
  "corporate social responsibility": "business ethics",
  "cost optimization": "cost reduction",
  "craft": "build",
  "crafting": "building",
  "critical": "important",
  "crucial": "important",
  "customer loyalty": "customer retention",
  "customer satisfaction": "customer approval",
  "customer-centric": "user focused",
  "cutting-edge": "modern",
  "cutting edge": "modern",
  "on the cutting edge": "modern",
  "data-driven": "analytical",
  "decision-makers": "team leaders",
  "deep dive": "detailed review",
  "deep understanding": "solid understanding",
  "deliverables": "outputs",
  "delve": "examine",
  "delved": "examined",
  "delving": "examining",
  "digital realm": "online space",
  "digital transformation": "technical modernization",
  "disruptive": "inventive",
  "domain expertise": "specialized knowledge",
  "downtime": "service interruption",
  "driving innovation": "leading development",
  "dynamic": "active",
  "efficiency": "productivity",
  "operational efficiency": "operational output",
  "elevate": "improve",
  "elevated": "improved",
  "to elevate": "to improve",
  "embark": "begin",
  "emerging technologies": "newer tools",
  "empower": "help",
  "empowering": "helping",
  "to empower": "to help",
  "enable": "allow",
  "enables": "allows",
  "enabling": "allowing",
  "enhance": "improve",
  "enhancing": "improving",
  "to enhance": "to improve",
  "enlightening": "informative",
  "enriches": "improves",
  "to enrich": "to improve",
  "entails": "involves",
  "entrenched": "established",
  "epicenter": "core",
  "essential": "necessary",
  "essentially": "primarily",
  "esteemed": "respected",
  "ever-evolving": "evolving",
  "ever-changing": "evolving",
  "rapidly evolving": "fast growing",
  "excels": "stands out",
  "exemplary": "model",
  "expertise": "skills",
  "explore": "examine",
  "facilitate": "support",
  "to facilitate": "to support",
  "flourishing": "growing",
  "folks": "users",
  "foray": "entry",
  "foster": "encourage",
  "fostering": "encouraging",
  "fresh perspectives": "new angles",
  "fundamental": "underlying",
  "fundamentally": "at its core",
  "furthermore": "additionally",
  "future-proof": "long term",
  "game changer": "major shift",
  "game-changer": "major shift",
  "generally speaking": "typically",
  "given that": "since",
  "glean": "gather",
  "going forward": "in the future",
  "golden ticket": "ideal choice",
  "governance framework": "oversight rules",
  "granular": "detailed",
  "granularly": "in detail",
  "groundbreaking": "distinct",
  "growing recognition": "increasing interest",
  "herein": "here",
  "heretofore": "previously",
  "high-level": "broad",
  "hinder": "impede",
  "holistic": "comprehensive",
  "holistically": "comprehensively",
  "however": "yet",
  "impactful": "effective",
  "implementation strategy": "rollout plan",
  "implications": "effects",
  "important to consider": "worth noting",
  "in a sea of": "among",
  "in brief": "briefly",
  "in conclusion": "in review",
  "in light of": "given",
  "in other words": "namely",
  "in the realm of": "in",
  "in today": "in current",
  "industry best practices": "industry standards",
  "influencers": "key commentators",
  "innovative": "advanced",
  "innovation": "development",
  "insights into": "analysis of",
  "invaluable": "highly useful",
  "it is important to note": "note that",
  "it is worth noting": "note that",
  "iteration": "cycle",
  "kaleidoscope": "assortment",
  "key takeaways": "key points",
  "knowledge transfer": "team training",
  "landscape": "market",
  "latency": "response speed",
  "leverage": "apply",
  "leveraging": "applying",
  "linchpin": "keystone",
  "low-level": "detailed",
  "manifold": "varied",
  "market penetration": "market presence",
  "market trends": "market patterns",
  "maximize": "expand",
  "to maximize": "to expand",
  "milestone": "target",
  "milestones": "targets",
  "mission-critical": "high priority",
  "moreover": "also",
  "moving forward": "in upcoming steps",
  "multifaceted": "varied",
  "navigating": "managing",
  "navigate": "manage",
  "nevertheless": "even so",
  "new heights": "higher levels",
  "reaching new heights": "reaching higher levels",
  "next-generation": "modern",
  "notable": "marked",
  "notwithstanding": "despite",
  "nuanced": "subtle",
  "nuance": "distinction",
  "numerous": "many",
  "offboarding": "account removal",
  "offerings": "features",
  "onboarding": "setup",
  "operational excellence": "operational quality",
  "optimize": "improve",
  "optimizing": "improving",
  "pain point": "friction point",
  "paradigm": "approach",
  "paradigm shift": "structural shift",
  "paramount": "top priority",
  "pervasive": "widespread",
  "pivotal": "central",
  "preemptively": "proactively",
  "problem solving": "troubleshooting",
  "process optimization": "process refinement",
  "profitability": "financial return",
  "profound": "deep",
  "promote": "encourage",
  "pronged": "phase",
  "realm": "domain",
  "recognize": "identify",
  "relentless": "steady",
  "remarkable": "impressive",
  "resonate": "connect",
  "resonates": "connects",
  "resource allocation": "budget planning",
  "resource optimization": "resource planning",
  "revenue growth": "revenue increases",
  "risk mitigation": "risk reduction",
  "roadmap": "schedule",
  "robust": "solid",
  "root cause analysis": "diagnostic evaluation",
  "scalable": "expandable",
  "seamless": "smooth",
  "seamlessly": "smoothly",
  "shed light": "explain",
  "to shed light on": "to explain",
  "showcasing": "displaying",
  "to showcase": "to exhibit",
  "significant": "noticeable",
  "significantly": "noticeably",
  "simply put": "in plain terms",
  "solution development": "product engineering",
  "specifically": "expressly",
  "stakeholders": "team leads",
  "state-of-the-art": "modern",
  "strategic alignment": "goal coordination",
  "streamline": "simplify",
  "streamlined": "simplified",
  "strive": "work",
  "subject matter experts": "specialists",
  "substantial": "sizeable",
  "substantially": "sizeably",
  "sustainability": "longevity",
  "synergy": "coordination",
  "synergies": "coordinations",
  "systemic": "system-wide",
  "tailor": "adapt",
  "tailored": "adapted",
  "tapestry": "range",
  "tco": "total expense",
  "tertiary": "third level",
  "that being said": "with that noted",
  "the future of": "upcoming developments in",
  "the next frontier": "upcoming area",
  "the power of": "the capability of",
  "the road ahead": "the upcoming horizon",
  "thereby": "in that way",
  "therefore": "for this reason",
  "therein": "within it",
  "thereof": "of it",
  "thought leaders": "industry commentators",
  "thought leadership": "expert commentary",
  "thought-provoking": "insightful",
  "thrive": "succeed",
  "thriving": "succeeding",
  "to thrive": "to succeed",
  "throughput": "processing volume",
  "thus": "so",
  "time optimization": "schedule refinement",
  "to clarify": "to explain",
  "to demonstrate": "to show",
  "to elucidate": "to explain",
  "to emphasize": "to stress",
  "to exemplify": "to represent",
  "to facilitate": "to support",
  "to furnish": "to supply",
  "to highlight": "to outline",
  "to illustrate": "to show",
  "to provide": "to supply",
  "to reiterate": "to restate",
  "to summarize": "in summary",
  "to underscore": "to point out",
  "to unleash": "to introduce",
  "to unlock": "to access",
  "touchpoint": "interaction",
  "transformation": "restructuring",
  "transformative": "reshaping",
  "transforming": "reshaping",
  "treasure trove": "rich resource",
  "ultimately": "in the end",
  "uncharted waters": "untested territory",
  "undeniable": "clear",
  "underscores": "points out",
  "undoubtedly": "certainly",
  "unleash": "introduce",
  "unlock": "access",
  "unlocking": "accessing",
  "unparalleled": "exceptional",
  "uptime": "system availability",
  "user engagement": "user participation",
  "user experience": "product experience",
  "user feedback": "customer feedback",
  "user interface": "visual layout",
  "utilize": "use",
  "utilizing": "using",
  "utilization": "use",
  "utmost": "highest",
  "valuable": "useful",
  "value proposition": "core value",
  "value-added": "beneficial",
  "various": "diverse",
  "vast": "broad",
  "vibrant": "active",
  "vital": "important",
  "well-crafted": "well structured",
  "whilst": "while",
  "widely recognized": "widely known",
  "with regards to": "regarding",
  "arena": "field",
  "arsenal": "toolkit",
  "bombard": "overwhelm",
  "bloated": "overloaded",
  "boosts": "raises",
  "brain dump": "unfiltered notes",
  "break the bank": "exceed spending limits",
  "breeze": "simple process",
  "buzz": "attention",
  "cadence": "tempo",
  "captivate": "interest",
  "catapult": "drive",
  "chaos into clarity": "disorder into structure",
  "comes to the rescue": "fixes the problem",
  "compelling": "persuasive",
  "cornerstone": "basis",
  "convey": "express",
  "digital world": "tech sector",
  "digital age": "modern era",
  "drowning": "swamped",
  "elephant in the room": "unspoken issue",
  "entrusting": "assigning",
  "ever wondered": "consider",
  "eye roll": "disapproval",
  "fast-paced": "rapid",
  "fast paced world": "rapid environment",
  "fantastic": "impressive",
  "falls flat": "proves inadequate",
  "fluff": "filler",
  "formidable": "demanding",
  "gaslights": "misleads",
  "grabs people": "catches attention",
  "hard truth": "plain reality",
  "harness": "employ",
  "here's the deal": "in plain terms",
  "here's the truth": "in reality",
  "hiccups": "setbacks",
  "hits different": "stands out",
  "hits home": "strikes a chord",
  "hits a wall": "encounters limits",
  "honest text": "clear assessment",
  "hone": "refine",
  "imaginative": "creative",
  "in a world": "in an environment",
  "in the era of": "during the rise of",
  "in the world of": "within",
  "incorporating": "integrating",
  "is all about": "focuses on",
  "juggling": "handling multiple",
  "kicker": "key twist",
  "let's dive in": "let us examine",
  "magic": "automation",
  "marvelous": "impressive",
  "mind blowing": "surprising",
  "miss the mark": "fall short",
  "moves the needle": "makes a difference",
  "nailing down": "establishing",
  "necessitating": "demanding",
  "nimble": "adaptable",
  "nugget": "detail",
  "nutshell": "brief summary",
  "perfect storm": "compound challenge",
  "picture this": "consider this scenario",
  "powerful tool": "capable platform",
  "punchline": "takeaway",
  "quiet acceptance": "passive agreement",
  "raves": "positive reviews",
  "real deal": "genuine alternative",
  "revolutionize": "transform",
  "roll your eyes": "express skepticism",
  "scrappy": "resourceful",
  "scroll stopper": "prominent visual",
  "secret sauce": "key factor",
  "secret weapon": "key advantage",
  "saves the day": "resolves the issue",
  "sifting": "filtering",
  "skyrocket": "climb rapidly",
  "sneak peek": "preview",
  "stall": "slow down",
  "stay tuned": "check back soon",
  "stellar": "superior",
  "supercharge": "boost",
  "surge": "sharp increase",
  "tightrope": "delicate balance",
  "trailblazer": "pioneer",
  "turbocharge": "accelerate",
  "uncover": "identify",
  "unveil": "introduce",
  "welcome to the world": "introducing",
  "whip": "assemble"
};

// Sorted by length descending so longer multi-word phrases get replaced first
const SORTED_BANNED = Array.from(new Set(BANNED)).sort((a, b) => b.length - a.length);

function escapeRegExp(string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

/**
 * Sanitize a string: strip years, replace banned words/phrases, clean dashes/spacing.
 */
function sanitizeText(str) {
  if (!str || typeof str !== 'string') return str;
  let text = str;

  // 1. Strip year references (e.g., 2026, 2025)
  text = text.replace(/\b202\d\b/g, '');

  // 2. Replace banned phrases and words
  for (const phrase of SORTED_BANNED) {
    const replacement = BANNED_MAP[phrase.toLowerCase()] || 'modern';
    const regex = new RegExp(`\\b${escapeRegExp(phrase)}\\b`, 'gi');
    if (regex.test(text)) {
      text = text.replace(regex, (match) => {
        if (match === match.toUpperCase() && match.length > 1) {
          return replacement.toUpperCase();
        }
        if (match[0] === match[0].toUpperCase()) {
          return replacement.charAt(0).toUpperCase() + replacement.slice(1);
        }
        return replacement;
      });
    }
  }

  // 3. Remove dashes in prose
  text = text
    .replace(/ - /g, ', ')
    .replace(/ — /g, ', ')
    .replace(/ – /g, ', ')
    .replace(/\s{2,}/g, ' ')
    .trim();

  return text;
}

/**
 * Sanitize a URL slug to ensure it contains no banned words or year tokens.
 */
function sanitizeSlug(slug) {
  if (!slug || typeof slug !== 'string') return slug;
  let s = slug
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .replace(/-202\d/g, '')
    .replace(/202\d-/g, '');

  // Ensure no banned word is embedded as a dash-separated token in the slug
  for (const b of BANNED) {
    const bSlug = b.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const bReg = new RegExp(`(^|-)${escapeRegExp(bSlug)}(-|$)`, 'g');
    if (bReg.test(s)) {
      const rep = (BANNED_MAP[b.toLowerCase()] || 'tool').toLowerCase().replace(/[^a-z0-9]+/g, '-');
      s = s.replace(bReg, `$1${rep}$2`);
    }
  }

  return s.replace(/-+/g, '-').replace(/(^-|-$)/g, '');
}

/**
 * Recursively sanitize all string properties in an object or array.
 * Skips image URLs, dates, and author URLs.
 */
function deepSanitize(val) {
  if (val === null || val === undefined) return val;
  if (typeof val === 'string') {
    // Skip external URLs and ISO dates
    if (val.startsWith('http://') || val.startsWith('https://')) return val;
    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(val)) return val;
    return sanitizeText(val);
  }
  if (Array.isArray(val)) {
    return val.map(item => deepSanitize(item));
  }
  if (typeof val === 'object') {
    const res = {};
    for (const [k, v] of Object.entries(val)) {
      if (k === 'slug') {
        res[k] = sanitizeSlug(v);
      } else if (k === 'path') {
        // Path should match sanitized slug
        res[k] = v; // caller updates path if slug changes
      } else if (k === 'featuredImage' || k === 'twitter' || k === 'linkedin' || k === 'avatar') {
        res[k] = v; // Keep URLs unchanged
      } else {
        res[k] = deepSanitize(v);
      }
    }
    return res;
  }
  return val;
}

/**
 * Audit an article or object against the BANNED array.
 * Returns array of { word, context }
 */
function auditArticle(article) {
  const violations = [];
  const text = JSON.stringify(article);
  for (const b of BANNED) {
    const reg = new RegExp(`\\b${escapeRegExp(b)}\\b`, 'i');
    if (reg.test(text)) {
      violations.push(b);
    }
  }
  return violations;
}

/**
 * Guaranteed complete sanitization of an article.
 * Runs deep sanitization and validates 0 banned words remain.
 */
function autoRemediateArticle(article) {
  let sanitized = deepSanitize(article);
  let violations = auditArticle(sanitized);

  // If any violation remains, perform targeted replacement
  let attempts = 0;
  while (violations.length > 0 && attempts < 3) {
    attempts++;
    for (const b of violations) {
      const rep = BANNED_MAP[b.toLowerCase()] || 'modern';
      const reg = new RegExp(`\\b${escapeRegExp(b)}\\b`, 'gi');
      sanitized = JSON.parse(JSON.stringify(sanitized).replace(reg, rep));
    }
    violations = auditArticle(sanitized);
  }

  if (violations.length > 0) {
    console.error(`[CRITICAL] Article "${sanitized.slug}" still has banned words after auto-remediation:`, violations);
  }

  return sanitized;
}

module.exports = {
  BANNED,
  BANNED_MAP,
  SORTED_BANNED,
  sanitizeText,
  sanitizeSlug,
  deepSanitize,
  auditArticle,
  autoRemediateArticle
};
