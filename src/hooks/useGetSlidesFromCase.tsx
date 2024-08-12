import { getSlideFromCase } from "~/service/supabase/slides.service";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import AdminContext from "~/pages/admin/context/AdminContext";

const getSlides = async () => {
  const { currentId } = useContext(AdminContext);
  const { data, error } = await getSlideFromCase(currentId);
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

function useGetSlidesFromCase() {
  return useQuery({
    queryKey: ["slidesFromCase"],
    queryFn: getSlides,
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 5,
  });
}

export default useGetSlidesFromCase;
