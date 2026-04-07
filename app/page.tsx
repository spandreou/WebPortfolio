import { HeroSection } from "@/components/HeroSection";
import { SectionPreviewGrid } from "@/components/home/SectionPreviewGrid";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Home",
  description:
    "Personal software portfolio of Spyridon Andreou featuring resume highlights, project work, and collaboration contact details.",
  path: "/",
});

export default function Home() {
  const sectionPreviews = [
    {
      id: "resume",
      title: "Resume",
      label: "PROFILE",
      href: "/resume",
      copy: "Education, experience, skills, certifications, and core professional background.",
    },
    {
      id: "projects",
      title: "Projects",
      label: "BUILD",
      href: "/projects",
      copy: "Featured technical projects with categories, status, and implementation details.",
    },
    {
      id: "contact",
      title: "Contact",
      label: "CONNECT",
      href: "/contact",
      copy: "Direct contact channels for internships, junior roles, and collaboration opportunities.",
    },
  ];

  return (
    <>
      <HeroSection />
      <SectionPreviewGrid items={sectionPreviews} />
    </>
  );
}
