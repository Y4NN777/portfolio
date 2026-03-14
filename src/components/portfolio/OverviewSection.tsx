"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useTranslations } from "@/contexts/TranslationContext";
import { translations } from "@/lib/i18n/translations";
import SectionHeader from "./SectionHeader";

type OverviewRoleKey = keyof typeof translations.en.overview.roles;

const professionalRoleCards: Array<{
  id: OverviewRoleKey;
  containerClass: string;
  iconWrapper: string;
  icon: string;
  badgeIcon: string;
  badgeColor: string;
  highlightColor: string;
}> = [
  {
    id: "freelance",
    containerClass:
      "p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-sm shadow-xl flex flex-col",
    iconWrapper: "p-2 md:p-3 rounded-lg md:rounded-xl shadow-lg",
    icon: "solar:code-bold",
    badgeIcon: "solar:star-bold",
    badgeColor: "text-amber-500",
    highlightColor: "text-[#53c0fb]",
  },
  {
    id: "matrix",
    containerClass:
      "p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-sm shadow-xl flex flex-col",
    iconWrapper: "p-2 md:p-3 rounded-lg md:rounded-xl shadow-lg",
    icon: "solar:hospital-bold",
    badgeIcon: "solar:shield-check-bold",
    badgeColor: "text-[#53c0fb]",
    highlightColor: "text-[#4bbcff]",
  },
];

export default function OverviewSection() {
  const { locale } = useTranslations();
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
          tagText={overviewCopy.tagText}
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
              <div
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
                      <span className="font-bold" style={{ color: "#53c0fb" }}>
                        {overviewCopy.introHighlight.backend}
                      </span>
                      {overviewCopy.introHighlight.connector}
                      <span className="font-bold text-amber-500">
                        {overviewCopy.introHighlight.ai}
                      </span>
                      <span className="font-bold" style={{ color: "#296b8d" }} >
                        {overviewCopy.introHighlight.experience}
                      </span>
                      {overviewCopy.introHighlight.suffix}
                    </p>
                  </div>

                  <div className="space-y-3 md:space-y-4 border-t pt-4 md:pt-6" style={{ borderColor: "rgba(83, 192, 251, 0.15)" }}>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {overviewCopy.introParagraph1}
                    </p>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {overviewCopy.introParagraph2}
                    </p>
                  </div>

                  {/* Skills Highlight */}
                  <div className="border-t pt-4 md:pt-6" style={{ borderColor: "rgba(83, 192, 251, 0.15)" }}>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                      <Icon icon="solar:lightning-bold" className="text-amber-500 w-4 md:w-5 h-4 md:h-5" width={20} height={20} />
                      {overviewCopy.coreSkillsTitle}
                    </h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {overviewCopy.coreSkills.map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2 + index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -1 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-[#296b8d] dark:text-[#62b6e2] rounded-lg md:rounded-xl hover:shadow-lg transition-all duration-300"
                          style={{
                            background: "rgba(83, 192, 251, 0.08)",
                            border: "1px solid rgba(83, 192, 251, 0.2)",
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Roles Grid */}
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {professionalRoleCards.map((card) => {
                  const copy = overviewCopy.roles?.[card.id];
                  if (!copy) return null;
                  return (
                    <motion.div
                      key={card.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={card.containerClass}
                      style={{
                        background: "rgba(83, 192, 251, 0.05)",
                        border: "1px solid rgba(83, 192, 251, 0.15)",
                      }}
                    >
                      <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                        <div
                          className={card.iconWrapper}
                          style={{ background: "linear-gradient(135deg, #296b8d, #53c0fb)" }}
                        >
                          <Icon icon={card.icon} className="text-white w-5 md:w-6 h-5 md:h-6" width={24} height={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-base md:text-lg">{copy.title}</h4>
                          <p className="font-medium text-sm md:text-base" style={{ color: "#53c0fb" }}>{copy.company}</p>
                          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1">{copy.period}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm leading-relaxed mb-2 md:mb-3 flex-1">
                        {copy.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs md:text-sm mt-auto">
                        <Icon icon={card.badgeIcon} className={`${card.badgeColor} w-3 md:w-4 h-3 md:h-4`} width={16} height={16} />
                        <span className={`font-semibold ${card.highlightColor}`}>{copy.badge}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
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
                <Icon icon="solar:chat-round-dots-bold" style={{ color: "#53c0fb" }} className="w-5 h-5" width={20} height={20} />
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

            {/* Achievement Highlights */}
            <div
              className="p-6 rounded-2xl backdrop-blur-sm shadow-xl"
              style={{
                background: "rgba(83, 192, 251, 0.05)",
                border: "1px solid rgba(83, 192, 251, 0.15)",
              }}
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Icon icon="solar:cup-star-bold" className="text-amber-500 w-5 h-5" width={20} height={20} />
                {overviewCopy.achievementsTitle}
              </h4>
              <div className="space-y-4">
                {[
                  { icon: "solar:star-bold", text: overviewCopy.achievements[0], color: "text-amber-500" },
                  { icon: "solar:cpu-bolt-bold-duotone", text: overviewCopy.achievements[1], color: "text-[#53c0fb]" },
                  { icon: "solar:code-square-bold", text: overviewCopy.achievements[2], color: "text-[#4bbcff]" },
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + index * 0.2 }}
                    className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 group"
                    style={{ background: "rgba(83, 192, 251, 0.06)", border: "1px solid rgba(83,192,251,0.1)" }}
                  >
                    <Icon icon={achievement.icon} className={`${achievement.color} w-5 h-5`} width={20} height={20} />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-300">{achievement.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Available for Hire */}
            <div
              className="p-6 rounded-2xl backdrop-blur-sm shadow-xl"
              style={{
                background: "rgba(83, 192, 251, 0.05)",
                border: "1px solid rgba(83, 192, 251, 0.15)",
              }}
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Icon icon="solar:rocket-bold" style={{ color: "#53c0fb" }} className="w-5 h-5" width={20} height={20} />
                {overviewCopy.availabilityTitle}
              </h4>
              <div className="space-y-3.5">
                {[
                  { icon: "solar:check-circle-bold", text: overviewCopy.availability[0], color: "text-green-600" },
                  { icon: "solar:planet-2-bold", text: overviewCopy.availability[1], color: "text-[#53c0fb]" },
                  { icon: "solar:clock-circle-bold", text: overviewCopy.availability[2], color: "text-[#4bbcff]" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.0 + i * 0.2 }}
                    className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 group"
                    style={{ background: "rgba(83, 192, 251, 0.06)", border: "1px solid rgba(83,192,251,0.1)" }}
                  >
                    <Icon icon={item.icon} className={`${item.color} w-5 h-5`} width={20} height={20} />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
