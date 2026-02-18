import type { MenuItem as IMenuItem } from "@hungry-hippo/types";
import Button from "@hungry-hippo/ui/button";

interface MenuItemProps {
  item: IMenuItem;
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
}

export default function MenuItem({
  item,
  quantity,
  onAdd,
  onRemove,
}: MenuItemProps) {
  return (
    <div className="flex gap-4 border border-gray-100 p-4 rounded-xl shadow-sm bg-white">
      <div className="flex-1">
        <h3 className="font-bold text-lg">{item.title}</h3>
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
          {item.description}
        </p>
        <p className="mt-3 font-medium">{item.price} kr.</p>
      </div>

      <div className="flex flex-col items-end justify-between gap-4">
        {item.imageUrl && (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-28 h-24 object-contain rounded-lg bg-white"
          />
        )}

        {quantity === 0 ? (
          <Button size="small" variant="secondary" onClick={onAdd}>
            Add +
          </Button>
        ) : (
          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
            <Button
              size="small"
              variant="secondary"
              onClick={onRemove}
              icon="minus"
            ></Button>
            <span className="font-bold text-sm w-4 text-center">
              {quantity}
            </span>
            <Button
              size="small"
              variant="primary"
              onClick={onAdd}
              icon="plus"
            ></Button>
          </div>
        )}
      </div>
    </div>
  );
}
