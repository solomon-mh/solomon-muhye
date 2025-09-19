import About from "./components/About";
import SkillsAndTools from "./components/SkillsAndTools";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import FloatingMenu from "./components/FloatingMenu";
import CursorRipple from "./components/CursorRipple";
import HeroSection from "./components/Hero";
import { Slide, ToastContainer } from "react-toastify";
import HangingToggle from "./components/FloatingToggler";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <div className="text-gray-800 dark:text-white dark:bg-gray-900 transition-colors duration-1000">
        <Analytics />
        <CursorRipple />
        <HangingToggle />
        <main className="w-5/6 lg:w-1/2 mx-auto space-y-12">
          <HeroSection />
          <About />
          <SkillsAndTools />
          <Projects />
          <Experience />
          <Contact />
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
