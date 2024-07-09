import React, { useContext, useState } from "react";
import AdminContext from "~/pages/admin/context/AdminContext";
import GenericModal from "~/components/GenericModal";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
  Tab,
  Tabs,
  Textarea,
} from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight, FaEdit, FaEye, FaPlus, FaTrash } from "react-icons/fa";
import uploadDigitalOceanImg from "~/helpers/uploadDigitalOceanImg";
import { createCase } from "~/service/supabase/cases.service";
import { Case } from "~/interfaces/Case.interface";
import { typeListOptions } from "~/constants/options/typeList.options";
import SlideForModal from "~/pages/admin/cases/components/SlideForModal";

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
    crudColor,
    setCrudColor,
    onOpenDelete,
    changeSection,
    setChangeSection,
  } = useContext(AdminContext);

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
      size={"2xl"}
      title={title}
    >
      <div className="flex w-full justify-between gap-2.5">
        <div className={`${changeSection ? "flex" : "invisible"}`}>
          <Button
            color="default"
            variant="shadow"
            size="md"
            onPress={() => {
              setChangeSection(false);
            }}
          >
            <FaArrowLeft /> Volver
          </Button>
        </div>
        <Tabs
          aria-label="Options"
          color={crudColor}
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
          {/*<Tab*/}
          {/*  key="delete"*/}
          {/*  isDisabled={selectedKey === "create"}*/}
          {/*  title={*/}
          {/*    <div className="flex items-center space-x-2">*/}
          {/*      <FaTrash />*/}
          {/*      <span>Borrar</span>*/}
          {/*    </div>*/}
          {/*  }*/}
          {/*/>*/}
        </Tabs>
        <Button
          variant="shadow"
          color="danger"
          className={`${selectedKey === "create" && "hidden"}`}
          onPress={onOpenDelete}
        >
          <FaTrash />
        </Button>
      </div>
      <div>
        <div className="flex flex-col gap-2.5 space-y-2 lg:grid lg:grid-cols-2 lg:space-y-0">
          {!changeSection && (
            <>
              <Input
                isRequired
                type="text"
                size="sm"
                aria-autocomplete="none"
                label="Título"
                isReadOnly={selectedKey === "see"}
                className="col-span-2"
              />
              <Textarea
                isRequired
                type="text"
                size="sm"
                aria-autocomplete="none"
                label="Descipción"
                isReadOnly={selectedKey === "see"}
                className="col-span-2"
              />
              <Autocomplete
                isRequired
                defaultInputValue={"Histopatológico"}
                placeholder="Selecciona tipo de estudio"
                defaultItems={typeListOptions}
                defaultSelectedKey="cat"
                isReadOnly={selectedKey === "see"}
                className="col-span-2"
              >
                {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
              </Autocomplete>
              <div className="col-span-2 flex justify-end">
                <Button
                  variant="bordered"
                  color={crudColor}
                  onPress={() => {
                    setChangeSection(true);
                  }}
                  className={`${selectedKey === "create" ? "flex" : "hidden"}`}
                >
                  Crear Caso y Continuar Slides <FaArrowRight />
                </Button>
                <Button
                  variant="bordered"
                  color={crudColor}
                  onPress={() => {
                    setChangeSection(true);
                  }}
                  className={`${
                    selectedKey === "edit" || selectedKey === "see" ? "flex" : "hidden"
                  }`}
                >
                  Slides <FaArrowRight />
                </Button>
              </div>
            </>
          )}
        </div>
        {changeSection && <SlideForModal />}
      </div>
    </GenericModal>
  );
}

export default ModalCRUDCase;
