const professionalTitle = [
  "Junior Full-Stack Developer",
  "AI Automation & Integrations",
] as const;

export const siteConfig = {
  name: "Spyridon Andreou",
  siteName: "Spyridon Andreou | Junior Full-Stack Developer & AI Automation",
  description:
    "Portfolio of Spyridon Andreou, a Junior Full-Stack Developer focused on React, TypeScript, Java, backend systems, AI automation, intelligent integrations, Docker, and self-hosted infrastructure.",
  professionalTitle,
  heroDescription:
    "I build full-stack applications, automation workflows, and AI-powered integrations using modern web technologies, APIs, and self-hosted infrastructure.",
  email: "spyridonandreou04@gmail.com",
  location: "Larisa / Thebes, Greece",
  links: {
    github: "https://github.com/spandreou",
    linkedin: "https://www.linkedin.com/in/spandreou",
    cv: "/Spyridon_Andreou_CV_2026.pdf",
  },
  keywords: [
    "Spyridon Andreou",
    "Junior Full-Stack Developer",
    "Full Stack Developer",
    "AI Automation",
    "AI Integrations",
    "Generative AI Integrations",
    "Software Engineer Portfolio",
    "Digital Systems",
    "React",
    "TypeScript",
    "Java",
    "Spring Boot",
    "NestJS",
    "PostgreSQL",
    "REST APIs",
    "Docker",
    "Self-Hosted Infrastructure",
    "Next.js Portfolio",
  ],
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://spandreou.vercel.app";
