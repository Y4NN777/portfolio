"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "@/contexts/TranslationContext";
import SectionHeader from "./SectionHeader";
import { translations } from "@/lib/i18n/translations";

type ExperienceItemKey = keyof typeof translations.en.experience.items;

const INITIAL_VISIBLE = 3;

const experienceEntries: Array<{
  id: ExperienceItemKey;
  companyLogo: string;
  companyColor: string;
  accentGradient: string;
}> = [
  {
    id: "aïobi",
    companyColor: "from-white via-gray-100 to-gray-200",
    accentGradient: "from-[#296b8d] to-[#53c0fb]",
    companyLogo: "/aiobi.jpeg",
  },
  {
    id: "y7labs",
    companyLogo: "/Y7Labs.png",
    companyColor: "from-[#061627] to-[#0770cf]",
    accentGradient: "from-[#296b8d] to-[#53c0fb]",
  },
  {
    id: "fikasso",
    companyColor: "from-[#e1f0fa] via-[#f0f7ff] to-[#c8e4f8]",
    accentGradient: "from-[#296b8d] to-[#53c0fb]",
    companyLogo: "/fikasso-security.jpeg",
  },
  {
    id: "bitSolutions",
    companyColor: "from-white via-white to-[#e1f0fa]",
    accentGradient: "from-[#1f4d67] to-[#53c0fb]",
    companyLogo: "/bit_solutions.png",
  },
  {
    id: "freelance",
    companyColor: "from-white via-white to-[#e1f0fa]",
    accentGradient: "from-[#1f4d67] to-[#4bbcff]",
    companyLogo: "/freelance.png",
  },
];

export default function ExperienceSection() {
  const { t, locale } = useTranslations();
  const [showAll, setShowAll] = useState(false);
  const experienceCopy = translations[locale].experience.items as typeof translations.en.experience.items;
  const visibleEntries = showAll ? experienceEntries : experienceEntries.slice(0, INITIAL_VISIBLE);

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-16 md:mb-24 lg:mb-32 relative overflow-hidden"
    >      {/* Background Elements */}
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
          className="max-w-5xl mx-auto space-y-6 md:space-y-12 px-4 md:px-6"
        >
          {visibleEntries.map((exp, index) => {
            const copy = experienceCopy[exp.id];
            if (!copy) return null;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true, amount: 0.1 }}
                className="relative group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 md:gap-8 lg:gap-12">
                  {/* Company Logo */}
                  <div className="flex-shrink-0 flex flex-col items-center sm:items-start">
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${exp.companyColor} flex items-center justify-center shadow-lg md:shadow-xl mb-2 md:mb-3 relative overflow-hidden transition-all duration-500`}
                      style={{ boxShadow: "0 4px 24px rgba(0, 33, 76, 0.3)" }}
                    >
                      <Image
                        src={exp.companyLogo}
                        alt={`${copy.company} logo`}
                        fill
                        sizes="56px"
                        priority={index === 0}
                        className="object-contain p-0.5 sm:p-1"
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
                        className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-tight"
                      >
                        {copy.role}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-base font-medium"
                        style={{ color: "hsl(var(--primary))" }}
                      >
                        {copy.company}
                      </motion.p>
                    </div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-gray-700 dark:text-gray-300 text-base leading-relaxed"
                    >
                      {copy.description}
                    </motion.p>

                    {/* Additional Context */}
                    {"additionalContext" in copy && copy.additionalContext && (
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55 }}
                        className="text-gray-700 dark:text-gray-300 text-base leading-relaxed"
                      >
                        {copy.additionalContext}
                      </motion.p>
                    )}

                    {/* Achievements */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-2.5 md:space-y-3"
                    >
                      <h4 className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                        <Icon icon="solar:cup-star-bold" className="text-amber-600 dark:text-amber-400" width={18} height={18} />
                        {t("experience.keyAchievementsTitle")}
                      </h4>

                      <div className="space-y-2 md:space-y-2.5">
                        {copy.achievements.map((achievement: string, achIndex: number) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + achIndex * 0.1 }}
                            className="flex items-start gap-3 md:gap-3 group/achievement hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300"
                          >
                            <div className={`flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br ${exp.accentGradient} flex items-center justify-center mt-0.5 shadow-md md:shadow-lg group-hover/achievement:scale-110 transition-transform duration-300`}>
                              <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full" />
                            </div>
                            <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                  </div>
                </div>

                {/* Divider */}
                {index < visibleEntries.length - 1 && (
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

        {experienceEntries.length > INITIAL_VISIBLE && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-12 text-center"
          >
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 text-[#296b8d] dark:text-[#8ed3fc] bg-white dark:bg-[#1f4d67] border-2 border-[#53c0fb]/50 hover:border-[#53c0fb] shadow-md hover:shadow-lg active:scale-95"
            >
              {showAll ? t("experience.showLess") : t("experience.viewAll")}
              <Icon
                icon={showAll ? "solar:minus-circle-bold" : "solar:add-circle-bold"}
                width={18}
                height={18}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
            </button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
