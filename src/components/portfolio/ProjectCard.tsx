"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { useTranslations } from "@/contexts/TranslationContext";
import { analytics } from "@/lib/config";
import { translations } from "@/lib/i18n/translations";
import { projectEntries, type ProjectItemKey } from "@/lib/projects";

const iconSlots = [
  { top: "12%", left: "78%" },
  { top: "55%", right: "4%" },
  { bottom: "18%", left: "72%" },
  { top: "22%", right: "14%" },
  { bottom: "30%", left: "84%" },
  { top: "38%", right: "20%" },
  { bottom: "8%", left: "64%" },
  { bottom: "22%", left: "90%" },
  { bottom: "12%", left: "56%" },
  { top: "20%", right: "26%" },
  { top: "65%", left: "60%" },
  { bottom: "35%", left: "66%" },
];

type Project = (typeof projectEntries)[number];

export default function ProjectCard({
  project,
  copy,
}: {
  project: Project;
  copy: (typeof translations.en.projects.items)[ProjectItemKey];
}) {
  const { t } = useTranslations();
  const href = project.live || project.github || "/projects";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group w-full h-full"
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if (analytics.enabled) {
            posthog.capture("project_opened", {
              project_id: project.id,
              destination_type: project.live ? "live" : project.github ? "github" : "internal",
            });
          }
        }}
        className={`relative block h-full bg-gradient-to-br ${project.gradient} overflow-hidden`}
      >
        {/* Project thumbnail */}
        {project.thumbnail && (
          <div className="relative h-40 sm:h-44 md:h-52 w-full overflow-hidden">
            <Image
              src={project.thumbnail}
              alt={`Preview of ${copy.title}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        )}

        {/* Dotted pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:20px_20px] md:bg-[length:30px_30px]" />
        </div>

        {/* Floating tech icons — only on cards without a real screenshot */}
        {!project.thumbnail && (
          <div className="hidden md:block absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
            {project.icons.map((item, i) => (
              <motion.div
                key={item.label}
                className="absolute text-white text-2xl md:text-3xl"
                style={iconSlots[i]}
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                <Icon icon={item.icon} width={24} height={24} className="md:w-8 md:h-8" />
              </motion.div>
            ))}
          </div>
        )}

        {/* Content */}
        <div className={`relative z-10 ${project.thumbnail ? "p-5 sm:p-6 md:p-8" : ""}`}>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 leading-snug">
              {copy.title}
            </h3>
            <span className="inline-flex items-center gap-1.5 text-sm md:text-base font-semibold text-white/90 hover:text-white transition-colors whitespace-nowrap mt-1">
              {t("projects.viewProject")}
              <Icon
                icon="solar:arrow-right-outline"
                width={18}
                height={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </div>
          <p className="text-base md:text-lg text-white/90 font-medium mb-3">
            {copy.subtitle}
          </p>
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-4xl">
            {copy.description}
          </p>
          {project.tech.length > 0 && (
            <p className="mt-4 text-xs sm:text-sm md:text-base font-medium text-white/70">
              {project.tech.join(" · ")}
            </p>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
