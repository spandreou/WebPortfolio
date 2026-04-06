"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CircleDot } from "lucide-react";
import Link from "next/link";
import type { ProjectItem } from "@/lib/projects-data";

type ProjectCardProps = {
  project: ProjectItem;
};

const statusStyles: Record<ProjectItem["status"], string> = {
  completed: "border-emerald-300/25 bg-emerald-300/12 text-emerald-100",
  "in-progress": "border-cyan-300/30 bg-cyan-300/12 text-cyan-100",
  concept: "border-slate-300/20 bg-slate-300/10 text-slate-200",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="glass-panel flex h-full flex-col rounded-2xl p-5 sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-100">
            {project.name}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cyan-200/75">
            {project.category}
          </p>
        </div>
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-300/85 sm:text-base">
        {project.shortDescription}
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

      <div className="mt-5 flex flex-wrap gap-2">
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/28 bg-slate-950/72 px-3 py-2 text-xs text-cyan-100 transition hover:border-cyan-200/60 hover:text-cyan-50 sm:text-sm"
        >
          <CircleDot size={14} />
          GitHub
          <ArrowUpRight size={14} />
        </Link>
        {project.liveUrl ? (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/72 px-3 py-2 text-xs text-slate-200 transition hover:border-cyan-200/40 hover:text-cyan-100 sm:text-sm"
          >
            Live Demo
            <ArrowUpRight size={14} />
          </Link>
        ) : null}
      </div>
    </motion.article>
  );
}
