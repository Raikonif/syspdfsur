import React from "react";
import AdminContext from "~/pages/admin/context/AdminContext";
import { useDisclosure } from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
}

function AdminProvider({ children }: Props) {
  const { isOpen: isOpenCase, onOpen: onOpenCase, onClose: onCloseCase } = useDisclosure();
  return (
    <AdminContext.Provider
      value={{
        isOpenCase,
        onOpenCase,
        onCloseCase,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export default AdminProvider;
