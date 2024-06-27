import { Button, Input, Switch } from "@nextui-org/react";
import { FaPlus, FaSearch, FaMoon, FaSun } from "react-icons/fa";
import React, { useCallback, useState } from "react";
import SwitchTheme from "~/pages/admin/components/SwitchTheme";
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
    <div className="flex w-full items-center justify-between gap-3 bg-fuchsia-600 p-2 lg:justify-between lg:gap-3 lg:space-x-6 lg:p-4">
      <Input
        isClearable
        className="w-fit sm:max-w-[44%] lg:w-full"
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
    </div>
  );
}

export default Header;
