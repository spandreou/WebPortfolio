"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import type { ResumeData } from "@/lib/resume-data";

type CertificationsPanelProps = {
  certifications: ResumeData["certifications"];
};

export function CertificationsPanel({
  certifications,
}: CertificationsPanelProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="glass-panel rounded-2xl p-5 sm:p-6"
    >
      <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-100">
        <Award size={18} className="text-cyan-200" />
        Certifications
      </h3>

      <ul className="mt-4 space-y-3">
        {certifications.map((certification) => (
          <li
            key={`${certification.name}-${certification.year ?? "no-year"}`}
            className="rounded-xl border border-cyan-300/18 bg-slate-950/62 px-4 py-3"
          >
            <p className="text-sm font-medium text-slate-100 sm:text-base">
              {certification.name}
            </p>
            <p className="mt-1 text-xs text-slate-300/75 sm:text-sm">
              {[certification.issuer, certification.year].filter(Boolean).join(" - ")}
            </p>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
