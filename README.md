<div align="center">

# Kanishk Verma — Portfolio

### 🌐 **[kannisshk.pages.dev](https://kannisshk.pages.dev)**

Generative media engineer. I build the pipelines that turn a manuscript into
print-ready artwork at book scale — style locked across hundreds of assets,
rejects archived with the reason they failed, and cost measured per delivered
image.

`Astro 5` · `Tailwind CSS 4` · `Cloudflare Pages`

</div>

---

> **Looking for the site, not the code?** → **[kannisshk.pages.dev](https://kannisshk.pages.dev)**
> This repository is the source that builds it.

## What's on the site

**5 books · 44 chapters & units · 280+ illustrations**, presented as case studies:

| Case study | |
|---|---|
| [Grade-5 Science](https://kannisshk.pages.dev/work/jaipuria-science-grade5/) | The book with numbers — 58 delivered illustrations from 165 generations, every reject archived and counted |
| [Grade-4 Science](https://kannisshk.pages.dev/work/jaipuria-science-textbook/) | Full textbook set across all 13 chapters — openers, classroom scenes, science diagrams, two recurring hero characters |
| [Grade-3 Science](https://kannisshk.pages.dev/work/jaipuria-science-grade3/) | Chapter-by-chapter set — human body, food, plants, animals, weather, soil, birds, the night sky |
| [English Literature, Grade 1](https://kannisshk.pages.dev/work/english-literature-grade1/) | Full-book set — seaside day out, phonics word-play, a night-sky adventure, village animal tales |
| [English Literature, Grade 2](https://kannisshk.pages.dev/work/english-literature-grade2/) | Folktales, a moonlit fantasy, a bird field-guide, travel writing, classroom scenes |

## How the artwork was made

The illustrations on this site were produced with an agent-orchestrated
pipeline — manuscript in, print-ready artwork out, with enforced style and
character consistency across hundreds of assets, and an automated print-QA gate
that fails the run on wrong DPI, a missing alpha channel, muddy print density
or a white halo on a cut-out.

The Grade-5 book is the one that can prove its own cost: it kept all 107
rejected attempts instead of deleting them, so its 58 delivered illustrations
can be reported honestly at 2.8 generations per asset. The earlier books
overwrote their rejects and cannot be measured the same way.

**That system is open source →
[genai-illustration-pipeline](https://github.com/Kanishk688/genai-illustration-pipeline)**

## Tech

- **[Astro 5](https://astro.build)** — static output, zero client JS by default, so pages load instantly
- **[Tailwind CSS 4](https://tailwindcss.com)** — via the Vite plugin, no config file needed
- **Cloudflare Pages** — hosting, deployed automatically on every push to `main`

Image-heavy portfolios live or die on load time, which is why this is static
Astro rather than a JS framework: the artwork is the payload, so nothing else
is allowed to compete for bandwidth.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output to dist/
npm run preview    # preview the production build
```

Node version is pinned in `.node-version`.

## Structure

```
src/
├─ content.config.ts              content-collection schema
├─ content/projects/*.md          one Markdown file per book — the case studies
├─ pages/
│  ├─ index.astro                 landing — intro, stats, featured work
│  ├─ work.astro                  all case studies
│  └─ work/[...slug].astro        renders each project from the collection
├─ layouts/Layout.astro           page shell
├─ components/Header.astro        nav
└─ styles/global.css
public/                           images and static assets
```

Case studies are a **content collection**, so adding a book is one Markdown file
in `src/content/projects/` — the route, the work index and the featured section
all pick it up automatically. No new page, no template edit.

## Deployment

`main` → Cloudflare Pages, automatically. `netlify.toml` deliberately skips
Netlify builds (`ignore = "exit 0"`) — the site moved to Cloudflare and the
config stays only to stop the old Netlify project burning build minutes.

---

**Contact** — [kanishkverma688@gmail.com](mailto:kanishkverma688@gmail.com) ·
Available for textbook and publishing projects.
