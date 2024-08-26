import React, { useState, useEffect } from "react";
import {
  ChevronDown,
} from "lucide-react";
import Header from "~/pages/blog_client/sections2/Header";
import Hero from "~/pages/blog_client/sections2/Hero";
import CasePostList from "~/pages/blog_client/sections2/CasePostList";
import Suscribe from "~/pages/blog_client/sections2/Suscribe";
import Footer from "~/pages/blog_client/sections2/Footer";

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
        <CasePostList />
        <Suscribe />
        <Footer />
      </main>
      <div
        className="fixed bottom-4 right-4 cursor-pointer rounded-full bg-yellow-400 p-2 text-purple-950 transition-opacity duration-300 hover:bg-yellow-500"
        style={{ opacity: scrollPosition > 200 ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronDown className="h-6 w-6 rotate-180 transform" />
      </div>
    </div>
  );
}

export default Landing2;
