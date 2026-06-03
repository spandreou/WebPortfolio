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
      "A real-world full-stack desktop/admin project built around municipal police workflows, including authentication, role-based authorization, violation and offender management, audit logging, realtime updates, diagnostics, and PostgreSQL-backed data handling.",
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
    name: "GasStationProject",
    slug: "gas-station-project",
    shortDescription:
      "Demo-ready gas station shift management dashboard with weekly/monthly scheduling and staff operations.",
    fullDescription:
      "A scheduling-focused operations app with admin-only access, Firebase-backed demo data, weekly/monthly auto-generation, role-aware shift rules, announcements, hour summaries, and regression checks for the scheduler engine.",
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
    featured: true,
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
    featured: true,
    status: "in-progress",
  },
  {
    name: "DeployOps",
    slug: "deployops",
    shortDescription:
      "Self-hosted deployment, monitoring, and logs platform for Docker-based applications.",
    fullDescription:
      "A deployment control panel for registering Docker Compose projects, triggering deploys and redeploys, restarting services, streaming logs, tracking deployment history, monitoring health checks, and enforcing JWT/RBAC access through a secure dashboard.",
    technologies: [
      "Java 21",
      "Spring Boot 3",
      "Spring Security",
      "Spring Data JPA",
      "PostgreSQL",
      "Flyway",
      "WebSockets",
      "OpenAPI",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
    ],
    category: "systems",
    githubUrl: "https://github.com/spandreou/DeployOps",
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
    featured: false,
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
];
