import React from "react";
import { useNavigate } from "react-router-dom";
import ClientContext from "~/pages/blog_client/context/ClientContext";
import demo from "~/assets/muestra.jpg";
import { Case } from "~/interfaces/Case.interface";
interface Props {
  children: React.ReactNode;
}

function ClientProvider({ children }: Props) {
  // get cases
  const cases: Case[] = [
    {
      id: 1,
      title: "Case 1",
      type: "Histophatology",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Case 2",
      type: "Cytopathology",
      description: "Description 2",
    },
    {
      id: 3,
      title: "Case 3",
      type: "Histophatology",
      description: "Description 3",
    },
  ];

  const cases_slides = [
    {
      id: 1,
      case_id: 1,
      title: "Histopatologica Muestra",
      description:
        "La muestra histopatológica es un fragmento de tejido obtenido mediante biopsia, que se examina bajo el microscopio para identificar y caracterizar posibles alteraciones celulares y tisulares. Este análisis permite detectar la presencia de enfermedades como cáncer, inflamaciones o infecciones, y es esencial para el diagnóstico preciso y la planificación del tratamiento adecuado. La muestra se tiñe con diferentes colorantes para resaltar estructuras específicas y facilitar la observación detallada de las células y su organización.",
      image_url: demo,
    },
    {
      id: 2,
      case_id: 1,
      title: "Histopatologica Muestra",
      description:
        "La muestra histopatológica es un fragmento de tejido obtenido mediante biopsia, que se examina bajo el microscopio para identificar y caracterizar posibles alteraciones celulares y tisulares. Este análisis permite detectar la presencia de enfermedades como cáncer, inflamaciones o infecciones, y es esencial para el diagnóstico preciso y la planificación del tratamiento adecuado. La muestra se tiñe con diferentes colorantes para resaltar estructuras específicas y facilitar la observación detallada de las células y su organización.",
      image_url: demo,
    },
    {
      id: 3,
      case_id: 1,
      title: "Histopatologica Muestra",
      description:
        "La muestra histopatológica es un fragmento de tejido obtenido mediante biopsia, que se examina bajo el microscopio para identificar y caracterizar posibles alteraciones celulares y tisulares. Este análisis permite detectar la presencia de enfermedades como cáncer, inflamaciones o infecciones, y es esencial para el diagnóstico preciso y la planificación del tratamiento adecuado. La muestra se tiñe con diferentes colorantes para resaltar estructuras específicas y facilitar la observación detallada de las células y su organización.",
      image_url: demo,
    },
    {
      id: 4,
      case_id: 2,
      title: "Citopatológica Muestra",
      description:
        "La muestra histopatológica es un fragmento de tejido obtenido mediante biopsia, que se examina bajo el microscopio para identificar y caracterizar posibles alteraciones celulares y tisulares. Este análisis permite detectar la presencia de enfermedades como cáncer, inflamaciones o infecciones, y es esencial para el diagnóstico preciso y la planificación del tratamiento adecuado. La muestra se tiñe con diferentes colorantes para resaltar estructuras específicas y facilitar la observación detallada de las células y su organización.",
      image_url: demo,
    },
    {
      id: 5,
      case_id: 2,
      title: "Citopatológica Muestra",
      description:
        "La muestra histopatológica es un fragmento de tejido obtenido mediante biopsia, que se examina bajo el microscopio para identificar y caracterizar posibles alteraciones celulares y tisulares. Este análisis permite detectar la presencia de enfermedades como cáncer, inflamaciones o infecciones, y es esencial para el diagnóstico preciso y la planificación del tratamiento adecuado. La muestra se tiñe con diferentes colorantes para resaltar estructuras específicas y facilitar la observación detallada de las células y su organización.",
      image_url: demo,
    },
    {
      id: 6,
      case_id: 2,
      title: "Citopatológica Muestra",
      description:
        "La muestra histopatológica es un fragmento de tejido obtenido mediante biopsia, que se examina bajo el microscopio para identificar y caracterizar posibles alteraciones celulares y tisulares. Este análisis permite detectar la presencia de enfermedades como cáncer, inflamaciones o infecciones, y es esencial para el diagnóstico preciso y la planificación del tratamiento adecuado. La muestra se tiñe con diferentes colorantes para resaltar estructuras específicas y facilitar la observación detallada de las células y su organización.",
      image_url: demo,
    },
    {
      id: 7,
      case_id: 3,
      title: "Histopatologica Muestra",
      description:
        "La muestra histopatológica es un fragmento de tejido obtenido mediante biopsia, que se examina bajo el microscopio para identificar y caracterizar posibles alteraciones celulares y tisulares. Este análisis permite detectar la presencia de enfermedades como cáncer, inflamaciones o infecciones, y es esencial para el diagnóstico preciso y la planificación del tratamiento adecuado. La muestra se tiñe con diferentes colorantes para resaltar estructuras específicas y facilitar la observación detallada de las células y su organización.",
      image_url: demo,
    },
    {
      id: 8,
      case_id: 3,
      title: "Histopatologica Muestra",
      description:
        "La muestra histopatológica es un fragmento de tejido obtenido mediante biopsia, que se examina bajo el microscopio para identificar y caracterizar posibles alteraciones celulares y tisulares. Este análisis permite detectar la presencia de enfermedades como cáncer, inflamaciones o infecciones, y es esencial para el diagnóstico preciso y la planificación del tratamiento adecuado. La muestra se tiñe con diferentes colorantes para resaltar estructuras específicas y facilitar la observación detallada de las células y su organización.",
      image_url: demo,
    },
    {
      id: 9,
      case_id: 3,
      title: "Histopatologica Muestra",
      description:
        "La muestra histopatológica es un fragmento de tejido obtenido mediante biopsia, que se examina bajo el microscopio para identificar y caracterizar posibles alteraciones celulares y tisulares. Este análisis permite detectar la presencia de enfermedades como cáncer, inflamaciones o infecciones, y es esencial para el diagnóstico preciso y la planificación del tratamiento adecuado. La muestra se tiñe con diferentes colorantes para resaltar estructuras específicas y facilitar la observación detallada de las células y su organización.",
      image_url: demo,
    },
    {
      id: 10,
      case_id: 3,
      title: "Histopatologica Muestra",
      description:
        "La muestra histopatológica es un fragmento de tejido obtenido mediante biopsia, que se examina bajo el microscopio para identificar y caracterizar posibles alteraciones celulares y tisulares. Este análisis permite detectar la presencia de enfermedades como cáncer, inflamaciones o infecciones, y es esencial para el diagnóstico preciso y la planificación del tratamiento adecuado. La muestra se tiñe con diferentes colorantes para resaltar estructuras específicas y facilitar la observación detallada de las células y su organización.",
      image_url: demo,
    },
    {
      id: 11,
      case_id: 3,
      title: "Histopatologica Muestra",
      description:
        "La muestra histopatológica es un fragmento de tejido obtenido mediante biopsia, que se examina bajo el microscopio para identificar y caracterizar posibles alteraciones celulares y tisulares. Este análisis permite detectar la presencia de enfermedades como cáncer, inflamaciones o infecciones, y es esencial para el diagnóstico preciso y la planificación del tratamiento adecuado. La muestra se tiñe con diferentes colorantes para resaltar estructuras específicas y facilitar la observación detallada de las células y su organización.",
      image_url: demo,
    },
    {
      id: 12,
      case_id: 3,
      title: "Histopatologica Muestra",
      description:
        "La muestra histopatológica es un fragmento de tejido obtenido mediante biopsia, que se examina bajo el microscopio para identificar y caracterizar posibles alteraciones celulares y tisulares. Este análisis permite detectar la presencia de enfermedades como cáncer, inflamaciones o infecciones, y es esencial para el diagnóstico preciso y la planificación del tratamiento adecuado. La muestra se tiñe con diferentes colorantes para resaltar estructuras específicas y facilitar la observación detallada de las células y su organización.",
      image_url: demo,
    },
    {
      id: 13,
      case_id: 3,
      title: "Histopatologica Muestra",
      description:
        "La muestra histopatológica es un fragmento de tejido obtenido mediante biopsia, que se examina bajo el microscopio para identificar y caracterizar posibles alteraciones celulares y tisulares. Este análisis permite detectar la presencia de enfermedades como cáncer, inflamaciones o infecciones, y es esencial para el diagnóstico preciso y la planificación del tratamiento adecuado. La muestra se tiñe con diferentes colorantes para resaltar estructuras específicas y facilitar la observación detallada de las células y su organización.",
      image_url: demo,
    },
    {
      id: 14,
      case_id: 3,
      title: "Histopatologica Muestra",
      description:
        "La muestra histopatológica es un fragmento de tejido obtenido mediante biopsia, que se examina bajo el microscopio para identificar y caracterizar posibles alteraciones celulares y tisulares. Este análisis permite detectar la presencia de enfermedades como cáncer, inflamaciones o infecciones, y es esencial para el diagnóstico preciso y la planificación del tratamiento adecuado. La muestra se tiñe con diferentes colorantes para resaltar estructuras específicas y facilitar la observación detallada de las células y su organización.",
      image_url: demo,
    },
    {
      id: 15,
      case_id: 3,
      title: "Histopatologica Muestra",
      description:
        "La muestra histopatológica es un fragmento de tejido obtenido mediante biopsia, que se examina bajo el microscopio para identificar y caracterizar posibles alteraciones celulares y tisulares. Este análisis permite detectar la presencia de enfermedades como cáncer, inflamaciones o infecciones, y es esencial para el diagnóstico preciso y la planificación del tratamiento adecuado. La muestra se tiñe con diferentes colorantes para resaltar estructuras específicas y facilitar la observación detallada de las células y su organización.",
      image_url: demo,
    },
    {
      id: 16,
      case_id: 3,
      title: "Histopatologica Muestra",
      description:
        "La muestra histopatológica es un fragmento de tejido obtenido mediante biopsia, que se examina bajo el microscopio para identificar y caracterizar posibles alteraciones celulares y tisulares. Este análisis permite detectar la presencia de enfermedades como cáncer, inflamaciones o infecciones, y es esencial para el diagnóstico preciso y la planificación del tratamiento adecuado. La muestra se tiñe con diferentes colorantes para resaltar estructuras específicas y facilitar la observación detallada de las células y su organización.",
      image_url: demo,
    },
  ];

  // navigation
  const navigate = useNavigate();
  const handleClickOption = (link: string) => {
    navigate(link);
  };
  return (
    <ClientContext.Provider value={{ handleClickOption, cases, cases_slides }}>
      {children}
    </ClientContext.Provider>
  );
}

export default ClientProvider;
