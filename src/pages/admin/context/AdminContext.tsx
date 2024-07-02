import { createContext, Key } from "react";

interface AdminContextData {
  isOpenCase: boolean;
  onOpenCase: () => void;
  onCloseCase: () => void;
  isOpenMenu: boolean;
  onOpenMenu: () => void;
  onCloseMenu: () => void;
  isOpenDelete: boolean;
  onOpenDelete: () => void;
  onCloseDelete: () => void;
  functionDelete: any;
  setFunctionDelete: (action: () => void) => void;
  nameDelete: string;
  setNameDelete: (name: string) => void;
  selectedKey: Key;
  setSelectedKey: (key: Key) => void;
}

const AdminContext = createContext<AdminContextData>({} as AdminContextData);

export default AdminContext;
