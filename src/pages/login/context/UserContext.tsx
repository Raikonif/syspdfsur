import React, { useContext, createContext, useState } from "react";

interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface userContext {
  user: any;
  setUser: any;
}

interface IProps {
  children: React.ReactNode;
}

const UserContext = createContext<userContext>({} as userContext);
function UserContextProvider({ children }: IProps) {
  const [user, setUser] = useState<IUser | null>(null);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

export { UserContext };
export default UserContextProvider;
