import MovieGrid from "../components/MovieGrid";
import { HStack, Heading, Grid, GridItem } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import FeaturedMovie from "../components/FeaturedMovie";
const HomePage = () => {
  document.body.style.backgroundColor = "white";

  return (
    <>
      <Grid
        templateAreas={`"featured" "main"`}
        templateColumns={`"500px""1fr"`}
      >
        <GridItem area="featured">
          <FeaturedMovie />
        </GridItem>
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
