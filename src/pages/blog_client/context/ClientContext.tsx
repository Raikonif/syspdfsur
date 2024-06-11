import { createContext } from "react";
import { OperationCase, OperationCaseSlide } from "~/interfaces/Case.interface";
import { UseQueryResult } from "react-query";

interface DataContext {
  cases: UseQueryResult<any[], unknown>;
  cases_slides: OperationCaseSlide[];
  handleClickOption: (link: string) => void;
}

const ClientContext = createContext<DataContext>({} as DataContext);

export default ClientContext;
