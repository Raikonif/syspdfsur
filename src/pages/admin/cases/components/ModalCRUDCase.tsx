import React, { useContext, useState } from "react";
import AdminContext from "~/pages/admin/context/AdminContext";
import GenericModal from "~/components/GenericModal";
import { Button, Tab, Tabs } from "@nextui-org/react";
import { FaEdit, FaEye, FaPlus, FaTrash } from "react-icons/fa";
import uploadDigitalOceanImg from "~/helpers/uploadDigitalOceanImg";
import { createCase } from "~/service/supabase/cases.service";
import { Case } from "~/interfaces/Case.interface";

function ModalCRUDCase() {
  const [imageURL, setImageURL] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const {
    isOpenCase,
    onCloseCase,
    selectedKey,
    setSelectedKey,
    title,
    caseData,
    setCaseData,
    setCaseSlideData,
    caseSlideData,
  } = useContext(AdminContext);

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImageURL(URL.createObjectURL(file));
      setImageFile(file);
    }
  };
  const handleUploadImage = async () => {
    try {
      const response = await uploadDigitalOceanImg(imageFile);
      console.log("response", response);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const handleConfirm = async () => {
    try {
      const response = await uploadDigitalOceanImg(imageFile);
      console.log("response", response);
      await createCase(caseData);
      setCaseData({} as Case);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
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
          selectedKey={selectedKey}
          onSelectionChange={setSelectedKey}
        >
          <Tab
            key="create"
            isDisabled={selectedKey !== "create"}
            title={
              <div className="flex items-center space-x-2">
                <FaPlus />
                <span>Crear</span>
              </div>
            }
          />
          <Tab
            key="see"
            isDisabled={selectedKey === "create"}
            title={
              <div className="flex items-center space-x-2">
                <FaEye />
                <span>Ver</span>
              </div>
            }
          />
          <Tab
            key="edit"
            isDisabled={selectedKey === "create"}
            title={
              <div className="flex items-center space-x-2">
                <FaEdit />
                <span>Editar</span>
              </div>
            }
          />
          <Tab
            key="delete"
            isDisabled={selectedKey === "create"}
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
            await handleUploadImage();
          }}
        >
          Subir Imagen
        </Button>
      </div>
    </GenericModal>
  );
}

export default ModalCRUDCase;
