<div align="center">

# Kanishk Verma — Portfolio

### 🌐 **[kannisshk.pages.dev](https://kannisshk.pages.dev)**

Illustrator working at the intersection of hand-crafted editorial style and
modern AI tooling — bright, clean, curriculum-ready artwork for children's
textbooks and educational publishing.

`Astro 5` · `Tailwind CSS 4` · `Cloudflare Pages`

</div>

---

> **Looking for the site, not the code?** → **[kannisshk.pages.dev](https://kannisshk.pages.dev)**
> This repository is the source that builds it.

## What's on the site

**4 books · 37 chapters & units · 230+ illustrations**, presented as case studies:

| Case study | |
|---|---|
| [Grade-4 Science](https://kannisshk.pages.dev/work/jaipuria-science-textbook/) | Full textbook set across all 13 chapters — openers, classroom scenes, science diagrams, two recurring hero characters |
| [Grade-3 Science](https://kannisshk.pages.dev/work/jaipuria-science-grade3/) | Chapter-by-chapter set — human body, food, plants, animals, weather, soil, birds, the night sky |
| [English Literature, Grade 1](https://kannisshk.pages.dev/work/english-literature-grade1/) | Full-book set — seaside day out, phonics word-play, a night-sky adventure, village animal tales |
| [English Literature, Grade 2](https://kannisshk.pages.dev/work/english-literature-grade2/) | Folktales, a moonlit fantasy, a bird field-guide, travel writing, classroom scenes |

## How the artwork was made

The illustrations on this site were produced with an agent-orchestrated
pipeline — manuscript in, print-ready artwork out, with enforced style and
character consistency across hundreds of assets.

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
