---
draft: false
date: 2026-07-28
categories:
    - evaluation
    - agents
    - gonogo
comments: true
---
# Your Agent Eval Is Lying to You: 47/50 Is Not 94%

You ran your agent over 50 real cases. It got 47 right. You write "94% accuracy" in the deck and everyone nods.

The 95% confidence interval on that number is **[83.8%, 97.9%]**.

If the bar you agreed to was 90%, you have not cleared it. You have not missed it either. You genuinely do not know yet, and the honest thing to say is "I need more cases." Almost no eval tooling will tell you that, because almost all of it is built to report a point estimate and stop.

<!-- more -->

## Small samples are the normal case

The literature on evaluation assumes thousands of examples. Real pilots do not have thousands of examples. They have however many cases a domain expert was willing to label by hand, which is 40, or 80, or if you are lucky 250.

At that size the interval is wide enough to change decisions:

| Observed | n | 95% interval | Clears 90%? |
| --- | --- | --- | --- |
| 47/50 | 50 | 94.0% [83.8%, 97.9%] | No |
| 94/100 | 100 | 94.0% [87.5%, 97.2%] | No |
| 235/250 | 250 | 94.0% [90.4%, 96.4%] | Yes |

Same 94% in every row. Three different answers. The point estimate carries no information about which situation you are in, which is why reporting it alone is not a simplification — it is a category error.

I use the Wilson score interval for this rather than the normal approximation, because the normal approximation falls apart exactly where agent evals live: small n, proportions near 1. It will happily hand you an upper bound above 100%.

## Accuracy is the wrong question anyway

"How accurate is the agent" is not what anyone actually needs to know. The question a business asks is:

> What fraction of this work can I hand over, at what error rate, with the rest going to a human?

That is a different measurement. If your agent emits a per-case confidence, you can abstain below a threshold and route those cases to a person. Sweep the threshold and you get a risk–coverage curve.

Here is a real one. Banking77 is 13,083 genuine retail-bank customer messages across 77 intents; I took a 250-case sample and a deliberately ordinary TF-IDF nearest-centroid baseline:

| Confidence floor | Handled | Precision | To review |
| --- | --- | --- | --- |
| 0.03 | 100% | 77.2% [71.6%, 82.0%] | 0 |
| 0.18 | 70% | 85.1% [79.1%, 89.7%] | 75 |
| 0.39 | 40% | 90.0% [82.6%, 94.5%] | 150 |
| 0.51 | 27% | 94.1% [85.8%, 97.7%] | 182 |
| 0.66 | 14% | 97.2% [85.8%, 99.5%] | 214 |
| 0.96 | 0% | 100.0% [20.7%, 100.0%] | 249 |

Read the last row. 100% precision. Also an interval running from 20.7% to 100%, because it is one case. This is why threshold selection has to be done on the lower bound and not the point estimate — otherwise every sweep "discovers" a perfect operating point at the tail, and you ship it.

## Calibration and discrimination are not the same thing

I got this wrong in my own tool and the real data caught me.

Look at the calibration table for that same baseline:

| Stated confidence | Cases | Mean confidence | Actual accuracy |
| --- | --- | --- | --- |
| 0.0–0.2 | 83 | 0.11 | 61% |
| 0.2–0.4 | 74 | 0.30 | 78% |
| 0.4–0.6 | 50 | 0.51 | 84% |
| 0.6–0.8 | 30 | 0.70 | 97% |
| 0.8–1.0 | 13 | 0.87 | 100% |

That model is badly miscalibrated. It says 0.11 and is right 61% of the time. Expected calibration error is 0.42, which is terrible.

It is also ranking cases almost perfectly. Accuracy climbs monotonically with confidence, every single bin.

My first version refused to recommend a threshold whenever calibration error exceeded 0.15. That was wrong, and wrong in an expensive direction — it threw away a perfectly usable ranking signal. **Precision at a cut point is measured directly from held-out results.** It does not care whether the number on the x-axis is a probability. Miscalibration means you cannot read `0.66` as "66% confident"; it does not mean `0.66` is a useless place to cut.

So the fix: report the calibration error, say plainly that the scale is not a probability, and keep the empirically measured operating point. Two properties, two statements, no conflation.

## The one that will bite you: LLM-as-judge

If you score with an LLM judge and never check it against human labels, every number downstream is decoration.

The trap is that raw agreement looks reassuring. A judge that passes everything scores **90% agreement** on a case set that is 90% passes. It has learned nothing. Cohen's kappa on that judge is **0.00**.

Hand-label a subset — 20 cases is enough to start — and gate on kappa, not agreement. Below about 0.6, go fix the rubric before you report anything the judge produced.

## What a decision looks like

Put it together and the output stops being a dashboard and becomes a call:

```
ASSIST ONLY: Use it to draft, keep a human on every case.

Pass rate 77.2% [71.6%, 82.0%] is well short of the 95% target and no
confident subset reaches it; useful as a draft-generator, not as an
unattended step.
```

That is the verdict on the Banking77 baseline. Not "77% accuracy, see attached charts." A recommendation, with the reason attached, that a non-technical operator can act on.

There are five possible verdicts and only two of them mean ship. The one I care most about is `INSUFFICIENT EVIDENCE` — the estimate looks good, the sample cannot support it, here is roughly how many more cases you need. That is the verdict an honest consultant gives in week two of a pilot, and it is the one no dashboard has ever rendered.

## The tool

All of the above is implemented in [gonogo](https://github.com/keppy/gonogo): zero runtime dependencies, around 900 lines, MIT. It is a reference implementation, not a platform — no hosted service, no tracing, no prompt management, no leaderboard.

```bash
pip install gonogo
```

The Banking77 run above is `examples/banking77_routing.py`, and the [full score report](../../reports/banking77-routing.html) is the tool's own HTML output.

Every eval framework will tell you what your agent scored. The number you actually need is whether that score is good enough to bet on — and how badly you might be fooling yourself about it.
