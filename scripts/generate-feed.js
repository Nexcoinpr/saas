const fs = require('fs');
const path = require('path');

const articlesPath = path.join(__dirname, '../src/data/published-articles.json');
const outputPath = path.join(__dirname, '../public/feed.xml');

if (!fs.existsSync(articlesPath)) {
  console.error('Articles not found at:', articlesPath);
  process.exit(1);
}

const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf8'));

const itemsXml = articles.slice(0, 30).map(a => {
  return `    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>https://www.saasinsider.co.uk${a.path}</link>
      <guid isPermaLink="true">https://www.saasinsider.co.uk${a.path}</guid>
      <pubDate>${new Date(a.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${a.excerpt}]]></description>
      <author>${a.author.name}</author>
      <category>${a.category}</category>
    </item>`;
}).join('\n');

const feedXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>SaaSInsider | Software Reviews &amp; Tech Playbooks</title>
    <link>https://www.saasinsider.co.uk</link>
    <description>Hands-on software reviews, verified SaaS benchmarks, and pricing playbooks.</description>
    <language>en-GB</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://www.saasinsider.co.uk/feed.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`;

fs.writeFileSync(outputPath, feedXml, 'utf8');
console.log('Successfully generated public/feed.xml with', Math.min(articles.length, 30), 'articles.');
