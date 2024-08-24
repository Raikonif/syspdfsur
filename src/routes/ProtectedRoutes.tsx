import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import supabase from "~/service/supabase/supabase.service";

interface Props {
  children: ReactNode;
}

function ProtectedRoutes({ children }: Props): ReactElement {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuth, setIsAuth] = useState<boolean>(false);
  useEffect(() => {
    const listener = supabase.auth.onAuthStateChange((_, session) => {
      if (!session) {
        setIsAuth(false);
        localStorage.removeItem("authState");
        navigate("/adm/", { state: { from: location.pathname } });
      } else {
        setIsAuth(true);
      }
    });
    return () => {
      listener.data.subscription.unsubscribe();
    };
  }, [location.pathname, navigate]);
  return <>{isAuth ? children : <h1>{"no found"}</h1>}</>;
}

export default ProtectedRoutes;
