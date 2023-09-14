import {
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const searchInput = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.current) {
      navigate(`search/movie?q=${searchInput.current.value}`);
      searchInput.current.value = "";
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputRightElement children={<BsSearch color="black" />} />
        <Input
          textColor="black"
          placeholder="What do you want to watch?"
          _placeholder={{ textColor: "black" }}
          borderColor={"black"}
          variant={"outline"}
          ref={searchInput}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
