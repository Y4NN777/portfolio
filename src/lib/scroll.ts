/**
 * Scrolls to an element, or to the top, honouring the OS "reduce motion"
 * setting. An explicit behavior: "smooth" overrides the CSS scroll-behavior
 * rule, so the preference has to be read here too.
 */
function prefersReducedMotion(): boolean {
  return typeof window !== "undefined"
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToId(id: string): void {
  const behavior: ScrollBehavior = prefersReducedMotion() ? "auto" : "smooth";
  document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
}

export function scrollToTop(): void {
  const behavior: ScrollBehavior = prefersReducedMotion() ? "auto" : "smooth";
  window.scrollTo({ top: 0, behavior });
}
