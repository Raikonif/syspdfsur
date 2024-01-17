import Datepicker from "react-tailwindcss-datepicker";
import React, { ReactElement } from "react";
import { Dates } from "~/interfaces/Dates.type";

interface IProps {
  valueSampleDate: Dates;
  valueReceptionDate: Dates;
  valueElaborationDate: Dates;
  onChangeSampleDate: (value: any) => void;
  onChangeReceptionDate: (value: any) => void;
  onChangeElaborationDate: (value: any) => void;
  width?: string;
}

function ReportDatetimepickers({
  valueSampleDate,
  valueElaborationDate,
  valueReceptionDate,
  onChangeSampleDate,
  onChangeReceptionDate,
  onChangeElaborationDate,
  width = "w-1/3",
}: IProps): ReactElement {
  return (
    <>
      <div className={`${width} m-1 flex flex-col rounded-lg border border-indigo-600 p-2`}>
        <label>
          <span className="text-gray-700">{"Toma de Muestra"}: </span>
        </label>
        <Datepicker
          value={valueSampleDate}
          asSingle={true}
          useRange={false}
          onChange={onChangeSampleDate}
          showShortcuts={true}
          primaryColor={"fuchsia"}
          placeholder={"Fecha de Toma de Muestra"}
          displayFormat={"DD/MM/YYYY"}
        />
      </div>
      <div className={`${width} m-1 flex flex-col rounded-lg border border-indigo-600 p-2`}>
        <label>
          <span className="text-gray-700">{"Recepcion de Muestra"}: </span>
        </label>
        <Datepicker
          value={valueReceptionDate}
          asSingle={true}
          useRange={false}
          onChange={onChangeReceptionDate}
          showShortcuts={true}
          primaryColor={"fuchsia"}
          placeholder={"Fecha de Recepcion de Muestra"}
          displayFormat={"DD/MM/YYYY"}
        />
      </div>
      <div className={`${width} m-1 flex flex-col rounded-lg border border-indigo-600 p-2`}>
        <label>
          <span className="text-gray-700">{"Elaboracion de Informe"}: </span>
        </label>
        <Datepicker
          value={valueElaborationDate}
          asSingle={true}
          useRange={false}
          onChange={onChangeElaborationDate}
          showShortcuts={true}
          primaryColor={"fuchsia"}
          placeholder={"Fecha de Elaboracion de Informe"}
          displayFormat={"DD/MM/YYYY"}
        />
      </div>
    </>
  );
}

export default ReportDatetimepickers;
