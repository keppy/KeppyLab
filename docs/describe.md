# describe•

[![npm version](https://img.shields.io/npm/v/@keppylab/describe.svg)](https://www.npmjs.com/package/@keppylab/describe) [![GitHub](https://img.shields.io/badge/GitHub-keppy%2Fdescribe-blue?logo=github)](https://github.com/keppy/describe)

Watch me build a complete RAG system in 7 prompts:

```
1. "Find me filesystem and database servers"
2. "Install them"
3. "Create an embedding schema"
4. "Read my documents"
5. "Index them"
6. "Make it searchable"
7. "Give me a terminal interface"
```

**Result**: Working RAG system. No config files. No documentation. Just conversation.

## Install

```bash
npm install -g @keppylab/describe
```

Add to Claude Desktop:
```json
{
  "describe": {
    "command": "npx",
    "args": ["-y", "@keppylab/describe"]
  }
}
```

Restart Claude. Start describing.

## What This Is

Infrastructure used to require configuration. Now it requires conversation.

The difference isn't speed. It's that you never leave the conversation.

## Examples

### GitHub PR Analyzer
```
"Install github and code-analysis servers"
"Connect to my repo"
"Analyze open PRs for complexity"
"Flag potential issues"
"Show me the results"
```

### SQL Chat Interface
```
"Install sqlite server"
"Connect to my database"
"Let me query it in plain English"
"Show results as tables"
```

### CSV to API
```
"Install filesystem and data servers"
"Read all CSVs from ~/data"
"Create REST endpoints for each"
"Add search functionality"
"Start the server"
```

## The Shift

**Before**: Learn syntax → Write config → Debug → Deploy

**After**: Describe what you want → It exists → Iterate by talking

This changes who can build:
- Researchers can build knowledge bases
- Designers can create data pipelines
- Anyone can build what they imagine

The barrier isn't syntax anymore. It's imagination.

## How It Works

When you say "install filesystem server", describe:
1. Searches the MCP registry
2. Installs the server
3. Configures it automatically
4. Makes it available to Claude

You don't need to know this. You just need to know what you want.

## Commands

| You Say | What Happens |
|---------|--------------|
| "Search for database servers" | Shows available options |
| "Install server-name" | Installs and configures |
| "Show installed servers" | Lists what you have |
| "Remove server-name" | Uninstalls cleanly |

## Self-Modifying Infrastructure

```
Human: My RAG system is too slow
Claude: I see it's scanning all documents on each query. Adding caching...
Claude: Try now - should be 10x faster
```

The system sees its own state and improves itself through conversation.

## Technical Details

- Python async/await core
- Official MCP registry integration
- npm, Docker, git installation support
- Cross-platform config discovery
- Isolated virtual environment
- Full backup/restore

**Requirements**: Python 3.9+, Node.js 18+, Claude Desktop

## Philosophy

We're not building better tools. We're removing tools entirely.

Infrastructure should be a conversation, not a configuration.

---

[GitHub](https://github.com/keppy/describe) • [Discord](https://discord.gg/6rd4M4e4hT) • [@keppylab_ai](https://twitter.com/keppylab_ai)

*The best interface is no interface. The best configuration is conversation.*