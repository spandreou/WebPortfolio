"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TargetFrameProps = {
  children: ReactNode;
  className?: string;
};

export function TargetFrame({ children, className }: TargetFrameProps) {
  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-[1.45rem] px-6 py-4 sm:px-9 sm:py-6",
        className,
      )}
    >
      <span className="absolute inset-0 rounded-[1.45rem] border border-cyan-300/25 bg-slate-950/35 backdrop-blur-lg" />
      <motion.span
        className="absolute -inset-px rounded-[1.5rem] border border-cyan-300/60"
        animate={{ opacity: [0.35, 0.9, 0.35] }}
        transition={{ duration: 2.7, repeat: Infinity, ease: "easeInOut" }}
      />

      <span className="frame-corner corner-tl" />
      <span className="frame-corner corner-tr" />
      <span className="frame-corner corner-bl" />
      <span className="frame-corner corner-br" />
      <span className="target-scanline absolute inset-x-3 top-1/2 h-px" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
