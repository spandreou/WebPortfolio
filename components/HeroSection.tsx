"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import ParticleText from "@/components/ParticleText";
import { TargetFrame } from "@/components/TargetFrame";
import { createParticleIdentityLines } from "@/lib/particle-identity";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  const identityLines = createParticleIdentityLines(
    siteConfig.professionalTitle,
    siteConfig.name,
  );

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-var(--navbar-height))] items-center justify-center py-10 sm:py-16"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[24rem] w-[24rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/14 blur-3xl sm:h-[34rem] sm:w-[34rem]" />
      <div aria-hidden="true" className="noise-overlay pointer-events-none absolute inset-0 z-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <motion.div
          className="w-full max-w-full"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <TargetFrame className="w-full">
            <div className="sr-only">
              <h1>{siteConfig.name}</h1>
              <p>{siteConfig.professionalTitle.join(". ")}</p>
            </div>

            <div aria-hidden="true" className="particle-identity-stack">
              {identityLines.map((line) => {
                const isName = line.kind === "name";

                return (
                  <div
                    key={`${line.kind}-${line.text}`}
                    className={
                      isName
                        ? "particle-identity-line particle-identity-name font-sans"
                        : "particle-identity-line particle-identity-role font-mono"
                    }
                  >
                    <span className="particle-identity-fallback">
                      {line.text.toUpperCase()}
                    </span>
                    <ParticleText
                      text={line.text.toUpperCase()}
                      particleSize={isName ? 1.9 : 1.15}
                      density={isName ? 3 : 2}
                      color={isName ? "#38bdf8" : "#67e8f9"}
                      highlightColor={isName ? "#60a5fa" : "#bae6fd"}
                      scatter={isName ? 88 : 52}
                      gatherDuration={line.gatherDuration}
                      stagger={line.stagger}
                      pointerRepel={line.pointerRepel}
                      repelRadius={isName ? 100 : 72}
                      idleDrift={line.idleDrift}
                      trigger={line.trigger}
                      fontSize={
                        isName
                          ? "clamp(1.5rem, 6vw, 5rem)"
                          : "clamp(0.78rem, 2vw, 1.35rem)"
                      }
                      fontWeight={700}
                      fontFamily="inherit"
                      glow={isName}
                      className="relative z-10"
                      style={{ minHeight: 0 }}
                    />
                  </div>
                );
              })}
            </div>
          </TargetFrame>
        </motion.div>

        <motion.div
          className="glass-panel relative mt-8 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(0,255,255,0.1)] backdrop-blur-xl transition-all duration-300 ease-out sm:p-8"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-cyan-400/10 blur-2xl" />
          <p className="text-pretty text-base leading-relaxed text-slate-200/90 sm:text-lg">
            {siteConfig.heroDescription}
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              href="/projects"
              className="w-full rounded-xl border-white/15 bg-white/5 shadow-[0_0_0_rgba(0,255,255,0)] transition-all duration-300 ease-out hover:scale-105 hover:border-cyan-300/60 hover:bg-cyan-300/12 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] sm:w-auto"
            >
              View Projects
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              className="w-full rounded-xl border-white/15 bg-white/5 shadow-[0_0_0_rgba(0,255,255,0)] transition-all duration-300 ease-out hover:scale-105 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] sm:w-auto"
            >
              Contact Me
            </Button>
          </div>
          <Link
            href="/resume"
            className="mt-4 inline-flex items-center text-sm text-slate-300/85 transition-all duration-300 ease-out hover:text-cyan-100"
          >
            View Full Resume
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
