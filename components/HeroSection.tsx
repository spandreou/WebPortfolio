"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { TargetFrame } from "@/components/TargetFrame";

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
            <h1 className="hero-title text-4xl font-semibold tracking-tight text-slate-100 sm:text-6xl">
              SPYRIDON ANDREOU
            </h1>
          </TargetFrame>
        </motion.div>

        <motion.div
          className="glass-panel mt-8 w-full max-w-2xl rounded-3xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-pretty text-base leading-relaxed text-slate-200/90 sm:text-lg">
            Digital Systems Undergraduate - Software &amp; AI Projects
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/projects">
              View Projects
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Me
            </Button>
          </div>
          <Link
            href="/resume"
            className="mt-4 inline-flex items-center text-sm text-slate-300/85 transition hover:text-cyan-100"
          >
            View Full Resume
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
