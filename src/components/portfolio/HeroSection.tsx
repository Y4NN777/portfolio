"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/contexts/TranslationContext";
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-10 md:-mb-8"
      >

        {/* Portrait */}
        <motion.div
          className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl bg-[#f0f7ff]/80 dark:bg-[#0f2d40]/80"
          style={{ border: "1px solid rgba(83, 192, 251, 0.3)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Image
            src="/they4nn.jpeg"
            alt="Ragnang-Newende Yanis Axel DABO portrait"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Light: navy-to-accent so the name has color personality */}
          <span
            className="dark:hidden bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #061825, #296b8d, #53c0fb, #296b8d, #061825)" }}
          >
            Ragnang-Newende Yanis Axel DABO
          </span>
          {/* Dark: white-to-skyblue-to-white so the accent shimmers through */}
          <span
            className="hidden dark:inline bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #f1f5f9, #53c0fb, #4bbcff, #53c0fb, #f1f5f9)" }}
          >
            Ragnang-Newende Yanis Axel DABO
          </span>
        </motion.h1>

        {/* Typewriter Role Component */}
        <TypewriterRole />

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-[#296b8d] dark:text-[#94a3b8] mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {t("hero.tagline")}
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          {([
            { href: "https://github.com/Y4NN777", icon: "simple-icons:github", label: t("hero.social.github"), hoverClass: "hover:text-[#061825] dark:hover:text-white" },
            { href: "https://www.linkedin.com/in/y4nnthedev777/", icon: "skill-icons:linkedin", label: t("hero.social.linkedin"), hoverClass: "hover:text-[#296b8d] dark:hover:text-[#53c0fb]" },
            { href: "mailto:y4nn.dev@gmail.com", icon: "material-symbols:mail-rounded", label: t("hero.social.email"), hoverClass: "hover:text-amber-600 dark:hover:text-amber-400" }
          ] as Array<{ href: string; icon: string; label: string; hoverClass: string }>).map((link) => (
            <motion.div key={link.label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={link.href}
                className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full text-sm transition-all duration-300 shadow-lg hover:shadow-xl text-[#0f2d40] dark:text-[#94a3b8] bg-white/80 dark:bg-[#1f4d67]/60 border border-[#296b8d]/40 dark:border-[#53c0fb]/25 ${link.hoverClass}`}
              >
                <Icon icon={link.icon} width={18} height={18} />
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm"
          style={{
            background: "rgba(220, 252, 231, 0.6)",
            border: "1px solid rgba(134, 239, 172, 0.4)",
          }}
        >
          <motion.div
            className="w-2 h-2 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Link href="#contact">
            <span className="text-green-700 dark:text-green-300 text-sm font-medium">
              {t("hero.status")}
            </span>
          </Link>
        </motion.div>
      </motion.section>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="hidden md:flex absolute  bottom-10 left-0 right-0 justify-center pb-8 z-10"
      >
        <motion.button
          onClick={() => {
            const overviewSection = document.getElementById('overview');
            if (overviewSection) {
              overviewSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="flex flex-col items-center gap-2 text-[#296b8d] dark:text-[#94a3b8] cursor-pointer hover:text-[#53c0fb] dark:hover:text-[#53c0fb] transition-colors duration-300"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-sm font-medium tracking-wide">{t("hero.scrollPrompt")}</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon icon="mdi:chevron-down" width={24} height={24} />
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
}
