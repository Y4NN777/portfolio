"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "@/contexts/TranslationContext";
import { translations } from "@/lib/i18n/translations";

export default function TypewriterRole() {
  const { locale } = useTranslations();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = useMemo(() => translations[locale].hero.roles, [locale]);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 3500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setTimeout(() => {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }, 400);
        }
      }
    }, isDeleting ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <motion.div
      className="relative text-base md:text-xl mb-6 flex items-center justify-center"
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {/* Orbital accents, sky blue only */}
      <motion.div
        className="absolute top-0 right-16 w-2 h-2 rounded-full shadow-lg"
        style={{ background: "linear-gradient(135deg, #4bbcff, #53c0fb)", transformOrigin: "-60px 30px" }}
        animate={{
          rotate: 360,
          scale: [1, 1.3, 1],
        }}
        transition={{
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity }
        }}
      />

      <motion.div
        className="absolute bottom-2 left-12 w-1.5 h-1.5 rounded-full shadow-lg"
        style={{ background: "linear-gradient(135deg, #53c0fb, #296b8d)", transformOrigin: "80px -20px" }}
        animate={{
          rotate: -360,
          scale: [1, 1.4, 1],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, delay: 1 }
        }}
      />

      {/* Role text — deliberately not button-shaped: this is a label, not a control */}
      <div className="px-1 py-2 w-fit max-w-full whitespace-nowrap">
        <span className="text-primary font-semibold text-left inline-block whitespace-nowrap text-lg md:text-xl">
          {displayText}
          <motion.span
            className="inline-block w-0.5 h-5 bg-primary/70 ml-1 align-middle"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </span>
      </div>
    </motion.div>
  );
}
