import { useState } from "react";
import { skillData, type SkillCategory } from "./SkillsList";

const tabs: SkillCategory[] = Object.keys(skillData) as SkillCategory[];

const SkillsAndTools = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>("Frontend");

  return (
    <section
      id="skills"
      className="relative scroll-mt-12 pt-16 bg-gray-50 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-green-600 dark:text-green-400 mb-12">
          Skills and Tools
        </h2>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab
                  ? "border-green-600 text-gray-900 dark:text-gray-100"
                  : "border-transparent text-gray-600 dark:text-gray-400 hover:border-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 max-w-6xl mx-auto">
          {skillData[activeTab].map(({ label, description }) => (
            <div
              key={label}
              className="flex flex-col items-start p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {label}
              </span>
              <span className="text-sm text-left text-gray-600 dark:text-gray-400 mt-1">
                {description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsAndTools;
