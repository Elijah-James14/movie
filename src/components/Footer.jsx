import {
  Center,
  HStack,
  Heading,
  Box,
  Text,
  Stack,
  VStack,
} from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineCopyright,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Center width="100vw" height="50px" padding="30px">
      <VStack>
        <Box>
          <HStack spacing={"20px"}>
            <AiFillFacebook />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
            <AiFillYoutube />
          </HStack>
        </Box>
        <Box>
          <HStack
            justifyContent={"space-between"}
            spacing={"20px"}
            fontWeight="bold"
          >
            <Text fontSize={"span"}>Conditions of Use</Text>
            <Text as={"span"} fontSize={"md"}>
              Privacy & Policy
            </Text>
            <Text as={"span"} fontSize={"md"}>
              Press Room
            </Text>
          </HStack>
        </Box>
        <Box>
          <HStack>
            <AiOutlineCopyright /> <Text>2023 MovieBox by Elijah James </Text>
          </HStack>
        </Box>
      </VStack>
    </Center>
  );
};

export default Footer;
