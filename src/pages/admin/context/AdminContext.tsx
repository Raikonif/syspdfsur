import { createContext, Key } from "react";
import { Case, CaseSlide, OpCase, OpCaseSlide, OpSlidePreview } from "~/interfaces/Case.interface";
import { UseQueryResult } from "@tanstack/react-query";

interface AdminContextData {
  cases: UseQueryResult<Case[], Error>;
  slides: UseQueryResult<CaseSlide[], Error>;
  isCreated: boolean;
  setIsCreated: (created: boolean) => void;
  caseData: OpCase;
  setCaseData: (data: OpCase) => void;
  slideData: OpCaseSlide;
  setSlideData: (data: OpCaseSlide) => void;
  slidePreview: OpSlidePreview;
  setSlidePreview: (data: OpSlidePreview) => void;
  listSlidesPreview: any[];
  setListSlidesPreview: (data: any[]) => void;
  caseSlideData: OpCaseSlide[];
  setCaseSlideData: (data: OpCaseSlide[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
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
  swiperRef: any;
}

const AdminContext = createContext<AdminContextData>({} as AdminContextData);

export default AdminContext;
