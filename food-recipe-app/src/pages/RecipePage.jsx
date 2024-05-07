import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchRecipe from "../api/fetchRecipe";
import { Button } from "@mui/material";

export default function RecipePage() {
  const [recipeData, setRecipeData] = useState({});
  const [addedToFavourites, setAddedToFavourites] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchRecipe(id).then((data) => {
      setRecipeData(data.data.recipe);
    });
    checkIfAddedFavourite();
  }, [id]);

  function handleAddFavourite() {
    setAddedToFavourites(true);
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const updatedRecipes = [...savedRecipes, recipeData];
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  }

  function handleRemoveFavourite() {
    setAddedToFavourites(false);
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const updatedRecipes = savedRecipes.filter((recipe) => recipe.id !== id);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  }

  function checkIfAddedFavourite() {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const foundRecipe = savedRecipes.find((recipe) => recipe.id === id);
    if (foundRecipe) {
      setAddedToFavourites(true);
    }
  }

  return (
    <section className="recipe">
      <article>
        <img src={recipeData.image_url} alt={recipeData.title} />
      </article>
      <article>
        <h3>{recipeData.publisher}</h3>
        <h1>{recipeData.title}</h1>
        {addedToFavourites ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleRemoveFavourite}
          >
            Remove from favourites
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddFavourite}
          >
            Add to favourites
          </Button>
        )}
        <h2>Ingredients:</h2>
        <ul>
          {recipeData.ingredients
            ? recipeData.ingredients.map((ingredient, index) => {
                return (
                  <li key={index}>
                    {`
                  ${ingredient.quantity}
                  ${ingredient.unit}
                  ${ingredient.description}
                  `}
                  </li>
                );
              })
            : null}
        </ul>
      </article>
    </section>
  );
}
