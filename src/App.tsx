import About from "./components/About";
import SkillsAndTools from "./components/SkillsAndTools";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import FloatingMenu from "./components/FloatingMenu";
import FloatingToggle from "./components/FloatingToggler";
import CursorRipple from "./components/CursorRipple";
import HeroSection from "./components/Hero";
import { Slide, ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <div className="font-sans text-gray-800 dark:text-white dark:bg-gray-900 transition-colors duration-1000">
        <CursorRipple />
        <FloatingToggle />
        <main className="lg:flex gap-12 px-6 sm:px-12 lg:px-24">
          <div className="block lg:w-1/2 h-screen lg:sticky top-0">
            <HeroSection />
          </div>
          <div className="lg:w-1/2 space-y-20 px-4 lg:px-12 py-10 overflow-y-auto">
            <About />
            <SkillsAndTools />
            <Projects />
            <Experience />
            <Contact />
          </div>
        </main>
        <FloatingMenu />
        <Footer />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={4200}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </>
  );
}
