import { getAllCases } from "~/service/supabase/cases.service";
import { useQuery, UseQueryResult } from "react-query";

const getCases = async () => {
  const { data, error } = await getAllCases();
  if (error) {
    console.log(error.message);
  }
  return data;
};

function useGetCases() {
  return useQuery(
    {
      queryKey: "cases",
      queryFn: getCases,
      refetchOnWindowFocus: true,
      staleTime: 1000 * 60 * 5
    });
}

export default useGetCases;
