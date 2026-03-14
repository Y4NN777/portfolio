"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "@/contexts/TranslationContext";
import SectionHeader from "./SectionHeader";
import { translations } from "@/lib/i18n/translations";

type ExperienceItemKey = keyof typeof translations.en.experience.items;

const experienceEntries: Array<{
  id: ExperienceItemKey;
  companyLogo: string;
  companyColor: string;
  accentGradient: string;
  technologies: string[];
}> = [
  {
    id: "aïobi",
    companyColor: "from-white via-gray-100 to-gray-200",
    accentGradient: "from-[#296b8d] to-[#53c0fb]",
    companyLogo: "/aiobi.jpeg",
    technologies: ["Software Design", "Refactoring", "Software Architecture", "Systems Programming", "AI-Native Integration", "JavaScript", "TypeScript", "Python", "React","Next.js", "FastAPI", "Django", "MySQL", "PostgreSQL", "IndexedDB", "Agile Methodology"],
  },
  {
    id: "y7labs",
    companyLogo: "/Y7Labs.png",
    companyColor: "from-[#061627] to-[#0770cf]",
    accentGradient: "from-[#296b8d] to-[#53c0fb]",
    technologies: [
      "JavaScript", "TypeScript", "Laravel", "FastAPI", "Node.js", "AWS",
      "Google AI Studio", "OpenAI", "GenKit SDK", "React", "Next.js",
      "Tailwind CSS", "Docker", "OVHcloud", "Git", "GitHub", "GitHub Actions",
    ],
  },
  {
    id: "fikasso",
    companyColor: "from-[#e1f0fa] via-[#f0f7ff] to-[#c8e4f8]",
    accentGradient: "from-[#296b8d] to-[#53c0fb]",
    companyLogo: "/fikasso-security.jpeg",
    technologies: ["TypeScript", "Laravel", "React", "MySQL", "Node.js", "Agile Methodology"],
  },
  {
    id: "bitSolutions",
    companyColor: "from-white via-white to-[#e1f0fa]",
    accentGradient: "from-[#1f4d67] to-[#53c0fb]",
    companyLogo: "/bit_solutions.png",
    technologies: ["Python", "Google AI Studio", "Gemini", "Node.js", "Flask", "Supabase"],
  },
  {
    id: "freelance",
    companyColor: "from-white via-white to-[#e1f0fa]",
    accentGradient: "from-[#1f4d67] to-[#4bbcff]",
    companyLogo: "/freelance.png",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Figma"],
  },
];

export default function ExperienceSection() {
  const { t, locale } = useTranslations();
  const experienceCopy = translations[locale].experience.items as typeof translations.en.experience.items;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -90 },
    visible: {
      scale: 1, rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.3 },
    },
  };

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-16 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" style={{ background: "rgba(83,192,251,0.04)" }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl" style={{ background: "rgba(41,107,141,0.04)" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(83,192,251,0.03) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10">
        <SectionHeader
          tagText={t("experience.tagText")}
          tagIcon="solar:case-bold"
          heading={t("experience.heading")}
          showUnderline={false}
          description={t("experience.description")}
          centered={true}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-6 md:space-y-12 px-4 md:px-6"
        >
          {experienceEntries.map((exp, index) => {
            const copy = experienceCopy[exp.id];
            if (!copy) return null;
            return (
              <motion.div key={index} variants={itemVariants} className="relative group">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 md:gap-8 lg:gap-12">
                  {/* Company Logo */}
                  <div className="flex-shrink-0 flex flex-col items-center sm:items-start">
                    <motion.div
                      variants={iconVariants}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-br ${exp.companyColor} flex items-center justify-center shadow-xl md:shadow-2xl mb-3 md:mb-4 relative overflow-hidden transition-all duration-500`}
                      style={{ boxShadow: "0 4px 24px rgba(0, 33, 76, 0.3)" }}
                    >
                      <Image
                        src={exp.companyLogo}
                        alt={`${copy.company} logo`}
                        fill
                        sizes="80px"
                        priority={index === 0}
                        className="object-contain p-1 sm:p-2 md:p-3"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.companyColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4 md:space-y-6 min-w-0">
                    {/* Header */}
                    <div className="space-y-1 md:space-y-2">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-2 md:gap-3 text-[#296b8d] dark:text-[#94a3b8] text-xs md:text-sm font-medium"
                      >
                        <Icon icon="solar:calendar-outline" width={14} height={14} className="md:w-4 md:h-4" />
                        <span>{copy.period}</span>
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight"
                      >
                        {copy.role}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl font-semibold"
                        style={{ color: "#53c0fb" }}
                      >
                        {copy.company}
                      </motion.p>
                    </div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed"
                    >
                      {copy.description}
                    </motion.p>

                    {/* Achievements */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-3 md:space-y-4"
                    >
                      <h4 className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                        <Icon icon="solar:cup-star-bold" className="text-amber-500" width={22} height={22} />
                        {t("experience.keyAchievementsTitle")}
                      </h4>

                      <div className="space-y-2 md:space-y-3">
                        {copy.achievements.map((achievement: string, achIndex: number) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + achIndex * 0.1 }}
                            className="flex items-start gap-3 md:gap-4 group/achievement hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300"
                          >
                            <div className={`flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br ${exp.accentGradient} flex items-center justify-center mt-0.5 shadow-md md:shadow-lg group-hover/achievement:scale-110 transition-transform duration-300`}>
                              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="space-y-3 md:space-y-4"
                    >
                      <h4 className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                        <Icon icon="solar:programming-bold" style={{ color: "#53c0fb" }} width={18} height={18} />
                        {t("experience.techTitle")}
                      </h4>

                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-3 py-1.5 md:px-4 md:py-2 text-gray-800 dark:text-gray-200 rounded-lg md:rounded-xl font-medium text-xs md:text-sm transition-all duration-300"
                            style={{
                              background: "rgba(83, 192, 251, 0.06)",
                              border: "1px solid rgba(83, 192, 251, 0.15)",
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.borderColor = "rgba(83, 192, 251, 0.4)";
                              (e.currentTarget as HTMLElement).style.background = "rgba(83, 192, 251, 0.1)";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.borderColor = "rgba(83, 192, 251, 0.15)";
                              (e.currentTarget as HTMLElement).style.background = "rgba(83, 192, 251, 0.06)";
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Divider */}
                {index < experienceEntries.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mt-6 md:mt-12 h-px origin-left"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(83,192,251,0.25), transparent)" }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Experience Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center px-4 md:px-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              { value: "2+", label: t("experience.stats.years"), color: "#53c0fb" },
              { value: "7+", label: t("experience.stats.projects"), color: "#f59e0b" },
              { value: "77%", label: t("experience.stats.success"), color: "#4bbcff" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`group p-6 md:p-8 rounded-xl md:rounded-2xl transition-all duration-500 ${i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                style={{
                  background: "rgba(83, 192, 251, 0.05)",
                  border: "1px solid rgba(83, 192, 251, 0.15)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(83, 192, 251, 0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(83, 192, 251, 0.15)";
                }}
              >
                <div
                  className="text-4xl md:text-5xl font-bold mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-[#296b8d] dark:text-[#94a3b8] font-medium text-base md:text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
