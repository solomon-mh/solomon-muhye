import type { JSX } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaLaravel,
  FaAws,
  FaVuejs,
  FaPhp,
} from "react-icons/fa";
import {
  SiPostman,
  SiVercel,
  SiMongodb,
  SiNestjs,
  SiPostgresql,
  SiRender,
  SiNetlify,
  SiNextdotjs,
  SiReact,
  SiFlutter,
  SiNuxtdotjs,
  SiExpress,
  SiMysql,
} from "react-icons/si";

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Tools"
  | "DevOps"
  | "MobileApps";

type SkillItem = { icon: JSX.Element; label: string };
type SkillData = Record<SkillCategory, SkillItem[]>;

export const skillData: SkillData = {
  Frontend: [
    // {
    //   icon: <SiTailwindcss />,
    //   label: "Tailwind CSS",
    // },
    { icon: <FaReact />, label: "React" },
    {
      icon: <SiNextdotjs />,
      label: "Next.js",
    },
    { icon: <FaVuejs />, label: "Vue.js" },
    {
      icon: <SiNuxtdotjs />,
      label: "Nuxt.js",
    },
  ],
  Backend: [
    { icon: <FaNodeJs />, label: "Node.js" },
    { icon: <SiExpress />, label: "Express" },
    { icon: <SiNestjs />, label: "NestJS" },
    { icon: <FaPhp />, label: "PHP" },
    { icon: <FaLaravel />, label: "Laravel" },
  ],
  Database: [
    { icon: <SiMysql />, label: "MySQL" },
    { icon: <SiMongodb />, label: "MongoDB" },
    {
      icon: <SiPostgresql />,
      label: "PostgreSQL",
    },
  ],
  Tools: [
    { icon: <FaGitAlt />, label: "Git" },
    { icon: <SiPostman />, label: "Postman" },
    {
      icon: <SiVercel />,
      label: "Vercel",
    },
    { icon: <SiNetlify />, label: "Netlify" },
    { icon: <SiRender />, label: "Render" },
  ],
  DevOps: [
    { icon: <FaDocker />, label: "Docker" },
    {
      icon: <SiVercel />,
      label: "CI/CD",
    },
    { icon: <FaAws />, label: "AWS" },
  ],
  MobileApps: [
    { icon: <SiReact />, label: "React Native" },
    { icon: <SiFlutter />, label: "Flutter" },
  ],
};
