import { Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { InputGroup } from "@/components/ui/input-group"

interface SearchBarProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export function SearchBar(props: SearchBarProps) {
    return (
        <InputGroup
            flex="1"
            width="100%"
            marginBottom={5}
            startElement={<LuSearch />}
        >
            <Input
                placeholder="Search news items"
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)} />
        </InputGroup>
    )
}