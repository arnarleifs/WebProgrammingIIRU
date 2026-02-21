import type { MenuItem as IMenuItem } from "@hungry-hippo/types";
import MenuItem from "./menu-item";
import { memo } from "react";

interface MenuListProps {
  menuItems: IMenuItem[];
}

const MenuListComponent = memo(function MenuList({ menuItems }: MenuListProps) {
  console.log("Rendering MenuList");
  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold">Menu</h2>

      <div className="grid gap-6">
        {menuItems.map((item) => {
          return <MenuItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
});

export default MenuListComponent;
