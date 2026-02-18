import type { MenuItem as IMenuItem, CartItem } from "@hungry-hippo/types";
import MenuItem from "./menu-item";

interface MenuListProps {
  menuItems: IMenuItem[];
  cartItems: CartItem[];
  onAdd: (item: IMenuItem) => Promise<void> | void;
  onRemove: (item: IMenuItem) => Promise<void> | void;
}

export default function MenuList({
  menuItems,
  cartItems,
  onAdd,
  onRemove,
}: MenuListProps) {
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold">Menu</h2>

      <div className="grid gap-6">
        {menuItems.map((item) => {
          const quantity =
            cartItems.find((c) => c.id === item.id)?.quantity || 0;

          return (
            <MenuItem
              key={item.id}
              item={item}
              quantity={quantity}
              onAdd={() => onAdd(item)}
              onRemove={() => onRemove(item)}
            />
          );
        })}
      </div>
    </div>
  );
}
