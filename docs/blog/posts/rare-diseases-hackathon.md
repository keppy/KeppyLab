---
draft: false
date: 2024-07-03
categories:
    - RAG
    - rare diseases
comments: true
---
# Research to the People and Stanford Medicine's Rare Disease Hackathon

A week ago I flew down to SF to present at Github HQ for a rare disease hackathon aiming to jump-start research in applying LLMs and ML in general to the task of rare disease diagnosis and treatment. The two diseases being researched were Ehlers-Danlos and Hypophosphatasia(HPP). My team decided to focus solely on HPP. We developed a fine tuned model for answering questions about HPP using the ~1300 paper data source that was provided by the event organizers (shout-out to Pete Kane).

Initially I undertook the task of implementing techniques from [KG RAG](https://github.com/BaranziniLab/KG_RAG) and then building upon them to integrate a knowledge graph that QIAGEN provided for the hackathon. Unfortunately this was more than I could do in the given time as the QIAGEN knowledge graph was not a drop in replacement for the SPOKE knowledge graph. I think there is still a lot of milage to be gained here though. If [disease-lab](https://github.com/keppy/disease-lab) can harness [SPOKE](https://spoke.ucsf.edu) and provide a portable Python library for querying it that integrates with vector storage, the interface could be extended to other knowledge graphs as well. The still messy part seems to be in writing the kg building, querying, and pruning code.

Ultimately we came up with a fine tuned sentence embedding model. The papers were in PDF format so we had to invent some data cleaning and chunking methods. Ultimately we ended up with a fine tuned mxbai-embed-large-v1 model and were able to embed the entire dataset. On top of this we built a RAG system which is able to cite the specific sources in the corpus of embeded texts and provide a provenance section in each generation.

We also produced a fined tuned llama-3 model that is in need of further evaluation.