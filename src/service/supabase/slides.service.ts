import supabase from "~/service/supabase/supabase.service";
import { OpCaseSlide } from "~/interfaces/Case.interface";

const getAllSlidesCases = async () => {
  return supabase.from("slides").select();
};

const getSlideCase = async (slideId: string) => {
  return supabase.from("slides").select().eq("id", slideId);
};

const getSlideFromCase = async (caseId: string) => {
  return supabase.from("slides").select().eq("case_id", caseId);
};

const createSlideCase = async (data: any) => {
  return supabase.from("slides").insert(data).select();
};

const updateSlideCase = async (slideId: string, data: OpCaseSlide) => {
  return supabase.from("slides").update(data).eq("id", slideId);
};

const updateSlideFromCase = async (caseId: string, data: object) => {
  return supabase.from("slides").update(data).eq("case_id", caseId);
};

const deleteSlideCase = async (slideId: string) => {
  return supabase.from("slides").delete().eq("id", slideId).select();
};

const deleteSlideFromCase = async (caseId: string) => {
  return supabase.from("slides").delete().eq("case_id", caseId);
};

const deleteAllSlidesFromCase = async (slidesIDs: string[]) => {
  return supabase.from("slides").delete().in("id", slidesIDs);
};

export {
  getAllSlidesCases,
  getSlideCase,
  getSlideFromCase,
  createSlideCase,
  updateSlideCase,
  updateSlideFromCase,
  deleteSlideCase,
  deleteSlideFromCase,
  deleteAllSlidesFromCase,
};
