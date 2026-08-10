# Particles-Only Identity Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove every visible identity fallback glyph so all three framed hero lines are drawn exclusively by particles while remaining readable on desktop and mobile.

**Architecture:** Keep the existing three-canvas `ParticleText` composition and the separate `sr-only` semantic identity block. Add an explicit particles-only rendering contract to the identity-line configuration, consume it in `HeroSection`, and tune the smaller role canvases for denser, steadier particle letterforms.

**Tech Stack:** Next.js 15.5.14, React 19, TypeScript, Canvas 2D, Tailwind CSS, Node test runner, ESLint, in-app Browser.

## Global Constraints

- Render no visible DOM fallback glyph behind or above any particle canvas.
- Preserve the `sr-only` `h1` and professional-title paragraph.
- Keep identity copy, line order, target frame, description card, and calls to action unchanged.
- Preserve synchronized gather timing and reduced-motion behavior.
- Do not deploy to production; verify locally first.
- Do not modify or commit `AGENTS.md`.

---

### Task 1: Particles-only identity rendering

**Files:**
- Modify: `tests/particle-identity.test.ts`
- Modify: `lib/particle-identity.ts`
- Modify: `components/HeroSection.tsx`
- Modify: `styles/theme.css`

**Interfaces:**
- Consumes: `createParticleIdentityLines(professionalTitle: readonly string[], name: string): ParticleIdentityLine[]`
- Produces: `ParticleIdentityLine.renderFallback: false`, consumed by `HeroSection` to omit visible fallback spans.

- [x] **Step 1: Write the failing particles-only contract test**

Replace the foreground-fallback test with:

```ts
test("uses particles only for every visible identity line", () => {
  const lines = createParticleIdentityLines(["Role one", "Role two"], "Name");

  assert.deepEqual(
    lines.map(({ renderFallback }) => renderFallback),
    [false, false, false],
  );
});
```

- [x] **Step 2: Run the test and verify RED**

Run:

```powershell
& 'C:\Program Files\nodejs\node.exe' --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --test tests\particle-identity.test.ts
```

Expected: the new test fails because `renderFallback` is `undefined` for all three lines.

- [x] **Step 3: Implement the minimal particles-only contract**

In `lib/particle-identity.ts`, replace `fallbackLayer` with:

```ts
renderFallback: false;
```

Set `renderFallback: false` on both role objects and the name object.

In `HeroSection`, render the fallback span only when `line.renderFallback` is true:

```tsx
{line.renderFallback ? (
  <span className="particle-identity-fallback">
    {line.text.toUpperCase()}
  </span>
) : null}
```

- [x] **Step 4: Tune particle-only role recognition**

Use denser and slightly larger particles for role lines without changing name behavior:

```tsx
particleSize={isName ? 1.9 : lineIndex === 1 ? 1.8 : 1.45}
density={isName ? 3 : 1}
```

Raise the internal minimum particle cap from `900` to `1600` while preserving the existing maximum cap of `5200` and the device-pixel-ratio cap.

Reduce settled role motion in `lib/particle-identity.ts` to:

```ts
idleDrift: 0.12,
pointerRepel: 8,
```

Update the existing motion test literals to match. Remove the now-unused foreground fallback CSS while retaining the reusable base fallback styles used by other potential `ParticleText` compositions.

- [x] **Step 5: Run automated verification and verify GREEN**

Run:

```powershell
$env:Path = 'C:\Program Files\nodejs;' + $env:Path
node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --test tests\particle-identity.test.ts
npm run lint
npm run build
git diff --check -- components/HeroSection.tsx lib/particle-identity.ts styles/theme.css tests/particle-identity.test.ts
```

Expected: all tests pass, ESLint exits zero, the Next.js production build succeeds, and `git diff --check` prints no errors.

- [x] **Step 6: Verify the local UI**

Start the local dev server with Node 24 and inspect `/` in the Browser at 1440x900 and 390x844. Confirm:

- `.particle-identity-fallback` count is zero.
- exactly three identity particle canvases remain inside the target frame.
- all three lines are recognizable after settling.
- no horizontal overflow occurs.
- the console has no errors.
- reduced-motion rendering remains static and recognizable.

- [x] **Step 7: Commit the trial implementation**

```powershell
git add -- components/HeroSection.tsx lib/particle-identity.ts styles/theme.css tests/particle-identity.test.ts docs/superpowers/plans/2026-08-09-particles-only-identity.md
git commit -m "feat: render hero identity with particles only"
```

Do not push or deploy. Leave the local server and Browser result available for user review.
