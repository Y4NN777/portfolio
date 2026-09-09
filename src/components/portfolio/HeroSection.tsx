"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { useTranslations } from "@/contexts/TranslationContext";
import { analytics } from "@/lib/config";
import TypewriterRole from "./TypewriterRole";

export default function HeroSection() {
  const { t } = useTranslations();

  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: "rgba(83, 192, 251, 0.06)" }} />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl" style={{ background: "rgba(41, 107, 141, 0.06)" }} />

        {/* Geometric Accents */}
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 rounded-full"
          style={{ background: "rgba(83, 192, 251, 0.4)" }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-1 h-1 rounded-full"
          style={{ background: "rgba(75, 188, 255, 0.5)" }}
          animate={{ scale: [1, 2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-1.5 h-1.5 rounded-full"
          style={{ background: "rgba(98, 182, 226, 0.45)" }}
          animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      <motion.section
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-10 md:-mb-8"
      >

        {/* Portrait */}
        <motion.div
          className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl bg-[#f0f7ff]/80 dark:bg-[#0f2d40]/80"
          style={{ border: "1px solid rgba(83, 192, 251, 0.3)" }}
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Image
            src="/they4nn.jpeg"
            alt="Ragnang-Newende Yanis Axel DABO portrait"
            fill
            sizes="(min-width: 768px) 192px, 160px"
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* One span; --name-gradient carries the light/dark pair. */}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--name-gradient)" }}
          >
            The Y4NN
          </span>
        </motion.h1>

        {/* Headline */}
        <motion.p
          className="text-base md:text-lg text-[#296b8d] dark:text-[#94a3b8] mb-4 max-w-2xl mx-auto leading-relaxed"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {t("hero.headline")}
        </motion.p>

        {/* Typewriter Role Component */}
        <TypewriterRole />

        {/* Primary action — the one thing this page wants a visitor to do */}
        <motion.div
          className="mb-8"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-[#296b8d] dark:bg-[#53c0fb] dark:text-[#061825] shadow-lg hover:shadow-xl hover:bg-[#1f4d67] dark:hover:bg-[#4bbcff] transition-colors duration-300"
          >
            {t("hero.cta")}
            <Icon icon="solar:arrow-right-outline" width={20} height={20} aria-hidden />
          </Link>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          {([
            { href: "https://github.com/Y4NN777", icon: "simple-icons:github", label: t("hero.social.github"), hoverClass: "hover:text-[#061825] dark:hover:text-white", platform: "github" },
            { href: "https://www.linkedin.com/in/y4nnthedev777/", icon: "skill-icons:linkedin", label: t("hero.social.linkedin"), hoverClass: "hover:text-[#296b8d] dark:hover:text-[#53c0fb]", platform: "linkedin" },
            { href: "mailto:y4nn.dev@gmail.com", icon: "material-symbols:mail-rounded", label: t("hero.social.email"), hoverClass: "hover:text-amber-600 dark:hover:text-amber-400", platform: "email" }
          ] as Array<{ href: string; icon: string; label: string; hoverClass: string; platform: string }>).map((link) => (
            <motion.div key={link.label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={link.href}
                onClick={() => {
                  if (analytics.enabled) {
                    posthog.capture("social_profile_opened", { platform: link.platform });
                  }
                }}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm transition-all duration-300 shadow-md hover:shadow-lg text-[#0f2d40] dark:text-[#cbd5e1] bg-white dark:bg-[#1f4d67] border border-[#296b8d]/40 dark:border-[#53c0fb]/25 ${link.hoverClass}`}
              >
                <Icon icon={link.icon} width={18} height={18} />
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </motion.section>

      </div>
  );
}
