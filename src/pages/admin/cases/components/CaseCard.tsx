import React, { useContext, useEffect, useState } from "react";
import { Button, Card, CardBody, Tooltip } from "@nextui-org/react";
import AdminContext from "~/pages/admin/context/AdminContext";
import { FaDisease, FaTrash } from "react-icons/fa";
import { OpCase, OpCaseSlide } from "~/interfaces/Case.interface";
import { CYTOLOGY, HISTOPATHOLOGY } from "~/constants";
import { getSlideFromCase } from "~/service/supabase/slides.service";

interface Props {
  caseData: OpCase;
}

function CaseCard({ caseData }: Props) {
  const [countSlides, setCountSlides] = useState(0);
  const {
    onOpenCase,
    onOpenDelete,
    setNameDelete,
    setSelectedKey,
    setDeleteType,
    setChangeSection,
    currentId,
    setCurrentId,
    setListSlidesPreview,
    listSlidesPreview,
    setCaseData,
  } = useContext(AdminContext);

  const handleSlides = async () => {
    const { data, error } = await getSlideFromCase(caseData.id);
    if (data) {
      setCountSlides(data.length);
    } else {
      console.error("Error getting slides", error);
    }
  };

  const getCurrentSlides = async () => {
    const { data, error } = await getSlideFromCase(caseData.id);
    if (data) {
      setListSlidesPreview(data);
    } else {
      console.error("Error getting slides", error);
    }
  };

  useEffect(() => {
    handleSlides();
  }, []);

  return (
    <div
      className="w-full max-w-sm cursor-pointer"
      onClick={async () => {
        onOpenCase();
        setSelectedKey("see");
        setChangeSection(false);
        setCurrentId(caseData.id);
        setCaseData(caseData);
        await getCurrentSlides();
      }}
    >
      <Card className="h-[150px] w-[250px] cursor-pointer border-t-2 border-violet-600 active:bg-violet-200 dark:active:bg-neutral-800">
        <CardBody>
          <div className="flex items-center justify-between">
            <FaDisease
              size={40}
              className={`${
                caseData.type === HISTOPATHOLOGY
                  ? "rounded-lg bg-violet-700 text-violet-50"
                  : caseData.type === CYTOLOGY
                  ? "rounded-lg bg-cyan-700 text-cyan-50"
                  : "rounded-2xl bg-fuchsia-700 p-1 text-fuchsia-50"
              }`}
            />
            <div className="flex flex-col">
              <p className="text-md text-muted-foreground font-semibold">{caseData.title}</p>
              <p className="text-md text-muted-foreground font-semibold">{countSlides}</p>
            </div>
            <Tooltip content="Borrar Caso">
              <Button
                color="danger"
                size={"sm"}
                className="cursor-pointer px-2 active:opacity-50"
                onPress={() => {
                  setNameDelete("Caso");
                  setDeleteType("case");
                  setCurrentId(caseData.id);
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
