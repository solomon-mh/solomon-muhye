import Hero from "./components/Hero";
import About from "./components/About";
import SkillsAndTools from "./components/SkillsAndTools";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div className="font-sans text-gray-800 dark:text-white bg-white dark:bg-gray-900">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Me */}
      <About />

      {/* 3. Skills & Tools */}
      <SkillsAndTools />

      {/* 4. Projects */}
      <Projects />

      {/* 5. Experience */}
      <Experience />

      {/* 6. Contact */}
      <Contact />

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
