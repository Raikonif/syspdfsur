type BtnType = "submit" | "button" | "reset";
interface ILoginOption {
  buttonName: string;
  handleClick: () => void;
  btnType: BtnType;
}
const loginOption: ILoginOption = {
  buttonName: "Ingresar",
  handleClick: () => {
    console.log("click");
  },
  btnType: "submit",
};

export default loginOption;
