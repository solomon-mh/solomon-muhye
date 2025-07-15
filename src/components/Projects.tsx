import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import placeHolderImage from "../assets/sample.png";

const projects = [
  {
    title: "Smart Pharmacy Finder",
    description:
      "A location-based pharmacy search engine with real-time availability, search history, and fuzzy logic.",
    tech: ["React", "NestJS", "MongoDB", "Leaflet", "TailwindCSS"],
    demoLink: "https://pharmacyfinder.example.com",
    githubLink: "https://github.com/solomon/pharmacy-finder",
    image: "https://via.placeholder.com/600x350?text=Smart+Pharmacy+Finder",
  },
  {
    title: "Invoice Manager",
    description:
      "Advanced invoice creation and allocation system with budget tracking, AC/RC support, and Firebase auth.",
    tech: ["React", "NestJS", "MongoDB", "Firebase"],
    demoLink: "https://invoicemanager.example.com",
    githubLink: "https://github.com/solomon/invoice-manager",
    image: "https://via.placeholder.com/600x350?text=Invoice+Manager",
  },
  {
    title: "SkillBridge Portfolio",
    description:
      "A premium developer portfolio with Upwork-style branding, animation, dark mode, and floating UI elements.",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
    demoLink: "https://solomonportfolio.dev",
    githubLink: "https://github.com/solomon/skillbridge-portfolio",
    image: "https://via.placeholder.com/600x350?text=SkillBridge+Portfolio",
  },
  {
    title: "Cash Flow Tracker",
    description:
      "Visualize, allocate, and manage cash flow through interactive dashboards and accounting logic.",
    tech: ["React", "NestJS", "Mongoose", "Chart.js"],
    demoLink: "https://cashflow.example.com",
    githubLink: "https://github.com/solomon/cashflow-tracker",
    image: "https://via.placeholder.com/600x350?text=Cash+Flow+Tracker",
  },
  {
    title: "Case Study: Budget MAE System",
    description:
      "End-to-end financial planning system using default MAEs and budget allocation via user toggles.",
    tech: ["React", "NestJS", "MongoDB", "Framer Motion"],
    demoLink: "https://budgetmae.example.com",
    githubLink: "https://github.com/solomon/budget-mae",
    image: "https://via.placeholder.com/600x350?text=Budget+MAE+Case+Study",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 transition-colors duration-500">
      <div className="mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          🚀 Projects
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-xl bg-gray-50 dark:bg-gray-800 hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-56 object-cover"
                onError={(e) => {
                  e.currentTarget.src = placeHolderImage;
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 mb-4">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-white">
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-green-600 dark:bg-green-500 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  <a
                    href={proj.githubLink}
                    className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                    target="_blank"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={proj.demoLink}
                    className="text-sm text-green-600 hover:underline flex items-center gap-1"
                    target="_blank"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
