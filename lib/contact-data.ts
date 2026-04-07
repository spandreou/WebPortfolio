import { resumeData } from "@/lib/resume-data";
import { siteConfig } from "@/lib/site-config";

export type ContactCardItem = {
  id: "email" | "github" | "linkedin" | "location" | "cv";
  title: string;
  value: string;
  href?: string;
  helperText?: string;
};

export type SocialLinkItem = {
  name: "GitHub" | "LinkedIn" | "Email";
  href: string;
};

export type ContactData = {
  heroTitle: string;
  heroSubtitle: string;
  availability: string;
  cards: ContactCardItem[];
  socialLinks: SocialLinkItem[];
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
};

export const contactData: ContactData = {
  heroTitle: "Let's Build Something Valuable",
  heroSubtitle:
    "Open to internships, junior roles, and collaborative software projects.",
  availability:
    "I am currently available for software engineering opportunities where I can contribute to backend systems, web applications, and AI-assisted product workflows.",
  cards: [
    {
      id: "email",
      title: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      helperText: "Best channel for internship and role discussions.",
    },
    {
      id: "github",
      title: "GitHub",
      value: "github.com/spandreou",
      href: siteConfig.links.github,
      helperText: "Code repositories and project implementations.",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      value: resumeData.links.linkedin ? "linkedin.com profile" : "Available on request",
      href: resumeData.links.linkedin,
      helperText: resumeData.links.linkedin
        ? "Professional background and experience highlights."
        : "LinkedIn profile can be shared during conversation.",
    },
    {
      id: "location",
      title: "Location",
      value: siteConfig.location,
      helperText: "Open to on-site, hybrid, and remote collaboration.",
    },
    {
      id: "cv",
      title: "Resume PDF",
      value: "Download CV",
      href: siteConfig.links.cv,
      helperText: "Latest resume snapshot in PDF format.",
    },
  ],
  socialLinks: [
    { name: "GitHub", href: siteConfig.links.github },
    { name: "Email", href: `mailto:${siteConfig.email}` },
  ],
  cta: {
    title: "Interested in Collaborating?",
    description:
      "If you are hiring for internships or junior software roles, I would be glad to discuss how I can contribute.",
    primaryLabel: "Send Email",
    primaryHref: `mailto:${siteConfig.email}`,
    secondaryLabel: "View Resume",
    secondaryHref: "/resume",
  },
};
