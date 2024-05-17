import { Route, Routes } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import CurrentCase from "~/pages/blog_client/articles/CurrentCase";
import ProgressCircle from "~/components/ProgressCircle";

const cases = [
  {
    id: 1,
    title: "Case 1",
    description: "Description 1",
    cases_slides: [
      {
        id: 1,
        title: "Slide 1",
        description: "Description 1",
        image_url: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        title: "Slide 2",
        description: "Description 2",
        image_url: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        title: "Slide 3",
        description: "Description 3",
        image_url: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    id: 2,
    title: "Case 2",
    description: "Description 2",
    cases_slides: [
      {
        id: 1,
        title: "Slide 1",
        description: "Description 1",
        image_url: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        title: "Slide 2",
        description: "Description 2",
        image_url: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        title: "Slide 3",
        description: "Description 3",
        image_url: "https://via.placeholder.com/150",
      },
    ],
  },
  {
    id: 3,
    title: "Case 3",
    description: "Description 3",
    cases_slides: [
      {
        id: 1,
        title: "Slide 1",
        description: "Description 1",
        image_url: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        title: "Slide 2",
        description: "Description 2",
        image_url: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        title: "Slide 3",
        description: "Description 3",
        image_url: "https://via.placeholder.com/150",
      },
    ],
  },
];

function CasesRoutes() {
  useEffect(() => {
    console.log("CREATE GET CASES DATA");
  }, []);
  return (
    <Routes>
      {cases.map((currentCase: any) => (
        <Route
          key={currentCase.id}
          path={"/:id"}
          element={
            <Suspense fallback={<ProgressCircle text="Cargando Caso de Estudio ..." />}>
              <CurrentCase />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}

export default CurrentCase;
