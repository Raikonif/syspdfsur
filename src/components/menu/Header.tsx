import React, { useEffect, useRef, useState } from "react";
import GeneralButton from "~/components/GeneralButton";
import { BiPlusMedical } from "react-icons/all";
import GeneralModal from "~/components/modal/GeneralModal";
import GeneralField from "~/components/GeneralField";

function Header(): JSX.Element {
  const [desktopMode, setDesktopMode] = useState<boolean>(false);
  const [modalAddPatient, setModalAddPatient] = useState<boolean>(false);
  const refModalAddPatient = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.innerWidth < 640 ? setDesktopMode(false) : setDesktopMode(true);
  });
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
    <>
      <div className="flex w-full">
        {desktopMode && (
          <div className="flex h-20 w-full items-center justify-center rounded-lg bg-slate-100">
            <div>Header</div>
            <button
              className="fixed right-14 top-5 flex items-center rounded-xl bg-fuchsia-600"
              onClick={() => setModalAddPatient(true)}
            >
              <span className="m-1 ml-2 p-1 text-white">New Patient</span>
              <BiPlusMedical className="m-1 mr-2 text-white" />
            </button>
          </div>
        )}
        {modalAddPatient && (
          <div className="fixed inset-0 z-20 flex w-full items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
            <GeneralModal onClose={() => setModalAddPatient(false)} refModal={refModalAddPatient}>
              <div className="flex h-full w-full flex-col items-center">
                <h1 className="pb-10 text-3xl font-bold">Create Patient</h1>
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
                    textButton={"Create Patient"}
                    btnType={"submit"}
                    action={() => setModalAddPatient(false)}
                  />
                </div>
              </div>
            </GeneralModal>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
