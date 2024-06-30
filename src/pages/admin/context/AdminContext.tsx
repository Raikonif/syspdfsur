import { createContext } from "react";

interface AdminContextData {
  isOpenCase: boolean;
  onOpenCase: () => void;
  onCloseCase: () => void;
  isOpenMenu: boolean;
  onOpenMenu: () => void;
  onCloseMenu: () => void;
  theme: string;
  setTheme: (theme: "light" | "dark") => void;
}

const AdminContext = createContext<AdminContextData>({} as AdminContextData);

export default AdminContext;
