import restaurants from "@hungry-hippo/data/restaurants.json";
import { useState } from "react";
import type { CartItem, MenuItem, Restaurant } from "@hungry-hippo/types";
import Header from "@hungry-hippo/components/header";
import CategoryFilter from "@hungry-hippo/components/category-filter";
import MenuList from "@hungry-hippo/components/menu-list";
import CartFooter from "@hungry-hippo/components/cart-footer";

function RestaurantDetails() {
  const restaurantEntry = restaurants.find(
    (r) => r.name === "McDonald's",
  ) as Restaurant;

  const [restaurant, setRestaurant] = useState<Restaurant>(restaurantEntry);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    restaurant.categories[0],
  );
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const visibleMenuItems = restaurant.menuItems.filter(
    (item) => item.category === selectedCategory,
  );

  function handleAdd(item: MenuItem) {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }

  function handleRemove(item: MenuItem) {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing && existing.quantity > 1) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i,
        );
      }
      return prev.filter((i) => i.id !== item.id);
    });
  }

  function onToggleFavorite() {
    setRestaurant((prev) => ({ ...prev, isFavorite: !prev.isFavorite }));
  }

  return (
    <div className="max-w-2xl mx-auto bg-white min-h-screen pb-24">
      <Header restaurant={restaurant} onToggleFavorite={onToggleFavorite} />

      <CategoryFilter
        categories={restaurant.categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <MenuList
        menuItems={visibleMenuItems}
        cartItems={cartItems}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />

      {cartItems.length > 0 && <CartFooter cartItems={cartItems} />}
    </div>
  );
}

export default RestaurantDetails;
