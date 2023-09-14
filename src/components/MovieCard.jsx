import {
  Badge,
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Circle,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const MovieCard = ({ movie }) => {
  const [like, setLike] = useState(false);
  return (
    <>
      <Card data-testid="movie-card" position="relative">
        <Image
          objectFit="cover"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          data-testid="movie-poster"
        />
        <CardBody backgroundColor="white">
          <Badge
            data-testid="movie-release-date"
            textColor="gray.500"
            colorScheme="red"
          >
            {movie.release_date}
          </Badge>
          <Heading data-testid="movie-title" textColor="black">
            <Link to={"/movies/" + movie.id}>{movie.title}</Link>
          </Heading>
          <Circle
            position="absolute"
            top="10px"
            right="10px"
            cursor="pointer"
            size="35px"
            bg="gray.600"
          >
            {like ? (
              <MdOutlineFavorite
                color="red"
                size="30px"
                onClick={() => setLike(false)}
              />
            ) : (
              <MdOutlineFavoriteBorder
                color="gray"
                size="30px"
                onClick={() => setLike(true)}
              />
            )}
          </Circle>
        </CardBody>
      </Card>
    </>
  );
};

export default MovieCard;
