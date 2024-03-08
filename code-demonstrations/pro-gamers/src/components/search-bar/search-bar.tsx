import { Search2Icon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import PropTypes from 'prop-types';

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

SearchBar.propTypes = {
  // This is a function which is called when the search value is modified
  // to let the parent component know that changes occurred.
  setSearchValue: PropTypes.func.isRequired,
  // This is the current search value
  searchValue: PropTypes.string.isRequired,
};