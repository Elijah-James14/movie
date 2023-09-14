import {
  ListIcon,
  ListItem,
  UnorderedList,
  HStack,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { PiMonitorPlayLight } from "react-icons/pi";
import { BsCalendar3 } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";

const SideBar = () => {
  return (
    <Box>
      <UnorderedList spacing={"30px"}>
        <ListItem listStyleType={"none"} fontSize={"xl"}>
          <HStack>
            <GoHome />
            <Text>Home</Text>
          </HStack>
        </ListItem>
        <ListItem
          backgroundColor="red.100"
          borderRight={"4px"}
          borderRightColor="red.600"
          listStyleType={"none"}
          fontSize={"xl"}
        >
          <HStack>
            <BiCameraMovie />
            <Text>Movies</Text>
          </HStack>
        </ListItem>
        <ListItem listStyleType={"none"} fontSize={"xl"}>
          <HStack>
            <PiMonitorPlayLight />
            <Text>TV Series</Text>
          </HStack>
        </ListItem>
        <ListItem listStyleType={"none"} fontSize={"xl"}>
          <HStack>
            <BsCalendar3 />
            <Text>Upcoming</Text>
          </HStack>
        </ListItem>
      </UnorderedList>
      <Box
        marginLeft="20px"
        padding={"5px"}
        border="1px"
        borderRadius="10px"
        borderColor="red.400"
        backgroundColor="red.50"
        width="140px"
        marginTop={"50px"}
        fontSize="sm"
      >
        <Text textAlign={"left"} fontWeight="bold">
          Play movie quizzes and earn free tickets
        </Text>
        <Text textAlign={"left"} marginTop="10px">
          50k people are playing now
        </Text>
        <Button
          backgroundColor="red.100"
          textColor="red.400"
          marginTop="10px"
          fontSize="sm"
          padding="10px"
          width="85px"
          textAlign="center"
        >
          Start Playing
        </Button>
      </Box>
      <UnorderedList marginTop="20px">
        <ListItem listStyleType={"none"} fontSize={"xl"}>
          <HStack>
            <TbLogout />
            <Text>Log Out</Text>
          </HStack>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default SideBar;
