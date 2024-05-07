import { useEffect, useState } from "react";
import Recipe from "../components/home-page-recipe/Recipe";

export default function FavouritesPage() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setFavourites(savedRecipes);
  }, []);

  return (
    <div>
      {favourites.map((recipe) => {
        return <Recipe key={recipe.id} recipeData={recipe} />;
      })}
    </div>
  );
}
