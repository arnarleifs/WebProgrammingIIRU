import { Select, FormControl, FormLabel, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface RemoteSelectItemProps {
  label: string;
  value: string;
  name: string;
  onSelect: (value: string) => void;
  defaultOption?: Option;
  getOptions: () => Promise<Option[]>;
  isDisabled?: boolean;
}

export function RemoteSelectItem({
  getOptions,
  isDisabled = false,
  ...props
}: RemoteSelectItemProps) {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    if (isDisabled) {
      return;
    }

    async function getData() {
      setOptions(await getOptions());
    }

    getData();
  }, [getOptions, isDisabled]);

  return (
    <Box marginTop={2} marginBottom={2}>
      <FormControl>
        <FormLabel>{props.label}</FormLabel>
        <Select
          name={props.name}
          isDisabled={isDisabled}
          value={props.value}
          onChange={(e) => props.onSelect(e.target.value)}
        >
          <option value={props.defaultOption?.value}>
            {props.defaultOption?.label}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
