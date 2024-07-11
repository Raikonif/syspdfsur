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
import toast from "react-hot-toast";

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
    caseId,
    setCaseId,
    onOpenDelete,
    changeSection,
    setChangeSection,
  } = useContext(AdminContext);

  const handleConfirm = async () => {
    try {
      const { data, error } = await createCase(caseData);
      if (data) {
        toast.success("Caso creado");
        setCaseId(data[0].id);
      } else {
        toast.error("Error al crear el caso");
        return;
      }
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
      hideButtons={true}
    >
      <div className="flex w-full gap-2.5 lg:justify-between">
        <div className={`${changeSection ? "flex" : "invisible"}`}>
          <Button
            color="default"
            variant="shadow"
            size="sm"
            onPress={() => {
              setChangeSection(false);
            }}
          >
            <FaArrowLeft /> Volver
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center gap-2.5 lg:flex-row">
          <Tabs
            aria-label="Options"
            color={crudColor}
            variant="bordered"
            selectedKey={selectedKey}
            onSelectionChange={setSelectedKey}
            size={"sm"}
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
          </Tabs>
          <Button
            variant="shadow"
            color="danger"
            onPress={onOpenDelete}
            size={"sm"}
            className={`${selectedKey === "create" && "hidden"}`}
          >
            Caso y Slides <FaTrash />
          </Button>
        </div>
      </div>
      <div className="lg:mb-5">
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
                value={caseData.title}
                onChange={(e) => setCaseData({ ...caseData, title: e.target.value })}
                className="col-span-2"
              />
              <Textarea
                isRequired
                type="text"
                size="sm"
                aria-autocomplete="none"
                label="Descipción"
                isReadOnly={selectedKey === "see"}
                value={caseData.description}
                onChange={(e) => setCaseData({ ...caseData, description: e.target.value })}
                className="col-span-2"
              />
              <Autocomplete
                isRequired
                defaultInputValue={"Histopatológico"}
                placeholder="Selecciona tipo de estudio"
                defaultItems={typeListOptions}
                defaultSelectedKey="cat"
                isReadOnly={selectedKey === "see"}
                value={caseData.type}
                onChange={(e) => setCaseData({ ...caseData, type: e.target.value })}
                className="col-span-2"
              >
                {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
              </Autocomplete>
              <div className="col-span-2 flex justify-end gap-4">
                <Button
                  variant="bordered"
                  color={crudColor}
                  onPress={async () => {
                    await handleConfirm();
                    setChangeSection(true);
                  }}
                  size={"sm"}
                  className={`${selectedKey === "create" ? "flex" : "hidden"}`}
                >
                  Crear Caso y Continuar
                  <FaArrowRight />
                </Button>
                <Button
                  variant="flat"
                  color={crudColor}
                  onPress={async () => {
                    await handleConfirm();
                    setChangeSection(true);
                  }}
                  size={"sm"}
                  className={`${selectedKey === "edit" ? "flex" : "hidden"}`}
                >
                  Editar y Continuar
                  <FaArrowRight />
                </Button>
                <Button
                  variant="shadow"
                  color={crudColor}
                  onPress={() => {
                    setChangeSection(true);
                  }}
                  size={"sm"}
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
