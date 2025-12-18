"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "@/contexts/TranslationContext";
import { translations } from "@/lib/i18n/translations";

interface ProjectCardProps {
  id: string;
  gradient: string;
  statusVariant: string;
  github: string;
  live: string;
  tech: string[];
  index: number;
}

const statusStyleMap: Record<string, { wrapper: string; dot: string }> = {
  live: {
    wrapper: "bg-green-500/20 text-green-200 border border-green-400/30",
    dot: "bg-green-400",
  },
  beta: {
    wrapper: "bg-orange-500/20 text-orange-200 border border-orange-400/30",
    dot: "bg-orange-400",
  },
  alpha: {
    wrapper: "bg-purple-500/20 text-purple-200 border border-purple-400/30",
    dot: "bg-purple-400",
  },
};

const getStatusStyles = (variant: string) =>
  statusStyleMap[variant] ?? {
    wrapper: "bg-gray-500/20 text-gray-200 border border-gray-400/30",
    dot: "bg-gray-300",
  };

// Tech icons mapping
const techIconMap: Record<string, string> = {
  "Next.js": "logos:nextjs-icon",
  "Next.js 14": "logos:nextjs-icon",
  "TypeScript": "logos:typescript-icon",
  "Tailwind CSS": "logos:tailwindcss-icon",
  "TailwindCSS": "logos:tailwindcss-icon",
  "React": "logos:react",
  "Node.js": "logos:nodejs-icon",
  "PostgreSQL": "logos:postgresql",
  "Postgres": "logos:postgresql",
  "Python": "logos:python",
  "FastAPI": "simple-icons:fastapi",
  "Docker": "devicon:docker",
  "Vercel": "logos:vercel-icon",
  "shadcn/ui": "simple-icons:shadcnui",
  "Supabase": "simple-icons:supabase",
};

const getRandomTechIcons = (projectTech: string[], count: number = 6) => {
  const icons: Array<{ icon: string; pos: { top?: string; bottom?: string; left?: string; right?: string } }> = [];
  const positions = [
    { top: "15%", left: "80%" },
    { top: "60%", right: "4%" },
    { bottom: "20%", left: "75%" },
    { top: "25%", right: "15%" },
    { bottom: "30%", left: "85%" },
    { top: "40%", right: "20%" },
    { bottom: "10%", left: "70%" },
    { bottom: "25%", left: "90%" },
    { bottom: "15%", left: "65%" },
    { top: "20%", right: "25%" },
  ];

  // Get matching icons for the project's tech stack using more efficient approach
  const matchedIcons = projectTech
    .map((tech) => {
      // Use Array.find to exit early on first match
      const matchedEntry = Object.entries(techIconMap).find(([key]) => tech.includes(key));
      return matchedEntry ? matchedEntry[1] : null;
    })
    .filter(Boolean) as string[];

  // If we have matched icons, use them; otherwise use default icons
  const iconsToUse = matchedIcons.length > 0 
    ? matchedIcons 
    : [
      "logos:react",
      "logos:nextjs-icon",
      "logos:typescript-icon",
      "logos:nodejs-icon",
      "logos:tailwindcss-icon",
      "logos:postgresql",
    ];

  // Create icon objects with positions
  for (let i = 0; i < Math.min(count, iconsToUse.length, positions.length); i++) {
    icons.push({
      icon: iconsToUse[i % iconsToUse.length],
      pos: positions[i],
    });
  }

  return icons;
};

export default function ProjectCard({
  id,
  gradient,
  statusVariant,
  github,
  live,
  tech,
  index,
}: ProjectCardProps) {
  const { t, locale } = useTranslations();
  const projectCopy = translations[locale].projects.items[id as keyof typeof translations.en.projects.items];
  
  if (!projectCopy) return null;

  const statusStyles = getStatusStyles(statusVariant);
  const floatingIcons = getRandomTechIcons(tech, 8);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group"
    >
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/30 dark:border-gray-700/40 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 overflow-hidden shadow-lg md:shadow-xl hover:shadow-2xl">
        {/* Project Header with Gradient */}
        <div className={`relative bg-gradient-to-br ${gradient} p-6 md:p-8 lg:p-10`}>
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:30px_30px]" />
          </div>

          {/* Floating tech icons */}
          <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            {floatingIcons.map((item, i) => (
              <motion.div
                key={i}
                className="absolute text-white"
                style={item.pos}
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon icon={item.icon} width={28} height={28} />
              </motion.div>
            ))}
          </div>

          <div className="relative z-10">
            {/* Project Meta Info */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <motion.span
                className="px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs md:text-sm font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                {projectCopy.category}
              </motion.span>

              {projectCopy.highlight && (
                <motion.span
                  className="px-3 py-1.5 md:px-4 md:py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-200 rounded-full text-xs md:text-sm font-semibold flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon icon="solar:star-bold" width={14} height={14} />
                  {projectCopy.highlight}
                </motion.span>
              )}

              <motion.span
                className={`px-3 py-1.5 md:px-4 md:py-2 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold flex items-center gap-2 ${statusStyles.wrapper}`}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-2 h-2 rounded-full ${statusStyles.dot} animate-pulse`} />
                {projectCopy.statusLabel}
              </motion.span>

              <span className="px-3 py-1.5 md:px-4 md:py-2 bg-black/20 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs md:text-sm font-medium">
                {projectCopy.timeline}
              </span>
            </div>

            {/* Project Title & Description */}
            <div className="mb-6 md:mb-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                {projectCopy.title}
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-white/90 font-medium mb-3">
                {projectCopy.subtitle}
              </p>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                {projectCopy.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-xl hover:bg-white/30 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl active:scale-95"
              >
                <Icon icon="solar:code-bold" width={20} height={20} />
                <span>{t("projects.viewRepository")}</span>
              </Link>

              <Link
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl active:scale-95"
              >
                <Icon icon="solar:arrow-up-outline" width={20} height={20} />
                <span>{t("projects.liveDemo")}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Project Details Content */}
        <div className="p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Features Section */}
            <div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <Icon icon="solar:settings-bold" className="text-white w-5 h-5" />
                </div>
                <span>{t("projects.featuresTitle")}</span>
              </h4>
              <ul className="space-y-2.5">
                {projectCopy.features?.map((feature: string, featureIndex: number) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2.5 text-gray-700 dark:text-gray-300"
                  >
                    <Icon
                      icon="solar:check-circle-bold"
                      className="text-green-500 mt-0.5 flex-shrink-0 w-5 h-5"
                    />
                    <span className="text-sm md:text-base leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Deliverables Section */}
            <div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                  <Icon icon="solar:delivery-bold" className="text-white w-5 h-5" />
                </div>
                <span>{t("projects.deliverablesTitle")}</span>
              </h4>
              <ul className="space-y-2.5">
                {projectCopy.deliverables?.map((deliverable: string, deliverableIndex: number) => (
                  <motion.li
                    key={deliverableIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: deliverableIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2.5 text-gray-700 dark:text-gray-300"
                  >
                    <Icon
                      icon="solar:box-bold"
                      className="text-blue-500 mt-0.5 flex-shrink-0 w-5 h-5"
                    />
                    <span className="text-sm md:text-base leading-relaxed">{deliverable}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
            <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                <Icon icon="solar:code-bold" className="text-white w-5 h-5" />
              </div>
              <span>{t("projects.techTitle")}</span>
            </h4>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {tech.map((techItem, techIndex) => (
                <motion.span
                  key={techIndex}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: techIndex * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-xs md:text-sm font-medium border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-200"
                >
                  {techItem}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
