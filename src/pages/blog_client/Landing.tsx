import React, { useState, useEffect, useContext } from "react";
import { ChevronDown } from "lucide-react";
import Header from "~/pages/blog_client/sections/Header";
import Hero from "~/pages/blog_client/sections/Hero";
import CasePostList from "~/pages/blog_client/sections/CasePostList";
import Contact from "~/pages/blog_client/sections/Contact";
import Footer from "~/pages/blog_client/sections/Footer";
import { FaChevronDown } from "react-icons/fa";
import About from "~/pages/blog_client/sections/About";
import ProgressCircle from "~/components/ProgressCircle";
import ClientContext from "~/pages/blog_client/context/ClientContext";

function Landing() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { loading } = useContext(ClientContext);
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
      {loading && <ProgressCircle text={"Cargando"} color={"secondary"} />}
      <Header />
      <main className="flex-1">
        <Hero />
        <CasePostList />
        <About />
        <Contact />
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

export default Landing;
