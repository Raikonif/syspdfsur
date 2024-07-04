import React, { Key, useEffect, useState } from "react";
import AdminContext from "~/pages/admin/context/AdminContext";
import { useDisclosure } from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
}

function AdminProvider({ children }: Props) {
  const [selectedKey, setSelectedKey] = useState<Key>("see");
  const [title, setTitle] = useState<string>("Ver Caso");
  // delete states
  const [deleteType, setDeleteType] = useState<"case" | "articles">("case");
  const [nameDelete, setNameDelete] = useState<string>("");

  const { isOpen: isOpenMenu, onOpen: onOpenMenu, onClose: onCloseMenu } = useDisclosure();
  const { isOpen: isOpenCase, onOpen: onOpenCase, onClose: onCloseCase } = useDisclosure();
  const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();

  // function delete
  const functionDelete = async () => {
    if (deleteType === "case") {
      console.log("Borrar caso");
    }
    if (deleteType === "articles") {
      console.log("Borrar articulo");
    }
  };

  //for modal CRUD case
  const handleSelectionChange = () => {
    if (selectedKey === "delete") {
      onOpenDelete();
      setTitle("Borrar Caso");
      setDeleteType("case");
    }
    if (selectedKey === "edit") {
      console.log("edit");
      setTitle("Editar Caso");
    }
    if (selectedKey === "see") {
      console.log("see");
      setTitle("Ver Caso");
    }
  };

  useEffect(() => {
    handleSelectionChange();
  }, [selectedKey]);

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
        title,
        setTitle,
        deleteType,
        setDeleteType,
        functionDelete,
        handleSelectionChange,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export default AdminProvider;