"use client";

import { motion } from "framer-motion";
import { useTranslations } from "@/contexts/TranslationContext";
import type { Locale } from "@/lib/i18n/translations";

const NEXT: Record<Locale, Locale> = { en: "fr", fr: "en" };
const LABEL: Record<Locale, string> = { en: "EN", fr: "FR" };
const SWITCH_TO: Record<Locale, string> = {
  en: "Passer en français",
  fr: "Switch to English",
};

/**
 * Two locales, so this is a toggle rather than a menu: the label shows the
 * language you are reading, and the accessible name says what a press does.
 * Sized to match ThemeToggle so the nav cluster stays even.
 */
export default function LanguageToggle() {
  const { locale, setLocale } = useTranslations();

  return (
    <motion.button
      initial={false}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setLocale(NEXT[locale])}
      className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full text-xs font-bold leading-none transition-colors duration-300 text-[#296b8d] dark:text-[#cbd5e1]"
      style={{
        background: "rgba(83, 192, 251, 0.1)",
        border: "1px solid rgba(83, 192, 251, 0.2)",
      }}
      aria-label={SWITCH_TO[locale]}
    >
      {LABEL[locale]}
    </motion.button>
  );
}
