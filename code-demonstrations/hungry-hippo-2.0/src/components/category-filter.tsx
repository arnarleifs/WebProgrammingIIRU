import Button from "@hungry-hippo/ui/button";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-3 p-4 overflow-x-auto border-b bg-white sticky top-[80px] z-10">
      {categories.map((category) => (
        <div key={category} className="flex-shrink-0">
          <Button
            size="small"
            variant={category === selectedCategory ? "primary" : "secondary"}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </Button>
        </div>
      ))}
    </div>
  );
}
