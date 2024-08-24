import { useRoutes } from "react-router";

import GenericRoutes from "./GenericRoutes";
import ClientRoutes from "~/routes/ClientRoutes";

function RoutesApp() {
  return useRoutes([ClientRoutes, GenericRoutes]);
}

export default RoutesApp;
