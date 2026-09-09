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
    gradient: "from-[#06283a] to-[#0c5d75]",
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
    gradient: "from-[#0b1f4d] to-[#1c5699]",
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
    gradient: "from-[#062b2a] to-[#0e6059]",
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
    gradient: "from-[#04283f] to-[#085b85]",
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
    gradient: "from-[#101a45] to-[#3a4f9e]",
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
    gradient: "from-[#0b2230] to-[#195b82]",
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
    gradient: "from-[#153447] to-[#4c586a]",
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
    gradient: "from-[#0d3547] to-[#255c74]",
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
    gradient: "from-[#04222c] to-[#145f5d]",
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
    gradient: "from-[#0a2436] to-[#255c77]",
    live: "https://givemealift.org",
    tech: ["Laravel", "Vue", "MySQL"],
    icons: [
      { icon: "logos:laravel", label: "Laravel" },
      { icon: "logos:vue", label: "Vue" },
      { icon: "devicon:mysql", label: "MySQL" },
    ],
  },
];
