import React, { ReactElement, ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import AdminContext from "~/pages/admin/context/AdminContext";

interface Props {
  children: ReactNode;
}

function ProtectedRoutes({ children }: Props): ReactElement {
  const { user } = useContext(AdminContext);
  return <>{user ? children : <Navigate to={"/adm"} />}</>;
}

export default ProtectedRoutes;
