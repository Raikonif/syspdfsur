import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import DarkModeProvider from "~/context/DarkModeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdminProvider from "~/pages/admin/context";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <NextUIProvider>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <AdminProvider>
          <DarkModeProvider>
            <App />
          </DarkModeProvider>
        </AdminProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </NextUIProvider>,
);
