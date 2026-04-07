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
    name: "Task Manager API",
    slug: "task-manager-api",
    shortDescription:
      "REST API for managing task workflows with clear resource structure and practical backend patterns.",
    fullDescription:
      "Backend-focused project that emphasizes clean endpoint design, predictable data handling, and production-minded organization for task tracking use cases.",
    technologies: ["Python", "REST APIs", "SQL", "Git"],
    category: "backend",
    githubUrl: "https://github.com/spandreou/task-manager-api",
    featured: true,
    status: "completed",
  },
  {
    name: "UsedCars",
    slug: "usedcars",
    shortDescription:
      "Web project for organizing and presenting used-car listings in a structured interface.",
    fullDescription:
      "Developed as a full-stack learning project combining frontend presentation, backend fundamentals, and relational data management.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    category: "web",
    githubUrl: "https://github.com/spandreou/UsedCars",
    featured: true,
    status: "completed",
  },
  {
    name: "RealEstateAnalytics",
    slug: "real-estate-analytics",
    shortDescription:
      "Data analysis project focused on extracting insights from real-estate datasets.",
    fullDescription:
      "Built to practice data exploration and reporting workflows with a focus on clarity, consistency, and decision-support outputs.",
    technologies: ["Python", "SQL", "Power BI"],
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
    technologies: ["Python", "MATLAB"],
    category: "tools",
    githubUrl: "https://github.com/spandreou/Geo-Data-Processing-Tool",
    featured: false,
    status: "completed",
  },
  {
    name: "GasStationProject",
    slug: "gas-station-project",
    shortDescription:
      "Academic project centered on operational process modeling for a gas station workflow.",
    technologies: ["Java", "SQL"],
    category: "systems",
    githubUrl: "https://github.com/spandreou/GasStationProject",
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
    technologies: ["Python", "ChatGPT", "Gemini", "Claude", "Codex"],
    category: "ai",
    githubUrl: "https://github.com/spandreou/InvisibleAI",
    featured: false,
    status: "in-progress",
  },
];
