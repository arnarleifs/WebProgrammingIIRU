import { Search2Icon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

interface SearchBarProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
}

export function SearchBar(props: SearchBarProps) {
  return (
    <InputGroup marginBottom={5}>
      <InputLeftElement pointerEvents="none">
        <Search2Icon />
      </InputLeftElement>
      <Input
        value={props.searchValue}
        onChange={(e) => props.setSearchValue(e.target.value)}
        type="search"
        placeholder="Enter news title.."
      />
    </InputGroup>
  );
}
