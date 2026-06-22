// Single source of truth for the portfolio content.
export const profile = {
  name: "Pankaj Kumar",
  firstName: "Pankaj",
  roles: ["Full-Stack Developer", "AI/ML Explorer", "DSA Problem-Solver", "Curious Builder"],
  headline: "I build things for the web.",
  subheadline:
    "CSE @ NIT Durgapur · Full-stack developer turning ideas into fast, polished products — and diving deep into AI/ML and Data Science.",
  location: "Sitamarhi, Bihar, India",
  email: "pankaj721784@gmail.com",
  // Update these if your handles differ.
  socials: {
    github: "https://github.com/pankaj72178",
    linkedin: "https://www.linkedin.com/in/pankaj-kumar721/",
    codechef: "https://www.codechef.com/users/pankaj721784",
  },
  badges: ["3⭐ CodeChef", "NIT Durgapur", "Open to internships"],
};

export const about = {
  paragraphs: [
    "I’m a Computer Science & Engineering student at NIT Durgapur, driven by one question I keep asking: “How does this actually work?” That curiosity pulled me into software and keeps me building.",
    "I’ve focused on a genuine full-stack foundation — React on the frontend, Node/Express + MongoDB on the backend — while sharpening problem-solving through DSA in Python and C. Right now I’m going deeper into Data Science: working with data, drawing insights, and building things that make smarter decisions.",
    "What I enjoy most is the moment an idea becomes a working project — debugging until it clicks, competing in coding challenges, and shipping with people in hackathons and tech communities.",
  ],
  stats: [
    { value: "3⭐", label: "CodeChef" },
    { value: "9.24", label: "CGPA @ NIT DGP" },
    { value: "3+", label: "Shipped projects" },
    { value: "10+", label: "Technologies" },
  ],
};

export type Tech = { name: string; color: string };
export const techStack: Tech[] = [
  { name: "React", color: "#61dafb" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "Node.js", color: "#3c873a" },
  { name: "Express", color: "#cccccc" },
  { name: "MongoDB", color: "#47a248" },
  { name: "Tailwind", color: "#38bdf8" },
  { name: "Python", color: "#3776ab" },
  { name: "C", color: "#5c6bc0" },
  { name: "Git", color: "#f1502f" },
  { name: "Vercel", color: "#ffffff" },
  { name: "JWT", color: "#fb015b" },
  { name: "OAuth", color: "#4285f4" },
  { name: "REST", color: "#a855f7" },
  { name: "AI/ML", color: "#10b981" },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  live?: string;
  github?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Folo",
    tagline: "Instagram-style social app",
    description:
      "A full-stack social platform: auth (email + Google), posts & carousels, stories, encrypted DMs with typing/presence, likes, comments, bookmarks, AI captions/moderation, and a premium dark UI.",
    tags: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Tailwind"],
    live: "https://instagram-copy-beta.vercel.app/",
    github: "https://github.com/pankaj72178/Instagram-copy",
    accent: "#6366f1",
  },
  {
    title: "Pachtaki Yadu",
    tagline: "Digital Village Governance Portal",
    description:
      "A civic-tech platform where citizens report local issues online and admins manage everything from one dashboard — role-based access, email confirmations, and a public anonymized complaint tracker (Pending → Ongoing → Completed).",
    tags: ["JavaScript", "Node.js", "MongoDB", "Google OAuth"],
    live: "https://pachtaki-yadu-new.vercel.app/",
    github: "https://github.com/pankaj72178",
    accent: "#a855f7",
  },
  {
    title: "MERN To-Do",
    tagline: "Full-stack task manager",
    description:
      "A secure task manager with JWT + bcrypt auth and Google Sign-In, full CRUD, per-user tasks, and a glassmorphism UI with 3D effects — deployed serverlessly on Vercel with MongoDB Atlas.",
    tags: ["React", "Express", "MongoDB", "JWT", "Vercel"],
    live: "https://mern-to-do-list-sigma.vercel.app/login",
    github: "https://github.com/pankaj72178",
    accent: "#22d3ee",
  },
];

export type JourneyEntry = {
  period: string;
  title: string;
  tagline: string;
  bullets: string[];
  tags: string[];
  accent: string;
};

// Projects framed as a journey — oldest first, building up to "now".
export const journey: JourneyEntry[] = [
  {
    period: "2024",
    title: "MERN To-Do — first full-stack app",
    tagline: "Where it clicked",
    bullets: [
      "Built a secure task manager with JWT + bcrypt auth and Google Sign-In.",
      "Full CRUD with per-user tasks and a glassmorphism UI.",
      "Shipped it serverlessly on Vercel with MongoDB Atlas.",
    ],
    tags: ["React", "Express", "MongoDB", "JWT"],
    accent: "#22d3ee",
  },
  {
    period: "2025",
    title: "Pachtaki Yadu — civic portal",
    tagline: "Tech for my hometown",
    bullets: [
      "Let citizens report local issues and admins manage them from one dashboard.",
      "Built role-based access, email confirmations, and a public status tracker.",
    ],
    tags: ["JavaScript", "Node.js", "MongoDB", "Google OAuth"],
    accent: "#a855f7",
  },
  {
    period: "2025",
    title: "Folo — social platform",
    tagline: "Shipping a full product, solo",
    bullets: [
      "Built an Instagram-style app end to end: auth, posts, stories, feeds.",
      "Added encrypted DMs with typing & presence, plus AI captions and moderation.",
      "Designed a premium dark UI and deployed on Vercel.",
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "MongoDB"],
    accent: "#6366f1",
  },
  {
    period: "Now",
    title: "Leveling up",
    tagline: "What's next",
    bullets: [
      "Going deeper into Data Science — data wrangling, insights, and ML.",
      "Sharpening DSA in C & Python — 3★ on CodeChef and climbing.",
    ],
    tags: ["Python", "DSA", "Data Science"],
    accent: "#10b981",
  },
];

export const education = [
  {
    school: "National Institute of Technology, Durgapur",
    detail: "B.Tech — Computer Science & Engineering · SGPA 9.43 (Sem 1) · 9.05 (Sem 2)",
    period: "2025 – 2029",
  },
  { school: "Bairgania High School", detail: "BSEB · Class 12 (PCM) · 85.6%", period: "2023 – 2025" },
  { school: "Sitamarhi Central School", detail: "CBSE · Class 10 · 88.2%", period: "2022 – 2023" },
];
