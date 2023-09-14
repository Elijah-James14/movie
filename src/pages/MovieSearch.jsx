import { SimpleGrid, Heading, Box, Spinner } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import MovieCard from "../components/MovieCard";

const MovieSearch = () => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  console.log(queryTerm);
  const { data, isLoading } = useSearch(queryTerm);
  console.log(data);
  document.body.style.backgroundColor = "white";
  if (!data) return null;
  return (
    <>
      <Heading>{`You searched for ${queryTerm}`}</Heading>

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing="10px"
        padding="20px"
      >
        {isLoading && <Spinner />}
        {data.results.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default MovieSearch;
