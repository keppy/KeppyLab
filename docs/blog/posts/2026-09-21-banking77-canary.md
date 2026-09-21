---
draft: false
date: 2026-09-21
categories:
    - evaluation
    - agents
    - gonogo
    - thomas
comments: true
---
# banking77 canary: 87.2% pass, two dead runs, one false alarm

<iframe width="100%" height="432" src="https://www.youtube.com/embed/ozWITnaJtf4" title="Fine-tuning an encoder and getting a go/no-go verdict — thomas + gonogo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

the pipeline is two open-source repos, working together. [thomas](https://github.com/keppy/thomas) is the training harness. [gonogo](https://github.com/keppy/gonogo) is the evaluation and decision layer. the task was intent routing on banking77 — 13,083 real retail-bank customer messages across 77 intents. the model: [ModernBERT-small-v2](https://huggingface.co/johnnyboycurtis/ModernBERT-small-v2), a ~38M-parameter modern encoder, fine-tuned with a fresh 77-way classification head.

<!-- more -->

## what was measured

training ran as a supervised fine-tune on [modal](https://modal.com), an L4 GPU, 3 epochs, batch size 32, learning rate 2e-5, about 10,000 training rows. total gpu time: a few minutes. cost: well under $1.

the first modal dispatch died. the training call was made outside a running modal app context. error: `ExecutionError: function not hydrated`. fix: wrap the remote call in `app.run()`.

after retry, training finished. then the artifact pull claimed the volume was empty — a stale snapshot. the run had committed the weights fine. fix: retry the pull, and record the pitfall in the repo's `AGENTS.md`.

calibration was done separately. temperature scaling was fit on 500 held-out rows. T = 0.78. expected calibration error went from 6.0% to 1.3%. confidence is defined one way everywhere: `max(softmax(logits / T))` over the full 77-class distribution, temperature applied before the softmax.

## the verdict

the verdict lands at 38:54 in the video.

the eval is gonogo's banking77 canary: the same 250-case pilot split every gonogo example uses, so runs stay comparable case-for-case.

the freshly trained model first returned a 0.0% pass rate. every case was a scorer error (`ValueError: too many values to unpack`). the problem: the eval scorer tried to unpack confidence out of the prediction's output, but gonogo carries confidence on `Prediction.confidence`. fix: switch to a plain exact-match scorer. after the fix, the 87.2% card came out.

pass rate: **87.2% [82.5%, 90.8%]**. the target was 95%. the verdict read "AUTOMATE WITH REVIEW" — ship it behind a confidence threshold.

calibration error on the pilot: **0.03**, well calibrated.

operating point: answer only at confidence >= **0.91**. that gives **98.3% precision [95.1%, 99.4%] on 71% of cases** — 177 of 250 — and routes the rest to a human.

against the tf-idf baseline on the same 250 cases: 87.2% vs 77.2%, a difference of **+10.0 points [+5.5%, +14.5%], p = 0.000**.

## the live demo

from 37:16 in the video, the classifier is fed messages in a live repl. fed "i lost my card and need it blocked" it routes to `pin_blocked` at 70% confidence — honest calibrated uncertainty, not a fake 99%. it was also fed a message it gets confidently wrong on purpose, which is visible in the run.

## the caveat

the 0.91 threshold was chosen by searching the same 250 cases it is evaluated on. that means its precision is optimistically biased; it needs re-measurement on fresh cases before being relied on. the pipeline works, the numbers are real, but that threshold is provisional.
