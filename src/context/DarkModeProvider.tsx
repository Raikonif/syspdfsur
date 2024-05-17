import React, { ReactNode } from "react";
import DarkModeContext from "./DarkModeContext";
import useDarkMode from "~/hooks/useDarkMode";

interface Props {
  children: ReactNode;
}

function DarkModeProvider({ children }: Props) {
  const { theme, setTheme } = useDarkMode();
  return (
    <DarkModeContext.Provider value={{ theme, setTheme }}>{children}</DarkModeContext.Provider>
  );
}

export default DarkModeProvider;
