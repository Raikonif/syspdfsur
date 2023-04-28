import { useRoutes } from "react-router";

import GenericRoutes from "./GenericRoutes2";
import AuthRoutes from "./AuthRoutes2";
// import AuthRoutes from "./AuthRoutes";

function RoutesApp() {
  return useRoutes([GenericRoutes, AuthRoutes]);
}

export default RoutesApp;
