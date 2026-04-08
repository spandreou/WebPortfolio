"use client";

import { motion } from "framer-motion";

type ContactHeroProps = {
  title: string;
  subtitle: string;
  availability: string;
};

export function ContactHero({ title, subtitle, availability }: ContactHeroProps) {
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
          CONTACT
        </p>
        <h1 className="mt-3 bg-gradient-to-r from-slate-100 via-cyan-100 to-sky-200 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-cyan-100/90 sm:text-lg">
          {subtitle}
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300/85 sm:text-base">
          {availability}
        </p>
      </motion.div>
    </section>
  );
}
