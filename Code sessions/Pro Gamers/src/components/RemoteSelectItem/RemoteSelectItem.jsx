import { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export const RemoteSelectItem = ({
  label,
  value,
  name,
  onSelect,
  defaultOption,
  getOptions,
  isDisabled,
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isDisabled) {
      return;
    }
    async function getData() {
      setData(await getOptions());
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
          defaultValue={defaultOption}
        >
          {data?.map((d) => (
            <MenuItem key={d.value} value={d.value}>
              {d.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
