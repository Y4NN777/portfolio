"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Locale, translations } from "@/lib/i18n/translations";

type TranslationContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, fallback?: string) => string;
};

const LOCALE_STORAGE_KEY = "locale";

const TranslationContext = createContext<TranslationContextValue | null>(null);

export function TranslationProvider({
  children,
  defaultLocale = "en",
}: {
  children: React.ReactNode;
  defaultLocale?: Locale;
}) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  // Restore the saved choice, otherwise follow the browser. Read in an effect
  // rather than in useState so the server and the first client render agree.
  useEffect(() => {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved && saved in translations) {
      setLocale(saved as Locale);
      return;
    }
    if (navigator.language?.toLowerCase().startsWith("fr")) {
      setLocale("fr");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useCallback(
    (key: string, fallback?: string) => {
      const segments = key.split(".");
      let current: unknown = translations[locale];

      for (const segment of segments) {
        if (current && typeof current === "object" && segment in current) {
          current = (current as Record<string, unknown>)[segment];
        } else {
          current = undefined;
          break;
        }
      }

      return typeof current === "string" ? current : fallback ?? key;
    },
    [locale]
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
    }),
    [locale, t]
  );

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
}

export function useTranslations() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslations must be used within a TranslationProvider");
  }
  return context;
}
