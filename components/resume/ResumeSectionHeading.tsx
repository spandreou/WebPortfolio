"use client";

import { motion } from "framer-motion";

type ResumeSectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function ResumeSectionHeading({
  title,
  subtitle,
}: ResumeSectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mb-6 sm:mb-8"
    >
      <p className="font-mono text-[0.64rem] tracking-[0.3em] text-cyan-300/75 sm:text-xs">
        RESUME SECTION
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-3xl text-sm text-slate-300/80 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
