import supabase from "~/service/supabase/supabase.service";
import { Case, CaseSlide, OpCase, OpCaseSlide } from "~/interfaces/Case.interface";

const getAllCases = async () => {
  return supabase.from("cases").select();
};

const getCase = async (caseId: string) => {
  return supabase.from("cases").select().eq("id", caseId);
};

const createCase = async (data: OpCase) => {
  return supabase.from("cases").insert(data).select("*");
};

const updateCase = async (caseId: string, data: OpCase) => {
  return supabase.from("cases").update(data).eq("id", caseId);
};

const deleteCase = async (caseId: string) => {
  return supabase.from("cases").delete().eq("id", caseId).select();
};

const createCasesSlides = async (data: OpCaseSlide[]) => {
  return supabase.from("cases_slides").insert(data);
};

export { getAllCases, getCase, createCase, updateCase, deleteCase, createCasesSlides };
