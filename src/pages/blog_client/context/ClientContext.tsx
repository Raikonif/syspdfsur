import { createContext } from "react";
import { Case, CaseSlide } from "~/interfaces/Case.interface";

interface DataContext {
  cases: Case[];
  cases_slides: CaseSlide[];
  handleClickOption: (link: string) => void;
}

const ClientContext = createContext<DataContext>({} as DataContext);

export default ClientContext;
