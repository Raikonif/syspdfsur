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
import { SlidePreview } from "~/interfaces/Case.interface";
import { DELETE, EDIT, SEE } from "~/constants";

function NewSlide() {
  const [slidePreview, setSlidePreview] = useState<SlidePreview>({} as SlidePreview);
  const fileInputRef = useRef(null);
  const { crudColor, selectedKey, listSlidesPreview, setListSlidesPreview, swiperRef } =
    useContext(AdminContext);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const goToLastSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(listSlidesPreview.length);
    }
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setSlidePreview({ ...slidePreview, image_url: URL.createObjectURL(file), image_file: file });
      // setImageURL(URL.createObjectURL(file))
      // setImageFile(file);
    }
  };

  const validatingInputs = () => {
    return !(!slidePreview.title || !slidePreview.description || !slidePreview.image_url);
  };

  const handleSaveConfirm = async () => {
    if (validatingInputs()) {
      setListSlidesPreview([...listSlidesPreview, slidePreview]);
      fileInputRef.current.value = null;
      setSlidePreview({
        id: "",
        case_id: "",
        title: "",
        description: "",
        image_url_webp: "",
        image_url: "",
        image_file: undefined,
      });
      goToLastSlide();
      toast.success("Slide guardado");
    } else {
      toast.error("Faltan campos por llenar");
    }
  };

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

      <div className="col-span-2 flex w-full pb-7">
        <Button
          color={crudColor}
          onPress={handleSaveConfirm}
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
    </div>
  );
}

export default NewSlide;
