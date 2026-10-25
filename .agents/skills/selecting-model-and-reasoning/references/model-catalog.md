# WebPortfolio model catalog

The runtime is authoritative. Use this guide to route WebPortfolio tasks without treating the recommendation as deployment approval.

| Work type | Starting recommendation | Upgrade trigger |
|---|---|---|
| Content, formatting, small component or test change | GPT-5.6 Luna / low | The task crosses routing, data, and rendering behavior |
| Normal Next.js page, component, data, or integration work | GPT-5.6 Terra / medium | Framework behavior or multiple rendering paths are unclear |
| Complex responsive behavior, data architecture, or difficult runtime debugging | GPT-5.6 Terra / high | A design or architecture decision has material risk |
| Authentication, production configuration, or high-risk cross-system refactor | GPT-5.6 Sol / high | Demonstrated high uncertainty or difficult rollback |
| Authorized defensive security review | Daybreak Blue / high | The task becomes security architecture work |

Keep Fast Mode off by default. Use it only when the runtime supports it and lower latency materially helps interactive debugging.

For framework-specific questions, current local Next.js documentation remains required regardless of model choice.
