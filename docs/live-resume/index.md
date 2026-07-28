---
title: James Allen - SignalDex
description: A hidden playable resume RPG where a tiny local model turns James Allen's work history into zones, distortion trials, companion evolution, and proof cards.
robots: noindex,nofollow
hide:
  - navigation
  - toc
  - title
search:
  exclude: true
---

<section class="signal-resume" aria-label="James Allen SignalDex live resume">
  <canvas id="voxel-canvas" aria-hidden="true"></canvas>

  <div class="signal-copy">
    <p class="signal-kicker">James Allen / playable resume RPG</p>
    <h2>SignalDex</h2>
    <p>The Archive is flattening James Allen's work into generic resume slop. Scout zones, beat distortions with specific proof, and evolve the companion keeping the signal alive.</p>
    <div class="signal-tags" aria-label="focus areas">
      <span>Specificity</span>
      <span>Evals</span>
      <span>Post-training</span>
      <span>Agents</span>
      <span>Operator lore</span>
    </div>
  </div>

  <div class="signal-console" aria-label="SignalDex game interface">
    <div class="signal-console-head">
      <div>
        <span id="story-act">Act I / Signal outage</span>
        <strong id="voxel-status">route / Prototype Garden</strong>
        <em id="story-objective">Recover proof before the Archive forgets what actually happened.</em>
      </div>
      <button type="button" id="copy-demo-intro">copy intro</button>
    </div>

    <div class="journey-map" aria-label="journey zones">
      <div class="journey-map-title">Route Tracker</div>
      <button type="button" data-zone="keppylab"><span>01</span>Prototype Garden</button>
      <button type="button" data-zone="stemuli"><span>02</span>District Arcade</button>
      <button type="button" data-zone="corider"><span>03</span>Tool Contract Cave</button>
      <button type="button" data-zone="evals"><span>04</span>Regression Reef</button>
      <button type="button" data-zone="orb"><span>05</span>Tutor Volcano</button>
      <button type="button" data-zone="labs"><span>06</span>Frontier Observatory</button>
      <button type="button" data-zone="startup"><span>07</span>Founder Ferry</button>
      <button type="button" data-zone="systems"><span>08</span>Stack Foundry</button>
      <button type="button" data-zone="pegasys"><span>09</span>Medical Circuit</button>
      <button type="button" data-zone="dolly"><span>10</span>Payout Pier</button>
      <button type="button" data-zone="ai2"><span>11</span>Vision Lab</button>
      <button type="button" data-zone="older"><span>12</span>Archive Ruins</button>
      <button type="button" data-zone="boss"><span>??</span>Flattening Gate</button>
    </div>

    <div class="rpg-sidecar">
      <div class="pet-panel" aria-label="companion state">
        <div class="pet-portrait" aria-hidden="true">
          <span></span><span></span><span></span><span></span>
        </div>
        <div>
          <p>companion</p>
          <strong id="pet-name">Signal Wyrm</strong>
          <span id="pet-stage">stage 1 / curious hatchling</span>
        </div>
      </div>

      <div class="world-hud" aria-label="game state">
        <span>bond <strong id="signal-meter">0 xp</strong></span>
        <span>proof <strong id="tower-meter">0</strong></span>
        <span>archive <strong id="threat-meter">0/13</strong></span>
        <span>route <strong id="focus-meter">Meadow</strong></span>
      </div>

      <div id="tower-proof" class="tower-proof" aria-live="polite">
        <div>
          <span id="tower-proof-kicker">selected proof card</span>
          <strong id="tower-proof-title">James Allen</strong>
        </div>
        <p id="tower-proof-copy">Every zone begins as rumor. Anchor it in battle and the rumor becomes proof.</p>
        <div id="tower-proof-chips" class="tower-proof-chips"></div>
      </div>

      <div class="sigildex">
        <div>
          <span>loot table</span>
          <strong id="dex-count">0 collected</strong>
        </div>
        <div id="sigildex-list" class="sigildex-list" aria-label="collected proof cards"></div>
      </div>
    </div>

    <div id="loot-drop" class="loot-drop" aria-live="polite" hidden>
      <div class="loot-drop-card">
        <span id="loot-kicker">proof drop</span>
        <strong id="loot-title">Emblem acquired</strong>
        <em id="loot-rarity">rare resume relic</em>
        <p id="loot-copy">Specific proof recovered.</p>
        <div id="loot-receipts" class="loot-receipts"></div>
        <button type="button" id="claim-loot">claim</button>
      </div>
    </div>

    <div class="rpg-battle-dock" aria-label="battle controls">
      <div class="battle-panel" aria-live="polite">
        <div>
          <span id="battle-kicker">archive pressure</span>
          <strong id="battle-title">The signal is unstable</strong>
        </div>
        <div class="battle-bars" aria-label="battle health">
          <span><i id="pet-hp"></i></span>
          <span><i id="enemy-hp"></i></span>
        </div>
        <p id="battle-copy">Click a map location, enter its trial, win the emblem, and turn the rumor into proof.</p>
      </div>

      <form id="tiny-chat" class="tiny-chat">
        <input id="tiny-input" name="question" autocomplete="off" placeholder="ask about a zone or type a move in battle" aria-label="Ask the tiny resume model">
        <button type="submit">cast</button>
      </form>

      <div class="tiny-prompts" aria-label="battle moves">
        <button type="button" data-move="matrix-multiplication"><strong>Matrix Multiplication</strong><span>heavy hit</span></button>
        <button type="button" data-move="plt-meme"><strong>plt Meme</strong><span>chaos tick</span></button>
        <button type="button" data-move="hacker-focus"><strong>Hacker Focus</strong><span>restore hp</span></button>
        <button type="button" data-move="gradient-bonk"><strong>Gradient Bonk</strong><span>quick hit</span></button>
        <button type="button" data-move="eval-trap"><strong>Eval Trap</strong><span>break armor</span></button>
        <button type="button" data-move="deslopify"><strong>Deslopify</strong><span>finisher</span></button>
      </div>

      <div class="world-actions" aria-label="game controls">
        <button type="button" id="explore-zone">draw route</button>
        <button type="button" id="start-battle">play trial</button>
        <button type="button" id="train-pet" class="world-action-build">boost companion</button>
        <button type="button" id="run-showcase" class="world-action-showcase">combo run</button>
        <button type="button" id="reset-game" class="world-action-danger">reset run</button>
      </div>
    </div>

    <div class="tiny-transcript" id="tiny-transcript" aria-live="polite">
      <p><strong>archivist:</strong> Welcome to SignalDex. The Archive is losing James Allen's story to resume slop.</p>
      <p><strong>archivist:</strong> Distortions guard each zone. Specific proof anchors the memory; vague claims make them stronger.</p>
    </div>

    <div class="funnel-actions" aria-label="follow up actions">
      <a href="mailto:james@keppylab.com?subject=SignalDex%20live%20resume">email James</a>
      <a href="https://www.github.com/keppy">GitHub</a>
      <a href="https://www.keppylab.com">KeppyLab</a>
    </div>
  </div>
</section>

<script src="/javascripts/live-resume.js"></script>
