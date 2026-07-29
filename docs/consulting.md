---
page_title: "AI Agent Consulting — KeppyLab"
description: "Production agents for companies that aren't AI companies. Fixed-scope pilot: a working agent on your workflow in 2–4 weeks, with an eval harness so you know whether to trust it."
hide:
  - navigation
  - toc
---

# AI Agent Consulting

<section class="kl-hero kl-c-hero">
  <div class="kl-hero-copy">
    <p class="kl-eyebrow">KeppyLab Consulting</p>
    <h1>Verifiable agents for companies that aren't AI companies.</h1>
    <p class="kl-lede">
      A production agent on your actual workflow in 2–4 weeks, with an eval harness included,
      so you know whether to trust it.
    </p>
    <div class="kl-actions">
      <a class="kl-button kl-button-primary" href="mailto:james@keppylab.com?subject=Scoping%20call%20—%20AI%20agent%20pilot">Book a scoping call</a>
      <a class="kl-button kl-button-secondary" href="#the-offer">See the engagements</a>
    </div>
  </div>
</section>

## The Problem

<p class="kl-c-prose">
You already suspect an AI agent could take real hours out of your week: document intake, ops triage,
reporting, support. But most of what's for sale is either a demo that works once, or an agency retainer
that never ends. And standing up an ML team to find out is overkill.
</p>

## The Offer

<div class="kl-c-offer-grid">
  <article>
    <p class="kl-c-offer-tag">1 · 2–4 weeks</p>
    <h3>The Pilot</h3>
    <p class="kl-c-offer-sub">Fixed scope. Pick one workflow. You get:</p>
    <ul>
      <li>A working agent wired into your actual tools, not a slide deck</li>
      <li>An <strong>eval harness</strong>: an automated test suite that scores the agent against your real cases, so you know its accuracy before you rely on it</li>
      <li>A plain-English score report and handoff docs</li>
      <li>A go/no-go recommendation, including "don't automate this" if that's the honest answer</li>
    </ul>
  </article>
  <article>
    <p class="kl-c-offer-tag">2 · 6–10 weeks</p>
    <h3>The Full Build</h3>
    <p class="kl-c-offer-sub">A production agent system for a bigger surface.</p>
    <ul>
      <li>Multiple connected workflows, built to run unattended</li>
      <li>30 days of post-launch tuning included</li>
    </ul>
  </article>
  <article>
    <p class="kl-c-offer-tag">3 · Monthly</p>
    <h3>Fractional AI Engineering</h3>
    <p class="kl-c-offer-sub">Ongoing advisory plus hands-on build.</p>
    <ul>
      <li>A senior AI hand for teams that don't need a full-time one</li>
      <li>PE firms: this shape spans multiple portfolio companies</li>
    </ul>
  </article>
</div>

<p class="kl-c-note">
All engagements are fixed-scope and quoted after a 30-minute scoping call.
</p>

## Why The Eval Harness Is The Whole Point

<p class="kl-c-prose">
Every AI demo works once. The question that matters is: <em>out of a hundred real cases, how many does it
get right — and does it know when it's unsure?</em> An eval harness answers that with numbers instead of
vibes. It's the difference between a party trick and a system you can put in front of customers.
Most agencies don't ship one. KeppyLab doesn't ship without one.
</p>

<p class="kl-c-prose">
So, here's a real example. Everything below came out of
<a href="https://github.com/keppy/gonogo">gonogo</a>, the harness I use on implementations, which I've
open sourced. I pointed it at a plain baseline classifier and 250 customer messages from
Banking77, a public dataset of real support requests to a retail bank. Nothing here is client
work, and the classifier is nothing special on purpose.
</p>

<p class="kl-c-prose">
Watch what happens to it: seventy-seven percent sounds like a decent start. Then the interval
tells you the real rate might be 71.6%, and once you respect the interval, no confidence
threshold clears a 95% bar anywhere you put the cut. Verdict: don't ship this yet. It's better to hear that in week two
than the week after it starts touching customers.
</p>

