# Particle Hero Readability Design

## Goal

Keep the visual particle identity effect while making the hero text immediately readable.

## Approved design

- Keep one shared `TargetFrame` for the identity block.
- Keep `ParticleText` only for the `SPYRIDON ANDREOU` visual layer.
- Overlay a normal semantic `h1` with the same name so the final state is always readable.
- Treat the particle canvas as decorative with `aria-hidden` on its wrapper so screen readers do not read the name twice.
- Render `JUNIOR FULL-STACK DEVELOPER` and `AI AUTOMATION & INTEGRATIONS` as normal typography, not particles.
- Preserve a tech/mono look with cyan/sky gradient text, controlled tracking, subtle glow, and motion reveal.
- Keep the existing CTA glass panel unchanged.
- Add no dependencies and touch no secrets, workflows, or deployment permissions.

## Interaction

- Name particles still gather on mount and can scatter/re-gather on hover.
- The solid name remains visible throughout interaction to preserve legibility.
- Professional titles use short fade/slide reveals.
- Reduced-motion behavior remains respected through Framer Motion and the existing particle component.

## Files

- `components/HeroSection.tsx`
- `scripts/verify-particle-hero.mjs`

## Verification

- Structural script expects exactly one `ParticleText` instance.
- Structural script verifies a semantic `h1` name overlay and two normal professional-title text nodes.
- Vercel production build must pass compile, lint/type checking, and static generation.
