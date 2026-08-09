export type ParticleIdentityLine = {
  text: string;
  kind: "role" | "name";
  fallbackLayer: "foreground" | "background";
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
    fallbackLayer: "foreground" as const,
    ...sharedTiming,
    idleDrift: 0.18,
    pointerRepel: 10,
  }));

  return [
    ...roles,
    {
      text: name,
      kind: "name",
      fallbackLayer: "background",
      ...sharedTiming,
      idleDrift: 0.28,
      pointerRepel: 16,
    },
  ];
}
