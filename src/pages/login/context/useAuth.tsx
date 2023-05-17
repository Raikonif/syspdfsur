import React, { useContext } from "react";
import { AuthContext } from "~/pages/login/context/AuthContext";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
