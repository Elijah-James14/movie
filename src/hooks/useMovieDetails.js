import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useMovieDetails = (id) => {
  const apiClient = new APIClient("/movie");
  return useQuery({
    queryKey: ["moviedetails", id],
    queryFn: () => apiClient.getSingleMovie(id),
    staleTime: 24 * 60 * 60,
  });
};
export default useMovieDetails;
