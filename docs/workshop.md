# gonogo workshop

A hands-on workshop on measuring agents: grading every decision an agent makes, including the
ones where the right move was not to act, and turning the score into a deployment decision
you can defend.

Leave your email to hear when dates are set. One email when it opens, nothing else.

<form class="kl-signup" action="https://buttondown.com/api/emails/embed-subscribe/keppylab" method="post">
  <label for="kl-email">Email</label>
  <input id="kl-email" type="email" name="email" required placeholder="you@example.com" autocomplete="email">
  <input id="kl-tag" type="hidden" name="tag" value="workshop-list">
  <input type="hidden" name="embed" value="1">
  <button type="submit">Join the list</button>
</form>

<script>
  // ?t=<talk> on the QR link tags the signup with the talk it came from.
  (function () {
    var t = new URLSearchParams(window.location.search).get("t");
    if (t && /^[a-z0-9-]{1,40}$/.test(t)) document.getElementById("kl-tag").value = t;
  })();
</script>

<p class="kl-star">
  <a class="kl-star-button" href="https://github.com/keppy/gonogo">★ Star gonogo on GitHub</a>
</p>

Stars are how other engineers find it, and how I know the work is useful.

## Try it now

```bash
pip install gonogo-eval
gonogo 47/50 --target 0.9
```

- Library and docs: [github.com/keppy/gonogo](https://github.com/keppy/gonogo)
- The inbox-triage example from the talk: [examples/inbox_triage](https://github.com/keppy/gonogo/tree/main/examples/inbox_triage)
- The encoder gate: [huggingface.co/keppy/inbox-triage-encoder](https://huggingface.co/keppy/inbox-triage-encoder)

Want me to look at your agent harness? Email ^^james@keppylab.com^^.
