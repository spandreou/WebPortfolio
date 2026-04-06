"use client";

import { motion } from "framer-motion";
import { Languages } from "lucide-react";

type LanguagesPanelProps = {
  languages: string[];
};

export function LanguagesPanel({ languages }: LanguagesPanelProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
      className="glass-panel rounded-2xl p-5 sm:p-6"
    >
      <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-100">
        <Languages size={18} className="text-cyan-200" />
        Languages
      </h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {languages.map((language) => (
          <span
            key={language}
            className="rounded-full border border-cyan-300/22 bg-slate-950/68 px-3 py-1.5 text-sm text-slate-200"
          >
            {language}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