<section class="gng" data-verdict="assist-only">
<header class="gng-head">
<p class="gng-task">Route customer message to the right queue</p>
<p class="gng-verdict">ASSIST ONLY</p>
<p class="gng-gloss">Use it to draft, keep a human on every case.</p>
</header>
<p class="gng-reason">Pass rate 77.2% [71.6%, 82.0%] is well short of the 95% target and no confident subset reaches it; useful as a draft-generator, not as an unattended step.</p>
<dl class="gng-facts">
<div><dt>Cases evaluated</dt><dd>250</dd></div>
<div><dt>Passed</dt><dd>193</dd></div>
<div><dt>Pass rate</dt><dd>77.2% [71.6%, 82.0%]</dd></div>
<div><dt>Target</dt><dd>95%</dd></div>
<div><dt>Calibration error</dt><dd>0.42 (ranks cases, scale unreliable)</dd></div>
</dl>
<p class="gng-note">The pass rate carries a 95% confidence interval. With 250 cases the true rate could plausibly sit anywhere in that range, which is why the interval and not the headline number drives the decision.</p>
<table class="gng-table"><caption>Coverage vs precision</caption><thead><tr><th scope="col">Confidence floor</th><th scope="col">Handled</th><th scope="col">Precision</th><th scope="col">To review</th></tr></thead><tbody>
<tr><td>0.03</td><td><span class="gng-bar" style="--pct:100%"><i></i></span>100%</td><td class="gng-under">77.2% <span class="gng-ci">[71.6%, 82.0%]</span></td><td>0</td></tr>
<tr><td>0.10</td><td><span class="gng-bar" style="--pct:85%"><i></i></span>85%</td><td class="gng-under">81.7% <span class="gng-ci">[76.0%, 86.3%]</span></td><td>37</td></tr>
<tr><td>0.18</td><td><span class="gng-bar" style="--pct:70%"><i></i></span>70%</td><td class="gng-under">85.1% <span class="gng-ci">[79.1%, 89.7%]</span></td><td>75</td></tr>
<tr><td>0.26</td><td><span class="gng-bar" style="--pct:57%"><i></i></span>57%</td><td class="gng-under">88.0% <span class="gng-ci">[81.7%, 92.4%]</span></td><td>108</td></tr>
<tr><td>0.39</td><td><span class="gng-bar" style="--pct:40%"><i></i></span>40%</td><td class="gng-under">90.0% <span class="gng-ci">[82.6%, 94.5%]</span></td><td>150</td></tr>
<tr><td>0.51</td><td><span class="gng-bar" style="--pct:27%"><i></i></span>27%</td><td class="gng-under">94.1% <span class="gng-ci">[85.8%, 97.7%]</span></td><td>182</td></tr>
<tr><td>0.66</td><td><span class="gng-bar" style="--pct:14%"><i></i></span>14%</td><td class="gng-under">97.2% <span class="gng-ci">[85.8%, 99.5%]</span></td><td>214</td></tr>
<tr><td>0.96</td><td><span class="gng-bar" style="--pct:0%"><i></i></span>0%</td><td class="gng-under">100.0% <span class="gng-ci">[20.7%, 100.0%]</span></td><td>249</td></tr>
</tbody></table>
<table class="gng-table"><caption>Calibration</caption><thead><tr><th scope="col">Stated confidence</th><th scope="col">Cases</th><th scope="col">Mean confidence</th><th scope="col">Actual accuracy</th></tr></thead><tbody>
<tr><td>0.0-0.2</td><td>83</td><td>0.11</td><td class="gng-under">61%</td></tr>
<tr><td>0.2-0.4</td><td>74</td><td>0.30</td><td class="gng-under">78%</td></tr>
<tr><td>0.4-0.6</td><td>50</td><td>0.51</td><td class="gng-under">84%</td></tr>
<tr><td>0.6-0.8</td><td>30</td><td>0.70</td><td class="gng-under">97%</td></tr>
<tr><td>0.8-1.0</td><td>13</td><td>0.87</td><td class="gng-ok">100%</td></tr>
</tbody></table>
<div class="gng-caveats"><p class="gng-op-title">Caveats</p><ul>
<li>Calibration error 0.42 exceeds 0.15: the confidence score ranks cases usefully but its scale is not a probability. Treat any threshold below as an opaque cut point, and recalibrate before reading it as a percentage.</li>
</ul></div>
</section>

<p class="kl-c-note">
<a href="../reports/banking77-routing.html">The full report</a> lists the cases it got wrong. Your
pilot ends with one of these, run against your work instead of a benchmark.
</p>

### So we swapped in a frontier model

<p class="kl-c-prose">
The obvious next move, and the one most teams make: throw a better model at it. I pointed Claude
Opus 5 at the identical 250 messages, scored the same way, and ran the harness again. Accuracy went
from 77.2% to 81.6%. On most dashboards that is the end of the story: a win, write it up.
</p>

