import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Case, CaseSlide } from "~/interfaces/Case.interface";
import ClientContext from "~/pages/blog_client/context/ClientContext";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";
import { FaCalendar } from "react-icons/fa";
import { RiArrowRightSFill } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

function CurrentCase() {
  const [selected, setSelected] = useState<Case>({} as Case);
  const [slidesCases, setSlidesCases] = useState<CaseSlide[]>([] as CaseSlide[]);
  const { cases, slides } = useContext(ClientContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const selectCurrentCase = () => {
    const currentCase = cases.data.find((currentCase) => currentCase.id === id);
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
      const currentSlides = slides.data.filter((slide) => slide.case_id === selected.id);
      if (currentSlides) {
        setSlidesCases(currentSlides);
      }
    }
  }, [selected]);

  return (
    <>
      <Toaster />
      <section
        className={`${
          slidesCases.length === 0 && "min-h-screen"
        } w-full bg-gradient-to-b from-violet-700 from-65% to-white to-100% pb-32 pt-16 dark:from-cyan-700 dark:to-violet-950 md:pt-24 lg:pt-32`}
      >
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
        {slidesCases.length > 0 && (
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
              {slidesCases.map((slide) => (
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
          </div>
        )}
      </section>
    </>
  );
}

export default CurrentCase;
