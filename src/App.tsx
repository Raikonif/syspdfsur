import React from "react";
import { BrowserRouter } from "react-router-dom";
import Admin from "~/pages/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Admin />
      </BrowserRouter>
    </>
  );
}

export default App;
