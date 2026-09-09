import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Analytics is reverse-proxied through /ingest so it is first-party and
  // survives ad blockers. These point at PostHog's US cloud; on EU cloud the
  // hosts become eu-assets.i.posthog.com and eu.i.posthog.com.
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
