"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "@/contexts/TranslationContext";
import SectionHeader from "./SectionHeader";

interface TechItem {
  name: string;
  icon: string;
  level: "Beginner" | "Intermediate" | "Expert";
  category: string;
  description: string;
  yearsUsed?: number;
}

const techStackData: Record<string, TechItem[]> = {
  "Backend": [
    { name: "Node.js", icon: "devicon:nodejs", level: "Intermediate", category: "Backend", description: "JavaScript runtime for server-side applications", yearsUsed: 2 },
    { name: "Express", icon: "skill-icons:expressjs-dark", level: "Intermediate", category: "Backend", description: "Fast, minimalist web framework for Node.js", yearsUsed: 2 },
    { name: "FastAPI", icon: "devicon:fastapi", level: "Beginner", category: "Backend", description: "Versatile language for backend and data science", yearsUsed: 1 },
    { name: "Flask", icon: "devicon:flask", level: "Intermediate", category: "Backend", description: "Lightweight Python web framework", yearsUsed: 2 },
    { name: "Laravel", icon: "devicon:laravel", level: "Intermediate", category: "Backend", description: "PHP web application framework", yearsUsed: 3 },
    { name: "Socket.io", icon: "simple-icons:socketdotio", level: "Beginner", category: "Backend", description: "Real-time bidirectional event-based communication", yearsUsed: 1 },
  ],
  "Frontend": [
    { name: "React", icon: "skill-icons:react-dark", level: "Intermediate", category: "Frontend", description: "Building modern, interactive user interfaces", yearsUsed: 2 },
    { name: "Next.js", icon: "devicon:nextjs", level: "Intermediate", category: "Frontend", description: "Full-stack React framework for production apps", yearsUsed: 1 },
    { name: "TypeScript", icon: "devicon:typescript", level: "Intermediate", category: "Frontend", description: "Type-safe JavaScript for scalable applications", yearsUsed: 2 },
    { name: "JavaScript", icon: "devicon:javascript", level: "Intermediate", category: "Frontend", description: "Core language for web development", yearsUsed: 2 },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", level: "Expert", category: "Frontend", description: "Utility-first CSS framework for rapid UI development", yearsUsed: 2 },
    { name: "Flutter", icon: "devicon:flutter", level: "Intermediate", category: "Frontend", description: "Cross-platform mobile app development", yearsUsed: 2 },
  ],
  "Database": [
    { name: "PostgreSQL", icon: "logos:postgresql", level: "Beginner", category: "Database", description: "Advanced open-source relational database", yearsUsed: 1 },
    { name: "MySQL", icon: "logos:mysql", level: "Expert", category: "Database", description: "Popular open-source relational database", yearsUsed: 3 },
    { name: "SQlite", icon: "skill-icons:sqlite", level: "Intermediate", category: "Database", description: "SQlite", yearsUsed: 3 },
    { name: "MongoDB", icon: "devicon:mongodb", level: "Intermediate", category: "Database", description: "NoSQL document database", yearsUsed: 2 },
  ],
  "Cloud & DevOps Tools": [
    { name: "AWS", icon: "skill-icons:aws-light", level: "Beginner", category: "Cloud & DevOps", description: "Amazon Web Services cloud platform", yearsUsed: 1 },
    { name: "Supabase", icon: "devicon:supabase", level: "Intermediate", category: "Cloud & DevOps", description: "Google's app development platform", yearsUsed: 1 },
    { name: "Docker", icon: "devicon:docker", level: "Beginner", category: "Cloud & DevOps", description: "Containerization platform", yearsUsed: 1 },
    { name: "Git", icon: "devicon:git", level: "Expert", category: "Cloud & DevOps", description: "Version control system", yearsUsed: 2 },
    { name: "Github", icon: "devicon:github", level: "Expert", category: "Cloud & DevOps", description: "Source Code Hosting", yearsUsed: 2 },
    { name: "Make", icon: "simple-icons:make", level: "Intermediate", category: "Cloud & DevOps", description: "Build automation", yearsUsed: 1 },
  ],
  "AI & Integration": [
    { name: "OpenAI", icon: "simple-icons:openai", level: "Intermediate", category: "AI & Integration", description: "AI-powered applications and chatbots", yearsUsed: 1 },
    { name: "LangChain", icon: "simple-icons:langchain", level: "Intermediate", category: "AI & Integration", description: "Framework for developing LLM applications", yearsUsed: 1 },
    { name: "Google AI Studio", icon: "simple-icons:google", level: "Expert", category: "AI & Integration", description: "Building AI-powered streaming UIs", yearsUsed: 1 },
    { name: "HuggingFace Hub", icon: "simple-icons:huggingface", level: "Intermediate", category: "AI & Integration", description: "Payment processing integration", yearsUsed: 1 },
    { name: "Vector Database", icon: "ph:vector-three-duotone", level: "Intermediate", category: "AI & Integration", description: "Vector database for storing and querying embeddings", yearsUsed: 1 },
  ],
};

