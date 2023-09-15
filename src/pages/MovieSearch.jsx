import { SimpleGrid, Heading, Box, Text } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../components/MovieCardSkeleton";

const MovieSearch = () => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data, isLoading, isError } = useSearch(queryTerm);

  const skeletons = [1, 2, 3, 4, 5, 6];

  document.body.style.backgroundColor = "white";

  if (!data) return null;

  if (isError) return <Text>There is something wrong somewhere</Text>;

  return (
    <>
      <Heading>{`You searched for ${queryTerm}`}</Heading>

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing="10px"
        padding="20px"
      >
        {isLoading &&
          skeletons.map((s) => {
            return <MovieCardSkeleton key={s} />;
          })}
        {data.results.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default MovieSearch;
