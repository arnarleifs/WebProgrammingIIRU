import type { Restaurant } from "@hungry-hippo/types/restaurant";
import Icon from "@hungry-hippo/ui/icon";
import IconToggle from "@hungry-hippo/ui/icon-toggle";

interface HeaderProps {
  restaurant: Restaurant;
  onToggleFavorite: () => void;
}

export default function Header({ restaurant, onToggleFavorite }: HeaderProps) {
  return (
    <header className="p-4 bg-white shadow-sm sticky top-0 z-10">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {restaurant.name}
          </h1>

          <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
            <span className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded">
              <Icon name="star" /> {restaurant.rating}
            </span>
            <span>•</span>
            <span>{restaurant.categories.join(", ")}</span>
          </div>
        </div>

        <IconToggle
          icon="heart"
          isToggled={restaurant.isFavorite}
          onToggle={onToggleFavorite}
        />
      </div>
    </header>
  );
}
