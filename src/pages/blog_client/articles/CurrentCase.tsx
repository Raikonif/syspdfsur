import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Case, CaseSlide } from "~/interfaces/Case.interface";
import ClientContext from "~/pages/blog_client/context/ClientContext";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";

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
      <section className="w-full bg-gradient-to-b from-violet-700 from-50% to-white to-100% pb-40 pt-12 dark:to-black md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="gap-4 px-10 md:gap-16">
            <div className="flex flex-col items-start space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl lg:text-6xl">
                The Importance of Mindfulness in Daily Life
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
        <Swiper
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
          modules={[EffectCreative]}
          className="items-center justify-center py-5"
        >
          <SwiperSlide className="bg-blue-500 py-32">Slide 1</SwiperSlide>
          <SwiperSlide className="bg-violet-500 py-10">Slide 2</SwiperSlide>
          <SwiperSlide className="bg-fuchsia-500 py-10">Slide 3</SwiperSlide>
          <SwiperSlide className="bg-green-500 py-10">Slide 4</SwiperSlide>
          <SwiperSlide className="bg-red-500 py-10">Slide 5</SwiperSlide>
          <SwiperSlide className="bg-slate-500 py-10">Slide 6</SwiperSlide>
          <SwiperSlide className="bg-orange-500 py-10">Slide 7</SwiperSlide>
          <SwiperSlide className="bg-brown-500 py-10">Slide 8</SwiperSlide>
          <SwiperSlide className="bg-indigo-500 py-10">Slide 9</SwiperSlide>
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
