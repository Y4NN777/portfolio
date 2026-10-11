"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { useTheme } from "@/components/ThemeProvider";
import { useTranslations } from "@/contexts/TranslationContext";
import { analytics } from "@/lib/config";
import { translations, type Locale } from "@/lib/i18n/translations";
import { projectEntries } from "@/lib/projects";

const NEXT_LOCALE: Record<Locale, Locale> = { en: "fr", fr: "en" };

const editorialCopy = {
  en: {
    nav: {
      work: "Work",
      experience: "Experience",
      profile: "Profile",
      contact: "Contact",
    },
    brandCaption: "Yanis Axel Dabo · Software Engineer",
    availability: "Software engineer · Ouagadougou, Burkina Faso",
    heroTitle: "Reliable software, from first idea to production.",
    heroBody:
      "I design backend services, developer platforms, and applied AI systems with clear architecture, honest trade-offs, and production reliability in mind.",
    viewWork: "View selected work",
    contactMe: "Start a conversation",
    location: "Based in Ouagadougou · Working globally",
    focus: ["Backend systems", "Platform engineering", "Applied AI", "Developer tools"],
    workLabel: "Selected work",
    workTitle: "Products and systems I have designed, built, and shipped.",
    openProject: "Open project",
    capabilitiesLabel: "Capabilities",
    capabilitiesTitle: "Engineering from first principles to production.",
    experienceLabel: "Experience",
    experienceTitle: "Recent roles and responsibilities.",
    profileLabel: "Profile",
    profileTitle: "Curious across layers. Precise about the fundamentals.",
    profileBody:
      "My work sits at the intersection of software design, backend and platform engineering, and applied AI. I care about understanding why systems work, where they fail, and how to make them easier to operate and evolve.",
    profileLink: "Read my résumé",
    contactLabel: "Contact",
    contactTitle: "Have a difficult software problem? Let’s talk.",
    email: "Email me",
    copyright: "Yanis Axel Dabo",
  },
  fr: {
    nav: {
      work: "Travaux",
      experience: "Parcours",
      profile: "Profil",
      contact: "Contact",
    },
    brandCaption: "Yanis Axel Dabo · Ingénieur logiciel",
    availability: "Ingénieur logiciel · Ouagadougou, Burkina Faso",
    heroTitle: "Des logiciels fiables, de la première idée à la production.",
    heroBody:
      "Je conçois des services backend, des plateformes développeur et des systèmes d’IA appliquée avec une architecture claire, des choix assumés et une vraie attention à la fiabilité.",
    viewWork: "Voir mes travaux",
    contactMe: "Démarrer une conversation",
    location: "Basé à Ouagadougou · Collaboration internationale",
    focus: ["Systèmes backend", "Platform engineering", "IA appliquée", "Outils développeur"],
    workLabel: "Travaux sélectionnés",
    workTitle: "Des produits et systèmes que j’ai conçus, développés et livrés.",
    openProject: "Voir le projet",
    capabilitiesLabel: "Expertise",
    capabilitiesTitle: "De la réflexion initiale à la mise en production.",
    experienceLabel: "Parcours",
    experienceTitle: "Rôles et responsabilités récents.",
    profileLabel: "Profil",
    profileTitle: "Curieux à travers les couches. Rigoureux sur les fondamentaux.",
    profileBody:
      "Mon travail se situe à l’intersection de la conception logicielle, du backend, des plateformes et de l’IA appliquée. Je cherche à comprendre pourquoi les systèmes fonctionnent, où ils échouent et comment les rendre plus simples à exploiter et à faire évoluer.",
    profileLink: "Lire mon CV",
    contactLabel: "Contact",
    contactTitle: "Un problème logiciel difficile à résoudre ? Parlons-en.",
    email: "M’écrire",
    copyright: "Yanis Axel Dabo",
  },
} as const;

const selectedProjectIds = ["glexTalent", "wisemoney", "tenglaafi", "7review"] as const;
const experienceIds = ["aïobiSystems", "y7labs", "fikasso", "bitSolutions"] as const;

