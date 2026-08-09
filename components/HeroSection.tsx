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
            <div className="mx-auto flex w-full max-w-[50rem] flex-col items-center justify-center overflow-hidden px-2 py-6 sm:px-5 sm:py-8">
              <h1 className="sr-only">{siteConfig.name}</h1>
              <p className="sr-only">{siteConfig.professionalTitle.join(" · ")}</p>

              <div
                aria-hidden="true"
                className="w-full overflow-hidden px-3 sm:px-6"
              >
                <ParticleText
                  text={siteConfig.name.toUpperCase()}
                  particleSize={1.35}
                  density={2}
                  color="#7dd3fc"
                  highlightColor="#22d3ee"
                  scatter={62}
                  gatherDuration={1050}
                  stagger={170}
                  pointerRepel={12}
                  repelRadius={72}
                  idleDrift={0.12}
                  trigger="hover"
                  fontSize="clamp(2rem, 4.6vw, 3.8rem)"
                  fontWeight={800}
                  glow
                  style={{ height: "clamp(5.5rem, 9vw, 6.75rem)", minHeight: "5.5rem" }}
                />
              </div>

              <div className="mt-4 flex w-full flex-col items-center gap-1.5 sm:mt-5 sm:gap-2">
                <div
                  aria-hidden="true"
                  className="w-full overflow-hidden px-7 sm:px-12"
                >
                  <ParticleText
                    className="font-mono"
                    text={siteConfig.professionalTitle[0].toUpperCase()}
                    particleSize={0.72}
                    density={2}
                    color="#cffafe"
                    highlightColor="#67e8f9"
                    scatter={34}
                    gatherDuration={900}
                    stagger={120}
                    pointerRepel={7}
                    repelRadius={48}
                    idleDrift={0.08}
                    trigger="hover"
                    fontSize="clamp(0.84rem, 1.45vw, 1.08rem)"
                    fontWeight={700}
                    glow={false}
                    style={{ height: "2.8rem", minHeight: "2.8rem" }}
                  />
                </div>

                <div
                  aria-hidden="true"
                  className="w-full overflow-hidden px-7 sm:px-12"
                >
                  <ParticleText
                    className="font-mono"
                    text={siteConfig.professionalTitle[1].toUpperCase()}
                    particleSize={0.6}
                    density={2}
                    color="#bae6fd"
                    highlightColor="#7dd3fc"
                    scatter={30}
                    gatherDuration={860}
                    stagger={110}
                    pointerRepel={6}
                    repelRadius={44}
                    idleDrift={0.06}
                    trigger="hover"
                    fontSize="clamp(0.78rem, 1.35vw, 0.98rem)"
                    fontWeight={700}
                    glow={false}
                    style={{ height: "2.65rem", minHeight: "2.65rem" }}
                  />
                </div>
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
