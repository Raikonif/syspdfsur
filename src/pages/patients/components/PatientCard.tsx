import React, { ReactElement, useEffect, useState } from "react";
import Patient from "~/interfaces/Patient.type";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { HiOutlineUserAdd } from "react-icons/hi";
import { MdEditSquare } from "react-icons/md";
interface IProps {
  patient: Patient;
}
function PatientCard({ patient }: IProps): ReactElement {
  const [genderColor, setGenderColor] = useState<string>("green-500");
  useEffect(() => {
    if (Number(patient.gender) === 1 || patient.gender === "Male") {
      setGenderColor("border-blue-500");
    } else {
      setGenderColor("border-pink-500");
    }
  }, [patient]);
  return (
    <div
      className={`mx-2 my-2 flex rounded-3xl border-l-4 ${genderColor} duration-200 hover:scale-105`}
    >
      <article className="container flex w-full justify-between rounded-2xl border shadow-2xl">
        <div className="flex items-center justify-center">
          <span className="m-1 p-2">{patient.first_name}</span>
          <span className="m-1 p-2">{patient.last_name}</span>
          {/*<span className="m-1 p-2">{patient.age}</span>*/}
          {/*<span className="m-1 p-2">{patient.dni}</span>*/}
          {/*<span className="m-1 p-2">{patient.gender}</span>*/}
          {/*<span className="m-1 p-2">{patient.clinical_history}</span>*/}
          {/*<span className="m-1 p-2">{patient.register_birth}</span>*/}
        </div>
        <div className="mr-3 flex items-center justify-center p-1">
          <button className="m-1 rounded-lg border shadow-lg">
            <HiOutlineUserAdd className="m-1 h-6 w-6 text-fuchsia-600" />
          </button>
          <button className="m-1 rounded-lg border shadow-lg">
            <RiDeleteBin5Fill className="m-1 h-6 w-6 text-fuchsia-600" />
          </button>
          <button className="m-1 rounded-lg border shadow-lg">
            <MdEditSquare className="m-1 h-6 w-6 text-fuchsia-600" />
          </button>
        </div>
      </article>
    </div>
  );
}

export default PatientCard;
