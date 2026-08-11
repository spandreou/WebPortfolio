export type ParticleIdentityLine = {
  text: string;
  kind: "role" | "name";
  renderFallback: false;
  gatherDuration: 1500;
  stagger: 320;
  trigger: "mount";
  idleDrift: number;
  pointerRepel: number;
};

const sharedTiming = {
  gatherDuration: 1500,
  stagger: 320,
  trigger: "mount",
} as const;

export function createParticleIdentityLines(
  professionalTitle: readonly string[],
  name: string,
): ParticleIdentityLine[] {
  const roles = professionalTitle.map((text) => ({
    text,
    kind: "role" as const,
    renderFallback: false as const,
    ...sharedTiming,
    idleDrift: 0.12,
    pointerRepel: 8,
  }));

  return [
    ...roles,
    {
      text: name,
      kind: "name",
      renderFallback: false,
      ...sharedTiming,
      idleDrift: 0.28,
      pointerRepel: 16,
    },
  ];
}
