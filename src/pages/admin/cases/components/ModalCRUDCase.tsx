import React, { useContext } from "react";
import AdminContext from "~/pages/admin/context/AdminContext";
import GenericModal from "~/components/GenericModal";
import { Tab, Tabs } from "@nextui-org/react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

function ModalCRUDCase() {
  const { isOpenCase, onOpenCase, onCloseCase } = useContext(AdminContext);
  return (
    <GenericModal isOpen={isOpenCase} onOpen={onOpenCase} onClose={onCloseCase}>
      <div className="flex w-full flex-col items-end">
        <Tabs aria-label="Options" color="secondary" variant="bordered">
          <Tab
            key="photos"
            title={
              <div className="flex items-center space-x-2">
                <FaEye />
                <span>Ver</span>
              </div>
            }
          />
          <Tab
            key="music"
            title={
              <div className="flex items-center space-x-2">
                <FaEdit />
                <span>Editar</span>
              </div>
            }
          />
          {/*<Tab*/}
          {/*  key="videos"*/}
          {/*  title={*/}
          {/*    <div className="flex items-center space-x-2">*/}
          {/*      <FaTrash />*/}
          {/*      <span>Borrar</span>*/}
          {/*    </div>*/}
          {/*  }*/}
          {/*/>*/}
        </Tabs>
      </div>
      <div>MODAL CRUD CASE</div>
    </GenericModal>
  );
}

export default ModalCRUDCase;
