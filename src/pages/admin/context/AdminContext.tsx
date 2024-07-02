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
  nameDelete: string;
  setNameDelete: (name: string) => void;
  selectedKey: Key;
  setSelectedKey: (key: Key) => void;
  deleteType: "case" | "articles";
  setDeleteType: (type: "case" | "articles") => void;
  functionDelete: () => void;
}

const AdminContext = createContext<AdminContextData>({} as AdminContextData);

export default AdminContext;
