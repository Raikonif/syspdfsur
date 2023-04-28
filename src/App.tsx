import React from "react";
import { BrowserRouter } from "react-router-dom";
import Admin from "~/pages/Admin";
import RoutesApp from "~/routes";

function App() {
  return (
    <>
      {/*<BrowserRouter>*/}
      <RoutesApp />
      {/*</BrowserRouter>*/}
    </>
  );
}

export default App;
