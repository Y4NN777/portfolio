"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import posthog from "posthog-js";
import { useTranslations } from "@/contexts/TranslationContext";
import { analytics } from "@/lib/config";
import { translations } from "@/lib/i18n/translations";
import { projectEntries, type ProjectItemKey } from "@/lib/projects";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

const HOME_PROJECTS = 5;

export default function ProjectsSection() {
  const { t, locale } = useTranslations();
  const projectCopy = translations[locale].projects.items as typeof translations.en.projects.items;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const [featured, ...rest] = projectEntries.slice(0, HOME_PROJECTS);

  const renderProject = (
    project: (typeof projectEntries)[number],
    copy: (typeof translations.en.projects.items)[ProjectItemKey]
  ) => (
    <div className="backdrop-blur-xl rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 bg-white/80 dark:bg-[#0f2d40]/90 h-full"
      style={{
        border: "1px solid rgba(83, 192, 251, 0.15)",
        boxShadow: "0 4px 24px rgba(83, 192, 251, 0.08)",
      }}
    >
      <ProjectCard project={project} copy={copy} />
    </div>
  );

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-16 md:mb-24 lg:mb-32"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionHeader
          tagText={t("projects.tagText")}
          tagIcon="solar:code-square-bold"
          heading={t("projects.heading")}
          description={t("projects.description")}
          showUnderline={false}
          centered={true}
        />

        {/* Featured project, full width */}
        <motion.div variants={itemVariants} className="px-3 sm:px-4">
          {renderProject(featured, projectCopy[featured.id])}
        </motion.div>

        {/* Side projects, two columns */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8 px-3 sm:px-4">
          {rest.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="flex">
              {renderProject(project, projectCopy[project.id])}
            </motion.div>
          ))}
        </div>

        {/* View all projects */}
        <motion.div
          className="text-center mt-10 md:mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="/projects"
            onClick={() => {
              if (analytics.enabled) posthog.capture("projects_view_all_clicked");
            }}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 text-[#296b8d] dark:text-[#8ed3fc] bg-white dark:bg-[#1f4d67] border-2 border-[#53c0fb]/50 hover:border-[#53c0fb] shadow-md hover:shadow-lg active:scale-95"
          >
            {t("projects.viewAll")}
            <Icon
              icon="solar:add-circle-bold"
              width={18}
              height={18}
              className="transition-transform duration-300 group-hover:rotate-90"
            />
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
