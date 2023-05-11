import React, { createContext, useState } from "react";

const AuthContext = createContext({});

interface IProps {
  children: React.ReactNode;
}

function AuthProvider({ children }: IProps): JSX.Element {
  const [user, setUser] = useState<any>(null);
  const login = (user: any) => {
    setUser(user);
  };
  const logout = () => {
    setUser(null);
  };
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
