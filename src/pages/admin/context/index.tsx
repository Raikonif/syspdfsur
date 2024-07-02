import React, { Key, useState } from "react";
import AdminContext from "~/pages/admin/context/AdminContext";
import { useDisclosure } from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
}

function AdminProvider({ children }: Props) {
  const [selectedKey, setSelectedKey] = useState<Key>("see");
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const [functionDelete, setFunctionDelete] = useState(() => {});
  const [nameDelete, setNameDelete] = useState<string>("");

  const { isOpen: isOpenMenu, onOpen: onOpenMenu, onClose: onCloseMenu } = useDisclosure();
  const { isOpen: isOpenCase, onOpen: onOpenCase, onClose: onCloseCase } = useDisclosure();
  const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();

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
        functionDelete,
        setFunctionDelete,
        nameDelete,
        setNameDelete,
        selectedKey,
        setSelectedKey,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export default AdminProvider;
