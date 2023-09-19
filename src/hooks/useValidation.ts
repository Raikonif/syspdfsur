import React, { useState } from "react";
import { IReportForm } from "~/interfaces/Report.type";
import {
  CytopathologyReport,
  GenericValidation,
  GenericValues,
  HistopathologyReport,
  PAPReport,
} from "~/interfaces/SubReports.interface";

interface IReports {
  report: IReportForm;
  subReport: HistopathologyReport | PAPReport | CytopathologyReport;
}

function useValidation<T>({ report, subReport }: IReports) {
  const [values, setValues] = useState<GenericValues>({} as GenericValues);
  const [isFormValid, setIsFormValid] = useState<GenericValidation>({} as GenericValidation);
  const expressions = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  };
  const handleValueRegularExpressions = () => {
    const isValid = Object.values(isFormValid).every((value: boolean) => value);
    if (isValid) {
      console.log(values);
    } else {
      console.log("no valido");
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setIsFormValid({ ...isFormValid, [name]: expressions[name].test(value) });
  };
}

export default useValidation;
