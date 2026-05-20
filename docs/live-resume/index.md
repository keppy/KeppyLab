---
title: James Dominguez - Tiny Resume World
description: A hidden voxel resume with a tiny local language model.
robots: noindex,nofollow
hide:
  - navigation
  - toc
search:
  exclude: true
---

<section class="voxel-resume" aria-label="James Dominguez tiny resume world">
  <canvas id="voxel-canvas" aria-hidden="true"></canvas>

  <div class="voxel-copy">
    <p class="voxel-kicker">KeppyLab / hidden sector</p>
    <h2>James Dominguez</h2>
    <p>
      AI product operator, model-behavior builder, and eval/post-training person.
      The page is a tiny voxel resume with a local trigram model wired into the facts.
    </p>
    <div class="voxel-tags" aria-label="focus areas">
      <span>Product &amp; AI</span>
      <span>Evals</span>
      <span>Post-training</span>
      <span>Agents</span>
      <span>Founder mode</span>
    </div>
  </div>

  <div class="voxel-console" aria-label="Tiny resume language model">
    <div class="voxel-console-head">
      <span>tiny local lm</span>
      <span id="voxel-status">local / awake</span>
    </div>
    <div id="tiny-transcript" class="tiny-transcript" aria-live="polite">
      <p><strong>tiny:</strong> ask about Stemuli, Corider, Orb Math, evals, old engineering work, labs, or startup fit. Every prompt changes the world.</p>
    </div>
    <div class="tiny-prompts" aria-label="example prompts">
      <button type="button" data-prompt="show me Corider and evals">Corider</button>
      <button type="button" data-prompt="what happened at Stemuli?">Stemuli</button>
      <button type="button" data-prompt="why labs?">labs</button>
      <button type="button" data-prompt="why startup operator?">startup</button>
      <button type="button" data-prompt="show older engineering work">older work</button>
    </div>
    <form id="tiny-chat" class="tiny-chat">
      <input id="tiny-input" name="question" autocomplete="off" placeholder="Stemuli / Corider / labs / startup" aria-label="Ask the tiny resume model">
      <button type="submit">send</button>
    </form>
  </div>
</section>

<script src="/javascripts/live-resume.js"></script>
