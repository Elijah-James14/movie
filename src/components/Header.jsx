import { Circle, HStack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { HiMenuAlt4 } from "react-icons/hi";

const Header = () => {
  return (
    <>
      <HStack
        zIndex="100"
        padding={8}
        justifyContent={"space-between"}
        position={"relative"}
        bg={"transparent"}
      >
        <Link to="/">
          <Heading as="h3" fontSize={"xl"} textColor="black">
            MovieBox
          </Heading>
        </Link>

        <SearchBar />
        <HStack>
          <Heading as="h3" fontSize="md">
            Sign in
          </Heading>
          <Circle size="20px" bg="red.600" color="white" cursor="pointer">
            <HiMenuAlt4 />
          </Circle>
        </HStack>
      </HStack>
    </>
  );
};

export default Header;
