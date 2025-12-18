"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "@/contexts/TranslationContext";
import { translations } from "@/lib/i18n/translations";
import ProjectCard from "@/components/portfolio/ProjectCard";
import Navigation from "@/components/portfolio/Navigation";
import Background from "@/components/portfolio/Background";

type ProjectItemKey = keyof typeof translations.en.projects.items;

const projectEntries: Array<{
  id: ProjectItemKey;
  gradient: string;
  statusVariant: "live" | "beta" | "alpha" | string;
  github: string;
  live: string;
  tech: string[];
}> = [
  {
    id: "y7Jprompter",
    gradient: "from-blue-500 to-cyan-500",
    statusVariant: "live",
    github: "https://github.com/Y4NN777/y7-jprompter.git",
    live: "https://y7-jprompter.vercel.app",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Google Gemini 2.0 Flash",
      "Prism.js + react-syntax-highlighter",
      "Vercel",
    ],
  },
  {
    id: "tracklet",
    gradient: "from-purple-500 to-pink-500",
    statusVariant: "beta",
    github: "https://github.com/Y4NN777/Tracklet",
    live: "https://tracklet-phi.vercel.app",
    tech: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "Supabase (Postgres + Auth)",
      "Google Gemini + Genkit",
      "Supabase Realtime",
    ],
  },
  {
    id: "tenglaafi",
    gradient: "from-emerald-500 to-lime-500",
    statusVariant: "alpha",
    github: "https://github.com/Y4NN777/tenglaafi",
    live: "https://tenglaafi-chat.y7-solutions.online/",
    tech: [
      "Python 3.12",
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "Sentence Transformers (MPNet)",
      "HuggingFace Inference API",
      "Mistral-7B-Instruct",
      "Tailwind CSS",
      "Makefile",
    ],
  },
];

export default function ProjectsPage() {
  const { t } = useTranslations();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen text-gray-900 dark:text-white relative">
      {/* Background */}
      <Background />

      {/* Navigation */}
      <Navigation />

      <div className="relative pt-32 pb-20 px-4 md:px-6 lg:px-8">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="absolute top-20 right-16 w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          />
          <motion.div
            variants={floatVariants}
            animate="animate"
            style={{ animationDelay: "2s" }}
            className="absolute bottom-20 left-16 w-80 h-80 bg-gradient-to-br from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl"
          />
          <motion.div
            variants={floatVariants}
            animate="animate"
            style={{ animationDelay: "4s" }}
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl"
          />
        </div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mb-16 text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 dark:border-purple-500/20 rounded-full"
          >
            <Icon
              icon="solar:code-square-bold"
              className="text-blue-500 dark:text-purple-400"
              width={20}
              height={20}
            />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {t("projects.tagText")}
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
            {t("projects.heading")}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("projects.description")}
          </p>

          {/* Back to Home Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
            >
              <Icon icon="solar:arrow-left-outline" width={18} height={18} />
              <span>Back to Home</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto space-y-12 md:space-y-16 relative z-10"
        >
          {projectEntries.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              gradient={project.gradient}
              statusVariant={project.statusVariant}
              github={project.github}
              live={project.live}
              tech={project.tech}
              index={index}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-20 relative z-10"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <Link href="/#contact">
              <motion.div
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon icon="solar:letter-bold" width={24} height={24} />
                <span>{t("projects.ctaText")}</span>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
