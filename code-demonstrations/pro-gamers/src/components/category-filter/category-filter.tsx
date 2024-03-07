import { RadioGroup, Stack, Radio } from "@chakra-ui/react";
import { NewsCategory } from "../../types/news";

interface CategoryFilterProps {
  setCategoryFilter: React.Dispatch<React.SetStateAction<NewsCategory>>;
  categoryFilter: NewsCategory;
}

export function CategoryFilter(props: CategoryFilterProps) {
  return (
    <RadioGroup
      onChange={(category) => props.setCategoryFilter(category as NewsCategory)}
      value={props.categoryFilter}
      marginBottom={5}
    >
      <Stack spacing={4} direction="row">
        <Radio value={NewsCategory.World}>World</Radio>
        <Radio value={NewsCategory.Financial}>Financial</Radio>
        <Radio value={NewsCategory.Technology}>Technology</Radio>
      </Stack>
    </RadioGroup>
  );
}
