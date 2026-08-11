# Particles-Only Identity Design

## Goal

Test a version of the framed hero identity in which all three visible lines are formed exclusively by particles. Remove the visible DOM text layer without changing the copy, line order, shared frame, or surrounding hero content.

## Selected Approach

Keep the existing three `ParticleText` canvases and remove the visible fallback spans from the composite hero stack. The screen-reader-only heading and professional-title paragraph remain so the identity is still announced semantically.

The two smaller professional-title canvases receive slightly denser sampling and tuned particle sizing so they remain recognizable without a solid text layer. The name retains the larger particle-first treatment. Gather timing stays synchronized across all three lines.

## Visual Behavior

- No visible text glyph is rendered behind or above any particle canvas.
- `JUNIOR FULL-STACK DEVELOPER`, `AI AUTOMATION & INTEGRATIONS`, and `SPYRIDON ANDREOU` are recognizable after the gather animation settles.
- The small role lines use enough particle coverage to read on desktop and mobile without becoming solid text.
- Pointer repulsion and idle drift stay restrained so the settled letterforms recover immediately.
- The existing target frame, spacing, colors, description card, and calls to action remain unchanged.

## Accessibility

The complete particle stack remains `aria-hidden`. The existing `sr-only` `h1` and paragraph remain the sole semantic representation of the identity. Removing the visible fallback must not remove or duplicate this accessible content.

## Responsive and Motion Requirements

- All three lines fit inside the frame at desktop and narrow mobile widths.
- The page must not gain horizontal overflow.
- With reduced motion enabled, each canvas renders directly at its target positions with no gather, drift, or pointer displacement.
- The particle-only result must remain readable in both the normal settled state and reduced-motion state.

## Verification and Rollout

The change is accepted only after unit tests, ESLint, the production Next.js build, and `git diff --check` pass. Browser verification covers desktop, mobile, console errors, horizontal overflow, and the absence of visible fallback elements.

The first deployment is a Vercel preview for comparison. Production is not changed until the user explicitly approves the preview result.

## Out of Scope

- Changing identity copy or line order
- Redesigning the target frame or hero card
- Replacing the particle engine
- Changing the background shader
- Updating production before preview approval
