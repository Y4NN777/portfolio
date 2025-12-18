"use client";

import { useTheme } from "@/components/ThemeProvider";
import { useTranslations } from "@/contexts/TranslationContext";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslations();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isProjectsPage = pathname === "/projects";

  const navItems = [
    { id: "overview", labelKey: "navigation.links.overview" },
    { id: "stack", labelKey: "navigation.links.stack" },
    { id: "experience", labelKey: "navigation.links.experience" },
    { id: "projects", labelKey: "navigation.links.projects", isPage: true },
    // { id: "testimonials", labelKey: "navigation.links.testimonials" },
    { id: "certifications", labelKey: "navigation.links.certifications" },
    { id: "contact", labelKey: "navigation.links.contact" },
  ];

  const handleScroll = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <nav className="fixed top-0 md:top-4 w-full z-50 ">
      <div className="md:max-w-fit md:border-2 md:rounded-full mx-auto px-7 py-2 bg-zinc-200/50 dark:bg-slate-900/50 backdrop-blur-3xl">
        <div className="flex justify-between items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 dark:from-indigo-400 dark:via-purple-400 dark:to-violet-400 bg-clip-text text-transparent"
          >
           {t("navigation.brand")}
          </motion.div>
          <div className="flex items-center gap-4 md:gap-8">
            <button
              className="md:hidden p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 transition-all duration-300"
              aria-label="Toggle navigation menu"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <Icon icon={isMobileMenuOpen ? "solar:close-square-bold" : "solar:hamburger-menu-bold"} width={20} height={20} />
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => {
                if (item.isPage) {
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href="/projects"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300 text-sm font-medium"
                      >
                        {t(item.labelKey)}
                      </Link>
                    </motion.div>
                  );
                }
                return (
                  <motion.a
                    key={item.id}
                    href={isProjectsPage ? `/#${item.id}` : `#${item.id}`}
                    onClick={(event) => {
                      if (!isProjectsPage) {
                        event.preventDefault();
                        handleScroll(item.id);
                      }
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    {t(item.labelKey)}
                  </motion.a>
                );
              })}
            </div>
            {/* Theme Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Icon icon="solar:sun-bold" className="text-yellow-500" width={20} height={20} />
              ) : (
                <Icon icon="solar:moon-bold" className="text-blue-500" width={20} height={20} />
              )}
            </motion.button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-950/90 border-t border-gray-200 dark:border-gray-800 backdrop-blur-md">
          <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
            {navItems.map((item) => {
              if (item.isPage) {
                return (
                  <Link
                    key={`mobile-${item.id}`}
                    href="/projects"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="py-3 px-6 text-gray-700 dark:text-gray-200 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  >
                    {t(item.labelKey)}
                  </Link>
                );
              }
              return (
                <a
                  key={`mobile-${item.id}`}
                  href={isProjectsPage ? `/#${item.id}` : `#${item.id}`}
                  onClick={(event) => {
                    if (!isProjectsPage) {
                      event.preventDefault();
                      setIsMobileMenuOpen(false);
                      handleScroll(item.id);
                    } else {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className="py-3 px-6 text-gray-700 dark:text-gray-200 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                >
                  {t(item.labelKey)}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
} 
