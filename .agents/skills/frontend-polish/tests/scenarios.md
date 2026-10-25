# Frontend Polish — Acceptance Scenarios

- Desktop good, mobile overflow → `FRONTEND_NOT_READY`, identify viewport/region.
- Hydration error → release-blocking when it affects production behavior; do not suppress it.
- Visual review only → no code modification.
- Explicit polish request → minimal fixes preserving design language, rerender affected states.
- Browser unavailable when rendered verification required → `FRONTEND_INCONCLUSIVE`.
- Keyboard trap in dialog → `FRONTEND_NOT_READY` until fixed.
- Minor spacing-only inconsistency → may be `FRONTEND_READY_WITH_WARNINGS` if core checks pass.
- Healthy responsive frontend → `FRONTEND_READY`, explicitly list tested routes/viewports.
