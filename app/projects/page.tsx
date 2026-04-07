import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { createMetadata } from "@/lib/metadata";
import { projectsData } from "@/lib/projects-data";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Projects",
    description:
      "Technical portfolio projects with featured work, categorized stack details, and current development status.",
    path: "/projects",
  }),
};

export default function ProjectsPage() {
  const featuredProjects = projectsData.filter((project) => project.featured);

  return (
    <div className="space-y-14 pb-20 sm:space-y-16 sm:pb-24">
      <ProjectsHero
        totalProjects={projectsData.length}
        featuredProjects={featuredProjects.length}
      />

      <section>
        <p className="font-mono text-[0.64rem] tracking-[0.3em] text-cyan-300/75 sm:text-xs">
          FEATURED
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
          Highlighted Work
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-300/80 sm:text-base">
          Projects selected for strongest product relevance and engineering clarity.
        </p>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section>
        <p className="font-mono text-[0.64rem] tracking-[0.3em] text-cyan-300/75 sm:text-xs">
          ALL PROJECTS
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
          Complete Portfolio
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-300/80 sm:text-base">
          Explore projects by category and development status.
        </p>
        <div className="mt-6">
          <ProjectsGrid projects={projectsData} />
        </div>
      </section>

      <section className="glass-panel rounded-2xl p-6 sm:p-8">
        <p className="font-mono text-[0.64rem] tracking-[0.3em] text-cyan-300/75 sm:text-xs">
          NEXT STEP
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
          Discuss a Role or Collaboration
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300/85 sm:text-base">
          If you want to review implementation details, I would be happy to connect.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" className="w-full sm:w-auto">
            Contact Me
          </Button>
          <Button href="/resume" variant="secondary" className="w-full sm:w-auto">
            View Resume
          </Button>
        </div>
      </section>
    </div>
  );
}
