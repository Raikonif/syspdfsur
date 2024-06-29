import React, { useContext } from "react";
import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Tooltip } from "@nextui-org/react";
import AdminContext from "~/pages/admin/context/AdminContext";
import { FaEdit, FaTrash } from "react-icons/fa";

function CaseCard() {
  const { onOpenCase } = useContext(AdminContext);

  return (
    <div onClick={onOpenCase}>
      <Card className="max-w-[400px] cursor-pointer active:bg-fuchsia-200 dark:active:bg-neutral-800">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">NextUI</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
        <CardFooter className="flex justify-end">
          {/*<Tooltip content="Modificar Caso">*/}
          {/*  <span className="cursor-pointer px-2 text-end text-lg text-default-400 active:opacity-50">*/}
          {/*    <FaEdit className="text-fuchsia-600" />*/}
          {/*  </span>*/}
          {/*</Tooltip>*/}
          <Tooltip content="Borrar Caso">
            <span className="cursor-pointer px-2 text-lg text-default-400 active:opacity-50">
              <FaTrash className="text-slate-400" />
            </span>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CaseCard;