export default function EditorialPortfolio() {
  const { locale, setLocale } = useTranslations();
  const { theme, toggleTheme } = useTheme();
  const copy = editorialCopy[locale];
  const localized = translations[locale];
  const projectCopy = localized.projects.items as typeof translations.en.projects.items;
  const experienceCopy = localized.experience.items as typeof translations.en.experience.items;
  const selectedProjects = selectedProjectIds
    .map((id) => projectEntries.find((project) => project.id === id))
    .filter((project): project is (typeof projectEntries)[number] => Boolean(project));
  const capabilities = localized.overview.coreSkills.slice(0, 4);

  const trackProject = (projectId: string, destination: "live" | "github") => {
    if (analytics.enabled) {
      posthog.capture("project_opened", {
        project_id: projectId,
        destination_type: destination,
        portfolio_variant: "editorial",
      });
    }
  };

  return (
    <div className="editorial-site">
      <a href="#content" className="editorial-skip-link">
        Skip to content
      </a>

      <header className="editorial-header">
        <Link href="#top" className="editorial-brand" aria-label="Yanis Axel Dabo — home">
          <span className="y4nn-logo">
            <span>Y4NN</span>
            <b>777</b>
          </span>
          <span className="editorial-brand-caption">{copy.brandCaption}</span>
        </Link>

        <nav className="editorial-nav" aria-label="Main navigation">
          <Link href="#work">{copy.nav.work}</Link>
          <Link href="#experience">{copy.nav.experience}</Link>
          <Link href="#profile">{copy.nav.profile}</Link>
          <Link href="#contact">{copy.nav.contact}</Link>
        </nav>

        <div className="editorial-header-actions">
          <button
            type="button"
            className="editorial-language"
            onClick={() => setLocale(NEXT_LOCALE[locale])}
            aria-label={locale === "en" ? "Passer en français" : "Switch to English"}
          >
            {locale.toUpperCase()}
          </button>
          <button
            type="button"
            className="editorial-theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Use light theme" : "Use dark theme"}
          >
            <Icon icon={theme === "dark" ? "solar:sun-2-linear" : "solar:moon-linear"} width={18} height={18} aria-hidden />
          </button>
          <Link href="mailto:y4nn.dev@gmail.com" className="editorial-header-cta">
            {copy.contactMe}
            <Icon icon="solar:arrow-right-up-linear" width={18} height={18} aria-hidden />
          </Link>
        </div>
      </header>

      <main id="content">
        <section className="editorial-hero" id="top">
          <div className="editorial-hero-copy">
            <p className="editorial-kicker">
              <span aria-hidden />
              {copy.availability}
            </p>
            <h1>{copy.heroTitle}</h1>
            <p className="editorial-hero-body">{copy.heroBody}</p>
            <div className="editorial-hero-actions">
              <Link href="#work" className="editorial-button editorial-button-primary">
                {copy.viewWork}
                <Icon icon="solar:arrow-down-linear" width={18} height={18} aria-hidden />
              </Link>
              <Link href="mailto:y4nn.dev@gmail.com" className="editorial-text-link">
                {copy.contactMe}
                <Icon icon="solar:arrow-right-up-linear" width={18} height={18} aria-hidden />
              </Link>
            </div>
            <div className="editorial-hero-meta">
              <span>{copy.location}</span>
              <span>GitHub · Y4NN777</span>
            </div>
          </div>

          <div className="editorial-portrait">
            <div className="editorial-portrait-label">THE Y4NN · 777</div>
            <Image
              src="/they4nn.jpeg"
              alt="Yanis Axel Dabo"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 42vw"
              className="editorial-portrait-image"
            />
            <div className="editorial-portrait-footer">
              <span>Yanis Axel Dabo</span>
              <span>Software engineer</span>
            </div>
          </div>
        </section>

        <div className="editorial-focus-strip" aria-label="Areas of focus">
          {copy.focus.map((item, index) => (
            <div key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </div>
          ))}
        </div>

        <section className="editorial-section" id="work">
          <SectionIntro index="01" label={copy.workLabel} title={copy.workTitle} />

          <div className="editorial-projects">
            {selectedProjects.map((project, index) => {
              const projectText = projectCopy[project.id];
              const href = project.live || project.github || "#work";
              const destination = project.live ? "live" : "github";

              return (
                <article className="editorial-project" key={project.id}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-project-image"
                    onClick={() => trackProject(project.id, destination)}
                    aria-label={`${copy.openProject}: ${projectText.title}`}
                  >
                    {project.thumbnail && (
                      <Image
                        src={project.thumbnail}
                        alt={`Preview of ${projectText.title}`}
                        fill
                        sizes="(max-width: 900px) 100vw, 55vw"
                        className="editorial-project-thumbnail"
                      />
                    )}
                    <span className="editorial-project-number" aria-hidden>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>

                  <div className="editorial-project-copy">
                    <div className="editorial-project-heading">
                      <h3>{projectText.title}</h3>
                      <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackProject(project.id, destination)}
                        aria-label={`${copy.openProject}: ${projectText.title}`}
                      >
                        <Icon icon="solar:arrow-right-up-linear" width={24} height={24} aria-hidden />
                      </Link>
                    </div>
                    <p className="editorial-project-subtitle">{projectText.subtitle}</p>
                    <p>{projectText.description}</p>
                    <ul className="editorial-tech-list" aria-label={`${projectText.title} technology stack`}>
                      {project.tech.map((tech) => <li key={tech}>{tech}</li>)}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="editorial-section" id="capabilities">
          <SectionIntro index="02" label={copy.capabilitiesLabel} title={copy.capabilitiesTitle} />
          <div className="editorial-capabilities">
            {capabilities.map((capability, index) => (
              <article key={capability.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="editorial-section" id="experience">
          <SectionIntro index="03" label={copy.experienceLabel} title={copy.experienceTitle} />
          <div className="editorial-experience-list">
            {experienceIds.map((id, index) => {
              const role = experienceCopy[id];
              return (
                <article key={id} className="editorial-experience-row">
                  <span className="editorial-row-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="editorial-company">{role.company}</p>
                    <h3>{role.role}</h3>
                  </div>
                  <p className="editorial-period">{role.period}</p>
                  <p className="editorial-role-description">{role.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="editorial-section editorial-profile" id="profile">
          <SectionIntro index="04" label={copy.profileLabel} title={copy.profileTitle} />
          <div className="editorial-profile-grid">
            <p className="editorial-profile-lead">{copy.profileBody}</p>
            <div className="editorial-profile-details">
              {localized.overview.introParagraphs.slice(0, 2).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Link href={locale === "fr" ? "/RESUME_FR.pdf" : "/RESUME_EN.pdf"} target="_blank" className="editorial-text-link">
                {copy.profileLink}
                <Icon icon="solar:arrow-right-up-linear" width={18} height={18} aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        <section className="editorial-contact" id="contact">
          <p>{copy.contactLabel}</p>
          <h2>{copy.contactTitle}</h2>
          <Link href="mailto:y4nn.dev@gmail.com">
            {copy.email}
            <Icon icon="solar:arrow-right-up-linear" width={34} height={34} aria-hidden />
          </Link>
        </section>
      </main>

      <footer className="editorial-footer">
        <div className="editorial-footer-brand">
          <span className="y4nn-logo">
            <span>Y4NN</span>
            <b>777</b>
          </span>
          <p>Backend systems · Platforms · Applied AI</p>
        </div>
        <div className="editorial-footer-links">
          <Link href="https://github.com/Y4NN777" target="_blank" rel="noopener noreferrer">GitHub</Link>
          <Link href="https://www.linkedin.com/in/y4nnthedev777/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
          <Link href="mailto:y4nn.dev@gmail.com">Email</Link>
        </div>
        <p>© {new Date().getFullYear()} {copy.copyright}</p>
      </footer>
    </div>
  );
}

function SectionIntro({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <div className="editorial-section-intro">
      <div className="editorial-section-label">
        <span>{index}</span>
        <p>{label}</p>
      </div>
      <h2>{title}</h2>
    </div>
  );
}
