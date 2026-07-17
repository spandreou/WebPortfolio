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
    name: "ShiftFlow",
    slug: "shiftflow",
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
    name: "HomeOps",
    slug: "homeops",
    shortDescription:
      "Homelab operations dashboard for infrastructure health, service history, alerts, incidents, and dependency intelligence.",
    fullDescription:
      "Building a homelab operations dashboard for services, containers, networks, tunnels, backups, alerts, incidents, history, and dependency intelligence.",
    technologies: ["React", "Node.js", "Docker", "Linux", "Cloudflare"],
    category: "systems",
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
