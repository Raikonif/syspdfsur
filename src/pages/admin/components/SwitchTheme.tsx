import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Switch } from "@nextui-org/react";

interface Props {
  size?: "sm" | "md" | "lg";
}
function SwitchTheme({ size = "lg" }: Props) {
  return (
    <Switch
      defaultSelected
      size={size}
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? <FaSun className={className} /> : <FaMoon className={className} />
      }
    />
  );
}

export default SwitchTheme;
