import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Header from "~/pages/blog_client/sections2/Header";
import Hero from "~/pages/blog_client/sections2/Hero";
import CasePostList from "~/pages/blog_client/sections2/CasePostList";
import Contact from "~/pages/blog_client/sections2/Contact";
import Footer from "~/pages/blog_client/sections2/Footer";
import { FaChevronDown } from "react-icons/fa";
import About from "~/pages/blog_client/sections2/About";

function Landing2() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-purple-950 text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <CasePostList />
        <About />
        <Contact />
        <Footer />
      </main>
      <div
        className="fixed bottom-4 right-4 cursor-pointer rounded-full bg-yellow-400 p-2 text-purple-950 transition-opacity duration-300 hover:bg-yellow-500"
        style={{ opacity: scrollPosition > 200 ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaChevronDown className="h-6 w-6 rotate-180 transform" />
      </div>
    </div>
  );
}

export default Landing2;
