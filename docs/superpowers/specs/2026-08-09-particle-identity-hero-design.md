# Particle Identity Hero Design

## Goal

Place the portfolio owner name and both professional-title lines inside one shared target frame, then render all three lines with synchronized particle formation while keeping every line legible across desktop and mobile layouts.

The text remains sourced from `siteConfig`; this feature changes presentation only.

## Selected Approach

Use one responsive `TargetFrame` containing three coordinated `ParticleText` instances:

- one instance for `JUNIOR FULL-STACK DEVELOPER`
- one instance for `AI AUTOMATION & INTEGRATIONS`
- one larger instance for `SPYRIDON ANDREOU`

All instances start their gather animation on mount with matching timing, color blending, and motion character. They use separate canvases so each line can have an appropriate font family, font size, density, and responsive height without rewriting the supplied React Bits component into a multiline text-layout engine.

## Component Boundaries

### `ParticleText`

Add the supplied TypeScript component as a focused client component. It owns canvas sampling, particle state, resize handling, pointer repulsion, reduced-motion behavior, animation-frame cleanup, and accessible fallback text.

The component will keep the supplied public prop interface. Integration-specific tuning belongs in the hero rather than being hard-coded into the reusable component.

### `HeroSection`

Replace the current title paragraph plus separate name frame with one framed identity block. The hero supplies the three strings, responsive dimensions, and coordinated particle settings.

The existing description panel, calls to action, entrance motion, and surrounding background treatment remain in place.

### `TargetFrame`

Keep the existing pointer glow, corner marks, scanline, and border treatment. Extend only its layout classes or child wrapper where necessary so it can hold a full-width vertical identity stack without clipping the particle canvases.

## Visual Hierarchy

Inside the shared frame, content order is:

1. `JUNIOR FULL-STACK DEVELOPER`
2. `AI AUTOMATION & INTEGRATIONS`
3. `SPYRIDON ANDREOU`

The professional-title lines use the existing mono-style visual language, restrained cyan/ice coloring, and smaller particle sizes. The name remains the dominant element with a heavier weight, larger particles, and a cyan-to-blue blend.

Spacing must make the three canvases read as one identity unit, not three unrelated widgets. The frame remains visually close to the supplied reference image while fitting the existing portfolio design system.

## Motion and Legibility

- All three particle fields form simultaneously on initial mount.
- The full scatter-and-gather sequence does not replay on hover or click.
- Pointer movement creates restrained local repulsion after formation.
- Idle drift stays low enough that letter shapes remain stable.
- Sampling density and particle size are tuned separately for the small role lines and large name.
- The frame cannot finish in a scattered state.
- With `prefers-reduced-motion: reduce`, particles render directly at their targets with no gathering, drift, glow animation, or pointer displacement.

## Responsive Behavior

Desktop uses a wide identity frame with the name as the largest line. Mobile keeps all text on one line per canvas, allowing `ParticleText` to scale the sampled font down to fit its available width.

Each canvas receives an explicit responsive height so ResizeObserver sampling has stable dimensions. The combined frame must not create horizontal page overflow at narrow widths. The role lines remain readable rather than being reduced to decorative dots.

## Accessibility

The complete visual particle stack is hidden from assistive technology to prevent three canvas wrappers from producing duplicated announcements. The hero exposes the same content once through a screen-reader-only semantic block: one `h1` for the name and one paragraph containing the two professional-title lines. The reusable `ParticleText` component retains its own accessible fallback for uses outside this composite stack.

The feature must preserve keyboard navigation, link focus behavior, color contrast in the rest of the hero, and reduced-motion preferences.

## Performance and Cleanup

- Do not add a new runtime dependency; the supplied component uses browser canvas APIs and React only.
- Preserve the component's particle cap and device-pixel-ratio cap.
- Keep each animation loop scoped to its own mounted component and cancel frames, observers, media-query listeners, and pointer listeners on cleanup.
- Avoid unrelated refactors or changes to the background WebGL effect.

## Chrome DevTools MCP Setup

Configure a global `chrome-devtools` STDIO MCP server in the existing Codex `config.toml`, preserving all current settings. On Windows the server uses `cmd /c npx -y chrome-devtools-mcp@latest`, the documented `SystemRoot` and `PROGRAMFILES` environment values, and a 20-second startup timeout.

Do not clone the repository into the portfolio. The MCP package is launched through `npx` and belongs to the local Codex host configuration, not to project dependencies.

The MCP configuration change is verified by inspecting the resulting section and, after the required Codex client restart or new session, confirming that the server is listed and its tools are callable. The current session cannot claim the newly configured tools are active before that refresh.

## Verification

Implementation is complete only when all applicable checks pass:

- ESLint
- production Next.js build
- TypeScript coverage through the build
- `git diff --check`
- browser rendering at representative desktop and mobile widths
- no browser console errors
- initial simultaneous gather observed
- stable, readable settled state observed
- pointer repulsion does not destroy glyph recognition
- reduced-motion rendering verified
- no horizontal overflow
- existing description and navigation calls to action still work
- global MCP configuration contains exactly one `chrome-devtools` server section

Visual verification uses the requested in-app Browser workflow. The configured Chrome DevTools MCP is treated as a separate host capability and is not considered active until Codex has refreshed and exposed it.

## Out of Scope

- Redesigning the description card or calls to action
- Changing portfolio identity copy
- Replacing the existing background shader
- Deploying to Vercel
- Publishing, pushing, or opening a pull request
- Synchronizing the alternate Windows checkout
