"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { FlowShell } from "@/components/editorial/SiteChrome";
import { useTranslations } from "@/contexts/TranslationContext";
import { experienceGroups, periodOnly } from "@/lib/experience";
import { translations } from "@/lib/i18n/translations";

const pageCopy = {
  en: {
    eyebrow: "About",
    title: "My experience and approach to software engineering.",
    intro: "I’m Ragnang-Newende Yanis Axel Dabo, a software engineer based in Ouagadougou.",
    approach: "Approach",
    experience: "Experience",
    focus: "Engineering focus",
    awards: "Awards",
    awardItems: [
      { year: "2026", title: "1st Prize — ONEA AI Hackathon" },
      { year: "2025", title: "3rd Place — AI Hackathon, Digital Week (MDCPE)" },
      { year: "2025", title: "2nd Place — Aïobi AI Hackathon", detail: "Certificate of Excellence" },
    ],
    cv: "Read my résumé",
    contact: "Start a conversation",
    highlights: "Highlights",
  },
  fr: {
    eyebrow: "À propos",
    title: "Mon parcours et mon approche de l’ingénierie logicielle.",
    intro: "Je suis Ragnang-Newende Yanis Axel Dabo, ingénieur logiciel basé à Ouagadougou.",
    approach: "Approche",
    experience: "Expérience",
    focus: "Focus ingénierie",
    awards: "Distinctions",
    awardItems: [
      { year: "2026", title: "1er Prix — Hackathon IA ONEA" },
      { year: "2025", title: "3e Place — Hackathon IA, Semaine du Numérique (MDCPE)" },
      { year: "2025", title: "2e Place — Hackathon IA Aïobi", detail: "Certificat d’excellence" },
    ],
    cv: "Lire mon CV",
    contact: "Démarrer une conversation",
    highlights: "Points clés",
  },
} as const;

export default function AboutPage() {
  const { locale } = useTranslations();
  const copy = pageCopy[locale];
  const localized = translations[locale];
  const experiences = localized.experience.items as typeof translations.en.experience.items;

  return (
    <FlowShell>
      <main id="content" className="flow-page">
        <section className="flow-about-hero">
          <div>
            <p className="flow-eyebrow"><span aria-hidden />{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p className="flow-about-intro">{copy.intro}</p>
            <div className="flow-actions">
              <Link href={locale === "fr" ? "/Yanis-Axel-Dabo-CV-FR.pdf" : "/Yanis-Axel-Dabo-CV-EN.pdf"} target="_blank" className="flow-button flow-button-primary">{copy.cv}<Icon icon="solar:arrow-right-up-linear" width={17} height={17} aria-hidden /></Link>
              <Link href="mailto:y4nn.dev@gmail.com" className="flow-text-link">{copy.contact}</Link>
            </div>
          </div>
          <div className="flow-about-portrait"><Image src="/yanis-axel-dabo-portrait.png" alt="Yanis Axel Dabo" fill priority sizes="(max-width: 760px) 88vw, 32vw" /></div>
        </section>

        <section className="flow-about-copy">
          <h2>{copy.approach}</h2>
          <div>{localized.overview.introParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>

        <section className="flow-about-section" id="experience">
          <h2>{copy.experience}</h2>
          <div className="flow-experience-groups">
            {experienceGroups.map((group) => {
              const firstRole = experiences[group.roles[0]];
              return (
                <section className="flow-experience-company" key={group.id}>
                  <h3>{firstRole.company}</h3>
                  <div className={`flow-company-roles${group.roles.length > 1 ? " flow-company-roles-multiple" : ""}`}>
                    {group.roles.map((roleId) => {
                      const item = experiences[roleId];
                      return (
                        <article className="flow-experience-role" key={roleId}>
                          <p className="flow-experience-period">{periodOnly(item.period)}</p>
                          <h4>{item.role}</h4>
                          <p className="flow-experience-description">{item.description}</p>
                          <details className="flow-highlights">
                            <summary>{copy.highlights}<Icon icon="solar:alt-arrow-down-linear" width={16} height={16} aria-hidden /></summary>
                            <ul>{item.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
                          </details>
                        </article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </section>

        <section className="flow-about-section">
          <h2>{copy.focus}</h2>
          <div className="flow-focus-list">
            {localized.overview.coreSkills.map((skill) => <article key={skill.title}><h3>{skill.title}</h3><p>{skill.description}</p></article>)}
          </div>
        </section>

        <section className="flow-about-section" id="awards">
          <h2>{copy.awards}</h2>
          <div className="flow-awards-list">
            {copy.awardItems.map((award) => (
              <article key={`${award.year}-${award.title}`}>
                <p>{award.year}</p>
                <div>
                  <h3>{award.title}</h3>
                  {"detail" in award && award.detail ? <p>{award.detail}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </FlowShell>
  );
}
