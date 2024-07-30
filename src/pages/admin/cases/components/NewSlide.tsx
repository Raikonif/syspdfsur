import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Image, Input, Textarea } from "@nextui-org/react";
import uploadDigitalOceanImg from "~/helpers/uploadDigitalOceanImg";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCamera,
  FaEdit,
  FaPlus,
  FaSave,
  FaTrash,
} from "react-icons/fa";
import toast from "react-hot-toast";
import AdminContext from "~/pages/admin/context/AdminContext";
import { createSlideCase } from "~/service/supabase/slides.service";
import { OpCaseSlide, SlidePreview } from "~/interfaces/Case.interface";
import { DELETE, EDIT, SEE } from "~/constants";
import image_placeholder from "~/assets/image_placeholder.svg";
import ImagePlaceholder from "~/pages/admin/cases/components/ImagePlaceholder";
import { MdImage } from "react-icons/md";

function NewSlide() {
  const [isSlideCreated, setIsSlideCreated] = useState(false);
  const [slidePreview, setSlidePreview] = useState<SlidePreview>({} as SlidePreview);
  const [imageURL, setImageURL] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef(null);
  const {
    crudColor,
    selectedKey,
    setCaseSlideData,
    listSlidesPreview,
    setListSlidesPreview,
    setCaseData,
    setSlideData,
    slideData,
  } = useContext(AdminContext);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setSlidePreview({ ...slidePreview, image_url: URL.createObjectURL(file), image_file: file });
      // setImageURL(URL.createObjectURL(file))
      // setImageFile(file);
    }
  };
  const handleUploadImage = async () => {
    try {
      const response = await uploadDigitalOceanImg(slidePreview.image_file);
      setSlideData({ ...setSlideData, image_url: response.data.file_url });
      console.log("response", response);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSaveConfirm = async () => {
    setListSlidesPreview([...listSlidesPreview, slidePreview]);
  };

  const handleCreateConfirm = async () => {
    try {
      await handleUploadImage();
      const { data, error } = await createSlideCase(slideData);
      if (data) {
        toast.success("Caso creado");
      } else {
        toast.error("Error al crear el caso");
        return;
      }
      setSlideData({} as OpCaseSlide);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    console.log("slideData", slidePreview);
  }, [slidePreview]);

  return (
    <div className="flex w-full flex-col gap-2.5 space-y-2 bg-white dark:bg-neutral-900 lg:grid lg:grid-cols-2 lg:space-y-0">
      <Input
        type="text"
        placeholder="Título"
        isRequired
        isReadOnly={selectedKey === SEE}
        value={slidePreview.title}
        onChange={(e) => setSlidePreview({ ...slidePreview, title: e.target.value })}
        className="col-span-2"
      />
      <Textarea
        type="text"
        placeholder="Descripción"
        isRequired
        isReadOnly={selectedKey === SEE}
        value={slidePreview.description}
        onChange={(e) => setSlidePreview({ ...slidePreview, description: e.target.value })}
        className="col-span-2"
      />
      <input
        type={"file"}
        accept="image/*"
        className="hidden"
        id="image chooser"
        ref={fileInputRef}
        onChange={handleImageChange}
      />
      <div
        className="col-span-2 my-1 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dotted border-green-500 py-2"
        onClick={handleButtonClick}
      >
        {slidePreview.image_url && slidePreview.image_url !== "" ? (
          <>
            <Image
              src={slidePreview.image_url}
              alt="image"
              className="col-span-2 max-h-[300px] max-w-[250px] p-2"
              isBlurred
            />
          </>
        ) : (
          <>
            <FaCamera size={80} className="col-span-2 flex w-full justify-center text-green-500" />
            <h2 className="text-center text-green-500">Cargar Imagen</h2>
          </>
        )}
      </div>
      {!isSlideCreated && (
        <div className="col-span-2 flex w-full pb-7">
          <Button
            color={crudColor}
            onPress={async () => {
              await handleSaveConfirm();
              setIsSlideCreated(true);
              setSlidePreview({
                id: "",
                title: "",
                description: "",
                image_url: "",
                image_file: null,
              });
              toast.success("Slide creado correctamente");
            }}
            size={"sm"}
            className={`${
              selectedKey === SEE || selectedKey === DELETE || selectedKey === EDIT
                ? "hidden"
                : "col-span-2 w-full"
            }`}
          >
            Guardar Slide <FaSave />
          </Button>
        </div>
      )}
      {!isSlideCreated && (
        <Button
          color={crudColor}
          onPress={async () => {
            await handleUploadImage();
            setIsSlideCreated(true);
            toast.success("Slide modificado correctamente");
          }}
          size={"sm"}
          className={`${
            selectedKey === "see" || selectedKey === "delete" || selectedKey === "create"
              ? "hidden"
              : ""
          } col-span-1`}
        >
          Modificar Slide <FaEdit />
        </Button>
      )}
      {isSlideCreated && (
        <Button
          onPress={() => {
            setIsSlideCreated(false);
            setSlidePreview({
              title: "",
              description: "",
              image_url: "",
              image_file: null,
            } as SlidePreview);
          }}
          variant="ghost"
          color="primary"
          className="col-span-2"
        >
          Agregar otro Slide <FaPlus />
        </Button>
      )}
      <Button
        onPress={() => setIsSlideCreated(false)}
        variant="shadow"
        color="danger"
        size={"sm"}
        className={`${
          selectedKey === "create" ? "hidden" : selectedKey === "edit" ? "col-span-1" : "col-span-2"
        }`}
      >
        Borrar Slide <FaTrash />
      </Button>
      {/*<Button*/}
      {/*  onPress={() => setIsSlideCreated(false)}*/}
      {/*  variant="shadow"*/}
      {/*  color="primary"*/}
      {/*  size={"sm"}*/}
      {/*  className={`${selectedKey === "create" && "hidden"} col-span-1`}*/}
      {/*>*/}
      {/*  <FaArrowLeft /> Anterior*/}
      {/*</Button>*/}
      {/*<Button*/}
      {/*  onPress={() => setIsSlideCreated(false)}*/}
      {/*  variant="shadow"*/}
      {/*  color="primary"*/}
      {/*  size={"sm"}*/}
      {/*  className={`${selectedKey === "create" && "hidden"} col-span-1`}*/}
      {/*>*/}
      {/*  Siguiente <FaArrowRight />*/}
      {/*</Button>*/}
    </div>
  );
}

export default NewSlide;
