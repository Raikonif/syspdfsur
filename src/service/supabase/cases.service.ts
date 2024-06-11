import supabase from "~/service/supabase/supabase.service";
import { Case } from "~/interfaces/Case.interface";

const getAllCases = async () => {
  return supabase.from("cases").select();
};

const getCase = async (caseId: string) => {
  return supabase.from("cases").select().eq("id", caseId);
};

const createCase = async (data: Case) => {
  return supabase.from("cases").insert(data);
};

const updateCase = async (caseId: string, data: Case) => {
  return supabase.from("cases").update(data).eq("id", caseId);
};

const deleteCase = async (caseId: string) => {
  return supabase.from("cases").delete().eq("id", caseId);
};

export { getAllCases, getCase, createCase, updateCase, deleteCase };