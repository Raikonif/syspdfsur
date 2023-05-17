import React, { createContext, useState, useEffect, useContext, Dispatch } from "react";
import ILoginProps from "~/interfaces/loginInterface";

interface IProps {
  children: React.ReactNode;
}
interface ISetLoginProps {
  setUser: (user: ILoginProps) => void;
  setIsLoggedIn: (login: boolean) => void;
}

interface IAuthContext {
  user: ILoginProps;
  isLoggedIn: boolean;
  setUser: (user: ILoginProps) => void;
  setIsLoggedIn: (login: boolean) => void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);
function useAuth() {
  return useContext(AuthContext);
}
function AuthProvider({ children }: IProps): JSX.Element {
  const [user, setUser] = useState<ILoginProps>({} as ILoginProps);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const value = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext, useAuth };
