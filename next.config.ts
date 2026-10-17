import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/productivity/asana-review",
        destination: "/reviews/asana-review",
        permanent: true,
      },
      {
        source: "/automation/zapier-review",
        destination: "/reviews/zapier-review",
        permanent: true,
      },
      {
        source: "/:category(productivity|automation|business|software|ai-tools|saas)/:slug((?:remote-review|vidyard-review|copper-review|asana-review|perplexity-review|zapier-review))",
        destination: "/reviews/:slug",
        permanent: true,
      },
      {
        source: "/:category(productivity|automation|business|software|ai-tools|saas)/:slug((?:pipedrive-vs-convertkit|1password-vs-lastpass|asana-vs-make|activecampaign-vs-zendesk))",
        destination: "/comparisons/:slug",
        permanent: true,
      },
      // 301 SEO redirects for removed articles to protect ranking & eliminate 404s (SI-01)
      {
        source: "/reviews/cheapest-vpn-software-for-manufacturing",
        destination: "/reviews",
        permanent: true,
      },
      {
        source: "/:category/:slug(github-copilot-vs-loom|todoist-vs-debezium|quickbooks-vs-brevo|discord-vs-brex|talend-vs-copy-ai|deel-vs-lastpass|crisp-vs-supabase|shopify-vs-1password|copper-vs-sproutsocial|cursor-vs-copper|replit-vs-zoho-books|slite-vs-dbt|chargebee-vs-zoho-people|aircall-vs-klaviyo|adobe-express-vs-posthog|matillion-vs-hibob|workday-vs-beehiiv|substack-vs-crisp|intercom-vs-gitlab|smartsheet-vs-dbt|freshsales-vs-gorgias|gemini-vs-recurly|bolt-new-vs-helpscout|zapier-vs-perplexity)",
        destination: "/comparisons",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
