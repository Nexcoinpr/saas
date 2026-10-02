const fs = require('fs');
const path = require('path');

const { BANNED } = require('./banned-words.js');

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
