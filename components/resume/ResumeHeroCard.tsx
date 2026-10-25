"use client";

import { motion } from "framer-motion";
import { Download, Eye, Globe, Link2, Mail, MapPin, Network, Phone } from "lucide-react";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { TargetFrame } from "@/components/TargetFrame";
import { CvPreviewModal } from "@/components/resume/CvPreviewModal";
import type { ResumeData } from "@/lib/resume-data";
import { siteConfig } from "@/lib/site-config";

type ResumeHeroCardProps = {
  personal: ResumeData["personal"];
  links: ResumeData["links"];
};

export function ResumeHeroCard({ personal, links }: ResumeHeroCardProps) {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <section className="relative pt-4 sm:pt-8">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[25rem] w-[25rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10"
      >
        <p className="font-mono text-[0.64rem] tracking-[0.3em] text-cyan-300/75 sm:text-xs">
          PROFESSIONAL PROFILE
        </p>

        <div className="mt-4 max-w-full">
          <TargetFrame className="w-full sm:w-auto">
            <h1 className="hero-title whitespace-nowrap text-2xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
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

        <div className="mt-6 max-w-4xl space-y-4 text-pretty leading-relaxed text-slate-200/90">
          {personal.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3">
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
          <button
            type="button"
            onClick={() => setPreviewOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/60 bg-cyan-300/20 px-4 py-2.5 text-sm font-medium text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.22)] transition-all duration-300 hover:scale-105 hover:border-cyan-100 hover:bg-cyan-300/30 hover:text-white hover:shadow-[0_0_28px_rgba(34,211,238,0.4)]"
          >
            <Eye size={16} />
            Preview CV
          </button>
          <Link
            href={siteConfig.links.cv}
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/70 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-cyan-300/40 hover:bg-slate-900 hover:text-cyan-100"
          >
            <Download size={16} />
            Download CV
          </Link>
        </div>
      </motion.div>

      <CvPreviewModal
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        pdfUrl={siteConfig.links.cv}
      />
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
