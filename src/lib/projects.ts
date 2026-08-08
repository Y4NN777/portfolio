import { translations } from "@/lib/i18n/translations";

export type ProjectItemKey = keyof typeof translations.en.projects.items;

export type ProjectIcon = { icon: string; label: string };

export const projectEntries: Array<{
  id: ProjectItemKey;
  gradient: string;
  github?: string;
  live?: string;
  tech: string[];
  icons: ProjectIcon[];
}> = [
  {
    id: "glexTalent",
    gradient: "from-[#0a5c38] to-[#c8840a]",
    live: "https://glextalent.com",
    tech: ["React", "Vite", "PostgreSQL", "MinIO"],
    icons: [
      { icon: "logos:react", label: "React" },
      { icon: "logos:vitejs", label: "Vite" },
      { icon: "logos:postgresql", label: "PostgreSQL" },
      { icon: "simple-icons:minio", label: "MinIO" },
    ],
  },
  {
    id: "y7Jprompter",
    gradient: "from-[#1e40af] to-[#0891b2]",
    github: "https://github.com/Y4NN777/y7-jprompter",
    live: "https://y7-jprompter.vercel.app",
    tech: ["Next.js", "TypeScript", "Gemini", "IndexedDB"],
    icons: [
      { icon: "logos:nextjs-icon", label: "Next.js" },
      { icon: "logos:typescript-icon", label: "TypeScript" },
      { icon: "simple-icons:googlegemini", label: "Gemini" },
      { icon: "ph:database", label: "IndexedDB" },
    ],
  },
  {
    id: "tenglaafi",
    gradient: "from-[#0a2f24] to-[#1e6b4f]",
    github: "https://github.com/Y4NN777/tenglaafi",
    live: "https://y7labs.studio/tenglaafi/",
    tech: ["Python", "FastAPI", "LangChain", "ChromaDB", "IndexedDB"],
    icons: [
      { icon: "logos:python", label: "Python" },
      { icon: "devicon:fastapi", label: "FastAPI" },
      { icon: "simple-icons:langchain", label: "LangChain" },
      { icon: "logos:chroma", label: "ChromaDB" },
      { icon: "ph:database", label: "IndexedDB" },
    ],
  },
  {
    id: "wisemoney",
    gradient: "from-[#075985] to-[#0284c7]",
    github: "https://github.com/Y4NN777/wisemoney",
    live: "https://wisemoney.y7labs.studio/",
    tech: ["React", "TypeScript", "Go", "PostgreSQL"],
    icons: [
      { icon: "logos:react", label: "React" },
      { icon: "logos:typescript-icon", label: "TypeScript" },
      { icon: "logos:go", label: "Go" },
      { icon: "logos:postgresql", label: "PostgreSQL" },
    ],
  },
  {
    id: "7review",
    gradient: "from-[#002088] to-[#4f6fd9]",
    github: "https://github.com/Y4NN777/7review",
    live: "https://y4nn777.github.io/7review/",
    tech: ["Go", "Docker"],
    icons: [
      { icon: "logos:go", label: "Go" },
      { icon: "logos:docker-icon", label: "Docker" },
    ],
  },
  {
    id: "malvision",
    gradient: "from-[#0b2230] to-[#1f6f9e]",
    github: "https://github.com/Y4NN777/MalVision",
    tech: ["Python", "PyTorch", "scikit-learn"],
    icons: [
      { icon: "logos:python", label: "Python" },
      { icon: "logos:pytorch-icon", label: "PyTorch" },
      { icon: "devicon:scikitlearn", label: "scikit-learn" },
    ],
  },
  {
    id: "docIntel",
    gradient: "from-[#153447] to-[#64748b]",
    github: "https://github.com/Y4NN777/doc-intel",
    tech: ["Go", "FAISS", "SQLite", "Tesseract"],
    icons: [
      { icon: "logos:go", label: "Go" },
      { icon: "ph:magnifying-glass", label: "FAISS" },
      { icon: "logos:sqlite", label: "SQLite" },
      { icon: "ph:text-t", label: "Tesseract" },
    ],
  },
  {
    id: "piGeosint",
    gradient: "from-[#2e8bb8] to-[#64748b]",
    github: "https://github.com/Y4NN777/pi-geosint-agent",
    tech: ["TypeScript", "Docker", "OpenAI", "Anthropic"],
    icons: [
      { icon: "logos:typescript-icon", label: "TypeScript" },
      { icon: "logos:docker-icon", label: "Docker" },
      { icon: "simple-icons:openai", label: "OpenAI" },
      { icon: "simple-icons:anthropic", label: "Anthropic" },
    ],
  },
  {
    id: "fikassoTech",
    gradient: "from-[#5c8a1f] to-[#000000]",
    live: "https://www.fikassotech.com",
    tech: ["React", "TypeScript", "Vite"],
    icons: [
      { icon: "logos:react", label: "React" },
      { icon: "logos:typescript-icon", label: "TypeScript" },
      { icon: "logos:vitejs", label: "Vite" },
    ],
  },
  {
    id: "givemealiftCms",
    gradient: "from-[#c96e1e] to-[#0f7a63]",
    live: "https://givemealift.org",
    tech: ["Laravel", "Vue", "MySQL"],
    icons: [
      { icon: "logos:laravel", label: "Laravel" },
      { icon: "logos:vue", label: "Vue" },
      { icon: "devicon:mysql", label: "MySQL" },
    ],
  },
];
