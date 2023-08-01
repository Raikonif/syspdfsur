import React, { ReactElement, useState } from "react";
import GeneralModal from "~/components/modal/GeneralModal";
import { BsArrowRightCircle, BsPersonPlusFill, FaHandHoldingMedical } from "react-icons/all";
import Histopathology from "~/pages/diagnoses/components/modals/modal_create/subsections/Histopathology";
import PatientSelect from "~/pages/diagnoses/components/modals/modal_create/PatientSelect";
import { getPatients } from "~/service/patient.service";
import Patient from "~/interfaces/Patient.type";
import useGetData from "~/hooks/useGetData";
import MedicSelect from "~/pages/diagnoses/components/modals/modal_create/MedicSelect";
import { getMedics } from "~/service/medic.service";
import Medic from "~/interfaces/Medic.type";

interface IProps {
  onClose: (isOpen: boolean) => void;
  refModal: React.RefObject<HTMLDivElement>;
}

function ModalCreate({ onClose, refModal }: IProps): ReactElement {
  const [active, setActive] = useState<string>("");
  const { data: patients } = useGetData<Patient[]>({ dataToFetch: getPatients });
  const { data: medics } = useGetData<Medic[]>({ dataToFetch: getMedics });
  const [medicSelected, setMedicSelected] = useState<Medic>({} as Medic);
  const [patientSelected, setPatientSelected] = useState<Patient>({} as Patient);

  return (
    <div className="fixed inset-0 z-20 flex w-full items-center justify-center bg-gray-400 bg-opacity-50 p-10 backdrop-blur-sm">
      <GeneralModal onClose={() => onClose(false)} refModal={refModal}>
        <div className="flex h-full w-full flex-col items-center">
          <h1 className="mx-4 pb-5 pt-3 text-3xl font-bold">Crear Diagnóstico</h1>
          <div className="flex w-full flex-col p-1">
            <div className="flex justify-between">
              <div className="mx-2 flex w-full items-center">
                <PatientSelect data={patients} option={setPatientSelected} />
                <button>
                  <BsPersonPlusFill
                    size={30}
                    className="m-2 rounded-lg bg-indigo-200 p-1 text-indigo-600"
                  />
                </button>
              </div>
              <div className="flex w-full items-center">
                <MedicSelect data={medics} option={setMedicSelected} />
                <button>
                  <FaHandHoldingMedical
                    size={30}
                    className="m-2 rounded-lg bg-indigo-200 p-1 text-indigo-600"
                  />
                </button>
              </div>
            </div>
            {/*<input type="text" value="" id="" name="" placeholder="Diagnostico Clinico" />*/}
            {/*<input type="text" value="" id="" name="" placeholder="Servicio/Centro" />*/}
            {/*<input type="text" value="" id="" name="" placeholder="Numero de estudio" />*/}
            <div className="flex w-full items-center">
              <div className="w-full">
                <input type="radio" value="1" id="histo" name="type" className="peer hidden" />
                <label
                  id="histo"
                  className="m-2 flex cursor-pointer select-none items-center justify-between rounded-3xl bg-indigo-700 p-2 text-center font-semibold text-white hover:bg-indigo-600 peer-checked:border-4 peer-checked:border-indigo-400"
                  htmlFor="histo"
                  onClick={() => setActive("1")}
                >
                  <span className="w-full">Histopatológico</span>
                  <BsArrowRightCircle className="h-5 w-5" />
                </label>
              </div>
              <div className="w-full">
                <input type="radio" value="2" id="cito" name="type" className="peer hidden" />
                <label
                  id="cito"
                  className="m-2 flex cursor-pointer select-none items-center justify-between rounded-3xl bg-lime-600 p-2 text-center font-semibold text-white hover:bg-lime-500 peer-checked:border-4 peer-checked:border-lime-300"
                  htmlFor="cito"
                  onClick={() => setActive("2")}
                >
                  <span className="w-full">Citológico</span>
                  <BsArrowRightCircle className="h-5 w-5" />
                </label>
              </div>
              <div className="w-full">
                <input type="radio" value="3" id="bio" name="type" className="peer hidden" />
                <label
                  id="bio"
                  className="m-2 flex cursor-pointer select-none items-center justify-between rounded-3xl bg-pink-700 p-2 text-center font-semibold text-white hover:bg-pink-600 peer-checked:border-4 peer-checked:border-pink-400"
                  htmlFor="bio"
                  onClick={() => setActive("3")}
                >
                  <span className="w-full">PAP</span>
                  <BsArrowRightCircle className="h-5 w-5" />
                </label>
              </div>
            </div>
          </div>
          {active === "1" && <Histopathology />}
          {active === "2" && (
            <div className="h-full w-full items-center justify-center bg-slate-600">
              <h1>Citologia</h1>
            </div>
          )}
          {active === "3" && (
            <div className="h-full w-full items-center justify-center bg-slate-600">Biopsia</div>
          )}
        </div>
      </GeneralModal>
    </div>
  );
}

export default ModalCreate;
