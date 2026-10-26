(function () {
  const canvas = document.getElementById("voxel-canvas");
  const transcript = document.getElementById("tiny-transcript");
  const form = document.getElementById("tiny-chat");
  const input = document.getElementById("tiny-input");
  const status = document.getElementById("voxel-status");
  const promptButtons = document.querySelectorAll("[data-prompt]");

  const facts = [
    {
      key: "stemuli",
      title: "Stemuli",
      color: [0.12, 0.72, 0.62],
      tags: ["stemuli", "head", "product", "ai", "education", "gaming", "fundraising", "client", "roadmap", "district", "customer"],
      text: "Stemuli: Head of Product & AI for an AI-powered educational gaming platform. Work spans product strategy, AI roadmap, fundraising narrative, client-facing product work, hiring scopes, district constraints, and hands-on model behavior.",
      details: [
        "Led Product & AI across product strategy, roadmap ownership, AI research translation, client-facing product work, and fundraising narrative.",
        "Translated research and customer constraints into Linear tickets, IRB-aligned docs, hiring scopes, investor language, and deployment trade-offs.",
        "Worked where schools, districts, bilingual equity requirements, product timelines, and model quality all had to meet.",
      ],
    },
    {
      key: "orb",
      title: "Orb Math",
      color: [0.94, 0.58, 0.18],
      tags: ["orb", "math", "qwen3", "qwen", "post", "training", "synthetic", "eval", "bilingual", "reasoning", "tutoring", "rl"],
      text: "Orb Math: Qwen3 fine-tune for grade-school math tutoring with long-CoT cold start, reasoning RL with verifiable rewards, thinking-mode fusion, general RL, synthetic tutoring data, and evals for reasoning faithfulness.",
      details: [
        "Designed a four-stage post-training plan inspired by DeepSeek-R1 and Qwen3 methodology.",
        "Scaled roughly 40 hand-curated tutoring conversations into a bilingual synthetic-data corpus across student profiles, misconception priors, instructional modes, and curriculum maps.",
        "Evaluated 14B dense versus 30B-A3B MoE tradeoffs for persona adaptation, instructional-mode switching, bilingual support, cost, and deployment complexity.",
      ],
    },
    {
      key: "corider",
      title: "Corider",
      color: [0.48, 0.42, 0.96],
      tags: ["corider", "agent", "coding", "rust", "evals", "tools", "post-training", "model", "behavior", "sft", "repo", "contract"],
      text: "Corider: independent model-behavior, evals, and post-training project for a Rust-native coding collaborator. It ties model spec, normative rules, tool contracts, SFT/eval schemas, synthetic examples, and repo-in-the-loop eval design together.",
      details: [
        "Built a model spec and normative-rule layer for representation-first coding behavior.",
        "Designed a frozen read-only tool contract and evals around tool honesty, scope control, write/run claims, and repo realism.",
        "Used base-vs-adapter reviews to catch regressions like fake tool results, broad implementation collapse, and unsafe claims before shipping.",
      ],
    },
    {
      key: "evals",
      title: "Evals",
      color: [0.86, 0.24, 0.44],
      tags: ["evals", "evaluation", "scoring", "regression", "faithfulness", "rubric", "agent", "quality", "tests"],
      text: "Evals: product-grade evaluation work around conversation quality, reasoning faithfulness, perturbation tests, persona and mode consistency, learning-outcome proxies, coding-agent quality, and regression analysis.",
      details: [
        "Treats evals as product infrastructure, not research theater.",
        "Looks for quality drift in tool use, behavioral boundaries, reasoning faithfulness, and user-trust failures.",
        "Builds rubrics that expose why a model is not ready, not just whether a scalar score moved.",
      ],
    },
    {
      key: "labs",
      title: "Labs fit",
      color: [0.92, 0.22, 0.42],
      tags: ["labs", "frontier", "evals", "model", "behavior", "synthetic", "post-training", "agents", "rag", "open", "models"],
      text: "Labs fit: model behavior, eval design, synthetic data, SFT and post-training loops, RAG, agents, open-model strategy, coding-agent quality, and regression analysis.",
      details: [
        "Strong fit for model behavior, evals, post-training, agent quality, and applied research translation.",
        "Comfortable with open-model strategy, Qwen/DeepSeek-style methodology, and hands-on failure analysis.",
        "Likes the layer where model behavior becomes a product contract.",
      ],
    },
    {
      key: "startup",
      title: "Startup fit",
      color: [0.18, 0.52, 0.92],
      tags: ["startup", "executive", "product", "gtm", "fundraising", "customers", "roadmap", "hiring", "operator", "founder"],
      text: "Startup fit: AI product strategy, roadmap ownership, customer demos, GTM positioning, fundraising narrative, hiring scopes, and founder-adjacent operating work.",
      details: [
        "Can convert ambiguous AI capability into roadmap, customer language, hiring plans, and execution tickets.",
        "Has worked across clients, fundraising narrative, product strategy, and technical implementation.",
        "Best in high-agency environments where product, customers, company story, and model behavior all touch.",
      ],
    },
    {
      key: "systems",
      title: "Systems",
      color: [0.76, 0.78, 0.82],
      tags: ["python", "typescript", "go", "ruby", "racket", "lisp", "postgres", "react", "aws", "docker", "terraform", "kubernetes"],
      text: "Systems: Python, TypeScript, Go, Ruby, Racket/Lisp, FastAPI, PostgreSQL, Neo4j, LanceDB, Chroma, React, Docker, AWS, Terraform, Kubernetes, and long-running product engineering.",
      details: [
        "Has built APIs, product-facing web apps, data systems, AI services, deployment tooling, and internal platforms.",
        "Comfortable crossing backend, frontend, ML-adjacent systems, infrastructure, and product surfaces.",
      ],
    },
    {
      key: "keppylab",
      title: "KeppyLab",
      color: [0.95, 0.83, 0.34],
      tags: ["keppylab", "worldender", "disease", "rag", "games", "knowledge", "graph", "hackathon", "research", "community"],
      text: "KeppyLab: independent AI lab for rapid product experiments across generative games, medical RAG, coding-agent evals, and LLM research notes.",
      details: [
        "Built WorldEnder.ai, a generative text-adventure and LLM game-engine prototype.",
        "Built Disease Lab, a biomedical RAG and knowledge-graph project for rare disease research.",
        "Uses public demos, hackathons, and writing to test applied AI product concepts quickly.",
      ],
    },
    {
      key: "pegasys",
      title: "Pegasys / Fortive",
      color: [0.42, 0.7, 0.92],
      tags: ["pegasys", "fortive", "medical", "object", "detection", "image", "classification", "go", "python", "react", "native"],
      text: "Pegasys Medical / Fortive: consulting work on AI pipelines for object detection and image classification, Go and Python microservices, auth, file upload, metadata, logging, sync, React, and React Native architecture.",
      details: [
        "Turned AI prototypes into usable product features with stakeholders.",
        "Modernized frontend architecture into an Nx-managed monorepo across React and React Native applications.",
      ],
    },
    {
      key: "dolly",
      title: "Dolly",
      color: [0.66, 0.48, 0.3],
      tags: ["dolly", "consultant", "payout", "algorithm", "mobile", "api", "go", "node", "training"],
      text: "Dolly: consulting work debugging payout-algorithm issues across mobile apps, APIs, and older Go/Node services, plus training new hires on distributed service debugging.",
      details: [
        "Paired with senior engineers on long-standing payout bugs.",
        "Helped new hires learn a distributed microservice architecture.",
      ],
    },
    {
      key: "ai2",
      title: "AI2 Incubator",
      color: [0.98, 0.42, 0.62],
      tags: ["ai2", "incubator", "entrepreneur", "residence", "computer", "vision", "video", "react", "websocket", "pulumi"],
      text: "AI2 Incubator: Entrepreneur in Residence and AI builder. Built a real-time laughter-detection computer-vision model, data architecture for Callout.ai, React annotation workflows, Node services, WebSockets, and AWS/Pulumi infrastructure.",
      details: [
        "Worked on video-chat product infrastructure and computer-vision features.",
        "Built annotation workflows and service infrastructure around early AI product experiments.",
      ],
    },
    {
      key: "older",
      title: "Earlier engineering",
      color: [0.55, 0.62, 0.72],
      tags: ["moz", "rumblemonkey", "godaddy", "blue", "nile", "consultant", "local", "search", "games", "blockchain", "gis"],
      text: "Earlier engineering: Senior Software Engineer at Moz, Founding Software Engineer at RumbleMonkey, and product/web/API consulting across GoDaddy, Smashing Boxes, PugetWorks / Blue Nile, and Intercon.",
      details: [
        "At Moz, built Go/Postgres services and React tools for local-search data quality, customer issue tracking, and GIS-backed search optimization.",
        "At RumbleMonkey, built multiplayer game systems, blockchain-backed user/token event tracking, and real-time betting APIs.",
      ],
    },
  ];

  const stop = new Set("the a an and or to of in for with on about is are was were what why how tell me james you he his i hire fit at can do did does have has into from by as this that it".split(" "));
  const tokenize = (text) => text.toLowerCase().replace(/[^a-z0-9+\- ]/g, " ").split(/\s+/).filter((word) => word && !stop.has(word));
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const factByKey = Object.fromEntries(facts.map((fact) => [fact.key, fact]));
  const corpus = facts.flatMap((fact) => [fact.text, ...fact.details]).join(" ");
  const grams = buildGrams(corpus);

  function buildGrams(text) {
    const words = text.toLowerCase().replace(/[^a-z0-9+\- ]/g, " ").split(/\s+/).filter(Boolean);
    const map = new Map();
    for (let i = 0; i < words.length - 2; i += 1) {
      const key = `${words[i]} ${words[i + 1]}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(words[i + 2]);
    }
    return map;
  }

  function tinyGenerate(seed, maxWords = 18) {
    const seedTerms = tokenize(seed);
    const keys = Array.from(grams.keys());
    let key = keys.find((candidate) => seedTerms.some((term) => candidate.includes(term))) || keys[(seed.length * 17) % keys.length];
    const out = key.split(" ");
    for (let i = 0; i < maxWords; i += 1) {
      const choices = grams.get(key);
      if (!choices || !choices.length) break;
      const pick = choices[(seed.length + i * 7 + out.join("").length) % choices.length];
      out.push(pick);
      key = `${out[out.length - 2]} ${out[out.length - 1]}`;
    }
    return out.join(" ").replace(/\bai\b/g, "AI").replace(/\bqwen3\b/g, "Qwen3").replace(/\brag\b/g, "RAG").replace(/\bsft\b/g, "SFT");
  }

  function scoreFacts(question) {
    const terms = tokenize(question);
    return facts.map((fact) => {
      const haystack = tokenize(`${fact.title} ${fact.tags.join(" ")} ${fact.text} ${fact.details.join(" ")}`);
      const score = terms.reduce((sum, term) => {
        const exact = haystack.filter((word) => word === term).length;
        const fuzzy = haystack.some((word) => word.includes(term) || term.includes(word)) ? 0.35 : 0;
        return sum + exact + fuzzy;
      }, 0);
      return { fact, score };
    }).sort((a, b) => b.score - a.score);
  }

  function answer(question) {
    const scored = scoreFacts(question);
    const chosen = scored[0].score > 0 ? scored.slice(0, 3).map((item) => item.fact) : [factByKey.keppylab, factByKey.stemuli, factByKey.corider];
    const lead = chosen[0];
    const second = chosen[1];
    const shard = tinyGenerate(`${question} ${lead.title}`, 16);
    const detail = lead.details[(question.length + lead.key.length) % lead.details.length];
    const bridge = second && second.key !== lead.key ? ` Nearby block: ${second.title} because ${second.details[0].charAt(0).toLowerCase()}${second.details[0].slice(1)}` : "";
    return {
      keys: chosen.map((fact) => fact.key),
      text: `${lead.title}: ${lead.text} ${detail} tiny continuation: "${shard}..."${bridge}`,
    };
  }

  function addLine(who, text) {
    const line = document.createElement("p");
    const label = document.createElement("strong");
    label.textContent = `${who}: `;
    line.append(label, document.createTextNode(text));
    transcript.appendChild(line);
    transcript.scrollTop = transcript.scrollHeight;
  }

  function submitQuestion(question) {
    const clean = question.trim();
    if (!clean) return;
    addLine("you", clean);
    const reply = answer(clean);
    activeKeys = reply.keys;
    primaryKey = reply.keys[0];
    sceneEvent(clean, reply.keys);
    status.textContent = `local / ${reply.keys.join("+")}`;
    window.setTimeout(() => addLine("tiny", reply.text), 90);
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitQuestion(input.value);
    input.value = "";
  });

  promptButtons.forEach((button) => {
    button.addEventListener("click", () => {
      input.value = button.dataset.prompt;
      submitQuestion(input.value);
      input.value = "";
    });
  });

  if (!canvas) return;
  const gl = canvas.getContext("webgl", { antialias: true, alpha: true });
  if (!gl) {
    status.textContent = "webgl unavailable";
    return;
  }

  const vertexSource = `
    attribute vec3 aPosition;
    attribute float aShade;
    uniform mat4 uMatrix;
    varying float vShade;
    void main() {
      vShade = aShade;
      gl_Position = uMatrix * vec4(aPosition, 1.0);
    }
  `;
  const fragmentSource = `
    precision mediump float;
    uniform vec3 uColor;
    varying float vShade;
    void main() {
      gl_FragColor = vec4(uColor * vShade, 1.0);
    }
  `;

  function shader(type, source) {
    const result = gl.createShader(type);
    gl.shaderSource(result, source);
    gl.compileShader(result);
    if (!gl.getShaderParameter(result, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(result));
    return result;
  }

  const program = gl.createProgram();
  gl.attachShader(program, shader(gl.VERTEX_SHADER, vertexSource));
  gl.attachShader(program, shader(gl.FRAGMENT_SHADER, fragmentSource));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
  gl.useProgram(program);

  const faces = [
    [[-0.5, -0.5, 0.5], [0.5, -0.5, 0.5], [0.5, 0.5, 0.5], [-0.5, -0.5, 0.5], [0.5, 0.5, 0.5], [-0.5, 0.5, 0.5], 0.95],
    [[0.5, -0.5, -0.5], [-0.5, -0.5, -0.5], [-0.5, 0.5, -0.5], [0.5, -0.5, -0.5], [-0.5, 0.5, -0.5], [0.5, 0.5, -0.5], 0.55],
    [[-0.5, 0.5, 0.5], [0.5, 0.5, 0.5], [0.5, 0.5, -0.5], [-0.5, 0.5, 0.5], [0.5, 0.5, -0.5], [-0.5, 0.5, -0.5], 1.12],
    [[-0.5, -0.5, -0.5], [0.5, -0.5, -0.5], [0.5, -0.5, 0.5], [-0.5, -0.5, -0.5], [0.5, -0.5, 0.5], [-0.5, -0.5, 0.5], 0.42],
    [[0.5, -0.5, 0.5], [0.5, -0.5, -0.5], [0.5, 0.5, -0.5], [0.5, -0.5, 0.5], [0.5, 0.5, -0.5], [0.5, 0.5, 0.5], 0.78],
    [[-0.5, -0.5, -0.5], [-0.5, -0.5, 0.5], [-0.5, 0.5, 0.5], [-0.5, -0.5, -0.5], [-0.5, 0.5, 0.5], [-0.5, 0.5, -0.5], 0.7],
  ];
  const cube = [];
  faces.forEach((face) => {
    const shade = face[6];
    face.slice(0, 6).forEach((point) => cube.push(point[0], point[1], point[2], shade));
  });
  const cubeBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, cubeBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cube), gl.STATIC_DRAW);

  const stride = 4 * Float32Array.BYTES_PER_ELEMENT;
  const aPosition = gl.getAttribLocation(program, "aPosition");
  const aShade = gl.getAttribLocation(program, "aShade");
  gl.enableVertexAttribArray(aPosition);
  gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, stride, 0);
  gl.enableVertexAttribArray(aShade);
  gl.vertexAttribPointer(aShade, 1, gl.FLOAT, false, stride, 3 * Float32Array.BYTES_PER_ELEMENT);

  const uMatrix = gl.getUniformLocation(program, "uMatrix");
  const uColor = gl.getUniformLocation(program, "uColor");
  const blocks = [];
  const sparks = [];
  const towers = new Map();
  let activeKeys = ["keppylab"];
  let primaryKey = "keppylab";
  let drag = 0;
  let dragging = false;
  let lastX = 0;
  let targetCenter = [0, 1.8, 0];
  let currentCenter = [0, 1.8, 0];
  let eventClock = 0;

  function addBlock(x, y, z, color, key, scale = 1, kind = "solid") {
    const block = { x, y, z, color, key, scale, kind, born: eventClock };
    blocks.push(block);
    return block;
  }

  for (let x = -11; x <= 11; x += 1) {
    for (let z = -11; z <= 11; z += 1) {
      const ring = Math.abs(x) + Math.abs(z);
      if (ring > 20 || (x * x + z * z > 132 && (x + z) % 2)) continue;
      const y = -1 + (Math.sin(x * 0.8) + Math.cos(z * 0.7) > 1.3 ? 0.18 : 0);
      const grass = ring % 3 === 0 ? [0.19, 0.45, 0.25] : [0.14, 0.38, 0.24];
      addBlock(x, y, z, grass, "ground", 1);
    }
  }

  const towerLayout = [
    ["stemuli", -7, -4, 6],
    ["orb", -4, 4, 7],
    ["corider", 2, -5, 8],
    ["evals", 5, -2, 6],
    ["labs", 7, 3, 5],
    ["startup", 0, 0, 5],
    ["systems", 8, -7, 4],
    ["keppylab", -8, 6, 5],
    ["pegasys", -1, 8, 4],
    ["dolly", 4, 7, 3],
    ["ai2", -9, 0, 4],
    ["older", 9, 6, 4],
  ];
  towerLayout.forEach(([key, x, z, height]) => {
    const fact = factByKey[key];
    towers.set(key, { x, z, height });
    for (let y = 0; y < height; y += 1) addBlock(x, y, z, fact.color, key, 1);
    addBlock(x, height, z, fact.color.map((value) => Math.min(1, value + 0.18)), key, 0.72, "cap");
  });

  function sceneEvent(question, keys) {
    eventClock += 1;
    const lead = towers.get(keys[0]) || towers.get("keppylab");
    targetCenter = [lead.x, Math.max(2.4, lead.height * 0.6), lead.z];
    keys.forEach((key, keyIndex) => {
      const tower = towers.get(key);
      const fact = factByKey[key];
      if (!tower || !fact) return;
      const terms = tokenize(question).slice(0, 7);
      const amount = Math.max(4, terms.length + 2);
      for (let i = 0; i < amount; i += 1) {
        const angle = (i / amount) * Math.PI * 2 + eventClock * 0.7 + keyIndex;
        const radius = 1.4 + keyIndex * 0.7 + (i % 2) * 0.25;
        const y = tower.height + 1 + (i % 4) * 0.42;
        const color = fact.color.map((value) => clamp(value + 0.24 - keyIndex * 0.05, 0, 1));
        sparks.push(addBlock(tower.x + Math.cos(angle) * radius, y, tower.z + Math.sin(angle) * radius, color, key, 0.26, "spark"));
      }
      if (/build|grow|more|show|minecraft|summon|make/i.test(question)) {
        const y = tower.height + 1 + eventClock % 3;
        addBlock(tower.x, y, tower.z, fact.color.map((value) => clamp(value + 0.12, 0, 1)), key, 0.9, "query");
        tower.height = Math.max(tower.height, y + 1);
      }
    });
    while (sparks.length > 160) {
      const old = sparks.shift();
      const index = blocks.indexOf(old);
      if (index >= 0) blocks.splice(index, 1);
    }
  }

  function m4Identity() {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  }
  function m4Multiply(a, b) {
    const out = new Array(16);
    const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    const a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    let b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
  }
  function m4Translate(x, y, z) {
    const out = m4Identity();
    out[12] = x;
    out[13] = y;
    out[14] = z;
    return out;
  }
  function m4Scale(s) {
    return [s, 0, 0, 0, 0, s, 0, 0, 0, 0, s, 0, 0, 0, 0, 1];
  }
  function perspective(fov, aspect, near, far) {
    const f = 1 / Math.tan(fov / 2);
    const nf = 1 / (near - far);
    return [f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0];
  }
  function normalize(v) {
    const len = Math.hypot(v[0], v[1], v[2]) || 1;
    return [v[0] / len, v[1] / len, v[2] / len];
  }
  function cross(a, b) {
    return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  }
  function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  }
  function lookAt(eye, center, up) {
    const z = normalize([eye[0] - center[0], eye[1] - center[1], eye[2] - center[2]]);
    const x = normalize(cross(up, z));
    const y = cross(z, x);
    return [x[0], y[0], z[0], 0, x[1], y[1], z[1], 0, x[2], y[2], z[2], 0, -dot(x, eye), -dot(y, eye), -dot(z, eye), 1];
  }

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.floor(canvas.clientWidth * ratio);
    const height = Math.floor(canvas.clientHeight * ratio);
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    }
  }

  canvas.addEventListener("pointerdown", (event) => {
    dragging = true;
    lastX = event.clientX;
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    drag += (event.clientX - lastX) * 0.008;
    lastX = event.clientX;
  });
  canvas.addEventListener("pointerup", () => {
    dragging = false;
  });

  gl.enable(gl.DEPTH_TEST);

  function render(time) {
    resize();
    const t = time * 0.001;
    gl.clearColor(0.02, 0.025, 0.035, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    currentCenter = currentCenter.map((value, index) => value + (targetCenter[index] - value) * 0.045);
    const angle = t * 0.1 + drag;
    const radius = 19;
    const eye = [currentCenter[0] + Math.cos(angle) * radius, currentCenter[1] + 10 + Math.sin(t * 0.4) * 1.2, currentCenter[2] + Math.sin(angle) * radius];
    const projection = perspective(Math.PI / 4, canvas.width / canvas.height, 0.1, 90);
    const view = lookAt(eye, currentCenter, [0, 1, 0]);
    const viewProjection = m4Multiply(projection, view);

    blocks.forEach((block) => {
      const isActive = activeKeys.includes(block.key);
      const age = Math.max(0, eventClock - block.born);
      const pulse = isActive ? 1 + Math.sin(t * 5 + block.x) * 0.08 : 1;
      const sparkFloat = block.kind === "spark" ? Math.sin(t * 4 + block.x + block.z) * 0.18 + age * 0.03 : 0;
      const bob = isActive && block.y > 3 ? Math.sin(t * 3) * 0.08 : 0;
      const fadeScale = block.kind === "spark" ? Math.max(0.1, block.scale - age * 0.003) : block.scale;
      const model = m4Multiply(m4Translate(block.x, block.y + bob + sparkFloat, block.z), m4Scale(fadeScale * pulse));
      gl.uniformMatrix4fv(uMatrix, false, new Float32Array(m4Multiply(viewProjection, model)));
      gl.uniform3fv(uColor, new Float32Array(block.color));
      gl.drawArrays(gl.TRIANGLES, 0, 36);
    });

    requestAnimationFrame(render);
  }

  sceneEvent("awake keppylab", ["keppylab"]);
  requestAnimationFrame(render);
})();
