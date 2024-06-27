import { Button, Input, Switch } from "@nextui-org/react";
import { FaPlus, FaSearch, FaMoon, FaSun } from "react-icons/fa";
import React, { useCallback, useState } from "react";
import SwitchTheme from "~/pages/admin/components/SwitchTheme";
import { AnimatePresence, motion } from "framer-motion";
function Header() {
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);

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

  return (
    <AnimatePresence>
      <motion.div
        className="fixed left-0 top-10 z-20 flex w-full items-center justify-between gap-3 bg-fuchsia-600 px-2 pb-3 pt-1 lg:relative lg:top-0 lg:justify-between lg:gap-3 lg:space-x-6 lg:p-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
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
            onPress={() => {}}
            color="secondary"
            variant="shadow"
            className="hidden items-center justify-center lg:flex"
            size="md"
          >
            Nuevo Caso <FaPlus />
          </Button>
          <Button
            onPress={() => {}}
            color="secondary"
            variant="shadow"
            className="flex items-center justify-center text-sm lg:hidden"
            size="sm"
          >
            <FaPlus />
          </Button>
          <div className="hidden lg:flex">
            <SwitchTheme size={"lg"} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Header;
