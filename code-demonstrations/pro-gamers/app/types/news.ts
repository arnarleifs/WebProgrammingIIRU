export enum NewsCategory {
    World = "world",
    News = "news",
    Technology = "technology"
}

export interface News {
    id: number;
    title: string;
    shortDescription: string;
    longDescription: string;
    category: NewsCategory;
}