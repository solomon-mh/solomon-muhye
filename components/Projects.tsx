"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projects";
import { useState } from "react";

const Projects = () => {
  const initialCount = 3; // how many to show at first
  const [projectListsLength, setProjectListsLength] = useState(initialCount);
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    if (showMore) {
      setProjectListsLength(initialCount ?? 3); // collapse
    } else {
      setProjectListsLength(projects.length); // expand
    }
    setShowMore(!showMore);
  };

  return (
    <section id="projects" className="py-20">
      <div className="px-4">
        <h2 className="text-4xl font-extrabold text-green-600 dark:text-green-400 text-center mb-16">
          Personal Projects
        </h2>

        <div className="relative pl-10">
          {/* Main vertical line with gradient */}
          <div
            className="absolute left-4 top-0 h-full w-[2px]
                       bg-gradient-to-b from-green-500 via-green-300 to-gray-50
                       dark:from-green-600 dark:via-green-300 dark:to-gray-900"
          />

          <div className="space-y-16">
            {projects.slice(0, projectListsLength).map((proj) => (
              <div key={proj.title} className="relative group">
                {/* Dot for each project */}
                <div className="w-3.5 h-3.5 bg-green-500 dark:bg-green-400 rounded-full absolute -left-7.5 top-2 group-hover:scale-125 transition-transform" />

                {/* Content */}
                <div className="">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {proj.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {proj.description}
                  </p>

                  {/* Tech stack inline */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {proj.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium bg-gray-100 text-green-700
                                   dark:bg-gray-800 dark:text-white px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-4 flex gap-6 text-sm font-semibold">
                    <a
                      href={proj.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-green-500"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={proj.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:underline"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Show More / Show Less button */}
        {projects.length > initialCount && (
          <div className="mt-12 text-center">
            <button
              onClick={toggleShowMore}
              className="px-6 py-2 text-sm font-semibold rounded-lg
                         bg-gray-200 dark:text-white hover:bg-gray-300
                         dark:bg-gray-800 dark:hover:bg-gray-700
                         transition-colors"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
