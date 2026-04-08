"use client";

import { motion } from "framer-motion";
import type { ResumeData } from "@/lib/resume-data";

type ExperienceTimelineProps = {
  experience: ResumeData["experience"];
};

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <ol className="relative space-y-4 border-l border-cyan-300/18 pl-6 sm:space-y-5 sm:pl-8">
      {experience.map((item, index) => (
        <motion.li
          key={`${item.role}-${item.period}`}
          initial={{ opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
          className="relative"
        >
          <span className="absolute -left-[1.85rem] top-7 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.72)] sm:-left-[2.35rem]" />
          <article className="content-card content-card-interactive rounded-2xl p-5 sm:p-6">
            <p className="font-mono text-[0.64rem] tracking-[0.24em] text-cyan-300/80 sm:text-xs">
              {item.period}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-100">{item.role}</h3>
            {item.company ? (
              <p className="mt-1 text-sm text-slate-300/85 sm:text-base">{item.company}</p>
            ) : null}
            {item.description?.length ? (
              <ul className="mt-3 space-y-2 text-sm text-slate-300/80">
                {item.description.map((detail) => (
                  <li key={detail} className="relative pl-4">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-cyan-300/75" />
                    {detail}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        </motion.li>
      ))}
    </ol>
  );
}
