# Ship — Release Safety Rules

## Hard stops
Stop before mutable release actions if Guardian is `NOT_READY`/`INCONCLUSIVE`; applicable Frontend Polish is `FRONTEND_NOT_READY`/`FRONTEND_INCONCLUSIVE`; tests/build fail; a secret is exposed; target is ambiguous; release-relevant changes are unexplained; deployment mechanism is unknown; destructive migration risk is unresolved; or a BLOCKER/HIGH auth/data-loss issue remains.

## Never do automatically
Force push; hard-reset user work; rewrite shared history; delete branches/tags/releases; rotate/revoke credentials; destructive production DB commands/migrations; disable security controls; suppress tests; change CI protection; deploy to a guessed target.

## Changed-after-gate rule
If release-relevant code/config changes after a gate, identify stale evidence and rerun the affected checks/gate before release.

## Post-release failure
Confirm failure, capture evidence, identify safest rollback/mitigation, and verify authorization where rollback is destructive or not clearly documented.
