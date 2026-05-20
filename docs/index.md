# describe

<section class="kl-hero">
  <div class="kl-hero-copy">
    <p class="kl-eyebrow">KeppyLab</p>
    <h1>AI-native capability management for MCP tool stacks.</h1>
    <p class="kl-lede">
      describe helps an AI client discover MCP servers, install or register the right ones,
      write client configuration, and read the resulting capability map back as resources and prompts.
    </p>
    <div class="kl-actions">
      <a class="kl-button kl-button-primary" href="describe/">Get started</a>
      <a class="kl-button kl-button-secondary" href="https://github.com/keppy/describe">View on GitHub</a>
    </div>
  </div>
  <div class="kl-hero-visual" aria-label="describe capability map">
    <img class="kl-product-logo" src="/assets/describe-logo.svg" alt="describe logo">
    <div class="kl-map">
      <div>
        <span>Registry</span>
        <strong>Discover servers</strong>
      </div>
      <div>
        <span>Installer</span>
        <strong>npm, Docker, PyPI, remote</strong>
      </div>
      <div>
        <span>MCP client</span>
        <strong>Write config safely</strong>
      </div>
      <div>
        <span>Model context</span>
        <strong>Expose resources and prompts</strong>
      </div>
    </div>
  </div>
</section>

```bash
npm install -g @keppylab/describe
```

```json
{
  "describe": {
    "command": "npx",
    "args": ["-y", "@keppylab/describe"]
  }
}
```

## Why It Exists

AI clients are no longer just chat windows with a few tool buttons. They need a living map of capabilities: which tools exist, which are installed, which are safe to call, which need credentials, and which context resources can help the model choose the next action.

describe gives that map to the model.

## What Changed

<div class="kl-feature-grid">
  <article>
    <h3>Registry-backed discovery</h3>
    <p>Search public MCP servers through the official Registry API, with local caching and a built-in offline starter set.</p>
  </article>
  <article>
    <h3>Resource-aware operation</h3>
    <p>Expose available and installed capability state as MCP resources so the model can inspect the stack before changing it.</p>
  </article>
  <article>
    <h3>Prompt-aware composition</h3>
    <p>Ship reusable prompts for composing lean agent stacks and reviewing MCP configuration risk.</p>
  </article>
  <article>
    <h3>Safer configuration</h3>
    <p>Back up config before edits, avoid inventing secrets, and register remote servers without unnecessary local installs.</p>
  </article>
</div>

## Current Surface

| Layer | What describe exposes |
| --- | --- |
| Tools | `list`, `search`, `install`, `uninstall`, `installed`, `config-add`, `config-remove`, `config-list`, `config-backup`, `config-restore`, `registry-refresh` |
| Resources | `describe://registry/available`, `describe://servers/installed`, `describe://guide/agent-stack` |
| Prompts | `compose-agent-stack`, `harden-mcp-config` |

## From The Lab

KeppyLab builds small, sharp AI systems: developer tools, research infrastructure, agent evaluation workflows, and experiments that make software easier to operate through language.

[WorldEnder.ai](https://www.github.com/keppy/WorldEnder.ai) - RAG-powered text adventures with coherent long-horizon world state.

[Disease Lab](https://github.com/keppy/disease-lab) - Knowledge graph AI for rare disease literature and discovery workflows.

[cobol-reporter](https://github.com/keppy/cobol-reporter) - RAG and report generation for understanding COBOL systems.

## Stay In The Loop

<div class="kl-newsletter">
  <form action="https://app.loops.so/api/newsletter-form/clw02o2mi010kgpl3nac0bbiv" method="POST">
    <label for="newsletter-email">KeppyLab AI notes</label>
    <div>
      <input type="hidden" name="userGroup" value="AI">
      <input id="newsletter-email" name="email" type="email" placeholder="you@example.com" required>
      <button type="submit">Join</button>
    </div>
  </form>
</div>

[@keppylab_ai](https://twitter.com/keppylab_ai) | [GitHub](https://github.com/keppy) | [LinkedIn](https://www.linkedin.com/in/james-dominguez-5b342b226/) | [Hugging Face](https://huggingface.co/keppy)
