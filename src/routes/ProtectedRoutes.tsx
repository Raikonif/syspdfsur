import React, { createContext } from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  auth: boolean;
  redirectPath: string;
}

function ProtectedRoutes({ auth, redirectPath = "/Patients" }: IProps): JSX.Element {
  const AuthContext = createContext({});
  return auth ? (
    <Navigate to={redirectPath} key={redirectPath} replace />
  ) : (
    <Navigate to={"/auth"} />
  );
}

export default ProtectedRoutes;
