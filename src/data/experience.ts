// EXPERIENCE — chhote cards: kaam ki images + ek line + bade numbers + link.
// Poori detail resume me hai; website pe sirf utna jo 5 second me samajh aaye.

export type Exp = {
  role: string;
  org: string;
  when: string;
  line: string;                          // sirf EK line
  numbers: { n: string; label: string }[];
  images: string[];                      // 3 images — us job me bana asli kaam
  link: { href: string; label: string; external?: boolean };
};

export const experience: Exp[] = [
  {
    role: 'Assistant Manager, AI Initiatives',
    org: 'Possibility Edutech (Jaipuria Group)',
    when: 'Feb 2026 – Present',
    line: 'Built the AI pipeline that illustrates the group’s school textbooks, from manuscript to print.',
    numbers: [
      { n: '1,500+', label: 'illustrations' },
      { n: '10+', label: 'textbooks' },
      { n: '60+', label: 'schools' },
    ],
    images: ['/work/g5-c8-market-story-scene.webp', '/work/m4-c8-music-festival.webp', '/work/g4-c9-opening.webp'],
    link: { href: '/#illustration', label: 'See the textbooks' },
  },
  {
    role: 'Creator',
    org: 'Unseen.3d on Instagram',
    when: 'Oct 2026 – Present',
    line: '3D science and defence explainers, rendered entirely in code.',
    numbers: [
      { n: '1M+', label: 'views on best reel' },
      { n: '12', label: 'reels shown here' },
    ],
    images: ['/video/agni5.webp', '/video/gangajal.webp', '/video/ev.webp'],
    link: { href: '/#videos', label: 'Watch the videos' },
  },
  {
    role: 'AI & IoT Generalist',
    org: 'Wippi, Bengaluru',
    when: 'Nov 2024 – Dec 2025',
    line: 'Made illustrated comics for a voice-AI kids’ startup and voiced them with my ElevenLabs engine.',
    numbers: [
      { n: '25+', label: 'comics' },
      { n: '30+ hrs', label: 'voiced stories' },
    ],
    images: ['/work/comic-mermaid-v1-p01.webp', '/work/comic-alice-v1-p01.webp', '/work/comic-velveteen-v1-p01.webp'],
    link: { href: '/#comics', label: 'See the comics' },
  },
];
