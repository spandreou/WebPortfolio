# Particle Role Sizing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Increase only the two particles-only professional-title lines by approximately 15–18 percent so they are more recognizable without changing the name, frame, particle density, or animation.

**Architecture:** Update the role mask font clamp passed by `HeroSection` and the matching role canvas heights in `styles/theme.css`. Validate the real rendered particle bounds in the Browser before and after the change, then run the existing particle identity tests and project verification commands.

**Tech Stack:** Next.js 15.5.14, React 19, TypeScript, Canvas 2D, Tailwind CSS, Node test runner, ESLint, in-app Browser.

## Global Constraints

- Keep `SPYRIDON ANDREOU` at `clamp(1.5rem, 6vw, 5rem)`.
- Keep the target frame dimensions and surrounding hero content unchanged.
- Keep particle size, density, colors, gather timing, and reduced-motion behavior unchanged.
- Render no visible fallback text.
- Keep the change local; do not push or deploy.
- Do not modify or commit `AGENTS.md`.

---

### Task 1: Increase role mask and canvas sizing

**Files:**
- Modify: `components/HeroSection.tsx`
- Modify: `styles/theme.css`
- Modify: `docs/superpowers/plans/2026-08-10-particle-role-sizing.md`
- Test: `tests/particle-identity.test.ts`

**Interfaces:**
- Consumes: the existing `ParticleText.fontSize` string prop and `.particle-identity-role` responsive height rules.
- Produces: role mask size `clamp(1rem, 2.75vw, 1.75rem)` with canvas height `clamp(2.5rem, 4.8vw, 3.6rem)` and mobile height `2.5rem`.

- [x] **Step 1: Record the failing visual baseline**

At a Browser viewport of 845x507, reload `http://localhost:3000`, wait for the gather animation to settle, and use canvas pixel bounds to record the two role glyph heights. Confirm the current role canvas height is approximately 32 pixels and the active particle glyph height is below the new target of 18 pixels.

- [x] **Step 2: Increase the role font mask**

In `components/HeroSection.tsx`, change only the role branch of `fontSize`:

```tsx
fontSize={
  isName
    ? "clamp(1.5rem, 6vw, 5rem)"
    : "clamp(1rem, 2.75vw, 1.75rem)"
}
```

- [x] **Step 3: Increase matching role canvas heights**

In `styles/theme.css`, set:

```css
.particle-identity-role {
  height: clamp(2.5rem, 4.8vw, 3.6rem);
}

.particle-identity-role .particle-identity-fallback {
  font-size: clamp(1rem, 2.75vw, 1.75rem);
}
```

Inside the existing `@media (max-width: 639px)` block, set:

```css
.particle-identity-role {
  height: 2.5rem;
}
```

- [x] **Step 4: Verify the visual sizing change**

At 845x507, verify both active particle glyph heights are at least 18 pixels and the name canvas height remains unchanged. At 1440x900 and 390x844, confirm exactly three identity canvases, zero `.particle-identity-fallback` elements, no horizontal overflow, and readable settled title lines.

- [x] **Step 5: Run automated verification**

Run:

```powershell
$env:Path = 'C:\Program Files\nodejs;' + $env:Path
node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --test tests\particle-identity.test.ts
npm run lint
npm run build
git diff --check -- components/HeroSection.tsx styles/theme.css docs/superpowers/plans/2026-08-10-particle-role-sizing.md
```

Expected: 3 tests pass, ESLint exits zero, the Next.js production build succeeds, and `git diff --check` reports no errors.

- [x] **Step 6: Commit the local sizing trial**

```powershell
git add -- components/HeroSection.tsx styles/theme.css docs/superpowers/plans/2026-08-10-particle-role-sizing.md
git commit -m "style: enlarge particle role titles"
```

Do not push or deploy. Restart the local dev server and leave the verified Browser tab available for user review.
