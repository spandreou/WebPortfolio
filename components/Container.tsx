import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1160px] px-5 sm:px-8 lg:px-12", className)}
      {...props}
    />
  );
}
