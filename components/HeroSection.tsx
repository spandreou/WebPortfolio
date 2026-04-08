"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { TargetFrame } from "@/components/TargetFrame";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-var(--navbar-height))] items-center justify-center py-10 sm:py-16"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/14 blur-3xl sm:h-[34rem] sm:w-[34rem]" />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.p
          className="font-mono text-[0.7rem] tracking-[0.34em] text-cyan-300/85 sm:text-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          FUTURE-DRIVEN SOFTWARE ENGINEER
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <TargetFrame>
            <h1 className="hero-title bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-clip-text text-3xl font-semibold tracking-[0.07em] text-transparent subpixel-antialiased sm:text-5xl lg:text-6xl">
              {siteConfig.name.toUpperCase()}
            </h1>
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
            Digital Systems Undergraduate - Software &amp; AI Projects
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
