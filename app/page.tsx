import { HeroSection } from "@/components/HeroSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionPreviewGrid } from "@/components/home/SectionPreviewGrid";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = createMetadata({
  title: "Home",
  description: siteConfig.description,
  path: "/",
});

export default function Home() {
  const sectionPreviews = [
    {
      id: "resume",
      title: "Resume",
      label: "PROFILE",
      href: "/resume",
      copy: "Full-stack background, AI automation skills, education, experience, and certifications.",
    },
    {
      id: "projects",
      title: "Projects",
      label: "BUILD",
      href: "/projects",
      copy: "Full-stack systems, intelligent integrations, automation workflows, and implementation details.",
    },
    {
      id: "contact",
      title: "Contact",
      label: "CONNECT",
      href: "/contact",
      copy: "Direct contact channels for internships, entry-level full-stack roles, and collaboration opportunities.",
    },
  ];

  return (
    <>
      <HeroSection />
      <ScrollReveal y={20} duration={0.65}>
        <SectionPreviewGrid items={sectionPreviews} />
      </ScrollReveal>
    </>
  );
}
