import { createContext } from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { Case, CaseSlide } from "~/interfaces/Case.interface";

interface DataContext {
  cases: UseQueryResult<Case[], Error>;
  slides: UseQueryResult<CaseSlide[], Error>;
  handleClickOption: (link: string) => void;
}

const ClientContext = createContext<DataContext>({} as DataContext);

export default ClientContext;
