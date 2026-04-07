"use client";

import Iridescence from "@/components/Iridescence";

export function BackgroundEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <Iridescence
        color={[0.5, 0.6, 0.8]}
        mouseReact={false}
        amplitude={0.1}
        speed={1}
        className="absolute inset-0 opacity-45"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.1),transparent_42%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.08),transparent_32%),#020617]" />
      <div className="background-grid absolute inset-0 opacity-20" />

      <div className="background-vignette absolute inset-0" />
    </div>
  );
}
