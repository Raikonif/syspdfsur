import { ArrowRight } from "lucide-react";
import React from "react";

function CasePostList() {
  return (
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
                  Diving deep into the latest trends and insights in {post.category.toLowerCase()}
                  ...
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
  );
}

export default CasePostList;
