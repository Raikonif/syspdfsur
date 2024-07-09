import React, { useContext, useRef, useState } from "react";
import { Button, Image, Input, Textarea } from "@nextui-org/react";
import uploadDigitalOceanImg from "~/helpers/uploadDigitalOceanImg";
import { FaArrowLeft, FaArrowRight, FaCamera, FaPlus, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import AdminContext from "~/pages/admin/context/AdminContext";

function SlideForModal() {
  const [isSlideCreated, setIsSlideCreated] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef(null);
  const { crudColor, selectedKey } = useContext(AdminContext);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

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
  return (
    <div className="flex w-full flex-col gap-2.5 space-y-2 lg:grid lg:grid-cols-2 lg:space-y-0">
      <Input
        type="text"
        placeholder="Título"
        isRequired
        className="col-span-2"
        isReadOnly={selectedKey === "see"}
      />
      <Textarea
        type="text"
        placeholder="Descripción"
        isRequired
        className="col-span-2"
        isReadOnly={selectedKey === "see"}
      />
      <input
        type={"file"}
        accept="image/*"
        className="hidden"
        id="image chooser"
        ref={fileInputRef}
        onChange={handleImageChange}
      />
      {imageURL && (
        <div className="col-span-2 flex justify-center">
          <Image
            src={imageURL}
            alt="image"
            className="col-span-2 max-h-[300px] max-w-[250px]"
            isBlurred
          />
        </div>
      )}
      <Button
        color={crudColor}
        variant="ghost"
        onPress={handleButtonClick}
        size={"sm"}
        className={`${selectedKey === "see" || selectedKey === "delete" ? "hidden" : "col-span-2"}`}
      >
        Cargar Imagen <FaCamera size={20} />
      </Button>
      {!isSlideCreated && (
        <Button
          color={crudColor}
          onPress={async () => {
            await handleUploadImage();
            setIsSlideCreated(true);
            toast.success("Slide creado correctamente");
          }}
          size={"sm"}
          className={`${
            selectedKey === "see" || selectedKey === "delete" || selectedKey === "edit"
              ? "hidden"
              : "col-span-2"
          }`}
        >
          Crear Slide <FaPlus />
        </Button>
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
          Modificar Slide <FaPlus />
        </Button>
      )}
      {isSlideCreated && (
        <Button
          onPress={() => setIsSlideCreated(false)}
          variant="ghost"
          color="primary"
          className="col-span-2"
        >
          Nuevo Slide <FaPlus />
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
      <Button
        onPress={() => setIsSlideCreated(false)}
        variant="shadow"
        color="primary"
        size={"sm"}
        className={`${selectedKey === "create" && "hidden"} col-span-1`}
      >
        <FaArrowLeft /> Anterior
      </Button>
      <Button
        onPress={() => setIsSlideCreated(false)}
        variant="shadow"
        color="primary"
        size={"sm"}
        className={`${selectedKey === "create" && "hidden"} col-span-1`}
      >
        Siguiente <FaArrowRight />
      </Button>
    </div>
  );
}

export default SlideForModal;
