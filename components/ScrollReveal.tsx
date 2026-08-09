"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  blur?: number;
  once?: boolean;
  amount?: number;
};

const visibleState = { opacity: 1, y: 0, filter: "blur(0px)" };

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 18,
  blur = 3,
  once = true,
  amount = 0.2,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const shouldReduceMotion = hasMounted && prefersReducedMotion;

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      animate={shouldReduceMotion ? visibleState : undefined}
      whileInView={shouldReduceMotion ? undefined : visibleState}
      viewport={{ once, amount }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration, delay, ease: [0.22, 1, 0.36, 1] }
      }
    >
      {children}
    </motion.div>
  );
}
