import { createContext } from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { Case, CaseSlide } from "~/interfaces/Case.interface";

interface DataContext {
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
  cases: UseQueryResult<Case[], Error>;
  slides: UseQueryResult<CaseSlide[], Error>;
  handleClickOption: (link: string) => void;
  scrollToSection: (section: string) => void;
}

const ClientContext = createContext<DataContext>({} as DataContext);

export default ClientContext;
