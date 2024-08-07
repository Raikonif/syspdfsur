import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Image, Input, Textarea } from "@nextui-org/react";
import { FaArrowLeft, FaArrowRight, FaCamera, FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import AdminContext from "~/pages/admin/context/AdminContext";
import { OpSlidePreview } from "~/interfaces/Case.interface";
import { DELETE, EDIT, SEE } from "~/constants";

interface Props {
  data?: OpSlidePreview;
  index: number;
}
function SlideForModal({ data, index }: Props) {
  const [isSlideCreated, setIsSlideCreated] = useState(false);
  const [slidePreview, setSlidePreview] = useState<OpSlidePreview>(data);
  const fileInputRef = useRef(null);
  const { crudColor, selectedKey, setListSlidesPreview, listSlidesPreview } =
    useContext(AdminContext);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setSlidePreview({ ...slidePreview, image_url: URL.createObjectURL(file), image_file: file });
    }
  };

  useEffect(() => {
    const newArray = [...listSlidesPreview];
    newArray[index] = slidePreview;
    setListSlidesPreview(newArray);
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
              className="col-span-2 max-h-[200px] max-w-[250px] p-2"
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
        <Button
          color={crudColor}
          onPress={async () => {
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
