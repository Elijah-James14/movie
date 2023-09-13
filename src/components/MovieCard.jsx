import { Badge, Card, CardBody, Image, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <>
      <Card data-testid="movie-card">
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
            <Link>{movie.title}</Link>
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default MovieCard;
