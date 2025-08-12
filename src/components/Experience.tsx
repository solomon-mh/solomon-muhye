import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Eagle Apps Tech",
    period: "2024 – Present",
    details:
      "Built modern UIs with React, TailwindCSS. Create Apis and implement complex backend logic using Nest.js and MongoDB and AWS for storage.",
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Upwork",
    period: "2023 – Present",
    details:
      "Delivered over 5+ successful freelance projects, earning $1.6k+ with 5-star client satisfaction. Focused on MERN & NestJS stack.",
  },
  {
    role: "Software Engineering",
    company: "BIT, Bahir Dar University",
    period: "5 Years",
    details:
      "Completed a 5-year Software Engineering degree at BIT, Bahir Dar University. strong foundations in programming, system design, software architecture, and databases.This journey sparked my passion for creating scalable and real-world software solutions.",
  },
  {
    role: "Web Intern",
    company: "ICT4D BIT, Bahirdat University",
    period: "2021 – 2022",
    details:
      "Developed student internship portal, using React,Django and Postgres. Customisable student internship portal that allow student to get an internship opportunity through our portal.learned and implemented Git workflows, REST APIs, and agile collaboration.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-green-600 dark:text-green-400"
      >
        Experience
      </motion.h2>

      <div className="relative max-w-4xl mx-auto border-l-2 border-green-500 dark:border-green-400 pl-6">
        {experiences.map((exp, i) => (
          <div key={i} className="mb-10 group">
            {/* Timeline dot */}
            <div className="w-4 h-4 bg-green-500 dark:bg-green-400 rounded-full absolute -left-2.5 top-1.5 group-hover:scale-125 transition-transform" />

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {exp.role}
            </h3>
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {exp.company} • {exp.period}
            </span>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {exp.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
