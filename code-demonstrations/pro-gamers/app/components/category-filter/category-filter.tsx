import { HStack } from "@chakra-ui/react"
import { Radio, RadioGroup } from "@/components/ui/radio"

interface CategoryFilterProps {
    category: string;
    setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export function CategoryFilter(props: CategoryFilterProps) {
    return (
        <RadioGroup defaultValue="" value={props.category} marginBottom={5} onValueChange={details => props.setCategory(details.value)}>
            <HStack gap="6">
                <Radio value="">All</Radio>
                <Radio value="world">World</Radio>
                <Radio value="financial">Financial</Radio>
                <Radio value="technology">Technology</Radio>
            </HStack>
        </RadioGroup>
    )
}