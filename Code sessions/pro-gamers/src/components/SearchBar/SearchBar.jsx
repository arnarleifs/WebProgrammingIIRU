import { TextField } from "@mui/material";

export const SearchBar = ({
  value,
  onChange
}) => {
  return (
    <TextField
      id="search-bar"
      label="Search"
      variant="outlined"
      value={value}
      onChange={e => onChange(e.target.value)} />
  );
};