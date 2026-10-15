"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";
import { useTranslations } from "@/contexts/TranslationContext";
import type { Locale } from "@/lib/i18n/translations";

const NEXT_LOCALE: Record<Locale, Locale> = { en: "fr", fr: "en" };

const chromeCopy = {
  en: {
    skip: "Skip to content",
    home: "Home",
    work: "Projects",
    about: "About",
    resume: "Résumé",
    contact: "Contact",
    footerLine: "Software Systems · Platform Engineering · DevSecOps · Applied AI",
    language: "Passer en français",
    light: "Use light theme",
    dark: "Use dark theme",
  },
  fr: {
    skip: "Aller au contenu",
    home: "Accueil",
    work: "Projets",
    about: "Profil",
    resume: "CV",
    contact: "Contact",
    footerLine: "Systèmes logiciels · Ingénierie plateforme · DevSecOps · IA appliquée",
    language: "Switch to English",
    light: "Activer le thème clair",
    dark: "Activer le thème sombre",
  },
} as const;

export function SiteHeader() {
  const pathname = usePathname();
  const { locale, setLocale } = useTranslations();
  const { theme, toggleTheme } = useTheme();
  const copy = chromeCopy[locale];
  const nav = [
    { href: "/", label: copy.home, exact: true },
    { href: "/projects", label: copy.work },
    { href: "/about", label: copy.about },
  ];

  return (
    <>
      <a href="#content" className="flow-skip-link">{copy.skip}</a>
      <header className="flow-header">
        <Link href="/" className="flow-brand" aria-label="Yanis Axel Dabo — home">
          <span className="flow-logo"><span>Y4NN</span><b>777</b></span>
        </Link>

        <nav className="flow-nav" aria-label="Main navigation">
          {nav.map((item) => {
            const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
            return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>{item.label}</Link>;
          })}
          <Link href={locale === "fr" ? "/Yanis-Axel-Dabo-CV-FR.pdf" : "/Yanis-Axel-Dabo-CV-EN.pdf"} target="_blank">{copy.resume}</Link>
        </nav>

        <div className="flow-header-actions">
          <button type="button" onClick={() => setLocale(NEXT_LOCALE[locale])} aria-label={copy.language}>
            {locale.toUpperCase()}
          </button>
          <button type="button" onClick={toggleTheme} aria-label={theme === "dark" ? copy.light : copy.dark}>
            <Icon icon={theme === "dark" ? "solar:sun-2-linear" : "solar:moon-linear"} width={18} height={18} aria-hidden />
          </button>
          <Link href="mailto:y4nn.dev@gmail.com" className="flow-contact-link">
            {copy.contact}<Icon icon="solar:arrow-right-up-linear" width={17} height={17} aria-hidden />
          </Link>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  const { locale } = useTranslations();
  const copy = chromeCopy[locale];

  return (
    <footer className="flow-footer">
      <div>
        <span className="flow-logo"><span>Y4NN</span><b>777</b></span>
        <p>{copy.footerLine}</p>
      </div>
      <div className="flow-footer-links">
        <Link href="https://github.com/Y4NN777" target="_blank" rel="noopener noreferrer">GitHub</Link>
        <Link href="https://www.linkedin.com/in/y4nnthedev777/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
        <Link href="mailto:y4nn.dev@gmail.com">Email</Link>
      </div>
      <p>© {new Date().getFullYear()} Yanis Axel Dabo</p>
    </footer>
  );
}

export function FlowShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flow-site">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
