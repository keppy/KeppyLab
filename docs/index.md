---
hide:
  - navigation
  - toc
---

# KeppyLab

<section class="kl-hero kl-hero-lead">
  <div class="kl-hero-copy">
    <p class="kl-eyebrow">public workbench</p>
    <h1>Small strange machines for understanding software — and for knowing when software is lying to you.</h1>
    <p class="kl-lede">
      KeppyLab is the research bench of github.com/keppy: evaluation harnesses, RL training
      loops, knowledge graphs for rare disease, COBOL archaeology. Everything here is
      built in the open, scored against real cases, and released on GitHub.
    </p>
    <div class="kl-actions">
      <a class="kl-button kl-button-primary" href="https://github.com/keppy">github.com/keppy</a>
      <a class="kl-button kl-button-secondary" href="blog/">Read the writings</a>
    </div>
  </div>
</section>

## The Work

<div class="kl-feature-grid">
  <article>
    <h3><a href="https://github.com/keppy/gonogo">gonogo</a></h3>
    <p>The eval harness from real deployments, open sourced. Scores an agent on your actual cases and returns a deployment decision — including "not enough evidence yet." Numbers instead of vibes.</p>
  </article>
  <article>
    <h3><a href="https://github.com/keppy/thomas">thomas</a></h3>
    <p><code>thomas.train()</code> — a training harness. Case → reward → train: take a Case set and a score function, get a baseline card, run the loop, compare before and after. Pretrain on Modal GPUs or post-train with LoRA RL.</p>
  </article>
  <article>
    <h3><a href="https://github.com/keppy/titans-mini">titans-mini</a></h3>
    <p>A streaming engine over a swappable test-time memory core: MLP-weights memory vs. generated-weights vector memory, behind one narrow interface. The engine owns the loop, the core owns storage — 21 tests pin the autograd claims.</p>
  </article>
  <article>
    <h3><a href="https://github.com/keppy/cotfaith">cotfaith</a></h3>
    <p>Chain-of-thought (un)faithfulness, study one: hint-following and confession rates on Qwen3-1.7B. Pre-registered decision log, blind-labeled judge validation, byte-exact run artifacts.</p>
  </article>
  <article>
    <h3><a href="https://github.com/keppy/recurse">recurse</a></h3>
    <p>A numbered visual series that remembers itself: plan → draw → render → reflect → remember. Each entry inherits a JSON motif memory from the one before it, and continuity is over images, not intentions.</p>
  </article>
</div>

## Older Haunts

<div class="kl-feature-grid">
  <article>
    <h3><a href="describe/">describe</a> / <a href="https://github.com/keppy/MCPM">MCPM</a></h3>
    <p>Speak systems into existence. An MCP capability manager: discover servers, write client config, read the capability map back as resources and prompts.</p>
  </article>
  <article>
    <h3><a href="https://github.com/keppy/cobol-reporter">cobol-reporter</a></h3>
    <p>RAG and report generation for understanding COBOL systems — sixty years of gravity, interrogated in plain English.</p>
  </article>
  <article>
    <h3><a href="https://github.com/keppy/disease-lab">disease-lab</a></h3>
    <p>Knowledge-graph AI for rare disease literature and discovery workflows, built during a rare-disease hackathon.</p>
  </article>
  <article>
    <h3><a href="https://github.com/keppy/WorldEnder.ai">WorldEnder.ai</a></h3>
    <p>RAG-powered text adventures with coherent long-horizon world state. Predict the end of the world.</p>
  </article>
</div>

## From The Lab Notebook

Recent writings on evals, fine-tuning, and shipping AI before it's ready:

- [Your agent eval is lying to you](blog/posts/your-agent-eval-is-lying-to-you.md)
- [Fine-tuning Pythia](blog/posts/fine-tuning-pythia.md)
- [The rare disease hackathon](blog/posts/rare-diseases-hackathon.md)
- [I demoed too early](blog/posts/i-demoed-too-early.md)

<div class="kl-newsletter">
  <form action="https://app.loops.so/api/newsletter-form/clw02o2mi010kgpl3nac0bbiv" method="POST">
    <label for="newsletter-email">KeppyLab weekly notes</label>
    <div>
      <input type="hidden" name="userGroup" value="AI">
      <input id="newsletter-email" name="email" type="email" placeholder="you@example.com" required>
      <button type="submit">Join</button>
    </div>
  </form>
</div>

[@yok0zuna](https://twitter.com/yok0zuna) | [GitHub](https://github.com/keppy) | [Hugging Face](https://huggingface.co/keppy) | [Contact](contact.md)
