import { useMemo, useState } from "react";
import Header from "@hungry-hippo/components/header";
import CategoryFilter from "@hungry-hippo/components/category-filter";
import MenuList from "@hungry-hippo/components/menu-list";
import CartFooter from "@hungry-hippo/components/cart-footer";
import Spinner from "./ui/spinner";
import { useRestaurant } from "./hooks/use-restaurant";

function RestaurantDetails() {
  const [selectedCategory, setSelectedCategory] = useState<string>();

  const { restaurant, isLoadingRestaurant, setRestaurant } = useRestaurant(
    (restaurant) => {
      setSelectedCategory(restaurant.categories[0]);
    },
  );

  const visibleMenuItems = useMemo(
    () =>
      restaurant?.menuItems.filter(
        (item) => item.category === selectedCategory,
      ),
    [selectedCategory, restaurant?.menuItems],
  );

  function onToggleFavorite() {
    setRestaurant((prev) => {
      if (!prev) {
        return prev;
      }
      return { ...prev, isFavorite: !prev.isFavorite };
    });
  }

  return (
    <div className="max-w-2xl mx-auto bg-white min-h-screen pb-24">
      {isLoadingRestaurant ? (
        <Spinner />
      ) : (
        <>
          <Header
            restaurant={restaurant!}
            onToggleFavorite={onToggleFavorite}
          />
          <CategoryFilter
            categories={restaurant!.categories}
            selectedCategory={selectedCategory!}
            onSelectCategory={setSelectedCategory}
          />
          <MenuList menuItems={visibleMenuItems ?? []} />
          <CartFooter />
        </>
      )}
    </div>
  );
}

export default RestaurantDetails;
