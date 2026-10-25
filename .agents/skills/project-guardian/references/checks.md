# Project Guardian — Validation Checks

Apply only checks relevant to the repository. Prefer project-native commands documented in `AGENTS.md`, README files, CI, or package metadata.

## Repository and change hygiene
- Identify repository root/current branch; inspect `git status` and relevant diff.
- Detect unrelated/accidental edits, conflict markers, inappropriate generated artifacts, incomplete production TODO/FIXME markers, mismatched lockfiles, and suspicious binary/large additions.

## Secrets and configuration
- Inspect changed/versioned files for credentials, API keys, tokens, private keys, passwords, sensitive connection strings, or production-only secrets.
- Confirm `.env*` and `.gitignore` behavior; required env vars should be documented/validated without exposing values.
- Flag unsafe production fallbacks. Secret exposure in versioned code is a BLOCKER.

## Static correctness
When available, run repository-defined format/check, lint, typecheck, and static-analysis commands. Do not auto-format unrelated files.

## Tests
- Run the smallest relevant set first, then required full suites when practical.
- Cover unit/integration/E2E where defined and regression coverage when appropriate.
- Never delete, skip, loosen, or rewrite a valid failing test merely to obtain green status.

## Production build
Run the repository-defined production build/package command. A failed production build is a BLOCKER. Inspect correctness-relevant build warnings, boundary errors, missing generated artifacts, invalid runtime imports, and container builds when applicable.

## Dependencies and supply chain
Inspect dependency health/audits, runtime vs dev exposure, vulnerable packages, runtime compatibility, and suspicious manifest/lockfile churn. Do not perform major upgrades automatically.

## Security review
Focus on changed code and security-critical boundaries: authentication/authorization, tenant isolation, validation/encoding, injection, XSS, CSRF, SSRF, path traversal/uploads, redirects, CORS/cookies/sessions, abuse controls, secret handling, sensitive logging. Do not run destructive/aggressive tests against production.

## Runtime and operational readiness
Inspect startup/health, error handling, observability, migrations/backward compatibility, jobs/queues, caches/schemas, containers/services, deployment config, and rollback implications. Unclear destructive/irreversible migrations block release.

## API/data compatibility
Validate contracts, breaking request/response changes, schema migrations, existing client/data compatibility, and defaults for new required fields.

## Final diff review
Inspect complete final diff, scope, debug code, temporary bypasses, disabled controls, accidental files; rerun checks affected by fixes.

## Evidence rule
A check is `PASS` only with direct evidence. If a required service, dependency, credential, browser, database, or environment is unavailable, mark it `UNVERIFIED`. If that evidence is necessary for release safety, the overall decision is `INCONCLUSIVE`.
