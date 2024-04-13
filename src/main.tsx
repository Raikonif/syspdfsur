import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <NextUIProvider>
    <BrowserRouter>
      <main className="purple-dark bg-background text-foreground">
        <App />
      </main>
    </BrowserRouter>
  </NextUIProvider>,
);
