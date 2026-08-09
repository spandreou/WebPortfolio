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
            <div className="mx-auto flex w-full max-w-[50rem] flex-col items-center justify-center overflow-hidden px-2 py-5 sm:px-4 sm:py-7">
              <div className="relative flex min-h-[5.25rem] w-full items-center justify-center overflow-hidden sm:min-h-[6.5rem]">
                <div
                  aria-hidden="true"
                  className="pointer-events-auto absolute inset-x-6 top-1/2 -translate-y-1/2 opacity-45 sm:inset-x-8 sm:opacity-50"
                >
                  <ParticleText
                    text={siteConfig.name.toUpperCase()}
                    particleSize={1.8}
                    density={4}
                    color="#22d3ee"
                    highlightColor="#38bdf8"
                    scatter={88}
                    gatherDuration={1150}
                    stagger={220}
                    pointerRepel={18}
                    repelRadius={92}
                    idleDrift={0.3}
                    trigger="hover"
                    fontSize="clamp(2.25rem, 5vw, 4rem)"
                    fontWeight={800}
                    glow
                    style={{ height: "clamp(5.25rem, 9vw, 6.75rem)", minHeight: "5.25rem" }}
                  />
                </div>

                <motion.h1
                  className="relative z-10 max-w-full whitespace-nowrap bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-300 bg-clip-text px-2 text-[clamp(1.8rem,4.55vw,3.75rem)] font-bold tracking-[0.01em] text-transparent drop-shadow-[0_0_16px_rgba(34,211,238,0.24)] sm:tracking-[0.025em]"
                  initial={{ opacity: 0, scale: 0.985 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.65, delay: 0.55, ease: "easeOut" }}
                >
                  {siteConfig.name.toUpperCase()}
                </motion.h1>
              </div>

              <div className="mt-5 flex w-full flex-col items-center gap-2 sm:mt-6 sm:gap-3">
                <div className="relative flex min-h-[2.5rem] w-full items-center justify-center overflow-hidden sm:min-h-[2.8rem]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-auto absolute inset-x-8 top-1/2 -translate-y-1/2 opacity-20 sm:inset-x-12"
                  >
                    <ParticleText
                      text={siteConfig.professionalTitle[0].toUpperCase()}
                      particleSize={0.72}
                      density={4}
                      color="#67e8f9"
                      highlightColor="#bae6fd"
                      scatter={42}
                      gatherDuration={900}
                      stagger={160}
                      pointerRepel={7}
                      repelRadius={58}
                      idleDrift={0.1}
                      trigger="hover"
                      fontSize="clamp(0.82rem, 1.55vw, 1.05rem)"
                      fontWeight={700}
                      glow={false}
                      style={{ height: "2.5rem", minHeight: "2.5rem" }}
                    />
                  </div>

                  <motion.p
                    className="relative z-10 px-3 font-mono text-[clamp(0.72rem,1.45vw,1rem)] font-semibold tracking-[0.1em] text-cyan-100/95 drop-shadow-[0_0_8px_rgba(103,232,249,0.14)] sm:tracking-[0.14em]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.72, ease: "easeOut" }}
                  >
                    {siteConfig.professionalTitle[0].toUpperCase()}
                  </motion.p>
                </div>

                <div className="relative flex min-h-[2.4rem] w-full items-center justify-center overflow-hidden sm:min-h-[2.7rem]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-auto absolute inset-x-8 top-1/2 -translate-y-1/2 opacity-[0.16] sm:inset-x-12"
                  >
                    <ParticleText
                      text={siteConfig.professionalTitle[1].toUpperCase()}
                      particleSize={0.58}
                      density={4}
                      color="#7dd3fc"
                      highlightColor="#bae6fd"
                      scatter={36}
                      gatherDuration={880}
                      stagger={150}
                      pointerRepel={6}
                      repelRadius={54}
                      idleDrift={0.08}
                      trigger="hover"
                      fontSize="clamp(0.78rem, 1.45vw, 0.98rem)"
                      fontWeight={700}
                      glow={false}
                      style={{ height: "2.4rem", minHeight: "2.4rem" }}
                    />
                  </div>

                  <motion.p
                    className="relative z-10 px-3 font-mono text-[clamp(0.69rem,1.35vw,0.94rem)] font-medium tracking-[0.09em] text-sky-200/88 drop-shadow-[0_0_7px_rgba(56,189,248,0.12)] sm:tracking-[0.13em]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.84, ease: "easeOut" }}
                  >
                    {siteConfig.professionalTitle[1].toUpperCase()}
                  </motion.p>
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
