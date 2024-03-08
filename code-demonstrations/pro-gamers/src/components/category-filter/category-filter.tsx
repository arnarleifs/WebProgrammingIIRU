import { RadioGroup, Stack, Radio } from "@chakra-ui/react";
import { NewsCategory } from "../../types/news";
import PropTypes from "prop-types";

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

CategoryFilter.propTypes = {
  // This is a function which is called when the filter is modified
  // to let the parent component know that changes occurred.
  setCategoryFilter: PropTypes.func.isRequired,
  // This is the current selected category filter
  categoryFilter: PropTypes.string.isRequired,
};
