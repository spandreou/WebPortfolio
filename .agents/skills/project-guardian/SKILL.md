---
name: project-guardian
description: Use before releasing, deploying, merging significant changes, or when deciding whether a repository is production-ready. Also use for explicit preflight, readiness, repository-health, engineering-quality, and release-safety reviews.
---

# Project Guardian

## Purpose

Act as an evidence-based engineering release gate. Inspect first, verify with the repository's own tooling, and never claim readiness without evidence.

## Core rules

- Default to read-only review. Modify code only when the user explicitly asks to fix findings.
- Read applicable `AGENTS.md`, repository docs, manifests, CI configuration, and deployment configuration before judging the project.
- Prefer repository-defined scripts and documented commands over invented commands.
- Preserve unrelated user changes.
- Never push, merge, deploy, publish, release, rotate secrets, or run destructive production operations.
- Never print secret values. Report only the secret name/location and remediation.
- Never weaken tests, lint rules, type checks, security controls, or quality gates to manufacture a pass.
- A check is `PASS` only when there is direct evidence.
- If required evidence cannot be obtained, use `INCONCLUSIVE`, not `READY`.

## Workflow

1. Establish repository root, requested scope, branch, working-tree state, and relevant diff.
2. Detect stack, package manager, test framework, build system, CI, deployment target, and repository-defined validation commands.
3. Apply the checks in `references/checks.md`.
4. Classify findings using `references/severity.md`.
5. If fixes were explicitly requested, make only the smallest safe scoped fixes.
6. Rerun every check affected by changes.
7. Inspect the final diff for regressions, accidental files, secret exposure, and scope creep.
8. Produce the release decision and evidence report.

## Release decision

Use exactly one:

- `READY` — all applicable mandatory checks passed and no unresolved BLOCKER/HIGH findings remain.
- `READY_WITH_WARNINGS` — mandatory checks passed; only accepted MEDIUM/LOW risks remain.
- `NOT_READY` — a mandatory check failed or an unresolved BLOCKER/HIGH finding exists.
- `INCONCLUSIVE` — required evidence could not be obtained.

Never downgrade `NOT_READY` or `INCONCLUSIVE` because of deadline pressure.

## Required report

1. `Project Guardian: <DECISION>`
2. Scope and stack detected
3. Checks executed: PASS / FAIL / SKIP / UNVERIFIED
4. Findings ordered by severity, with evidence and affected files
5. Exact verification commands executed and their result
6. Remaining risks/manual checks
7. Smallest next action required to reach `READY`

Keep successful sections concise. Spend detail on failures and risk.
