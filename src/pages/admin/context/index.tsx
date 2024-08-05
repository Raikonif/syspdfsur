import React, { Key, useEffect, useRef, useState } from "react";
import AdminContext from "~/pages/admin/context/AdminContext";
import { useDisclosure } from "@nextui-org/react";
import { OpCase, OpCaseSlide, OpSlidePreview } from "~/interfaces/Case.interface";
import useGetCases from "~/hooks/useGetCases";
import useGetSlides from "~/hooks/useGetSlides";
import { SEE } from "~/constants";
import useUploadSlides from "~/hooks/useUploadSlides";

interface Props {
  children: React.ReactNode;
}

function AdminProvider({ children }: Props) {
  //loading general
  const [loading, setLoading] = useState<boolean>(false);

  // MODAL CRUD CASE
  const [caseData, setCaseData] = useState<OpCase>({} as OpCase);
  const [currentId, setCurrentId] = useState<string>("");
  const [isCreated, setIsCreated] = useState<boolean>(false);
  const [slidePreview, setSlidePreview] = useState<OpSlidePreview>({} as OpSlidePreview);
  const [listSlidesPreview, setListSlidesPreview] = useState<any[]>([] as any[]);
  const [caseSlideData, setCaseSlideData] = useState<OpCaseSlide[]>([] as OpCaseSlide[]);
  const [slideData, setSlideData] = useState<OpCaseSlide>({} as OpCaseSlide);
  const [selectedKey, setSelectedKey] = useState<Key>(SEE);
  const [changeSection, setChangeSection] = useState(true);
  const [title, setTitle] = useState<string>("Ver Caso");
  const [crudColor, setCrudColor] = useState<
    "default" | "success" | "warning" | "primary" | "secondary" | "danger"
  >("success");
  //hooks modal CRUD
  const swiperRef = useRef(null);
  const cases = useGetCases();
  const slides = useGetSlides();

  // delete states
  const [deleteType, setDeleteType] = useState<"case" | "articles">("case");
  const [nameDelete, setNameDelete] = useState<string>("");

  // MODALS
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
      setCrudColor("danger");
    }
    if (selectedKey === "edit") {
      console.log("edit");
      setTitle("Editar Caso");
      setCrudColor("warning");
    }
    if (selectedKey === "see") {
      console.log("see");
      setTitle("Ver Caso");
      setCrudColor("primary");
    }
    if (selectedKey === "create") {
      console.log("create");
      setTitle("Nuevo Caso");
      setCrudColor("success");
      setCurrentId("");
      setCaseData({
        id: "",
        title: "",
        description: "",
        type: "",
        updated_at: null,
      });
    }
  };

  useEffect(() => {
    handleSelectionChange();
  }, [selectedKey]);

  return (
    <AdminContext.Provider
      value={{
        cases,
        slides,
        isCreated,
        setIsCreated,
        caseData,
        setCaseData,
        caseSlideData,
        slidePreview,
        setSlidePreview,
        listSlidesPreview,
        setListSlidesPreview,
        setCaseSlideData,
        slideData,
        setSlideData,
        loading,
        setLoading,
        currentId,
        setCurrentId,
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
        swiperRef,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export default AdminProvider;
