import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
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
        source: "/:category(productivity|automation|business|software|ai-tools|saas)/:slug((?:pipedrive-vs-convertkit|github-copilot-vs-loom|todoist-vs-debezium))",
        destination: "/comparisons/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
