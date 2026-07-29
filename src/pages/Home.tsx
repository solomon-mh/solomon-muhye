import About from "../components/About";
import SkillsAndTools from "../components/SkillsAndTools";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import HeroSection from "../components/Hero";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <main className="w-5/6 lg:w-1/2 mx-auto space-y-12">
      <HeroSection />
      <About />
      <Experience />
      <SkillsAndTools />
      <Projects />
      <Blog />
      <Contact />
    </main>
  );
};

export default Home;
