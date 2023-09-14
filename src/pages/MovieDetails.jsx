import {
  Grid,
  GridItem,
  HStack,
  Show,
  Text,
  Box,
  Badge,
  AspectRatio,
  Image,
} from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import SideBar from "../components/SideBar";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";

const MovieDetails = () => {
  const { id } = useParams();
  const { data } = useMovieDetails(id);
  console.log(data);
  document.body.style.backgroundColor = "white";
  if (!data) return null;
  return (
    <Box height="100vh">
      <Grid
        textColor="black"
        templateAreas={{ base: `"main"`, lg: `"sideBar main"` }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <Show above="lg">
          <GridItem area="sideBar" border="1px" borderRightRadius="40px">
            <SideBar />
          </GridItem>
        </Show>

        <GridItem area="main" padding="20px">
          <Box>
            {data.video ? (
              <AspectRatio width="100%" ratio={2}>
                <iframe
                  title={data.original_title}
                  src={data.video}
                  allowFullScreen
                />
              </AspectRatio>
            ) : (
              <AspectRatio width="100%" ratio={1}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                />
              </AspectRatio>
            )}
            <HStack marginTop="10px" marginBottom="10px">
              <Text as="h4" fontWeight="bold" data-testid:movie-title>
                {data.original_title}
              </Text>
              <BsDot />
              <Text data-testid:movie-release-date>
                {new Date(data.release_date).toUTCString()}
              </Text>
              <BsDot />
              <Text data-testid:movie-runtime>{data.runtime}mins</Text>
              <BsDot />
              {data.genres.map((genre) => (
                <Badge textColor="red.400" key={genre.id}>
                  {genre.name}
                </Badge>
              ))}
            </HStack>
            <Text as="p" data-testid:movie-overview>
              {data.overview}
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default MovieDetails;
