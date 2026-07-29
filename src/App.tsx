import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import FloatingMenu from "./components/FloatingMenu";
import CursorRipple from "./components/CursorRipple";
import { Slide, ToastContainer } from "react-toastify";
import HangingToggle from "./components/FloatingToggler";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";

export default function App() {
  return (
    <>
      <div className="text-gray-800 dark:text-white dark:bg-gray-900 transition-colors duration-1000">
        <Analytics />
        <CursorRipple />
        <HangingToggle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
          <FloatingMenu />
        </BrowserRouter>
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
