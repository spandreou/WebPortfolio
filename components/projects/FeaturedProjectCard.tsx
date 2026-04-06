"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import type { ProjectItem } from "@/lib/projects-data";

type FeaturedProjectCardProps = {
  project: ProjectItem;
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="glass-panel rounded-3xl p-6 sm:p-8"
    >
      <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/12 px-3 py-1.5 text-xs text-cyan-100">
        <Sparkles size={14} />
        Featured
      </p>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-100">
        {project.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300/85 sm:text-base">
        {project.fullDescription ?? project.shortDescription}
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
        <span className="rounded-full border border-white/16 bg-slate-950/72 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-slate-300">
          {project.category}
        </span>
        <span className="rounded-full border border-cyan-300/28 bg-cyan-300/12 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-cyan-100">
          {project.status}
        </span>
      </div>
      <div className="mt-6">
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-slate-950/75 px-4 py-2.5 text-sm text-cyan-100 transition hover:border-cyan-200/60 hover:text-cyan-50"
        >
          View Repository
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}