export default function TechStackSection() {
  const { t } = useTranslations();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const formatCategoryKey = (value: string) => value.toLowerCase().replace(/[^a-z]/g, "");
  const getCategoryLabel = (category: string) =>
    t(`techStack.filterLabels.${formatCategoryKey(category)}`, category);

  const categories = ["All", ...Object.keys(techStackData)];

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
      className="mb-16"
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
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory !== category ? "text-[#0f2d40] dark:text-[#94a3b8]" : ""}`}
              style={
                activeCategory === category
                  ? {
                      background: "linear-gradient(135deg, #296b8d, #53c0fb)",
                      color: "white",
                      boxShadow: "0 0 12px rgba(83, 192, 251, 0.4)",
                      transform: "scale(1.05)",
                    }
                  : {
                      background: "rgba(83, 192, 251, 0.06)",
                      border: "1px solid rgba(83, 192, 251, 0.2)",
                    }
              }
            >
              {getCategoryLabel(category)}
            </button>
          ))}
        </div>
      </div>

      {activeCategory === "All" ? (
        <div className="space-y-8">
          {Object.entries(techStackData).map(([categoryName, techs]) => (
            <motion.div
              key={categoryName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 pl-3 border-l-2 text-[#061825] dark:text-[#f1f5f9]" style={{ borderColor: "#53c0fb" }}>
                {categoryName}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {techs.map((tech, index) => (
                  <TechCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filteredTech.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      )}
    </motion.section>
  );
}

function TechCard({ tech, index }: { tech: TechItem; index: number }) {
  /* Sky blue palette for all levels */
  const getLevelGradient = (level: string) => {
    switch (level) {
      case "Expert":       return "from-[#53c0fb] to-[#4bbcff]";
      case "Intermediate": return "from-[#296b8d] to-[#53c0fb]";
      case "Beginner":     return "from-[#1f4d67] to-[#296b8d]";
      default:             return "from-[#0f2d40] to-[#1f4d67]";
    }
  };

  const getLevelBadgeStyle = (level: string): React.CSSProperties => {
    switch (level) {
      case "Expert":
        return { background: "rgba(83, 192, 251, 0.12)", color: "#53c0fb", border: "1px solid rgba(83, 192, 251, 0.3)" };
      case "Intermediate":
        return { background: "rgba(41, 107, 141, 0.12)", color: "#62b6e2", border: "1px solid rgba(41, 107, 141, 0.3)" };
      case "Beginner":
        return { background: "rgba(31, 77, 103, 0.12)", color: "#94a3b8", border: "1px solid rgba(31, 77, 103, 0.3)" };
      default:
        return { background: "rgba(15, 45, 64, 0.12)", color: "#94a3b8", border: "1px solid rgba(15, 45, 64, 0.2)" };
    }
  };

  const getExperienceColor = (years: number) => {
    if (years >= 4) return "#53c0fb";
    if (years >= 2) return "#4bbcff";
    return "#62b6e2";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative">
        {/* Glow on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getLevelGradient(tech.level)} rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-xl scale-105`} />

        {/* Main Card */}
        <div
          className="relative backdrop-blur-xl rounded-2xl overflow-hidden transition-all duration-300 bg-white/85 dark:bg-[#0f2d40]/90"
          style={{
            border: "1px solid rgba(83, 192, 251, 0.12)",
            boxShadow: "0 2px 12px rgba(0, 33, 76, 0.06)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(83, 192, 251, 0.35)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(83, 192, 251, 0.15)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(83, 192, 251, 0.12)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0, 33, 76, 0.06)";
          }}
        >
          {/* Top accent bar */}
          <div className="relative h-0.5">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#296b8d]/30 to-transparent" />
            <div className={`absolute inset-0 bg-gradient-to-r ${getLevelGradient(tech.level)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-4 right-4 w-1 h-1 rounded-full animate-pulse" style={{ background: "rgba(83, 192, 251, 0.5)", animationDelay: '0s' }} />
            <div className="absolute top-8 left-6 w-0.5 h-0.5 rounded-full animate-pulse" style={{ background: "rgba(83, 192, 251, 0.4)", animationDelay: '1s' }} />
            <div className="absolute bottom-6 right-8 w-0.5 h-0.5 rounded-full animate-pulse" style={{ background: "rgba(83, 192, 251, 0.3)", animationDelay: '2s' }} />
          </div>

          <div className="p-4 relative">
            {/* Icon */}
            <div className="flex justify-center mb-3">
              <div className="relative group/icon">
                <div
                  className="relative p-3 rounded-xl transition-all duration-300"
                  style={{
                    background: "rgba(83, 192, 251, 0.06)",
                    border: "1px solid rgba(83, 192, 251, 0.12)",
                  }}
                >
                  <Icon
                    icon={tech.icon}
                    className="group-hover/icon:scale-110 group-hover/icon:rotate-3 transition-all duration-300"
                    width={36}
                    height={36}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${getLevelGradient(tech.level)} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                </div>
              </div>
            </div>

            {/* Name */}
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-center mb-2 tracking-tight">
              {tech.name}
            </h3>

            {/* Level Badge */}
            <div className="flex justify-center mb-2">
              <span
                className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-300"
                style={getLevelBadgeStyle(tech.level)}
              >
                <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${getLevelGradient(tech.level)} mr-1.5`} />
                {tech.level}
              </span>
            </div>

            {/* Experience Years */}
            {tech.yearsUsed && (
              <div className="text-center">
                <div className="inline-flex items-center gap-1">
                  <div
                    className="w-1 h-1 rounded-full"
                    style={{ background: getExperienceColor(tech.yearsUsed) }}
                  />
                  <span className="text-xs font-medium" style={{ color: getExperienceColor(tech.yearsUsed) }}>
                    {tech.yearsUsed} year{tech.yearsUsed > 1 ? 's' : ''} exp
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Mesh overlay */}
          <div
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(83,192,251,0.5) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
