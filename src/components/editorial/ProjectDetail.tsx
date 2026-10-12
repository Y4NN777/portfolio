"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { FlowShell } from "./SiteChrome";
import { useTranslations } from "@/contexts/TranslationContext";
import { translations } from "@/lib/i18n/translations";
import { projectCaseStudies } from "@/lib/projectCaseStudies";
import { projectEntries, type ProjectItemKey } from "@/lib/projects";
import { ProjectVisual } from "./ProjectVisual";

const copyByLocale = {
  en: {
    back: "All projects",
    overview: "Case study",
    problem: "Problem",
    approach: "Approach",
    engineering: "Engineering",
    facts: "Project facts",
    state: "Current state",
    stack: "Technology",
    links: "Project links",
    live: "Visit the product",
    source: "View source",
    next: "Next project",
  },
  fr: {
    back: "Tous les projets",
    overview: "Étude de cas",
    problem: "Problème",
    approach: "Approche",
    engineering: "Ingénierie",
    facts: "Repères du projet",
    state: "État actuel",
    stack: "Technologies",
    links: "Liens du projet",
    live: "Visiter le produit",
    source: "Voir le code source",
    next: "Projet suivant",
  },
} as const;

export default function ProjectDetail({ projectId }: { projectId: ProjectItemKey }) {
  const { locale } = useTranslations();
  const copy = copyByLocale[locale];
  const labels = translations[locale].projects.items as typeof translations.en.projects.items;
  const project = projectEntries.find((item) => item.id === projectId)!;
  const content = labels[project.id];
  const details = projectCaseStudies[locale][project.id];
  const currentIndex = projectEntries.findIndex((item) => item.id === project.id);
  const nextProject = projectEntries[(currentIndex + 1) % projectEntries.length];
  const nextContent = labels[nextProject.id];

  return (
    <FlowShell>
      <main id="content" className="flow-page flow-case-study">
        <Link href="/projects" className="flow-back-link"><Icon icon="solar:arrow-left-linear" width={18} height={18} aria-hidden />{copy.back}</Link>
        <header className="flow-case-header">
          <p>{content.subtitle}</p>
          <h1>{content.title}</h1>
          <div className="flow-case-summary">
            <p>{content.description}</p>
            <div className="flow-case-status"><span>{copy.state}</span><p>{details.state}</p></div>
          </div>
        </header>

        <div className="flow-case-image">
          {project.thumbnail
            ? <Image src={project.thumbnail} alt={`Preview of ${content.title}`} fill priority sizes="(max-width: 760px) 100vw, 78vw" />
            : <ProjectVisual title={content.title} subtitle={content.subtitle} tech={project.tech} />}
        </div>

        <section className="flow-case-content">
          <h2>{copy.overview}</h2>
          <div><h3>{copy.problem}</h3><p>{details.problem}</p></div>
          <div><h3>{copy.approach}</h3><p>{details.approach}</p></div>
          <div><h3>{copy.engineering}</h3><p>{details.engineering}</p></div>
        </section>

        <section className="flow-case-facts">
          <h2>{copy.facts}</h2>
          <div><h3>{copy.stack}</h3><div className="flow-project-meta">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
          {(project.live || project.github) && (
            <div className="flow-case-links">
              <h3>{copy.links}</h3>
              {project.live && <Link href={project.live} target="_blank" rel="noopener noreferrer">{copy.live}<Icon icon="solar:arrow-right-up-linear" width={18} height={18} aria-hidden /></Link>}
              {project.github && <Link href={project.github} target="_blank" rel="noopener noreferrer">{copy.source}<Icon icon="solar:arrow-right-up-linear" width={18} height={18} aria-hidden /></Link>}
            </div>
          )}
        </section>

        <Link href={`/projects/${nextProject.slug}`} className="flow-next-project"><span>{copy.next}</span><strong>{nextContent.title}</strong><Icon icon="solar:arrow-right-linear" width={28} height={28} aria-hidden /></Link>
      </main>
    </FlowShell>
  );
}
