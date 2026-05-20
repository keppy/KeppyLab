# describe

[![npm version](https://img.shields.io/npm/v/@keppylab/describe.svg)](https://www.npmjs.com/package/@keppylab/describe)
[![GitHub](https://img.shields.io/badge/GitHub-keppy%2Fdescribe-blue?logo=github)](https://github.com/keppy/describe)

<p class="kl-page-logo">
  <img src="/assets/describe-logo.svg" alt="describe logo">
</p>

describe is an AI-native MCP capability manager.

It lets an AI client discover MCP servers, install or register the right ones, write client configuration, and read the resulting capability map back as MCP resources and prompts. In older terms, it is a package manager. In current terms, it is a small control plane for agent tools.

## Install

```bash
npm install -g @keppylab/describe
```

Add describe to your MCP client:

```json
{
  "describe": {
    "command": "npx",
    "args": ["-y", "@keppylab/describe"]
  }
}
```

Restart the client and ask for the capability you want:

```text
Find MCP servers for GitHub pull request review.
Install the smallest safe stack.
Add it to my MCP config.
Show me what changed.
```

## Why It Exists

AI clients need a living map of capabilities: which tools exist, which are installed, which are safe to call, which need credentials, and which context resources can help the model choose the next action.

describe gives that map to the model.

## What It Does

- Discovers public MCP servers from the official MCP Registry API.
- Caches registry results locally and falls back to a built-in trusted starter set when offline.
- Installs npm, Docker/OCI, and PyPI-backed MCP servers.
- Registers remote MCP servers without pretending they need a local install.
- Adds, removes, backs up, and restores MCP client configuration.
- Exposes installed state as MCP resources.
- Exposes reusable prompts for composing and hardening agent stacks.
- Runs with Python standard library only.

## MCP Surface

### Tools

- `list`
- `search`
- `install`
- `uninstall`
- `installed`
- `config-add`
- `config-remove`
- `config-list`
- `config-backup`
- `config-restore`
- `registry-refresh`

Tools include JSON schemas and annotations so clients can distinguish read-only queries from configuration-changing actions.

### Resources

- `describe://registry/available`
- `describe://servers/installed`
- `describe://guide/agent-stack`

Resources let the model inspect the current capability state before asking to install more things.

### Prompts

- `compose-agent-stack`
- `harden-mcp-config`

Prompts give the model a reusable planning frame for choosing the smallest server set and reviewing MCP config risk.

## CLI

```bash
describe list
describe search github
describe install github
describe installed
describe config-add github
describe config-list
describe registry-refresh
```

Use `--json` for scripts:

```bash
describe --json search postgres
```

## Configuration

describe stores local state in `~/.describe` by default.

Environment variables:

- `DESCRIBE_HOME`: override the local state directory.
- `DESCRIBE_REGISTRY`: override the Registry endpoint, or use `builtin`.
- `DESCRIBE_REGISTRY_LIMIT`: maximum Registry entries to cache.
- `DESCRIBE_CACHE_TTL_SECONDS`: Registry cache lifetime.
- `DESCRIBE_MCP_CONFIG`: explicit MCP config file path.
- `DESCRIBE_MCP_PROTOCOL_VERSION`: protocol version to advertise.

## Safety Model

describe treats install and config operations as explicit state changes. It backs up MCP config before modifying it, does not invent secret values for server environment variables, and keeps remote servers as config entries instead of downloading code that does not need to exist locally.

The model should still review every server before use. MCP servers can expose powerful local and network actions; least-capability stacks are the point.

## Status

Current version: `1.1.0`

This release updates describe for the registry-backed, resource-aware, prompt-aware MCP era while keeping the original idea intact: tell the AI what capability you need, then let it assemble the smallest working stack.

---

[GitHub](https://github.com/keppy/describe) | [npm](https://www.npmjs.com/package/@keppylab/describe) | [@keppylab_ai](https://twitter.com/keppylab_ai)
