export const siteConfig = {
  name: "Spyridon Andreou",
  siteName: "Spyridon Andreou Portfolio",
  description:
    "Futuristic portfolio showcasing resume, technical projects, and collaboration channels.",
  email: "spyridonandreou04@gmail.com",
  location: "Larisa and Thebes, Greece",
  links: {
    github: "https://github.com/spandreou",
    linkedin: "",
    cv: "/Spyridon_Andreou_CV1.pdf",
  },
  keywords: [
    "Spyridon Andreou",
    "Software Engineer Portfolio",
    "Digital Systems",
    "Backend Development",
    "AI Projects",
    "Next.js Portfolio",
  ],
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");
