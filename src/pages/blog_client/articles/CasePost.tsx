import React, { useContext, useEffect, useState } from "react";
import { Github, Twitter, Linkedin, Menu, X, ArrowLeft, ArrowRight } from "lucide-react";
import { Case, CaseSlide } from "~/interfaces/Case.interface";
import ClientContext from "~/pages/blog_client/context/ClientContext";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Header from "~/pages/blog_client/sections/Header";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaMicroscope,
  FaTwitter,
} from "react-icons/fa";
import { CASES } from "~/constants";
import Footer from "~/pages/blog_client/sections/Footer";
import { getSlideFromCase } from "~/service/supabase/slides.service";
import ProgressCircle from "~/components/ProgressCircle";
import { motion } from "framer-motion";
import { menuOptions, subInternalMenuOptions } from "~/constants/options/landing.options";

function CasePost() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<Case>({} as Case);
  const [slidesCases, setSlidesCases] = useState<CaseSlide[]>([] as CaseSlide[]);
  const [selectedImage, setSelectedImage] = useState(
    slidesCases[0] || {
      image_url: "/placeholder.svg?height=400&width=600",
      id: "default",
      description: "No hay Descripcion",
    },
  );
  const { cases, slides, setLoading, loading, handleClickOption, scrollToSection } =
    useContext(ClientContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const selectCurrentCase = () => {
    setLoading(true);
    const currentCaseIndex = cases.data.findIndex((currentCase) => currentCase.id === id);
    if (currentCaseIndex !== -1) {
      setSelected(cases.data[currentCaseIndex]);
      setCurrentIndex(currentCaseIndex);
    } else {
      navigate("/*");
    }
    setLoading(false);
  };

  const findAndFillSlides = async () => {
    if (selected.id && slides?.data) {
      const { data, error } = await getSlideFromCase(selected.id);
      if (data.length > 0) {
        setSlidesCases(data);
        setSelectedImage(data[0]); // Establece el primer slide como el seleccionado por defecto
      } else {
        setSlidesCases([]);
      }
    }
  };

  const nextPost = async () => {
    setLoading(true);
    if (currentIndex + 1 < cases.data.length) {
      navigate(`/${CASES}/${cases.data[currentIndex + 1].id}`);
      setSelected(cases.data[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
      await findAndFillSlides();
    }
    if (currentIndex + 1 >= cases.data.length) {
      navigate(`/cases/${cases.data[0].id}`);
      setSelected(cases.data[0]);
      setCurrentIndex(0);
      await findAndFillSlides();
    }
    setLoading(false);
  };

  const prevPost = async () => {
    if (currentIndex - 1 >= 0) {
      navigate(`/cases/${cases.data[currentIndex - 1].id}`);
      setSelected(cases.data[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
      await findAndFillSlides();
    } else if (currentIndex - 1 < 0) {
      navigate(`/cases/${cases.data[cases.data.length - 1].id}`);
      setSelected(cases.data[cases.data.length - 1]);
      setCurrentIndex(cases.data.length - 1);
      await findAndFillSlides();
    }
  };

  useEffect(() => {
    selectCurrentCase();
  }, []);

  useEffect(() => {
    setLoading(true);
    const fun = async () => {
      if (selected.id && slides.data) {
        // const currentSlides = slides.data.filter((slide) => slide.case_id === selected.id);
        const { data, error } = await getSlideFromCase(selected.id);
        if (data.length > 0) {
          setSlidesCases(data);
          setSelectedImage(data[0]); // Establece el primer slide como el seleccionado por defecto
        } else {
          setSlidesCases([]);
          setSelectedImage({} as CaseSlide);
        }
      }
    };
    fun();
    setLoading(false);
  }, [selected, slides]);

  return (
    <div className="flex min-h-screen flex-col bg-purple-950 text-white">
      <header
        id="hero"
        className="fixed z-50 flex h-16 w-full items-center bg-purple-950/80 px-4 backdrop-blur-md lg:px-6"
      >
        <span
          className="flex cursor-pointer items-center justify-center"
          onClick={() => handleClickOption("/")}
        >
          <FaMicroscope size={30} className="text-yellow-400" />
          <h1 className="ml-4 font-bold text-violet-100 md:text-xl lg:text-2xl">Blog de Nandy</h1>
        </span>
        <nav
          className={`ml-auto flex gap-4 sm:gap-6 ${
            isMenuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-16 flex-col bg-purple-950 p-4 md:relative md:top-0 md:flex md:flex-row md:bg-transparent md:p-0`}
        >
          <span
            className="cursor-pointer text-sm font-medium text-gray-300 transition-colors hover:text-yellow-400"
            aria-current="page"
            onClick={() => handleClickOption("/cases")}
          >
            {"Casos"}
          </span>
        </nav>
        <button
          className="ml-auto rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>
      <main className="flex-1 pt-16">
        {loading && <ProgressCircle text={"Cargando"} color={"primary"} />}
        {!loading && slidesCases && slides && (
          <article className="container mx-auto px-4 py-8">
            <h1 className="mb-4 text-3xl font-bold tracking-tighter text-yellow-400 sm:text-4xl md:text-5xl lg:text-6xl">
              {selected.title}
            </h1>
            <div className="prose prose-invert mt-8 max-w-none">
              <p>{selected.description}</p>
            </div>
            <motion.div
              className="flex flex-col gap-8 md:flex-row"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1.5 }}
            >
              <div className="md:w-3/4">
                <div className="overflow-hidden rounded-lg bg-purple-900 shadow-lg">
                  <div className="flex items-center justify-center">
                    <img
                      src={selectedImage?.image_url || ""}
                      alt={selectedImage?.id || ""}
                      className="h-auto max-h-[550px] w-auto object-cover object-center"
                    />
                  </div>
                </div>
                <div className="mt-2 border-t-2 border-yellow-400 p-6">
                  <p className="text-lg text-gray-300">
                    {selectedImage?.description || "No hay Descripcion"}
                  </p>
                </div>
              </div>
              <motion.div
                className="md:w-1/4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1.5 }}
              >
                <h2 className="mb-4 text-xl font-bold text-yellow-400">Image Gallery</h2>
                <ul className="space-y-2">
                  {slidesCases.map((image) => (
                    <li key={image.id}>
                      <button
                        onClick={() => setSelectedImage(image)}
                        className={`w-full rounded-md p-2 text-left transition-colors ${
                          selectedImage?.id === image?.id
                            ? "bg-yellow-400 text-purple-950"
                            : "bg-purple-800 text-white hover:bg-purple-700"
                        }`}
                      >
                        {image?.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </article>
        )}
      </main>
      <Footer />
      <div className="fixed bottom-10 left-4 right-4 flex justify-between">
        <button
          className="animate-pulse rounded-md bg-yellow-400 px-4 py-2 text-purple-700 transition-colors hover:bg-yellow-800"
          onClick={prevPost}
        >
          <FaArrowLeft className="inline h-4 w-4" />
        </button>
        <button
          className="animate-pulse rounded-md bg-yellow-400 px-4 py-2 text-purple-700 transition-colors hover:bg-yellow-800"
          onClick={nextPost}
        >
          <FaArrowRight className="inline h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default CasePost;
