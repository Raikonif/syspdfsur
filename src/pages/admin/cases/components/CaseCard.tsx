import React, { useContext } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Tooltip,
} from "@nextui-org/react";
import AdminContext from "~/pages/admin/context/AdminContext";
import { FaCircle, FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import { OpCase } from "~/interfaces/Case.interface";
import { CYTOLOGY, HISTOPATHOLOGY } from "~/constants";

interface Props {
  data: OpCase;
}

function CaseCard({ data }: Props) {
  const {
    onOpenCase,
    onOpenDelete,
    setNameDelete,
    setSelectedKey,
    setDeleteType,
    setChangeSection,
  } = useContext(AdminContext);

  return (
    <div
      className="w-full cursor-pointer"
      onClick={() => {
        onOpenCase();
        setSelectedKey("see");
        setChangeSection(false);
      }}
    >
      <Card className="cursor-pointer active:bg-fuchsia-200 dark:active:bg-neutral-800">
        <CardHeader className="flex gap-3">
          <FaCircle
            size={20}
            className={`${
              data.type === HISTOPATHOLOGY
                ? "text-violet-700"
                : data.type === CYTOLOGY
                ? "text-cyan-700"
                : "text-blue-500"
            }`}
          />
          <div className="flex flex-col">
            <p className="text-md font-semibold ">{data.title}</p>
            {/*<p className="text-small text-default-500">{data.type}</p>*/}
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Tooltip content="Borrar Caso">
            <Button
              color="danger"
              size={"sm"}
              className="cursor-pointer px-2 active:opacity-50"
              onPress={() => {
                setNameDelete("Caso");
                setDeleteType("case");
                onOpenDelete();
              }}
            >
              Borrar <FaTrash />
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CaseCard;
