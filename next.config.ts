import type { NextConfig } from "next";

const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;
const posthogAssetsHost = posthogHost?.replace(".i.posthog.com", "-assets.i.posthog.com");

const nextConfig: NextConfig = {
  // Keep Turbopack scoped to this repository. Without an explicit root,
  // Next.js finds /home/aiobi6/pnpm-lock.yaml first and watches the whole
  // home directory, causing unrelated file changes to trigger recompiles.
  turbopack: {
    root: process.cwd(),
  },
  async rewrites() {
    if (!posthogHost || !posthogAssetsHost) return [];

    return [
      {
        source: "/ingest/static/:path*",
        destination: `${posthogAssetsHost}/static/:path*`,
      },
      {
        source: "/ingest/array/:path*",
        destination: `${posthogAssetsHost}/array/:path*`,
      },
      {
        source: "/ingest/:path*",
        destination: `${posthogHost}/:path*`,
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
