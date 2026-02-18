import type { MenuItem } from "./menu-item";

export interface Restaurant {
  name: string;
  rating: number;
  categories: string[];
  menuItems: MenuItem[];
  isFavorite: boolean;
}
