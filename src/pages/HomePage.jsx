import { AiFillPlayCircle } from "react-icons/ai";
import MovieGrid from "../components/MovieGrid";
import {
  HStack,
  Heading,
  Grid,
  GridItem,
  Box,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import useMovies from "../hooks/useMovies";
import { Link } from "react-router-dom";
const HomePage = () => {
  document.body.style.backgroundColor = "white";

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
          height="300px"
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
      <Grid
        templateAreas={{ base: `"main"`, lg: `"featured main"` }}
        templateRows={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area="main">
          <HStack
            textColor={"black"}
            justifyContent="space-between"
            padding="10px"
          >
            <Heading fontSize={"2xl"}>Featured Movie</Heading>
            <HStack cursor="pointer">
              <Heading fontSize={"md"} textColor={"red.600"}>
                See more
              </Heading>
              <ChevronRightIcon color="red.600" />
            </HStack>
          </HStack>
          <MovieGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
