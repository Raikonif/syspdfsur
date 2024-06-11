import { getAllSlidesCases } from "~/service/supabase/slides.service";
import { useQuery } from "@tanstack/react-query";

const getSlides = async () => {
  const { data, error} = await getAllSlidesCases();
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

function useGetSlides(){
  return useQuery(
    {
      queryKey: ["slides"],
      queryFn: getSlides,
      refetchOnWindowFocus: true,
      staleTime: 1000 * 60 * 5
    });
}

export default useGetSlides;
