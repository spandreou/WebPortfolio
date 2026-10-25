---
name: ship
description: Use only when the user explicitly asks to ship, release, publish, deploy, or perform the final pre-release sequence for the current project. Do not use for ordinary coding, review, testing, or readiness questions.
---

# Ship

## Purpose

Act as the final release orchestrator. Shipping is allowed only after evidence-based engineering and frontend gates pass.

## Invocation safety

- This skill is for explicit release intent only.
- Never infer permission to ship from phrases such as "looks good", "ready?", "finish it", "check it", or "prepare it".
- A readiness review is not permission to commit, push, merge, publish, release, or deploy.
- If release target, branch, environment, or required intent is materially ambiguous, stop before mutable release actions.
- Never force push, destructive reset, rewrite history, rotate secrets, run destructive migrations/data actions, or bypass failed gates unless separately and explicitly authorized where appropriate.

## Required skill dependencies

Before mutable release actions:
1. Use `project-guardian`.
2. If the release affects a user-facing web frontend, use `frontend-polish`.

If a required dependency is unavailable, stop with `SHIP_INCONCLUSIVE`. Do not silently recreate or skip its gate.

## Workflow

### Phase 1 — Establish release scope
Determine repository/branch, requested target/environment, working-tree state, release diff, documented deployment/release mechanism, and whether frontend gate applies. Preserve unrelated local changes.

### Phase 2 — Engineering gate
Run/use `project-guardian`.
Proceed only on `READY`, or `READY_WITH_WARNINGS` when warnings are genuinely non-blocking and surfaced. Stop on `NOT_READY` or `INCONCLUSIVE`.

### Phase 3 — Frontend gate
When applicable run/use `frontend-polish`.
Proceed only on `FRONTEND_READY`, or `FRONTEND_READY_WITH_WARNINGS` for non-blocking surfaced warnings. Stop on `FRONTEND_NOT_READY` or `FRONTEND_INCONCLUSIVE`.

### Phase 4 — Final release verification
Immediately before release inspect final status/diff, ensure no secrets/debug files/temporary bypasses appeared, rerun release-critical checks affected since gates, verify branch/target, verify documented release command. If release-relevant code changed after a gate, rerun affected evidence/gate.

### Phase 5 — Mutable release actions
Only now perform actions explicitly required by user/repository such as release commit, push intended branch, PR path, or documented deploy/release mechanism. Never invent a deployment mechanism.

### Phase 6 — Post-release verification
When tooling exists, confirm deployment/release, inspect health/status, perform a small non-destructive production smoke path, and inspect obvious runtime/deployment errors. Never perform destructive production tests.

If verification fails, report the safest rollback/containment next step; do not automatically perform destructive rollback unless explicitly authorized and documented safe.

## Ship decision

- `SHIPPED` — release completed and available post-release verification passed.
- `SHIPPED_WITH_WARNINGS` — release completed; only known non-blocking warnings remain.
- `SHIP_BLOCKED` — a required gate failed or release must not proceed.
- `SHIP_INCONCLUSIVE` — required evidence, dependency, target, or tooling is unavailable.
- `SHIP_FAILED` — requested release/deployment action failed before successful release.
- `SHIPPED_WITH_FAILURE` — release completed but post-release verification found a serious problem.

## Required report

1. `Ship: <DECISION>`
2. Release scope: repo / branch / target
3. Project Guardian result
4. Frontend Polish result or `NOT_APPLICABLE`
5. Final release checks
6. Mutable actions actually performed
7. Post-release verification
8. Remaining warnings/risks
9. Exact next action if not fully `SHIPPED`

Never claim an action was performed if it was only planned.
