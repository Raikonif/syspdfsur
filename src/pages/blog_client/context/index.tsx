import React from "react";
import { useNavigate } from "react-router-dom";
import ClientContext from "~/pages/blog_client/context/ClientContext";
interface Props {
  children: React.ReactNode;
}

function ClientProvider({ children }: Props) {
  const navigate = useNavigate();
  const handleClickOption = (link: string) => {
    navigate(link);
  };
  return <ClientContext.Provider value={{ handleClickOption }}>{children}</ClientContext.Provider>;
}

export default ClientProvider;
