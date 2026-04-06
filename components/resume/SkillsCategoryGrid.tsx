"use client";

import { motion } from "framer-motion";
import type { ResumeData } from "@/lib/resume-data";

const categoryLabels: Record<keyof ResumeData["skills"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  databases: "Databases",
  devtools: "Dev Tools",
  ai: "AI / Automation",
  cloud: "Cloud / Platforms",
  other: "Other",
};

type SkillsCategoryGridProps = {
  skills: ResumeData["skills"];
};

export function SkillsCategoryGrid({ skills }: SkillsCategoryGridProps) {
  const entries = (Object.keys(skills) as Array<keyof ResumeData["skills"]>)
    .map((key) => ({
      key,
      label: categoryLabels[key],
      items: skills[key],
    }))
    .filter((entry) => entry.items.length > 0);

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {entries.map((entry, index) => (
        <motion.article
          key={entry.key}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
          whileHover={{ y: -3 }}
          className="glass-panel rounded-2xl p-5 sm:p-6"
        >
          <h3 className="text-sm font-semibold tracking-wide text-cyan-100 sm:text-base">
            {entry.label}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-300/25 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-200 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
