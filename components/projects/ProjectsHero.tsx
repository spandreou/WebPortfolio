"use client";

import { motion } from "framer-motion";

type ProjectsHeroProps = {
  totalProjects: number;
  featuredProjects: number;
};

export function ProjectsHero({
  totalProjects,
  featuredProjects,
}: ProjectsHeroProps) {
  return (
    <section className="relative pt-4 sm:pt-8">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="content-card rounded-3xl p-6 sm:p-8 lg:p-10"
      >
        <p className="font-mono text-[0.64rem] tracking-[0.3em] text-cyan-300/75 sm:text-xs">
          PORTFOLIO PROJECTS
        </p>
        <h1 className="mt-3 bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-5xl">
          Product-Driven Builds
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300/85 sm:text-base">
          A curated set of software projects focused on clean architecture,
          practical engineering, and polished user-facing outcomes with clear product value.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200/90">
          <span className="rounded-full border border-cyan-300/25 bg-slate-950/65 px-3 py-1.5">
            {totalProjects} Total Projects
          </span>
          <span className="rounded-full border border-cyan-300/25 bg-slate-950/65 px-3 py-1.5">
            {featuredProjects} Featured
          </span>
        </div>
      </motion.div>
    </section>
  );
}
