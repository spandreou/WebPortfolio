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
    title: "Full Stack Developer",
    location: "Larisa, Greece",
    email: "spyridonandreou04@gmail.com",
    phone: "+30 694 505 2118",
    summary: [
      "Final-year BSc Digital Systems student at the University of Thessaly with hands-on experience designing, building and deploying backend and full-stack applications. Strong focus on Java/Spring Boot, TypeScript/React, Node.js/NestJS, PostgreSQL, REST APIs, Docker and Linux. Projects include authentication and RBAC, real-time features, testing, monitoring, automation and self-hosted deployments.",
      "I use an AI-assisted development workflow with Codex and Antigravity for research, implementation support, debugging, testing and documentation while reviewing and validating the final code and technical decisions.",
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
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
    backend: [
      "Node.js",
      "NestJS",
      "REST APIs",
      "Java",
      "Spring Boot",
      "Socket.IO",
      "Python",
    ],
    databases: [
      "PostgreSQL",
      "Prisma",
      "Firebase / Firestore",
      "SQL",
    ],
    devtools: [
      "Docker",
      "Linux",
      "Git",
      "Jest",
      "Playwright",
      "Cloudflare",
    ],
    ai: [
      "Codex & Antigravity AI Workflows",
      "Generative AI Integrations",
      "AI Automation & Agents",
      "Prompt Engineering",
      "LLM Tool Calling & Structured Outputs",
    ],
    cloud: [
      "Docker & Containerization",
      "Linux Server Management",
      "Cloudflare Tunnels",
      "Vercel",
      "Self-Hosted Infrastructure",
    ],
    other: [
      "Authentication & RBAC",
      "RESTful API Design",
      "System Monitoring & Observability",
      "PDF Reporting",
      "Fuzzy Search with Typo Tolerance",
    ],
  },
  education: [
    {
      institution: "University of Thessaly",
      degree: "BSc in Digital Systems | Larisa, Greece",
      period: "Oct 2023 - Present",
      details: [
        "Entering final year.",
        "Focus on software engineering, web development, databases, artificial intelligence, networks and digital systems.",
      ],
    },
  ],
  experience: [
    {
      role: "BP - Gas Station Employee",
      company: "BP",
      period: "Mar 2023 - Aug 2026",
      description: [
        "Worked in a fast-paced customer-facing environment, following operational procedures, handling responsibilities accurately and maintaining consistent service.",
      ],
    },
    {
      role: "Hellenic Armed Forces - Special Forces",
      company: "Hellenic Armed Forces",
      period: "Jul 2022 - Mar 2023",
      description: [
        "Completed military service; strengthened discipline, teamwork, reliability, adaptability and decision-making under pressure.",
      ],
    },
  ],
  projects: [
    {
      name: "HomeOps - Homelab Operations & Observability Platform",
      description:
        "Designed and built a self-hosted operations platform for monitoring services, containers, networks and infrastructure, including health checks, alerts, incident tracking, historical data and dependency mapping. Worked end-to-end across backend APIs, dashboards, Docker/Linux deployment, monitoring and troubleshooting, with ongoing automation and reliability improvements.",
      technologies: [
        "React",
        "Node.js",
        "REST APIs",
        "Docker",
        "Linux",
        "Cloudflare",
      ],
      link: "https://github.com/spandreou/homeops",
    },
    {
      name: "Municipal Police Management Platform",
      description:
        "Designed and developed a full-stack desktop and backend platform with REST APIs, PostgreSQL data models, JWT authentication, RBAC, audit history, ticket and vehicle workflows, real-time updates and PDF reporting. Implemented Greek/Greeklish fuzzy search with typo tolerance, automated testing and containerized deployment.",
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
      name: "HomeLabShare - Self-Hosted File Sharing Platform",
      description:
        "Designed and deployed a self-hosted file-sharing platform with authentication, invite-based access, per-user storage quotas, uploads, share links, favourites, recent files and administration tools. Built a PostgreSQL-backed, containerized deployment exposed through a secure Cloudflare-based setup.",
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
      name: "Shiftoryx - Workforce Scheduling Platform",
      description:
        "Built a workforce scheduling application with rule-based schedule generation, employee availability and leave handling, shift constraints, manual editing, analytics, history and export functionality. Designed complex scheduling logic and business rules while maintaining responsive UX and reliable data synchronization.",
      technologies: [
        "React",
        "TypeScript",
        "Firebase / Firestore",
        "Zustand",
        "dnd-kit",
        "Vercel",
      ],
      link: "https://github.com/spandreou/GasStationProject",
    },
  ],
  certifications: [
    {
      name: "Univators 2.0: Machine Learning & Artificial Intelligence (18 hours)",
      issuer: "Code.Hub",
      year: "2025",
    },
    {
      name: "ECDL - Word & Excel",
    },
    {
      name: "English - C2 Proficiency",
    },
  ],
  languages: ["Greek - Native", "English - C2 Proficiency"],
};
