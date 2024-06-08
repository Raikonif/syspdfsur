import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Case, CaseSlide } from "~/interfaces/Case.interface";
import ClientContext from "~/pages/blog_client/context/ClientContext";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";
import demo from "~/assets/muestra.jpg";
import {
  FaCalendar,
  FaClock,
  MdOutlineKeyboardArrowRight,
  RiArrowRightSFill,
} from "react-icons/all";
import { Avatar, Button } from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";

function CurrentCase() {
  const [selected, setSelected] = useState<Case>({} as Case);
  const [slides, setSlides] = useState<CaseSlide[]>([] as CaseSlide[]);
  const { cases, cases_slides } = useContext(ClientContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const selectCurrentCase = () => {
    const currentCase = cases.find((currentCase) => currentCase.id === Number(id));
    if (currentCase) {
      setSelected(currentCase);
    } else {
      navigate("/*");
    }
  };

  useEffect(() => {
    selectCurrentCase();
  }, []);
  useEffect(() => {
    if (selected.id) {
      const currentSlides = cases_slides.filter((slide) => slide.case_id === selected.id);
      if (currentSlides) {
        setSlides(currentSlides);
      }
    }
  }, [selected]);

  return (
    <>
      <Toaster />
      <section className="w-full bg-gradient-to-b from-violet-700 from-65% to-white to-100% pb-32 pt-16 dark:from-cyan-700 dark:to-violet-950 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="gap-4 px-10 md:gap-16">
            <div className="flex flex-col items-start space-y-4">
              <div className="flex flex-col lg:w-full lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center justify-center">
                  <span className="flex cursor-pointer items-center text-sm font-semibold tracking-tighter text-white sm:text-lg lg:text-xl">
                    {"Casos"}{" "}
                  </span>
                  <RiArrowRightSFill color={"white"} />
                  <span className="flex cursor-pointer items-center text-sm font-semibold tracking-tighter text-white sm:text-lg lg:text-xl">
                    {selected.type === "Histophatology" ? "Histopatología" : "Citología"}
                  </span>
                </div>
                <div className="hidden items-center justify-between space-x-4 lg:flex">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-violet-200">Autor:</p>
                      <h3 className="text-lg font-semibold text-violet-200">
                        Nandy Calle Peñaranda
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 rounded-lg border-2 border-violet-200 p-2 text-violet-200">
                    <FaCalendar className="mr-2 h-4 w-4" />
                    June 3, 2024
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between space-x-4 lg:hidden">
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-violet-200">Autor:</p>
                    <h3 className="text-lg font-semibold text-violet-200">Nandy Calle Peñaranda</h3>
                  </div>
                </div>
                <div className="flex items-center space-x-4 rounded-lg border-2 border-violet-200 p-2 text-violet-200">
                  <FaCalendar className="mr-2 h-4 w-4" />
                  June 3, 2024
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl lg:text-6xl">
                {selected.title}
              </h1>
              <p className="text-xl font-light tracking-tighter text-white sm:text-xl lg:text-2xl">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center px-4 py-6 dark:bg-violet-950 md:px-6 md:py-12 lg:py-16">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-125%", 0, -800],
              rotate: [0, 0, -90],
            },
            next: {
              shadow: true,
              translate: ["125%", 0, -800],
              rotate: [0, 0, 90],
            },
          }}
          modules={[EffectCreative, Pagination]}
          className="-mt-28 flex w-full flex-col items-center justify-center lg:w-2/4"
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="flex flex-col rounded-2xl bg-violet-200 dark:bg-violet-900"
            >
              <img
                src={slide.image_url}
                alt={slide.title}
                className="max-h-[400px] rounded-t-2xl"
                onClick={() => toast.success("Click en la imagen")}
              />
              <div className="px-6 pb-10">
                <p className="my-5 text-xl font-semibold text-indigo-700 dark:text-violet-100 sm:text-3xl lg:text-5xl">
                  {slide.title}
                </p>
                <p className="dark:text-violet-100">{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/*<article className="prose prose-gray dark:prose-invert mx-auto max-w-6xl">*/}
        {/*  <p>*/}
        {/*    In today's fast-paced world, it's easy to get caught up in the hustle and bustle of*/}
        {/*    daily life, constantly rushing from one task to the next. However, it's important to*/}
        {/*    take a step back and practice mindfulness, a concept that has gained significant*/}
        {/*    attention in recent years.*/}
        {/*  </p>*/}
        {/*  <p>*/}
        {/*    Mindfulness is the act of being present and fully engaged in the moment, without*/}
        {/*    judgment or distraction. It involves paying attention to your thoughts, feelings, and*/}
        {/*    physical sensations, and acknowledging them without getting caught up in them. By*/}
        {/*    cultivating mindfulness, you can reduce stress, improve focus and concentration, and*/}
        {/*    enhance your overall well-being.*/}
        {/*  </p>*/}
        {/*  <p>*/}
        {/*    One of the key benefits of mindfulness is its ability to help you manage stress and*/}
        {/*    anxiety. In our modern world, we are constantly bombarded with information, deadlines,*/}
        {/*    and demands on our time. This can lead to feelings of overwhelm and burnout. By*/}
        {/*    practicing mindfulness, you can learn to recognize and acknowledge these feelings, and*/}
        {/*    then let them go, rather than letting them consume you.*/}
        {/*  </p>*/}
        {/*  <p>*/}
        {/*    Mindfulness can also improve your focus and concentration. When you are fully present in*/}
        {/*    the moment, you are less likely to be distracted by thoughts about the past or worries*/}
        {/*    about the future. This can help you be more productive and efficient in your work or*/}
        {/*    studies.*/}
        {/*  </p>*/}
        {/*  <p>*/}
        {/*    Furthermore, mindfulness can enhance your overall well-being by promoting self-awareness*/}
        {/*    and self-compassion. When you are mindful, you are better able to recognize your own*/}
        {/*    thoughts and feelings, and to treat yourself with kindness and understanding. This can*/}
        {/*    lead to improved mental and emotional health, as well as a greater sense of purpose and*/}
        {/*    fulfillment in life.*/}
        {/*  </p>*/}
        {/*  <p>*/}
        {/*    In conclusion, the practice of mindfulness is a powerful tool for navigating the*/}
        {/*    challenges of daily life. By taking the time to be present and attentive, you can reduce*/}
        {/*    stress, improve focus, and enhance your overall well-being. So, why not give it a try?*/}
        {/*    Your mind and body will thank you.*/}
        {/*  </p>*/}
        {/*</article>*/}
      </div>
    </>
  );
}

export default CurrentCase;
