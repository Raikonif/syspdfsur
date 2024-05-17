import { createContext } from "react";

interface DataContext {
  handleClickOption: (link: string) => void;
}
const ClientContext = createContext<DataContext>({} as DataContext);

export default ClientContext;
