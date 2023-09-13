import { SimpleGrid, Spinner } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import useMovies from "../hooks/useMovies";

const MovieGrid = () => {
  const { data, isLoading, error } = useMovies();
  console.log(data);

  if (!data) return null;
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing="30px"
        padding="20px"
      >
        {isLoading && <Spinner />}
        {data.results.splice(0, 11).map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