<p class="kl-c-prose">
But because both models saw the same cases, the comparison can be tested properly, and
the honest read on those four and a half points is that they're inside the noise: the difference
carries a 95% interval of &minus;0.8 to +9.6 points and fails significance at p&nbsp;=&nbsp;0.14.
Roughly seven hundred cases would be needed to say something meaningful. A team reporting "we upgraded and accuracy
improved" would be reporting a coin flip. The same model rerun on the same 250 cases scored
80.8% one day and 81.6% the next, so a fifth of the reported "improvement" was the model failing to be
deterministic.
</p>

<figure class="kl-c-compare">
  <figcaption>
    <span>Same 250 cases, same scorer</span>
    <strong>What the upgrade actually bought</strong>
  </figcaption>
  <table class="gng-table">
    <thead>
      <tr>
        <th scope="col">&nbsp;</th>
        <th scope="col">Baseline classifier</th>
        <th scope="col">Claude Opus 5</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Pass rate</td>
        <td>77.2% <span class="gng-ci">[71.6%, 82.0%]</span></td>
        <td>81.6% <span class="gng-ci">[76.3%, 85.9%]</span></td>
      </tr>
      <tr>
        <td>Calibration error</td>
        <td class="gng-under">0.42</td>
        <td class="gng-ok">0.06</td>
      </tr>
      <tr>
        <td>Handled automatically at ~98% precision</td>
        <td class="gng-under">14%</td>
        <td class="gng-ok">50%</td>
      </tr>
    </tbody>
  </table>
  <p>Accuracy is a wash. The share of the queue you can safely hand over more than triples.</p>
</figure>

<p class="kl-c-prose">
The gain is in the bottom two rows, and neither is accuracy. The baseline's confidence score was
close to meaningless — it would say 0.11 and be right 61% of the time. Claude's is honest almost to
the decimal: it says 0.92 and is right 93% of the time. Honest confidence is what lets you draw a
line and route everything below it to a person. So the same measurement that found no provable
accuracy gain found a 3.6&times; increase in how much of the queue you can automate at the same
error rate.
</p>

<p class="kl-c-prose">
If we measure and report properly, we can get a better understanding of the decision surface we are dealing with. 
That is the entire argument for measuring properly. The number everyone reaches for moved by an
amount that means nothing. The number that decides how many hours actually leave your week moved by
a factor of three. You cannot see either one without the interval and the coverage curve, and you
would have shipped the wrong conclusion about both.
</p>

<p class="kl-c-note">
Neither run cleared a 95% bar, so neither ships unattended &mdash; and the honest report says so.
The closest Claude gets is 97.6% precision on half the cases, where the lower bound lands at 93.2%
and misses the target by under two points. Very likely good enough. Not yet provable on 250 cases.
</p>

## How It Works

<ol class="kl-c-steps">
  <li>
    <h3>Scoping call <span>30 min, free</span></h3>
    <p>We pick the one workflow with the best effort-to-value ratio.</p>
  </li>
  <li>
    <h3>Fixed quote</h3>
    <p>Scope, timeline, and price in writing. No hourly meter.</p>
  </li>
  <li>
    <h3>Build</h3>
    <p>Weekly demos on your real data, not mock data.</p>
  </li>
  <li>
    <h3>Eval + handoff</h3>
    <p>Score report, docs, training for your team, and honest next-step advice.</p>
  </li>
</ol>

## About

<p class="kl-c-prose">
<strong>James Dominguez</strong> — KeppyLab is the applied-AI practice of James Dominguez, a senior AI/ML
engineer and product leader.
</p>

<ul class="kl-c-cred">
  <li>Ran the technical org at a venture-backed startup as Head of Product &amp; AI: post-training, evaluations, synthetic data, and agentic systems, shipped in production</li>
  <li>Designed a reasoning-RL post-training program for a Qwen3-based model — LLM-as-judge evaluation harness, ~60% benchmark gains</li>
  <li>Built agent pipelines generating synthetic training data and curriculum (14K examples at 85% compression)</li>
  <li>Previously: production AI for a Johnson &amp; Johnson–funded medical-imaging company; EIR at the AI2 Incubator</li>
  <li>10+ years full-stack engineering (Python / Go / Rust / TypeScript)</li>
  <li>Open research in AI evaluation: <a href="https://github.com/keppy">github.com/keppy</a></li>
</ul>

<section class="kl-c-cta">
  <h2>One workflow. Four weeks. You'll know if it works.</h2>
  <div class="kl-actions">
    <a class="kl-button kl-button-primary" href="mailto:james@keppylab.com?subject=Scoping%20call%20—%20AI%20agent%20pilot">Book a scoping call</a>
    <a class="kl-button kl-button-secondary" href="mailto:james@keppylab.com">james@keppylab.com</a>
  </div>
</section>
