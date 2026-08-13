export const siteConfig = {
  name: "Solomon Muhye",
  title: "Solomon Muhye | Senior Fullstack Developer",
  description:
    "Solomon Muhye is a Senior Fullstack Developer building scalable, high-performance web and mobile apps with React, Next.js, Node.js and NestJS for startups and businesses worldwide.",
  url: "https://solomon.is-a.dev/",
  ogImage: "/favicon.png",
  author: "Solomon Muhye",
  role: "Senior Fullstack Developer",
  email: "solomon.muhye.wd@gmail.com",
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
