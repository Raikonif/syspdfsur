import React, { useEffect } from "react";
import AdminContext from "~/pages/admin/context/AdminContext";
import { useDisclosure } from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
}

function AdminProvider({ children }: Props) {
  const { isOpen: isOpenMenu, onOpen: onOpenMenu, onClose: onCloseMenu } = useDisclosure();
  const { isOpen: isOpenCase, onOpen: onOpenCase, onClose: onCloseCase } = useDisclosure();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        onOpenMenu();
      }
      if (window.innerWidth < 1024) {
        onCloseMenu();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpenMenu]);

  return (
    <AdminContext.Provider
      value={{
        isOpenCase,
        onOpenCase,
        onCloseCase,
        isOpenMenu,
        onOpenMenu,
        onCloseMenu,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export default AdminProvider;
