"use client";

import Iridescence from "@/components/Iridescence";

export function BackgroundEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      <Iridescence
        color={[0.6, 0.72, 0.92]}
        mouseReact={false}
        amplitude={0.08}
        speed={0.8}
        className="absolute inset-0 opacity-40"
      />
      <div className="background-ambient-glow absolute inset-0 pointer-events-none" />
      <div className="background-grid absolute inset-0 opacity-20" />
      <div className="background-vignette absolute inset-0" />
    </div>
  );
}
