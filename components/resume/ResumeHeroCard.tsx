"use client";

import { motion } from "framer-motion";
import { Download, Globe, Link2, Mail, MapPin, Network, Phone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { TargetFrame } from "@/components/TargetFrame";
import type { ResumeData } from "@/lib/resume-data";
import { siteConfig } from "@/lib/site-config";

type ResumeHeroCardProps = {
  personal: ResumeData["personal"];
  links: ResumeData["links"];
};

export function ResumeHeroCard({ personal, links }: ResumeHeroCardProps) {
  return (
    <section className="relative pt-4 sm:pt-8">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10"
      >
        <p className="font-mono text-[0.64rem] tracking-[0.3em] text-cyan-300/75 sm:text-xs">
          PROFESSIONAL PROFILE
        </p>

        <div className="mt-4">
          <TargetFrame>
            <h1 className="hero-title text-3xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
              {personal.fullName}
            </h1>
          </TargetFrame>
        </div>

        <p className="mt-5 text-lg text-cyan-100/90 sm:text-xl">{personal.title}</p>

        <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-300/90">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-slate-900/60 px-3 py-1.5">
            <MapPin size={14} />
            {personal.location}
          </span>
          <Link
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-slate-900/60 px-3 py-1.5 transition hover:border-cyan-200/50 hover:text-cyan-100"
          >
            <Mail size={14} />
            {personal.email}
          </Link>
          {personal.phone ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-slate-900/60 px-3 py-1.5">
              <Phone size={14} />
              {personal.phone}
            </span>
          ) : null}
        </div>

        <p className="mt-6 max-w-4xl text-pretty leading-relaxed text-slate-200/90">
          {personal.summary}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {links.github ? (
            <ResumeLink href={links.github} icon={<Link2 size={16} />} label="GitHub" />
          ) : null}
          {links.linkedin ? (
            <ResumeLink
              href={links.linkedin}
              icon={<Network size={16} />}
              label="LinkedIn"
            />
          ) : null}
          {links.portfolio ? (
            <ResumeLink
              href={links.portfolio}
              icon={<Globe size={16} />}
              label="Portfolio"
            />
          ) : null}
          <Link
            href={siteConfig.links.cv}
            download
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/15 px-4 py-2.5 text-sm font-medium text-cyan-100 transition hover:border-cyan-100/70 hover:bg-cyan-300/25 hover:text-white"
          >
            <Download size={16} />
            Download CV
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

type ResumeLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
};

function ResumeLink({ href, icon, label }: ResumeLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/70 px-4 py-2.5 text-sm text-slate-200 transition hover:border-cyan-300/45 hover:text-cyan-100"
    >
      {icon}
      {label}
    </Link>
  );
}
