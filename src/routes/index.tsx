import { useRoutes } from "react-router";

import GenericRoutes from "./GenericRoutes";
import AuthRoutes from "./AuthRoutes";
import ClientRoutes from "~/routes/ClientRoutes";
// import AuthRoutes from "./AuthRoutes";

function RoutesApp() {
  return useRoutes([ClientRoutes, AuthRoutes, GenericRoutes]);
}

export default RoutesApp;
