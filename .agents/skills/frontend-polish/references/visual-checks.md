# Frontend Polish — Visual and UX Checks

## Viewports
Use representative narrow mobile, common mobile, tablet/small laptop, desktop, and wide desktop when layout changes. Never claim a device/viewport was tested unless it was.

## Layout integrity
Check horizontal overflow, clipping, overlap, sticky/fixed behavior, scroll traps, widths, alignment, spacing, wrapping, long text, empty content, images/media, and safe-area behavior when relevant.

## Typography and hierarchy
Check readability, line height, wrapping/truncation, heading hierarchy, emphasis, and consistency with project tokens/styles.

## Components and states
Inspect applicable buttons, forms, inputs, selects, dialogs, menus, navigation, tables, cards, toasts, tabs, tooltips, pagination across default/hover/focus/active/disabled/loading/empty/error/success states.

## Forms
Check labels, validation, long errors, required-state communication, submitting/disabled states, duplicate-submit risk, and mobile input behavior where applicable.

## Motion
Check interaction blocking, jank, excessive motion, layout jumps, and reduced-motion support for non-essential motion.

## Runtime experience
Inspect browser console, hydration/runtime errors, relevant failed requests, broken assets, unhandled promises, loading loops, and avoidable flicker/state mismatch.

## Visual consistency
Compare spacing, radii, shadows, borders, icon sizing, control heights, and interactions with the established product language. Polish means consistency, not redesign by default.
