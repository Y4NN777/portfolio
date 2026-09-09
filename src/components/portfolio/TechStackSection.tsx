"use client";

import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "@/contexts/TranslationContext";
import { translations } from "@/lib/i18n/translations";
import SectionHeader from "./SectionHeader";
import { cn } from "@/lib/utils";

interface TechItem {
  name: string;
  icon: string;
}

const techStackData: Record<string, TechItem[]> = {
  "Design": [
    { name: "UML", icon: "simple-icons:uml" },
    { name: "Mermaid", icon: "simple-icons:mermaid" },
    { name: "PlantUML", icon: "vscode-icons:file-type-plantuml" },
    { name: "Excalidraw", icon: "simple-icons:excalidraw" },
  ],
  "Languages": [
    { name: "Python", icon: "devicon:python" },
    { name: "TypeScript", icon: "devicon:typescript" },
    { name: "Go", icon: "devicon:go" },
    { name: "Bash", icon: "devicon:bash" },
    { name: "C", icon: "devicon:c" },
  ],
  "Frameworks": [
    { name: "Node.js", icon: "devicon:nodejs" },
    { name: "FastAPI", icon: "devicon:fastapi" },
    { name: "Express", icon: "devicon:express" },
    { name: "Flask", icon: "devicon:flask" },
    { name: "Laravel", icon: "devicon:laravel" },
    { name: "React", icon: "devicon:react" },
    { name: "Next.js", icon: "devicon:nextjs" },
    { name: "Flutter", icon: "devicon:flutter" },
    { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
  ],
  "Databases": [
    { name: "PostgreSQL", icon: "devicon:postgresql" },
    { name: "SQLite", icon: "devicon:sqlite" },
    { name: "MongoDB", icon: "devicon:mongodb" },
    { name: "Supabase", icon: "devicon:supabase" },
    { name: "IndexedDB", icon: "ph:database-bold" },
  ],
  "DevSecOps & Platform": [
    { name: "Linux", icon: "devicon:linux" },
    { name: "Docker", icon: "devicon:docker" },
    { name: "Kubernetes", icon: "devicon:kubernetes" },
    { name: "GitHub Actions", icon: "devicon:githubactions" },
    { name: "GitLab CI", icon: "devicon:gitlab" },
    { name: "Travis CI", icon: "simple-icons:travisci" },
    { name: "Prometheus", icon: "devicon:prometheus" },
    { name: "Grafana", icon: "devicon:grafana" },
    { name: "Loki", icon: "selfhst:loki" },
    { name: "Vault", icon: "devicon:vault" },
    { name: "Teleport", icon: "devicon:teleport" },
    { name: "WireGuard", icon: "devicon:wireguard" },
  ],
  "AI Engineering": [
    { name: "OpenAI Platform", icon: "simple-icons:openai" },
    { name: "LangChain", icon: "simple-icons:langchain" },
    { name: "Hugging Face", icon: "simple-icons:huggingface" },
    { name: "Google AI Studio", icon: "simple-icons:googlegemini" },
    { name: "OpenRouter", icon: "simple-icons:openrouter" },
    { name: "Ollama", icon: "simple-icons:ollama" },
    { name: "llama.cpp", icon: "selfhst:llama-cpp" },
    { name: "ChromaDB", icon: "logos:chroma" },
    { name: "Pinecone", icon: "logos:pinecone" },
  ],
  "Development Tooling": [
    { name: "Git", icon: "devicon:git" },
    { name: "VS Code", icon: "devicon:vscode" },
    { name: "Neovim", icon: "devicon:neovim" },
    { name: "Zed", icon: "devicon:zed" },
    { name: "Claude Code", icon: "thesvg:claude-code" },
    { name: "Codex", icon: "thesvg:codex-openai" },
    { name: "Postman", icon: "devicon:postman" },
    { name: "Bruno", icon: "devicon:bruno" },
    { name: "Playwright", icon: "devicon:playwright" },
    { name: "Maestro Studio", icon: "ph:device-mobile-bold" },
  ],
};

const categories = ["All", ...Object.keys(techStackData)];

const categoryLabelKeys: Record<string, string> = {
  Design: "design",
  Languages: "languages",
  Frameworks: "frameworks",
  Databases: "databases",
  "DevSecOps & Platform": "devsecops",
  "AI Engineering": "ai",
  "Development Tooling": "devtools",
};

export default function TechStackSection() {
  const { t, locale } = useTranslations();
  const books = translations[locale].techStack.books;

  const [activeCategory, setActiveCategory] = useState<string>("All");
  const getCategoryLabel = (category: string) =>
    t(`techStack.filterLabels.${categoryLabelKeys[category] ?? category.toLowerCase()}`, category);

  const filteredTech = activeCategory === "All"
    ? Object.values(techStackData).flat()
    : techStackData[activeCategory] || [];

  return (
    <motion.section
      id="stack"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16 md:mb-24 lg:mb-32"
    >
      <SectionHeader
        tagText={t("techStack.tagText")}
        tagIcon="solar:settings-bold"
        heading={t("techStack.heading")}
        description={t("techStack.description")}
        showUnderline={false}
        centered={true}
      />
      <div className="mb-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-6 justify-center">
          {categories.map((category) => {
            const active = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={active}
                className={cn(
                  "px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border-2 shadow-md hover:shadow-lg active:scale-95",
                  "text-[#296b8d] dark:text-[#8ed3fc] bg-white dark:bg-[#1f4d67] border-[#53c0fb]/50 hover:border-[#53c0fb]",
                  active && "text-white dark:text-[#061825] bg-[#296b8d] dark:bg-[#53c0fb] border-[#296b8d] dark:border-[#53c0fb] shadow-lg"
                )}
              >
                {getCategoryLabel(category)}
              </button>
            );
          })}
        </div>
      </div>

      {/* One panel, not one per category: the padding, border and shadow are
          paid once instead of seven times, which is where the height went. */}
      {activeCategory === "All" ? (
        <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden p-5 md:p-6 bg-white dark:bg-[#0f2d40]"
            style={{
              border: "1px solid rgba(83, 192, 251, 0.15)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-7">
              {Object.entries(techStackData).map(([categoryName, techs]) => (
                <div key={categoryName}>
                  <h3 className="text-xs font-bold uppercase tracking-wider mb-3 text-[#4d6579] dark:text-[#94a3b8]">
                    {getCategoryLabel(categoryName)}
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {techs.map((tech, index) => (
                      <TechCard key={tech.name} tech={tech} index={index} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Books */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden p-5 md:p-6 bg-white dark:bg-[#0f2d40]"
            style={{
              border: "1px solid rgba(245, 158, 11, 0.3)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Icon icon="solar:book-2-bold" width={22} height={22} className="text-amber-600 dark:text-amber-400" />
              <h3 className="text-lg font-bold text-[#061825] dark:text-[#f1f5f9]">
                {books.title}
              </h3>
            </div>
            <p className="text-sm mb-5 text-[#296b8d] dark:text-[#94a3b8] italic">
              {books.subtitle}
            </p>
            <div className="space-y-3">
              {books.items.map((book) => (
                <div
                  key={book.title}
                  className="flex items-center gap-3.5 rounded-xl p-3"
                  style={{
                    border: "1px solid rgba(245, 158, 11, 0.2)",
                    background: "rgba(245, 158, 11, 0.06)",
                  }}
                >
                  <span className="shrink-0 rounded-lg overflow-hidden ring-1 ring-black/5 dark:ring-white/10">
                    <img
                      src={book.cover}
                      alt={`${book.title} by ${book.author}`}
                      width={40}
                      height={54}
                      loading="lazy"
                      className="h-[54px] w-[40px] object-cover"
                    />
                  </span>
                  <span className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                      {book.title}
                    </p>
                    <p className="text-xs mt-1 text-[#4d6579] dark:text-[#94a3b8] truncate">
                      {book.author}
                    </p>
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="max-w-5xl mx-auto rounded-2xl overflow-hidden p-5 md:p-6 bg-white dark:bg-[#0f2d40]"
            style={{
              border: "1px solid rgba(83, 192, 251, 0.15)",
            }}
          >
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {filteredTech.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.section>
  );
}

function TechCard({ tech, index }: { tech: TechItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, delay: index * 0.02 }}
      viewport={{ once: true }}
      className="group flex items-center gap-2 sm:gap-2.5 w-fit rounded-full px-3.5 py-2 sm:px-5 sm:py-2.5 border transition-colors duration-300 bg-white dark:bg-[#1f4d67]"
      style={{
        borderColor: "rgba(83, 192, 251, 0.2)",
      }}
    >
      <motion.span
        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
        transition={{ duration: 0.4 }}
        className="inline-flex"
      >
        <Icon
          icon={tech.icon}
          className="shrink-0 w-[18px] h-[18px] sm:w-[21px] sm:h-[21px] text-[#296b8d] dark:text-[#53c0fb]"
          width={21}
          height={21}
        />
      </motion.span>
      <span className="text-sm sm:text-[15px] font-medium text-gray-800 dark:text-gray-100 leading-tight tracking-tight whitespace-nowrap">
        {tech.name}
      </span>
    </motion.div>
  );
}
