import React, { useContext, useState } from "react";
import AdminContext from "~/pages/admin/context/AdminContext";
import GenericModal from "~/components/GenericModal";
import { Button, Tab, Tabs } from "@nextui-org/react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

function ModalCRUDCase() {
  const [imageURL, setImageURL] = useState("");
  const { isOpenCase, onCloseCase, selectedKey, setSelectedKey, title } = useContext(AdminContext);
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImageURL(URL.createObjectURL(file));
    }
  };
  const uploadImage = async () => {
    console.log("Subiendo imagen");
  };

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
      <div>
        <input type={"file"} accept="image/*" id="image chooser" onChange={handleImageChange} />
        {imageURL && <img src={imageURL} alt="image" />}
        <Button
          onPress={async () => {
            await uploadImage();
          }}
        >
          Subir Imagen
        </Button>
      </div>
    </GenericModal>
  );
}

export default ModalCRUDCase;
