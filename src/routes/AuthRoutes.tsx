import { Route } from "react-router-dom";
import AuthLayout from "~/layouts/AuthLayout";
import Login from "~/pages/Login";
import GeneralLayout from "~/layouts/GeneralLayout";
import Home from "~/pages/home/Home";
import Patients from "~/pages/patients/Patients";
import Dashboard from "~/pages/Dashboard";
import PatientsHistory from "~/pages/PatientsHistory";
import Settings from "~/pages/Settings";
import NotFound from "~/pages/NotFound";
import React from "react";

const AuthRoutes = () => {
  return (
    <>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="auth" element={<Login />} />
      </Route>
    </>
  );
};

export default AuthRoutes;
