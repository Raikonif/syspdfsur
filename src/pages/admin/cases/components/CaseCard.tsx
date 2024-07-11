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
import { FaCircle, FaDisease, FaEdit, FaFirstOrderAlt, FaTrash } from "react-icons/fa";
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
    setCaseId,
    setCaseData,
  } = useContext(AdminContext);

  return (
    <div
      className="w-full max-w-sm cursor-pointer"
      onClick={() => {
        onOpenCase();
        setSelectedKey("see");
        setChangeSection(false);
        setCaseId(data.id);
        setCaseData(data);
      }}
    >
      <Card className="cursor-pointer active:bg-violet-200 dark:active:bg-neutral-800">
        <CardBody>
          <div className="flex items-center justify-between">
            <FaDisease
              size={40}
              className={`${
                data.type === HISTOPATHOLOGY
                  ? "rounded-lg bg-violet-700 text-violet-50"
                  : data.type === CYTOLOGY
                  ? "rounded-lg bg-cyan-700 text-cyan-50"
                  : "rounded-2xl bg-fuchsia-700 p-1 text-fuchsia-50"
              }`}
            />
            <div className="flex flex-col">
              <p className="text-md text-muted-foreground font-semibold">{data.title}</p>
            </div>
            <Tooltip content="Borrar Caso">
              <Button
                color="danger"
                size={"sm"}
                className="cursor-pointer px-2 active:opacity-50"
                onPress={() => {
                  setNameDelete("Caso");
                  setDeleteType("case");
                  setCaseId(data.id);
                  onOpenDelete();
                }}
              >
                <FaTrash />
              </Button>
            </Tooltip>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default CaseCard;
