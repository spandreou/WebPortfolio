# Particle Identity Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Render the portfolio name and two professional-title lines as a synchronized, responsive particle identity inside one existing target frame.

**Architecture:** Keep the supplied `ParticleText` canvas implementation as a reusable client component. Add a small pure configuration builder that guarantees line order and shared timing, then have `HeroSection` map that configuration into three separately sized canvases inside one `TargetFrame`.

**Tech Stack:** Next.js 15.5, React 19, TypeScript, Tailwind CSS 4, Canvas 2D, Framer Motion, Node.js built-in test runner

## Global Constraints

- Keep all identity copy sourced from `siteConfig`.
- Add no runtime dependency.
- Preserve the description card, calls to action, background shader, and existing target-frame visual language.
- Use one semantic `h1`; hide the composite canvas stack from assistive technology and expose one screen-reader identity block.
- Use `trigger="mount"`, synchronized gathering, restrained pointer repulsion, low idle drift, and static reduced-motion rendering.
- Do not touch or stage the pre-existing `AGENTS.md` change.

---

### Task 1: Particle Identity Configuration Contract

**Files:**
- Create: `lib/particle-identity.ts`
- Create: `tests/particle-identity.test.ts`
- Modify: `tsconfig.json`

**Interfaces:**
- Consumes: `professionalTitle: readonly string[]`, `name: string`
- Produces: `createParticleIdentityLines(professionalTitle, name): ParticleIdentityLine[]`
- Produces: `ParticleIdentityLine` with `text`, `kind`, `gatherDuration`, `stagger`, `trigger`, `idleDrift`, and `pointerRepel`

- [ ] **Step 1: Enable explicit TypeScript test imports**

Add `"allowImportingTsExtensions": true` beside `"noEmit": true` in `tsconfig.json`. This is a compiler-only setting and does not change the production bundle.

- [ ] **Step 2: Write the failing configuration test**

```ts
import assert from "node:assert/strict";
import test from "node:test";
import { createParticleIdentityLines } from "../lib/particle-identity.ts";

test("orders both roles before the name and synchronizes formation timing", () => {
  const lines = createParticleIdentityLines(
    ["Junior Full-Stack Developer", "AI Automation & Integrations"],
    "Spyridon Andreou",
  );

  assert.deepEqual(
    lines.map(({ text, kind }) => ({ text, kind })),
    [
      { text: "Junior Full-Stack Developer", kind: "role" },
      { text: "AI Automation & Integrations", kind: "role" },
      { text: "Spyridon Andreou", kind: "name" },
    ],
  );
  assert.deepEqual(
    [...new Set(lines.map(({ gatherDuration, stagger, trigger }) => `${gatherDuration}:${stagger}:${trigger}`))],
    ["1500:320:mount"],
  );
});

test("uses calmer settled motion for role lines than for the name", () => {
  const lines = createParticleIdentityLines(["Role one", "Role two"], "Name");
  assert.equal(lines[0].idleDrift, 0.18);
  assert.equal(lines[0].pointerRepel, 10);
  assert.equal(lines[2].idleDrift, 0.28);
  assert.equal(lines[2].pointerRepel, 16);
});
```

- [ ] **Step 3: Run the test and verify RED**

Run: `node --test tests/particle-identity.test.ts`

Expected: FAIL because `lib/particle-identity.ts` does not exist.

- [ ] **Step 4: Implement the minimal configuration builder**

```ts
export type ParticleIdentityLine = {
  text: string;
  kind: "role" | "name";
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
    ...sharedTiming,
    idleDrift: 0.18,
    pointerRepel: 10,
  }));

  return [
    ...roles,
    {
      text: name,
      kind: "name",
      ...sharedTiming,
      idleDrift: 0.28,
      pointerRepel: 16,
    },
  ];
}
```

- [ ] **Step 5: Run the test and verify GREEN**

Run: `node --test tests/particle-identity.test.ts`

Expected: 2 tests pass with no warnings or errors.

### Task 2: Reusable Particle Canvas

**Files:**
- Create: `components/ParticleText.tsx`
- Source: `C:/Users/thugs/.codex/attachments/ddc3b5f0-5e41-49b9-b5d4-f5735de67385/pasted-text.txt`

**Interfaces:**
- Consumes: `ParticleTextProps` from the supplied React Bits contract
- Produces: default `ParticleText` client component

- [ ] **Step 1: Read the installed Next.js client-component and CSS guides**

Read the relevant files under `node_modules/next/dist/docs/` for client components and styling before adding code, as required by `AGENTS.md`.

- [ ] **Step 2: Add the supplied component source**

