"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "@/contexts/TranslationContext";
import { translations } from "@/lib/i18n/translations";
import { projectEntries, type ProjectItemKey } from "@/lib/projects";
import Background from "@/components/portfolio/Background";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import ProjectCard from "@/components/portfolio/ProjectCard";

export default function ProjectsPage() {
  const { t, locale } = useTranslations();
  const projectCopy = translations[locale].projects.items as typeof translations.en.projects.items;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <div className="min-h-screen text-gray-900 dark:text-white relative">
      <Background />

      <a href="#main" className="skip-link">Skip to content</a>

      <Navigation />

      <main id="main" className="max-w-6xl mx-auto px-6 pt-28 pb-20">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Page header */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{
                background: "rgba(83, 192, 251, 0.1)",
                border: "1px solid rgba(83, 192, 251, 0.25)",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Icon icon="solar:code-square-bold" className="text-[#296b8d] dark:text-[#53c0fb]" width={20} height={20} />
              <span className="text-sm font-medium text-[#296b8d] dark:text-[#53c0fb]">
                {t("projects.tagText")}
              </span>
            </motion.div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {/* One span; --heading-gradient carries the light/dark pair. */}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--heading-gradient)" }}>
                {t("projects.heading")}
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t("projects.description")}
            </p>
          </motion.div>

          {/* Project list */}
          <div className="space-y-8 md:space-y-12">
            {projectEntries.map((project) => {
              const copy = projectCopy[project.id];
              if (!copy) return null;
              return (
                <motion.div key={project.id} variants={itemVariants}>
                  <div className="backdrop-blur-xl rounded-2xl md:rounded-3xl overflow-hidden bg-white/80 dark:bg-[#0f2d40]/90"
                    style={{ border: "1px solid rgba(83, 192, 251, 0.15)", boxShadow: "0 4px 24px rgba(83, 192, 251, 0.08)" }}
                  >
                    <ProjectCard project={project} copy={copy} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Back home */}
          <motion.div variants={itemVariants} className="text-center mt-12 md:mt-16">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-[#296b8d] dark:text-[#53c0fb] font-medium text-sm md:text-base transition-transform duration-300 hover:gap-3">
              <Icon icon="solar:arrow-left-outline" width={18} height={18} />
              {t("projects.backHome")}
            </Link>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
