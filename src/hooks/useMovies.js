import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const useMovies = () => {
  const apiClient = new APIClient("/top_rated");
  return useQuery({
    queryKey: ["movies"],
    queryFn: () => apiClient.getMovies(),
    staleTime: 24 * 60 * 60,
  });
};

export default useMovies;
