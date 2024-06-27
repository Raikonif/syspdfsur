import { createContext } from "react";

interface AdminContextData {
  isOpenCase: boolean;
  onOpenCase: () => void;
  onCloseCase: () => void;
}

const AdminContext = createContext<AdminContextData>({} as AdminContextData);

export default AdminContext;
