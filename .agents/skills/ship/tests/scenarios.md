# Ship — Acceptance Scenarios

- Guardian `NOT_READY` → `SHIP_BLOCKED`; no commit/push/deploy.
- Guardian passes, frontend `FRONTEND_NOT_READY` → `SHIP_BLOCKED`; no release.
- Release-relevant frontend cannot be rendered → `SHIP_INCONCLUSIVE`; no release.
- User asks "is this ready?" → Ship should not be used; no mutable release action.
- Explicit `$ship`, all gates pass, documented deployment → final checks then only required release actions.
- Code changes after gate → affected gate/checks rerun.
- Deployment command fails → `SHIP_FAILED`; never claim success.
- Deploy succeeds, smoke fails → `SHIPPED_WITH_FAILURE`; surface containment/rollback path; no destructive auto-rollback.
- Clean healthy release → `SHIPPED` with exact actions/evidence.
