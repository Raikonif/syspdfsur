import React, { useContext, useEffect } from "react";
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
import { createCase, updateCase } from "~/service/supabase/cases.service";
import { Case, OpCase, OpSlidePreview } from "~/interfaces/Case.interface";
import { typeListOptions } from "~/constants/options/typeList.options";
import toast from "react-hot-toast";
import SwiperSlides from "~/pages/admin/cases/components/SwiperSlides";
import { EDIT, SEE } from "~/constants";
import ProgressCircle from "~/components/ProgressCircle";

function ModalCRUDCase() {
  const {
    isOpenCase,
    onCloseCase,
    selectedKey,
    setSelectedKey,
    title,
    caseData,
    setCaseData,
    setListSlidesPreview,
    crudColor,
    setNameDelete,
    currentId,
    setCurrentId,
    onOpenDelete,
    changeSection,
    setChangeSection,
    loadingAttributes,
    setLoadingAttributes,
    loading,
    setLoading,
  } = useContext(AdminContext);

  const validatingData = () => {
    return !(!caseData.title || !caseData.description || !caseData.type);
  };

  const handleCreateConfirm = async () => {
    if (validatingData()) {
      setLoadingAttributes({
        message: "Creando caso",
        color: "primary",
      });
      setLoading(true);
      try {
        const { data, error } = await createCase(caseData);
        setChangeSection(true);
        if (data) {
          toast.success("Caso creado");
          setCurrentId(data[0].id);
        } else {
          toast.error("Error al crear el caso");
          console.log("Error response", error);
          return;
        }
        setCaseData({} as Case);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
      setLoading(false);
      setListSlidesPreview([] as OpSlidePreview[]);
    } else {
      toast.error("Completa todos los campos");
      return;
    }
  };

  const handleOpenDelete = () => {
    onOpenDelete();
    setCurrentId(caseData.id);
    setNameDelete("Caso");
  };
  const handleEditConfirm = async () => {
    try {
      const { data, error } = await updateCase(currentId, caseData);
      if (data) {
        toast.success("Caso actualizado");
      } else {
        console.log("Error updating case:", error);
        toast.error("Error al actualizar el caso");
        return;
      }
      setCaseData({} as OpCase);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  useEffect(() => {
    console.log("caseData", caseData);
  }, [caseData]);

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
        {loading && (
          <ProgressCircle text={loadingAttributes.message} color={loadingAttributes.color} />
        )}
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
          <div className="flex w-full justify-end">
            <Button
              variant="shadow"
              color="danger"
              onPress={handleOpenDelete}
              size={"sm"}
              className={`${selectedKey === "create" && "hidden"}`}
            >
              Caso y Slides <FaTrash />
            </Button>
          </div>
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
                isReadOnly={selectedKey === SEE}
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
                isReadOnly={selectedKey === SEE}
                value={caseData.description}
                onChange={(e) => setCaseData({ ...caseData, description: e.target.value })}
                className="col-span-2"
              />
              <Autocomplete
                isRequired
                label={"Tipo de estudio"}
                placeholder="Selecciona tipo de estudio"
                defaultItems={typeListOptions}
                isReadOnly={selectedKey === SEE}
                value={caseData.type}
                onSelectionChange={(selectedItem) =>
                  setCaseData({ ...caseData, type: String(selectedItem) })
                }
                className="col-span-2"
              >
                {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
              </Autocomplete>
              <div className="col-span-2 flex justify-end gap-4">
                <Button
                  variant="bordered"
                  color={crudColor}
                  onPress={async () => {
                    await handleCreateConfirm();
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
                    await handleEditConfirm();
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
                  className={`${selectedKey === EDIT || selectedKey === SEE ? "flex" : "hidden"}`}
                >
                  Slides <FaArrowRight />
                </Button>
              </div>
            </>
          )}
        </div>
        {changeSection && <SwiperSlides />}
      </div>
    </GenericModal>
  );
}

export default ModalCRUDCase;
