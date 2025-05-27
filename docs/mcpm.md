# MCPM :material-chat-processing:

<div align="center">
  <img src="../assets/mcpm-logo.svg" alt="MCPM Logo" style="margin: 20px 0;">
</div>

## Speak Systems Into Existence

[![npm version](https://img.shields.io/npm/v/@keppylab/mcpm.svg)](https://www.npmjs.com/package/@keppylab/mcpm) [![license](https://img.shields.io/npm/l/@keppylab/mcpm.svg)](https://github.com/keppy/mcpm/blob/main/LICENSE) [![node version](https://img.shields.io/node/v/@keppylab/mcpm.svg)](https://nodejs.org)

**🚀 Watch me build a complete RAG system in 7 prompts:**

1. "Find me filesystem and database servers"
2. "Install them"  
3. "Create an embedding schema"
4. "Read my documents"
5. "Index them"
6. "Make it searchable"
7. "Give me a terminal interface"

**Result:** Working RAG system. No config files. No documentation. Just conversation.

<div align="center" style="margin: 30px 0;">
  <a href="#quick-start-2-minutes" style="display: inline-block; background: #ffc107; color: #1a1a1a; padding: 15px 40px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 1.1em; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">📦 Install MCPM Now</a>
</div>

## What Is This? :material-lightbulb:

MCPM transforms infrastructure from something you configure to something you converse with. It's a package manager for MCP servers, but that's like saying a compiler is a text processor.

**What it really does:** Makes infrastructure disappear into natural language.

### The Old Way (Hours) :material-clock-alert:
- Read MCP server documentation
- Figure out installation methods  
- Manually edit JSON configs
- Debug path issues
- Restart Claude Desktop repeatedly
- Pray it works

### The MCPM Way (Minutes) :material-rocket-launch:
1. Tell Claude what you want
2. It happens
3. You use it

## See It In Action :material-play-circle:

### Build a GitHub PR Analyzer (5 prompts)
```
1. "Install github and code-analysis servers"
2. "Connect to my repo"
3. "Analyze open PRs for complexity"  
4. "Flag potential issues"
5. "Show me the results"
```
**Result:** PR analysis bot running.

### Create a SQL Natural Language Interface (4 prompts)
```
1. "Install sqlite server"
2. "Connect to my database"
3. "Let me query it in plain English"
4. "Show results as tables"
```
**Result:** Chat with your database.

### Turn CSVs into an API (6 prompts)
```
1. "Install filesystem and data servers"
2. "Read all CSVs from ~/data"
3. "Create REST endpoints for each"
4. "Add search functionality"
5. "Add JSON export"
6. "Start the server"
```
**Result:** Your spreadsheets are now an API.

## Quick Start (2 minutes) :material-timer:

<div style="background: #1a1a1a; color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">

### 🚀 Step 1: Install MCPM
```bash
npm install -g @keppylab/mcpm
```

### ⚙️ Step 2: Configure Claude Desktop
Add this to your `claude_desktop_config.json`:
```json
{
  "mcpm": {
    "command": "npx",
    "args": ["-y", "@keppylab/mcpm"]
  }
}
```

### 🎉 Step 3: Restart & Build
- Restart Claude Desktop
- **Start speaking systems into existence!**

</div>

<div align="center" style="margin: 20px 0;">
  <p style="color: #6366f1; font-weight: 600;">💡 That's it! You're ready to build infrastructure through conversation.</p>
</div>

## The Paradigm Shift :material-swap-horizontal:

**Traditional Programming:** Learn syntax → Write code → Debug → Deploy

**Conversational Infrastructure:** Describe what you want → Get it running → Iterate by talking

This isn't just about saving time. It's about who can build systems. With MCPM:

- A researcher can build a knowledge base
- A designer can create data pipelines  
- A student can build analysis tools

Because the barrier isn't syntax anymore. It's imagination.

<div align="center" style="margin: 30px 0; padding: 20px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 12px;">
  <h3 style="margin: 0 0 15px 0; color: #1a1a1a;">Ready to Transform Your Workflow?</h3>
  <a href="#quick-start-2-minutes" style="display: inline-block; background: #6366f1; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-right: 15px;">Get Started in 2 Minutes →</a>
  <a href="https://github.com/keppy/mcpm" style="display: inline-block; border: 2px solid #6366f1; color: #6366f1; padding: 10px 30px; border-radius: 8px; text-decoration: none; font-weight: 600;">Explore the Code</a>
</div>

## How It Works :material-cog:

MCPM is an MCP server that manages other MCP servers. When you say "install filesystem server", it:

1. Searches the official MCP registry
2. Installs the server (npm, Docker, or git)
3. Configures it in your MCP client
4. Makes it available to Claude

But you don't need to know any of that. You just need to know what you want to build.

## Available Commands :material-console:

| What You Say | What Happens |
|--------------|--------------|
| "Search for database servers" | Shows available database MCP servers |
| "Install server-name" | Installs and configures the server |
| "Show installed servers" | Lists what you have |
| "Remove server-name" | Uninstalls cleanly |
| "Backup my config" | Saves your setup |

## Infrastructure as Conversation :material-chat:

```
Human: My RAG system is too slow
Claude: I see it's scanning all documents on each query. Let me add caching...
*modifies the running system*
Claude: Try now - should be 10x faster
```

The system can see its own state and modify itself through conversation.

## Technical Details :material-wrench:

For those who care about the internals:

- Written in Python with async/await
- Uses the official MCP server registry
- Supports npm, Docker, and git installations
- Automatic config discovery across platforms
- Isolated virtual environment prevents conflicts
- Full backup/restore capabilities

**Requirements:**
- Python 3.9+
- Node.js 18+ 
- Claude Desktop or compatible MCP client

## Installation Options :material-download:

### Quick (Recommended)
```bash
npm install -g @keppylab/mcpm
```

### From Source
```bash
git clone https://github.com/keppy/mcpm.git
cd mcpm
./dev.sh  # or python3 -m venv .venv && source .venv/bin/activate
pip install -e ".[dev]"
```

## Platform Support :material-monitor:

MCPM automatically finds your MCP config on:

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`  
- **Linux:** `~/.config/claude/claude_desktop_config.json`

## The Philosophy :material-thought-bubble:

We're not building better tools. We're removing the need to think about tools at all.

MCPM is part of a larger vision where infrastructure becomes conversational. Where the gap between thought and running system approaches zero.

This is just the beginning.

## Join the Revolution :material-account-group:

- **GitHub:** [keppy/mcpm](https://github.com/keppy/mcpm)
- **Twitter:** [@keppylab_ai](https://twitter.com/keppylab_ai)
- **Discord:** [Join our community](https://discord.gg/6rd4M4e4hT)

Built with ❤️ and a healthy disrespect for configuration files.

> "The best interface is no interface. The best configuration is conversation."

## License :material-scale-balance:
Apache-2.0 - Because infrastructure should be free to speak.

## Status :material-progress-check:
🚀 **v0.1.3** - Config management, backup/restore, platform detection  
🔮 **Coming Soon** - Version management, dependency resolution, health checks

---

<div align="center" style="margin: 40px 0; padding: 30px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); border-radius: 12px; color: white;">
  <h2 style="margin: 0 0 20px 0; color: white;">Ready to Speak Your First System Into Existence?</h2>
  <p style="margin: 0 0 25px 0; font-size: 1.1em; opacity: 0.9;">Join the infrastructure revolution. Build what you imagine, not what you configure.</p>
  
  <div style="margin: 20px 0;">
    <a href="https://www.npmjs.com/package/@keppylab/mcpm" style="display: inline-block; background: white; color: #6366f1; padding: 15px 35px; border-radius: 8px; text-decoration: none; font-weight: 700; margin-right: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">🚀 Install Now</a>
    <a href="https://github.com/keppy/mcpm" style="display: inline-block; border: 2px solid white; color: white; padding: 13px 35px; border-radius: 8px; text-decoration: none; font-weight: 600;">⭐ Star on GitHub</a>
  </div>
  
  <p style="margin: 15px 0 0 0; font-size: 0.9em; opacity: 0.8;">
    <code style="background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: 4px;">npm install -g @keppylab/mcpm</code>
  </p>
</div>