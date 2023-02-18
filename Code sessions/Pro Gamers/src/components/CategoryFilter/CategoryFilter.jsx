import { Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

export const CategoryFilter = ({
  value,
  onChange
}) => (
  <Box>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Category</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <FormControlLabel value="world" control={<Radio />} label="World" />
        <FormControlLabel value="financial" control={<Radio />} label="Financial" />
        <FormControlLabel value="technology" control={<Radio />} label="Technology" />
      </RadioGroup>
    </FormControl>
  </Box>
);