(function () {
  const resumeRoot = document.querySelector(".signal-resume");
  const canvas = document.getElementById("voxel-canvas");
  const transcript = document.getElementById("tiny-transcript");
  const form = document.getElementById("tiny-chat");
  const input = document.getElementById("tiny-input");
  const status = document.getElementById("voxel-status");
  const promptButtons = document.querySelectorAll("[data-prompt]");
  const exploreButton = document.getElementById("explore-zone");
  const startBattleButton = document.getElementById("start-battle");
  const trainPetButton = document.getElementById("train-pet");
  const runShowcaseButton = document.getElementById("run-showcase");
  const resetGameButton = document.getElementById("reset-game");
  const copyDemoIntroButton = document.getElementById("copy-demo-intro");
  const storyAct = document.getElementById("story-act");
  const storyObjective = document.getElementById("story-objective");
  const signalMeter = document.getElementById("signal-meter");
  const winsMeter = document.getElementById("tower-meter");
  const dexMeter = document.getElementById("threat-meter");
  const zoneMeter = document.getElementById("focus-meter");
  const proofKicker = document.getElementById("tower-proof-kicker");
  const proofTitle = document.getElementById("tower-proof-title");
  const proofCopy = document.getElementById("tower-proof-copy");
  const proofChips = document.getElementById("tower-proof-chips");
  const battleKicker = document.getElementById("battle-kicker");
  const battleTitle = document.getElementById("battle-title");
  const battleCopy = document.getElementById("battle-copy");
  const battleBars = document.querySelector(".battle-bars");
  const petHpBar = document.getElementById("pet-hp");
  const enemyHpBar = document.getElementById("enemy-hp");
  const petName = document.getElementById("pet-name");
  const petStage = document.getElementById("pet-stage");
  const petPortrait = document.querySelector(".pet-portrait");
  const dexCount = document.getElementById("dex-count");
  const dexList = document.getElementById("sigildex-list");
  const journeyButtons = document.querySelectorAll(".journey-map [data-zone]");
  const moveButtons = document.querySelectorAll("[data-move]");
  const lootDrop = document.getElementById("loot-drop");
  const lootKicker = document.getElementById("loot-kicker");
  const lootTitle = document.getElementById("loot-title");
  const lootRarity = document.getElementById("loot-rarity");
  const lootCopy = document.getElementById("loot-copy");
  const lootReceipts = document.getElementById("loot-receipts");
  const claimLootButton = document.getElementById("claim-loot");

  const facts = [
    {
      key: "stemuli",
      title: "Stemuli",
      zone: "District Arcade",
      enemy: "Roadmap Hydra",
      color: [0.08, 0.72, 0.62],
      accent: [0.94, 0.78, 0.24],
      map: [2, 2],
      tags: ["stemuli", "product", "ai", "education", "gaming", "fundraising", "district", "roadmap", "customer"],
      proof: "Led Product & AI across roadmap, customer constraints, fundraising story, model behavior, and deployment tradeoffs for an AI-powered education platform.",
      receipts: ["AI product", "fundraising story", "district constraints", "model behavior"],
      text: "Stemuli: Head of Product & AI for an AI-powered educational gaming platform. Work spans product strategy, AI roadmap, fundraising narrative, client-facing product work, hiring scopes, district constraints, and hands-on model behavior.",
      details: [
        "Translated research and customer constraints into Linear tickets, IRB-aligned docs, hiring scopes, investor language, and deployment trade-offs.",
        "Worked where schools, districts, bilingual equity requirements, product timelines, and model quality all had to meet.",
      ],
    },
    {
      key: "corider",
      title: "Corider",
      zone: "Tool Contract Cave",
      enemy: "Hallucination Mimic",
      color: [0.45, 0.42, 0.96],
      accent: [0.52, 0.92, 0.98],
      map: [5, 2],
      tags: ["corider", "agent", "coding", "rust", "tools", "post-training", "model", "behavior", "sft", "contract"],
      proof: "Built a Rust-native coding-collaborator spec, tool contract, SFT/eval schemas, and regression gates for honest agent behavior.",
      receipts: ["Rust", "tool contracts", "SFT", "agent evals"],
      text: "Corider: independent model-behavior, evals, and post-training project for a Rust-native coding collaborator.",
      details: [
        "Built a model spec and normative-rule layer for representation-first coding behavior.",
        "Designed evals around tool honesty, scope control, write/run claims, and repo realism.",
      ],
    },
    {
      key: "evals",
      title: "Evals",
      zone: "Regression Reef",
      enemy: "Metric Mirage",
      color: [0.9, 0.24, 0.38],
      accent: [0.97, 0.72, 0.18],
      map: [8, 2],
      tags: ["evals", "evaluation", "scoring", "regression", "faithfulness", "rubric", "agent", "quality", "tests"],
      proof: "Turns model quality into product infrastructure: rubrics, regression tests, perturbation checks, tool-use honesty, and failure analysis.",
      receipts: ["rubrics", "regression", "faithfulness", "QA loops"],
      text: "Evals: product-grade evaluation work around conversation quality, reasoning faithfulness, perturbation tests, persona consistency, coding-agent quality, and regression analysis.",
      details: [
        "Treats evals as product infrastructure, not research theater.",
        "Builds rubrics that expose why a model is not ready, not just whether a scalar score moved.",
      ],
    },
    {
      key: "orb",
      title: "Orb Math",
      zone: "Tutor Volcano",
      enemy: "Misconception Golem",
      color: [0.94, 0.5, 0.14],
      accent: [0.18, 0.72, 0.58],
      map: [11, 2],
      tags: ["orb", "math", "qwen3", "post", "training", "synthetic", "eval", "bilingual", "reasoning", "tutoring"],
      proof: "Designed a Qwen3 math-tutoring post-training plan with synthetic tutoring data, reasoning RL, bilingual behavior, and faithfulness evals.",
      receipts: ["Qwen3", "synthetic data", "reasoning RL", "evals"],
      text: "Orb Math: Qwen3 fine-tune for grade-school math tutoring with long-CoT cold start, reasoning RL, thinking-mode fusion, synthetic tutoring data, and evals.",
      details: [
        "Scaled hand-curated tutoring conversations into a bilingual synthetic-data corpus.",
        "Evaluated dense versus MoE tradeoffs for persona adaptation, instructional-mode switching, bilingual support, cost, and deployment complexity.",
      ],
    },
    {
      key: "labs",
      title: "Labs fit",
      zone: "Frontier Observatory",
      enemy: "Benchmark Wraith",
      color: [0.72, 0.24, 0.84],
      accent: [0.34, 0.92, 0.74],
      map: [3, 5],
      tags: ["labs", "frontier", "evals", "model", "behavior", "synthetic", "post-training", "agents", "rag", "open"],
      proof: "Strong match for model behavior, eval design, post-training loops, coding-agent quality, and applied research translation.",
      receipts: ["model behavior", "post-training", "agents", "research to product"],
      text: "Labs fit: model behavior, eval design, synthetic data, SFT and post-training loops, RAG, agents, open-model strategy, coding-agent quality, and regression analysis.",
      details: [
        "Comfortable with open-model strategy, Qwen/DeepSeek-style methodology, and hands-on failure analysis.",
        "Likes the layer where model behavior becomes a product contract.",
      ],
    },
    {
      key: "startup",
      title: "Startup fit",
      zone: "Founder Ferry",
      enemy: "Ambiguity Slime",
      color: [0.18, 0.52, 0.92],
      accent: [0.98, 0.72, 0.22],
      map: [6, 5],
      tags: ["startup", "executive", "product", "gtm", "fundraising", "customers", "roadmap", "hiring", "operator", "founder"],
      proof: "Converts ambiguous AI capability into roadmap, customer language, demos, hiring scopes, and execution tickets.",
      receipts: ["roadmap", "customers", "GTM", "high agency"],
      text: "Startup fit: AI product strategy, roadmap ownership, customer demos, GTM positioning, fundraising narrative, hiring scopes, and founder-adjacent operating work.",
      details: [
        "Can convert ambiguous AI capability into roadmap, customer language, hiring plans, and execution tickets.",
        "Best in high-agency environments where product, customers, company story, and model behavior all touch.",
      ],
    },
    {
      key: "systems",
      title: "Systems",
      zone: "Stack Foundry",
      enemy: "Legacy Automaton",
      color: [0.62, 0.72, 0.82],
      accent: [0.38, 0.86, 0.54],
      map: [9, 5],
      tags: ["python", "typescript", "go", "ruby", "postgres", "react", "aws", "docker", "terraform", "kubernetes"],
      proof: "Built APIs, product-facing web apps, data systems, AI services, deployment tooling, and internal platforms across modern stacks.",
      receipts: ["Python", "TypeScript", "Postgres", "AWS"],
      text: "Systems: Python, TypeScript, Go, Ruby, Racket/Lisp, FastAPI, PostgreSQL, Neo4j, LanceDB, Chroma, React, Docker, AWS, Terraform, Kubernetes.",
      details: [
        "Comfortable crossing backend, frontend, ML-adjacent systems, infrastructure, and product surfaces.",
        "Long-running product engineering across modern and older stacks.",
      ],
    },
    {
      key: "keppylab",
      title: "KeppyLab",
      zone: "Prototype Garden",
      enemy: "Scope Bloom",
      color: [0.94, 0.82, 0.25],
      accent: [0.14, 0.78, 0.72],
      map: [12, 5],
      tags: ["keppylab", "games", "rag", "coding", "evals", "llm", "research", "hackathon", "demo"],
      proof: "Rapid experiments across generative games, biomedical RAG, coding-agent evals, LLM research notes, and public demos.",
      receipts: ["WebGL", "RAG", "games", "public demos"],
      text: "KeppyLab: independent AI lab for rapid product experiments across generative games, medical RAG, coding-agent evals, and LLM research notes.",
      details: [
        "Built WorldEnder.ai, a generative text-adventure and LLM game-engine prototype.",
        "Built Disease Lab, a biomedical RAG and knowledge-graph project for rare disease research.",
      ],
    },
    {
      key: "pegasys",
      title: "Pegasys / Fortive",
      zone: "Medical Circuit",
      enemy: "Pipeline Wyvern",
      color: [0.42, 0.7, 0.92],
      accent: [0.96, 0.4, 0.55],
      map: [3, 8],
      tags: ["pegasys", "fortive", "medical", "object", "detection", "image", "classification", "go", "python", "react"],
      proof: "Turned AI prototypes into usable product features across object detection, image classification, services, auth, upload, and app architecture.",
      receipts: ["computer vision", "Go", "Python", "React Native"],
      text: "Pegasys Medical / Fortive: consulting work on AI pipelines for object detection and image classification, Go and Python microservices, auth, file upload, metadata, logging, sync, React, and React Native architecture.",
      details: [
        "Modernized frontend architecture into an Nx-managed monorepo across React and React Native applications.",
        "Turned AI prototypes into usable product features with stakeholders.",
      ],
    },
    {
      key: "dolly",
      title: "Dolly",
      zone: "Payout Pier",
      enemy: "Distributed Knot",
      color: [0.66, 0.48, 0.3],
      accent: [0.42, 0.84, 0.76],
      map: [6, 8],
      tags: ["dolly", "consultant", "payout", "algorithm", "mobile", "api", "go", "node", "training"],
      proof: "Debugged payout-algorithm issues across mobile apps, APIs, and older services while helping new hires learn the architecture.",
      receipts: ["debugging", "payments", "Go", "Node"],
      text: "Dolly: consulting work debugging payout-algorithm issues across mobile apps, APIs, and older Go/Node services, plus training new hires on distributed service debugging.",
      details: [
        "Paired with senior engineers on long-standing payout bugs.",
        "Helped new hires learn a distributed microservice architecture.",
      ],
    },
    {
      key: "ai2",
      title: "AI2 Incubator",
      zone: "Vision Lab",
      enemy: "Prototype Phantom",
      color: [0.98, 0.42, 0.62],
      accent: [0.36, 0.88, 0.98],
      map: [9, 8],
      tags: ["ai2", "incubator", "computer", "vision", "video", "react", "websocket", "pulumi", "annotation"],
      proof: "Built early AI product experiments around real-time computer vision, annotation workflows, WebSockets, and AWS/Pulumi infrastructure.",
      receipts: ["computer vision", "WebSockets", "Pulumi", "annotation UX"],
      text: "AI2 Incubator: Entrepreneur in Residence and AI builder. Built a real-time laughter-detection computer-vision model, data architecture for Callout.ai, React annotation workflows, Node services, WebSockets, and AWS/Pulumi infrastructure.",
      details: [
        "Worked on video-chat product infrastructure and computer-vision features.",
        "Built annotation workflows and service infrastructure around early AI product experiments.",
      ],
    },
    {
      key: "older",
      title: "Earlier engineering",
      zone: "Archive Ruins",
      enemy: "Monolith Beetle",
      color: [0.52, 0.62, 0.72],
      accent: [0.95, 0.7, 0.24],
      map: [12, 8],
      tags: ["older", "earlier", "engineering", "work", "moz", "rumblemonkey", "godaddy", "games", "blockchain", "gis"],
      proof: "Senior and founding engineering work across local-search systems, multiplayer games, blockchain-backed event tracking, APIs, and consulting.",
      receipts: ["Moz", "games", "APIs", "GIS"],
      text: "Earlier engineering: Senior Software Engineer at Moz, Founding Software Engineer at RumbleMonkey, and product/web/API consulting across GoDaddy, Smashing Boxes, PugetWorks / Blue Nile, and Intercon.",
      details: [
        "At Moz, built Go/Postgres services and React tools for local-search data quality, customer issue tracking, and GIS-backed search optimization.",
        "At RumbleMonkey, built multiplayer game systems, blockchain-backed user/token event tracking, and real-time betting APIs.",
      ],
    },
  ];

  const finalBoss = {
    key: "boss",
    title: "Generic ATS",
    zone: "Flattening Gate",
    enemy: "Resume Flattening Engine",
    color: [0.08, 0.1, 0.18],
    accent: [0.98, 0.18, 0.34],
    tags: ["boss", "ats", "generic", "flatten", "pdf", "recruiter", "must", "hire"],
    proof: "SignalDex resolves the central conflict: proof beats resume slop. The artifact itself demonstrates product taste, frontend craft, model-facing UX, and weird high-agency shipping.",
    receipts: ["playable proof", "local model", "WebGL", "shareable funnel"],
    text: "Final boss: generic hiring entropy tries to flatten a weird operator-builder into a PDF-shaped fog. Beat it with anchored receipts from the journey.",
    details: ["The engine only understands claims until you force it to read proof: evals, post-training, product, systems, demos, customers, and receipts."],
  };

  const stop = new Set("the a an and or to of in for with on about is are was were what why how tell me james you he his i hire fit at can do did does have has into from by as this that it use show give please".split(" "));
  const factByKey = Object.fromEntries(facts.map((fact) => [fact.key, fact]));
  const allCards = [...facts, finalBoss];
  const storyRoute = ["keppylab", "stemuli", "corider", "evals", "startup", "labs", "systems", "older", "orb", "pegasys", "dolly", "ai2"];
  const gateRequirement = 3;
  const demoIntroText = "I built SignalDex: a hidden playable resume RPG where a tiny local model routes questions into distortion trials, specific work receipts unlock proof cards, and a little signal companion evolves as the story escapes resume slop. It is a WebGL game loop, a model-facing UX demo, and a high-signal funnel artifact in one link.";
  const aliases = [
    ["evals", ["eval", "evals", "metric", "metrics", "rubric", "regression", "drift", "faithfulness"]],
    ["corider", ["corider", "coding agent", "tool contract", "rust", "sft"]],
    ["stemuli", ["stemuli", "education", "district", "school", "fundraising"]],
    ["startup", ["startup", "founder", "operator", "gtm", "customer", "roadmap"]],
    ["labs", ["labs", "frontier", "research", "post-training", "model behavior"]],
    ["orb", ["orb", "math", "qwen", "tutor", "bilingual"]],
    ["systems", ["systems", "stack", "python", "typescript", "postgres", "aws"]],
    ["older", ["older", "earlier", "archive", "moz", "rumblemonkey"]],
  ];

  const moves = {
    "matrix-multiplication": {
      label: "Matrix Multiplication",
      role: "heavy hit",
      power: 34,
      tags: ["model", "system", "agent", "proof"],
      copy: "The wyrm unfolds the whole slop vector space.",
    },
    "plt-meme": {
      label: "plt Meme",
      role: "chaos tick",
      power: 26,
      tags: ["demo", "prototype", "research", "receipt"],
      copy: "A cursed chart appears. The enemy cannot tell if it is a joke or evidence.",
    },
    "hacker-focus": {
      label: "Hacker Focus",
      role: "restore HP",
      heal: 38,
      tags: ["guard", "scope", "recover", "focus"],
      copy: "Everything gets quiet enough to see the actual bug.",
    },
    "gradient-bonk": {
      label: "Gradient Bonk",
      role: "quick hit",
      power: 24,
      tags: ["model", "training", "eval", "debug"],
      copy: "A tiny optimizer bonks the loss landscape into shape.",
    },
    "eval-trap": {
      label: "Eval Trap",
      role: "break armor",
      power: 31,
      tags: ["eval", "rubric", "regression", "faithfulness"],
      copy: "The distortion confidently steps into a failing test.",
    },
    deslopify: {
      label: "Deslopify",
      role: "finisher",
      power: 39,
      tags: ["ship", "product", "customer", "demo", "proof"],
      copy: "The resume slop peels off and leaves the real receipt underneath.",
    },
  };

  const locationSprites = {
    stemuli: ["shop", 48, 48, 0.94],
    corider: ["signpost", 16, 24, 0.58],
    evals: ["well", 24, 32, 0.7],
    orb: ["chapel", 48, 64, 1.06],
    labs: ["cottage", 48, 48, 0.94],
    startup: ["shop", 48, 48, 0.94],
    systems: ["well", 24, 32, 0.72],
    keppylab: ["campfire", 16, 16, 0.5],
    pegasys: ["chapel", 48, 64, 1.04],
    dolly: ["signpost", 16, 24, 0.58],
    ai2: ["cottage", 48, 48, 0.94],
    older: ["chapel", 48, 64, 1.04],
  };

  const sceneryTiles = [
    [0.8, 0.9, 4, 0.72], [1.3, 3.5, 5, 0.5], [3.3, 0.8, 6, 0.48],
    [7.4, 3.7, 4, 0.62], [10.6, 1, 5, 0.52], [13.4, 0.8, 4, 0.7],
    [14.1, 3.2, 5, 0.5], [1.2, 6.4, 6, 0.5], [0.7, 8.9, 4, 0.64],
    [4.1, 7, 5, 0.52], [10.6, 6.5, 6, 0.48], [13.6, 7.7, 4, 0.68],
  ];

  const petStages = [
    {
      name: "Signal Wyrm",
      label: "stage 1 / curious hatchling",
      threshold: 0,
      color: [0.36, 0.9, 0.96],
      accent: [0.98, 0.86, 0.28],
      segments: 4,
    },
    {
      name: "Loop Serpent",
      label: "stage 2 / eval-trained familiar",
      threshold: 70,
      color: [0.2, 0.74, 0.98],
      accent: [0.58, 0.98, 0.72],
      segments: 6,
    },
    {
      name: "Receipt Dragon",
      label: "stage 3 / proof-hoarding final form",
      threshold: 170,
      color: [0.48, 0.52, 1],
      accent: [1, 0.72, 0.28],
      segments: 8,
    },
  ];

  const state = {
    activeKey: "keppylab",
    routeIndex: 0,
    player: { x: 12, y: 5, tx: 12, ty: 5 },
    battle: false,
    battleKey: null,
    mode: "explore",
    rewardKey: null,
    enemyHp: 100,
    enemyHpMax: 100,
    petHp: 100,
    xp: 0,
    wins: 0,
    stage: 0,
    collected: new Set(),
    particles: [],
    timers: [],
    time: 0,
    shake: 0,
    playing: false,
  };

  let width = 1;
  let height = 1;

  const storageKey = "keppylab-signaldex-progress-v1";

  function restoreTranscript() {
    if (!transcript) return;
    const lines = [
      ["archivist", "Welcome to SignalDex. The Archive is losing James Allen's story to resume slop."],
      ["archivist", "Distortions guard each zone. Specific proof anchors the memory; vague claims make them stronger."],
    ];
    transcript.replaceChildren(...lines.map(([speaker, text]) => {
      const item = document.createElement("p");
      const strong = document.createElement("strong");
      strong.textContent = `${speaker}:`;
      item.append(strong, ` ${text}`);
      return item;
    }));
  }

  function loadProgress() {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) return;
      const saved = JSON.parse(raw);
      state.xp = Number(saved.xp) || 0;
      state.wins = Number(saved.wins) || 0;
      state.stage = clamp(Number(saved.stage) || 0, 0, petStages.length - 1);
      state.collected = new Set(Array.isArray(saved.collected) ? saved.collected : []);
      if (state.xp > 0 || state.wins > 0 || state.collected.size > 0) markPlaying();
    } catch (error) {
      state.collected = new Set();
    }
  }

  function saveProgress() {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify({
        xp: state.xp,
        wins: state.wins,
        stage: state.stage,
        collected: Array.from(state.collected),
      }));
    } catch (error) {
      // Local storage is optional; the game still works without persistence.
    }
  }

  function markPlaying() {
    state.playing = true;
    resumeRoot?.classList.add("is-playing");
  }

  function setMode(mode, rewardKey = null) {
    state.mode = mode;
    state.rewardKey = rewardKey;
    resumeRoot?.setAttribute("data-mode", mode);
    resumeRoot?.classList.toggle("is-trial", mode === "trial");
    resumeRoot?.classList.toggle("is-reward", mode === "reward");
    if (mode !== "reward" && lootDrop) lootDrop.hidden = true;
    updateMoveButtons();
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function tokenize(text) {
    return text.toLowerCase().replace(/[^a-z0-9+\- ]/g, " ").split(/\s+/).filter((word) => word && !stop.has(word));
  }

  function cssColor(color, alpha = 1) {
    return `rgba(${color.map((value) => Math.round(value * 255)).join(", ")}, ${alpha})`;
  }

  function findMove(text) {
    const lower = text.toLowerCase();
    return Object.entries(moves).find(([id, move]) => lower.includes(id.replace("-", " ")) || lower.includes(move.label.toLowerCase()))?.[1] || null;
  }

  function readIntent(text) {
    return {
      boss: /final|boss|ats|generic|flatten|gate/i.test(text),
      showcase: /showcase|tour|demo|viral|impress|combo/i.test(text),
      train: /train|evolve|level|bond|boost|guard|heal|protect/i.test(text),
      enter: /battle|fight|encounter|challenge|bug|drift|regression|monster|problem|summon|trial|enter|play/i.test(text),
      cast: /use|cast|attack|matrix|plt|meme|hacker|focus|gradient|bonk|trap|deslop|debug|ship|prove|proof|receipt|rubric|combo|move|play/i.test(text),
    };
  }

  function scoreFacts(text) {
    const lower = text.toLowerCase();
    const words = tokenize(text);
    const explicit = facts.find((fact) => words.includes(fact.key) || lower.includes(fact.title.toLowerCase()));
    const alias = explicit ? null : aliases.find((entry) => entry[1].some((term) => lower.includes(term)));
    const direct = explicit || (alias ? factByKey[alias[0]] : null);
    const scored = facts.map((fact) => {
      const field = `${fact.key} ${fact.title} ${fact.zone} ${fact.enemy} ${fact.tags.join(" ")} ${fact.text} ${fact.details.join(" ")}`.toLowerCase();
      const score = words.reduce((sum, word) => sum + (field.includes(word) ? 1 : 0), 0) + (direct?.key === fact.key ? 8 : 0);
      return { fact, score };
    }).sort((a, b) => b.score - a.score);
    return scored[0].score > 0 ? scored.slice(0, 3).map((item) => item.fact) : [factByKey[state.activeKey] || factByKey.keppylab];
  }

  function tinyReply(text, keys) {
    const lead = keys[0] || factByKey.keppylab;
    const detail = lead.details[(text.length + lead.key.length) % lead.details.length];
    return `${lead.title}: ${lead.proof} Receipt: ${detail}`;
  }

  function currentPet() {
    return petStages[state.stage] || petStages[0];
  }

  function activeCard() {
    if (state.battleKey === "boss" || state.rewardKey === "boss") return finalBoss;
    return factByKey[state.battleKey || state.rewardKey || state.activeKey] || factByKey.keppylab;
  }

  function lootMeta(card) {
    const tierByKey = {
      boss: ["mythic", "Mythic proof relic"],
      corider: ["legendary", "Legendary agent relic"],
      evals: ["legendary", "Legendary eval relic"],
      labs: ["legendary", "Legendary labs relic"],
      startup: ["rare", "Rare operator relic"],
      keppylab: ["rare", "Rare prototype relic"],
      ai2: ["rare", "Rare incubator relic"],
      orb: ["rare", "Rare post-training relic"],
    };
    const [rarity, label] = tierByKey[card.key] || ["uncommon", "Uncommon proof relic"];
    const number = Math.max(1, allCards.findIndex((item) => item.key === card.key) + 1);
    return { rarity, label, number: String(number).padStart(2, "0") };
  }

  function moveAffinity(move, card) {
    if (!move || !card) return { hits: 0, bonus: 0 };
    const field = `${card.key} ${card.title} ${card.zone} ${card.enemy} ${card.tags.join(" ")} ${card.receipts.join(" ")} ${card.text}`.toLowerCase();
    const hits = move.tags.filter((tag) => field.includes(tag.toLowerCase())).length;
    return { hits, bonus: Math.min(20, hits * 5) };
  }

  function updateMoveButtons() {
    const card = activeCard();
    moveButtons.forEach((button) => {
      const move = moves[button.dataset.move];
      const span = button.querySelector("span");
      if (!move) return;
      const affinity = moveAffinity(move, card);
      const live = state.battle;
      button.disabled = !live;
      button.classList.toggle("is-boosted", live && affinity.bonus > 0);
      button.title = live
        ? `${move.label}: ${move.copy}${affinity.bonus ? ` +${affinity.bonus} zone synergy.` : ""}`
        : "Enter this zone's trial to draw move cards.";
      if (span) span.textContent = live && affinity.bonus ? `+${affinity.bonus} synergy` : move.role;
    });
  }

  function anchoredProofCount() {
    return facts.filter((fact) => state.collected.has(fact.key)).length;
  }

  function canEnterFinalBoss() {
    return anchoredProofCount() >= gateRequirement;
  }

  function pluralize(count, singular, plural = `${singular}s`) {
    return count === 1 ? singular : plural;
  }

  function currentChapter() {
    const proofCount = anchoredProofCount();
    if (state.collected.has("boss")) {
      return {
        act: "Epilogue / Signal held",
        objective: "The Archive remembers the weird, specific version. Send the link.",
      };
    }
    if (state.mode === "reward") {
      const card = activeCard();
      return {
        act: "Loot drop / Proof recovered",
        objective: `${card.title} emblem unlocked. Claim it, then pick the next route.`,
      };
    }
    if (state.battle) {
      const card = activeCard();
      return {
        act: card.key === "boss" ? "Finale / Flattening Gate" : "Trial / Distortion fight",
        objective: card.key === "boss"
          ? "Break the engine with concrete receipts from the journey."
          : `Anchor ${card.title} by casting moves that name real proof.`,
      };
    }
    if (proofCount === 0) {
      return {
        act: "Act I / Signal outage",
        objective: "Scout a zone, enter its trial, and recover the first anchored proof card.",
      };
    }
    if (proofCount < gateRequirement) {
      const needed = gateRequirement - proofCount;
      return {
        act: "Act II / Build the case",
        objective: `Anchor ${needed} more ${pluralize(needed, "proof card")} to expose the Flattening Gate.`,
      };
    }
    return {
      act: "Act III / Flattening Gate",
      objective: "Enough proof is anchored. Challenge the resume-flattening engine.",
    };
  }

  function nextRouteCard() {
    const ordered = storyRoute.map((key) => factByKey[key]).filter(Boolean);
    for (let offset = 0; offset < ordered.length; offset += 1) {
      const index = (state.routeIndex + offset) % ordered.length;
      const card = ordered[index];
      if (!state.collected.has(card.key)) {
        state.routeIndex = index + 1;
        return card;
      }
    }
    return null;
  }

  function maybeEvolve() {
    const oldStage = state.stage;
    for (let index = petStages.length - 1; index >= 0; index -= 1) {
      if (state.xp >= petStages[index].threshold) {
        state.stage = index;
        break;
      }
    }
    if (state.stage > oldStage) {
      const pet = currentPet();
      addLine("system", `${pet.name} evolved. It looks dangerously employable.`);
      burst(0.28, 0.68, pet.accent, 34);
    }
  }

  function addLine(speaker, text) {
    if (!transcript) return;
    const item = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = `${speaker}:`;
    item.append(strong, ` ${text}`);
    transcript.appendChild(item);
    while (transcript.children.length > 10) transcript.removeChild(transcript.firstElementChild);
    transcript.scrollTop = transcript.scrollHeight;
  }

  function updateProofCard(card = factByKey[state.activeKey], unlocked = false) {
    if (!card) return;
    const anchored = unlocked || state.collected.has(card.key);
    if (proofKicker) proofKicker.textContent = anchored ? "anchored proof" : card.key === "boss" ? "final distortion" : card.zone;
    if (proofTitle) proofTitle.textContent = card.title;
    if (proofCopy) {
      if (anchored) {
        proofCopy.textContent = card.proof;
      } else if (card.key === "boss") {
        const needed = Math.max(0, gateRequirement - anchoredProofCount());
        proofCopy.textContent = needed > 0
          ? `The Flattening Gate is sealed. Anchor ${needed} more ${pluralize(needed, "proof card")} before challenging the ${card.enemy}.`
          : card.text;
      } else {
        proofCopy.textContent = `Rumor: ${card.enemy} distorts this chapter. Anchor it by winning the trial. ${card.text}`;
      }
    }
    if (proofChips) {
      proofChips.replaceChildren(...card.receipts.map((chip) => {
        const item = document.createElement("span");
        item.textContent = chip;
        return item;
      }));
    }
  }

  function showLootDrop(card, firstWin) {
    if (!lootDrop || !card) return;
    const meta = lootMeta(card);
    lootDrop.hidden = false;
    lootDrop.dataset.rarity = meta.rarity;
    lootDrop.style.setProperty("--loot", cssColor(card.accent, 0.96));
    lootDrop.style.setProperty("--loot-bg", cssColor(card.color, 0.2));
    if (lootKicker) lootKicker.textContent = firstWin ? "new proof drop" : "duplicate drop";
    if (lootTitle) lootTitle.textContent = `${card.title} emblem`;
    if (lootRarity) lootRarity.textContent = `#${meta.number} / ${meta.label}`;
    if (lootCopy) {
      lootCopy.textContent = firstWin
        ? card.proof
        : `Duplicate converted into bond XP. The ${card.title} proof was already anchored.`;
    }
    if (lootReceipts) {
      lootReceipts.replaceChildren(...card.receipts.map((receipt) => {
        const chip = document.createElement("span");
        chip.textContent = receipt;
        return chip;
      }));
    }
  }

  function updateJourneyButtons() {
    journeyButtons.forEach((button) => {
      const key = button.dataset.zone;
      const isBoss = key === "boss";
      const active = isBoss ? state.battleKey === "boss" : key === state.activeKey;
      const collected = state.collected.has(key);
      button.classList.toggle("is-active", active);
      button.classList.toggle("is-collected", collected);
      button.classList.toggle("is-locked", isBoss && !canEnterFinalBoss() && !collected);
    });
  }

  function updateDex() {
    if (dexCount) dexCount.textContent = `${state.collected.size}/${allCards.length}`;
    if (!dexList) return;
    const badgeCards = allCards
      .map((card, index) => ({ card, index }))
      .sort((a, b) => Number(state.collected.has(b.card.key)) - Number(state.collected.has(a.card.key)) || a.index - b.index);
    dexList.replaceChildren(...badgeCards.map(({ card, index }) => {
      const item = document.createElement("button");
      const unlocked = state.collected.has(card.key);
      const meta = lootMeta(card);
      item.type = "button";
      item.className = unlocked ? "is-collected" : "";
      item.dataset.rarity = meta.rarity;
      item.style.setProperty("--badge", cssColor(card.accent, unlocked ? 0.95 : 0.28));
      item.style.setProperty("--badge-bg", cssColor(card.color, unlocked ? 0.18 : 0.08));
      const gem = document.createElement("span");
      gem.className = "badge-gem";
      gem.textContent = unlocked ? meta.number : "??";
      const label = document.createElement("span");
      label.className = "badge-name";
      label.textContent = unlocked ? card.title : "locked drop";
      item.append(gem, label);
      item.title = unlocked ? `${meta.label}: ${card.proof}` : "Win this zone trial to reveal the emblem.";
      item.addEventListener("click", () => {
        focusCard(card.key);
        updateProofCard(card, unlocked);
      });
      return item;
    }));
  }

  function updateHud() {
    const active = activeCard();
    const pet = currentPet();
    const chapter = currentChapter();
    resumeRoot?.setAttribute("data-mode", state.mode || (state.battle ? "trial" : "explore"));
    resumeRoot?.classList.toggle("is-trial", state.battle);
    resumeRoot?.classList.toggle("is-reward", state.mode === "reward");
    if (storyAct) storyAct.textContent = chapter.act;
    if (storyObjective) storyObjective.textContent = chapter.objective;
    if (status) status.textContent = state.battle ? `trial / ${active.zone}` : state.mode === "reward" ? `drop / ${active.title}` : `route / ${active.zone}`;
    if (signalMeter) signalMeter.textContent = `${state.xp} xp`;
    if (winsMeter) winsMeter.textContent = String(anchoredProofCount());
    if (dexMeter) dexMeter.textContent = `${state.collected.size}/${allCards.length}`;
    if (zoneMeter) zoneMeter.textContent = active.zone;
    if (petName) petName.textContent = pet.name;
    if (petStage) petStage.textContent = pet.label;
    if (petPortrait) petPortrait.dataset.stage = String(state.stage);
    if (battleBars) battleBars.dataset.state = state.battle ? "battle" : "rest";
    if (petHpBar) petHpBar.style.width = `${state.battle ? clamp(state.petHp, 0, 100) : 100}%`;
    if (enemyHpBar) enemyHpBar.style.width = `${state.battle ? clamp((state.enemyHp / state.enemyHpMax) * 100, 0, 100) : 0}%`;
    if (input) input.placeholder = state.battle ? "type a move, ask for proof, or cast a card" : "ask about a zone, or click a map location";
    if (!state.battle && state.mode !== "reward" && battleKicker && battleTitle && battleCopy) {
      battleKicker.textContent = canEnterFinalBoss() ? "gate exposed" : "archive pressure";
      battleTitle.textContent = canEnterFinalBoss() ? "Flattening Gate is open" : "The signal is unstable";
      battleCopy.textContent = `${chapter.objective} Map buildings are fast travel; move cards unlock inside trials.`;
    }
    updateJourneyButtons();
    updateDex();
    updateMoveButtons();
  }

  function focusCard(key) {
    const card = factByKey[key] || finalBoss;
    state.activeKey = card.key === "boss" ? state.activeKey : card.key;
    if (card.map) {
      state.player.tx = card.map[0];
      state.player.ty = card.map[1];
    }
    updateProofCard(card, state.collected.has(card.key));
    updateHud();
  }

  function travelToLocation(key) {
    if (state.battle) return false;
    const card = factByKey[key];
    if (!card) return false;
    markPlaying();
    clearShowcase();
    setMode("explore");
    focusCard(card.key);
    const anchored = state.collected.has(card.key);
    addLine("travel", `${card.zone} reached.`);
    if (battleCopy) {
      battleCopy.textContent = anchored
        ? `${card.zone} is already anchored. The ${card.title} emblem is in the SigilDex.`
        : `${card.zone} reached. Enter the trial to beat ${card.enemy} and unlock ${card.title}.`;
    }
    return true;
  }

  function drawFieldCard(key) {
    markPlaying();
    const card = key === "boss" ? finalBoss : factByKey[key];
    if (!card) return;
    if (!state.battle) setMode("explore");
    if (key !== "boss" && !state.battle) focusCard(card.key);
    else updateProofCard(card, state.collected.has(card.key));
    const line = key === "boss"
      ? (canEnterFinalBoss() ? "Flattening Gate is exposed. Play the trial when ready." : `Flattening Gate is sealed. Anchor ${gateRequirement - anchoredProofCount()} more proof cards.`)
      : `${card.zone} drawn. Field cards scout; play trial and use hacker moves to beat ${card.enemy}.`;
    addLine("deck", line);
    updateHud();
    if (!state.battle && battleCopy) battleCopy.textContent = line;
  }

  function exploreNext() {
    markPlaying();
    setMode("explore");
    const next = nextRouteCard();
    if (!next) {
      addLine("archive", "Every field zone is anchored. The only distortion left is the Flattening Gate.");
      startFinalBoss();
      return;
    }
    focusCard(next.key);
    addLine("you", `scout ${next.zone}`);
    addLine("archivist", `${next.enemy} is corrupting ${next.title}. Enter the trial, win with weird little hacker moves, and the proof emblem unlocks.`);
  }

  function startBattle(key = state.activeKey) {
    markPlaying();
    if (key === "boss") {
      startFinalBoss();
      return;
    }
    const card = factByKey[key] || factByKey.keppylab;
    state.activeKey = card.key;
    state.battle = true;
    state.battleKey = card.key;
    setMode("trial");
    state.enemyHpMax = 92 + state.wins * 5 + state.stage * 16;
    state.enemyHp = state.enemyHpMax;
    state.petHp = 100;
    if (battleKicker) battleKicker.textContent = card.zone;
    if (battleTitle) battleTitle.textContent = card.enemy;
    if (battleCopy) battleCopy.textContent = `${card.enemy} twists this chapter into resume slop. Pick a move; the proof unlocks when the zone falls.`;
    updateProofCard(card, state.collected.has(card.key));
    addLine("trial", `${card.enemy} appeared in ${card.zone}. Vague claims will not cut it.`);
    burst(0.7, 0.34, card.accent, 18);
    updateHud();
  }

  function startFinalBoss(force = false) {
    markPlaying();
    if (!force && !canEnterFinalBoss()) {
      const needed = Math.max(0, gateRequirement - anchoredProofCount());
      state.battle = false;
      state.battleKey = null;
      setMode("explore");
      updateProofCard(finalBoss, false);
      updateHud();
      if (battleKicker) battleKicker.textContent = "sealed gate";
      if (battleTitle) battleTitle.textContent = "Flattening Gate rejects weak proof";
      if (battleCopy) battleCopy.textContent = `The engine needs ${needed} more anchored ${pluralize(needed, "proof card")} before it can be challenged. Scout another zone.`;
      addLine("gate", `The Flattening Gate stays shut. Anchor ${needed} more ${pluralize(needed, "proof card")}.`);
      return;
    }
    state.battle = true;
    state.battleKey = "boss";
    setMode("trial");
    state.enemyHpMax = 180;
    state.enemyHp = state.enemyHpMax;
    state.petHp = 100;
    if (battleKicker) battleKicker.textContent = finalBoss.zone;
    if (battleTitle) battleTitle.textContent = finalBoss.enemy;
    if (battleCopy) battleCopy.textContent = "The engine compresses every receipt into generic keywords. Cast the strongest anchored proof from the journey.";
    updateProofCard(finalBoss, state.collected.has("boss"));
    addLine("boss", "Generic hiring entropy wants a PDF-shaped fog. It hates playable evidence.");
    burst(0.72, 0.34, finalBoss.accent, 42);
    updateHud();
  }

  function trainPet() {
    markPlaying();
    if (!state.battle) {
      state.xp += 8;
      state.petHp = 100;
      maybeEvolve();
      saveProgress();
      addLine("mentor", `${currentPet().name} trains between trials. HP refills when battle starts; bond XP drives evolution.`);
      burst(0.27, 0.66, currentPet().accent, 16);
      updateHud();
      return;
    }
    state.xp += 6;
    state.petHp = clamp(state.petHp + 18, 0, 100);
    maybeEvolve();
    saveProgress();
    addLine("system", `${currentPet().name} guarded the signal mid-trial. +6 bond XP.`);
    burst(0.27, 0.66, currentPet().accent, 18);
    updateHud();
  }

  function playMove(moveId) {
    const move = moves[moveId];
    if (!move) return;
    markPlaying();
    if (!state.battle) {
      if (battleCopy) battleCopy.textContent = "Enter the trial first; the move cards wake up once an enemy is on the field.";
      return;
    }
    if (state.battle) battleTurn(move.label, [factByKey[state.battleKey] || factByKey[state.activeKey] || factByKey.keppylab], move);
  }

  function battleTurn(text, keys, move = null) {
    const card = state.battleKey === "boss" ? finalBoss : factByKey[state.battleKey] || keys[0] || factByKey.keppylab;
    const moveText = move ? `${move.label} ${move.tags.join(" ")}` : text;
    const words = tokenize(moveText);
    const field = `${card.key} ${card.title} ${card.zone} ${card.enemy} ${card.tags.join(" ")} ${card.receipts.join(" ")} ${card.text}`.toLowerCase();
    const tagHits = words.filter((word) => field.includes(word)).length;
    const specificity = Math.min(28, tagHits * 6);
    const affinity = moveAffinity(move, card);
    const finisherBonus = move?.label === "Deslopify" && state.enemyHp < state.enemyHpMax * 0.45 ? 18 : 0;
    const powerWords = move ? 0 : /(eval|proof|receipt|debug|ship|prototype|research|operator|customer|roadmap|post-training|synthetic|agent|system|contract|fundraising|model|rust|webgl|rag|vision)/i.test(text) ? 14 : 0;
    const heal = move?.heal || /(heal|recover|restore|guard|protect)/i.test(text);
    const vaguePenalty = move ? 0 : words.length < 3 ? 8 : 0;
    const damage = Math.max(10, (move?.power || 18) + state.stage * 8 + specificity + affinity.bonus + finisherBonus + powerWords - vaguePenalty);
    const label = move?.label || text;

    if (heal) {
      state.petHp = clamp(state.petHp + (move?.heal || 24) + state.stage * 5, 0, 100);
      addLine("you", label);
      addLine("trial", move?.copy || `${currentPet().name} guarded the signal and recovered.`);
      burst(0.28, 0.68, currentPet().accent, 18);
    } else {
      state.enemyHp -= damage;
      state.shake = 10;
      const attackCopy = move?.copy || `${currentPet().name} used ${tagHits > 1 ? "receipt combo" : "specificity bite"}`;
      addLine("you", label);
      addLine("trial", `${attackCopy}${affinity.bonus ? ` Zone synergy +${affinity.bonus}.` : ""}${finisherBonus ? " Finisher bonus." : ""} ${damage} damage.`);
      burst(0.7, 0.34, card.accent, 24);
    }

    if (state.enemyHp <= 0) {
      winBattle(card);
      return;
    }

    const enemyDamage = clamp(17 - state.stage * 3 + Math.floor((100 - state.enemyHp) / 60), 6, 18);
    state.petHp -= enemyDamage;
    if (state.petHp <= 0) {
      state.petHp = 100;
      state.battle = false;
      state.battleKey = null;
      setMode("explore");
      state.enemyHp = 0;
      addLine("trial", `${card.enemy} scrambled the signal. Your companion retreats, rests, and refills before the next try.`);
    } else {
      addLine("enemy", `${card.enemy} hits back for ${enemyDamage}.`);
    }
    if (battleCopy) battleCopy.textContent = move
      ? `${move.label}: ${move.copy}${affinity.bonus ? ` Zone synergy +${affinity.bonus}.` : ""}${finisherBonus ? " Finisher bonus landed." : ""} Win to reveal the ${card.title} emblem.`
      : `Signal read: ${tinyReply(text, [card])}`;
    updateHud();
  }

  function winBattle(card) {
    const gateWasOpen = canEnterFinalBoss();
    const firstWin = !state.collected.has(card.key);
    state.collected.add(card.key);
    state.battle = false;
    state.battleKey = null;
    setMode("reward", card.key);
    state.enemyHp = 0;
    state.petHp = 100;
    state.wins += 1;
    state.xp += firstWin ? 34 : 18;
    maybeEvolve();
    saveProgress();
    updateProofCard(card, true);
    let outcomeKicker = "emblem unlocked";
    let outcomeTitle = `${card.title} emblem`;
    let outcomeCopy = `${card.proof} Emblem receipts: ${card.receipts.join(", ")}. HP refilled for the next trial.`;
    addLine("victory", `${card.title} emblem anchored. ${currentPet().name} healed and gained bond XP.`);
    if (card.key === "boss") {
      outcomeKicker = "archive restored";
      outcomeTitle = "SignalDex complete";
      outcomeCopy = "The resume did not become generic. It became playable proof.";
      addLine("ending", "The Archive holds the weird specific story. Funnel unlocked.");
    } else if (!gateWasOpen && canEnterFinalBoss()) {
      addLine("gate", "Three proof cards are anchored. The Flattening Gate is exposed.");
    }
    burst(0.5, 0.46, card.accent, 44);
    showLootDrop(card, firstWin);
    updateHud();
    if (battleKicker) battleKicker.textContent = outcomeKicker;
    if (battleTitle) battleTitle.textContent = outcomeTitle;
    if (battleCopy) battleCopy.textContent = outcomeCopy;
  }

  function submitCommand(text) {
    const clean = text.trim();
    if (!clean) return;
    markPlaying();
    if (state.mode === "reward") {
      addLine("you", clean);
      if (/claim|continue|next|loot|take/i.test(clean)) claimLoot();
      else if (battleCopy) battleCopy.textContent = "Claim the proof drop first; then the model can route the next zone.";
      return;
    }
    const intent = readIntent(clean);
    const move = findMove(clean);
    const keys = scoreFacts(clean);
    const lead = keys[0] || factByKey.keppylab;

    if (intent.boss) {
      addLine("you", clean);
      startFinalBoss();
      return;
    }

    if (intent.showcase) {
      addLine("you", clean);
      runShowcase();
      return;
    }

    if (intent.train && !state.battle) {
      addLine("you", clean);
      trainPet();
      return;
    }

    if (state.battle) {
      if (move) {
        battleTurn(move.label, keys, move);
        return;
      }
      if (intent.train) {
        addLine("you", clean);
        trainPet();
        return;
      }
      battleTurn(clean, keys);
      return;
    }

    focusCard(lead.key);
    if (!intent.cast) addLine("you", clean);
    if (intent.enter || intent.cast) {
      startBattle(lead.key);
      if (intent.cast && state.battle) battleTurn(move?.label || clean, keys, move);
      return;
    }

    addLine("archivist", tinyReply(clean, keys));
    updateHud();
    if (battleCopy) battleCopy.textContent = `${lead.enemy} is the distortion here. Enter the trial when you want to anchor ${lead.title}.`;
  }

  function runShowcase() {
    markPlaying();
    clearShowcase();
    addLine("system", "Guided run armed: scout, anchor three receipts, then break the Flattening Gate.");
    const steps = [
      () => focusCard("keppylab"),
      () => addLine("archivist", "First rule: the resume is a world. Each fact needs a conflict and a receipt."),
      () => startBattle("evals"),
      () => battleTurn("Eval Trap", [factByKey.evals], moves["eval-trap"]),
      () => battleTurn("Deslopify", [factByKey.evals], moves.deslopify),
      () => state.battle && winBattle(factByKey.evals),
      () => focusCard("corider"),
      () => startBattle("corider"),
      () => battleTurn("Matrix Multiplication", [factByKey.corider], moves["matrix-multiplication"]),
      () => state.battle && winBattle(factByKey.corider),
      () => startBattle("startup"),
      () => battleTurn("plt Meme", [factByKey.startup], moves["plt-meme"]),
      () => state.battle && winBattle(factByKey.startup),
      () => startFinalBoss(true),
      () => battleTurn("Hacker Focus", [finalBoss], moves["hacker-focus"]),
      () => battleTurn("Deslopify", [finalBoss], moves.deslopify),
      () => state.battle && winBattle(finalBoss),
    ];
    steps.forEach((step, index) => {
      state.timers.push(window.setTimeout(step, 520 + index * 780));
    });
  }

  function clearShowcase() {
    state.timers.forEach((timer) => window.clearTimeout(timer));
    state.timers = [];
  }

  function resetGame() {
    clearShowcase();
    Object.assign(state, {
      activeKey: "keppylab",
      routeIndex: 0,
      player: { x: 12, y: 5, tx: 12, ty: 5 },
      battle: false,
      battleKey: null,
      mode: "explore",
      rewardKey: null,
      enemyHp: 100,
      enemyHpMax: 100,
      petHp: 100,
      xp: 0,
      wins: 0,
      stage: 0,
      collected: new Set(),
      particles: [],
      timers: [],
      shake: 0,
      playing: false,
    });
    try {
      window.localStorage.removeItem(storageKey);
    } catch (error) {
      // Reset still works if storage is unavailable.
    }
    resumeRoot?.classList.remove("is-playing");
    setMode("explore");
    restoreTranscript();
    updateProofCard(factByKey.keppylab, false);
    updateHud();
    addLine("system", "Run reset. Prototype Garden is fresh again.");
  }

  function claimLoot() {
    const card = activeCard();
    if (lootDrop) lootDrop.hidden = true;
    setMode("explore");
    updateHud();
    if (battleKicker) battleKicker.textContent = card.key === "boss" ? "funnel unlocked" : "emblem claimed";
    if (battleTitle) battleTitle.textContent = card.key === "boss" ? "Signal held" : `${card.title} stored`;
    if (battleCopy) {
      battleCopy.textContent = card.key === "boss"
        ? "SignalDex is complete. The hidden resume now reads as playable proof."
        : `${card.title} is in the loot table. Pick another map location or draw the next route.`;
    }
    addLine("loot", `${card.title} emblem claimed.`);
  }

  function copyDemoIntro() {
    const done = () => {
      if (!copyDemoIntroButton) return;
      const original = copyDemoIntroButton.textContent;
      copyDemoIntroButton.textContent = "copied";
      window.setTimeout(() => {
        copyDemoIntroButton.textContent = original || "copy intro";
      }, 1300);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(demoIntroText).then(done).catch(() => fallbackCopy(done));
    } else {
      fallbackCopy(done);
    }
  }

  function fallbackCopy(done) {
    const area = document.createElement("textarea");
    area.value = demoIntroText;
    area.setAttribute("readonly", "readonly");
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    try {
      document.execCommand("copy");
      done();
    } finally {
      document.body.removeChild(area);
    }
  }

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    submitCommand(input.value);
    input.value = "";
  });

  promptButtons.forEach((button) => {
    if (button.closest(".journey-map")) return;
    button.addEventListener("click", () => submitCommand(button.dataset.prompt || button.textContent || ""));
  });

  journeyButtons.forEach((button) => {
    button.addEventListener("click", () => drawFieldCard(button.dataset.zone));
  });

  moveButtons.forEach((button) => {
    button.addEventListener("click", () => playMove(button.dataset.move));
  });

  exploreButton?.addEventListener("click", exploreNext);
  startBattleButton?.addEventListener("click", () => startBattle(state.activeKey));
  trainPetButton?.addEventListener("click", trainPet);
  runShowcaseButton?.addEventListener("click", runShowcase);
  resetGameButton?.addEventListener("click", resetGame);
  claimLootButton?.addEventListener("click", claimLoot);
  copyDemoIntroButton?.addEventListener("click", () => {
    copyDemoIntro();
    addLine("system", "Intro copied. Send it with the hidden SignalDex link.");
  });

  if (!canvas) return;
  const gl = canvas.getContext("webgl", {
    alpha: false,
    antialias: false,
    powerPreference: "high-performance",
  });
  if (!gl) {
    if (status) status.textContent = "webgl unavailable";
    return;
  }

  const vertexShader = compile(gl.VERTEX_SHADER, `
    attribute vec2 a_position;
    attribute vec4 a_color;
    varying vec4 v_color;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
      v_color = a_color;
    }
  `);
  const fragmentShader = compile(gl.FRAGMENT_SHADER, `
    precision mediump float;
    varying vec4 v_color;
    void main() {
      gl_FragColor = v_color;
    }
  `);
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.useProgram(program);

  const spriteVertexShader = compile(gl.VERTEX_SHADER, `
    attribute vec2 a_position;
    attribute vec2 a_texcoord;
    varying vec2 v_texcoord;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
      v_texcoord = a_texcoord;
    }
  `);
  const spriteFragmentShader = compile(gl.FRAGMENT_SHADER, `
    precision mediump float;
    uniform sampler2D u_image;
    varying vec2 v_texcoord;
    void main() {
      vec4 color = texture2D(u_image, v_texcoord);
      if (color.a < 0.02) discard;
      gl_FragColor = color;
    }
  `);
  const spriteProgram = gl.createProgram();
  gl.attachShader(spriteProgram, spriteVertexShader);
  gl.attachShader(spriteProgram, spriteFragmentShader);
  gl.linkProgram(spriteProgram);

  const colorBuffer = gl.createBuffer();
  const positionLocation = gl.getAttribLocation(program, "a_position");
  const colorLocation = gl.getAttribLocation(program, "a_color");
  const spriteBuffer = gl.createBuffer();
  const spritePositionLocation = gl.getAttribLocation(spriteProgram, "a_position");
  const spriteTexcoordLocation = gl.getAttribLocation(spriteProgram, "a_texcoord");
  const spriteImageLocation = gl.getUniformLocation(spriteProgram, "u_image");
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  let vertices = [];
  let foregroundVertices = [];
  let spriteBatches = new Map();
  let locationHitBoxes = [];
  let pixelRatio = 1;
  let lastFrame = 0;

  const sheets = {
    tileset: loadSheet("/assets/signaldex/tileset.png", 64, 64),
    companion: loadSheet("/assets/signaldex/companion_evolution.png", 128, 32),
    enemies: loadSheet("/assets/signaldex/enemies.png", 128, 32),
    player: loadSheet("/assets/signaldex/player.png", 32, 32),
    campfire: loadSheet("/assets/signaldex/campfire.png", 16, 16),
    chapel: loadSheet("/assets/signaldex/chapel.png", 48, 64),
    cottage: loadSheet("/assets/signaldex/cottage.png", 48, 48),
    signpost: loadSheet("/assets/signaldex/signpost.png", 16, 24),
    well: loadSheet("/assets/signaldex/well.png", 24, 32),
    shop: loadSheet("/assets/signaldex/shop.png", 48, 48),
  };

  function compile(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
  }

  function loadSheet(src, imageWidth, imageHeight) {
    const texture = gl.createTexture();
    const sheet = { src, imageWidth, imageHeight, loaded: false, texture };
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));

    const image = new Image();
    image.onload = () => {
      sheet.loaded = true;
      sheet.imageWidth = image.naturalWidth || imageWidth;
      sheet.imageHeight = image.naturalHeight || imageHeight;
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    };
    image.src = src;
    return sheet;
  }

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    pixelRatio = ratio;
    const nextWidth = Math.max(1, Math.floor(canvas.clientWidth * ratio));
    const nextHeight = Math.max(1, Math.floor(canvas.clientHeight * ratio));
    if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
      canvas.width = nextWidth;
      canvas.height = nextHeight;
      gl.viewport(0, 0, nextWidth, nextHeight);
    }
    width = canvas.clientWidth || nextWidth;
    height = canvas.clientHeight || nextHeight;
  }

  function snapPixel(value) {
    return Math.round(value * pixelRatio) / pixelRatio;
  }

  function appendRect(target, x, y, w, h, color) {
    const x1 = x / width * 2 - 1;
    const x2 = (x + w) / width * 2 - 1;
    const y1 = 1 - y / height * 2;
    const y2 = 1 - (y + h) / height * 2;
    const c = color.length === 3 ? [...color, 1] : color;
    target.push(
      x1, y1, ...c, x2, y1, ...c, x1, y2, ...c,
      x1, y2, ...c, x2, y1, ...c, x2, y2, ...c,
    );
  }

  function pushRect(x, y, w, h, color) {
    appendRect(vertices, x, y, w, h, color);
  }

  function pushForegroundRect(x, y, w, h, color) {
    appendRect(foregroundVertices, x, y, w, h, color);
  }

  function pushFrame(x, y, w, h, color, thickness = 3) {
    pushRect(x, y, w, thickness, color);
    pushRect(x, y + h - thickness, w, thickness, color);
    pushRect(x, y, thickness, h, color);
    pushRect(x + w - thickness, y, thickness, h, color);
  }

  function pushSprite(sheetKey, x, y, w, h, sx, sy, sw, sh, flipX = false) {
    const sheet = sheets[sheetKey];
    if (!sheet || !sheet.loaded) return false;

    let left = snapPixel(x);
    let right = snapPixel(x + w);
    let top = snapPixel(y);
    let bottom = snapPixel(y + h);
    if (right <= left) right = left + 1 / pixelRatio;
    if (bottom <= top) bottom = top + 1 / pixelRatio;
    const x1 = left / width * 2 - 1;
    const x2 = right / width * 2 - 1;
    const y1 = 1 - top / height * 2;
    const y2 = 1 - bottom / height * 2;
    let u1 = sx / sheet.imageWidth;
    let u2 = (sx + sw) / sheet.imageWidth;
    const v1 = sy / sheet.imageHeight;
    const v2 = (sy + sh) / sheet.imageHeight;
    if (flipX) [u1, u2] = [u2, u1];

    if (!spriteBatches.has(sheetKey)) spriteBatches.set(sheetKey, []);
    spriteBatches.get(sheetKey).push(
      x1, y1, u1, v1, x2, y1, u2, v1, x1, y2, u1, v2,
      x1, y2, u1, v2, x2, y1, u2, v1, x2, y2, u2, v2,
    );
    return true;
  }

  function pushTile(tileIndex, x, y, size) {
    const col = tileIndex % 4;
    const row = Math.floor(tileIndex / 4);
    return pushSprite("tileset", x, y, size, size, col * 16, row * 16, 16, 16);
  }

  function drawScenery(t) {
    sceneryTiles.forEach(([mx, my, tile, scale], index) => {
      const [x, y, s] = mapPoint(mx, my);
      const bob = Math.sin(t * 0.002 + index) * s * 0.015;
      pushTile(tile, x, y + bob, s * scale);
    });
  }

  function pushLocationSprite(fact, index, x, y, s, collected, active, t) {
    const sprite = locationSprites[fact.key] || locationSprites.keppylab;
    const [sheet, sw, sh, scale] = sprite;
    const h = s * scale * (active ? 1.08 : 1);
    const w = h * (sw / sh);
    const bob = Math.sin(t * 0.004 + index) * s * (active ? 0.045 : 0.018);
    const glow = collected ? [1, 0.94, 0.42, 0.24] : dim(fact.color, 0.5, 0.24);
    locationHitBoxes.push({
      key: fact.key,
      x: x - w * 0.74,
      y: y - h * 1.04 + bob,
      w: w * 1.48,
      h: h * 1.34,
    });
    pushRect(x - w * 0.62, y + s * 0.2, w * 1.24, s * 0.16, [0.02, 0.03, 0.05, 0.38]);
    pushRect(x - w * 0.72, y - h * 0.94 + bob, w * 1.44, h * 1.08, glow);
    if (!pushSprite(sheet, x - w * 0.5, y - h * 0.85 + bob, w, h, 0, 0, sw, sh)) {
      pushTile(8 + (index % 4), x - s * 0.34, y - s * 0.42 + bob, s * 0.68);
    }
    if (active) pushFrame(x - w * 0.68, y - h * 0.94 + bob, w * 1.36, h * 1.06, [...fact.accent, 0.9], 3);
    if (collected) {
      const flagX = x + w * 0.28;
      const flagY = y - h * 1.04 + bob;
      const pole = Math.max(2, s * 0.04);
      pushForegroundRect(flagX, flagY, pole, h * 0.56, [0.04, 0.06, 0.1, 0.95]);
      pushForegroundRect(flagX + pole, flagY, w * 0.38, h * 0.18, [...fact.accent, 0.95]);
      pushForegroundRect(flagX + pole, flagY + h * 0.18, w * 0.22, h * 0.12, dim(fact.accent, 0.72, 0.9));
    }
  }

  function drawSpriteBatches() {
    gl.useProgram(spriteProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, spriteBuffer);
    gl.enableVertexAttribArray(spritePositionLocation);
    gl.enableVertexAttribArray(spriteTexcoordLocation);
    gl.vertexAttribPointer(spritePositionLocation, 2, gl.FLOAT, false, 16, 0);
    gl.vertexAttribPointer(spriteTexcoordLocation, 2, gl.FLOAT, false, 16, 8);
    gl.uniform1i(spriteImageLocation, 0);

    spriteBatches.forEach((batch, key) => {
      const sheet = sheets[key];
      if (!sheet || !sheet.loaded || !batch.length) return;
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, sheet.texture);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(batch), gl.DYNAMIC_DRAW);
      gl.drawArrays(gl.TRIANGLES, 0, batch.length / 4);
    });
  }

  function mapPoint(mx, my) {
    const dockReserve = width > 760 ? Math.min(230, height * 0.25) : Math.min(170, height * 0.2);
    const topReserve = width > 760 ? Math.min(18, height * 0.025) : 0;
    const playHeight = Math.max(height * 0.55, height - dockReserve - topReserve);
    const scale = Math.min(width / 16, playHeight / (width > 760 ? 8.85 : 10));
    const originX = width * 0.5 - scale * 7.5;
    const originY = width > 760
      ? height - dockReserve + Math.min(18, scale * 0.25) - scale * 9.85
      : topReserve + playHeight * 0.5 - scale * 4.9;
    return [originX + mx * scale, originY + my * scale, scale];
  }

  function canvasPoint(event) {
    const rect = canvas.getBoundingClientRect();
    return [
      (event.clientX - rect.left) * (width / rect.width),
      (event.clientY - rect.top) * (height / rect.height),
    ];
  }

  function locationAtPoint(x, y) {
    if (state.battle) return null;
    return locationHitBoxes
      .slice()
      .reverse()
      .find((box) => x >= box.x && x <= box.x + box.w && y >= box.y && y <= box.y + box.h) || null;
  }

  function dim(color, amount = 0.6, alpha = 1) {
    return [color[0] * amount, color[1] * amount, color[2] * amount, alpha];
  }

  function burst(nx, ny, color, count = 16) {
    for (let i = 0; i < count; i += 1) {
      const angle = Math.PI * 2 * (i / count);
      const speed = 1.4 + (i % 5) * 0.45;
      state.particles.push({
        x: nx * width,
        y: ny * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 42 + (i % 6) * 7,
        size: 4 + (i % 4),
        color: [...color, 0.9],
      });
    }
  }

  function updateParticles() {
    state.particles = state.particles.filter((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += 0.02;
      particle.life -= 1;
      return particle.life > 0;
    });
  }

  function drawParticles() {
    state.particles.forEach((particle) => {
      pushRect(particle.x, particle.y, particle.size, particle.size, [particle.color[0], particle.color[1], particle.color[2], particle.life / 55]);
    });
  }

  function drawOverworld(t) {
    pushRect(0, 0, width, height, [0.025, 0.035, 0.07, 1]);
    pushRect(0, height * 0.62, width, height * 0.38, [0.04, 0.16, 0.14, 1]);
    pushRect(0, height * 0.12, width, height * 0.5, [0.04, 0.08, 0.16, 0.88]);

    const [ox, oy, scale] = mapPoint(0, 0);
    for (let gx = 0; gx < 15; gx += 1) {
      for (let gy = 0; gy < 10; gy += 1) {
        const path = gy === 2 || gy === 5 || gy === 8 || gx === 2 || gx === 6 || gx === 9 || gx === 12;
        const water = (gx > 10 && gy < 2) || (gx < 2 && gy > 7);
        const tile = water ? 10 : path ? 5 : (gx + gy) % 7 === 0 ? 1 : 0;
        if (!pushTile(tile, ox + gx * scale, oy + gy * scale, scale)) {
          const checker = (gx + gy) % 2 === 0;
          pushRect(ox + gx * scale, oy + gy * scale, scale - 2, scale - 2, checker ? [0.08, 0.24, 0.18, 0.74] : [0.06, 0.2, 0.18, 0.74]);
        }
      }
    }
    drawScenery(t);

    facts.forEach((fact, index) => {
      const [x, y, s] = mapPoint(fact.map[0], fact.map[1]);
      const collected = state.collected.has(fact.key);
      const active = fact.key === state.activeKey;
      pushLocationSprite(fact, index, x, y, s, collected, active, t);
    });

    state.player.x += (state.player.tx - state.player.x) * 0.05;
    state.player.y += (state.player.ty - state.player.y) * 0.05;
    const [px, py, ps] = mapPoint(state.player.x, state.player.y);
    drawPet(px - ps * 0.55, py + ps * 0.16, ps * 0.14, t, false);
    drawPlayer(px, py, ps * 0.18, t);
  }

  function drawBattle(t) {
    const card = state.battleKey === "boss" ? finalBoss : factByKey[state.battleKey] || factByKey.keppylab;
    const shake = state.shake > 0 ? Math.sin(t * 0.08) * state.shake : 0;
    state.shake = Math.max(0, state.shake - 0.45);

    pushRect(0, 0, width, height, [0.035, 0.04, 0.08, 1]);
    pushRect(width * 0.08, height * 0.18, width * 0.84, height * 0.52, dim(card.color, 0.48, 0.82));
    pushFrame(width * 0.08, height * 0.18, width * 0.84, height * 0.52, [...card.accent, 0.55], 4);
    pushRect(width * 0.14, height * 0.66, width * 0.34, height * 0.05, [0.16, 0.34, 0.28, 0.9]);
    pushRect(width * 0.58, height * 0.38, width * 0.3, height * 0.05, [0.16, 0.24, 0.34, 0.9]);
    drawPet(width * 0.3, height * 0.58, Math.min(width, height) * 0.018, t, true);
    drawEnemy(width * 0.72 + shake, height * 0.34, Math.min(width, height) * 0.038, card, t);
  }

  function drawPlayer(x, y, size, t) {
    const bob = Math.sin(t * 0.006) * size * 0.25;
    const sprite = size * 3.7;
    if (pushSprite("player", x - sprite * 0.5, y - sprite + bob, sprite, sprite, 0, 0, 32, 32)) return;
    pushRect(x - size * 0.7, y - size * 1.3 + bob, size * 1.4, size * 1.4, [0.16, 0.8, 0.74, 1]);
    pushRect(x - size * 0.5, y - size * 2.1 + bob, size, size, [0.98, 0.8, 0.58, 1]);
    pushRect(x - size * 0.85, y - size * 2.35 + bob, size * 1.7, size * 0.42, [0.05, 0.08, 0.13, 1]);
    pushRect(x - size * 0.58, y + size * 0.1 + bob, size * 0.42, size * 0.7, [0.04, 0.08, 0.16, 1]);
    pushRect(x + size * 0.18, y + size * 0.1 + bob, size * 0.42, size * 0.7, [0.04, 0.08, 0.16, 1]);
  }

  function drawPet(x, y, size, t, battleScale) {
    const pet = currentPet();
    const bob = Math.sin(t * 0.006) * size * (battleScale ? 1.2 : 0.4);
    const frame = state.stage === 0 ? 0 : state.stage === 1 ? 1 : 3;
    const sprite = battleScale ? Math.min(width, height) * 0.18 : size * 4.4;
    if (pushSprite("companion", x - sprite * 0.52, y - sprite * 0.5 + bob, sprite, sprite, frame * 32, 0, 32, 32)) return;
    const bodySize = battleScale ? size * 2.6 : size * 1.8;
    for (let i = 0; i < pet.segments; i += 1) {
      const sway = Math.sin(t * 0.008 + i * 0.8) * bodySize * 0.55;
      const sx = x - i * bodySize * 0.72;
      const sy = y + sway + i * bodySize * 0.1;
      const c = i === 0 ? pet.accent : pet.color;
      pushRect(sx, sy, bodySize, bodySize * 0.74, [...c, 1]);
      pushRect(sx + bodySize * 0.18, sy + bodySize * 0.18, bodySize * 0.18, bodySize * 0.18, [0.02, 0.05, 0.09, 1]);
    }
    if (state.stage >= 1) {
      pushRect(x - bodySize * 0.2, y - bodySize * 0.9, bodySize * 0.38, bodySize * 0.75, [...pet.accent, 0.95]);
    }
    if (state.stage >= 2) {
      pushRect(x - bodySize * 1.1, y - bodySize * 1.05, bodySize * 0.75, bodySize * 0.38, [1, 0.9, 0.36, 0.95]);
      pushRect(x - bodySize * 1.1, y + bodySize * 0.92, bodySize * 0.75, bodySize * 0.38, [1, 0.9, 0.36, 0.95]);
    }
  }

  function drawEnemy(x, y, size, card, t) {
    const bob = Math.sin(t * 0.005) * size * 2;
    const sprite = size * 5.2;
    const frame = enemyFrame(card);
    if (pushSprite("enemies", x - sprite * 0.5, y - sprite * 0.5 + bob, sprite, sprite, frame * 32, 0, 32, 32)) return;
    const c = card.color;
    const a = card.accent;
    pushRect(x - size * 2.2, y - size * 1.6 + bob, size * 4.4, size * 3.2, [...c, 1]);
    pushRect(x - size * 3, y - size * 0.6 + bob, size * 1.2, size * 1.2, dim(c, 0.72, 1));
    pushRect(x + size * 1.8, y - size * 0.6 + bob, size * 1.2, size * 1.2, dim(c, 0.72, 1));
    pushRect(x - size * 1.2, y - size * 2.4 + bob, size * 0.8, size * 0.9, [...a, 1]);
    pushRect(x + size * 0.4, y - size * 2.4 + bob, size * 0.8, size * 0.9, [...a, 1]);
    pushRect(x - size * 0.85, y - size * 0.45 + bob, size * 0.42, size * 0.42, [0.02, 0.02, 0.04, 1]);
    pushRect(x + size * 0.45, y - size * 0.45 + bob, size * 0.42, size * 0.42, [0.02, 0.02, 0.04, 1]);
    pushRect(x - size * 0.72, y + size * 0.75 + bob, size * 1.6, size * 0.28, [...a, 1]);
  }

  function enemyFrame(card) {
    const frameByKey = {
      stemuli: 3,
      corider: 1,
      evals: 2,
      orb: 0,
      labs: 1,
      startup: 0,
      systems: 2,
      keppylab: 3,
      pegasys: 2,
      dolly: 1,
      ai2: 3,
      older: 2,
      boss: 2,
    };
    return frameByKey[card.key] ?? 0;
  }

  function render(t) {
    requestAnimationFrame(render);
    if (lastFrame && t - lastFrame < 32) return;
    lastFrame = t;
    state.time = t;
    resize();
    vertices = [];
    foregroundVertices = [];
    spriteBatches = new Map();
    locationHitBoxes = [];
    gl.clearColor(0.02, 0.025, 0.05, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    if (state.battle) drawBattle(t);
    else drawOverworld(t);
    updateParticles();
    drawParticles();
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.enableVertexAttribArray(positionLocation);
    gl.enableVertexAttribArray(colorLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 24, 0);
    gl.vertexAttribPointer(colorLocation, 4, gl.FLOAT, false, 24, 8);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);
    gl.drawArrays(gl.TRIANGLES, 0, vertices.length / 6);
    drawSpriteBatches();
    if (foregroundVertices.length) {
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
      gl.enableVertexAttribArray(positionLocation);
      gl.enableVertexAttribArray(colorLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 24, 0);
      gl.vertexAttribPointer(colorLocation, 4, gl.FLOAT, false, 24, 8);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(foregroundVertices), gl.DYNAMIC_DRAW);
      gl.drawArrays(gl.TRIANGLES, 0, foregroundVertices.length / 6);
    }
    gl.flush();
  }

  loadProgress();
  setMode("explore");
  maybeEvolve();
  updateProofCard(factByKey.keppylab, state.collected.has("keppylab"));
  updateHud();
  canvas.addEventListener("pointermove", (event) => {
    const [x, y] = canvasPoint(event);
    canvas.style.cursor = locationAtPoint(x, y) ? "pointer" : "default";
  });
  canvas.addEventListener("pointerleave", () => {
    canvas.style.cursor = "default";
  });
  canvas.addEventListener("click", (event) => {
    const [x, y] = canvasPoint(event);
    const hit = locationAtPoint(x, y);
    if (!hit) return;
    event.preventDefault();
    travelToLocation(hit.key);
  });
  requestAnimationFrame(render);
}());
