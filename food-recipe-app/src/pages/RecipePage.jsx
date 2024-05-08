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

  function convertMinutesToHoursAndMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  }

  return (
    <section className="recipe-page">
      <article>
        <img
          className="w-full rounded-xl"
          src={recipeData.image_url}
          alt={recipeData.title}
        />
      </article>
      <article className="flex flex-col gap-4">
        <div className="header">
          <p className="text-blue-600">{recipeData.publisher}</p>
          <h1>{recipeData.title}</h1>
        </div>
        {addedToFavourites ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleRemoveFavourite}
            className="btn favourite-btn"
          >
            Remove from favourites
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddFavourite}
            className="btn favourite-btn"
          >
            Add to favourites
          </Button>
        )}
        {recipeData.servings ? <h3>Servings : {recipeData.servings}</h3> : ""}
        {recipeData.cooking_time ? (
          <h3>
            Cooking Time:{" "}
            {convertMinutesToHoursAndMinutes(recipeData.cooking_time)}
          </h3>
        ) : (
          ""
        )}
        <div className="ingredients">
          <h3>Ingredients:</h3>
          <ul>
            {recipeData.ingredients
              ? recipeData.ingredients.map((ingredient, index) => {
                  return (
                    <li key={index}>
                      {`
                  ${ingredient.quantity ? ingredient.quantity : ""}
                  ${ingredient.unit ? ingredient.unit : ""}
                  ${ingredient.description}
                  `}
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </article>
    </section>
  );
}
