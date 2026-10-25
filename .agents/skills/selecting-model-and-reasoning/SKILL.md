---
name: selecting-model-and-reasoning
description: Recommend an available Codex model and reasoning level before substantive WebPortfolio engineering, review, debugging, migration, or security work. Do not use for routine conversation or mechanical edits.
---

# Selecting Model and Reasoning for WebPortfolio

## Purpose

Before substantive work, recommend the least costly available model and reasoning configuration likely to complete the requested WebPortfolio task safely. This recommendation is advisory only; the runtime and user-selected configuration remain authoritative.

Use [model-catalog.md](references/model-catalog.md) after checking actual model availability in the runtime.

## Evaluate

Assess complexity, risk, context, and security sensitivity. Respect the repository's Next.js instruction: read the relevant local Next.js guide before editing framework-sensitive code. Narrow the task through focused inspection before selecting a larger context or higher reasoning level.

Preserve existing visual language and unrelated user changes. A readiness review or local build is not authority to publish, push, or deploy.

## Recommendation format

Before implementation, state the model/reasoning, Fast Mode only when available, complexity/risk/context, execution strategy, lower-cost alternative, and a concrete upgrade trigger.

Use one agent for interdependent page, data, and component changes. Parallelize only independent work such as a separate visual inspection and test inventory.
