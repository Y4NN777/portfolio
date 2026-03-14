"use client";

import { useTheme } from "@/components/ThemeProvider";
import { useTranslations } from "@/contexts/TranslationContext";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslations();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "overview", labelKey: "navigation.links.overview" },
    { id: "stack", labelKey: "navigation.links.stack" },
    { id: "experience", labelKey: "navigation.links.experience" },
    { id: "projects", labelKey: "navigation.links.projects" },
    { id: "certifications", labelKey: "navigation.links.certifications" },
    { id: "contact", labelKey: "navigation.links.contact" },
  ];

  const handleScroll = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const isDark = theme === "dark";

  return (
    <nav className="fixed top-0 md:top-4 w-full z-50">
      <div
        className="md:max-w-fit mx-auto px-7 py-2 md:rounded-full backdrop-blur-3xl"
        style={{
          background: isDark ? "rgba(15, 45, 64, 0.5)" : "rgba(240, 247, 255, 0.6)",
          border: isDark ? "1px solid rgba(83, 192, 251, 0.15)" : "1px solid rgba(83, 192, 251, 0.2)",
        }}
      >
        <div className="flex justify-between items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #296b8d, #53c0fb, #4bbcff)" }}
          >
            {t("navigation.brand")}
          </motion.div>

          <div className="flex items-center gap-4 md:gap-8">
            <button
              className="md:hidden p-2 rounded-full transition-all duration-300"
              style={{
                background: "rgba(83, 192, 251, 0.1)",
                border: "1px solid rgba(83, 192, 251, 0.2)",
              }}
              aria-label="Toggle navigation menu"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <Icon
                icon={isMobileMenuOpen ? "solar:close-square-bold" : "solar:hamburger-menu-bold"}
                width={20}
                height={20}
                style={{ color: "#53c0fb" }}
              />
            </button>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    handleScroll(item.id);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="transition-colors duration-300 text-sm font-medium"
                  style={{ color: isDark ? "#94a3b8" : "#296b8d" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#53c0fb"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = isDark ? "#94a3b8" : "#296b8d"; }}
                >
                  {t(item.labelKey)}
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full transition-all duration-300"
              style={{
                background: "rgba(83, 192, 251, 0.1)",
                border: "1px solid rgba(83, 192, 251, 0.2)",
              }}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Icon icon="solar:sun-bold" style={{ color: "#53c0fb" }} width={20} height={20} />
              ) : (
                <Icon icon="solar:moon-bold" style={{ color: "#296b8d" }} width={20} height={20} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden backdrop-blur-md"
          style={{
            background: isDark ? "rgba(6, 24, 37, 0.95)" : "rgba(240, 247, 255, 0.95)",
            borderTop: "1px solid rgba(83, 192, 251, 0.15)",
          }}
        >
          <div className="flex flex-col divide-y" style={{ borderColor: "rgba(83, 192, 251, 0.1)" }}>
            {navItems.map((item) => (
              <a
                key={`mobile-${item.id}`}
                href={`#${item.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  setIsMobileMenuOpen(false);
                  handleScroll(item.id);
                }}
                className="py-3 px-6 text-sm font-medium transition-colors"
                style={{ color: isDark ? "#94a3b8" : "#296b8d" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#53c0fb"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = isDark ? "#94a3b8" : "#296b8d"; }}
              >
                {t(item.labelKey)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
