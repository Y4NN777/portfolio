"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  tagText: string;
  tagIcon: string;
  heading: string;
  description?: string;
  showUnderline?: boolean;
  centered?: boolean;
}

export default function SectionHeader({
  tagText,
  tagIcon,
  heading,
  description,
  showUnderline = false,
  centered = false
}: SectionHeaderProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className={`mb-8 md:mb-12 lg:mb-16 px-4 ${centered ? 'text-center' : ''}`}
    >
      {/* Tag Badge */}
      <motion.div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 md:mb-6 ${centered ? 'justify-center' : ''}`}
        style={{
          background: "rgba(83, 192, 251, 0.1)",
          border: "1px solid rgba(83, 192, 251, 0.25)",
        }}
        whileHover={{ scale: 1.05 }}
      >
        <Icon icon={tagIcon} className="text-[#296b8d] dark:text-[#53c0fb]" width={20} height={20} />
        <span className="text-sm font-medium text-[#296b8d] dark:text-[#53c0fb]">
          {tagText}
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Dark mode: white-to-skyblue gives real contrast. Light mode: deep navy text — readable on white */}
        <span className="dark:hidden bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #061825, #296b8d, #0f2d40)" }}>
          {heading}
        </span>
        <span className="hidden dark:inline bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg, #f1f5f9, #53c0fb, #cbd5e1)" }}>
          {heading}
        </span>
      </motion.h2>

      {/* Underline */}
      {showUnderline && (
        <motion.div
          className={`h-1 md:h-1.5 lg:h-2 rounded-full mb-3 md:mb-4 lg:mb-6 ${centered ? 'mx-auto' : ''}`}
          style={{ background: "linear-gradient(90deg, #4bbcff, #53c0fb)" }}
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      )}

      {/* Description */}
      {description && (
        <motion.p
          className={`text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl ${centered ? 'mx-auto' : ''}`}
          variants={itemVariants}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
