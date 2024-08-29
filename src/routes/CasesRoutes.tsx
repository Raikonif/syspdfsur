import { Route, Routes } from "react-router-dom";
import React, { Suspense, useContext, useEffect } from "react";
import ProgressCircle from "~/components/ProgressCircle";
import ClientContext from "~/pages/blog_client/context/ClientContext";
import { Case } from "~/interfaces/Case.interface";
import CasePost from "~/pages/blog_client/articles/CasePost";

function CasesRoutes() {
  const { cases } = useContext(ClientContext);
  return (
    <Routes>
      {cases &&
        cases.data &&
        cases.data.length > 0 &&
        cases.data.map((currentCase: Case) => (
          <Route
            key={currentCase.id}
            path={"/:id"}
            element={
              <Suspense
                fallback={
                  <ProgressCircle text="Cargando Caso de Estudio ..." color={"secondary"} />
                }
              >
                <CasePost />
              </Suspense>
            }
          />
        ))}
    </Routes>
  );
}

export default CasesRoutes;
