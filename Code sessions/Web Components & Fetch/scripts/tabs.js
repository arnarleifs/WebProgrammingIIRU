const AVAILABLE_TABS = {
  RANDOM_FOOD: "random-food",
  CATEGORIES: "categories",
};

const mapValuesToMap = (meal, filter, mappedKey, mappedList) => {
  Object.entries(meal)
    .filter((meal) => meal[0].includes(filter))
    .forEach((entry) => {
      const [key, value] = entry;
      const number = parseInt(key.replace(filter, ""));
      if (value && value.trim()) {
        mappedList[number] = {
          ...mappedList[number],
          [mappedKey]: value,
        };
      }
    });
};

const mapIngredientsAndMeasures = (meal) => {
  const mappedList = {};
  mapValuesToMap(meal, "strIngredient", "ingredient", mappedList);
  mapValuesToMap(meal, "strMeasure", "measure", mappedList);
  return Object.values(mappedList);
};

document.addEventListener("DOMContentLoaded", () => {
  const renderData = async (url, renderFn) => {
    const response = await fetch(url);
    const json = await response.json();

    const listSection = document.querySelector(".list-section");
    listSection.innerHTML = renderFn(json);
  };

  const randomFoodHtml = (data) => {
    if (data.meals.length === 0) {
      return;
    }

    return data.meals
      .map((meal) => {
        const recipeItems = mapIngredientsAndMeasures(meal);
        return `
        <food-card image-url="${meal.strMealThumb}">
          <div slot="food-title">${meal.strMeal}</div>
          <div slot="food-category">${meal.strCategory}</div>
          <div slot="recipe-items">
            ${recipeItems
              .map((r) => `<li>${r.measure} - ${r.ingredient}</li>`)
              .join("")}
          </div>
          <div slot="food-instructions">${meal.strInstructions
            .split(/\r?\n/)
            .map((instruction) => `<p>${instruction}</p>`)
            .join("")}</div>
        </food-card>
      `;
      })
      .join("");
  };

  const categoryHtml = (data) => {
    if (data.categories.length === 0) {
      return;
    }

    return data.categories
      .map((category) => {
        return `
        <category-card image-url="${category.strCategoryThumb}">
          <div slot="category-title">${category.strCategory}</div>
          <div slot="category-description">${category.strCategoryDescription}</div>
        </category-card>
      `;
      })
      .join("");
  };

  const handleTabClick = async (e) => {
    const link = e.target.dataset.link;
    switch (link) {
      case AVAILABLE_TABS.RANDOM_FOOD:
        return await renderData(
          "https://www.themealdb.com/api/json/v1/1/random.php",
          randomFoodHtml
        );
      case AVAILABLE_TABS.CATEGORIES:
        return await renderData(
          "https://www.themealdb.com/api/json/v1/1/categories.php",
          categoryHtml
        );
    }
  };

  const registerTabLinks = () => {
    document.querySelectorAll(".tab-link").forEach((elem) => {
      elem.addEventListener("click", handleTabClick);
    });
  };

  registerTabLinks();
});
