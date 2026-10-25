# Project Guardian — Severity Model

## BLOCKER
Release must not proceed. Examples: failed production build, required tests fail, exposed secret/private key, auth bypass, unresolved destructive migration, known data-loss path, invalid required runtime config, merge conflict.

## HIGH
Release should not proceed until fixed/redesigned. Examples: exploitable security flaw, broken core flow, serious privacy/isolation issue, likely production crash, incompatible API/schema change without migration, critical relevant dependency vulnerability.

## MEDIUM
Release may be possible but risk must be visible/intentional. Examples: weak non-critical error handling, missing meaningful regression coverage, important accessibility issue, operational blind spot, mitigated moderate dependency risk.

## LOW
Non-blocking quality/maintainability issue. Examples: small cleanup, minor docs drift, low-impact warning, cosmetic inconsistency.

## Rules
Classify by plausible impact, not fix difficulty. Do not inflate without evidence or lower because of deadlines. State uncertainty and evidence needed when unclear.
