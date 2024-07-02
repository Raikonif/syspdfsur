import React, { Key, useState } from "react";
import AdminContext from "~/pages/admin/context/AdminContext";
import { useDisclosure } from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
}

const defaultFunctionDelete = async () => Promise.resolve();

function AdminProvider({ children }: Props) {
  const [selectedKey, setSelectedKey] = useState<Key>("see");
  const [deleteType, setDeleteType] = useState<"case" | "articles">("case");
  const [nameDelete, setNameDelete] = useState<string>("");

  const { isOpen: isOpenMenu, onOpen: onOpenMenu, onClose: onCloseMenu } = useDisclosure();
  const { isOpen: isOpenCase, onOpen: onOpenCase, onClose: onCloseCase } = useDisclosure();
  const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();

  const functionDelete = async () => {
    if (deleteType === "case") {
      console.log("Borrar caso");
    }
    if (deleteType === "articles") {
      console.log("Borrar articulo");
    }
  };

  return (
    <AdminContext.Provider
      value={{
        isOpenCase,
        onOpenCase,
        onCloseCase,
        isOpenMenu,
        onOpenMenu,
        onCloseMenu,
        isOpenDelete,
        onOpenDelete,
        onCloseDelete,
        nameDelete,
        setNameDelete,
        selectedKey,
        setSelectedKey,
        deleteType,
        setDeleteType,
        functionDelete,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export default AdminProvider;
