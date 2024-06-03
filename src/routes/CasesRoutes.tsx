import { Route, Routes } from "react-router-dom";
import React, { Suspense, useContext, useEffect } from "react";
import CurrentCase from "~/pages/blog_client/articles/CurrentCase";
import ProgressCircle from "~/components/ProgressCircle";
import ClientContext from "~/pages/blog_client/context/ClientContext";
import { Case } from "~/interfaces/Case.interface";

function CasesRoutes() {
  const { cases } = useContext(ClientContext);
  return (
    <Routes>
      {cases.map((currentCase: Case) => (
        <Route
          key={currentCase.id}
          path={"/:id"}
          element={
            <Suspense
              fallback={<ProgressCircle text="Cargando Caso de Estudio ..." color={"secondary"} />}
            >
              <CurrentCase />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}

export default CasesRoutes;
