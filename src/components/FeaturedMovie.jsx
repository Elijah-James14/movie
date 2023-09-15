import { Box, Image, Button } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";

const FeaturedMovie = () => {
  const { data, isError } = useMovies();
  if (!data) return null;
  const value = data.results[Math.floor(Math.random() * data.results.length)];
  if (isError) return <Text>There is something wrong.</Text>;

  return (
    <>
      <Box marginBottom="20px" padding="20px" position={"relative"}>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${value.poster_path}`}
          width="100vw"
          height="500px"
          objectFit="fill"
        />
        <Box position="absolute" top="50%" left="70px" textAlign={"left"}>
          <Link to={"/movies/" + value.id}>
            {" "}
            <Button
              variant={"solid"}
              backgroundColor="red.600"
              _hover={{ backgroundColor: "red" }}
              textColor="white"
              leftIcon={<AiFillPlayCircle />}
            >
              Watch Trailer
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default FeaturedMovie;
