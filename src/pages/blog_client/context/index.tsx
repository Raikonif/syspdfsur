import React from "react";
import { useNavigate } from "react-router-dom";
import ClientContext from "~/pages/blog_client/context/ClientContext";
import useGetCases from "~/hooks/useGetCases";
import useGetSlides from "~/hooks/useGetSlides";
interface Props {
  children: React.ReactNode;
}

function ClientProvider({ children }: Props) {
  // get cases
  const cases = useGetCases();
  const slides = useGetSlides();

  // navigation
  const navigate = useNavigate();
  const handleClickOption = (link: string) => {
    navigate(link);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ClientContext.Provider value={{ handleClickOption, scrollToSection, cases, slides }}>
      {children}
    </ClientContext.Provider>
  );
}

export default ClientProvider;
