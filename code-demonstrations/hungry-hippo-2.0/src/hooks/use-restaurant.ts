import restaurants from "@hungry-hippo/data/restaurants.json";
import type { Restaurant } from "@hungry-hippo/types";
import { useEffect, useState } from "react";

const restaurantEntry = restaurants.find(
  (r) => r.name === "McDonald's",
) as Restaurant;

export function useRestaurant(onPostFetch?: (restaurant: Restaurant) => void) {
  const [isLoadingRestaurant, setIsLoadingRestaurant] = useState(true);
  const [restaurant, setRestaurant] = useState<Restaurant>();

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
      setIsLoadingRestaurant(false);

      onPostFetch?.(result);
    }

    fetchRestaurant();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { restaurant, setRestaurant, isLoadingRestaurant };
}
