import React from "react";
import profile from "~/assets/profile.png";
import { useTranslation } from "react-i18next";
function About() {
  const { t } = useTranslation();
  return (
    <>
      <div className="text-semibold flex flex-col items-center p-6 sm:flex-row">
        <img
          src={profile}
          className="max-h-[600px] max-w-[400px] items-center rounded-md border-2"
          alt={"profile"}
        />
        <div className="flex flex-col">
          <h1 className="text-balance my-3 text-center text-2xl font-semibold text-fuchsia-600">
            {t("ABOUT").toUpperCase()}
          </h1>
          <p className="text-pretty my-2 ml-3 flex flex-col text-lg text-slate-700">
            HISTORY, PURPOSE AND USAGE Lorem ipsum, or lipsum as it is sometimes known, is dummy
            text used in laying out print, graphic or web designs. The passage is attributed to an
            unknown typesetter in the 15th century who is thought to have scrambled parts of De
            Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a
            natural looking block of text (sentence, paragraph, page, etc.) that t distract from the
            layout. A practice not without controversy, laying out pages with meaningless filler
            text can be very useful when the focus is meant to be on design, not content. The
            passage experienced a surge in popularity during the 1960s when Letraset used it on
            their dry-transfer sheets, and again during the 90s as desktop publishers bundled the
            text with their software. Today s seen all around the web; on templates, websites, and
            stock designs. Use our generator to get your own, or read on for the authoritative
            history of lorem ipsum. “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum
            is to create a natural looking block of text (sentence, paragraph, page, etc.) that t
            distract from the layout. A practice not without controversy, laying out pages with
            meaningless filler text can be very useful when the focus is meant to be on design, not
            content.
          </p>
        </div>
      </div>
      <div className="flex w-full items-end justify-end px-6 pb-6 sm:p-6">
        <div className="my-4 flex w-full flex-col items-center rounded-sm bg-fuchsia-600 p-2 sm:w-fit sm:items-end">
          <span className="mb-1 text-end font-semibold text-slate-100">
            - Dra. Nandy Calle Peñaranda
          </span>
          <span className="text-end font-semibold text-slate-100">
            Medico en Anatomia Patologica
          </span>
        </div>
      </div>
    </>
  );
}

export default About;
