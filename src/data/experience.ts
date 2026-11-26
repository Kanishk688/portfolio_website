// EXPERIENCE — resume se (Kanishk_Kumar_Verma_Resume.pdf). Resume badle to yahan bhi badlo.
// **double stars** = bold (sabse zaroori numbers/kaam).

export type Job = {
  role: string;
  org: string;
  orgUrl?: string;
  when: string;
  where: string;
  context: string;
  numbers: { n: string; label: string }[];
  points: string[];
};

export const jobs: Job[] = [
  {
    role: 'Assistant Manager — AI Initiatives',
    org: 'Possibility Edutech (Jaipuria Group)',
    when: 'Feb 2026 – Present',
    where: 'Delhi NCR',
    context: 'Curriculum and content arm of the Jaipuria Group, serving 60+ schools.',
    numbers: [
      { n: '1,500+', label: 'print-ready assets shipped' },
      { n: '10+', label: 'textbooks illustrated' },
      { n: '0', label: 'files back from press' },
    ],
    points: [
      '**Architected an agent-orchestrated illustration pipeline (Claude Code + MCP)** that takes a textbook from .docx manuscript to **300 DPI print-ready artwork**; shipped **1,500+ assets** and illustrated **10+ textbooks**.',
      'Designed **task-based model routing** (GPT Image for new compositions, Nano Banana Pro for identity-safe edits, Seedream for character turnarounds, Magnific for 4× print upscaling), chosen after evaluating **10+ image and video models**.',
      'Held **style and character consistency across whole books** with a style bible and explicit “NOT-list”, a **106-colour machine-readable palette**, style-anchor and hero references on **100% of generations**, and chapter contact sheets for drift review.',
      'Replaced manual checks with an **automated print-QA gate** in Python (Pillow, NumPy, SciPy): **7 checks** including DPI, alpha, white-fringe halos and muddy darks, covered by **19 pytest tests** in CI; **no file has come back from press**.',
      'Made **production cost measurable** by archiving every reject with its failure reason: the Grade-5 Science book took 165 generations for 58 plates (**2.8 generations per asset, 47% first-pass yield**).',
      'Produce **AI-based marketing creatives and chapter-summary videos**: script → ElevenLabs narration → Veo clips → FFmpeg assembly.',
      '**Trained team members** who worked manually in CorelDRAW, Photoshop and Premiere Pro to use an **AI creative stack**.',
    ],
  },
  {
    role: 'AI & IoT Generalist (Intern → Full-Time)',
    org: 'Wippi (formerly Zippy)',
    when: 'Nov 2024 – Dec 2025',
    where: 'Bengaluru',
    context:
      'Early team member at a screen-free, voice-AI kids’ hardware startup. Wippi has since raised a $1.2M seed round led by 12 Flags (Aug 2026) and sells Wippi Radio, Character Cards and illustrated storybooks direct to consumers.',
    numbers: [
      { n: '25+', label: 'illustrated comics' },
      { n: '30+ hrs', label: 'multi-character voiced stories' },
    ],
    points: [
      'Produced **25+ illustrated comics** (incl. Alice in Wonderland, The Little Mermaid, Doctor Dolittle) **before image models had character-reference features**, holding characters on-model through reference sheets and curated selection, and typesetting all dialogue in InDesign.',
      '**Automated visual-story generation** in Python with text-to-image APIs, cutting manual production time per title.',
      'Built a **multi-character voice engine on ElevenLabs** with automatic voice casting, pacing control and retry logic; voiced every comic with it (about 1 hour of audio each), **30+ hours of multi-character stories** in total.',
      'Managed the **AWS S3 content library** and **RFID/NFC card-to-story mapping**; validated CMS-to-device sync and ran **firmware QA** (flashing, FOTA validation, serial-log diagnostics) directly with the founders.',
    ],
  },
];

export const projects: Job[] = [
  {
    role: 'Unseen.3d — Code-Rendered 3D Short-Form Video',
    org: 'instagram.com/unseen.3d',
    orgUrl: 'https://www.instagram.com/unseen.3d/',
    when: 'Oct 2026 – Present',
    where: 'Own project',
    context: '3D science and defence explainers in Hinglish, built and rendered entirely in code.',
    numbers: [{ n: '1.5M+', label: 'organic views on the best reel' }],
    points: [
      'Build 3D reels **entirely in code instead of paying per clip for video models**: Three.js for scenes, cameras and animation; shaders for materials, lighting and effects; Blender for modelling; Remotion and HyperFrames for **frame-accurate, deterministic rendering**; FFmpeg for encoding; ElevenLabs for narration; Claude Code driving the build.',
      'Every reel is defined in code, so it can be **versioned, re-rendered and edited parameter by parameter**, not re-cut by hand.',
    ],
  },
  {
    role: 'GenAI Illustration Pipeline — Open Source',
    org: 'github.com/Kanishk688/genai-illustration-pipeline',
    orgUrl: 'https://github.com/Kanishk688/genai-illustration-pipeline',
    when: '2026',
    where: 'MIT licence',
    context: 'The public version of the production system behind the textbooks.',
    numbers: [{ n: '13', label: 'Python scripts, CI on GitHub Actions' }],
    points: [
      '**Public, MIT-licensed** version of the production system: CLAUDE.md and a versioned skill as the agent’s playbook, **13 Python scripts** (brief extraction, cut-out, DPI, QA, cost reporting), runs end to end on synthetic fixtures with **GitHub Actions CI**.',
      '**MCP integrations:** Magnific, Photoshop, Google Drive (reviewer comments) and Playwright.',
    ],
  },
];
