import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// "projects" = tumhaare saare illustration projects ka group.
// loader = src/content/projects/ ke andar har .md file = ek project.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),

  // schema = har project me ye fields HONE chahiye (rules).
  schema: z.object({
    title: z.string(),                          // project ka naam
    summary: z.string(),                        // 1-2 line description
    cover: z.string(),                          // main image ka path, e.g. /work/xyz.jpg
    // gallery ka har item ya to sirf image-path (string) ho sakta hai,
    // ya ek object jisme image ke saath chapter aur caption bhi ho.
    gallery: z.array(
      z.union([
        z.string(),
        z.object({
          src: z.string(),                      // image path
          chapter: z.string().optional(),       // e.g. "Chapter 5 — Weather"
          caption: z.string().optional(),       // 1 line: image ka matlab
        }),
      ])
    ).default([]),
    tags: z.array(z.string()).default([]),      // Textbook, Grade 4, Science...
    date: z.date(),                             // kab banaya
    featured: z.boolean().default(false),       // home page pe dikhana hai?

    // ---- KAB AUR KIN HAALAAT ME BANA ----
    // AI tooling har chhe mahine me badalta hai. Bina date aur bina
    // "us waqt kya mushkil tha" ke, purana achha kaam aaj kamzor lagta hai —
    // dekhne wala aaj ke standard se tolta hai. Isliye har project apne
    // waqt ki capability apne saath leke chalta hai.
    company: z.string().optional(),             // "Wippi (Gen Alpha Kids First Media Tech)"
    role: z.string().optional(),                // wahan kya kiya
    tools: z.array(z.string()).default([]),     // us waqt ke actual tools
    eraNote: z.string().optional(),             // us waqt ki asli rukawat — bahana nahi, spec
    externalUrl: z.string().optional(),         // poora kaam kahin aur pada hai (e.g. Drive)
    externalLabel: z.string().optional(),       // us link pe kya likha ho
  }),
});

export const collections = { projects };
