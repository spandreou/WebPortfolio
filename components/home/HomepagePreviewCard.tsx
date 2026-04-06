"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type HomepagePreviewCardProps = {
  label: string;
  title: string;
  copy: string;
  href: string;
  index: number;
};

export function HomepagePreviewCard({
  label,
  title,
  copy,
  href,
  index,
}: HomepagePreviewCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="glass-panel rounded-2xl p-5 sm:p-6"
    >
      <p className="font-mono text-[0.64rem] tracking-[0.3em] text-cyan-300/80">
        {label}
      </p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-100">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300/80">{copy}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-100 transition hover:text-cyan-50"
      >
        Explore
        <ArrowUpRight size={15} />
      </Link>
    </motion.article>
  );
}
