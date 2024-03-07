export enum NewsCategory {
  World = "world",
  Financial = "financial",
  Technology = "technology",
}

export interface News {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: NewsCategory;
}
