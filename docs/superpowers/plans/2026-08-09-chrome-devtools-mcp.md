# Chrome DevTools MCP Setup Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the documented Chrome DevTools MCP server to the local Windows Codex host without changing project dependencies or exposing browser profile data.

**Architecture:** Add one STDIO server block to the existing global Codex `config.toml`. Use the ChromeDevTools Windows command form and validate the TOML plus exact server count before asking the Codex client to refresh.

**Tech Stack:** Codex MCP configuration, TOML, Windows `cmd`, Node.js/npm/npx, Google Chrome

## Global Constraints

- Preserve every existing global Codex setting and MCP server.
- Add exactly one `[mcp_servers.chrome-devtools]` section.
- Use `cmd /c npx -y chrome-devtools-mcp@latest` with `SystemRoot`, `PROGRAMFILES`, and `startup_timeout_ms = 20_000`.
- Do not clone the MCP repository into the portfolio or add it to `package.json`.
- Do not claim the tools are active in the current task before the Codex host refresh exposes them.
- Do not inspect Chrome cookies, saved passwords, session stores, or personal browsing data.

---

### Task 1: Global MCP Configuration

**Files:**
- Modify: `C:/Users/thugs/.codex/config.toml`

**Interfaces:**
- Consumes: the current global Codex configuration
- Produces: one local STDIO MCP server named `chrome-devtools`

- [ ] **Step 1: Capture the configuration baseline**

Run path-only and section-heading checks confirming the file exists, the `node_repl` server remains present, and `chrome-devtools` is absent. Do not print unrelated configuration values.

- [ ] **Step 2: Verify the precondition fails**

Run a check that expects exactly one `[mcp_servers.chrome-devtools]` heading.

Expected: FAIL with a count of `0`, proving the new server is not already configured.

- [ ] **Step 3: Append the documented Windows server block**

```toml
[mcp_servers.chrome-devtools]
command = "cmd"
args = [
    "/c",
    "npx",
    "-y",
    "chrome-devtools-mcp@latest",
]
env = { SystemRoot="C:\\Windows", PROGRAMFILES="C:\\Program Files" }
startup_timeout_ms = 20_000
```

Use `apply_patch`; do not rewrite the rest of the file.

- [ ] **Step 4: Validate GREEN without exposing configuration secrets**

Parse `config.toml` with Python `tomllib` and assert:

```py
server = config["mcp_servers"]["chrome-devtools"]
assert server["command"] == "cmd"
assert server["args"] == ["/c", "npx", "-y", "chrome-devtools-mcp@latest"]
assert server["startup_timeout_ms"] == 20_000
assert server["env"]["SystemRoot"] == r"C:\Windows"
assert server["env"]["PROGRAMFILES"] == r"C:\Program Files"
```

Also assert the heading occurs exactly once and the pre-existing `node_repl` heading still occurs exactly once.

- [ ] **Step 5: Verify host prerequisites**

Run `node --version`, `npm --version`, `npx --version`, and a path-only existence check for `C:/Program Files/Google/Chrome/Application/chrome.exe`.

Expected: every prerequisite is present.

- [ ] **Step 6: Report the refresh boundary**

Tell the user that the global configuration is written and validated, but the current task cannot expose the newly added MCP tools until Codex restarts or opens a new task. After refresh, verify the server from Settings → MCP servers or `/mcp` before claiming it is active.
