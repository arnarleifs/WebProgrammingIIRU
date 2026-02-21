import restaurants from "@hungry-hippo/data/restaurants.json";
import { useEffect, useMemo, useState } from "react";
import type { Restaurant } from "@hungry-hippo/types";
import Header from "@hungry-hippo/components/header";
import CategoryFilter from "@hungry-hippo/components/category-filter";
import MenuList from "@hungry-hippo/components/menu-list";
import CartFooter from "@hungry-hippo/components/cart-footer";
import Spinner from "./ui/spinner";

const restaurantEntry = restaurants.find(
  (r) => r.name === "McDonald's",
) as Restaurant;

function RestaurantDetails() {
  const [isLoadingRestaurant, setIsLoadingRestaurant] = useState(true);
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [selectedCategory, setSelectedCategory] = useState<string>();

  useEffect(() => {
    async function fetchRestaurant() {
      const restaurantPromise = new Promise<Restaurant>((resolve) => {
        setTimeout(() => {
          resolve(restaurantEntry);
          setIsLoadingRestaurant(false);
        }, 2000);
      });

      const result = await restaurantPromise;
      setRestaurant(result);
      setSelectedCategory(result.categories[0]);
      setIsLoadingRestaurant(false);
    }

    fetchRestaurant();
  }, []);

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
