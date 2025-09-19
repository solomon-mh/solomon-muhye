import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import placeHolderImage from "../assets/sample.png";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-16 transition-colors duration-500">
      <div className="mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-green-600 dark:text-green-400"
        >
          Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((proj) => (
            <div className="rounded-xl overflow-hidden shadow-xl bg-gray-50 dark:bg-gray-800 hover:scale-[1.02] transition-transform duration-300">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-56 object-fit"
                onError={(e) => {
                  e.currentTarget.src = placeHolderImage;
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
                  {proj.title}
                </h3>
                <p className="text-base text-gray-700 dark:text-gray-300 mt-2 mb-4">
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
            </div>
          ))}
          {/* <div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: projects.length * 0.1, duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-200 via-gray-300 to-green-600 dark:text-white  dark:from-gray-400 dark:via-gray-400 dark:to-green-400 flex flex-col justify-center items-center p-8 hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold mb-2 text-center">
              <span className="flex items-center justify-center gap-4 my-2">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </span>
              Your Project Goes Here
            </h3>
            <p className="text-center text-sm mb-4">
              Looking for something amazing? Let’s build your next big idea
              together.
            </p>
            <span className="text-xs px-3 py-1 bg-white text-green-600 font-semibold rounded">
              Custom Full-Stack Solutions
            </span>
            <a
              href="#contact"
              className="my-4 border border-green-600 text-green-700 dark:text-white hover:bg-green-100 dark:hover:bg-gray-400 px-6 py-3 rounded-full shadow-md text-lg transition"
            >
              Contact Me
            </a>{" "}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
