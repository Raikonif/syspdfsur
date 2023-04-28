import { useRoutes } from "react-router";

import GenericRoutes from "./GenericRoutes";
import AuthRoutes from "./AuthRoutes";
// import AuthRoutes from "./AuthRoutes";

function RoutesApp() {
  return useRoutes([GenericRoutes, AuthRoutes]);
}

export default RoutesApp;
