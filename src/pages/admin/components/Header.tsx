import { Button, Input, Switch } from "@nextui-org/react";
import { FaPlus, FaSearch, FaMoon, FaSun } from "react-icons/fa";
import React, { useCallback, useContext, useEffect, useState } from "react";
import SwitchTheme from "~/pages/admin/components/SwitchTheme";
import { AnimatePresence, motion } from "framer-motion";
import AdminContext from "~/pages/admin/context/AdminContext";
import useDarkMode from "~/hooks/useDarkMode";
function Header() {
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const { onOpenCase } = useContext(AdminContext);
  const { theme } = useDarkMode();

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <div className="fixed left-0 top-10 z-20 flex w-full items-center justify-between gap-3 bg-fuchsia-600 px-2 pb-3 pt-1 dark:bg-violet-900 lg:relative lg:top-0 lg:justify-between lg:gap-3 lg:space-x-6 lg:p-4">
      <Input
        isClearable
        className="w-full max-w-[80%] sm:max-w-[44%]"
        placeholder="Buscar ..."
        startContent={<FaSearch />}
        value={filterValue}
        onClear={() => onClear()}
        onValueChange={onSearchChange}
        size="sm"
      />
      <div className="flex gap-10">
        <Button
          onPress={onOpenCase}
          color="secondary"
          variant="shadow"
          className="hidden items-center justify-center lg:flex"
          size="md"
        >
          Nuevo Caso <FaPlus />
        </Button>
        <Button
          onClick={onOpenCase}
          color="secondary"
          variant="shadow"
          className="flex items-center justify-center rounded-xl text-sm text-white lg:hidden"
          size="sm"
        >
          <FaPlus />
        </Button>
        <div className="hidden lg:flex">
          <SwitchTheme />
        </div>
      </div>
    </div>
  );
}

export default Header;
