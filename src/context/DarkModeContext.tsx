import { createContext } from "react";

interface IContextData {
  theme: string | null;
  setTheme: (theme: string) => void;
}

const DarkModeContext = createContext<IContextData>({} as IContextData);

export default DarkModeContext;
