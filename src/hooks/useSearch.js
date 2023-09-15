import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
const apiClient = new APIClient("/search/movie");
const useSearch = (searchTerm) => {
  return useQuery({
    queryKey: ["searches", searchTerm],
    queryFn: () =>
      apiClient.getMovies({
        params: {
          query: searchTerm,
        },
      }),
    staleTime: 24 * 60 * 60,
  });
};

export default useSearch;
