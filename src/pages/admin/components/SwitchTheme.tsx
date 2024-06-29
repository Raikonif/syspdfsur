import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Switch } from "@nextui-org/react";
import useDarkMode from "~/hooks/useDarkMode";

interface Props {
  size?: "sm" | "md" | "lg";
}
function SwitchTheme({ size = "lg" }: Props) {
  const { theme, setTheme } = useDarkMode();
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
