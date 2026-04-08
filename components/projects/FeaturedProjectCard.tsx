"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CircleDot, Sparkles } from "lucide-react";
import Link from "next/link";
import {
  type ProjectItem,
  projectCategoryLabels,
  projectStatusLabels,
} from "@/lib/projects-data";
import { cn } from "@/lib/utils";

type FeaturedProjectCardProps = {
  project: ProjectItem;
  className?: string;
};

const statusStyles: Record<ProjectItem["status"], string> = {
  completed: "border-emerald-300/25 bg-emerald-300/12 text-emerald-100",
  "in-progress": "border-cyan-300/30 bg-cyan-300/12 text-cyan-100",
  concept: "border-slate-300/20 bg-slate-300/10 text-slate-200",
};

export function FeaturedProjectCard({ project, className }: FeaturedProjectCardProps) {
  const primaryHref = project.liveUrl ?? project.githubUrl;
  const primaryLabel = project.liveUrl ? "View Demo" : "View Repository";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "content-card content-card-interactive project-card project-card-featured rounded-3xl p-6 sm:p-8",
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/12 px-3 py-1.5 text-xs text-cyan-100">
          <Sparkles size={14} />
          Featured
        </p>
        <span
          className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs uppercase tracking-[0.14em] ${statusStyles[project.status]}`}
        >
          {projectStatusLabels[project.status]}
        </span>
        <span className="rounded-full border border-white/16 bg-slate-950/72 px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-slate-300">
          {projectCategoryLabels[project.category]}
        </span>
      </div>

      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-100">
        {project.name}
      </h3>
      <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-cyan-200/70">
        Project Snapshot
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-300/88 sm:text-base">
        {project.fullDescription ?? project.shortDescription}
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

      <div className="mt-6 flex flex-wrap gap-2 border-t border-cyan-300/14 pt-5">
        <Link
          href={primaryHref}
          target="_blank"
          rel="noreferrer"
          className="project-cta-primary inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm"
        >
          <CircleDot size={15} />
          {primaryLabel}
          <ArrowUpRight size={16} className="card-link-icon" />
        </Link>
        {project.liveUrl ? (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="project-cta-secondary inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm"
          >
            Source Code
            <ArrowUpRight size={16} className="card-link-icon" />
          </Link>
        ) : null}
      </div>
    </motion.article>
  );
}
