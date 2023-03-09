import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import { useEffect, useState } from "react";

export const RemoteSelectItem = ({
  label,
  value,
  name,
  onSelect,
  defaultOption,
  getOptions,
  isDisabled,
}) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (isDisabled) {
      return;
    }

    async function getData() {
      setOptions(await getOptions());
    }

    getData();
  }, [isDisabled, getOptions]);

  return (
    <Box marginTop={2} marginBottom={2}>
      <FormControl fullWidth>
        <InputLabel id={`${name}-label`}>{label}</InputLabel>
        <Select
          labelId={`${name}-label`}
          id={name}
          value={value}
          label={label}
          onChange={(e) => onSelect(e.target.value)}
          disabled={isDisabled}
        >
          {options?.map((o) => (
            <MenuItem key={o.value} value={o.value}>
              {o.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
