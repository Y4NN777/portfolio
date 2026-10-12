"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { ProjectVisual } from "@/components/editorial/ProjectVisual";
import { FlowShell } from "@/components/editorial/SiteChrome";
import { useTranslations } from "@/contexts/TranslationContext";
import { translations } from "@/lib/i18n/translations";
import { projectCaseStudies } from "@/lib/projectCaseStudies";
import { projectEntries } from "@/lib/projects";

const featured = new Set(["mishkan", "glexTalent", "7review", "wisemoney"]);
const productIds = new Set(["y7Feedback", "y7Jprompter", "piGeosint"]);

const pageCopy = {
  en: {
    eyebrow: "Selected systems, tools, and products",
    title: "Work taken from idea to production.",
    intro: "Products, developer tools, and applied AI systems.",
    selected: "Selected work",
    selectedBody: "Project case studies.",
    products: "Products & tools",
    experiments: "Experiments & research",
    caseStudy: "View case study",
    open: "Open project",
  },
  fr: {
    eyebrow: "Systèmes, outils et produits sélectionnés",
    title: "Des projets menés de l’idée à la production.",
    intro: "Produits, outils développeur et systèmes d’IA appliquée.",
    selected: "Projets sélectionnés",
    selectedBody: "Études de cas projet.",
    products: "Produits & outils",
    experiments: "Expérimentations & recherche",
    caseStudy: "Voir l’étude de cas",
    open: "Ouvrir le projet",
  },
} as const;

export default function ProjectsPage() {
  const { locale } = useTranslations();
  const copy = pageCopy[locale];
  const projectCopy = translations[locale].projects.items as typeof translations.en.projects.items;
  const caseStudies = projectCaseStudies[locale];
  const selected = projectEntries.filter((project) => featured.has(project.id));
  const products = projectEntries.filter((project) => productIds.has(project.id));
  const experiments = projectEntries.filter((project) => !featured.has(project.id) && !productIds.has(project.id));

  return (
    <FlowShell>
      <main id="content" className="flow-page">
        <header className="flow-page-hero">
          <p>{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p>{copy.intro}</p>
        </header>

        <section className="flow-project-group flow-project-group-featured">
          <div className="flow-group-heading"><h2>{copy.selected}</h2><p>{copy.selectedBody}</p></div>
          <div className="flow-project-index">
            {selected.map((project) => {
              const content = projectCopy[project.id];
              return (
                <article className="flow-index-feature" key={project.id}>
                  <Link href={`/projects/${project.slug}`} className="flow-index-image">
                    {project.thumbnail
                      ? <Image
                          src={project.thumbnail}
                          alt=""
                          fill
                          sizes="(max-width: 760px) 100vw, 45vw"
                          className={project.id === "wisemoney" ? "flow-wisemoney-preview" : undefined}
                        />
                      : <ProjectVisual title={content.title} subtitle={content.subtitle} tech={project.tech} />}
                  </Link>
                  <div>
                    <p>{content.subtitle}</p>
                    <h3><Link href={`/projects/${project.slug}`}>{content.title}</Link></h3>
                    <p>{content.description}</p>
                    <div className="flow-project-meta">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
                    <Link href={`/projects/${project.slug}`} className="flow-text-link">{copy.caseStudy}<Icon icon="solar:arrow-right-linear" width={17} height={17} aria-hidden /></Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <ProjectRows title={copy.products} projects={products} labels={projectCopy} caseStudies={caseStudies} openLabel={copy.caseStudy} />
        <ProjectRows title={copy.experiments} projects={experiments} labels={projectCopy} caseStudies={caseStudies} openLabel={copy.caseStudy} />
      </main>
    </FlowShell>
  );
}

function ProjectRows({ title, projects, labels, caseStudies, openLabel }: {
  title: string;
  projects: typeof projectEntries;
  labels: typeof translations.en.projects.items;
  caseStudies: typeof projectCaseStudies.en;
  openLabel: string;
}) {
  return (
    <section className="flow-project-group">
      <div className="flow-group-heading"><h2>{title}</h2></div>
      <div className="flow-project-rows">
        {projects.map((project) => {
          const content = labels[project.id];
          return (
            <article key={project.id}>
              <div><h3>{content.title}</h3><p>{content.subtitle}</p></div>
              <p>{caseStudies[project.id].state}</p>
              <div className="flow-row-tech">{project.tech.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}</div>
              <Link href={`/projects/${project.slug}`} aria-label={`${openLabel}: ${content.title}`}>
                <Icon icon="solar:arrow-right-linear" width={20} height={20} aria-hidden />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
