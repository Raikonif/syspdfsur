import React from "react";
import { useNavigate } from "react-router-dom";
import ClientContext from "~/pages/blog_client/context/ClientContext";
import demo from "~/assets/muestra.jpg";
import { Case, OperationCase, OperationCaseSlide } from "~/interfaces/Case.interface";
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

  return (
    <ClientContext.Provider value={{ handleClickOption, cases, slides }}>
      {children}
    </ClientContext.Provider>
  );
}

export default ClientProvider;
