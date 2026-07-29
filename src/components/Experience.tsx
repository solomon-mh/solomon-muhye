import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ExperienceProject {
  name: string;
  description: string;
  demoLink?: string;
  githubLink?: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  details: string;
  projects: ExperienceProject[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Full-Stack Developer",
    company: "Eagle Tech Apps",
    period: "2023 – 2026",
    details:
      "Built modern UIs with React, TailwindCSS. Created APIs and implemented complex backend logic using Nest.js and MongoDB and AWS for storage.",
    projects: [
      {
        name: "SaaS Enterprise ERP",
        description: "Real-time resource management platform.",
        demoLink: "https://example.com/saas-erp-demo",
        githubLink: "https://github.com/solomon-mh/saas-erp",
      },
      {
        name: "Global E-commerce Dashboard",
        description: "High-performance analytics for vendors.",
        demoLink: "https://example.com/ecommerce-dashboard-demo",
        githubLink: "https://github.com/solomon-mh/ecommerce-dashboard",
      },
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    period: "2023 – Present",
    details:
      "Delivered 10+ successful freelance projects with consistent 5-star client satisfaction. Built scalable apps using MERN/V stack, Next.js, Nuxt.js, and NestJS.",
    projects: [
      {
        name: "Batjet - Financial Management Systems",
        description:
          "AI-powered financial management system for businesses located in Italy.",
        demoLink: "https://example.com/batjet-demo",
        githubLink: "https://github.com/solomon-mh/batjet",
      },
      {
        name: "PMS - Property Management System",
        description:
          "Real-time hotel booking and management system for hotels, flights, and tours located in Australia.",
        demoLink: "https://example.com/pms-demo",
        githubLink: "https://github.com/solomon-mh/pms",
      },
    ],
  },
  {
    role: "LLM Trainer on Turing",
    company: "Turing",
    period: "2026",
    details:
      "Managed and curated datasets for training and fine-tuning Large Language Models, ensuring data quality, consistency, and proper preprocessing. Worked on Turing’s Human+Agent Productivity Index (HAPI).",
    projects: [
      {
        name: "HAPI",
        description: "Measuring human-agent synergy in productivity.",
      },
      {
        name: "RLHF Data Pipeline",
        description: "Curation for reinforcement learning from human feedback.",
      },
    ],
  },
  {
    role: "Software Engineering",
    company: "BIT, Bahir Dar University",
    period: "5 Years",
    details:
      "Completed a 5-year Software Engineering degree. Strong foundations in programming, system design, software architecture, and databases.",
    projects: [
      {
        name: "Fetanfews - Pharmacy Locator",
        description: "Location-based real-time medicine availability search.",
        githubLink: "https://github.com/solomon-mh/fetanfews",
      },
      {
        name: "Mikander - Voice AI EdTech",
        description: "Interactive voice-enabled education platform.",
        demoLink: "https://mikander.vercel.app/",
        githubLink: "https://github.com/solomon-mh/mikander",
      },
    ],
  },
  {
    role: "Web Intern",
    company: "ICT4D BIT, Bahirdar University",
    period: "3 months",
    details:
      "Developed a student internship portal using React, Django, and Postgres. Customizable system enabling students to secure internship opportunities.",
    projects: [
      {
        name: "Internship Portal",
        description:
          "Streamlined workflow for university internship placement.",
        githubLink: "https://github.com/DjanCoders/ICT4D_INTERNSHIP_PAGE",
      },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 px-8 scroll-mt-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-green-600 dark:text-green-400"
      >
        Professional Experience
      </motion.h2>

      <div className="relative max-w-4xl mx-auto pl-6">
        {/* Gradient vertical line */}
        <div
          className="absolute left-0 top-0 h-full w-[2px] 
               bg-gradient-to-b from-green-500 via-green-300 to-gray-50
               dark:from-green-600 dark:via-green-300 dark:to-gray-900"
        />
        {experiences.map((exp, i) => (
          <div key={i} className="mb-16 relative group">
            {/* Top dot */}
            <div className="w-3.5 h-3.5 bg-green-500 dark:bg-green-400 rounded-full absolute -left-7.5 top-2 group-hover:scale-125 transition-transform" />

            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {exp.role}
              </h3>
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {exp.company} • {exp.period}
              </span>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {exp.details}
              </p>

              {/* Projects */}
              {exp.projects && exp.projects.length > 0 && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {exp.projects.map((project, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3 }}
                      className="p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-green-500/10 dark:border-green-400/10 shadow-sm backdrop-blur-sm group/project"
                    >
                      <h4 className="text-sm font-bold text-green-600 dark:text-green-400 flex items-center gap-1">
                        {project.name}
                        <span className="opacity-0 group-hover/project:opacity-100 transition-opacity text-xs">
                          ↗
                        </span>
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Preview / GitHub links */}
                      {(project.demoLink || project.githubLink) && (
                        <div className="mt-2 flex gap-4 text-xs font-semibold">
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1 text-gray-800 dark:text-gray-200 hover:text-green-500"
                            >
                              <FaGithub /> GitHub
                            </a>
                          )}
                          {project.demoLink && (
                            <a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1 text-green-600 dark:text-green-400 hover:underline"
                            >
                              <FaExternalLinkAlt /> Preview
                            </a>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
