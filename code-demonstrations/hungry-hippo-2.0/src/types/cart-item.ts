import type { MenuItem } from "./menu-item";

export interface CartItem extends MenuItem {
  quantity: number;
}
