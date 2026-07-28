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

Fifty real cases went through your agent. Forty-seven came back right. Into the deck goes "94% accuracy," and around the table everyone nods.

But the 95% confidence interval on 47/50 runs from **83.8% to 97.9%**.

Say the number you'd agreed to hit was 90%. You haven't hit it. You haven't missed it either. The truth is you still don't know, and what you should be saying out loud is that you need more cases. Try getting your eval tooling to tell you that. Most of it prints the point estimate and calls it a day.

<!-- more -->

## Nobody has ten thousand cases

Evaluation papers assume you've got thousands of examples lying around. Pilots don't work that way. You get however many cases somebody was willing to sit down and label by hand — forty, maybe eighty, two hundred and fifty on a good week.

Down there the interval is wide enough to flip a decision:

| Observed | n | 95% interval | Clears 90%? |
| --- | --- | --- | --- |
| 47/50 | 50 | 94.0% [83.8%, 97.9%] | No |
| 94/100 | 100 | 94.0% [87.5%, 97.2%] | No |
| 235/250 | 250 | 94.0% [90.4%, 96.4%] | Yes |

Every row says 94%. Every row means something different. Whichever of those three situations you're actually in, the point estimate won't tell you — so quoting it by itself isn't a simplification, it's an answer to a question nobody asked.

For the interval itself I reach for Wilson rather than the normal approximation. The normal approximation breaks down precisely where agent evals tend to sit, at small n with proportions crowding up against 1, and it'll cheerfully report an upper bound north of 100%.

## Accuracy isn't the question anyway

Nobody actually wants to know how accurate the agent is. What they want to know sounds more like this:

> How much of this can I hand off, at what error rate, with everything else going to a person?

Different measurement entirely. Given a per-case confidence, you can have the agent decline anything below some threshold and pass those to a human. Sweep that threshold across its range and out falls a risk–coverage curve.

One from real data, then. Banking77 collects 13,083 actual customer messages sent to a retail bank, sorted into 77 intents. I sampled 250 of them and pointed an unremarkable TF-IDF nearest-centroid classifier at the pile:

| Confidence floor | Handled | Precision | To review |
| --- | --- | --- | --- |
| 0.03 | 100% | 77.2% [71.6%, 82.0%] | 0 |
| 0.18 | 70% | 85.1% [79.1%, 89.7%] | 75 |
| 0.39 | 40% | 90.0% [82.6%, 94.5%] | 150 |
| 0.51 | 27% | 94.1% [85.8%, 97.7%] | 182 |
| 0.66 | 14% | 97.2% [85.8%, 99.5%] | 214 |
| 0.96 | 0% | 100.0% [20.7%, 100.0%] | 249 |

Look at that bottom row. Precision 100%. Interval from 20.7% to 100%, because the row describes exactly one case. Pick your threshold off the point estimate and every sweep you ever run will "find" a flawless operating point out in the tail, and you will ship it. Pick off the lower bound instead.

## Calibration and discrimination are different animals

I had this wrong in my own tool. Real data is what caught me.

Here's the calibration table for that same classifier:

| Stated confidence | Cases | Mean confidence | Actual accuracy |
| --- | --- | --- | --- |
| 0.0–0.2 | 83 | 0.11 | 61% |
| 0.2–0.4 | 74 | 0.30 | 78% |
| 0.4–0.6 | 50 | 0.51 | 84% |
| 0.6–0.8 | 30 | 0.70 | 97% |
| 0.8–1.0 | 13 | 0.87 | 100% |

Miscalibrated, badly. The thing announces 0.11 and then turns out right 61% of the time. Expected calibration error comes to 0.42, which is dreadful.

And yet: accuracy climbs with confidence in every single bin. Its ranking is nearly flawless.

Version one of my tool saw that 0.42 and refused to recommend any threshold at all. Wrong call, and an expensive one, because it discarded a ranking signal that worked fine. **Precision at a cut point gets measured straight off held-out results.** Whether the x-axis happens to be a probability doesn't enter into it. Miscalibration costs you the right to read `0.66` as "66% confident." It doesn't make `0.66` a bad place to cut.

Hence the fix. Report the calibration error, state flatly that the scale isn't a probability, keep the operating point you measured. Two properties, two sentences, and stop mixing them up.

## LLM-as-judge, where it really gets you

Score with an LLM judge, skip checking it against human labels, and every number downstream of it is wallpaper.

What makes this one nasty is how good raw agreement looks. Take a judge that waves everything through. On a case set that's 90% passes, it agrees with you **90% of the time**. It has learned precisely nothing, and Cohen's kappa on it comes out at **0.00**.

Label twenty cases yourself — that's enough to start — and put your gate on kappa instead of agreement. Anything under about 0.6, go rewrite the rubric before you report a single number that judge touched.

## What a decision looks like

Stack all of that together and what comes out the far end isn't a dashboard anymore. It's a call:

```
ASSIST ONLY: Use it to draft, keep a human on every case.

Pass rate 77.2% [71.6%, 82.0%] is well short of the 95% target and no
confident subset reaches it; useful as a draft-generator, not as an
unattended step.
```

That's the verdict on the Banking77 baseline. Not "77% accuracy, charts attached." A recommendation with its reasoning stapled on, in language an operator who doesn't write code can actually act on.

Five verdicts exist and only two of them mean ship. My favorite is `INSUFFICIENT EVIDENCE`: the estimate looks fine, your sample can't hold it up, and here's roughly how many more cases would. Week two of a pilot, that's what an honest consultant tells you. I've never once seen a dashboard render it.

## The tool

All of this lives in [gonogo](https://github.com/keppy/gonogo). No runtime dependencies, about 900 lines, MIT. Reference implementation, not a platform — nothing hosted, no tracing, no prompt management, no leaderboard.

```bash
pip install gonogo
```

That Banking77 run is `examples/banking77_routing.py`, and the [full score report](../../reports/banking77-routing.html) is the tool's own HTML, not a mockup of it.

Any eval framework will hand you a score. What you're missing is whether the score is solid enough to bet the quarter on, and how thoroughly you might be kidding yourself about it.
