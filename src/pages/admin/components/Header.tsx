import { Button, Input, Switch } from "@nextui-org/react";
import { FaPlus, FaSearch } from "react-icons/all";
import React, { useCallback, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
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
    <div className="flex w-full items-center justify-between gap-3 space-x-9 bg-fuchsia-600 p-4">
      <Input
        isClearable
        className="w-full sm:max-w-[44%]"
        placeholder="Buscar ..."
        startContent={<FaSearch />}
        value={filterValue}
        onClear={() => onClear()}
        onValueChange={onSearchChange}
      />
      <div className="flex gap-10">
        <Button
          onPress={() => {}}
          color="secondary"
          variant="shadow"
          className="flex items-center justify-center"
          size="md"
        >
          Nuevo Caso <FaPlus />
        </Button>
        <Switch
          defaultSelected
          size="lg"
          color="secondary"
          thumbIcon={({ isSelected, className }) =>
            isSelected ? <FaSun className={className} /> : <FaMoon className={className} />
          }
        />
      </div>
    </div>
  );
}

export default Header;
