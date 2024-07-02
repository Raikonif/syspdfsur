import React, { Key, useContext, useEffect, useState } from "react";
import AdminContext from "~/pages/admin/context/AdminContext";
import GenericModal from "~/components/GenericModal";
import { Tab, Tabs } from "@nextui-org/react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

function ModalCRUDCase() {
  // const [selected, setSelected] = useState<Key>("see");
  const { isOpenCase, onCloseCase, onOpenDelete, setFunctionDelete, selectedKey, setSelectedKey } =
    useContext(AdminContext);
  const [title, setTitle] = useState<string>("Ver Caso");
  const funDelete = async () => {
    console.log("delete from modal");
    onCloseCase();
  };
  const handleSelectionChange = () => {
    if (selectedKey === "delete") {
      onOpenDelete();
      setTitle("Borrar Caso");
      setFunctionDelete(funDelete);
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
    <GenericModal
      isOpen={isOpenCase}
      onClose={onCloseCase}
      onClickConfirm={async () => onCloseCase()}
      title={title}
    >
      <div className="flex w-full flex-col items-end">
        <Tabs
          aria-label="Options"
          color="secondary"
          variant="bordered"
          defaultSelectedKey={"see"}
          selectedKey={selectedKey}
          onSelectionChange={setSelectedKey}
        >
          <Tab
            key="see"
            title={
              <div className="flex items-center space-x-2">
                <FaEye />
                <span>Ver</span>
              </div>
            }
          />
          <Tab
            key="edit"
            title={
              <div className="flex items-center space-x-2">
                <FaEdit />
                <span>Editar</span>
              </div>
            }
          />
          <Tab
            key="delete"
            title={
              <div className="flex items-center space-x-2">
                <FaTrash />
                <span>Borrar</span>
              </div>
            }
          />
        </Tabs>
      </div>
      <div>MODAL CRUD CASE</div>
    </GenericModal>
  );
}

export default ModalCRUDCase;
