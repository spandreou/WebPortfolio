"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import type { MouseEvent as ReactMouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type TargetFrameProps = {
  children: ReactNode;
  className?: string;
};

export function TargetFrame({ children, className }: TargetFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const activeRef = useRef(false);
  const targetRef = useRef({ x: 50, y: 50 });
  const currentRef = useRef({ x: 50, y: 50 });

  const runAnimation = () => {
    const frame = frameRef.current;
    if (!frame) {
      rafRef.current = null;
      return;
    }

    currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.16;
    currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.16;

    frame.style.setProperty("--glow-x", `${currentRef.current.x}%`);
    frame.style.setProperty("--glow-y", `${currentRef.current.y}%`);

    const deltaX = Math.abs(targetRef.current.x - currentRef.current.x);
    const deltaY = Math.abs(targetRef.current.y - currentRef.current.y);

    if (activeRef.current || deltaX > 0.08 || deltaY > 0.08) {
      rafRef.current = window.requestAnimationFrame(runAnimation);
      return;
    }

    rafRef.current = null;
  };

  const requestTick = () => {
    if (rafRef.current !== null) {
      return;
    }
    rafRef.current = window.requestAnimationFrame(runAnimation);
  };

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    const frame = frameRef.current;
    if (!frame) {
      return;
    }

    const rect = frame.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    targetRef.current = {
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    };

    requestTick();
  };

  const handleMouseEnter = () => {
    const frame = frameRef.current;
    if (!frame) {
      return;
    }

    activeRef.current = true;
    frame.style.setProperty("--glow-opacity", "1");
    requestTick();
  };

  const handleMouseLeave = () => {
    const frame = frameRef.current;
    if (!frame) {
      return;
    }

    activeRef.current = false;
    targetRef.current = { x: 50, y: 50 };
    frame.style.setProperty("--glow-opacity", "0");
    requestTick();
  };

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={frameRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "target-frame group relative inline-flex max-w-full items-center justify-center overflow-hidden rounded-2xl px-6 py-4 transition-all duration-500 ease-out hover:scale-[1.01] sm:px-9 sm:py-6",
        className,
      )}
    >
      <span className="absolute inset-0 rounded-2xl border border-cyan-400/30 bg-slate-900/40 shadow-[0_0_30px_rgba(34,211,238,0.12)] backdrop-blur-md transition-all duration-500 ease-out group-hover:shadow-[0_0_60px_rgba(34,211,238,0.22)]" />
      <span className="absolute inset-[1px] rounded-[15px] border border-white/10" />
      <span className="target-cursor-glow pointer-events-none absolute inset-0 rounded-2xl" />
      <motion.span
        className="absolute inset-0 rounded-2xl border border-cyan-300/35"
        animate={{ opacity: [0.28, 0.55, 0.28] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <span className="frame-corner corner-tl" />
      <span className="frame-corner corner-tr" />
      <span className="frame-corner corner-bl" />
      <span className="frame-corner corner-br" />
      <span className="target-scanline absolute inset-y-2 -left-1/3 w-1/3" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
