import React from "react";
import GeneralModal from "~/components/modal/GeneralModal";
import GeneralField from "~/components/GeneralField";
import GeneralButton from "~/components/GeneralButton";

interface IProps {
  onClose: (isOpen: boolean) => void;
  refModal: React.RefObject<HTMLDivElement>;
}

function ModalEdit({ onClose, refModal }: IProps) {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nisl vi elit. Lorem Ipsum dolor sit amet";
  const objField = {
    name: "description",
    id: 1,
    type: "text",
    value: description,
    placeholder: "description",
  };
  return (
    <div className="fixed inset-0 z-20 flex w-full items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
      <GeneralModal onClose={() => onClose(false)} refModal={refModal}>
        <div className="flex h-full w-full flex-col items-center">
          <h1 className="pb-10 text-3xl font-bold">Edit Patient</h1>
          <GeneralField fieldObj={objField} />
          <GeneralField fieldObj={objField} />
          <GeneralField fieldObj={objField} />
          <div className="flex w-full">
            <GeneralField fieldObj={objField} />
            <GeneralField fieldObj={objField} />
          </div>
          <div className="flex w-full">
            <GeneralField fieldObj={objField} />
            <GeneralField fieldObj={objField} />
            <GeneralField fieldObj={objField} />
          </div>
          <div className="absolute bottom-7 right-7">
            <GeneralButton
              textButton={"Save Changes"}
              btnType={"submit"}
              action={() => onClose(false)}
            />
          </div>
        </div>
      </GeneralModal>
    </div>
  );
}

export default ModalEdit;
