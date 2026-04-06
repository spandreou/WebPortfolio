export type ResumeData = {
  personal: {
    fullName: string;
    title: string;
    location: string;
    email: string;
    phone?: string;
    summary: string;
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
    title: "Digital Systems Undergraduate - Software & AI Projects",
    location: "Larisa and Thebes, Greece",
    email: "spyridonandreou04@gmail.com",
    phone: "+30 6945052118",
    summary:
      "Third-year Digital Systems undergraduate focused on software engineering, web technologies, and practical AI-assisted workflows. I build structured, reliable projects with clear architecture and a strong focus on real-world usability.",
  },
  links: {
    github: "https://github.com/spandreou",
  },
  skills: {
    frontend: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive UI",
    ],
    backend: [
      "Node.js",
      "Express",
      "REST API Design",
      "Authentication",
      "Validation",
      "Service Architecture",
    ],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "SQL Optimization"],
    devtools: ["Git", "GitHub Actions", "Docker", "Postman", "ESLint", "CI/CD"],
    ai: [
      "Prompt Engineering",
      "LLM Integration",
      "RAG Basics",
      "Automation Workflows",
      "Model Evaluation",
    ],
    cloud: ["Vercel", "Render", "Supabase", "Neon", "Environment Management"],
    other: ["Problem Solving", "Technical Writing", "Team Collaboration", "Agile"],
  },
  education: [
    {
      institution: "University of Piraeus",
      degree: "BSc in Informatics and Digital Systems",
      period: "2022 - Present",
      details: [
        "Core focus on software engineering, databases, and intelligent systems.",
        "Coursework includes algorithms, distributed systems, and machine learning fundamentals.",
      ],
    },
    {
      institution: "Open Online Programs",
      degree: "Continuous Learning Path in Web Engineering",
      period: "2023 - Present",
      details: [
        "Advanced frontend architecture and scalable backend design practices.",
      ],
    },
  ],
  experience: [
    {
      role: "Freelance Full-Stack Developer",
      company: "Independent Projects",
      period: "2024 - Present",
      description: [
        "Built responsive web applications with reusable component systems and clean UI foundations.",
        "Developed backend endpoints and data models for student and small business use-cases.",
        "Collaborated with clients to translate requirements into production-ready iterations.",
      ],
    },
    {
      role: "Software Engineering Student Contributor",
      company: "Academic + Personal Labs",
      period: "2023 - Present",
      description: [
        "Implemented coursework and side projects focused on APIs, data pipelines, and automation.",
        "Experimented with AI-assisted workflows and evaluation patterns for practical tools.",
      ],
    },
  ],
  projects: [
    {
      name: "Task Manager API",
      description:
        "REST API project for organizing tasks with clear endpoint and data structure design.",
      technologies: ["Python", "REST APIs", "SQL"],
      link: "https://github.com/spandreou/task-manager-api",
    },
    {
      name: "UsedCars",
      description:
        "Full-stack learning project for managing and presenting used-car listings.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "https://github.com/spandreou/UsedCars",
    },
  ],
  certifications: [
    {
      name: "Foundations of Cloud Computing",
      issuer: "Coursera",
      year: "2024",
    },
    {
      name: "Relational Database Design",
      issuer: "edX",
      year: "2023",
    },
    {
      name: "Introduction to Machine Learning",
      issuer: "Udemy",
      year: "2023",
    },
  ],
  languages: ["Greek (Native)", "English (Professional Working Proficiency)"],
};
