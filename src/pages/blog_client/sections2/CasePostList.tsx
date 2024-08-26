import { ArrowRight } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { CYTOLOGY, HISTOPATHOLOGY } from "~/constants";
import { Case } from "~/interfaces/Case.interface";
import ClientContext from "~/pages/blog_client/context/ClientContext";
import { typeListOptions } from "~/constants/options/typeList.options";

function CasePostList() {
  const [lastPosts, setLastPosts] = useState([] as Case[]);

  const { cases } = useContext(ClientContext);
  useEffect(() => {
    setLastPosts(cases.data);
  }, []);
  return (
    <section className="w-full bg-purple-900 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter text-yellow-400 sm:text-4xl md:text-5xl">
          Casos Recientes
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lastPosts.map((post, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg bg-purple-800 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="p-6">
                <div
                  className={`text-sm font-medium ${
                    post.type === HISTOPATHOLOGY
                      ? "bg-blue-400"
                      : post.type === CYTOLOGY
                      ? "bg-pink-400"
                      : "bg-green-400"
                  } mb-2 inline-block rounded-full px-2 py-1 text-purple-950`}
                >
                  {post.type === HISTOPATHOLOGY
                    ? typeListOptions[0].label
                    : post.type === CYTOLOGY
                    ? typeListOptions[2].label
                    : typeListOptions[1].label}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{post.title}</h3>
                <p className="mb-4 text-gray-300">
                  {post.description} {post.type.toLowerCase()}
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
