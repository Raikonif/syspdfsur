import { createContext, Key } from "react";
import { Case, CaseSlide, OpCase, OpCaseSlide } from "~/interfaces/Case.interface";
import { UseQueryResult } from "@tanstack/react-query";

interface AdminContextData {
  cases: UseQueryResult<Case[], Error>;
  slides: UseQueryResult<CaseSlide[], Error>;
  caseData: OpCase;
  setCaseData: (data: OpCase) => void;
  caseSlideData: OpCaseSlide[];
  setCaseSlideData: (data: OpCaseSlide[]) => void;
  currentId: string;
  setCurrentId: (id: string) => void;
  isOpenCase: boolean;
  onOpenCase: () => void;
  onCloseCase: () => void;
  isOpenMenu: boolean;
  onOpenMenu: () => void;
  onCloseMenu: () => void;
  isOpenDelete: boolean;
  onOpenDelete: () => void;
  onCloseDelete: () => void;
  nameDelete: string;
  setNameDelete: (name: string) => void;
  crudColor: "default" | "success" | "warning" | "primary" | "secondary" | "danger";
  setCrudColor: (
    color: "default" | "success" | "warning" | "primary" | "secondary" | "danger",
  ) => void;
  selectedKey: Key;
  setSelectedKey: (key: Key) => void;
  title: string;
  setTitle: (title: string) => void;
  deleteType: "case" | "articles";
  setDeleteType: (type: "case" | "articles") => void;
  changeSection: boolean;
  setChangeSection: (nextSection: boolean) => void;
  functionDelete: () => void;
  handleSelectionChange: () => void;
}

const AdminContext = createContext<AdminContextData>({} as AdminContextData);

export default AdminContext;
