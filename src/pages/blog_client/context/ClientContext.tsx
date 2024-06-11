import { createContext } from "react";
import { Case, CaseSlide, OperationCaseSlide } from "~/interfaces/Case.interface";
import { UseQueryResult } from "react-query";

interface DataContext {
  cases: UseQueryResult<Case[], unknown>;
  slides: UseQueryResult<CaseSlide[], unknown>;
  handleClickOption: (link: string) => void;
}

const ClientContext = createContext<DataContext>({} as DataContext);

export default ClientContext;
