import { siteConfig } from "@/lib/site-config";

export type ResumeData = {
  personal: {
    fullName: string;
    title: string;
    location: string;
    email: string;
    phone?: string;
    dateOfBirth?: string;
    summary: string[];
  };
  links: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
  skills: {
    frontend: string[];
    backend: string[];
    databases: string[];
    devtools: string[];
    ai: string[];
    cloud: string[];
    other: string[];
  };
  education: Array<{
    institution: string;
    degree: string;
    period: string;
    details?: string[];
  }>;
  experience: Array<{
    role: string;
    company?: string;
    period: string;
    description?: string[];
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    link?: string;
  }>;
  certifications: Array<{
    name: string;
    issuer?: string;
    year?: string;
  }>;
  languages: string[];
};

export const resumeData: ResumeData = {
  personal: {
    fullName: "Spyridon Andreou",
    title: siteConfig.professionalTitle.join(" | "),
    location: "Larisa / Thebes, Greece",
    email: "spyridonandreou04@gmail.com",
    phone: "+30 694 505 2118",
    summary: [
      "Digital Systems undergraduate entering the final year at the University of Thessaly, focused on full-stack software development, AI automation, and intelligent integrations. I design, build, test, and deploy end-to-end applications using React, TypeScript, Java, Spring Boot, NestJS, PostgreSQL, REST APIs, Docker, and cloud or self-hosted infrastructure.",
      "My projects include authentication, role-based access control, real-time communication, workflow automation, testing, production deployments, and the integration of generative AI tools and agent-based workflows into real software and business processes.",
    ],
  },
  links: {
    github: "https://github.com/spandreou",
    linkedin: "https://www.linkedin.com/in/spandreou",
    portfolio: "https://spandreou.vercel.app",
  },
  skills: {
    frontend: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
      "Next.js",
    ],
    backend: [
      "Java",
      "Spring Boot",
      "Node.js",
      "NestJS",
      "REST APIs",
      "Socket.IO",
      "PHP",
      "Python",
    ],
    databases: ["PostgreSQL", "MySQL", "SQL", "Prisma", "Firebase / Firestore"],
    devtools: [
      "Git",
      "GitHub",
      "Linux",
      "Jest",
      "Playwright",
      "Debugging & Testing",
      "Wireshark",
      "MATLAB",
    ],
    ai: [
      "Generative AI Integrations",
      "AI Agents",
      "Workflow Automation",
      "LLM-Assisted Workflows",
      "Prompt Engineering",
      "Structured Outputs",
      "n8n",
      "OpenAI / ChatGPT",
      "Codex",
      "Claude",
      "Gemini",
    ],
    cloud: [
      "Docker",
      "Cloudflare Tunnels",
      "Vercel",
      "Microsoft Azure",
    ],
    other: [
      "Authentication",
      "RBAC",
      "Power BI",
      "React Query",
      "Zustand",
    ],
  },
  education: [
    {
      institution: "University of Thessaly",
      degree: "BSc in Digital Systems",
      period: "2022 - Present",
      details: [
        "Entering final year.",
        "Focus on software engineering, web development, databases, artificial intelligence, networks, and digital systems.",
      ],
    },
  ],
  experience: [
    {
      role: "Special Forces",
      company: "Hellenic Armed Forces",
      period: "19/07/2022 - 19/03/2023 | Completed Military Service",
      description: [
        "Strengthened discipline, teamwork, reliability, adaptability, and decision-making under pressure.",
      ],
    },
    {
      role: "Gas Station Employee",
      period: "Additional Experience",
      description: [
        "Worked accurately in a fast-paced customer-facing environment while following operational procedures and maintaining consistent service.",
      ],
    },
  ],
  projects: [
    {
      name: "Municipal Police Management Platform",
      description:
        "Desktop and API platform with JWT authentication, role-based access, ticket lifecycle management, vehicle records, audit history, real-time updates, PDF reporting, fuzzy search, and automated tests.",
      technologies: [
        "React",
        "TypeScript",
        "Tauri",
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "Socket.IO",
        "Docker",
      ],
      link: "https://github.com/spandreou/MunicipalPoliceProject",
    },
    {
      name: "ShiftFlow",
      description:
        "Production shift-planning app with rule-based schedule generation, drag-and-drop editing, rest-day constraints, history, analytics, templates, and exports.",
      technologies: [
        "React",
        "TypeScript",
        "Firebase",
        "Zustand",
        "dnd-kit",
        "Vercel",
      ],
      link: "https://github.com/spandreou/GasStationProject",
    },
    {
      name: "HomeLabShare",
      description:
        "Self-hosted file-sharing platform with authentication, per-user quotas, uploads, share links, favourites, invite codes, and administration tools.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Docker",
        "Cloudflare",
      ],
      link: "https://github.com/spandreou/homelabshare",
    },
    {
      name: "HomeOps",
      description:
        "Central homelab operations and observability workspace for services, containers, networks, Cloudflare tunnels, deployments, backups, alerts, incidents, history, timelines, and dependency intelligence.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Python",
        "Docker",
        "Linux",
        "Cloudflare",
      ],
    },
  ],
  certifications: [
    {
      name: "ESB Certificate of Proficiency in English (C2)",
      issuer: "ESB",
    },
    {
      name: "ECDL - Word & Excel",
    },
    {
      name: "Univators 2.0: Machine Learning & Artificial Intelligence (18 hours)",
      issuer: "Code.Hub",
      year: "2025",
    },
  ],
  languages: ["Greek - Native", "English - C2 Proficiency"],
};
