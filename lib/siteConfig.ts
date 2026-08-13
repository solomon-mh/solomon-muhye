export const siteConfig = {
  name: "Solomon Muhye",
  title: "Solomon Muhye | Senior Fullstack Developer",
  description:
    "Solomon Muhye is a Senior Fullstack Developer building scalable web and mobile apps with React, Next.js and Node.js for startups and international clients.",
  // Short, punchy variant for surfaces with tight character limits (OG/Twitter cards).
  shortDescription:
    "Senior Fullstack Developer building web & mobile apps with React, Next.js and Node.js.",
  url: "https://solomon.is-a.dev/",
  ogImage: "/favicon.png",
  author: "Solomon Muhye",
  role: "Senior Fullstack Developer",
  email: "solomon.muhye.wd@gmail.com",
  // Real, on-page specialties — used to seed keywords/JSON-LD naturally, not to fabricate new claims.
  specialties: [
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Vue.js",
    "Nuxt.js",
    "React Native",
  ],
  keywords: [
    "Solomon Muhye",
    "Fullstack Developer",
    "Senior Fullstack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Freelance Web Developer",
    "React Native Developer",
    "Software Engineer",
    "Web Developer Portfolio",
  ],
  links: {
    github: "https://github.com/solomon-mh",
    linkedin: "https://linkedin.com/in/solomonmuhye",
    telegram: "https://t.me/SolomonMuhye",
    resume: "https://flowcv.com/resume/4s26k4fimci0",
  },
};

// Normalized, trailing-slash-free base URL — use this when concatenating paths.
export const siteUrl = siteConfig.url.replace(/\/$/, "");

export type SiteConfig = typeof siteConfig;
