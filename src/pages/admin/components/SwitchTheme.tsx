import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Switch } from "@nextui-org/react";
import DarkModeContext from "~/context/DarkModeContext";

interface Props {
  size?: "sm" | "md" | "lg";
}
function SwitchTheme({ size = "lg" }: Props) {
  const { theme, setTheme } = useContext(DarkModeContext);
  const handleDarkMode = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <Switch
      defaultSelected
      size={size}
      onChange={handleDarkMode}
      color="secondary"
      startContent={<FaSun />}
      endContent={<FaMoon />}
    />
  );
}

export default SwitchTheme;
