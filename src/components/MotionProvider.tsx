"use client";

import { MotionConfig } from "framer-motion";

/**
 * Honours the OS-level "reduce motion" setting for every framer-motion
 * animation in the tree. With reducedMotion="user", transform and layout
 * animations are dropped while opacity and colour still cross-fade, so the
 * interface stays legible without moving.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
