export const siteConfig = {
  name: "Spyridon Andreou",
  siteName: "Spyridon Andreou Portfolio",
  description:
    "Portfolio of Spyridon Andreou, a Junior Full-Stack Developer and Full-Stack Software Engineer building end-to-end web, API, and self-hosted systems.",
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
    "Full-Stack Software Engineer",
    "Software Engineer Portfolio",
    "Digital Systems",
    "React",
    "TypeScript",
    "Java",
    "Spring Boot",
    "NestJS",
    "PostgreSQL",
    "Docker",
    "Next.js Portfolio",
  ],
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
