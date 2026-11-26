// VIDEOS — site pe dikhne wali har video yahan ek entry hai.
//
// Nayi video add karni ho to:
//   1. public/video/<id>.mp4      (720p web copy)
//   2. public/video/<id>.webp     (poster — ek achha frame)
//   3. public/video/<id>-loop.mp4 (6 sec ka bina-awaaz preview, hover pe chalta hai)
//   4. neeche list me ek entry. Bas.
//
// group = home page pe kis hisse me dikhegi.

export type Video = {
  id: string;
  title: string;          // English naam — recruiter ke liye
  original?: string;      // asli Hinglish naam jo Instagram pe tha
  summary: string;        // 1–2 line: video kis baare me hai
  made: string;           // kab bani, e.g. "Nov 2026"
  length: string;         // "1:24"
  tools: string[];
  group: 'explainer' | 'chapter';
  wide?: boolean;         // 16:9 video (baaki sab 9:16 reels hain)
  link?: string;          // Instagram post, agar post hui ho
};

export const videos: Video[] = [
  {
    id: 'agni5',
    title: 'Agni-5: one missile, many targets',
    original: 'Agni-5',
    summary: 'How a single Agni-5 launch can carry several warheads to separate targets, from canister launch to re-entry, built as one continuous 3D flight.',
    made: 'Nov 2026',
    length: '0:34',
    tools: ['Blender', 'Python', 'Mantaflow smoke sim', 'AI voice'],
    group: 'explainer',
    link: 'https://www.instagram.com/reel/DgLLbBRIM0Z/',
  },
  {
    id: 'brahmos',
    title: 'BrahMos: five metres above the sea',
    original: 'BrahMos',
    summary: 'Why a sea-skimming cruise missile is so hard to stop: the radar horizon, the 5 m flight height and the last seconds before impact.',
    made: 'Nov 2026',
    length: '0:36',
    tools: ['Blender', 'Python', 'AI voice'],
    group: 'explainer',
    link: 'https://www.instagram.com/reel/DgIqO1voodO/',
  },
  {
    id: 'helmet',
    title: 'The F-35 helmet that sees through the plane',
    original: 'Pilot ka Helmet',
    summary: 'A pilot looks down and the floor disappears. How the helmet stitches outside cameras into what the pilot sees.',
    made: 'Nov 2026',
    length: '0:30',
    tools: ['three.js', 'HyperFrames', 'AI voice', 'AI music'],
    group: 'explainer',
  },
  {
    id: 'ev',
    title: 'How an electric car works',
    original: 'Electric Gaadi',
    summary: 'Battery pack, inverter, motor and regenerative braking, shown inside a transparent car as it drives.',
    made: 'Nov 2026',
    length: '1:08',
    tools: ['Blender', 'Python', 'AI voice'],
    group: 'explainer',
  },
  {
    id: 'doodh',
    title: 'Why milk boils over and water doesn’t',
    original: 'Doodh vs Paani',
    summary: 'Two pots on one stove. The cream layer acts as a lid, steam gets trapped, and the milk rises. Ends with the desi fix.',
    made: 'Nov 2026',
    length: '0:39',
    tools: ['Blender', 'Python', 'AI voice'],
    group: 'explainer',
  },
  {
    id: 'cable',
    title: 'The undersea cable under a Mumbai beach',
    original: 'Samundar ki Cable',
    summary: 'A boy sits on Versova beach, unaware that most of India’s internet runs through the sand under him.',
    made: 'Nov 2026',
    length: '0:43',
    tools: ['Blender', 'Python', 'AI voice'],
    group: 'explainer',
  },
  {
    id: 'laser',
    title: 'Why you never point a laser at a plane',
    original: 'Laser aur Vimaan',
    summary: 'A thin green line from a wedding rooftop spreads into a blinding flash in the cockpit, a few thousand feet up.',
    made: 'Nov 2026',
    length: '0:30',
    tools: ['Blender', 'three.js', 'HyperFrames', 'AI voice'],
    group: 'explainer',
    link: 'https://www.instagram.com/reel/DfSobEUIHy-/',
  },
  {
    id: 'aankh',
    title: 'The floaters in your eye',
    original: 'Aankh ke Keede',
    summary: 'The little threads you see against the sky: what they really are, why they run away when you look, and when they are a warning sign.',
    made: 'Nov 2026',
    length: '1:13',
    tools: ['three.js', 'HyperFrames', 'AI voice'],
    group: 'explainer',
  },
  {
    id: 'yamuna',
    title: 'Why the Yamuna foam doesn’t pop',
    original: 'Yamuna ka Jhaag',
    summary: 'The white foam on the river during Chhath, down to the detergent molecules that keep each bubble from bursting.',
    made: 'Nov 2026',
    length: '1:03',
    tools: ['three.js', 'HyperFrames', 'AI voice'],
    group: 'explainer',
    link: 'https://www.instagram.com/reel/DfQAhS9ojLx/',
  },
  {
    id: 'saans',
    title: 'One breath of Delhi air',
    original: 'Ek Saans Delhi Ki',
    summary: 'Follows a single breath from the winter smog layer over the city into the lungs and on into the blood.',
    made: 'Oct 2026',
    length: '1:03',
    tools: ['three.js', 'HyperFrames', 'AI voice'],
    group: 'explainer',
    link: 'https://www.instagram.com/reel/DfFK_g6BKaB/',
  },
  {
    id: 'machhar',
    title: 'A mosquito bite is surgery',
    original: 'Machhar ka Operation',
    summary: 'Six needles, a hunt for a blood vessel and a pump. What actually happens in the minute a mosquito bites you.',
    made: 'Oct 2026',
    length: '1:04',
    tools: ['three.js', 'HyperFrames', 'AI voice'],
    group: 'explainer',
    link: 'https://www.instagram.com/reel/DfCb1tuorow/',
  },
  {
    id: 'gangajal',
    title: 'The virus that keeps Gangajal clean',
    original: 'Gangajal ka Shikari',
    summary: 'In 1896 a British scientist noticed that Ganga water killed cholera. The answer was a bacteriophage, shown here from bottle to molecule.',
    made: 'Oct 2026',
    length: '1:24',
    tools: ['three.js', 'HyperFrames', 'AI voice'],
    group: 'explainer',
    link: 'https://www.instagram.com/reel/DfAnz19IrWT/',
  },

  // ---- textbook chapter video ----
  {
    id: 'eclipse',
    title: 'Grade-5 Science, Chapter 10: eclipses',
    summary: 'A pilot for turning a textbook chapter into a narrated video, using the chapter’s own illustrations and characters.',
    made: 'Oct 2026',
    length: '1:34',
    tools: ['HyperFrames', 'AI voice', 'Book illustrations'],
    group: 'chapter',
    wide: true,
  },
];
