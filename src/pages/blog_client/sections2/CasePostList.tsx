import { ArrowRight } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { CASES, CYTOLOGY, HISTOPATHOLOGY } from "~/constants";
import { Case } from "~/interfaces/Case.interface";
import ClientContext from "~/pages/blog_client/context/ClientContext";
import { typeListOptions } from "~/constants/options/typeList.options";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@nextui-org/react";

function CasePostList() {
  const [lastPosts, setLastPosts] = useState([] as Case[]);

  const { cases, handleClickOption } = useContext(ClientContext);
  useEffect(() => {
    if (cases && cases.data) {
      setLastPosts(cases.data);
    }
  }, [cases]);

  return (
    <section id="cases" className="w-full bg-purple-900 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter text-yellow-400 sm:text-4xl md:text-5xl">
          Casos Recientes
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lastPosts.length > 0 ? (
            lastPosts.map((post, i) => (
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
                  <div className="flex w-full justify-end">
                    <Button
                      onPress={() => handleClickOption(`cases/${post.id}`)}
                      className="inline-flex items-center bg-purple-700 font-medium text-yellow-400 transition-colors hover:text-yellow-500"
                    >
                      Leer más <FaArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 flex w-full items-center justify-center">
              <h2 className="text-center font-semibold tracking-tighter text-gray-300 lg:text-xl">
                {"No hay Casos Disponibles"}
              </h2>
            </div>
          )}
        </div>
        <div className="mt-10 inline-flex w-full justify-end">
          <Button
            onPress={() => handleClickOption(CASES)}
            className="inline-flex items-center justify-end bg-purple-800 font-medium text-yellow-400 transition-colors hover:text-yellow-500"
          >
            Ir a Casos <FaArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CasePostList;
