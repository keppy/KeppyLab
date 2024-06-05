# Home 

## About KeppyLab :material-abacus:
KeppyLab is an open source AI research and development laboratory focusing on biomedical data, LLMs, and adapting new techniques in AI to build more than just another chatbot.
Our core guiding principals are:

1. Open source everything you can & give users the option to use Ollama OR GPT-4 whenever possible
1. Cross-domain pollination -- apply AI to biomedical data, apply techniques from biomedicine to AI
1. Evidence over assumptions -- treat LLMs as black boxes and test extensively -- validate your experiments and backup claims with data

We are in the early stages of forming the tool chain and what our core focuses will be, but there are many areas [ripe for investigation](https://github.com/keppy/KeppyLab/blob/ripe-problems/ripe_problems.md).

If you are in the Seattle area check out our monthly event, the [KeppyLab AI Hackers & Paper Readers](https://lu.ma/ne8nixj8).

## Current Work :material-file-document:
I write about fine tuning, AI engineering, and pushing the boundaries of generative AI. Drop me a line ^^james@keppylab.com^^!

[WorldEnder.ai](https://www.github.com/keppy/WorldEnder.ai) 🌎💥 A text-adventure about extinction events with a RAG backend 
[Disease Lab](https://github.com/keppy/disease-lab) 🧪 Knowledge graph informed AI for disease research

## Mailing List :material-email-newsletter:
Every week I highlight papers and advancements in LLMs and other areas of AI/ML. This is essentially a curated form of my weekly study notes I share back to the community. Sign up below: 

<style>@import url('https://fonts.googleapis.com/css2?family=Inter,family=Roboto&display=swap');</style><div class="newsletter-form-container"><form class="newsletter-form" action="https://app.loops.so/api/newsletter-form/clw02o2mi010kgpl3nac0bbiv" method="POST" style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%;"><input class="newsletter-form-input" name="newsletter-form-input" type="email" placeholder="you@example.com" required="" style="font-family: Roboto, sans-serif; color: rgb(0, 0, 0); font-size: 14px; margin: 0px 0px 10px; width: 100%; max-width: 300px; min-width: 100px; background: rgb(255, 255, 255); border: 1px solid rgb(209, 213, 219); box-sizing: border-box; box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px; border-radius: 6px; padding: 8px 12px;"><button type="submit" class="newsletter-form-button" style="background: rgb(255, 193, 5); font-size: 14px; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; display: flex; width: 100%; max-width: 300px; white-space: normal; height: 38px; align-items: center; justify-content: center; flex-direction: row; padding: 9px 17px; box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px; border-radius: 6px; text-align: center; font-style: normal; font-weight: 500; line-height: 20px; border: medium; cursor: pointer;">Join KeppyLab AI Mailing List</button><button type="button" class="newsletter-loading-button" style="background: rgb(255, 193, 5); font-size: 14px; color: rgb(0, 0, 0); font-family: Roboto, sans-serif; display: none; width: 100%; max-width: 300px; white-space: normal; height: 38px; align-items: center; justify-content: center; flex-direction: row; padding: 9px 17px; box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px; border-radius: 6px; text-align: center; font-style: normal; font-weight: 500; line-height: 20px; border: medium; cursor: pointer;">Please wait...</button></form><div class="newsletter-success" style="display: none; align-items: center; justify-content: center; width: 100%;"><p class="newsletter-success-message" style="font-family: Roboto, sans-serif; color: rgb(0, 0, 0); font-size: 14px;">Thanks! We'll be in touch!</p></div><div class="newsletter-error" style="display: none; align-items: center; justify-content: center; width: 100%;"><p class="newsletter-error-message" style="font-family: Roboto, sans-serif; color: rgb(185, 28, 28); font-size: 14px;">Oops! Something went wrong, please try again</p></div>
<button 
class='newsletter-back-button'
type='button' 
style='color:#6b7280;font: 14px, Inter, sans-serif;margin:10px auto;text-align:center;display:none;background:transparent;border:none;cursor:pointer'
onmouseout='this.style.textDecoration="none"' 
onmouseover='this.style.textDecoration="underline"'>
&larr; Back
</button>
</div><script>
function submitHandler(event) {
  event.preventDefault();
  var container = event.target.parentNode;
  var form = container.querySelector(".newsletter-form");
  var formInput = container.querySelector(".newsletter-form-input");
  var success = container.querySelector(".newsletter-success");
  var errorContainer = container.querySelector(".newsletter-error");
  var errorMessage = container.querySelector(".newsletter-error-message");
  var backButton = container.querySelector(".newsletter-back-button");
  var submitButton = container.querySelector(".newsletter-form-button");
  var loadingButton = container.querySelector(".newsletter-loading-button");

  const rateLimit = () => {
    errorContainer.style.display = "flex";
    errorMessage.innerText = "Too many signups, please try again in a little while";
    submitButton.style.display = "none";
    formInput.style.display = "none";
    backButton.style.display = "block";
  }

  // Compare current time with time of previous sign up
  var time = new Date();
  var timestamp = time.valueOf();
  var previousTimestamp = localStorage.getItem("loops-form-timestamp");

  // If last sign up was less than a minute ago
  // display error
  if (previousTimestamp && Number(previousTimestamp) + 60000 > timestamp) {
    rateLimit();
    return;
  }
  localStorage.setItem("loops-form-timestamp", timestamp);

  submitButton.style.display = "none";
  loadingButton.style.display = "flex";

  var formBody = "userGroup=AI&email=" + encodeURIComponent(formInput.value);
  fetch(event.target.action, {
    method: "POST",
    body: formBody,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((res) => [res.ok, res.json(), res])
    .then(([ok, dataPromise, res]) => {
      if (ok) {
        // If response successful
        // display success
        success.style.display = "flex";
        form.reset();
      } else {
        // If response unsuccessful
        // display error message or response status
        dataPromise.then(data => {
          errorContainer.style.display = "flex";
          errorMessage.innerText = data.message
            ? data.message
            : res.statusText;
        });
      }
    })
    .catch(error => {
      // check for cloudflare error
      if (error.message === "Failed to fetch") {
        rateLimit();
        return;
      }
      // If error caught
      // display error message if available
      errorContainer.style.display = "flex";
      if (error.message) errorMessage.innerText = error.message;
      localStorage.setItem("loops-form-timestamp", '');
    })
    .finally(() => {
      formInput.style.display = "none";
      loadingButton.style.display = "none";
      backButton.style.display = "block";
    });
}
function resetFormHandler(event) {
  var container = event.target.parentNode;
  var formInput = container.querySelector(".newsletter-form-input");
  var success = container.querySelector(".newsletter-success");
  var errorContainer = container.querySelector(".newsletter-error");
  var errorMessage = container.querySelector(".newsletter-error-message");
  var backButton = container.querySelector(".newsletter-back-button");
  var submitButton = container.querySelector(".newsletter-form-button");

  success.style.display = "none";
  errorContainer.style.display = "none";
  errorMessage.innerText = "Oops! Something went wrong, please try again";
  backButton.style.display = "none";
  formInput.style.display = "flex";
  submitButton.style.display = "flex";
}

var formContainers = document.getElementsByClassName(
  "newsletter-form-container"
);

for (var i = 0; i < formContainers.length; i++) {
  var formContainer = formContainers[i]
  var handlersAdded = formContainer.classList.contains('newsletter-handlers-added')
  if (handlersAdded) continue;
  formContainer
    .querySelector(".newsletter-form")
    .addEventListener("submit", submitHandler);
  formContainer
    .querySelector(".newsletter-back-button")
    .addEventListener("click", resetFormHandler);
  formContainer.classList.add("newsletter-handlers-added");
}
</script>

Hope to see you around, fly dangerous :simple-starship:

[@keppylab_ai](https://twitter.com/keppylab_ai) | [Github](https://github.com/keppy) | [LinkedIn](https://www.linkedin.com/in/james-dominguez-5b342b226/) | [Hugging Face](https://huggingface.co/keppy)
