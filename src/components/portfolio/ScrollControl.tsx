"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { scrollToId, scrollToTop } from "@/lib/scroll";

export default function ScrollControl() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    if (atTop) {
      scrollToId("overview");
    } else {
      scrollToTop();
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.6, duration: 0.4 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={atTop ? "Scroll down to about me" : "Scroll back to top"}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-11 h-11 rounded-full shadow-lg transition-colors duration-300 text-[#296b8d] dark:text-[#94a3b8] hover:text-[#53c0fb] dark:hover:text-[#53c0fb] bg-white dark:bg-[#1f4d67]"
      style={{ border: "1px solid rgba(83, 192, 251, 0.25)" }}
    >
      <Icon icon={atTop ? "mdi:chevron-down" : "mdi:chevron-up"} width={22} height={22} />
    </motion.button>
  );
}
