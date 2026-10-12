import type { ProjectItemKey } from "@/lib/projects";

type CaseStudy = {
  problem: string;
  approach: string;
  engineering: string;
  state: string;
};

type LocalizedCaseStudies = Record<"en" | "fr", Record<ProjectItemKey, CaseStudy>>;

export const projectCaseStudies: LocalizedCaseStudies = {
  en: {
    mishkan: {
      problem: "Most coding agents handle isolated tasks or sessions. They lose continuity across planning, implementation, review, and operational follow-up.",
      approach: "Mishkan uses persistent AI agents to form a team for each engineering mission, coordinate the work, and return independently reviewed results while the human stays in control.",
      engineering: "A Python daemon coordinates missions, policy-governed capabilities, SQLite state, resumable events, artifacts, MCP clients, and bounded browser and terminal work.",
      state: "Pre-release and under active development. The local single-daemon system is implemented; persistent scheduling, distributed workers, and the operational TUI remain roadmap work.",
    },
    glexTalent: {
      problem: "Recruitment records are often split across messaging, email, spreadsheets, and paper, leaving candidates and hiring teams without a reliable shared history.",
      approach: "GlexTalent brings profiles, applications, evaluations, interviews, documents, and decisions into one traceable recruitment record.",
      engineering: "A React and Vite client works with FastAPI services, PostgreSQL as the system of record, and MinIO for documents and media.",
      state: "A version is live in production and is being progressively audited and rebuilt around clearer product and data contracts.",
    },
    wisemoney: {
      problem: "Personal-finance software often makes a remote account mandatory for data that should remain private and available offline.",
      approach: "Core finance tracking stays on the device. AI guidance is optional and separated from the everyday accounts, budgets, goals, and transaction workflow.",
      engineering: "The React PWA stores an encrypted local event log in IndexedDB. A Go and PostgreSQL service supports the separately managed AI path.",
      state: "The PWA is live. The managed AI service remains a local development capability; bring-your-own-key mode can run without it.",
    },
    y7Feedback: {
      problem: "Product feedback becomes fragmented when reports, evidence, maintainer questions, internal notes, and external issues live in separate tools.",
      approach: "Y7 Feedback gives each product a public reporting route and preserves the conversation from submission through triage, resolution, closure, or deletion.",
      engineering: "React, TypeScript, Appwrite, IndexedDB, and an offline-aware PWA model support isolated workspaces, private attachments, notifications, and GitHub or GitLab issue links.",
      state: "Live product with public reporting flows and active development.",
    },
    tenglaafi: {
      problem: "Generic health assistants rarely combine tropical-health research, medicinal-plant knowledge, and bilingual access for a local context.",
      approach: "TengLaafi grounds answers in a curated knowledge base instead of relying on an unconstrained language-model response.",
      engineering: "FastAPI exposes the service while LangChain, ChromaDB, and Mistral-7B support retrieval and answer generation.",
      state: "Research prototype focused on grounded bilingual retrieval and locally relevant knowledge.",
    },
    y7Jprompter: {
      problem: "Useful AI workflows often start as vague instructions and become difficult to repeat or validate.",
      approach: "The tool turns plain-language intent into reusable structured prompts with explicit fields and validation.",
      engineering: "A Next.js and TypeScript application uses Gemini for assisted generation and IndexedDB for local persistence.",
      state: "Open-source web product with a public deployment.",
    },
    fikassoTech: {
      problem: "The studio needed one clear and maintainable place to explain its services, work, and delivered products.",
      approach: "The site organizes the company narrative around what it offers and what it has actually shipped.",
      engineering: "A focused React, TypeScript, and Vite frontend keeps the public experience lightweight and maintainable.",
      state: "Live company website.",
    },
    givemealiftCms: {
      problem: "The education charity needed to publish updates and explain its work without depending on developers for each content change.",
      approach: "A public website is paired with a content workflow for programs, news, and organizational information.",
      engineering: "Laravel and MySQL provide the content backend, with Vue supporting the interactive publishing experience.",
      state: "Live nonprofit website and content platform.",
    },
    "7review": {
      problem: "Automated review can produce confident comments without enough repository context, evidence, or human control.",
      approach: "7Review treats review as an evidence-backed assessment governed by repository-owned methods and explicit human authority.",
      engineering: "The Go system supports local and CI review paths, GitHub and GitLab inputs, deterministic validation, and Docker-based execution.",
      state: "The local review runtime is usable while the team-configurable review engine and native integrations continue to evolve.",
    },
    malvision: {
      problem: "Signature matching does not generalize well to malware variants that have changed at the byte level.",
      approach: "The research pipeline represents binaries as images and learns visual patterns associated with malware families.",
      engineering: "Python handles the pipeline, with PyTorch and scikit-learn used for modeling and evaluation.",
      state: "Research project and experimental classifier.",
    },
    docIntel: {
      problem: "Private documents are difficult to search conversationally when they cannot be sent to a hosted service.",
      approach: "Doc-Intel indexes local PDFs and returns grounded answers with citations in English or French.",
      engineering: "A Go CLI combines local document processing, FAISS retrieval, and SQLite metadata without requiring a network service.",
      state: "Open-source local CLI.",
    },
    piGeosint: {
      problem: "Collecting street-level imagery evidence requires coordinating location parsing, multiple sources, capture, and durable metadata.",
      approach: "I contributed to a staged pipeline that resolves a place, discovers imagery, recommends captures, and stores evidence while deterministic tools retain control.",
      engineering: "The shared codebase uses TypeScript for the web UI and pipeline, Docker for the runtime, and optional model providers for bounded decisions.",
      state: "Open-source contribution to a local web tool with persistent evidence storage and a documented Docker smoke test.",
    },
  },
  fr: {
    mishkan: {
      problem: "La plupart des agents de code traitent des tâches ou sessions isolées. Ils perdent la continuité entre planification, réalisation, revue et suivi opérationnel.",
      approach: "Mishkan utilise des agents IA persistants pour former une équipe par mission, coordonner le travail et livrer un résultat évalué indépendamment, tout en laissant le contrôle à l’humain.",
      engineering: "Un daemon Python coordonne missions, capacités gouvernées par des politiques, état SQLite, événements reprenables, artefacts, clients MCP et travaux bornés dans le navigateur ou le terminal.",
      state: "Préversion en développement actif. Le système local à daemon unique est implémenté ; la planification persistante, les workers distribués et le TUI opérationnel restent dans la roadmap.",
    },
    glexTalent: {
      problem: "Les dossiers de recrutement sont souvent dispersés entre messageries, e-mails, tableurs et papier, sans historique partagé fiable.",
      approach: "GlexTalent réunit profils, candidatures, évaluations, entretiens, documents et décisions dans un dossier de recrutement traçable.",
      engineering: "Un client React et Vite s'appuie sur des services FastAPI, PostgreSQL comme source de vérité et MinIO pour les documents et médias.",
      state: "Une version est en production et fait l'objet d'un audit et d'une reconstruction progressive autour de contrats produit et données plus clairs.",
    },
    wisemoney: {
      problem: "Les logiciels de finances personnelles imposent souvent un compte distant pour des données qui devraient rester privées et accessibles hors ligne.",
      approach: "Le suivi financier principal reste sur l'appareil. Les conseils IA sont optionnels et séparés des comptes, budgets, objectifs et transactions.",
      engineering: "La PWA React conserve un journal d'événements local chiffré dans IndexedDB. Un service Go et PostgreSQL porte la voie IA gérée séparément.",
      state: "La PWA est en ligne. Le service IA géré reste local au développement ; le mode avec clé personnelle fonctionne sans lui.",
    },
    y7Feedback: {
      problem: "Le feedback produit se fragmente lorsque signalements, preuves, questions des mainteneurs, notes internes et tickets externes vivent dans des outils séparés.",
      approach: "Y7 Feedback donne à chaque produit une route publique et conserve la conversation depuis la soumission jusqu’au triage, à la résolution, à la clôture ou à la suppression.",
      engineering: "React, TypeScript, Appwrite, IndexedDB et une PWA adaptée au hors-ligne portent les espaces isolés, pièces jointes privées, notifications et liens GitHub ou GitLab.",
      state: "Produit en ligne avec des parcours publics de signalement et un développement actif.",
    },
    tenglaafi: {
      problem: "Les assistants de santé généralistes associent rarement recherche en santé tropicale, plantes médicinales et accès bilingue dans un contexte local.",
      approach: "TengLaafi fonde ses réponses sur une base de connaissances sélectionnée plutôt que sur une réponse libre du modèle.",
      engineering: "FastAPI expose le service tandis que LangChain, ChromaDB et Mistral-7B assurent la recherche et la génération des réponses.",
      state: "Prototype de recherche consacré à la recherche bilingue sourcée et aux connaissances pertinentes localement.",
    },
    y7Jprompter: {
      problem: "Les workflows IA utiles commencent souvent par des consignes vagues, difficiles à reproduire ou à valider.",
      approach: "L'outil transforme une intention en prompts structurés réutilisables, avec des champs explicites et une validation.",
      engineering: "Une application Next.js et TypeScript utilise Gemini pour la génération assistée et IndexedDB pour la persistance locale.",
      state: "Produit web open source avec un déploiement public.",
    },
    fikassoTech: {
      problem: "Le studio avait besoin d'un espace clair et maintenable pour présenter ses services, ses réalisations et ses produits livrés.",
      approach: "Le site organise le récit de l'entreprise autour de son offre et de ce qu'elle a effectivement réalisé.",
      engineering: "Un frontend React, TypeScript et Vite ciblé garde l'expérience publique légère et maintenable.",
      state: "Site d'entreprise en ligne.",
    },
    givemealiftCms: {
      problem: "L'association éducative devait publier ses actualités et expliquer son action sans dépendre d'un développeur pour chaque modification.",
      approach: "Le site public est associé à un workflow de contenu pour les programmes, les actualités et les informations de l'organisation.",
      engineering: "Laravel et MySQL portent le contenu, tandis que Vue prend en charge l'expérience de publication interactive.",
      state: "Site associatif et plateforme de contenu en ligne.",
    },
    "7review": {
      problem: "La revue automatisée peut produire des commentaires assurés sans disposer d'assez de contexte, de preuves ou de contrôle humain.",
      approach: "7Review traite la revue comme une évaluation sourcée, gouvernée par les méthodes du dépôt et une autorité humaine explicite.",
      engineering: "Le système Go prend en charge les parcours locaux et CI, les entrées GitHub et GitLab, la validation déterministe et l'exécution avec Docker.",
      state: "Le runtime local est utilisable tandis que le moteur configurable par équipe et les intégrations natives continuent d'évoluer.",
    },
    malvision: {
      problem: "La détection par signature se généralise mal aux variantes de malware modifiées au niveau binaire.",
      approach: "Le pipeline représente les binaires sous forme d'images et apprend les motifs visuels associés aux familles de malware.",
      engineering: "Python porte le pipeline, avec PyTorch et scikit-learn pour la modélisation et l'évaluation.",
      state: "Projet de recherche et classificateur expérimental.",
    },
    docIntel: {
      problem: "Les documents privés sont difficiles à interroger lorsque leur contenu ne peut pas être envoyé à un service hébergé.",
      approach: "Doc-Intel indexe les PDF locaux et retourne des réponses sourcées avec citations, en français ou en anglais.",
      engineering: "Une CLI Go associe traitement local, recherche FAISS et métadonnées SQLite sans dépendre d'un service réseau.",
      state: "CLI locale open source.",
    },
    piGeosint: {
      problem: "Collecter des preuves visuelles de terrain demande de coordonner résolution du lieu, sources multiples, capture et métadonnées durables.",
      approach: "J’ai contribué à un pipeline par étapes qui résout le lieu, découvre les images, recommande les captures et stocke les preuves sous contrôle d’outils déterministes.",
      engineering: "Le code partagé utilise TypeScript pour l’interface et le pipeline, Docker pour le runtime et des modèles optionnels pour des décisions bornées.",
      state: "Contribution open source à un outil web local avec stockage persistant et test smoke Docker documenté.",
    },
  },
};
