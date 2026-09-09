import posthog from "posthog-js";
import { analytics, reportConfig } from "@/lib/config";

// Runs once, before hydration. Also the only startup hook left after the
// wizard removed the provider, so the config report lives here.
reportConfig();

if (analytics.enabled) {
  posthog.init(analytics.key!, {
    api_host: "/ingest",
    ui_host: analytics.uiHost,
    defaults: "2026-01-30",
    capture_pageview: false, // captured manually in PostHogPageViewTracker
    capture_pageleave: true,
    capture_exceptions: true,
    debug: process.env.NODE_ENV === "development",
  });
}
