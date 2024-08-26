import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Mail,
  Github,
  Twitter,
  Linkedin,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Header from "~/pages/blog_client/sections2/Header";

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
        <section className="relative w-full overflow-hidden py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[2fr_1fr]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Exploring the Digital Frontier
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    Join me on a journey through technology, design, and personal growth.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-400 px-8 text-sm font-medium text-purple-950 shadow transition-colors hover:bg-yellow-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-500"
                  >
                    Read Latest Post
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 bg-purple-950 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-purple-900 hover:text-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700"
                  >
                    About Me
                  </a>
                </div>
              </div>
              <div className="relative h-[300px] lg:h-[400px]">
                <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-yellow-400 to-purple-600"></div>
                <img
                  alt="Jane Doe"
                  className="absolute inset-0 h-full w-full rounded-full object-cover object-center mix-blend-overlay"
                  height="400"
                  src="/placeholder.svg?height=400&width=400"
                  width="400"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        </section>
        <section className="w-full bg-purple-900 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter text-yellow-400 sm:text-4xl md:text-5xl">
              Featured Posts
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "The Future of AI in Web Development",
                  category: "Technology",
                  color: "bg-blue-400",
                },
                {
                  title: "Mastering the Art of Minimalist Design",
                  category: "Design",
                  color: "bg-pink-400",
                },
                {
                  title: "Building Habits for Lifelong Learning",
                  category: "Personal Growth",
                  color: "bg-green-400",
                },
              ].map((post, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-lg bg-purple-800 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="p-6">
                    <div
                      className={`text-sm font-medium ${post.color} mb-2 inline-block rounded-full px-2 py-1 text-purple-950`}
                    >
                      {post.category}
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-white">{post.title}</h3>
                    <p className="mb-4 text-gray-300">
                      Diving deep into the latest trends and insights in{" "}
                      {post.category.toLowerCase()}...
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center font-medium text-yellow-400 transition-colors hover:text-yellow-500"
                    >
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full bg-purple-950 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_400px]">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-yellow-400 sm:text-4xl md:text-5xl">
                  About Me
                </h2>
                <p className="text-gray-300 md:text-xl/relaxed">
                  I'm Jane, a software engineer and UX designer with a passion for creating
                  intuitive and impactful digital experiences. With over a decade in tech, I've
                  worked on projects ranging from startups to enterprise solutions.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5 text-yellow-400" /> 10+ Years in Tech
                  </li>
                  <li className="flex items-center">
                    <Github className="mr-2 h-5 w-5 text-yellow-400" /> Open Source Contributor
                  </li>
                  <li className="flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-yellow-400" /> Speaker & Writer
                  </li>
                </ul>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 transition-colors hover:text-yellow-400">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-300 transition-colors hover:text-yellow-400">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-300 transition-colors hover:text-yellow-400">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div className="relative h-[400px]">
                <div className="absolute inset-0 animate-pulse rounded-lg bg-gradient-to-br from-yellow-400 to-purple-600"></div>
                <img
                  alt="Jane Doe working"
                  className="absolute inset-0 h-full w-full rounded-lg object-cover object-center mix-blend-overlay"
                  height="400"
                  src="/placeholder.svg?height=400&width=300"
                  width="300"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-yellow-400 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-purple-950 sm:text-4xl md:text-5xl">
                  Join the Journey
                </h2>
                <p className="mx-auto max-w-[600px] text-purple-900 md:text-xl/relaxed">
                  Subscribe to my newsletter for exclusive insights and tips on tech, design, and
                  personal growth.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2 sm:flex-row">
                  <input
                    className="h-10 flex-1 rounded-md border border-purple-300 bg-white px-3 py-2 text-sm text-purple-950 placeholder:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button
                    className="h-10 rounded-md bg-purple-950 px-8 text-sm font-medium text-yellow-400 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-purple-900">
                  I respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-purple-800 bg-purple-950 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 transition-colors hover:text-yellow-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 transition-colors hover:text-yellow-400">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 transition-colors hover:text-yellow-400">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-xs text-gray-400">© 2023 Jane Doe. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6">
              <a
                className="text-xs text-gray-400 underline-offset-4 hover:text-gray-200 hover:underline"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="text-xs text-gray-400 underline-offset-4 hover:text-gray-200 hover:underline"
                href="#"
              >
                Privacy
              </a>
            </nav>
          </div>
        </div>
      </footer>
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
