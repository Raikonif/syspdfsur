import React, { Key, useEffect, useState } from "react";
import AdminContext from "~/pages/admin/context/AdminContext";
import { useDisclosure } from "@nextui-org/react";
import { Case, OpCase, OpCaseSlide } from "~/interfaces/Case.interface";

interface Props {
  children: React.ReactNode;
}

function AdminProvider({ children }: Props) {
  // MODAL CRUD CASE
  const [caseData, setCaseData] = useState<OpCase>({} as Case);
  const [caseSlideData, setCaseSlideData] = useState<OpCaseSlide[]>([] as OpCaseSlide[]);
  const [selectedKey, setSelectedKey] = useState<Key>("see");
  const [changeSection, setChangeSection] = useState(false);
  const [title, setTitle] = useState<string>("Ver Caso");
  const [crudColor, setCrudColor] = useState<
    "default" | "success" | "warning" | "primary" | "secondary" | "danger"
  >("success");
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
      setCrudColor("danger")
    }
    if (selectedKey === "edit") {
      console.log("edit");
      setTitle("Editar Caso");
      setCrudColor("warning")
    }
    if (selectedKey === "see") {
      console.log("see");
      setTitle("Ver Caso");
      setCrudColor("secondary")
    }
    if (selectedKey === "create") {
      console.log("create");
      setTitle("Nuevo Caso");
      setCrudColor("success")
    }
  };

  useEffect(() => {
    handleSelectionChange();
  }, [selectedKey]);

  return (
    <AdminContext.Provider
      value={{
        caseData,
        setCaseData,
        caseSlideData,
        setCaseSlideData,
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
        crudColor,
        setCrudColor,
        selectedKey,
        setSelectedKey,
        title,
        setTitle,
        deleteType,
        setDeleteType,
        changeSection,
        setChangeSection,
        functionDelete,
        handleSelectionChange,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export default AdminProvider;
