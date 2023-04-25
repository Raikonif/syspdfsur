import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import GeneralLayout from "~/layouts/GeneralLayout";
import NotFound from "~/pages/NotFound";
import Patients from "~/pages/patients/Patients";
import PatientsHistory from "~/pages/PatientsHistory";
import Settings from "~/pages/Settings";
import Dashboard from "~/pages/Dashboard";
import Home from "~/pages/home/Home";
// import { HomeContext } from "~/pages/home/context";

const GenericRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="auth" index element={<Login />} />
        </Route>
        <Route path="/" element={<GeneralLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="patients" element={<Patients />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="patients_history" element={<PatientsHistory />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default GenericRoutes;
