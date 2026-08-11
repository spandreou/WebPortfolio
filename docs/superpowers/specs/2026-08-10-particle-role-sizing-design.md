# Particle Role Sizing Design

## Goal

Increase only the two professional-title lines in the particles-only hero so they are easier to recognize, while keeping `SPYRIDON ANDREOU`, the target frame, and the surrounding hero layout visually unchanged.

## Selected Approach

Increase the responsive font mask used by both role `ParticleText` canvases from `clamp(0.78rem, 2vw, 1.35rem)` to `clamp(1rem, 2.75vw, 1.75rem)`. Increase each role canvas height from `clamp(2rem, 3.8vw, 3rem)` to `clamp(2.5rem, 4.8vw, 3.6rem)` and use `2.5rem` at the existing mobile breakpoint.

This raises the measured particle glyph height from 14–15 pixels to at least 18 pixels around the reference viewport while preserving the particles-only rendering. Particle size, density, color, gather timing, frame dimensions, and name sizing remain unchanged.

## Responsive Behavior

- Both role lines remain on one line at desktop and mobile widths.
- The particle engine may continue scaling a mask down only when required to fit the available canvas width.
- The two additional canvas-height increments must not create horizontal overflow or clip the name.
- The identity stack remains vertically balanced inside the existing target frame.

## Accessibility and Motion

The visible identity remains particles-only. No `.particle-identity-fallback` element is reintroduced. The existing `sr-only` heading and professional-title paragraph remain unchanged, as do reduced-motion behavior and synchronized gather timing.

## Verification

- Measure the computed role canvas/font sizing at the supplied approximately 845-pixel reference width before and after the change.
- Verify desktop at 1440x900 and mobile at 390x844.
- Confirm exactly three identity canvases and zero visible fallback elements.
- Confirm both titles remain recognizable, the name size is unchanged, and no horizontal overflow appears.
- Run the particle identity tests, ESLint, the production Next.js build, and `git diff --check`.

## Rollout

Keep the change local for user review. Do not push or deploy it until the user explicitly approves the revised local result.

## Out of Scope

- Changing the name size or particle treatment
- Changing particle density, particle size, colors, or animation timing
- Resizing the target frame
- Altering the description card or navigation
