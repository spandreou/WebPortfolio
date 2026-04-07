export type ResumeData = {
  personal: {
    fullName: string;
    title: string;
    location: string;
    email: string;
    phone?: string;
    dateOfBirth?: string;
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
    title: "Digital Systems Undergraduate",
    location: "Larisa / Thebes, Greece",
    email: "spyridonandreou04@gmail.com",
    phone: "+30 6945052118",
    dateOfBirth: "12/02/2004",
    summary:
      "Third-year Digital Systems undergraduate at the University of Thessaly, seeking an internship with strong prospects for long-term employment as a Junior Developer or Systems Engineer. Military obligations completed through service in the Hellenic Special Forces, bringing discipline, reliability, adaptability, and the ability to perform effectively under pressure. Strong interest in software development, web technologies, and IT systems, with hands-on familiarity in programming, databases, and modern AI-assisted development workflows for faster problem-solving and productivity.",
  },
  links: {
    github: "https://github.com/spandreou",
  },
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
    backend: ["Python", "Java", "C", "C#", "PHP"],
    databases: ["SQL", "MySQL", "PostgreSQL"],
    devtools: ["Git", "GitHub", "Vite", "Wireshark", "MATLAB", "Microsoft Office"],
    ai: [
      "AI-Assisted Development",
      "ChatGPT",
      "Gemini",
      "Claude",
      "Codex",
    ],
    cloud: ["Microsoft Azure"],
    other: ["Power BI", "Responsive Web Development"],
  },
  education: [
    {
      institution: "University of Thessaly",
      degree: "BSc in Digital Systems",
      period: "2022 - Present",
      details: [
        "Third-year undergraduate student.",
        "Focus on software development, web technologies, databases, and digital systems.",
      ],
    },
  ],
  experience: [
    {
      role: "Special Forces",
      company: "Hellenic Armed Forces",
      period: "Completed Military Service",
      description: [
        "Operated effectively in high-pressure and demanding environments requiring discipline, precision, and rapid decision-making.",
        "Strengthened teamwork, responsibility, and execution under strict procedures and timelines.",
        "Developed resilience, adaptability, and reliability in mission-critical situations.",
      ],
    },
    {
      role: "Gas Station Employee",
      period: "Date not specified",
      description: [
        "Built strong customer service and communication skills through daily interaction with customers.",
        "Managed responsibilities accurately in a fast-paced working environment.",
        "Demonstrated consistency, reliability, and attention to operational procedures.",
      ],
    },
  ],
  projects: [
    {
      name: "EscapeReallity",
      description:
        "Web project focused on interactive user flow and front-end structure.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/spandreou/EscapeReallity",
    },
    {
      name: "UsedCars",
      description:
        "Web application for used-car listings with core CRUD and search-oriented functionality.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "https://github.com/spandreou/UsedCars",
    },
    {
      name: "task-manager-api",
      description:
        "Backend API project for task management and workflow organization.",
      technologies: ["Python", "SQL"],
      link: "https://github.com/spandreou/task-manager-api",
    },
    {
      name: "RealEstateAnalytics",
      description:
        "Analytics-focused project for processing and visualizing real-estate datasets.",
      technologies: ["Python", "SQL", "Power BI"],
      link: "https://github.com/spandreou/RealEstateAnalytics",
    },
    {
      name: "Geo-Data-Processing-Tool",
      description:
        "Data-processing tool for geospatial datasets and technical analysis workflows.",
      technologies: ["Python", "MATLAB"],
      link: "https://github.com/spandreou/Geo-Data-Processing-Tool",
    },
    {
      name: "GasStationProject",
      description:
        "Software project around gas station operations and process organization.",
      technologies: ["Java", "SQL"],
      link: "https://github.com/spandreou/GasStationProject",
    },
    {
      name: "InvisibleAI",
      description:
        "AI-oriented project exploring real-time assistant-style workflows.",
      technologies: ["Python", "ChatGPT", "Gemini", "Claude", "Codex"],
      link: "https://github.com/spandreou/InvisibleAI",
    },
  ],
  certifications: [
    {
      name: "Certificate of Proficiency in English (C2)",
      issuer: "ESB",
    },
    {
      name: "Word & Excel Diploma",
    },
    {
      name: "Univators 2.0: Skilling Future Digital Innovators - Certificate of Completion (Machine Learning & Artificial Intelligence, 18 hours)",
      issuer: "Code.Hub",
      year: "2025",
    },
  ],
  languages: ["Greek - Native", "English - C2 Proficiency"],
};
