import React from "react";
import { useNavigate } from "react-router-dom";
import ClientContext from "~/pages/blog_client/context/ClientContext";

interface Props {
  children: React.ReactNode;
}

function ClientProvider({ children }: Props) {
  // get cases
  const cases = [
    {
      id: 1,
      title: "Case 1",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Case 2",
      description: "Description 2",
    },
    {
      id: 3,
      title: "Case 3",
      description: "Description 3",
    },
  ];

  const cases_slides = [
    {
      id: 1,
      case_id: 1,
      title: "Slide 1",
      description: "Description 1",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      case_id: 1,
      title: "Slide 2",
      description: "Description 2",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      case_id: 1,
      title: "Slide 3",
      description: "Description 3",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      case_id: 2,
      title: "Slide 4",
      description: "Description 4",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      case_id: 2,
      title: "Slide 5",
      description: "Description 5",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      case_id: 2,
      title: "Slide 6",
      description: "Description 6",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      case_id: 3,
      title: "Slide 7",
      description: "Description 7",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      case_id: 3,
      title: "Slide 8",
      description: "Description 8",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      case_id: 3,
      title: "Slide 9",
      description: "Description 9",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      case_id: 3,
      title: "Slide 10",
      description: "Description 10",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 11,
      case_id: 3,
      title: "Slide 11",
      description: "Description 11",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 12,
      case_id: 3,
      title: "Slide 12",
      description: "Description 12",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 13,
      case_id: 3,
      title: "Slide 13",
      description: "Description 13",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 14,
      case_id: 3,
      title: "Slide 14",
      description: "Description 14",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 15,
      case_id: 3,
      title: "Slide 15",
      description: "Description 15",
      image_url: "https://via.placeholder.com/150",
    },
    {
      id: 16,
      case_id: 3,
      title: "Slide 16",
      description: "Description 16",
      image_url: "https://via.placeholder.com/150",
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
