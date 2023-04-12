import IFieldProps from "~/interfaces/fieldInterface";

type BtnType = "submit" | "button" | "reset";

interface IFormOption {
  buttonName: string;
  handleClick: () => void;
  btnType: BtnType;
  fields: IFieldProps[];
}
const formOption: IFormOption = {
  buttonName: "Ingresar",
  handleClick: () => {
    console.log("click");
  },
  btnType: "submit",
  fields: [
    {
      id: 1,
      name: "name_field",
      type: "text",
      placeholder: "Nombre",
    },
    {
      id: 2,
      name: "last_name_field",
      type: "text",
      placeholder: "Apellido",
    },
    {
      id: 3,
      name: "gender_field",
      type: "text",
      placeholder: "Sexo",
    },
    {
      id: 4,
      name: "age_field",
      type: "text",
      placeholder: "Edad",
    },
  ],
};

export default formOption;
