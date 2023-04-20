import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import GeneralLayout from "~/layouts/GeneralLayout";
import NotFound from "~/pages/NotFound";
// import { HomeContext } from "~/pages/home/context";

const GenericRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth" index element={<Login />} />
          </Route>
          <Route path="/" element={<GeneralLayout />}>
            <Route
              path="/"
              element={
                // <HomeContext.Provider value={{}}>
                <Home />
                // </HomeContext.Provider>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default GenericRoutes;
