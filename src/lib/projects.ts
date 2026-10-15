import { translations } from "@/lib/i18n/translations";

export type ProjectItemKey = keyof typeof translations.en.projects.items;

export type ProjectIcon = { icon: string; label: string };

const projectCatalog: Array<{
  id: ProjectItemKey;
  slug: string;
  thumbnail?: string;
  gradient: string;
  github?: string;
  live?: string;
  tech: string[];
  icons: ProjectIcon[];
}> = [
  {
    id: "mishkan",
    slug: "mishkan",
    gradient: "from-[#071f31] to-[#174b68]",
    github: "https://github.com/Y7-Labs/mishkan",
    tech: ["Python", "CrewAI", "SQLite", "MCP", "OpenTelemetry"],
    icons: [
      { icon: "logos:python", label: "Python" },
      { icon: "simple-icons:crewai", label: "CrewAI" },
      { icon: "logos:sqlite", label: "SQLite" },
      { icon: "simple-icons:modelcontextprotocol", label: "MCP" },
      { icon: "simple-icons:opentelemetry", label: "OpenTelemetry" },
    ],
  },
  {
    thumbnail: "/projects/glexTalent-current.jpg",
    id: "glexTalent",
    slug: "glextalent",
    gradient: "from-[#06283a] to-[#0c5d75]",
    live: "https://glextalent.com",
    tech: ["React", "Vite", "FastAPI", "PostgreSQL", "MinIO"],
    icons: [
      { icon: "logos:react", label: "React" },
      { icon: "logos:vitejs", label: "Vite" },
      { icon: "devicon:fastapi", label: "FastAPI" },
      { icon: "logos:postgresql", label: "PostgreSQL" },
      { icon: "simple-icons:minio", label: "MinIO" },
    ],
  },
  {
    thumbnail: "/projects/y7Jprompter.jpg",
    id: "y7Jprompter",
    slug: "y7-jprompter",
    gradient: "from-[#0b1f4d] to-[#1c5699]",
    github: "https://github.com/Y4NN777/Y7-Jprompter",
    live: "https://y7-jprompter.y7labs.studio/",
    tech: ["Next.js", "TypeScript", "Gemini", "IndexedDB"],
    icons: [
      { icon: "logos:nextjs-icon", label: "Next.js" },
      { icon: "logos:typescript-icon", label: "TypeScript" },
      { icon: "simple-icons:googlegemini", label: "Gemini" },
      { icon: "ph:database", label: "IndexedDB" },
    ],
  },
  {
    thumbnail: "/projects/tenglaafi.png",
    id: "tenglaafi",
    slug: "tenglaafi",
    gradient: "from-[#062b2a] to-[#0e6059]",
    github: "https://github.com/Y7-Labs/tenglaafi",
    tech: ["Python", "FastAPI", "LangChain", "ChromaDB", "Mistral-7B"],
    icons: [
      { icon: "logos:python", label: "Python" },
      { icon: "devicon:fastapi", label: "FastAPI" },
      { icon: "simple-icons:langchain", label: "LangChain" },
      { icon: "logos:chroma", label: "ChromaDB" },
      { icon: "simple-icons:mistralai", label: "Mistral-7B" },
    ],
  },
  {
    thumbnail: "/projects/wisemoney-landing.png",
    id: "wisemoney",
    slug: "wisemoney",
    gradient: "from-[#04283f] to-[#085b85]",
    github: "https://github.com/Y4NN777/wisemoney",
    live: "https://wisemoney.y7labs.studio/",
    tech: ["React", "TypeScript", "Go", "IndexedDB", "PostgreSQL", "Docker"],
    icons: [
      { icon: "logos:react", label: "React" },
      { icon: "logos:typescript-icon", label: "TypeScript" },
      { icon: "logos:go", label: "Go" },
      { icon: "ph:database", label: "IndexedDB" },
      { icon: "logos:postgresql", label: "PostgreSQL" },
      { icon: "logos:docker-icon", label: "Docker" },
    ],
  },
  {
    thumbnail: "/projects/y7-feedback.png",
    id: "y7Feedback",
    slug: "y7-feedback",
    gradient: "from-[#263318] to-[#6f7d4b]",
    github: "https://github.com/Y4NN777/y7-feedback-mngt-system",
    live: "https://y7-feedback.vercel.app",
    tech: ["React", "TypeScript", "Appwrite", "IndexedDB", "PWA"],
    icons: [
      { icon: "logos:react", label: "React" },
      { icon: "logos:typescript-icon", label: "TypeScript" },
      { icon: "simple-icons:appwrite", label: "Appwrite" },
      { icon: "ph:database", label: "IndexedDB" },
    ],
  },
  {
    thumbnail: "/projects/7review.jpg",
    id: "7review",
    slug: "7review",
    gradient: "from-[#101a45] to-[#3a4f9e]",
    github: "https://github.com/Y7-Labs/7review",
    live: "https://y7-labs.github.io/7review/",
    tech: ["Go", "Docker"],
    icons: [
      { icon: "logos:go", label: "Go" },
      { icon: "logos:docker-icon", label: "Docker" },
    ],
  },
  {
    thumbnail: "/projects/malvision.png",
    id: "malvision",
    slug: "malvision",
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
    thumbnail: "/projects/docIntel.png",
    id: "docIntel",
    slug: "doc-intel",
    gradient: "from-[#153447] to-[#4c586a]",
    github: "https://github.com/Y4NN777/doc-intel",
    tech: ["Go", "FAISS", "SQLite"],
    icons: [
      { icon: "logos:go", label: "Go" },
      { icon: "ph:magnifying-glass", label: "FAISS" },
      { icon: "logos:sqlite", label: "SQLite" },
    ],
  },
  {
    thumbnail: "/projects/piGeosint.png",
    id: "piGeosint",
    slug: "pi-geosint-agent",
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
    thumbnail: "/projects/fikassoTech.jpg",
    id: "fikassoTech",
    slug: "fikasso-tech",
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
    thumbnail: "/projects/givemealiftCms.jpg",
    id: "givemealiftCms",
    slug: "give-me-a-lift",
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

const portfolioOrder: ProjectItemKey[] = [
  "wisemoney",
  "glexTalent",
  "7review",
  "mishkan",
  "y7Feedback",
  "y7Jprompter",
  "piGeosint",
  "tenglaafi",
  "malvision",
  "fikassoTech",
  "givemealiftCms",
];

export const projectEntries = portfolioOrder.map((id) => projectCatalog.find((project) => project.id === id)!);
