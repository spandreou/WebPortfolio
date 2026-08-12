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
  githubUrl?: string;
  liveUrl?: string;
  architecture?: "homeops";
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
    name: "Municipal Police Management Platform",
    slug: "municipal-police-management-platform",
    shortDescription:
      "Desktop and API platform for municipal enforcement workflows, authentication, records, audit history, and real-time operations.",
    fullDescription:
      "Built a desktop and API platform with JWT authentication, role-based access, ticket lifecycle management, vehicle records, audit history, real-time updates, PDF reporting, Greek and Greeklish fuzzy search, and automated tests.",
    technologies: [
      "React",
      "TypeScript",
      "Tauri",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Socket.IO",
      "Docker",
      "Jest",
      "Playwright",
      "Cloudflare Tunnel",
    ],
    category: "systems",
    githubUrl: "https://github.com/spandreou/MunicipalPoliceProject",
    featured: true,
    status: "in-progress",
  },
  {
    name: "HomeOps",
    slug: "homeops",
    shortDescription:
      "Central homelab operations and observability workspace for infrastructure health, services, containers, networks, Cloudflare tunnels, incidents, backups, alerts, reports, history, and dependency intelligence.",
    fullDescription:
      "HomeOps is a central operations and observability workspace for a self-hosted homelab. It combines service, host, storage, container, network, and Cloudflare tunnel visibility with incidents, alerts, backup reporting, operational history, timelines, dependency intelligence, and recommendations. The system brings together a Python monitoring and reporting pipeline, a read-only REST API, and a React and Next.js operations dashboard.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "Docker",
      "Linux",
      "Cloudflare",
      "REST APIs",
      "JSON / JSONL",
      "Monitoring Automation",
    ],
    category: "systems",
    architecture: "homeops",
    featured: true,
    status: "in-progress",
  },
  {
    name: "Shiftoryx",
    slug: "shiftoryx",
    shortDescription:
      "Production shift-planning app with rule-based scheduling, drag-and-drop editing, analytics, templates, and exports.",
    fullDescription:
      "Developed a production shift-planning app with rule-based schedule generation, drag-and-drop editing, rest-day constraints, history, analytics, templates, and exports.",
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Zustand",
      "dnd-kit",
      "Vercel",
    ],
    category: "systems",
    githubUrl: "https://github.com/spandreou/GasStationProject",
    featured: true,
    status: "in-progress",
  },
  {
    name: "HomeLabShare",
    slug: "homelabshare",
    shortDescription:
      "Self-hosted file-sharing platform with secure access, per-user quotas, sharing workflows, and administration tools.",
    fullDescription:
      "Created a self-hosted file-sharing platform with authentication, per-user quotas, uploads, share links, favourites, invite codes, and administration tools.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Cloudflare",
    ],
    category: "systems",
    githubUrl: "https://github.com/spandreou/homelabshare",
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
    name: "Geo Tool",
    slug: "geo-tool",
    shortDescription:
      "Full-stack geospatial and real-estate analytics tool for CSV ingestion, clustering, filtering, outlier analysis, and interactive map exploration.",
    fullDescription:
      "Built as one operational workspace that processes geographic and property datasets through a .NET API, then visualizes clusters, listings, trends, filters, and outliers on a unified interactive map.",
    technologies: [
      ".NET 8 Web API",
      "C#",
      "NetTopologySuite",
      "CsvHelper",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Mapbox GL JS",
    ],
    category: "data",
    githubUrl: "https://github.com/spandreou/geo-tool",
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
      "Bilingual desktop assistant combining local speech recognition with a Google Gemini integration for real-time technical guidance.",
    fullDescription:
      "Built a bilingual desktop assistant that transcribes live audio locally with Faster-Whisper, sends structured prompts to Google Gemini, and presents concise answers, explanations, keywords, and contextual suggestions in a PyQt6 overlay.",
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
