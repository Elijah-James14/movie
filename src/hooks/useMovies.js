import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
const apiClient = new APIClient("/movie/top_rated");
const useMovies = () =>
  useQuery({
    queryKey: ["movies"],
    queryFn: () => apiClient.getMovies(),
    staleTime: 24 * 60 * 60,
  });

export default useMovies;
