import {
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <form>
      <InputGroup>
        <InputRightElement children={<BsSearch color="black" />} />
        <Input
          textColor="black"
          placeholder="What do you want to watch?"
          _placeholder={{ textColor: "black" }}
          borderColor={"black"}
          variant={"outline"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
