"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CircleDot } from "lucide-react";
import Link from "next/link";
import {
  type ProjectItem,
  projectCategoryLabels,
  projectStatusLabels,
} from "@/lib/projects-data";

type ProjectCardProps = {
  project: ProjectItem;
};

const statusStyles: Record<ProjectItem["status"], string> = {
  completed: "border-emerald-300/25 bg-emerald-300/12 text-emerald-100",
  "in-progress": "border-cyan-300/30 bg-cyan-300/12 text-cyan-100",
  concept: "border-slate-300/20 bg-slate-300/10 text-slate-200",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const primaryHref = project.liveUrl ?? project.githubUrl;
  const primaryLabel = project.liveUrl ? "View Demo" : "View Repository";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="content-card content-card-interactive project-card flex h-full flex-col rounded-2xl p-5 sm:p-6"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-[0.64rem] uppercase tracking-[0.18em] text-cyan-100/80">
          {projectCategoryLabels[project.category]}
        </span>
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[0.64rem] uppercase tracking-[0.14em] ${statusStyles[project.status]}`}
        >
          {projectStatusLabels[project.status]}
        </span>
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-100">
        {project.name}
      </h3>
      {project.featured ? (
        <p className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-cyan-200/72">
          Featured Project
        </p>
      ) : null}

      <p className="mt-4 text-sm leading-relaxed text-slate-300/88 sm:text-base">
        {project.shortDescription}
      </p>

      <p className="mt-5 text-[0.68rem] uppercase tracking-[0.2em] text-cyan-200/70">
        Tech Stack
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-cyan-300/22 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-200 sm:text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 border-t border-cyan-300/14 pt-5">
        <Link
          href={primaryHref}
          target="_blank"
          rel="noreferrer"
          className="project-cta-primary inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs sm:text-sm"
        >
          <CircleDot size={14} />
          {primaryLabel}
          <ArrowUpRight size={14} className="card-link-icon" />
        </Link>
        {project.liveUrl ? (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="project-cta-secondary inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs sm:text-sm"
          >
            GitHub
            <ArrowUpRight size={14} className="card-link-icon" />
          </Link>
        ) : null}
      </div>
    </motion.article>
  );
}
