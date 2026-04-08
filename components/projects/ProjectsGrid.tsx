"use client";

import { useMemo, useState } from "react";
import type { ProjectItem } from "@/lib/projects-data";
import { ProjectCard } from "@/components/projects/ProjectCard";
import {
  type CategoryFilter,
  ProjectsFilter,
  type StatusFilter,
} from "@/components/projects/ProjectsFilter";

type ProjectsGridProps = {
  projects: ProjectItem[];
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [status, setStatus] = useState<StatusFilter>("all");

  const categories = useMemo(
    () =>
      Array.from(new Set(projects.map((project) => project.category))).sort(),
    [projects],
  );

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const categoryMatch = category === "all" || project.category === category;
        const statusMatch = status === "all" || project.status === status;
        return categoryMatch && statusMatch;
      }),
    [projects, category, status],
  );

  return (
    <div className="space-y-5">
      <ProjectsFilter
        categories={categories}
        selectedCategory={category}
        selectedStatus={status}
        onCategoryChange={setCategory}
        onStatusChange={setStatus}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <p className="content-card rounded-2xl px-4 py-3 text-sm text-slate-300/80">
          No projects match the selected filters.
        </p>
      ) : null}
    </div>
  );
}
