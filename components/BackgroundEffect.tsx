"use client";

import { motion } from "framer-motion";

export function BackgroundEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_42%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.14),transparent_32%),#020617]" />
      <div className="background-grid absolute inset-0 opacity-30" />

      <motion.div
        className="liquid-blob absolute -left-28 -top-24 h-[30rem] w-[30rem] bg-cyan-400/20"
        animate={{
          x: [0, 120, 30, 0],
          y: [0, 60, 150, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 34,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <motion.div
        className="liquid-blob absolute right-[-8rem] top-[18%] h-[26rem] w-[26rem] bg-sky-500/18"
        animate={{
          x: [0, -120, -15, 0],
          y: [0, 120, 30, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 38,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <motion.div
        className="liquid-blob absolute bottom-[-12rem] left-[28%] h-[30rem] w-[30rem] bg-cyan-300/15"
        animate={{
          x: [0, 70, -45, 0],
          y: [0, -90, -35, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 40,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      <div className="background-vignette absolute inset-0" />
    </div>
  );
}
