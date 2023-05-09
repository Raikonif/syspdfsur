import React, { createContext } from "react";

const AuthContext = createContext({});

interface IProps {
  children: React.ReactNode;
}

function AuthProvider({ children }: IProps): JSX.Element {
  return <AuthContext.Provider value={{ auth: Boolean }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
