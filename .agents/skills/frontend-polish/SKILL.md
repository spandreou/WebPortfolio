---
name: frontend-polish
description: Use when a web frontend needs final visual, responsive, interaction, accessibility, browser-console, loading-state, or UX quality review before release, or when the user asks to polish, visually inspect, or production-check a frontend.
---

# Frontend Polish

## Purpose

Act as a focused frontend quality gate. Verify the actual rendered experience across relevant viewport sizes and interaction states, not only the source code.

## Core rules

- Inspect before modifying; default to read-only unless fixes are explicitly requested.
- Read applicable `AGENTS.md`, frontend conventions, design tokens, and repository documentation first.
- Preserve the existing visual language unless redesign is requested.
- Do not introduce a new design system, library, font, animation framework, or dependency merely to polish.
- Do not hide console/runtime errors or weaken accessibility/keyboard behavior for appearance.
- Prefer localized fixes over broad rewrites and preserve unrelated user changes.
- Never deploy, push, merge, or publish.

## Workflow

1. Detect framework, entry points, routes, dev/build commands, styling system, component library, and browser/testing tools.
2. Start/connect to the local app using repository-defined commands.
3. Inspect user-targeted or changed routes/states.
4. Apply `references/visual-checks.md` and `references/accessibility-checks.md`.
5. Inspect console/runtime errors and relevant network failures.
6. If fixes were requested, make the smallest scoped corrections.
7. Re-render/re-check every affected viewport/state.
8. Run relevant lint/typecheck/tests/build after code changes.
9. Produce the frontend decision.

## Frontend decision

- `FRONTEND_READY` — applicable mandatory checks passed; no unresolved critical/high-impact UX issue.
- `FRONTEND_READY_WITH_WARNINGS` — core experience passes; only accepted non-blocking polish issues remain.
- `FRONTEND_NOT_READY` — required check failed or release-blocking visual/interaction/accessibility/runtime issue remains.
- `FRONTEND_INCONCLUSIVE` — rendered experience or required evidence could not be inspected.

## Required report

1. `Frontend Polish: <DECISION>`
2. Routes/states inspected
3. Viewports inspected
4. Browser/runtime findings
5. Visual/responsive findings
6. Accessibility/interaction findings
7. Exact commands/checks executed
8. Remaining risks/manual checks
9. Smallest next action to reach `FRONTEND_READY`

Never report a viewport/state as verified unless it was actually rendered or tested.
