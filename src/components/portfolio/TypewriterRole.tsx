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
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <motion.div
      className="relative text-xl md:text-2xl mb-6 h-16 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {/* Orbital accents — sky blue only */}
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

      {/* Role text container */}
      <motion.div
        className="relative overflow-hidden rounded-2xl px-6 py-3 min-w-[280px]"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
      >
        {/* Animated sky-blue gradient background */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            background: [
              "linear-gradient(135deg, #1f4d67 0%, #296b8d 50%, #53c0fb 100%)",
              "linear-gradient(135deg, #296b8d 0%, #53c0fb 50%, #4bbcff 100%)",
              "linear-gradient(135deg, #53c0fb 0%, #4bbcff 50%, #1f4d67 100%)",
              "linear-gradient(135deg, #1f4d67 0%, #296b8d 50%, #53c0fb 100%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Shimmer */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dot pattern overlay */}
        <motion.div
          className="absolute inset-0 opacity-20 rounded-2xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full" />
          <div className="absolute top-3 right-3 w-0.5 h-0.5 bg-white rounded-full" />
          <div className="absolute bottom-2 left-4 w-1 h-1 bg-white rounded-full" />
          <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-white rounded-full" />
        </motion.div>

        {/* Role Text */}
        <div className="relative z-10 text-center">
          <motion.span
            className="text-white font-semibold text-left inline-block min-w-[200px]"
            animate={{
              textShadow: [
                "0 0 10px rgba(255,255,255,0.3)",
                "0 0 20px rgba(255,255,255,0.6)",
                "0 0 10px rgba(255,255,255,0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {displayText}
            <motion.span
              className="inline-block w-0.5 h-6 bg-white/80 ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.span>
        </div>

        {/* Pulse border */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{ border: "1px solid rgba(83, 192, 251, 0.3)" }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
