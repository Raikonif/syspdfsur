import React, { ReactElement, useEffect, useRef, useState, useContext } from "react";
import GeneralModal from "~/components/modal/GeneralModal";
import { createPatient, getPatients } from "~/service/patient.service";
import Patient from "~/interfaces/Patient.type";
import useGetData from "~/hooks/useGetData";
import GeneralButton from "~/components/GeneralButton";

interface IProps {
  onClose: (isOpen: boolean) => void;
  refModal: React.RefObject<HTMLDivElement>;
}

function ModalCreate({ onClose, refModal }: IProps): ReactElement {
  const [active, setActive] = useState<string>("");
  const [genderSelected, setGenderSelected] = useState<string>("Male");
  const [savePatient, setSavePatient] = useState<Patient>({
    first_name: "",
    last_name: "",
    age: "",
    gender: "",
    dni: "",
    clinical_history: "",
    register_birth: "",
  } as Patient);
  const addPatient = async (patient: Patient) => {
    await createPatient(patient);
  };
  // const handleChangeSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   e.preventDefault();
  //   const value = e.target.value;
  //   setGenderSelected(value);
  //   setSavePatient({ ...savePatient, gender: genderSelected });
  // };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addPatient(savePatient);
    onClose(false);
    console.log("savePatient", savePatient);
  };
  useEffect(() => {
    console.log("savePatient", savePatient);
  }, [savePatient]);
  return (
    <div className="fixed inset-0 z-20 flex w-full items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
      <GeneralModal
        onClose={() => onClose(false)}
        refModal={refModal}
        customWidth="w-auto"
        customHeight="h-auto"
      >
        <form className="flex h-full w-full flex-col items-center" onSubmit={handleSubmit}>
          <h1 className="mx-4 pb-5 pt-3 text-3xl font-bold">Crear Paciente</h1>
          <div className="m-1 flex w-full justify-between">
            <input
              type="text"
              aria-autocomplete="none"
              placeholder="Nombre"
              className="m-1 w-full rounded-lg border-4 bg-slate-200 p-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
              onChange={(e) => setSavePatient({ ...savePatient, first_name: e.target.value })}
              value={savePatient.first_name}
              required={true}
            />
            <input
              type="text"
              aria-autocomplete="none"
              className="m-1 w-full rounded-lg border-4 bg-slate-200 p-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
              placeholder="Apellidos"
              onChange={(e) => setSavePatient({ ...savePatient, last_name: e.target.value })}
              value={savePatient.last_name}
              required={true}
            />
          </div>
          <div className="m-1 flex w-full justify-center">
            <input
              type="text"
              aria-autocomplete="none"
              className="m-1 rounded-lg border-4 bg-slate-200 p-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
              placeholder="Edad"
              onChange={(e) => setSavePatient({ ...savePatient, age: Number(e.target.value) })}
              value={savePatient.age}
              required={true}
            />
            <select
              name="gender"
              id="gender"
              value={savePatient.gender}
              className="m-1 rounded-lg border-4 bg-slate-200 p-2 focus:bg-orange-500 focus:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
              onChange={(e) => setSavePatient({ ...savePatient, gender: e.target.value })}
            >
              <option value="Male" className="bg-blue-600 text-white hover:bg-blue-300">
                Hombre
              </option>
              <option value="Female" className="bg-pink-600 text-white hover:bg-pink-300">
                Mujer
              </option>
            </select>
          </div>
          <div className="m-1 flex w-full justify-between">
            <input
              type="text"
              aria-autocomplete="none"
              className="m-1 rounded-lg border-4 bg-slate-200 p-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
              placeholder="C.I."
              onChange={(e) => setSavePatient({ ...savePatient, dni: Number(e.target.value) })}
              value={savePatient.dni}
            />
            <input
              type="text"
              aria-autocomplete="none"
              className="m-1 rounded-lg border-4 bg-slate-200 p-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
              placeholder="Historial Clinico"
              onChange={(e) =>
                setSavePatient({ ...savePatient, clinical_history: Number(e.target.value) })
              }
              value={savePatient.clinical_history}
            />
            <input
              type="text"
              aria-autocomplete="none"
              className="m-1 rounded-lg border-4 bg-slate-200 p-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
              placeholder="Numero de Registro"
              onChange={(e) =>
                setSavePatient({ ...savePatient, register_birth: Number(e.target.value) })
              }
              value={savePatient.register_birth}
            />
          </div>

          <div className="mt-3 w-full">
            <GeneralButton textButton={"Crear Paciente"} btnType={"submit"} />
          </div>
        </form>
      </GeneralModal>
    </div>
  );
}

export default ModalCreate;
