import React, { useContext } from "react";
import RoutesApp from "~/routes";
import "./i18n";
import DarkModeContext from "~/context/DarkModeContext";

function App() {
  const { theme = "dark" } = useContext(DarkModeContext);
  return (
    <main className={`bg-background text-foreground ${theme}`}>
      <RoutesApp />
    </main>
  );
}

export default App;
