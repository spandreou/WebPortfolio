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
      value: "spyridonandreou04@gmail.com",
      href: "mailto:spyridonandreou04@gmail.com",
      helperText: "Best channel for internship and role discussions.",
    },
    {
      id: "github",
      title: "GitHub",
      value: "github.com/spandreou",
      href: "https://github.com/spandreou",
      helperText: "Code repositories and project implementations.",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      value: "Profile coming soon",
      helperText: "LinkedIn profile will be added soon.",
    },
    {
      id: "location",
      title: "Location",
      value: "Larisa and Thebes, Greece",
      helperText: "Open to on-site, hybrid, and remote collaboration.",
    },
    {
      id: "cv",
      title: "Resume PDF",
      value: "Download CV",
      href: "/Spyridon_Andreou_CV.pdf",
      helperText: "Latest resume snapshot in PDF format.",
    },
  ],
  socialLinks: [
    { name: "GitHub", href: "https://github.com/spandreou" },
    { name: "Email", href: "mailto:spyridonandreou04@gmail.com" },
  ],
  cta: {
    title: "Interested in Collaborating?",
    description:
      "If you are hiring for internships or junior software roles, I would be glad to discuss how I can contribute.",
    primaryLabel: "Send Email",
    primaryHref: "mailto:spyridonandreou04@gmail.com",
    secondaryLabel: "View Resume",
    secondaryHref: "/resume",
  },
};
