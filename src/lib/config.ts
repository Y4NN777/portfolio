/**
 * Every environment-dependent integration, read in one place.
 *
 * NEXT_PUBLIC_* values are inlined at build time, so these constants are
 * evaluated once and are identical on the server and the client — safe to read
 * during render without causing a hydration mismatch.
 *
 * Nothing here throws. A missing value disables its feature and says so in
 * development; the site itself never depends on any of them.
 */

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const emailjsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const analytics = {
  enabled: Boolean(posthogKey && posthogHost),
  key: posthogKey,
  /** Ingest host, e.g. https://us.i.posthog.com — where events are sent. */
  host: posthogHost,
  /**
   * Dashboard host, e.g. https://us.posthog.com — where a human logs in.
   * posthog-js wants this as ui_host; sending it the ingest host makes the
   * toolbar's "view in PostHog" links point at the wrong domain.
   */
  uiHost: posthogHost?.replace("://us.i.", "://us.").replace("://eu.i.", "://eu."),
} as const;

export const contactForm = {
  enabled: Boolean(emailjsServiceId && emailjsTemplateId && emailjsPublicKey),
  serviceId: emailjsServiceId,
  templateId: emailjsTemplateId,
  publicKey: emailjsPublicKey,
} as const;

/** Variables that are missing, for the development-only startup report. */
export function missingEnv(): string[] {
  return (
    [
      ["NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN", posthogKey],
      ["NEXT_PUBLIC_POSTHOG_HOST", posthogHost],
      ["NEXT_PUBLIC_EMAILJS_SERVICE_ID", emailjsServiceId],
      ["NEXT_PUBLIC_EMAILJS_TEMPLATE_ID", emailjsTemplateId],
      ["NEXT_PUBLIC_EMAILJS_PUBLIC_KEY", emailjsPublicKey],
    ] as const
  )
    .filter(([, value]) => !value)
    .map(([name]) => name);
}

/**
 * One line per run in development naming exactly what is unset and what it
 * disables, so a missing variable is never discovered through a broken form.
 */
export function reportConfig(): void {
  if (process.env.NODE_ENV !== "development") return;
  const missing = missingEnv();
  if (missing.length === 0) {
    console.info("[config] All integrations configured: analytics, contact form.");
    return;
  }
  console.info(
    `[config] ${missing.length} env var(s) unset: ${missing.join(", ")}.\n` +
      `         analytics: ${analytics.enabled ? "on" : "OFF"} · contact form: ${contactForm.enabled ? "on" : "OFF"}\n` +
      `         Copy .env.example to .env.local to enable them.`
  );
}
