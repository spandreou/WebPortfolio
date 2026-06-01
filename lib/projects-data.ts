export type ProjectItem = {
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription?: string;
  technologies: string[];
  category:
    | "web"
    | "backend"
    | "data"
    | "ai"
    | "automation"
    | "tools"
    | "systems";
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  status: "completed" | "in-progress" | "concept";
};

export const projectCategoryLabels: Record<ProjectItem["category"], string> = {
  web: "Web",
  backend: "Backend",
  data: "Data",
  ai: "AI",
  automation: "Automation",
  tools: "Tools",
  systems: "Systems",
};

export const projectStatusLabels: Record<ProjectItem["status"], string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  concept: "Concept",
};

export const projectsData: ProjectItem[] = [
{
  name: "MunicipalPoliceProject",
  slug: "municipal-police-project",
  shortDescription:
    "Desktop-first municipal enforcement system for managing violations, offenders, signatures, and operational workflows.",
  fullDescription:
    "A real-world full-stack desktop/admin project built around municipal police workflows, including authentication, violation and offender management, audit logging, realtime updates, diagnostics, and PostgreSQL-backed data handling.",
  technologies: [
    "NestJS",
    "Prisma ORM",
    "PostgreSQL",
    "Tauri",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "React Query",
    "Socket.IO",
    "Docker",
    "Playwright",
  ],
  category: "systems",
  githubUrl: "https://github.com/spandreou/MunicipalPoliceProject",
  featured: true,
  status: "in-progress",
},
  {
    name: "homeLabShare",
    slug: "homelabshare",
    shortDescription:
      "Private, invite-only homelab file sharing platform with secure access and operational monitoring.",
    fullDescription:
      "A full-stack platform combining controlled onboarding, shared file exploration, system health visibility, SMTP notifications, and Cloudflare Tunnel exposure with a PostgreSQL-backed architecture.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "Nodemailer",
      "Recharts",
      "Docker",
      "Docker Compose",
      "Cloudflare Tunnel",
    ],
    category: "systems",
    githubUrl: "https://github.com/spandreou/homelabshare",
    featured: true,
    status: "in-progress",
  },
  {
    name: "MunicipalPoliceProject",
    slug: "municipal-police-project",
    shortDescription:
      "Municipal enforcement management platform with backend workflows, desktop UI, and operational readiness systems.",
    fullDescription:
      "Monorepo municipal enforcement system featuring a NestJS API, Prisma/PostgreSQL data model, role-based access, violation workflows, diagnostics, and a React/Vite desktop client with Tauri packaging groundwork.",
    technologies: [
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "React 19",
      "Vite",
      "TypeScript",
      "Tauri",
      "Socket.IO",
      "React Query",
      "React Router",
      "Zod",
      "Playwright",
      "Docker",
      "Cloudflare Tunnel",
    ],
    category: "systems",
    githubUrl: "https://github.com/spandreou/MunicipalPoliceProject",
    featured: true,
    status: "in-progress",
  },
  {
    name: "RealEstateAnalytics",
    slug: "real-estate-analytics",
    shortDescription:
      "Data analysis project focused on extracting insights from real-estate datasets.",
    fullDescription:
      "Built to practice data exploration and reporting workflows with a focus on clarity, consistency, and decision-support outputs.",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Leaflet",
      "React Leaflet",
      "OpenStreetMap",
      "OGL",
    ],
    category: "data",
    githubUrl: "https://github.com/spandreou/RealEstateAnalytics",
    featured: true,
    status: "completed",
  },
  {
    name: "Geo Data Processing Tool",
    slug: "geo-data-processing-tool",
    shortDescription:
      "Utility project for processing and transforming location-based data for analysis tasks.",
    technologies: [
      ".NET 8 Web API",
      "C#",
      "NetTopologySuite",
      "CsvHelper",
      "React",
      "Vite",
      "Tailwind CSS",
      "Deck.gl",
      "React Map GL",
      "MapLibre",
    ],
    category: "tools",
    githubUrl: "https://github.com/spandreou/Geo-Data-Processing-Tool",
    featured: false,
    status: "completed",
  },
  {
    name: "GasStationProject",
    slug: "gas-station-project",
    shortDescription:
      "Operational management system for organizing gas station workflows, records, and service processes.",
    fullDescription:
      "In-progress system project focused on structuring core gas station operations with clearer data handling, service workflow organization, and database-backed process tracking.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "TypeScript",
      "Zustand",
      "Firebase Auth",
      "Firebase Firestore",
      "Tailwind CSS",
      "dnd-kit",
      "Playwright",
      "Vercel",
    ],
    category: "systems",
    githubUrl: "https://github.com/spandreou/GasStationProject",
    featured: false,
    status: "in-progress",
  },
  {
    name: "EscapeReallity",
    slug: "escapereallity",
    shortDescription:
      "Interactive web concept inspired by escape-room style navigation and user flows.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "web",
    githubUrl: "https://github.com/spandreou/EscapeReallity",
    featured: false,
    status: "completed",
  },
  {
    name: "InvisibleAI",
    slug: "invisible-ai",
    shortDescription:
      "Experimental project exploring practical AI-assisted development workflows.",
    technologies: [
      "Python",
      "PyQt6",
      "Faster-Whisper",
      "Google Gemini API",
      "PyAudio",
      "gTTS",
      "python-dotenv",
      "Keyboard Hotkeys",
    ],
    category: "ai",
    githubUrl: "https://github.com/spandreou/InvisibleAI",
    featured: false,
    status: "in-progress",
  },
  {
    name: "WebPortfolio",
    slug: "webportfolio",
    shortDescription:
      "Personal portfolio website with structured resume, project showcase, and polished contact flow.",
    fullDescription:
      "A production-focused portfolio built with modular data architecture, reusable UI sections, responsive layout patterns, and a cohesive futuristic design system.",
    technologies: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "OGL",
    ],
    category: "web",
    githubUrl: "https://github.com/spandreou/WebPortfolio",
    featured: false,
    status: "in-progress",
  },
];
