/**
 * Google Indexing API / Search Console Fast Submission Script
 * Submits published article URLs directly to search engines for rapid crawling.
 *
 * Usage:
 *   1. Direct IndexNow (free, instant, supported by Bing, Yandex, Seznam & aggregators):
 *      node scripts/submit-indexing.js --indexnow
 *   2. Google Service Account (if GOOGLE_APPLICATION_CREDENTIALS / service_account.json provided):
 *      node scripts/submit-indexing.js --google
 *   3. Auto (submits latest 5 published URLs via IndexNow + outputs Google Search Console list):
 *      node scripts/submit-indexing.js
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.saasinsider.co.uk';
const publishedJsonPath = path.join(__dirname, '../src/data/published-articles.json');

if (!fs.existsSync(publishedJsonPath)) {
  console.error('[Indexing] Error: published-articles.json not found.');
  process.exit(1);
}

const articles = JSON.parse(fs.readFileSync(publishedJsonPath, 'utf8'));
const latestArticles = articles.slice(-5);
const urlsToSubmit = latestArticles.map(a => `${SITE_URL.replace(/\/$/, '')}${a.path}`);

console.log('====================================================');
console.log('[Indexing Script] Active Site URL:', SITE_URL);
console.log(`[Indexing Script] Found ${articles.length} total published articles.`);
console.log(`[Indexing Script] Preparing fast index submission for ${urlsToSubmit.length} latest URLs:`);
urlsToSubmit.forEach((u, i) => console.log(`  ${i + 1}. ${u}`));
console.log('====================================================\n');

// 1. IndexNow Submission (Instant Ping for Search Engines)
async function submitIndexNow() {
  const host = new URL(SITE_URL).host;
  const key = process.env.INDEXNOW_KEY || 'saasinsider-indexing-key';
  const endpoint = 'https://api.indexnow.org/indexnow';

  const payload = {
    host,
    key,
    keyLocation: `${SITE_URL.replace(/\/$/, '')}/${key}.txt`,
    urlList: urlsToSubmit
  };

  try {
    console.log(`[IndexNow] Sending ${urlsToSubmit.length} URLs to IndexNow API (${endpoint})...`);
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload)
    });
    console.log(`[IndexNow] Response Status: ${res.status} ${res.statusText}`);
    if (res.status === 200 || res.status === 202) {
      console.log('[IndexNow] ✓ URLs submitted successfully for rapid indexation!');
    } else {
      console.log('[IndexNow] Notice: IndexNow returned status', res.status, '(API key file can be placed in /public for verified quota).');
    }
  } catch (err) {
    console.warn('[IndexNow] Ping warning (non-fatal):', err.message);
  }
}

// 2. Google Search Console Sitemap & URL list generation
function generateSitemapPing() {
  const sitemapUrl = `${SITE_URL.replace(/\/$/, '')}/sitemap.xml`;
  console.log('[Google Ping] Recommended GSC Ping command or browser visit:');
  console.log(`  https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
}

// Execute
(async () => {
  await submitIndexNow();
  generateSitemapPing();
  console.log('\n[Indexing Script] Completed.');
})();
