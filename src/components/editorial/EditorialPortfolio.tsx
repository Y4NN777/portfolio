"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "@/contexts/TranslationContext";
import { experienceGroups, periodOnly } from "@/lib/experience";
import { translations } from "@/lib/i18n/translations";
import { projectEntries } from "@/lib/projects";
import { FlowShell } from "./SiteChrome";
import { ProjectVisual } from "./ProjectVisual";

const copyByLocale = {
  en: {
    eyebrow: "Software Engineer · Ouagadougou, Burkina Faso",
    titleBefore: "From thoughtful design to",
    titleAccent: "continuous improvement.",
    intro: "I design, ship, and evolve reliable software and applied AI systems.",
    process: "Understand. Design. Build. Ship. Observe. Improve.",
    explore: "Explore my work",
    selected: "Selected work",
    selectedIntro: "Products shaped by real constraints.",
    caseStudy: "View case study",
    allProjects: "See all projects",
    now: "Currently",
    currentTitle: "Building reliable software from Ouagadougou.",
    about: "About my work",
    email: "Email me",
    github: "GitHub",
    linkedin: "LinkedIn",
    experience: "Professional experience",
    roles: "roles",
    fullExperience: "View full experience",
  },
  fr: {
    eyebrow: "Ingénieur logiciel · Ouagadougou, Burkina Faso",
    titleBefore: "De la conception réfléchie à",
    titleAccent: "l’amélioration continue.",
    intro: "Je conçois, livre et fais évoluer des logiciels fiables et des systèmes d’IA appliquée.",
    process: "Comprendre. Concevoir. Construire. Livrer. Observer. Améliorer.",
    explore: "Explorer mes projets",
    selected: "Projets sélectionnés",
    selectedIntro: "Des produits façonnés par des contraintes réelles.",
    caseStudy: "Voir l’étude de cas",
    allProjects: "Voir tous les projets",
    now: "En ce moment",
    currentTitle: "Je construis des logiciels fiables depuis Ouagadougou.",
    about: "Découvrir mon parcours",
    email: "M’écrire",
    github: "GitHub",
    linkedin: "LinkedIn",
    experience: "Expérience professionnelle",
    roles: "postes",
    fullExperience: "Voir tout le parcours",
  },
} as const;

const featuredIds = ["mishkan", "glexTalent", "wisemoney"] as const;
const homeExperienceGroups = experienceGroups.slice(0, 4);

export default function EditorialPortfolio() {
  const { locale } = useTranslations();
  const copy = copyByLocale[locale];
  const projectCopy = translations[locale].projects.items as typeof translations.en.projects.items;
  const experienceCopy = translations[locale].experience.items as typeof translations.en.experience.items;
  const projects = featuredIds.map((id) => projectEntries.find((project) => project.id === id)).filter(Boolean) as typeof projectEntries;

  return (
    <FlowShell>
      <main id="content">
        <section className="flow-home-hero">
          <div className="flow-home-copy">
            <p className="flow-eyebrow"><span aria-hidden />{copy.eyebrow}</p>
            <h1>{copy.titleBefore} <em>{copy.titleAccent}</em></h1>
            <p className="flow-intro">{copy.intro}</p>
            <Typewriter text={copy.process} />
            <div className="flow-actions">
              <Link href="/projects" className="flow-button flow-button-primary">{copy.explore}<Icon icon="solar:arrow-right-linear" width={18} height={18} aria-hidden /></Link>
              <Link href="https://github.com/Y4NN777" target="_blank" rel="noopener noreferrer" className="flow-text-link">{copy.github}<Icon icon="solar:arrow-right-up-linear" width={17} height={17} aria-hidden /></Link>
              <Link href="https://www.linkedin.com/in/y4nnthedev777/" target="_blank" rel="noopener noreferrer" className="flow-text-link">{copy.linkedin}<Icon icon="solar:arrow-right-up-linear" width={17} height={17} aria-hidden /></Link>
            </div>
          </div>

          <div className="flow-portrait-wrap">
            <div className="flow-portrait-line" aria-hidden />
            <div className="flow-portrait">
              <Image src="/yanis-axel-dabo-portrait.png" alt="Yanis Axel Dabo" fill priority sizes="(max-width: 760px) 82vw, 34vw" />
            </div>
            <p>Yanis Axel Dabo<br /><span>Software Systems · Platform Engineering · DevSecOps · Applied AI</span></p>
          </div>
        </section>

        <section className="flow-home-work">
          <div className="flow-section-heading">
            <p>{copy.selected}</p>
            <h2>{copy.selectedIntro}</h2>
          </div>

          <div className="flow-featured-projects">
            {projects.map((project, index) => {
              const content = projectCopy[project.id];
              return (
                <article className={`flow-featured-project flow-featured-project-${index + 1}`} key={project.id}>
                  <Link href={`/projects/${project.slug}`} className="flow-featured-image" aria-label={`${copy.caseStudy}: ${content.title}`}>
                    {project.thumbnail
                      ? <Image
                          src={project.thumbnail}
                          alt=""
                          fill
                          sizes="(max-width: 760px) 100vw, 58vw"
                          className={project.id === "wisemoney" ? "flow-wisemoney-preview" : undefined}
                        />
                      : <ProjectVisual title={content.title} subtitle={content.subtitle} tech={project.tech} />}
                  </Link>
                  <div className="flow-featured-copy">
                    <p>{content.subtitle}</p>
                    <h3><Link href={`/projects/${project.slug}`}>{content.title}</Link></h3>
                    <p>{content.description}</p>
                    <div className="flow-project-meta">{project.tech.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div>
                    <Link href={`/projects/${project.slug}`} className="flow-text-link">{copy.caseStudy}<Icon icon="solar:arrow-right-linear" width={17} height={17} aria-hidden /></Link>
                  </div>
                </article>
              );
            })}
          </div>

          <Link href="/projects" className="flow-all-projects">{copy.allProjects}<Icon icon="solar:arrow-right-linear" width={19} height={19} aria-hidden /></Link>
        </section>

        <section className="flow-home-experience" id="experience">
          <div className="flow-experience-heading">
            <h2>{copy.experience}</h2>
            <Link href="/about" className="flow-text-link">
              {copy.fullExperience}
              <Icon icon="solar:arrow-right-linear" width={17} height={17} aria-hidden />
            </Link>
          </div>
          <div className="flow-experience-rows">
            {homeExperienceGroups.map((group) => {
              const experience = experienceCopy[group.roles[0]];
              return (
                <article key={group.id}>
                  <div>
                    <h3>{experience.role}</h3>
                    <p>{experience.company}{group.roles.length > 1 ? ` · ${group.roles.length} ${copy.roles}` : ""}</p>
                  </div>
                  <p>{periodOnly(experience.period)}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="flow-current">
          <p>{copy.now}</p>
          <div>
            <h2>{copy.currentTitle}</h2>
            <div className="flow-actions">
              <Link href="/about" className="flow-button">{copy.about}</Link>
              <Link href="mailto:y4nn.dev@gmail.com" className="flow-text-link">{copy.email}<Icon icon="solar:arrow-right-up-linear" width={17} height={17} aria-hidden /></Link>
            </div>
          </div>
        </section>
      </main>
    </FlowShell>
  );
}

function Typewriter({ text }: { text: string }) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleText(text);
      return;
    }
    setVisibleText("");
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setVisibleText(text.slice(0, index));
      if (index >= text.length) window.clearInterval(interval);
    }, 42);
    return () => window.clearInterval(interval);
  }, [text]);

  return <p className="flow-process" aria-label={text}><span aria-hidden>{visibleText}</span><i aria-hidden /></p>;
}
