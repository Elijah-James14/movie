import { SimpleGrid, Spinner } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import useMovies from "../hooks/useMovies";

const MovieGrid = () => {
  const { data, isLoading, isError } = useMovies();

  const skeletons = [1, 2, 3, 4, 5, 6];

  if (!data) return null;

  if (isError) return <Text>There is something wrong</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing="30px"
        padding="20px"
      >
        {isLoading &&
          skeletons.map((s) => {
            return <MovieCardSkeleton key={s} />;
          })}

        {data.results.slice(0, 10).map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
