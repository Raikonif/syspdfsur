import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import GeneralLayout from "~/layouts/GeneralLayout";

const GenericRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth" index element={<Login />} />
          </Route>
          <Route path="/" element={<GeneralLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default GenericRoutes;
