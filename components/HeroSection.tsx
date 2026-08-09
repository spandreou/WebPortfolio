"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import ParticleText from "@/components/ParticleText";
import { TargetFrame } from "@/components/TargetFrame";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-var(--navbar-height))] items-center justify-center py-10 sm:py-16"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/14 blur-3xl sm:h-[34rem] sm:w-[34rem]" />
      <div aria-hidden="true" className="noise-overlay pointer-events-none absolute inset-0 z-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.div
          className="w-full max-w-full"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <TargetFrame className="w-full max-w-4xl">
            <div className="mx-auto flex w-[min(78vw,52rem)] max-w-full flex-col items-center justify-center py-1 sm:py-2">
              <ParticleText
                text={siteConfig.name.toUpperCase()}
                particleSize={2.2}
                density={4}
                color="#38bdf8"
                highlightColor="#67e8f9"
                scatter={155}
                gatherDuration={1450}
                stagger={360}
                pointerRepel={34}
                repelRadius={115}
                idleDrift={0.55}
                trigger="hover"
                fontSize="clamp(2.25rem, 6vw, 5rem)"
                fontWeight={800}
                glow
                style={{ height: "clamp(5.25rem, 10vw, 7.5rem)", minHeight: "5.25rem" }}
              />

              <div className="mt-1 w-full sm:mt-2">
                <ParticleText
                  text={siteConfig.professionalTitle[0].toUpperCase()}
                  particleSize={1.45}
                  density={4}
                  color="#67e8f9"
                  highlightColor="#38bdf8"
                  scatter={85}
                  gatherDuration={1250}
                  stagger={280}
                  pointerRepel={24}
                  repelRadius={90}
                  idleDrift={0.4}
                  trigger="hover"
                  fontSize="clamp(0.72rem, 1.7vw, 1.05rem)"
                  fontWeight={700}
                  glow
                  style={{ height: "2.25rem", minHeight: "2.25rem" }}
                />
              </div>

              <div className="w-full">
                <ParticleText
                  text={siteConfig.professionalTitle[1].toUpperCase()}
                  particleSize={1.35}
                  density={4}
                  color="#bae6fd"
                  highlightColor="#22d3ee"
                  scatter={85}
                  gatherDuration={1250}
                  stagger={280}
                  pointerRepel={24}
                  repelRadius={90}
                  idleDrift={0.4}
                  trigger="hover"
                  fontSize="clamp(0.68rem, 1.55vw, 0.98rem)"
                  fontWeight={650}
                  glow
                  style={{ height: "2.15rem", minHeight: "2.15rem" }}
                />
              </div>
            </div>
          </TargetFrame>
        </motion.div>

        <motion.div
          className="glass-panel relative mt-8 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(0,255,255,0.1)] backdrop-blur-xl transition-all duration-300 ease-out sm:p-8"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
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