Copy only the `Full Component Source` TSX block into `components/ParticleText.tsx`, preserving the supplied resize, font-loading, reduced-motion, pointer, particle-cap, and cleanup behavior.

The rendered contract remains:

```tsx
return (
  <div ref={containerRef} className={`relative block h-full min-h-[240px] w-full overflow-hidden touch-none ${className}`} style={style} aria-label={text}>
    <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" aria-hidden="true" />
    <span className="sr-only">{text}</span>
  </div>
);
```

- [ ] **Step 3: Run focused static checks**

Run: `npx eslint components/ParticleText.tsx`

Expected: exit code 0 with no lint errors.

Run: `npx tsc --noEmit`

Expected: exit code 0 with no TypeScript errors.

### Task 3: Unified Hero Identity Frame

**Files:**
- Modify: `components/HeroSection.tsx`
- Modify: `components/TargetFrame.tsx`
- Modify: `styles/theme.css`

**Interfaces:**
- Consumes: `createParticleIdentityLines(siteConfig.professionalTitle, siteConfig.name)`
- Consumes: default `ParticleText`
- Produces: one responsive composite identity frame with one semantic identity block

- [ ] **Step 1: Replace the split title/name markup**

In `HeroSection`, create `identityLines` and render one motion wrapper and one `TargetFrame`:

```tsx
const identityLines = createParticleIdentityLines(
  siteConfig.professionalTitle,
  siteConfig.name,
);

<div className="sr-only">
  <h1>{siteConfig.name}</h1>
  <p>{siteConfig.professionalTitle.join(". ")}</p>
</div>
<div aria-hidden="true" className="particle-identity-stack">
  {identityLines.map((line) => (
    <ParticleText
      key={`${line.kind}-${line.text}`}
      text={line.text.toUpperCase()}
      gatherDuration={line.gatherDuration}
      stagger={line.stagger}
      trigger={line.trigger}
      idleDrift={line.idleDrift}
      pointerRepel={line.pointerRepel}
      {...(line.kind === "name" ? nameParticleProps : roleParticleProps)}
    />
  ))}
</div>
```

Use responsive role/name wrapper heights and `fontSize` clamps. Role lines use the mono family, density `3`, particle size near `1.35`, and low scatter. The name uses the sans family, density `4`, particle size near `2`, and a larger but restrained scatter.

- [ ] **Step 2: Make `TargetFrame` a full-width composite container**

Keep all existing effects. Change only the child wrapper from an unstyled content-sized div to a full-width wrapper and pass the existing `className` through without introducing horizontal overflow.

- [ ] **Step 3: Add focused identity-stack styles**

Add styles for stable canvas heights, spacing, and responsive frame sizing. Keep selectors scoped under `.particle-identity-stack`; do not modify unrelated card or background styles.

- [ ] **Step 4: Run automated checks**

Run: `node --test tests/particle-identity.test.ts`

Expected: 2 tests pass.

Run: `npm run lint`

Expected: exit code 0.

Run: `npm run build`

Expected: Next.js production build succeeds.

Run: `git diff --check`

Expected: no whitespace errors.

### Task 4: Browser Verification and Corrections

**Files:**
- Modify only if verification exposes a failing requirement: `components/HeroSection.tsx`, `components/TargetFrame.tsx`, `styles/theme.css`, `lib/particle-identity.ts`, `tests/particle-identity.test.ts`

**Interfaces:**
- Consumes: local `/` route
- Produces: visual and console evidence for desktop, mobile, and reduced-motion behavior

- [ ] **Step 1: Start the local development server**

Run: `npm run dev` and capture the bound localhost URL.

- [ ] **Step 2: Verify desktop behavior with the requested Browser plugin**

At approximately `1440x900`, confirm one frame contains both role lines and the name, all lines gather together, the settled text is readable, pointer repel is restrained, description/CTA content remains below, and the console has no errors.

- [ ] **Step 3: Verify mobile behavior**

At approximately `390x844`, confirm no horizontal overflow, all three lines fit, the role lines remain recognizable, and CTA links remain available.

- [ ] **Step 4: Verify reduced motion**

Emulate `prefers-reduced-motion: reduce`; reload and confirm text renders immediately without gather, idle drift, glow animation, or pointer displacement.

- [ ] **Step 5: Correct failures test-first**

For a configuration failure, add a failing literal assertion to `tests/particle-identity.test.ts`, verify RED, make the minimal fix, and verify GREEN. For a purely visual CSS failure, capture the failing viewport evidence, apply the smallest scoped style correction, and repeat that exact viewport check.

- [ ] **Step 6: Run the final verification suite**

Run: `node --test tests/particle-identity.test.ts`, `npm run lint`, `npm run build`, and `git diff --check`.

Expected: every command succeeds.
