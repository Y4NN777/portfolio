"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "@/contexts/TranslationContext";
import { translations } from "@/lib/i18n/translations";
import SectionHeader from "./SectionHeader";

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
    gradient: "from-[#1f4d67] to-[#53c0fb]",
    statusVariant: "live",
    github: "https://github.com/Y4NN777/y7-jprompter.git",
    live: "https://y7-jprompter.vercel.app",
    tech: [
      "Next.js 14", "TypeScript", "Tailwind CSS",
      "Google Gemini 2.5 Flash", "Prism.js + react-syntax-highlighter", "Vercel",
    ],
  },
  {
    id: "tracklet",
    gradient: "from-[#296b8d] to-[#4bbcff]",
    statusVariant: "beta",
    github: "https://github.com/Y4NN777/Tracklet",
    live: "https://tracklet-phi.vercel.app",
    tech: [
      "Next.js", "TypeScript", "TailwindCSS", "shadcn/ui",
      "Supabase (Postgres + Auth)", "Google Gemini + Genkit", "Supabase Realtime",
    ],
  },
  {
    id: "tenglaafi",
    gradient: "from-[#0f2d40] to-[#296b8d]",
    statusVariant: "alpha",
    github: "https://github.com/Y4NN777/tenglaafi",
    live: "https://y7labs.studio/tenglaafi/",
    tech: [
      "Python 3.12", "FastAPI", "LangChain", "ChromaDB",
      "Sentence Transformers (MPNet)", "HuggingFace Inference API",
      "Mistral-7B-Instruct", "Tailwind CSS", "Makefile",
    ],
  },
];

const statusStyleMap: Record<string, { wrapper: string; dot: string }> = {
  live: {
    wrapper: "bg-green-500/20 text-green-200 border border-green-400/30",
    dot: "bg-green-400",
  },
  beta: {
    wrapper: "border text-[#4bbcff]",
    dot: "bg-[#53c0fb]",
  },
  alpha: {
    wrapper: "border text-[#62b6e2]",
    dot: "bg-[#296b8d]",
  },
};

const getStatusStyles = (variant: string) =>
  statusStyleMap[variant] ?? {
    wrapper: "bg-white/10 text-white/70 border border-white/20",
    dot: "bg-white/50",
  };

