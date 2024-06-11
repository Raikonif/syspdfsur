import supabase from "~/service/supabase/supabase.service";
import { CaseSlide } from "~/interfaces/Case.interface";

const getAllSlidesCases = async () => {
  return supabase.from("slides").select();
};

const getSlideCase = async (slideId: string) => {
  return supabase.from("slides").select().eq("id", slideId);
};

const getSlideFromCase = async (caseId: string) => {
  return supabase.from("slides").select().eq("case_id", caseId);
};

const createSlideCase = async (data: CaseSlide) => {
  return supabase.from("slides").insert(data);
};

const updateSlideCase = async (slideId: string, data: CaseSlide) => {
  return supabase.from("slides").update(data).eq("id", slideId);
};

const updateSlideFromCase = async (caseId: string, data: object) => {
  return supabase.from("slides").update(data).eq("case_id", caseId);
};

const deleteSlideCase = async (slideId: string) => {
  return supabase.from("slides").delete().eq("id", slideId);
};

const deleteSlideFromCase = async (caseId: string) => {
  return supabase.from("slides").delete().eq("case_id", caseId);
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
};
