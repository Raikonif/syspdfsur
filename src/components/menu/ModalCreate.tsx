import React, { ReactElement, useState } from "react";
import GeneralModal from "~/components/modal/GeneralModal";
import { AiOutlineHeart } from "react-icons/all";
import GeneralField from "~/components/GeneralField";
import GeneralButton from "~/components/GeneralButton";

interface IProps {
  onClose: () => void;
  refModal: React.RefObject<HTMLDivElement>;
}

function ModalCreate({ onClose, refModal }: IProps): ReactElement {
  return (
    <div className="fixed inset-0 z-20 flex w-full items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
      <GeneralModal onClose={onClose} refModal={refModal}>
        <div className="flex h-full w-full flex-col items-center">
          <h1 className="pb-10 text-3xl font-bold">Create Patient</h1>
          <select
            id="description"
            placeholder="Select a Patient"
            className=" w-full rounded-lg border-2 p-3 focus:border-fuchsia-600 focus:outline-none"
            value={""}
            onChange={(e) => console.log(e.target.value)}
          />
          <div className="flex w-full items-center justify-between p-2 px-5">
            <div className="flex items-center justify-center">
              <label id="histopato" placeholder="histopatologico" />
              <input type="radio" value="1" id="histopato" name="type" className="peer sr-only" />
              <i>
                <AiOutlineHeart className="text-2xl text-fuchsia-600" />
              </i>
              <span className="mx-2">histopatologico</span>
            </div>
            <div className="flex items-center justify-center">
              <label id="citopato" placeholder="citopatologico" />
              <input type="radio" value="2" id="citopato" name="type" className="peer sr-only" />
              <i>
                <AiOutlineHeart className="text-2xl text-fuchsia-600" />
              </i>
              <span className="mx-2">citopatologico</span>
            </div>
            <div className="flex items-center justify-center">
              <label id="otro" placeholder="otro" />
              <input type="radio" value="3" id="otro" name="type" className="peer sr-only" />
              <i>
                <AiOutlineHeart className="text-2xl text-fuchsia-600" />
              </i>
              <span className="mx-1">otro</span>
            </div>
          </div>
          <div className="absolute bottom-7 right-7">
            <GeneralButton textButton={"Create Patient"} btnType={"submit"} action={onClose} />
          </div>
        </div>
      </GeneralModal>
    </div>
  );
}

export default ModalCreate;
