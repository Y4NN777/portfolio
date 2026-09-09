"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useTranslations } from "@/contexts/TranslationContext";
import { translations } from "@/lib/i18n/translations";
import SectionHeader from "./SectionHeader";
import BooksCard from "./BooksCard";

export default function OverviewSection() {
  const { t, locale } = useTranslations();
  const overviewCopy = translations[locale].overview as typeof translations.en.overview;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const floatVariants = {
    animate: {
      y: [-15, 15, -15], x: [-5, 5, -5],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      id="overview"
      className="mb-16 md:mb-24 lg:mb-32 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute top-10 md:top-20 right-4 md:right-16 w-16 md:w-24 h-16 md:h-24 rounded-full blur-xl md:blur-4xl"
          style={{ background: "radial-gradient(circle, rgba(83,192,251,0.2) 0%, rgba(41,107,141,0.1) 100%)" }}
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "3s", background: "radial-gradient(circle, rgba(75,188,255,0.15) 0%, rgba(98,182,226,0.08) 100%)" }}
          className="absolute bottom-8 md:bottom-16 left-4 md:left-16 w-24 md:w-40 h-24 md:h-40 rounded-full blur-xl md:blur-2xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "6s", background: "radial-gradient(circle, rgba(41,107,141,0.15) 0%, rgba(31,77,103,0.08) 100%)" }}
          className="hidden md:block absolute top-1/2 left-1/3 w-16 h-16 rounded-full blur-xl"
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
          tagIcon="solar:user-heart-bold"
          heading={overviewCopy.heading}
          description={overviewCopy.description}
          showUnderline={true}
          centered={true}
        />

        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-start px-4">

          {/* Main Profile Section */}
          <motion.div variants={itemVariants} className="lg:col-span-8">
            <div className="space-y-6 md:space-y-8">

              {/* Introduction Card */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="relative p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl backdrop-blur-xl shadow-2xl bg-white/85 dark:bg-[#0f2d40]/90"
                style={{ border: "1px solid rgba(83, 192, 251, 0.15)" }}
              >
                {/* Decorative dots */}
                <div className="absolute top-4 md:top-6 right-4 md:right-6 w-3 md:w-4 h-3 md:h-4 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-4 md:top-6 right-10 md:right-14 w-2 md:w-3 h-2 md:h-3 rounded-full animate-pulse delay-300" style={{ background: "#53c0fb" }}></div>
                <div className="hidden md:block absolute top-6 right-20 w-2 h-2 rounded-full animate-pulse delay-500" style={{ background: "#4bbcff" }}></div>

                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white flex items-center gap-2 md:gap-3">
                      <span className="text-2xl sm:text-3xl md:text-4xl">👋</span>
                      {overviewCopy.greeting}
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:mb-6">
                      {overviewCopy.introHighlight.prefix}
                      {/* Three visually distinct highlights: bright sky, deep navy accent, amber warmth */}
                      <span className="font-bold" style={{ color: "hsl(var(--primary))" }}>
                        {overviewCopy.introHighlight.backend}
                      </span>
                      {overviewCopy.introHighlight.connector}
                      <span className="font-bold text-amber-600 dark:text-amber-400">
                        {overviewCopy.introHighlight.ai}
                      </span>
                      <span className="font-bold" style={{ color: "#296b8d" }} >
                        {overviewCopy.introHighlight.experience}
                      </span>
                      {overviewCopy.introHighlight.suffix}
                    </p>
                  </div>

                  <div className="space-y-3 md:space-y-4 border-t pt-4 md:pt-6" style={{ borderColor: "rgba(83, 192, 251, 0.15)" }}>
                    {overviewCopy.introParagraphs.map((paragraph, index) => (
                      <p key={index} className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                </div>
              </motion.div>
              </div>
            </motion.div>

          {/* Sidebar */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6 mt-6 lg:mt-0">
            {/* Contact Card */}
            <div
              className="p-6 rounded-2xl backdrop-blur-sm shadow-xl"
              style={{
                background: "rgba(83, 192, 251, 0.05)",
                border: "1px solid rgba(83, 192, 251, 0.15)",
              }}
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Icon icon="solar:chat-round-dots-bold" style={{ color: "hsl(var(--primary))" }} className="w-5 h-5" width={20} height={20} />
                {overviewCopy.contactTitle}
              </h4>
              <div className="space-y-3">
                <motion.a
                  href="mailto:y4nn.dev@gmail.com"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 group bg-white/60 dark:bg-[#1f4d67]/40"
                  style={{ border: "1px solid rgba(83,192,251,0.15)" }}
                >
                  <div className="p-1 rounded-md shadow-md" style={{ background: "linear-gradient(135deg, #1f4d67, #296b8d)" }}>
                    <Icon icon="solar:letter-bold" className="text-white w-4 h-4" width={16} height={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white break-all">y4nn.dev@gmail.com</div>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/60 dark:bg-[#1f4d67]/40"
                  style={{ border: "1px solid rgba(83,192,251,0.15)" }}
                >
                  <div className="p-1 rounded-md shadow-md" style={{ background: "linear-gradient(135deg, #296b8d, #53c0fb)" }}>
                    <Icon icon="solar:global-bold" className="text-white w-4 h-4" width={16} height={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">{overviewCopy.contactWebsites}</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/60 dark:bg-[#1f4d67]/40"
                  style={{ border: "1px solid rgba(83,192,251,0.15)" }}
                >
                  <div className="p-1 rounded-md shadow-md" style={{ background: "linear-gradient(135deg, #0f2d40, #1f4d67)" }}>
                    <Icon icon="solar:map-point-bold" className="text-white w-4 h-4" width={16} height={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">{overviewCopy.contactLocation}</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Full-width row below the grid, opened by a rule and sitting
              directly before Featured Projects. Engineering Focus takes the
              8-track and the reading list the 4-track, which shortens the
              sidebar enough for the bio to be the taller column — that is
              what closes the gap 7ff3452 opened. */}
          <div
            className="lg:col-span-12 mt-8 md:mt-10 pt-6 md:pt-8 border-t grid lg:grid-cols-12 gap-6 md:gap-8 items-start"
            style={{ borderColor: "rgba(83, 192, 251, 0.15)" }}
          >
            <motion.div variants={itemVariants} className="lg:col-span-8">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 md:mb-6 flex items-center gap-2">
                <Icon icon="solar:lightning-bold" className="text-amber-600 dark:text-amber-400 w-4 md:w-5 h-4 md:h-5" width={20} height={20} />
                {overviewCopy.coreSkillsTitle}
              </h4>
              {/* Cards, but `items-start` so each sizes to its own content.
                  Stretching them to the tallest in the row was what made six
                  eleven-word items cost 140px each. */}
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4 items-start">
                {overviewCopy.coreSkills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06, duration: 0.5 }}
                    className="p-3 md:p-4 rounded-xl backdrop-blur-sm"
                    style={{
                      background: "rgba(83, 192, 251, 0.06)",
                      border: "1px solid rgba(83, 192, 251, 0.18)",
                    }}
                  >
                    <div className="font-semibold text-gray-900 dark:text-white text-base mb-0.5">{skill.title}</div>
                    <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="lg:col-span-4">
              <BooksCard books={translations[locale].overview.books} />
            </motion.div>
          </div>

        </div>
      </motion.div>
    </motion.section>
  );
}