export default function ProjectsSection() {
  const { t, locale } = useTranslations();
  const projectCopy = translations[locale].projects.items as typeof translations.en.projects.items;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 10, -10], x: [-5, 5, -5],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="mb-16 md:mb-24 lg:mb-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute top-5 md:top-20 right-2 md:right-16 w-12 sm:w-16 md:w-32 h-12 sm:h-16 md:h-32 rounded-full blur-xl md:blur-4xl"
          style={{ background: "radial-gradient(circle, rgba(83,192,251,0.15) 0%, rgba(41,107,141,0.08) 100%)" }}
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute bottom-5 md:bottom-20 left-2 md:left-16 w-16 sm:w-20 md:w-40 h-16 sm:h-20 md:h-40 rounded-full blur-xl md:blur-2xl"
          style={{ animationDelay: "2s", background: "radial-gradient(circle, rgba(75,188,255,0.10) 0%, rgba(83,192,251,0.05) 100%)" }}
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="hidden lg:block absolute top-1/3 right-1/3 w-20 h-20 rounded-full blur-xl"
          style={{ animationDelay: "4s", background: "radial-gradient(circle, rgba(41,107,141,0.12) 0%, transparent 100%)" }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        <SectionHeader
          tagText={t("projects.tagText")}
          tagIcon="solar:code-square-bold"
          heading={t("projects.heading")}
          description={t("projects.description")}
          showUnderline={true}
          centered={true}
        />

        {/* Stacked Projects */}
        <div className="max-w-7xl mx-auto px-3 md:px-4 space-y-8 md:space-y-12 lg:space-y-16">
          {projectEntries.map((project, index) => {
            const copy = projectCopy[project.id];
            if (!copy) return null;
            const statusStyles = getStatusStyles(project.statusVariant);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group"
              >
                <div
                  className="backdrop-blur-xl rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 bg-white/75 dark:bg-[#0f2d40]/90"
                  style={{
                    border: "1px solid rgba(83, 192, 251, 0.15)",
                    boxShadow: "0 4px 24px rgba(83, 192, 251, 0.08)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(83, 192, 251, 0.35)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(83, 192, 251, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(83, 192, 251, 0.15)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(83, 192, 251, 0.08)";
                  }}
                >

                  {/* Project Header with Gradient */}
                  <div className={`relative bg-gradient-to-br ${project.gradient} p-4 sm:p-6 md:p-8 lg:p-10`}>
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:20px_20px] md:bg-[length:30px_30px]" />
                    </div>

                    {/* Floating tech icons */}
                    <div className="hidden md:block absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                      {[
                        { icon: "logos:react", pos: { top: "15%", left: "80%" } },
                        { icon: "logos:nextjs-icon", pos: { top: "60%", right: "4%" } },
                        { icon: "logos:typescript-icon", pos: { bottom: "20%", left: "75%" } },
                        { icon: "logos:nodejs-icon", pos: { top: "25%", right: "15%" } },
                        { icon: "logos:tailwindcss-icon", pos: { bottom: "30%", left: "85%" } },
                        { icon: "logos:postgresql", pos: { top: "40%", right: "20%" } },
                        { icon: "simple-icons:langchain", pos: { bottom: "10%", left: "70%" } },
                        { icon: "logos:socket-io", pos: { bottom: "25%", left: "90%" } },
                        { icon: "logos:vercel-icon", pos: { bottom: "15%", left: "65%" } },
                        { icon: "devicon:docker", pos: { top: "20%", right: "25%" } }
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          className="absolute text-white text-2xl md:text-3xl"
                          style={item.pos}
                          animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                          transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Icon icon={item.icon} width={24} height={24} className="md:w-8 md:h-8" />
                        </motion.div>
                      ))}
                    </div>

                    <div className="relative z-10">
                      {/* Project Meta */}
                      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
                        <motion.span
                          className="px-2.5 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs md:text-sm font-semibold"
                          whileHover={{ scale: 1.05 }}
                        >
                          {copy.category}
                        </motion.span>

                        {copy.highlight && (
                          <motion.span
                            className="px-2.5 py-1.5 md:px-4 md:py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-200 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 md:gap-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Icon icon="solar:star-bold" width={12} height={12} className="md:w-4 md:h-4" />
                            <span className="hidden sm:inline">{copy.highlight}</span>
                          </motion.span>
                        )}

                        <motion.span
                          className={`px-2.5 py-1.5 md:px-4 md:py-2 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 md:gap-2 ${statusStyles.wrapper}`}
                          style={{ borderColor: "rgba(83,192,251,0.35)" }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${statusStyles.dot} animate-pulse`} />
                          {copy.statusLabel}
                        </motion.span>

                        <span className="px-2.5 py-1.5 md:px-4 md:py-2 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs md:text-sm font-medium">
                          {copy.timeline}
                        </span>

                        <span className="hidden sm:inline-block px-2.5 py-1.5 md:px-4 md:py-2 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs md:text-sm font-medium">
                          {copy.clientType}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="mb-6 md:mb-8">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 leading-tight">
                          {copy.title}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 font-medium mb-3 md:mb-4">
                          {copy.subtitle}
                        </p>
                        <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl">
                          {copy.description}
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                        <Link
                          href={project.github}
                          className="flex items-center justify-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg md:rounded-xl hover:bg-white/30 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl active:scale-95"
                        >
                          <Icon icon="solar:code-bold" width={18} height={18} className="md:w-5 md:h-5" />
                          <span>{t("projects.viewRepository")}</span>
                        </Link>

                        <Link
                          href={project.live}
                          className="flex items-center justify-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-white text-[#061825] rounded-lg md:rounded-xl hover:bg-[#f0f7ff] transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl active:scale-95"
                        >
                          <Icon icon="solar:arrow-up-outline" width={18} height={18} className="md:w-5 md:h-5" />
                          <span>{t("projects.liveDemo")}</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-4 sm:p-6 md:p-8 lg:p-10 dark:bg-[#0f2d40]/60">
                    <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">

                      {/* Features */}
                      <div>
                        <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                          <div className="p-1.5 md:p-2 rounded-lg md:rounded-xl" style={{ background: "linear-gradient(135deg, #296b8d, #53c0fb)" }}>
                            <Icon icon="solar:settings-bold" className="text-white w-[18px] h-[18px] md:w-6 md:h-6" />
                          </div>
                          <span>{t("projects.featuresTitle")}</span>
                        </h4>
                        <ul className="space-y-2.5 md:space-y-3">
                          {copy.features.map((feature: string, featureIndex: number) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: featureIndex * 0.1 }}
                              className="flex items-start gap-2.5 md:gap-3 text-gray-700 dark:text-gray-300"
                            >
                              <Icon icon="solar:check-circle-bold" style={{ color: "#53c0fb" }} className="mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                              <span className="text-sm md:text-base leading-relaxed">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div className="mt-6 lg:mt-0">
                        <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                          <div className="p-1.5 md:p-2 rounded-lg md:rounded-xl" style={{ background: "linear-gradient(135deg, #1f4d67, #296b8d)" }}>
                            <Icon icon="solar:delivery-bold" className="text-white w-[18px] h-[18px] md:w-6 md:h-6" />
                          </div>
                          <span>{t("projects.deliverablesTitle")}</span>
                        </h4>
                        <ul className="space-y-2.5 md:space-y-3">
                          {copy.deliverables.map((deliverable: string, deliverableIndex: number) => (
                            <motion.li
                              key={deliverableIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: deliverableIndex * 0.1 }}
                              className="flex items-start gap-2.5 md:gap-3 text-gray-700 dark:text-gray-300"
                            >
                              <Icon icon="solar:box-bold" style={{ color: "#4bbcff" }} className="mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                              <span className="text-sm md:text-base leading-relaxed">{deliverable}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-6 md:mt-8 lg:mt-12 pt-6 md:pt-8" style={{ borderTop: "1px solid rgba(83, 192, 251, 0.15)" }}>
                      <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                        <div className="p-1.5 md:p-2 rounded-lg md:rounded-xl" style={{ background: "linear-gradient(135deg, #0f2d40, #53c0fb)" }}>
                          <Icon icon="solar:code-bold" className="text-white w-[18px] h-[18px] md:w-6 md:h-6" />
                        </div>
                        <span>{t("projects.techTitle")}</span>
                      </h4>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-2.5 py-1.5 md:px-4 md:py-2 text-gray-700 dark:text-gray-300 rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-all duration-200"
                            style={{
                              background: "rgba(83, 192, 251, 0.06)",
                              border: "1px solid rgba(83, 192, 251, 0.15)",
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12 md:mt-16 lg:mt-20 px-4 mb-12"
        >
          <Link href="#contact">
            <motion.div
              className="inline-flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 backdrop-blur-sm rounded-xl md:rounded-2xl"
              style={{
                background: "rgba(83, 192, 251, 0.08)",
                border: "1px solid rgba(83, 192, 251, 0.2)",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Icon icon="solar:programming-bold" style={{ color: "#53c0fb" }} className="w-5 h-5 md:w-6 md:h-6" />
              <span className="text-[#296b8d] dark:text-[#94a3b8] font-medium text-sm md:text-base text-center">
                {t("projects.ctaText")}
              </span>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
