import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
};

const styles: Record<ButtonVariant, string> = {
  primary:
    "border-cyan-300/40 bg-cyan-300/16 text-cyan-100 hover:border-cyan-200/65 hover:bg-cyan-300/26 hover:text-white",
  secondary:
    "border-white/15 bg-slate-950/55 text-slate-200 hover:border-cyan-200/35 hover:bg-slate-900/85 hover:text-cyan-100",
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full border px-6 text-sm font-medium tracking-wide backdrop-blur transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
        styles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
